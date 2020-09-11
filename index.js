// For loop 
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
         if (i % 3 === 0 && i % 5 === 0) {
         console.log('FizzBuzz');
          } else if(i % 5 === 0){
              console.log('Buzz')
          }else if(i % 3 === 0  ){
         console.log('Fizz')
         }
          else{
          console.log(i)
         } 
         
  }
 }
 fizzBuzz();
 
 //while loop 
 
     let i = 0 
 
     while ( i < 100){
     i++; 
 
     if (i % 15 === 0){
     console.log('FizzBuzz')
    }
     else if ( i % 3 === 0 ) {
        console.log('Fizz')
    }
     else if (i % 5 === 0 ){
     console.log('Buzz')
     }
     else{
   console.log(i)
    }
     
 };
 
 //do while loop 
 
 
 let i = 1; 
 do {
     if (i % 15 === 0 ) {
         console.log('fizzbuzz');
     }
     else if (i % 3 === 0 ) {
         console.log('fizz')
     } else if (i % 5 === 0 ){ 
         console.log('buzz')
     }
     else{
         console.log(i)
     }
     i++
 }
 while (i < 101);