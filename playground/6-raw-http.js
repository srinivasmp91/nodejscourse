const http = require("http")

const url = "http://api.weatherstack.com/current?access_key=b76f64abd97d0c6ea48c005aa8d3cd52&query=3&units=m";

const request = http.request(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data = data + chunk.toString();
        // console.log(chunk);
    })

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})

request.on("error", (error) => {
    console.log("error", error);
})

request.end();