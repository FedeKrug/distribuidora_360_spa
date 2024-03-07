const express = require('express')
const mysql = require("mysql")
const myconnection = require("express-myconnection");
const productListsRoutes = require('./productLists/methods');
const logged_usersRoutes = require("./logged_users/methods");
const cors = require("cors");
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
app.use(myconnection(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
    res.send("Bienvenidos a la API de Distribuidora 360! Para ver las peticiones, ir a /api")
})

// app.use("/api", (req, res) => {
//     res.send("Para ir a las listas de productos, ir a /productLists, por otro lado, para ir a los usuarios registrados, ir a /logged")
// })

app.use("/api/productLists", productListsRoutes)

app.use("/api/logged", logged_usersRoutes)


//Server running
app.listen(app.get("port"), () => {
    console.log("server running on port ", app.get("port"))
});
