import { Component, signal } from '@angular/core';
import { SearchInput } from "../../../country/components/search-input/search-input";
import { CountryList } from "../../../country/components/country-list/country-list";
import { Country } from '../../../country/interface/country.interfe';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countries = signal<Country[]>([])

}
