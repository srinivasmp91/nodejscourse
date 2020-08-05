const request = require("request");
const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=bc0ace8e7fbd56afb4785f3f139bef96&query=" + latitude + "," + longitude + "&units=f";
    console.log(url)
    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service");
        } else if (response.body.success === false) {
            callback("Please input correct latitude and longitude", undefined)
        } else {
            const data = response.body.current;
            callback(undefined, {
                desc: data.weather_descriptions[0],
                temperature: data.temperature,
                rain: data.precip
            })
        }
    });
}

module.exports = forecast