const request = require("request");
const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic3Jpbml2YXNtcCIsImEiOiJja2JtaGs1enYwcDd5MzZyNXBxcTMxNGRtIn0.Dcq8Zrwczmtk4hpsBmOwsQ&limit=1"
    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to location services!")
        } else if (body.features.length === 0) {
            callback("Try another address", undefined);     
        } else {
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                place: body.features[0].place_name
            })
        }
    });
}

module.exports = geocode