function fila(k) {
    let n = 0;
    let piramide = "";
    while (n<k) {
      piramide += "*";
       n++;
    } 
    console.log(piramide); 
}

function piramide (k){ 
    let n = 0;
    while (n<k){
    n++;
    fila(n);    }
}

function piramideInvertida(k){
   while(k>0){
    fila(k);
    k--; 
    }
}

n=0;
while(n<25){
n++;
piramide(n);
}