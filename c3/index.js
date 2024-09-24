//!1 - core moduli
//*http, assert, fs, path, process, os...
//? http - za kreiranje i rakuvanje na server
//? assert - se koristi za testiranje i debagiranje
//? fs (file system) - za interakcija so datotocen sistem na nasiot kompjuter
//? path - so ova ja utvrduvame patekata na nashiot direktorium
//? process - process ni dava informacii so koi procesi nashata aplikacija raboti
//? os - vo koj operativen sistem se naogja nashata Node.js aplikacija
//!2 - local moduli
//? ovie moduli kje gi kreirame nie po nekoi nashi potrevi
//!3 - third party moduli
//* mongoose, express, dotenv, ejs, morgan...

// --- localni moduli ---/
const calculator = require('./calculator.js');

const { odzemanje } = require('./calculator.js');

console.log(odzemanje(5, 3));

//todo: da se kreira fajl so ime vaga.js
// da ima funkcija koja kje pretvora gram vo kilogram i obratno
// da ima funkcija koje kje pretvora litar vo mililitar i obratno
//* kje imate 4 funkcii

//? Za domasna da se dodade uste eden modul so ime domasna.js
//? koj kje ima funkcija da promeni farenhajt vo celzius i obratno
//? da ima funkcija sto presmetuva plostina i perimetar na triagolnik
//? da ima funckija sto presmetuva plostina i perimetar na pravoagolnik
//? da ima funkcija sto kje presmetuva dali nekoj broj e paren ili neparen
