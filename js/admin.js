import {Serie} from './serieClass.js';
import { campoRequerido, cantidadCaracteres } from "./validaciones.js";

let nuevaSerie = new Serie("123", "tit", "desc", "desc", "genero")

console.log(nuevaSerie)

//si hay algo en localstorage traer los datos, si no crear el arreglo vacio
let vectorSeries = JSON.parse(localStorage.getItem("vectorSeriesKey")) || [] //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor

//traemos los elementos que nos interesen

let codigo = document.getElementById("codigo")
let titulo = document.getElementById("titulo")
let descripcion = document.getElementById("descripcion")
let imagen = document.getElementById("imagen")
let genero = document.getElementById("genero")

//ya fueron chequeados todos uno por uno... console.log(codigo)

let formulario = document.getElementById("formSerie")
const modalAdminSerie = new bootstrap.Modal(document.getElementById("modalSerie"))
let btnCrearSerie = document.getElementById("btnCrearSerie")

btnCrearSerie.addEventListener("click", ()=>{
    limpiarFormulario()
    modalAdminSerie.show()
})

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
    guardarListaSeries()
    //cerrar modal
    modalAdminSerie.hide()
    //mostrar el ok
    Swal.fire(
        'Serie creada',
        'La serie fue creada correctamente',
        'success'
    )
}

function limpiarFormulario()
{
    formulario.reset(); //solo resetea el value de los campos del formulario
    //TODO: limpiar clases form-control para quitar validaciones
    let inputs = formulario.querySelector(".form-control")
}

function guardarListaSeries()
{
    localStorage.setItem('vectorSeriesKey', JSON.stringify(vectorSeries))
    
}