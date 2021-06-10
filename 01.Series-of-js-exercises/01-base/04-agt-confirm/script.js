/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let checkData = false;
    do{
        let name = prompt("Enter your name, please");
        let age = prompt("Your age");
        let gender = prompt("Your gender");
        let town = prompt("Your town");

        checkData = confirm(`Please, chek your data: 
                name: ${name} 
                age: ${age} 
                gender: ${gender} 
                town: ${town} 
            ` );
    }
    while (!checkData);
})();
