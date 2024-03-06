const request = require("request");
const foreCast = require("../weatherData/foreCast");
const geoCode = require("../weatherData/geoCode");

const country = process.argv[2];

geoCode(country, (error, data) => {
  console.log("ERROR : ", error);
  console.log("DATA : ", data);

  foreCast(data.latitude, data.logitude, (error, data) => {
    console.log("ERROR : ", error);
    console.log("DATA : ", data);
  });
});