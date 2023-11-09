import FilmeRepositorioInterface from "./filme-repositorio-interface"
    class ListarFilme{
        constructor(private filmeRepositorioInterface:FilmeRepositorioInterface){}
        public async execute():Promise<Filme[]>{
            return this.filmeRepositorio.listar()
        }
    }
export default ListarFilme

type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}






