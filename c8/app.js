const express = require('express');
const calculator = require('./controller/calculator');

const app = express();

app.get('/bmi/:weight/:height', calculator.bmiCalculator);
app.get('/newton/:mass/:acc', calculator.calculateForce);

app.listen(10000, (err) => {
  if (err) return console.log('This server could not start');
  console.log('Server started on port 10000');
});
