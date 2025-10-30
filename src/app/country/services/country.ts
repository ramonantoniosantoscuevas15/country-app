import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interface/rest-countries.interfaces';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import type { Country } from '../interface/country.interfe';
import { CountryMapper } from '../mapper/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error => {
          console.log('Error fetching ', error)

          return throwError(() => new Error(`No se encontraron paises con ese query ${query}`))

        })
      )
  }

  searchByCountry(query: string){
    const url = `${API_URL}/name/${query}`
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        //delay(3000),
        catchError(error => {
          console.log('Error fetching ', error)

          return throwError(() => new Error(`No se encontraron paises con ese query ${query}`))

        })
      )
  }

  searchCountryByAlphaCode(code: string){
    const url = `${API_URL}/alpha/${code}`

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        map(countries=> countries.at(0)),
        catchError(error => {
          console.log('Error fetching ', error)

          return throwError(() => new Error(`No se encontraron paises con ese código ${code}`))

        })
      )
  }



}
