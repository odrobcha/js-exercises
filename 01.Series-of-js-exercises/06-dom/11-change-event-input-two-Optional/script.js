/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let inputElement = document.getElementById('pass-one');
    inputElement.addEventListener("input", (e) => {
        let pass = e.target.value;
        let patt = new RegExp("^(?=(?:\\D*\\d){2})[a-zA-Z0-9]*$");
        if ( (pass.length>=8) && (patt.test(pass))){
            document.getElementById('validity').innerHTML = 'OK'
        }

    })

})();
