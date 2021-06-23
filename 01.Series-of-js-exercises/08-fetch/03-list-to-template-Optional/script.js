/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

     async function getHeroData(){
        let data = (await fetch('http://localhost:63342/js/01.Series-of-js-exercises/_shared/api.json'));
        let heroList= await data.json();
        let heroes = await heroList.heroes;

        heroes.forEach((hero, index) => {
            let temp = document.getElementById("tpl-hero");
            let clon = temp.content.cloneNode(true);
            document.getElementById('hero-data').appendChild(clon);

            document.getElementsByClassName('name')[index].innerHTML = hero.name;
            document.getElementsByClassName('alter-ego')[index].innerHTML = hero.alterEgo;
            document.getElementsByClassName('powers')[index].innerHTML = hero.abilities;

        });


    };

    document.getElementById('run').addEventListener('click', getHeroData);





})();
