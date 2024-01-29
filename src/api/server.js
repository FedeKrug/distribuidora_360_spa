const express = require('express')
const mysql = require("mysql")
const myconnection = require("express-myconnection");
const routes = require('./methods');

const port = process.env.DEFAULT_PORT;

const app = express();
app.set("port", port || 3000)

const dbOptions = {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "distribuidora-360"

}

//Middlewares
app.use(myconnection(mysql, dbOptions, "single"))
app.use(express.json())


//Routes
// app.get("/", (req, res) => {
//     // res.send("Welcome to my api")
// })

app.use("/api", routes)




//Server running
app.listen(app.get("port"), () => {
    console.log("server running on port ", app.get("port"))
});
