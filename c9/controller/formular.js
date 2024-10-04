let data = {
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

exports.getView = (req, res) => {
  res.render('index', data);
};

exports.postForm = (req, res) => {
  const newStudent = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };

  data.studenti.push(newStudent);
  res.render('index', data);
};
