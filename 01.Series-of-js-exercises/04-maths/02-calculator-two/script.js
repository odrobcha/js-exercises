/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
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

    let performOperation = function(operation) {
        let opOne = document.getElementById('op-one').value;
        let opTwo = document.getElementById('op-two').value;
        let result = '';

        if (isNumber(opOne) & isNumber(opTwo)){
            if (operation == 'addition'){
                result = (parseFloat(opOne) + parseFloat(opTwo)).toString();
            }
            if (operation == 'substraction'){
                result = (parseFloat(opOne) - parseFloat(opTwo)).toString();
            }
            if (operation == 'multiplication'){
                result = (parseFloat(opOne) * parseFloat(opTwo)).toString();
            }
            if (operation == 'division'){
                if (opTwo == '0'){
                    result = 'You can not divide on 0';
                } else {
                    result = (parseFloat(opOne) / parseFloat(opTwo)).toString();
                }
            }
            resultEl.innerHTML = result;

        } else {
            resultEl.innerHTML = 'Please, enter only numbers'
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
