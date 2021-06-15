/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let factorial = function factorialize(num) {
        if (num < 0)
            return "Please, enter positive integer";
        else if (num == 0)
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
    };
    function isNumber(string){
        const pattern = new RegExp(/^-(\d)+$/);
        return  pattern.test(string);
    };

    let resultEl = document.createElement("H1");
    document.getElementsByClassName('material')[0].appendChild(resultEl);

    document.getElementById("run").addEventListener("click", function() {

        let inputNumber = document.getElementById('number').value;
        if (isNumber(inputNumber)){
            resultEl.innerHTML = factorial(inputNumber);
        } else {
            resultEl.innerHTML = "Please, enter the integer"
        }

    });

})();
