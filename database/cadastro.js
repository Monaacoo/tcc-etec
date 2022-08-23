import conexao from "./conexao.js"

async function Obter(){
    const comando = "SELECT * FROM cadastro;"
    const resultado = await conexao.query(comando)
    return resultado.rows
}

async function Deletar(codigo){
    const comando = "DELETE FROM cadastro WHERE codigo = $1"
    const resultado = await conexao.query(comando, [codigo])
    return resultado
}

async function Inserir(codigo, nome, email, nickname, senha){
    const comando = "INSERT INTO cadastro VALUES ($1, $2, $3, $4, $5);"
    const resultado = await conexao.query(comando, [ codigo, nome, email, nickname, senha])
    return resultado
}

export default {Obter, Inserir, Deletar}