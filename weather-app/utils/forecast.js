const request = require("request");
const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=b76f64abd97d0c6ea48c005aa8d3cd52&query=" + latitude + "," + longitude + "&units=m";
    console.log(url)
    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service");
        } else if (body.success === false) {
            callback("Please input correct latitude and longitude", undefined)
        } else {
            const data = body.current;
            callback(undefined, {
                desc: data.weather_descriptions[0],
                temperature: data.temperature,
                rain: data.precip
            })
        }
    });
}

module.exports = forecast