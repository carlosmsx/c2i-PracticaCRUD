export class Serie
{
    constructor(codigo, titulo, descripcion, imagen, genero)
    {
        this._codigo = codigo
        this._titulo = titulo
        this._descripcion = descripcion
        this._imagen = imagen
        this._genero = genero
    }

    //propiedades: 
    //getters
    get codigo() { return this._codigo; }
    get titulo() { return this._titulo; }
    get descripcion() { return this._descripcion; }
    get imagen() { return this._imagen; }
    get genero() { return this._genero; }

    //setters
    set setCodigo(value) { this._codigo = value; }
    set setTitulo(value) { this._titulo = value; }
    set setDescripcion(value) { this._descripcion; }
    set setImagen(value) { this._imagen = value; }
    set setGenero(value) { this._genero = value; }
}