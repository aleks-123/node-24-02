// for loop in object
const covek = {
  ime: 'Mirko',
  godini: 30,
  okupacija: 'programer',
};

for (let key in covek) {
  console.log(`${key}: ${covek[key]}`);
}

//! Object.keys() - dobivame array od klucevite od eden objekt
const klucevi = Object.keys(covek);
console.log(klucevi);
//! Object.values() - dobivame array od vrednostite na eden objekt
const vrednosti = Object.values(covek);
console.log(vrednosti);
//! Object.entries()
const celosnavrednost = Object.entries(covek);
console.log(celosnavrednost);
////////////////
