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

//! Working with arrays
const arrayEden = [5, 2, 4, 6, 8, 2];
//? da se logira sekoj broj poedinecno
