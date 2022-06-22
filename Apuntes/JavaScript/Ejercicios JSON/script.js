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
                                <h2><span>${alumnos.nombre}</h2></span>\
                                <h2><span>${alumnos.edad}</h2></span>\
                                <h2><span>${alumnos.ciudad}</h2></span>\
                            </article>`;
    return alumnos_toHtml;
}

function main_alumnos(){
    data = getDataAlumnos();
    displayDataAlumnos(data);
}

main_alumnos()
