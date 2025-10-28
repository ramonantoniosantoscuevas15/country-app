import { Routes } from '@angular/router';

import { CountryLayout } from './layouts/CountryLayout/CountryLayout';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCountryPage } from '../shared/pages/by-country-page/by-country-page';
import { ByRegionPage } from '../shared/pages/by-region-page/by-region-page';
import { CountryPage } from '../shared/pages/country-page/country-page';


export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage
      },
      //by countrypage
      {
        path:'by-country',
        component: ByCountryPage
      },
      //by regionpage
      {
        path:'by-region',
        component: ByRegionPage
      },
      //country page
      {
        path:'by/:code',
        component: CountryPage

      },
      {
        path: '**',
        redirectTo: 'by-capital'
      },
    ],


  },

  //{
  //path: 'country',
  //},


];

export default countryRoutes;
