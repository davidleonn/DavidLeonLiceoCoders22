function getDataAlumnos(){
    let alumnos_json = JSON.parse(alumnos)
    return alumnos_json
}

function displayDataAlumnos(data){
    let alumnos_html = '';

    for (let i = 0; i < data.length; i++){
        alumnos_html += alumnos_toHtml(data[i]) 
    }

    document.querySelector('content').innerHTML = (alumnos_html)
}


function alumnos_toHtml(alumnos){
    let alumnos_toHtml = `<article class="alumnos">\
                                <h2>Nombre: ${alumnos.nombre}</h2>\
                                <h2>Edad: ${alumnos.edad}</h2>\
                                <h2>Ciudad: ${alumnos.ciudad}</h2>\
                            </article>`;
    return alumnos_toHtml;
}

function main_alumnos(){
    data = getDataAlumnos();
    displayDataAlumnos(data);
}

main_alumnos()
