/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const  displayHero = () => {

        fetch('http://localhost:63342/js/01.Series-of-js-exercises/_shared/api.json')
            .then((response) =>{

                return(response.json())
            })
            .then((data)=>{
                let heroes = data.heroes;
                let enteredHeroId = document.getElementById('hero-id').value;
                let foundHero = heroes.find( (hero) =>{
                        if(hero.id == enteredHeroId){
                              return (hero);
                           }
                   });



                if (foundHero == undefined){
                    document.getElementById('hero-data').innerHTML = 'No matches found';

                } else {
                    document.getElementById('hero-data').innerHTML = '';

                    let temp = document.getElementById("tpl-hero");
                    let clon = temp.content.cloneNode(true);
                    document.getElementById('hero-data').appendChild(clon);

                    document.querySelector('#hero-data .hero .title .name').innerHTML = foundHero.name;
                    document.querySelector('#hero-data .hero .title .alter-ego').innerHTML = foundHero.alterEgo;
                    document.querySelector('#hero-data .hero .powers').innerHTML = foundHero.abilities;
                }
            })


    };
    document.getElementById('run').addEventListener('click', displayHero);






})();
