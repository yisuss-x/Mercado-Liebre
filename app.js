const express = require('express');
const path = require('path');
const app = express();

// puerto
const puerto = 3001;

//ruta a elementos estaticos
let public = path.join(__dirname, "./public");
let static = express.static(public);
app.use(static);

// rutas
app.get('/', (req, res) => {
    let ruta = path.join(__dirname + '/views/home.html');
    res.sendFile(ruta);
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
})

// up server
app.listen(puerto, () => {
    console.log('Aplicación esuchando en puerto 3001');
});
