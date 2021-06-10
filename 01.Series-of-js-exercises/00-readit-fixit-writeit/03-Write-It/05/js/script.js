const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];

const wrapText = (content, tag) =>{
  return `<${tag}>${content}</${tag}>`;
}

let allTariffs=[...fees];

  for (const fee of fees) {
   for (const extra of extras){
     let newTariff = {};
     newTariff.price = fee.price + extra.price;
     newTariff.title = fee.title + ' + ' + extra.title;
     allTariffs.push(newTariff);
     }
  };

 const createTariffsList = (tariffs) => {
   return `
    <ul>${tariffs
       .map(tarif => wrapText((wrapText(tarif.title, 'p') + wrapText(tarif.price, 'span')), 'li')).join(``)}
    </ul>
    `
 }
document.write(createTariffsList(allTariffs));
