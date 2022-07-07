import {Serie} from './serieClass.js';
import { campoRequerido, cantidadCaracteres } from "./validaciones.js";

let nuevaSerie = new Serie("123", "tit", "desc", "desc", "genero")

console.log(nuevaSerie)

let vectorSeries = []

//traemos los elementos que nos interesen

let codigo = document.getElementById("codigo")
let titulo = document.getElementById("titulo")
let descripcion = document.getElementById("descripcion")
let imagen = document.getElementById("imagen")
let genero = document.getElementById("genero")

//ya fueron chequeados todos uno por uno... console.log(codigo)

let formulario = document.getElementById("formSerie")

//validaciones
codigo.addEventListener("blur", ()=>{ campoRequerido(codigo); });
codigo.addEventListener("keyDown", ()=>{ cantidadCaracteres(codigo, 1, 5); });

titulo.addEventListener("blur", ()=>{ campoRequerido(titulo); });
titulo.addEventListener("keyDown", ()=>{ cantidadCaracteres(titulo, 2, 50); });

descripcion.addEventListener("blur", ()=>{ campoRequerido(descripcion); });
descripcion.addEventListener("keyDown", ()=>{ cantidadCaracteres(descripcion, 2, 200); });

imagen.addEventListener("blur", ()=>{ campoRequerido(imagen); });
imagen.addEventListener("keyDown", ()=>{ cantidadCaracteres(imagen, 2, 120); });

genero.addEventListener("blur", ()=>{ campoRequerido(genero); });
genero.addEventListener("change", ()=>{ campoRequerido(genero, 2, 200); });


formulario.addEventListener('submit', crearSerie)

function crearSerie(e)
{
    e.preventDefault();
    //TODO: volver a validar todos los campos
    let nuevaSerie = new Serie(codigo.value, titulo.value, descripcion.value, imagen.value, genero.value )
    vectorSeries.push(nuevaSerie)
    console.log(vectorSeries)
    //limpiar el formulario
    limpiarFormulario()
    //guardar la lista de series
}

function limpiarFormulario()
{
    formulario.reset(); //solo resetea el value de los campos del formulario
    //TODO: limpiar clases form-control para quitar validaciones
}