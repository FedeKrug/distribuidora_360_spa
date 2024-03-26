import express from "express";
const routes = express.Router();

routes.get("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        console.log({ req })
        conn.query("SELECT * FROM productos", (err, rows) => {
            if (err) return res.send(err);
            res.json(rows);
        })
    })
})


routes.post("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("INSERT INTO productos set ?", [req.body], (err, rows) => {
            console.log(req.body.id)
            if (err) return res.send(err);
            res.send("Producto agregado correctamente")
        })
    })
})

routes.delete("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("DELETE FROM productos WHERE id = ?", [req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Producto borrado correctamente")
        })
    })

})
routes.post("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("UPDATE productos set ? WHERE id = ?", [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Producto actualizado correctamente")
        })
    })

})

// module.exports = routes;
export default routes;