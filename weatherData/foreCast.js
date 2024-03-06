const request = require("request");

const foreCast = (latitude, logitude, callBack) => {
  const foreCastURL =
    "https://api.weatherapi.com/v1/current.json?key=249efdaf4cdb4f75a0e155203240203&q=" +
    latitude +
    "," +
    logitude;

  request({ url: foreCastURL, json: true }, (error, response) => {
    if (error) {
      callBack("Unable to connect weather api", undefined);
    } else if (response.body.error) {
      callBack(response.body.error.message, undefined);
    } else {
      // console.log(response.body);
      callBack(
        undefined,
        "your location is " +
          response.body.location.name +
          "and it is " +
          response.body.current.condition.text +
          "\ntemp : " +
          response.body.current.temp_c
      );
    }
  });
};

module.exports = foreCast;
