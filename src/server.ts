import express, { request, response } from "express";

const app = express();

/**
 * GET      -> BUSCAR UMA INFORMAÇÃO
 * POST     -> INSERIR UMA INFORMAÇÃO 
 * PUT      -> ALTERAR UMA INFORMAÇÃO
 * DELETE   -> DELETAR UM DADO
 * PATCH    -> ATUALIZAR UMA INFORMAÇÃO ESPECÍFICA
 */

app.get("/test", (request, response) => {
    return response.send("Olá NLW com GET");
})

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW com POST")
})

// http://localhost/3000
app.listen(3000, () => console.log("==> Server is running"));

//teste