"use strict";
const api_key = "02c823621fb16eb52bdbd6877b2e940b";
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
