/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', addNewHero);


    async function addNewHero() {
        const rawResponse = await fetch('http://localhost:63342/js/01.Series-of-js-exercises/_shared/api.json');
        const content = await rawResponse.json();
        let heroes = await  content.heroes;
        let newHeroId = await heroes.length + 1;
        let newAbilities = document.getElementById('hero-powers').value.split(',');
        let newEnteredHero =  {
            id: newHeroId,
            name: document.getElementById('hero-name').value,
            alterEgo: document.getElementById('hero-alter-ego').value,
            abilities: newAbilities,
        }
        heroes.push(newEnteredHero);
        console.log(heroes);
    };

})();
