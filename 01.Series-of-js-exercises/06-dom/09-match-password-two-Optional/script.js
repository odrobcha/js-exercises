/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click', () =>{
        let passOne = document.getElementById('pass-one');
        let passTwo = document.getElementById('pass-two');

        if (passOne != passTwo){
            document.getElementById('pass-one').classList.add('error');
            document.getElementById('pass-two').classList.add('error');
        }
    });
    // your code here

})();
