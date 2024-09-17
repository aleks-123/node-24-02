const fs = require('fs');

//* readFileSync - vcitavme tekst
const vcituvanjeTekst = fs.readFileSync('./tekst.txt', 'utf-8');
console.log(vcituvanjeTekst);

//* writeFileSync - zapisuvame podatok
const podatok = `Ova sakame da go zapisime vo nashiot kompjuter ${2 + 2}`;
fs.writeFileSync('./novTekst.txt', podatok);

function pozdrav(ime, callback) {
  console.log(`Zdravo, ${ime}`);
  chao();
}

function chao() {
  console.log('Chao!');
}

pozdrav('Mirko', chao);

//! Asynhron way, with callback
//! readFile
fs.readFile('novTekst.txt', 'utf-8', (err, text) => {
  if (err) {
    return console.log('Ima nekakva greska');
  }
  console.log('asynhrona funkcija', text);
});
console.log('test');

fs.readFile('./tekst.txt', 'utf-8', (err, text) => {
  fs.readFile('./novTekst.txt', 'utf-8', (err, text2) => {
    console.log(text, text2);
  });
});

//! writeFile
fs.writeFile('./asyhronWrite.txt', 'mirko, petko', 'utf-8', (err) => {
  if (err) {
    console.log('imashe nekakva greska pri zapisuvanje na samiot podatok');
  }
  console.log('uspesno zapisan podatok');
});

//!Promise patern

// Cekor 1
// const fileWrite = () => {};

// Cekor 2
// const fileWrite = () => {
//   return new Promise();
// };

// Cekor 3
// const fileWrite = () => {
//   return new Promise(() => {});
// };

// cekor 4
// const fileWrite = () => {
//   return new Promise((success, fail) => {});
// };

// cekor 5
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile('data.txt', 'Hello from promise', 'utf-8', (err) => {
//       if (err) return console.log(err);
//       console.log('Podatokot e zapisan');
//     });
//   });
// };

// cekor 6
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile('data.txt', 'Hello from promise', 'utf-8', (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, 'utf-8', (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const fileRead = (filename) => {
  return new Promise((success, fall) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const main = async () => {
  try {
    await fileWrite('./novo1.txt', 'Nov fajl so zapis of promise1!');
    await fileWrite(`./novo2.txt`, 'Nov fajl so zapis of promis2!');
    await fileWrite('./novo3.txt', 'Nov fajl so zapis of promis3!');
    const ovoshje = await fileRead('ovoshje.txt');
    const novo1 = await fileRead('novo1.txt');
    console.log(novo1);
    console.log(ovoshje);
  } catch (err) {
    console.log(err);
  }
};
main();

//! Promisot moze da bide
// Pending: Incijalnata sostajva ne e ni ispolnet ni odbien
// Fullfilled: Oznacuva deka operacijata uspesno zavrsila
// Rejected: Oznacuva deka operacija zavrsila so greska

//? da kreirate promis od site ovie metodi, site ovie metodi da gi upotrebite po vasha zelba
// fs.unlink
// fs.mkdir
// fs.appendFile
// fs.rmdir
