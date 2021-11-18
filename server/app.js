require ("dotenv").config();
const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");

const app = express ();
const port = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static ("uploads"));

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
    .then (() => console.log ("conectado"))
    .catch((err) => console.log(err)),

app.listen(port, () => console.log("oyendo en el puerto 3000"));
