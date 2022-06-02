function fila(k){
  let n = 0; //contador
  let linea = ""; // fila de asteriscos
  while (n<k){
      linea = linea + "*"; // linea += "*";
      n++;
  }
  console.log(linea) ;
}

let n=0;
while (n<5){
    n++;
    fila(n);    

}