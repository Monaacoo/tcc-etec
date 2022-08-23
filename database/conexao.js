import pg from "pg"

const conexao = new pg.Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "super123",
    database: "diss"
})

conexao.connect()

export default conexao