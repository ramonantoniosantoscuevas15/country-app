import type { Country } from "../interface/country.interfe";
import type { RESTCountry } from "../interface/rest-countries.interfaces";

export class CountryMapper{
  static mapRestCountryToCountry( restCountry: RESTCountry): Country{
    return{
      capital:restCountry.capital?.length ? restCountry.capital.join(','):'No consta capital',
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      population: restCountry.population

    }
  }
  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[]{
    return restCountries.map(this.mapRestCountryToCountry)
  }
}
