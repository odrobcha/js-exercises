/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const yearEl = document.getElementById('year');
    const buttonEl = document.getElementById('run');
    let h1Element = document.createElement("H1");
    document.getElementsByClassName('material')[0].appendChild(h1Element);

    buttonEl.addEventListener('click', () =>{
        let enteredYear = yearEl.value;
        const pattern = new RegExp(/^\d+$/);
        let isYear = pattern.test(enteredYear);
        let fridays = [];


        if (isYear){
            for (let i=0; i<=11; i++){
                let enteredYearDates = new Date(enteredYear, i, 13);
                let day = enteredYearDates.getDay();
                if (day == 6){
                    fridays.push(enteredYearDates.getMonth());
                }
                for (let i=0; i<=fridays.length; i++){
                    if (fridays[i] == 0){
                        fridays[i] ='Jan'
                    };
                    if (fridays[i] == 1){
                        fridays[i] ='Feb'
                    };
                    if (fridays[i] == 2){
                        fridays[i] ='Mar'
                    };
                    if (fridays[i] == 3){
                        fridays[i] ='Apr'
                    };
                    if (fridays[i] == 4){
                        fridays[i] ='May'
                    };
                    if (fridays[i] == 5){
                        fridays[i] ='Jun'
                    };
                    if (fridays[i] == 6){
                        fridays[i] = 'Jul'
                    };
                    if (fridays[i] == 7){
                        fridays[i] ='Aug'
                    } ;
                    if (fridays[i] == 8){
                        fridays[i] ='Sep'
                    };
                    if (fridays[i] == 9){
                        fridays[i] ='Oct'
                    };
                    if (fridays[i] == 10){
                        fridays[i] ='Nov'
                    };
                    if (fridays[i] == 11){
                        fridays[i] ='Dec'
                    };
                }

            }

            h1Element.innerHTML = fridays;

        } else {
            h1Element.innerHTML = "Please, enter valid year"
        }


    })

})();
