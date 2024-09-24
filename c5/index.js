const readWrite = require('./readWrite.js');

//! JSON - JavaScript Object Notation
//* Zaradi slicnostite na json so javascript, javaskrip programata moze mnogu lesno da konvertira json vo javascript

(async () => {
  try {
    const dataString = await readWrite.fileRead('studenti.json');
    //! JSON.parse metodata konvertira Json objekt vo JavaScript objekt
    const studenti = JSON.parse(dataString);

    const sortProsek = studenti.sort((a, b) => {
      if (a.prosek < b.prosek) {
        return -1;
      } else if (a.prosek > b.prosek) {
        return 1;
      }
      return 0;
    });

    console.log(sortProsek);

    const najvisokPRosek = sortProsek[sortProsek.length - 1];
    const najnizokProsek = sortProsek[0];

    const sredenProsek =
      studenti.reduce((acc, student) => {
        return acc + student.prosek;
      }, 0) / studenti.length;

    console.log(sredenProsek);
    await readWrite.fileWrite('prosek.txt', JSON.stringify(sredenProsek));
  } catch (err) {
    console.log(err);
  }
})();

//? student.json [id,ime, prezime, prosek, grad]
//? Dodavanje na student vo fajlot
//? Brisenje na student vo fajlot
//? menuvanje na podatoci na student od fajlot
//? citanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza / objekt | JSON.parse
//? 3. Treba da gi dodadete podatocite na studento vo nizata | Array.push
//? 4. Nizata od js niza / objet treba da bide kkonvertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile

//? - Imento na studentot treba da bide smeneto od AAA vo AAB
//? - 1. Da ja vcitate celata sodrzina od fajklot | fs.readFile
//? - 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza/objekt | JSON.parse
//? - 3. Da gi izminite site elementi vo nizatai da napravite promena samo na soodvetniot clen | Array.map
//? - 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? - 5. Tekstot trteba da bide zacuvan vo fajlot | fs.writeFile

//? - Treba da se izbrise student od fajlot
//? - 1. Da ja vcitate celata sodrzina od fajlot | fs.readFile
//? - 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza/objekt | JSON.parse
//? - 3. Da gi izmine site lementi vo nizata i da go izbrisime samo soodvetniot clen | Array.filter
//? - 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? - 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile
