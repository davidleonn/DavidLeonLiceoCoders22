function fila(k) {
    let n = 0;
    let piramide = "";
    while (n<k) {
      piramide += "*";
       n++;
    } 
    console.log(piramide);
    }
    fila(5)
    fila(4)
    fila(3)
    fila(2)
    fila(1)
    fila(0)