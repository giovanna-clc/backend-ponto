const express = require('express');
const app = express();
const PORT = 3000;

// ROTAS //

app.get('/', (req, res) => {
   res.send("Chamada ao recurso realizada com sucesso!");
});

// Retornar todos os usuários
app.get('/users', (req, res) => {
    res.send ("Aqui vou retornar todos os usuários do sistema");
});

app.get('/user/:id', (req, res) => {
    // Aqui vou logar o valor do parâmetro
    console.log(req.params.id);
});

app.post('rotapost', (req, res) => {
    res.send("Chamada ao recurso usando o post realizado com sucesso!");
});

app.listen(PORT, () => {
    console.log("Servidor aguardando requisições.");
});