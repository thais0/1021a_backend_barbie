import FilmeRepositorioInterface from "../../aplicacao/filme-repositorio-interface";
import mongoose from 'mongoose'
require('dotenv').config()
export default class BancoMongoDB implements FilmeRepositorioInterface{
    private filmeModel:any
    constructor(){
        try{
            mongoose.connect(process.env.MONGODB_URL || '')
            console.log("Conectado ao banco de dados")
        }catch(erro){
            console.log(erro)
        }
        this.filmeModel = mongoose.model('Filme', new mongoose.Schema({
            _id:String,
            titulo:String,
            descricao:String,
            foto:String          
        }))
    }
    public async salvar(filme:Filme): Promise<boolean> {
        const filmeDTO = {
            _id:filme.id,
            titulo:filme.titulo,
            descricao:filme.descricao,
            foto:filme.foto
        }
        const filmeModelo = new this.filmeModel(filmeDTO)
        const result = await filmeModelo.save()
        return !!result
    }
}
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}