import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) =>{
    res.send("Siemka jestes na glownej stronie!");
})

app.get("/about", (req, res) =>{
    res.send("<h1>About ME!</h1><p>my name is Dawidek</p>");
})

app.get("/contact", (req, res) =>{
    res.send("<p>contact</p>");
})

app.listen(port, () => {
    console.log(`Wszystko dziala jak nalezy na porcie ${port}`)
});