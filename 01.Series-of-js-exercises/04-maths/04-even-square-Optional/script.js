/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let resultEl = document.createElement("H1");
    document.getElementsByClassName('material')[0].appendChild(resultEl);
    let numbers = [];
    for(let i = 0; i < 21; i++){
        numbers[i] = i+1;
    }
    document.getElementById("run").addEventListener("click", function() {

        let sqrNumbers = numbers.map((number) => {
                return (number*number);
        });
        resultEl.innerHTML = sqrNumbers;
    });


})();
