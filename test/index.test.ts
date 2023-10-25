import {describe, it, expect} from 'vitest'
import axios from 'axios'
describe('Primeiro teste da aplicação', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })
})

describe('Cadastro Filme', () => {
    it('Deve cadastrar um filme com sucesso', async () => {
        const filme = {
            titulo: 'Vingadores',
            descricao: 'Filme dos Vingadores',
            foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
        }
        const resposta = 
            await axios.post('http://localhost:3000/filmes', filme)
        
        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
    })
    it('deve listar um filme cadastrar', async () => {
      const filme = {
          titulo: 'Vingadores',
          descricao: 'Filme dos Vingadores',
          foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
      }
      const resposta = await axios.post('http://localhost:3000/filmes', filme)

      //1-buscar o filme cadastrado
      const listaFilmes = await axios.get('http://localhost:3000/filmes')
      const filmeCadastrado = listaFilmes.data

      //2-verificar se o filme devolvido é igual ao que nós cadastramos
      expect(filmeCadastrado[0]).toEqual(filme)

      //3-verificar se o tamanho da lista é igual a 1
      expect(listaFilmes.data.length).toBe(1)
  })
})