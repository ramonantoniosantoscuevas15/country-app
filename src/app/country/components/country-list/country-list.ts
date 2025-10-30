import { Component, input } from '@angular/core';
import { Country } from '../../interface/country.interfe';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe,RouterLink],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input.required<Country[]>()

  errorMesage = input<string|unknown|null>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)
}
