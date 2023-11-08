import {describe,test,expect} from 'vitest'
import BancoMongoDB from './banco-mongodb'
describe("Banco MongoDB",()=>{
    test("Deve salvar no banco MongoDB",async ()=>{
        const input= {
            id:1,
            titulo:"test",
            descricao:"test",
            foto:"test",
        }
        const bancoMongoDB = new BancoMongoDB();
        const result = await bancoMongoDB.salvar(input)
        expect(result).toBe(true)
    })
})
