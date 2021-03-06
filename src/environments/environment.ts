// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl :'https://community-open-weather-map.p.rapidapi.com/weather',
  XRapidAPIHeaderLabel:'X-RapidAPI-Host',
  XRapidAPIHeaderValue : 'community-open-weather-map.p.rapidapi.com',
  XRapidAPIKeyHeaderName:'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue :'76c198bd86msh332cd51833b279dp1122b4jsn6f07702c25bd'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
