//si hay algo en localstorage traer los datos, si no crear el arreglo vacio
let vectorSeries = JSON.parse(localStorage.getItem("vectorSeriesKey")) || []; //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor

vectorSeries.forEach(serie => {
    dibujarColumna(serie);
});

function dibujarColumna(serie)
{
    let grillaSeries = document.getElementById("grillaSeries");
    grillaSeries.innerHTML += `
    <article class="col-12 col-md-4 col-lg-3 bm-3">
    <div class="card">
      <img src="${serie._imagen}" class="card-img-top" alt="${serie._titulo}">
      <div class="card-body">
        <h5 class="card-title">${serie._titulo}</h5>
        <a href="#" class="btn btn-primary">ver detalle</a>
      </div>
    </div>          
  </article>`;
}