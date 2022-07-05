/*
Retorna fizzbuzz si el número es multiplo de 3 y 5
Retorna fizz si el número es multiplo de 3
Retorna buzz si el número es múltiplo de 5
*/

function fizzbuzz(n){
    if(n === 0){
        return n;
    }
    
    else if(n%15 === 0 || (n).toString().includes(15)){
        return'fizzbuzz';
    }
    
    else if(n%3 === 0 || (n).toString().includes(3)){
        return 'fizz';         
    }
    
    else if(n%5 === 0){ 
        return 'buzz';
    }
    
    else{
        return n;
    }
};

function main(n){
  for(let i = 0; i <= n; i++){
        console.log(fizzbuzz(i));
  }  
}

main(500);

module.exports = fizzbuzz;

/* és el mateix

function fizzbuzz(n){
    if(n === 0){
        return n;
    }
    
    if(n%15 === 0){
        return'fizzbuzz';
    }
    
    if(n%3 === 0){
        return 'fizz';
    }
    
    if(n%5 === 0){ 
        return 'buzz';
    }
        return n;
};

let r = fizzbuzz(15);
console.log(r);

module.exports = fizzbuzz;

*/