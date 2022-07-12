//Autor: Carlos Escobar

let now = new Date();
let newId = now.getTime(); // semilla para el generador congruencial mixto, de manera de evitar la misma secuencia 
let prevId = -1;

//Primer metodo: usa los milisegundos pasados desde 1970
// sirve muy bien siempre y cuando los IDs se generen con un espacio de tiempo de un milisegundo entre llamadas a la funcion.
export function getUniqueId()
{
    let newId = new Date().getTime(); // milisegundos desde 1970

    if (newId === prevId) // verifico que el nuevo ID no sea igual al anterior, caso contrario uso el segundo metodo para que genere un ID
    {
        newId = getUniqueId2(); 
    }
    prevId=newId;

    return newId; 
}

//Segundo metodo: es un generador congruencial mixto con valores estandarizados.
// es rápido pero no asegura unicidad con el tiempo, aunque la probilidad que se repita es muy baja.
export function getUniqueId2()
{
    newId = (newId * 1664525 + 1013904223) % 4294967296;
    return newId;
}

//funcion para testear los generadores de IDs
export function test_getUniqueId(testingFunction, testSize)
{
    let test = new Array(testSize);

    for (let i=0; i<testSize; i++)
    {
        test[i] = testingFunction();
    }

    let i=0;
    let j=0;
    let fail=false;
    while (i<testSize-1 && !fail)
    {
        j=i+1;
        while (j<testSize && !fail)
        {
            if ( test[i] === test[j] ) 
            {
                fail=true;
            }
            j++;
        }
        i++;
    }
    console.log(test[i])
    console.log(test)
    if (fail)
        alert("no pasa el test");
    else
        alert("pasa el test");
}

//PARA TEST: test_getUniqueId(getUniqueId, 5000)