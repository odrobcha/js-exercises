/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let h1Element = document.createElement("H1");
    document.getElementsByClassName('material')[0].appendChild(h1Element);

    document.getElementById('run').addEventListener('click', ()=>{
        let birthYear = document.getElementById('dob-year').value;
        let date = new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - birthYear;
        h1Element.innerHTML = `You are ${age} years old`;


    })


})();
