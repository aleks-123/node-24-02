const studenti = require('../models/studenti');

const getStudenti = async (req, res) => {
  const data = await studenti.list();
  res.render('studenti', { data });
};

const getForm = async (req, res) => {
  res.render('formular');
};

const postForm = async (req, res) => {
  const data = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  await studenti.add(data);
  res.redirect('/studenti');
};

const getBrishi = async (req, res) => {
  console.log(req.params);
  await studenti.remove(+req.params.i);
  res.redirect('/studenti');
};

module.exports = {
  getStudenti,
  getForm,
  postForm,
  getBrishi,
};
