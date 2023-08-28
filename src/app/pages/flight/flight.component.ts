import { Component, OnInit } from '@angular/core';
import { Md5 } from "md5-typescript";

export interface InformationFlight {
  nome: string,
  citta: string,
  address: string,
  telefono: string,
  sito: string
}

export interface AirportCity {
  city: string,
  iata: string
}

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  info: InformationFlight[] = []
  cityIata: AirportCity[] = []
  notfound: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  async information(iso: string): Promise<InformationFlight> {
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


    const response = await axios.request(options);
    let inf = {
      nome: response.data.name === null || response.data.name === '' ? 'Unknow' : response.data.name,
      citta: response.data.location === null || response.data.location === '' ? 'Unknow' : response.data.location,
      address: (response.data.street === null || response.data.street === '' ? 'Unknow' : response.data.street) + ' ' + response.data.street_number,
      telefono: response.data.phone === null || response.data.phone === '' ? 'Unknow' : response.data.phone,
      sito: response.data.website === null || response.data.website === '' ? 'Unknow' : response.data.website
    }
    // Not all information is provide always !!!
    this.info.push(inf)
    return inf;

  }

  async searchAirport(citta: string) {

    if (this.cityIata.length === 0)
      this.populationCityAirport();

    let iso = this.cityIata.filter((c) => { return c.city.toLowerCase() === citta.toLowerCase() })
    let ref = []
    for (let i = 0; i < iso.length; i++) {
      let information = await this.information(iso[i].iata)
      if(information.nome === 'Unknow')
        continue;

      ref.push(information)

    }
    return ref;
  }


  populationCityAirport() {
    this.cityIata.push({ iata: 'AHO', city: 'Alghero' })
    this.cityIata.push({ iata: 'AOI', city: 'Ancona' })
    this.cityIata.push({ iata: 'BDS', city: 'Lecce' })
    this.cityIata.push({ iata: 'BGY', city: 'Bergamo' })
    this.cityIata.push({ iata: 'BLQ', city: 'Bologna' })
    this.cityIata.push({ iata: 'BRI', city: 'Bari' })
    this.cityIata.push({ iata: 'BZO', city: 'Bolzano' })
    this.cityIata.push({ iata: 'CAG', city: 'Cagliari' })
    this.cityIata.push({ iata: 'CIA', city: 'Roma' })
    this.cityIata.push({ iata: 'CIY', city: 'Ragusa' })
    this.cityIata.push({ iata: 'CRV', city: 'Crotone' })
    this.cityIata.push({ iata: 'CTA', city: 'Catania' })
    this.cityIata.push({ iata: 'CUF', city: 'Cuneo' })
    this.cityIata.push({ iata: 'FCO', city: 'Roma' })
    this.cityIata.push({ iata: 'FLR', city: 'Firenze' })
    this.cityIata.push({ iata: 'FOG', city: 'Foggia' })
    this.cityIata.push({ iata: 'FRL', city: 'Forli' })
    this.cityIata.push({ iata: 'GOA', city: 'Genova' })
    this.cityIata.push({ iata: 'LIN', city: 'Milano' })
    this.cityIata.push({ iata: 'LMP', city: 'Lampedusa' })
    this.cityIata.push({ iata: 'MXP', city: 'Milano' })
    this.cityIata.push({ iata: 'NAP', city: 'Nap' })
    this.cityIata.push({ iata: 'OLB', city: 'Olbia' })
    this.cityIata.push({ iata: 'PEG', city: 'Perugia' })
    this.cityIata.push({ iata: 'PMF', city: 'Parma' })
    this.cityIata.push({ iata: 'PMO', city: 'Palermo' })
    this.cityIata.push({ iata: 'PNL', city: 'Pantelleria' })
    this.cityIata.push({ iata: 'PSA', city: 'Pisa' })
    this.cityIata.push({ iata: 'PSR', city: 'Pescara' })
    this.cityIata.push({ iata: 'REG', city: 'Reggio di calabria' })
    this.cityIata.push({ iata: 'RMI', city: 'Rimini' })
    this.cityIata.push({ iata: 'SUF', city: 'Lamezia' })
    this.cityIata.push({ iata: 'TPS', city: 'Trapani' })
    this.cityIata.push({ iata: 'TQR', city: 'Tremiti' })
    this.cityIata.push({ iata: 'TRN', city: 'Torino' })
    this.cityIata.push({ iata: 'TRS', city: 'Trieste' })
    this.cityIata.push({ iata: 'TSF', city: 'Treviso' })
    this.cityIata.push({ iata: 'VCE', city: 'Venezia' })
    this.cityIata.push({ iata: 'VRN', city: 'Verona' })
  }


}
