export function campoRequerido(input)
{
    if (input.value.trim().length > 0)
    {
        input.className = 'form-control is-valid' 
    }
    else
    {
        input.className = 'form-control is-invalid' 
    }
}

export function cantidadCaracteres(input, min, max)
{
    let text = input.value.trim();
    if (text.length >= min && text.length <= max )
    {
        input.className = 'form-control is-valid';
    }
    else
    {
        input.className = 'form-contro is-invalid';
    }
}