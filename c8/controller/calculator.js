const fs = require('fs');
const { parse } = require('path');

const parseTemplate = async (template, object = null) => {
  return new Promise((success, fail) => {
    fs.readFile(`${__dirname}/../views/${template}`, 'utf8', (err, content) => {
      if (err) return fail(err);
      if (object) {
        for (property in object) {
          content = content.replaceAll(`{{${property}}}`, object[property]);
        }
      }
      return success(content);
    });
  });
};

const bmiCalculator = async (req, res) => {
  const weight = req.params.weight;
  const height = req.params.height;
  const bmi = weight / (height * height);
  const response = await parseTemplate('calculator.html', { data: bmi, ime: 'BMI CALCULATOR' });
  res.send(response);
};

const calculateForce = async (req, res) => {
  //Second Newton Law
  const mass = req.params.mass;
  const accelaration = req.params.acc;
  const response = await parseTemplate('calculator.html', {
    data: mass * accelaration,
    ime: 'Second Newton Law',
    podatok: 'TESTIRAME',
  });
  res.send(response);
};

const getCalculator = async (req, res) => {
  try {
    const output = await parseTemplate('calculator_form.html');
    res.send(output);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
};

const postCalculator = async (req, res) => {
  try {
    console.log(req.body);
    let result = '';

    switch (req.body.op) {
      case 'sobiranje':
        result = `${Number(req.body.a) + Number(req.body.b)}`;
        break;
      case 'odzemanje':
        result = `${Number(req.body.a) - Number(req.body.b)}`;
        break;
      case 'delenje':
        result = `${Number(req.body.a) / Number(req.body.b)}`;
        break;
      case 'mnozenje':
        result = `${+req.body.a * +req.body.b}`;
        break;
      default:
        result = 'sendNepoznat operator';
    }

    let response = await parseTemplate('calculator.html', {
      data: result,
      ime: 'Operacija',
    });

    res.send(response);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  bmiCalculator,
  calculateForce,
  getCalculator,
  postCalculator,
};
