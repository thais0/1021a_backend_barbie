export default interface FilmeRepositorioInterface {
    salvar(filme: FilmeDTO): Promise<boolean>;
}
type FilmeDTO = {
    id: number,
    titulo: string,
    descricao: string,
    foto: string
}