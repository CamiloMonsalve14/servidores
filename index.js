
const http = require("http");
const port = 3000;
const host = "localhost"

const server = http.createServer((req,res)=>{
    if (req.method === "GET" && req.url === "/info") {
        res.statusCode = 200
        res.setHeader("content-Type", "application/json")
        res.end ("Respuesta del servidor")
    } else if(req,method === "GET" && req.url === "/profile"){
        res.statusCode =200
    res.setHeader("content-Type", "application/json")
    res.end ("Respuesta del servidor")
}
    else {
        res.statusCode = 404
        res.end ("url no encontrada");
}
});


server.listen (port, host, () => {
    console.log ("El servidor arranco adecuadamente")
})

