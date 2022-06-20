//Crea una función que calcule el perímetro de un círculo dado el rádio. Perímetro = 2 · Pi · radio.
function perimetroCirculo(radio){
    return 2*PI*radio;
}

//Crea una función que calcule el área de un círculo dado el rádio. Área = Pi · radio^2
function areaCirculo(radio){
    return PI*Math.pow(r,2);
}

//Crea una función que calcule el perímetro de un cuadrado dado el lado. Perímetro = 4· lado
function perimetroCuadrado(lado){
    return 4*lado;
}

//Crea una función que calcule el área de un cuadrado dado el lado. Área = lado · lado
function areaCuadrado(lado){
    return lado*lado;
}

//Crea una función que calcula la hipotenusa de un triángulo rectángulo dados los lados a,b. C^2 = a^2 + b^2
function hipotenusa(ladoA, ladoB){
    return Math.pow(ladoA,2) + Math.pow(ladoB,2)
}