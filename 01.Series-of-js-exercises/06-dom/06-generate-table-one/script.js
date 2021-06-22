/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let targetElement = document.getElementById('target');
    let newTable = document.createElement('table');


    for (let i=0; i<10; i++){
        let newRow = document.createElement('tr');
       let newCell = document.createElement('th');

       newRow.appendChild(newCell);
       newTable.appendChild(newRow);

    }
    targetElement.appendChild(newTable);


})();
