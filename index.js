const express = require("express")
const app = express()
const mysql = require("mysql2")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database:"projetos"
})

app.get("/", (req, res) => {

    let SQL = "INSERT INTO proje (name, respon) VALUES ( 'teste', 'Carlos')"

    db.query(SQL, (err, result) => {
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log("Rodando Servidor")
})