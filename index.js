// Prime No Programe to minimize time for execution

function checkPrime(n){
 // number divisible by itself and 1 
 let diviser = 2;
 while(n > diviser){
   if(n % diviser === 0){
       return false
   }else{
    diviser ++
   }
 }
 return true;
}

console.log(checkPrime(11));


function checkPrimeBetter(n){
  let diviser = 2;
 while(n > diviser){
   if(n % diviser === 0){
       return false
   }else{
     // up to 3 increse by 1
     if(diviser < 3){
        diviser ++ ;
     }else{
       // if 3 or grt than 3 then increse by 2
       diviser += 2;  
     }
    
   }
 }
 return true;
}

console.log(checkPrimeBetter(12451));

// console.log(Math.round(Math.sqrt(12451)))



function checkPrimeBetterFun(n){
  let diviser = 2;
  let limit = Math.round(Math.sqrt(n))
 while(limit > diviser){
   if(n % diviser === 0){
       return false
   }else{
     if(diviser < 3){
        diviser ++ ;
     }else{
       diviser += 2;  
     }
    
   }
 }
 return true;
}

console.log(checkPrimeBetterFun(8));


// Find all prime Number 
function findAllPrimeFactor(n){
  let diviser = 2;
  let arr = []
 while(n > 2){
   if(n % diviser === 0){
       arr.push(diviser);
       n = n/diviser;
   }else{
    diviser ++
   }
 }
 return arr;
}

console.log(findAllPrimeFactor(69))


// fibonacci series

function fibo(n){
  if(n<=1){
    return n;
  }else{
    return fibo(n-1) + fibo(n-2);
  }
}

console.log(fibo(10))


// greatest common diviser

function GCD(a,b){
  if(b == 0){
    return a;
  }else {
    return GCD(b,a%b);
  }
}
console.log(GCD(5,225))