const express = require("express");
const app = express();


const PORT = 8080;
app.set('port', PORT);

app.listen(PORT, ()=>{
    console.log("Yay");
});