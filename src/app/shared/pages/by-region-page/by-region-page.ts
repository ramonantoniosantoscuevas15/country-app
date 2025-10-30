import { Component, signal } from '@angular/core';
import { CountryList } from "../../../country/components/country-list/country-list";
import { Country } from '../../../country/interface/country.interfe';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countries = signal<Country[]>([])
}
