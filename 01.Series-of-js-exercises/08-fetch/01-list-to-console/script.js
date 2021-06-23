/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const displayData = () =>{
        fetch('http://localhost:63342/js/01.Series-of-js-exercises/_shared/api.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
        c
    }
    document.getElementById('run').addEventListener('click', displayData);
})();
