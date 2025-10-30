import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../../country/components/search-input/search-input";
import { CountryList } from "../../../country/components/country-list/country-list";
import { Country } from '../../../country/interface/country.interfe';
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../../country/services/country';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countries = signal<Country[]>([])
  countryService = inject(CountryService)
  query = signal('')

  countryResource = rxResource({
    params: this.query,
    stream: ({ params }) => {
      if (!params) return of([])
      return this.countryService.searchByCountry(params)
    }
  })

  /* countryService = inject(CountryService)
  query = signal('')

  countryResource = resource({
    params: () => ({query: this.query()}),
    loader: async({ params})=>{
      if(!params.query) return[];

      return await firstValueFrom(
        this.countryService.searchByCountry(params.query)
      )

    }
  }) */



}
