"use strict";
const api_key = "0303134f7e116f19a86332e597206159";
const imageBaseURL = "https://image.tmdb.org/t/p/";

/**
 * fetch data from a server using the 'url' and passes the result in JSON data to a callback function, along with an optional parameter if has 'optionalParam'
 */
const fetchDataFromServer = (url, callback, optionalParam) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(data, optionalParam);
    });
};

export { api_key, imageBaseURL, fetchDataFromServer };
