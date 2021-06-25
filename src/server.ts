import "reflect-metadata";
import express, { request, response } from "express";
import "./database"

const app = express();

app.get("/test", (request, response) => {
    return response.send("Olá NLW com GET");
})

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW com POST")
})

// http://localhost/3000
app.listen(3000, () => console.log("==> Server is running"));