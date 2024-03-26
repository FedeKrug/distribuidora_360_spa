// const express = require("express");
import express from "express";
const routes = express.Router();

routes.get("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        console.log({ req })
        conn.query("SELECT * FROM products_tablelist", (err, rows) => {
            if (err) return res.send(err);
            res.json(rows);
        })
    })
})


routes.post("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("INSERT INTO products_tablelist set ?", [req.body], (err, rows) => {
            console.log(req.body.id)
            if (err) return res.send(err);
            res.send("Producto agregado correctamente")
        })
    })
})

routes.delete("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("DELETE FROM products_tablelist WHERE id = ?", [req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Producto borrado correctamente")
        })
    })

})
routes.post("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("UPDATE products_tablelist set ? WHERE id = ?", [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Producto actualizado correctamente")
        })
    })

})

// module.exports = routes;
export default routes;