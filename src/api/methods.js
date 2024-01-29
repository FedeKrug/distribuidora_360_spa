const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        console.log({ req })
        conn.query("SELECT * FROM logged_users", (err, rows) => {
            if (err) return res.send(err);
            res.json(rows);
        })
    })
})


routes.post("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("INSERT INTO logged_users set ?", [req.body], (err, rows) => {
            console.log(req.body.id)
            if (err) return res.send(err);
            res.send("Mayorista agregado correctamente")
        })
    })
})

routes.delete("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("DELETE FROM logged_users WHERE id = ?", [req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Mayorista borrado correctamente")
        })
    })

})
routes.post("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("UPDATE logged_users set ? WHERE id = ?", [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Mayorista actualizado correctamente")
        })
    })

})

export const handleCreate = (tableName) => {
    routes.post("/", (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err);
            conn.query(`INSERT INTO ${tableName} set ?`, [req.body], (err, rows) => {
                if (err) return res.send(err);
                res.send("Elemento agregado correctamente")
            })
        })
    })

}
export const handleRead = (tableName) => {
    routes.post("/", (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err);
            conn.query(`INSERT INTO ${tableName} set ?`, [req.body], (err, rows) => {
                if (err) return res.send(err);
                res.send("Elemento agregado correctamente")
            })
        })
    })

}
export const handleUpdate = (tableName) => {
    routes.post("/", (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err);
            conn.query(`INSERT INTO ${tableName} set ?`, [req.body], (err, rows) => {
                if (err) return res.send(err);
                res.send("Elemento agregado correctamente")
            })
        })
    })

}
export const handleDelete = (tableName) => {
    routes.delete("/:id", (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err);
            conn.query(`DELETE FROM  ${tableName} WHERE id = ?`, [req.params.id], (err, rows) => {
                if (err) return res.send(err);
                res.send("Mayorista borrado correctamente")
            })
        })

    })

}




module.exports = routes;