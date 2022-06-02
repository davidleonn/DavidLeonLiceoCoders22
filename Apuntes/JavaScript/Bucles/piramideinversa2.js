function fila(k) {
    let n = 0;
    let piramide = "";
    while (n<k) {
      piramide += "*";
       n++;
    } 
    console.log(piramide);
    }

    let n=5;
    while(n>0){
        fila(n);
        n--; 
    }