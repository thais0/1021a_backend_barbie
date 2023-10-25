import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

type Filme = {
    id: number,
    titulo: string,
    descricao: string,
    foto: string,
}
const filmes_repositorio:Filme[] = []


// Define uma rota padrão
app.get('/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const filme = filmes_repositorio.find(filme => filme.id === id)
    if (filme) {
        res.send(filme)
    } else {
        res.status(404).send()
    }
});

app.post('/filmes', (req, res) => {
    const filme = req.body
    filmes_repositorio.push(filme)
    res.status(201).send(filme)
});


// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});