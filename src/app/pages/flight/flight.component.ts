import { Component, OnInit } from '@angular/core';
import {Md5} from "md5-typescript";

export interface Information {
  nome: string,
  citta: string,
  address: string,
  telefono: string,
  sito: string
}

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  info: Information[] = []
  notfound: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  async information(iso: string) {
    this.info = []
    this.notfound = ''
    iso = iso.split("◄-►")[0]

    const axios = require('axios');
    
    const options = {
      method: 'GET',
      url: 'https://airport-info.p.rapidapi.com/airport',
      params: { iata: iso },
      headers: {
        'X-RapidAPI-Key': 'a81cb9dc16mshb7ef4ddf742c233p1aac39jsn64af27915a04',
        'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      // Not all information is provide always !!!
      this.info.push({
        nome: response.data.name === null || response.data.name === ''  ? 'Unknow' : response.data.name,
        citta: response.data.location === null || response.data.location === ''  ? 'Unknow' : response.data.location,
        address: (response.data.street === null || response.data.street === ''  ? 'Unknow' : response.data.street) + ' ' +  response.data.street_number,
        telefono: response.data.phone === null || response.data.phone === ''  ? 'Unknow' : response.data.phone,
        sito: response.data.website === null || response.data.website === ''  ? 'Unknow' : response.data.website
      })
    } catch (error) {
      console.log(error)
    }
  }



}
