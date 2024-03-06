const request = require("request");

const geoCode = (address, callBack) => {
  const geocodeURL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw";

  request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
      callBack("unable to connect geocode service", undefined);
    } else if (response.body.message) {
      callBack(response.body.message, undefined);
    } else if (response.body.features.length == 0) {
      callBack("Unable to find location", undefined);
    } else {
      callBack(undefined, {
        logitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
      });
    }
  });
};

module.exports = geoCode;
