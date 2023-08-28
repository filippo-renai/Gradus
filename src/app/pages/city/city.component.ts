import { Component, OnInit } from '@angular/core';
import { MainComponent, Uni } from '../main/main.component';
import { FlightComponent, InformationFlight } from '../flight/flight.component';


export interface Weather {
  temp: string,
  per: string,
  humidity: string,
  condition: string
}

export interface City {
  name: string,
  region: string,
  closeAirport: InformationFlight[],
  university: Uni[],
  tempo: Weather[]
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  // api -> https://rapidapi.com/MeteosourceWeather/api/ai-weather-by-meteosource
  main: MainComponent = new MainComponent()
  flight: FlightComponent = new FlightComponent()
  city: City[] = [];

  constructor() { }

  ngOnInit(): void {
  }



  async information(cittaCerca: string): Promise<void> {
    const axios = require('axios');

    this.city = []
    if (cittaCerca === '' || Number.isNaN(cittaCerca)) {
      alert("Error!\nBe sure to make a correct search")
      return;
    }
    let uni = await this.main.filterInformation(cittaCerca)
    let air = await this.flight.searchAirport(cittaCerca)

    if(uni.length === 0 && air.length === 0){
      alert("I'm sorry but this city have 0 universities and 0 airports!")
      return;
    }
    let weather: Weather[] = []

    try {
      let placeId = ''
      const response = await axios.request({
        method: 'GET',
        url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
        params: {
          text: cittaCerca.toLowerCase(),
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': 'a81cb9dc16mshb7ef4ddf742c233p1aac39jsn64af27915a04',
          'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
      });

      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].country === 'Italy') {
          placeId = response.data[i].place_id
        }
      }

      if (placeId !== '') {
        const response2 = await axios.request({
          method: 'GET',
          url: 'https://ai-weather-by-meteosource.p.rapidapi.com/current',
          params: {
            place_id: placeId,
            timezone: 'auto',
            language: 'en',
            units: 'auto'
          },
          headers: {
            'X-RapidAPI-Key': 'a81cb9dc16mshb7ef4ddf742c233p1aac39jsn64af27915a04',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
          }
        });

        weather.push({
          temp: response2.data.current.temperature.toString(),
          per: response2.data.current.feels_like.toString(),
          humidity: response2.data.current.humidity.toString(),
          condition: response2.data.current.summary.toLowerCase()
        })


      }

    } catch (error) {
      weather = []
    }




    this.city.push({
      name: cittaCerca,
      region: uni.length === 0 ? 'Center' : uni[0].region,
      closeAirport: air,
      university: uni,
      tempo: weather
    })



  }

}
