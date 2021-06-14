/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let moreCake = prompt("Would you like more cake?").toLowerCase();
   switch (moreCake){
       case "yes":
           document.write(`
                <dialog open> <em> Good Choice! </em></dialog>
           `);
           break;
       default:
           document.write(`
                <dialog open> <em> More cake for me then :p !</em></dialog>
           `);
           break;
   }

})();