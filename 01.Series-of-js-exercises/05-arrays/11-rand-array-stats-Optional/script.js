/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click', () => {
        let numbers = [];

        for (let i=0; i<10; i++){
            numbers[i] = Math.round(Math.random()*100);
            document.getElementById(`n-${i + 1}`).innerHTML = numbers[i];
        }

        let sum = numbers.reduce((total, num) =>{
            return total + num;
        }, 0);

        let average = sum/10;

        let min = numbers[0];
        let max = numbers[0];
        for (let i=1; i<numbers.length; i++){
            if (numbers[i] < min){
                min = numbers[i];
            }
            if (numbers[i] > max){
                max = numbers[i];
            }
        };
        document.getElementById('min').innerHTML = min;
        document.getElementById('max').innerHTML = max;
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = average;

    });


})();
