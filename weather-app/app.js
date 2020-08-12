const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
  console.log("Please enter city name");
} else {
    geocode(address, (error, {latitude, longitude, place}) => {
      if (error) {
        return console.log(error);
      }
      forecast(latitude, longitude, (error, {desc, temperature}) => {
        if (error) {
          return console.log(error);
        }

        console.log({
          lat: latitude,
          long: longitude,
          city: place,
          desc: desc,
          temp: temperature
        });
      });
  });
}

