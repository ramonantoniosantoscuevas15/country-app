import { Component, input } from '@angular/core';
import { Country } from '../../interface/country.interfe';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input.required<Country[]>()
}
