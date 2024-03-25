// const express = require("express");
import express from "express";
const routes = express.Router();

routes.get("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        console.log({ req })
        conn.query("SELECT * FROM product_lists", (err, rows) => {
            if (err) return res.send(err);
            res.json(rows);
        })
    })
})


routes.post("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("INSERT INTO product_lists set ?", [req.body], (err, rows) => {
            console.log(req.body.id)
            if (err) return res.send(err);
            res.send("Mayorista agregado correctamente")
        })
    })
})

routes.delete("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("DELETE FROM product_lists WHERE id = ?", [req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Mayorista borrado correctamente")
        })
    })

})
routes.post("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("UPDATE product_lists set ? WHERE id = ?", [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Mayorista actualizado correctamente")
        })
    })

})

module.exports = routes;