/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let numbers = [];
    for(let i = 0; i < 100; i++){
        numbers[i] = i+1;
    }


    for (let number of numbers){
       let div3 = number % 3;
       let div5 = number % 5;

       if (div3 === 0 & div5 === 0){
           console.log('fizzbuzz')
       } else {
           if (div3 === 0){
               console.log('fizz');
           } else {
               if (div5 === 0){
                   console.log('buzz')
               } else {
                   console.log(number);
               }
           }
       }
    }

})();
