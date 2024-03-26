import express from "express";
const routes = express.Router();

routes.get("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        console.log({ req })
        conn.query("SELECT * FROM categorias", (err, rows) => {
            if (err) return res.send(err);
            res.json(rows);
        })
    })
})


routes.post("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("INSERT INTO categorias set ?", [req.body], (err, rows) => {
            console.log(req.body.id)
            if (err) return res.send(err);
            res.send("Categoria agregada correctamente")
        })
    })
})

routes.delete("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("DELETE FROM categorias WHERE id = ?", [req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Categoria borrada correctamente")
        })
    })

})
routes.post("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("UPDATE categorias set ? WHERE id = ?", [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Categoria actualizada correctamente")
        })
    })

})

// module.exports = routes;
export default routes;