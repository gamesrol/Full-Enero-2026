require("dotenv").config({path: `.env.${process.env.NODE_ENV}`});
const express = require("express");

const app = express();
console.log(process.env.PORT )

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
