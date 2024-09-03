console.log('Welcome from Node');

//! Funkcionalni deklaracii
function sobirok(a, b) {
  return a + b;
}
//! Funkcionalni ekspresii
const proizvod = function (a, b) {
  return a * b;
};

//! Fat-Arrow function
const razlika = (a, b) => a - b;

//! Methodi
const ucenik = {
  ime: 'Trajan',
  pozdrav: function () {
    console.log(`zdravo, ${ucenik.ime}`);
  },
};

//! IIFE Imidieatly invoked function expressions

(function () {
  console.log('ova e IIFE');
})();

//? Zadaca broj 1
//? Da se kreira funkcionalna ekspesija so ime c2f koja kje konvertira celziusovi stepeni vo faenhajt

//? Zacada broj 2
//? Da se kreira Fat Arrow Function so ime f2c koja kje konvertira farenhajt vo celzius

//! TYPEOF
console.log(typeof undefined); //undefiend
console.log(typeof 230); //Number
console.log(typeof 'Type'); //String
console.log(typeof null); //objekt
console.log(typeof '23'); //String
console.log(typeof +'23'); //Number
console.log(console.log); //Function log
console.log(typeof false); //Boolean

//! BOOLEAN - TRUE, FALSE
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-2)); //true
console.log(Boolean('')); //false
console.log(Boolean(+'0')); //false
console.log(Boolean('0')); //true

console.log(2 > 1); //true
console.log(2 < 1); //false

console.log(2 == '2'); //true
console.log(2 === '2'); //false
console.log(2 != 1); //true

//! || i &&

//! (||)or operator
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//! (&&)And operator
console.log(true && false); //false
console.log(true && true); //true
console.log(false && false); //false

//! Ternary operator
// uslov ? uslovot ako e tocen : uslovot ako e netocen
const godini = 16;
const vozrast = godini >= 18 ? 'Polnoletno' : 'Maloletno';
console.log(vozrast);

console.log('chas broj 2');

const test1 = 'test1';
const test2 = 'test2';
const test3 = 'test1';
const test4 = true;
const test5 = true;
const test6 = [1, 2, 3];
const test7 = [1, 2, 3];

const broj1 = 1;
const broj2 = 1;

console.log(broj1 === broj2); ///true
console.log(test1 === test2); ///false
console.log(test1 === test3); ///true
console.log(test4 === test5); ///true
console.log(test6 === test7); ///false
/////

//! Working with arrays
const arrayEden = [5, 2, 4, 6, 8, 2];
const arrayDva = [1, 2, 3, 4, 5];
//* High order function vo Javascript
//map, forEach, reduce, filter i sort

//! forEach vrshit iteracija na sekoj element vo arrayot i ne go modificira arrayot po default i ne kreira nov array
arrayEden.forEach((item, index) => console.log(index));
// console.log('primer', arrayDva[0] + 10);
// console.log('primer', arrayDva[1] + 10);
// console.log('primer', arrayDva[2] + 10);
// console.log('primer', arrayDva[3] + 10);
// console.log('primer', arrayDva[4] + 10);
arrayDva.forEach((item, index, arr) => (arr[index] = item + 10));
console.log(arrayDva);

//! MAP - metodata izminuva niza za promeni na istata i rezultatot e nova niza
const arrayTri = arrayEden.map((item, i) => {
  return item + 1;
});
console.log(arrayTri);

const arrayReduce = [2, 4, 6, 8, 10];
//! Reduce reducira/namaluva/sumira niza na eden edistven rezultat

const sobirokReduce = arrayReduce.reduce((acc, s) => {
  return acc - s;
}, 100);

const brojki = [2, 6, 1, 8, 2, 12, 30, 7, 9, 6, 6, 6, 6];
//! Sort - soritra elementi vo nizata spored dadena funkcija za sortiranje
brojki.sort((a, b) => b - a);
console.log(brojki);

//! Filter vrakja niza od elementi koi odgovaraat na postaven uslov
const brojkiFilter = brojki.filter((s) => {
  return s >= 40;
});
console.log(brojkiFilter);

//! Find vrakja elemnt od nizata koj odgovara na postaven uslov
const brojkaFind = brojki.find((s) => {
  return s === 6;
});
console.log(brojkaFind);

const vezba1 = [1, 2, 3, 4, 5, 6];

const vezba1test = vezba1[1];
const vezba4test = vezba1[3];

// vezba1.push(7);
// console.log(vezba1);

const primer2 = vezba1.slice(1, 3);
console.log(primer2);
const student1 = { ime: 'Bojan', prosek: 7.2, grad: 'Skopje' };
const student2 = { ime: 'Bojan', prosek: 7.2, grad: 'Skopje' };

const prosek = student1.prosek;
const prosek3 = student2.prosek;
const prosek2 = student1['prosek'];

console.log('prosek', prosek2);
//! Rabota so objekti
const studenti = [
  { ime: 'Bojan', prosek: 7.2, grad: 'Skopje' },
  { ime: 'Pero', prosek: 8.2, grad: 'Bitola' },
  { ime: 'Zlatko', prosek: 6.1, grad: 'Kumanovo' },
  { ime: 'Kiko', prosek: 4.6, grad: 'Skopje' },
  { ime: 'Simona', prosek: 9, grad: 'Ohrid' },
  { ime: 'Trajanka', prosek: 8.4, grad: 'Prilep' },
  { ime: 'Ivana', prosek: 2.7, grad: 'Kichevo' },
  { ime: 'Natasha', prosek: 6.3, grad: 'Veles' },
  { ime: 'Stanko', prosek: 10, grad: 'Strumica' },
  { ime: 'Trajanka', prosek: 8.4, grad: 'Prilep' },
  { ime: 'Ivana', prosek: 2.7, grad: 'Kichevo' },
  { ime: 'Natasha', prosek: 6.3, grad: 'Skopje' },
  { ime: 'Natasha', prosek: 6.3, grad: 'Veles' },
  { ime: 'Natasha', prosek: 6.3, grad: 'Skopje' },
  { ime: 'Stanko', prosek: 10, grad: 'Strumica' },
];
// console.log(studenti[0]);
// console.log(studenti[1]);
// console.log(studenti[2]);
// console.log(studenti[3]);

// for (let i = 0; i < studenti.length; i++) {
//    studenti[i].prosek;
// }

const filtriraniStudenti = studenti
  .filter((student) => student.prosek > 7)
  .sort((a, b) => b - a)
  .slice(0, 3);
console.log(filtriraniStudenti);

const baranjeNaStudent = studenti.find((student) => student.prosek === 10);
console.log(baranjeNaStudent);

const zbirNaProsek = (studenti.reduce((acc, student) => acc + student.prosek, 0) / studenti.length).toFixed(1);
console.log(zbirNaProsek);

/////////////////
//? Domasna
//? 1 array - Site studenti od Skopje cie ime zavrshuva na n i imaat prosek nad 7, podredeni po ime rastecki
// studenti.ime.endsWith('i')
//? 2 Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
//? 3 Prvite 3 studenti koi imaat iminja od 5 karaketri, podredeni po prosek
//? 4 Vkupen prosek na studenti koi se od kumanovo
//? Da se dodade uste eden student so ime Goran prosek 7.3 i grad Delcevo
//? Da se izbrisghe prviot student vo studenti
//? Da se nagradat studenti od Skopje i Kumnovo za edna ocenka plus
