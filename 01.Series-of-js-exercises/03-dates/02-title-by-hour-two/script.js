/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById('target');
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let deadline = 17*24+30;
    let totalminutes = hour*24+minutes;

    if (totalminutes < deadline ){
        target.innerHTML = "Hello!!!"
    } else {
        target.innerHTML = "Good Evening!!!"
    }

})();
