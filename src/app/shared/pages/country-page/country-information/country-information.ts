
import { Component, input } from '@angular/core';
import { Country } from '../../../../country/interface/country.interfe';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
})
export class CountryInformation {
  country = input.required<Country>()
}
