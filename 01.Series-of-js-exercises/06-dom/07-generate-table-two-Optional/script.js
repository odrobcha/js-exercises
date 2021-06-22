/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
        for (let j=0; j<10; j++){
            let newCell = document.createElement('th');
            newCell.innerHTML = (i+1)*(j+1);
            newRow.appendChild(newCell);
        }
        newTable.appendChild(newRow);

    }
    targetElement.appendChild(newTable);

})();
