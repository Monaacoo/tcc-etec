import express from "express"
import { uuid } from "uuidv4"
import postagem from "./database/postagem.js"
import cadastro from "./database/cadastro.js"


const rotas = express.Router()

rotas.get("/", function(req, resp){

    postagem.Obter()
    .then(function(resultados){

        //console.log(resultados)
        resp.render("paginainicial.pug", {resultados})

    })

})
rotas.get("/perfil", function(req, resp){
    resp.render("paginaperfil.pug")
})
rotas.get("/postagem", function(req, resp){
    resp.render("paginapostagem.pug")
})

rotas.get("/cadastro", function(req, resp){
    resp.render("paginacadastro.pug")
})

rotas.post("/cadastro",function(req, resp){

    const { nome, email, nickname, senha } = req.body
    console.log(nome, email, nickname, senha)
    postagem.Inserir(uuid(), nome, email, nickname, senha)
    resp.redirect("back")
})


rotas.post("/postagem",function(req, resp){

    const { autor, descricao, imagem } = req.body
    console.log(autor, descricao, imagem)
    postagem.Inserir(uuid(), autor, descricao, imagem)
    resp.redirect("back")
})

rotas.get ("/deletar/:codigo", function(req, resp){
    const { codigo } = req.params
    postagem.Deletar(codigo)
    resp.redirect("back")
})

export default rotas