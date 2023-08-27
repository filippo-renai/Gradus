import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  risultato: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  async calculate(valore: string, valuta: string): Promise<void> {
    if (valore === '')
      return;

    let val = +valore
    if (Number.isNaN(val))
      return

    if (valuta === '₺') valuta = 'TRY'
    if (valuta === '$') valuta = 'USD'
    if (valuta === '¥') valuta = 'CNY'
    if (valuta === '£') valuta = 'GBP'

    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://currency23.p.rapidapi.com/exchange',
      params: {
        base: valuta,
        to: 'EUR',
        int: val.toString()
      },
      headers: {
        'X-RapidAPI-Key': 'a81cb9dc16mshb7ef4ddf742c233p1aac39jsn64af27915a04',
        'X-RapidAPI-Host': 'currency23.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      this.risultato = response.data.result.data[0].calculatedstr
    } catch (error) {
      console.error(error);
    }

  }

}
