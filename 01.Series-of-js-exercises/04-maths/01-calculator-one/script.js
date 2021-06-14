/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let resultEl = document.createElement("H1");
    document.getElementsByClassName('material')[0].appendChild(resultEl);

    function isNumber(string){
        const pattern = new RegExp(/^\d+$/);
        return  pattern.test(string);
    }

    function calculate(operation){
        let opOne = document.getElementById('op-one').value;
        let opTwo = document.getElementById('op-two').value;
        let result = '';

        if (isNumber(opOne) & isNumber(opTwo)){
            if (operation == 'add'){
                result = (parseFloat(opOne) + parseFloat(opTwo)).toString();
            }
            if (operation == 'sub'){
                result = (parseFloat(opOne) - parseFloat(opTwo)).toString();
            }
            if (operation == 'mult'){
                result = (parseFloat(opOne) * parseFloat(opTwo)).toString();
            }
            if (operation == 'div'){
                if (opTwo == '0'){
                    result = 'You can not divide on 0';
                } else {
                    result = (parseFloat(opOne) / parseFloat(opTwo)).toFixed(2).toString();
                }
            }
            resultEl.innerHTML = result;

        } else {
            resultEl.innerHTML = 'Please, enter only numbers'
        }

    }

    document.getElementById("addition").addEventListener("click", function() {
        calculate('add');
    });

    document.getElementById("substraction").addEventListener("click", function() {
        calculate('sub');
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        calculate('mult');
    });

    document.getElementById("division").addEventListener("click", function() {
        calculate('div');
    });
})();
