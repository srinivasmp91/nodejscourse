const path = require("path")
const express = require("express")
// console.log(__dirname)
// console.log(path.join(__dirname, "../public"))

const app = express();
const publicDir = path.join(__dirname, "../public");
app.set("view engine", "hbs")
app.use(express.static(publicDir));

app.get("", (request, response) => {
    response.render("index", {
        title: "Weather app",
        name: "Srinivas Prakash"
    });
})

app.get("/about", (request, response) => {
    response.render("about", {
        title: "About me",
        name: "Srinivas Prakash"
    });
})

app.get("/help", (request, response) => {
    response.render("help", {
        title: "Help page",
        name: "Srinivas Prakash"
    });
})

// app.get("/about", (request, response) => {
//     response.send("<h1>About page</h1>");
// })

app.get("/weather", (request, response) => {
    response.send({forecast: "Its 35 degrees outside", location: "Frankfurt, Germany"});
})

app.listen(3000, () => {
    console.log("Server is up on port 3000");
})