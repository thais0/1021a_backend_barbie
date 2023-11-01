import {describe,test,expect} from 'vitest'
import BancoMongoDB from './banco-mongodb'
describe("Banco em memória",()=>{
    test("Deve salvar no banco em memória",async ()=>{
        const input= {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test",
        }
        const BancoMongoDB = new BancoMongoDB();
        const result = await BancoMongoDB.salvar(input)
        expect(result).toBe(true)
    })
})
