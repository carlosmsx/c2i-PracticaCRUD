const parametros = window.location.search;

const urlParams = new URLSearchParams(parametros);

const codigo = urlParams.get('codigo');

const vectorSeries = JSON.parse(localStorage.getItem("vectorSeriesKey")) || []; //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor

const serieBuscada = vectorSeries.find((serie)=>{return serie._codigo==codigo});

const seccionDetalle = document.getElementById("seccionDetalle");

seccionDetalle.innerHTML = `
<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${serieBuscada._imagen}" class="img-fluid rounded-start" alt="${serieBuscada._titulo}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${serieBuscada._titulo}</h5>
      <p class="card-text">${serieBuscada._descripcion}</p>
      <p class="card-text">Genero: <span class="badge rounded-pill bg-danger">${serieBuscada._genero}</span></p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
`