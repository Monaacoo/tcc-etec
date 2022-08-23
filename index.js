import express from "express"
import rotas from "./rotas.js"

const servidor = express()

servidor.set("view engine", "pug")
servidor.set("views", "./views")

servidor.use(express.json())
servidor.use(express.urlencoded({ extended:true }))

servidor.use(express.static("public"))
servidor.use(rotas)

servidor.listen(3000, function(){
    console.log("servidor on")
    console.log("http://localhost:3000/")
})
