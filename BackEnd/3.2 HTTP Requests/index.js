import  express  from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) =>{
    res.send("Czesc wszystko dziala poprawnie!")

})

app.listen(port, () => {
    console.log(`Server dziala na porcie ${port}.`);
})