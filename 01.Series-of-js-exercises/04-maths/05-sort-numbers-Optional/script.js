/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let resultEl = document.createElement("H1");
    document.getElementsByClassName('material')[0].appendChild(resultEl);

    document.getElementById("run").addEventListener("click", function() {
        let inputNumbers = document.getElementById('numbers').value.split(',');
        resultEl.innerHTML = inputNumbers.sort((a,b)=>a-b);

    });

})();
