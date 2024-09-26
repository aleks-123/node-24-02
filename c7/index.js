// ja povikavme express aplikacijata sto ja instaliravme so npm install epxress
const express = require('express');

//se kreira nova express aplikacija
const app = express();

//Rutite imaat parametri i tie se dinamicki ili staticki
app.get('/zdravo', (req, res) => {
  const b = 1 + 1;
  res.send(`Zdravo svetu ${b}`);
});

app.get('/zdravo/:ime/:prezime', (req, res) => {
  console.log(req.params);

  res.send(`zdravo  ${req.params.ime} ${req.params.prezime}`);
});

app.get('/test', (req, res) => {
  res.send('test');
});

app.get('/pozdrav', (req, res) => {
  res.send('pozdrav');
});

app.get('/kalkulator/:op/:a/:b', (req, res) => {
  console.log(req.params);
  switch (req.params.op) {
    case 'sobiranje':
      return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
    case 'odzemanje':
      return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
    case 'mnozenje':
      return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
    case 'delenje':
      return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
    default:
      return res.send('Nepoznat operator');
  }
});

app.get('/presmetaj/:name', (req, res) => {
  const name = req.params.name;
  const prezime = req.params.prezime;
  if (!name) {
    res.send('Invalid url');
  }

  const brojNaBukvi = name.length;
  const eParen = brojNaBukvi % 2 === 0 ? 'da' : 'ne';
  const bukviArray = name.split('');
  const samoglaski = ['a', 'e', 'i', 'o', 'u'];

  let samoglaskiBroj = 0;
  bukviArray.forEach((bukva) => {
    if (samoglaski.includes(bukva)) {
      samoglaskiBroj++;
    }
  });

  const soglaskiBroj = brojNaBukvi - samoglaskiBroj;
  res.send(`paren: ${eParen}, karakteri: ${brojNaBukvi}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`);
});

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log('Server started successfullyy on port 10000');
});

//? Za domasna ruta  /f2c/:temperatura // na ova url da transformira farenhajt vo celzius
//? /c2f/:temperatura // na ova url da transformira celzius vo farenhajt
//? temp/:konverzija/:temepratura // ako pisimie c2f da kreira konverzija od celzius vo farenajt a f2c obarno

//fc2/100
// fc2/60

// app.get('/temp/:konverzija/:temperatura')
