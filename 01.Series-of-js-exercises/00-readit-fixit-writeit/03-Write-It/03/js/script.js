const winnerList = [
    {
        actor: "Forest Whitaker",
        film: "The Last King of Scotland",
        age: 45
    }, {
        actor: "Daniel Day-Lewis",
        film: "There Will Be Blood",
        age: 50
    }, {
        actor: "Sean Penn",
        film: "Milk",
        age: 48
    }, {
        actor: "Jeff Bridges",
        film: "Crazy Heart",
        age: 60
    }, {
        actor: "Colin Firth",
        film: "The King's Speech",
        age: 50
    }, {
        actor: "Jean Dujardin",
        film: "The Artist",
        age: 39
    }, {
        actor: "Daniel Day-Lewis",
        film: "Lincoln",
        age: 55
    }, {
        actor: "Matthew McConaughey",
        film: "Dallas Buyers Club",
        age: 44
    }, {
        actor: "Eddie Redmayne",
        film: "The Theory of Everything",
        age: 33
    }, {
        actor: "Leonardo DiCaprio",
        film: "The Revenant",
        age: 41
    }
]

const wrapText = (content, tag) =>{
    return `<${tag}>${content}</${tag}>`;
}
const orderByYear = (a, b) => {
    return b.age - a.age;
};

const createActorList = (winners) =>{
    return `
    <ul>${winners
      .sort(orderByYear)
      .map(winner => wrapText(winner.actor, 'li')).join(``)}
    </ul>
    `
};

document.write(createActorList(winnerList));

let combinedAge = winnerList.reduce((total, winner)  => total + winner.age, 0);

//document.write(`<h1>Combained Age is: ${combinedAge} </h1>`)
console.log(combinedAge);
