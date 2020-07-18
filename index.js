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

