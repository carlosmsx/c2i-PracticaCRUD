import {Serie} from './serieClass.js';
import { campoRequerido, cantidadCaracteres } from "./validaciones.js";
import { getUniqueId } from './guid.js';

let nuevaSerie = new Serie("123", "tit", "desc", "desc", "genero")

console.log(nuevaSerie)

//si hay algo en localstorage traer los datos, si no crear el arreglo vacio
let vectorSeries = JSON.parse(localStorage.getItem("vectorSeriesKey")) || []; //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor
console.log(vectorSeries)
//traemos los elementos que nos interesen

let codigo = document.getElementById("codigo")
let titulo = document.getElementById("titulo")
let descripcion = document.getElementById("descripcion")
let imagen = document.getElementById("imagen")
let genero = document.getElementById("genero")

//ya fueron chequeados todos uno por uno... console.log(codigo)

let serieExistente = false; //controla el comportamiento del boton submit del formulario. True: modificaSerie. False: creaSerie
let formulario = document.getElementById("formSerie")
const modalAdminSerie = new bootstrap.Modal(document.getElementById("modalSerie"))
let btnCrearSerie = document.getElementById("btnCrearSerie")
let tablaSeries = document.getElementById("listaSeries")

btnCrearSerie.addEventListener("click", ()=>{
    limpiarFormulario()
    //generar codigo unico 
    codigo.value = getUniqueId();
    serieExistente = false;
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


formulario.addEventListener('submit', guardarSerie)

cargaInicial()

function guardarSerie(e)
{
    e.preventDefault();
    if (serieExistente) 
    {
        console.log('modifica');
    }
    else
    {
        console.log('crea');
    }
}

function crearSerie()
{
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
    Swal.fire('Serie creada', 'La serie fue creada correctamente', 'success')
    crearFila(nuevaSerie)
}

function limpiarFormulario()
{
    formulario.reset(); //solo resetea el value de los campos del formulario

    //quitar clases is-valid/is-invalid
    let inputs = formulario.querySelectorAll(".form-control")
    inputs.forEach((item)=>{
        item.className = "form-control";
    })
}

function guardarListaSeries()
{
    localStorage.setItem('vectorSeriesKey', JSON.stringify(vectorSeries))
    
}

function cargaInicial()
{
    if (vectorSeries.length > 0)
    {
        vectorSeries.forEach((item)=>{
            crearFila(item)
        })
    }
}

function crearFila(serie)
{
    console.log(serie.codigo)
    let newRow = 
    `<tr>
    <th scope="row">${serie._codigo }</th>
    <td>${serie._titulo}</td>
    <td><p>${serie._descripcion}</p></td>
    <td>${serie._imagen}</td>
    <td>Accion</td>
    <td class="d-flex">
        <button class="btn btn-warning me-1" onclick="editarSerie('${serie._codigo}')"><i class="bi bi-pencil-square"></i></button>
        <button class="btn btn-danger" onclick="borrarSerie('${serie._codigo}')"><i class="bi bi-x-square"></i></button>
    </td>
    </tr>`

    tablaSeries.innerHTML += newRow
}

window.borrarSerie = function(codigo)
{
    Swal.fire({
        title: 'Está seguro de eliminar la serie?',
        text: "Tenga en cuenta que no puede revertir este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let vectorSeriesNuevo = vectorSeries.filter((serie)=>{ return serie._codigo != codigo; });
            vectorSeries = vectorSeriesNuevo;
            guardarListaSeries();
            borrarTabla();
            cargaInicial();
            Swal.fire(
                'Serie eliminada!',
                'La serie fue eliminada.',
                'success'
            )
        }
    })
}

function borrarTabla()
{
    tablaSeries.innerHTML = "";
}

window.editarSerie = function(codigoSerie)
{
    let serieEditada = vectorSeries.find((serie)=>{ return serie._codigo == codigoSerie; });

    codigo.value = serieEditada._codigo;
    descripcion.value = serieEditada._descripcion;
    imagen.value = serieEditada._imagen;
    titulo.value = serieEditada._titulo;

    serieExistente = true;
    modalAdminSerie.show();
}