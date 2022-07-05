console.log("desde admin")

import {Serie} from './serieClass.js';

let nuevaSerie = new Serie("123", "tit", "desc", "desc", "genero")

console.log(nuevaSerie)

let listaSeries = []

//traemos los elementos que nos interesen

let codigo = document.getElementById("codigo")
let titulo = document.getElementById("titulo")
let descripcion = document.getElementById("descripcion")
let imagen = document.getElementById("imagen")
let genero = document.getElementById("genero")

//ya fueron chequeados todos uno por uno... console.log(codigo)

let formulario = document.getElementById("formSerie")
//TODO: agregar validaciones

formulario.addEventListener('submit', crearSerie)

function crearSerie(e)
{
    e.preventDefault();
    console.log('desde crear serie')
    //volver a validar todos los campos
    let nuevaSerie = new Serie(codigo.value, titulo.value, descripcion.value, imagen.value, genero.value )
    listaSeries.push(nuevaSerie)
    //limpiar el formulario
    limpiarFormulario()
}

function limpiarFormulario()
{
    formulario.reset(); //solo resetea el value de los campos del formulario
}