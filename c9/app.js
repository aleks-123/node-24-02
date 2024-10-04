const express = require('express');
//! EJS (Embedded JavaScript Templateing)
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const testData = {
  data1: 'Welcome from EJS - from object',
  data2: 'This is EJS templating engine',
};

const data = {
  ime: 'Pero',
  prezime: 'Peroski',
  niza: ['Skopje', 'Veles', 'Kavadrci', 'Veleshta', 'Livadista', 'Pelister'],
  studenti: [
    { ime: 'Pero', prezime: 'Peroski', prosek: 9.5 },
    { ime: 'Janko', prezime: 'Jankoski', prosek: 8.5 },
    { ime: 'Stanko', prezime: 'Stankoski', prosek: 7.5 },
    { ime: 'Ivan', prezime: 'Ivanoski', prosek: 10 },
    { ime: 'Klementina', prezime: 'Petreska', prosek: 6 },
  ],
};

app.get('/test', (req, res) => {
  res.render('test', testData);
});

app.get('/', (req, res) => {
  res.render('index', data);
});

const port = 10000;
app.listen(port, (err) => {
  if (err) return console.log('Greska vo startuvanje na samata aplikacija');
  console.log(`Aplikacijata e uspesno startuvana ${port}`);
});
