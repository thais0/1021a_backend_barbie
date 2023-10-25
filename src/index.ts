import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

// Define uma rota padrão
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.post('/filmes', (req, res) => {
    const filme = {
        titulo: 'Vingadores',
        descricao: 'Filme dos Vingadores',
        foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
    }
    res.status(201).send(filme)
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});