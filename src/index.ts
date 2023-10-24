import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

// Define uma rota padrão
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});