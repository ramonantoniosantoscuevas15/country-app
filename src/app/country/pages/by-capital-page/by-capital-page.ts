import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country';
import { Country } from '../../interface/country.interfe';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(CountryService)
  isLoading = signal(false)
  isError = signal<String | null>(null)
  countries = signal<Country[]>([])
  onSearch(query: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true)
    this.isError.set(null)
    this.countryService.searchByCapital(query)
    .subscribe(countries => {
      this.isLoading.set(false)
      this.countries.set(countries)


    })


  }
}
