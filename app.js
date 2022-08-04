const express = require(`express`)

const app = express()

app.get(`/`,(req,res)=>{
    res.send(`<h1> nivel 1 <h1>`);
})
let visitas = 0;
app.get(`/visitas`,(req,res)=>{
    visitas ++;
    res.send(`la cantidad de visitas son : ${visitas}`);
})
app.get(`/fyh`,(req,res)=>{
    res.send({fyh:new Date().toLocaleString()});
})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`servidor escuchando por ${PORT}`)
})


// server.on("error", err=>console.log(`El error es ${err}`))