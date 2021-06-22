/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let inputElement = document.getElementById('pass-one');
    inputElement.addEventListener("input", (e) => {
        document.getElementById('counter').innerHTML = `${e.target.value.length}/10`;
        inputElement.addEventListener("keypress", (e) => {
            if (e.target.value.length > 9 ){
                e.preventDefault();
            }

        });
    });

})();
