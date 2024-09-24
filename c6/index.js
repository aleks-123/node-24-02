const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello world');
// });

// server.listen(10000, '127.0.0.1', (err) => {
//   if (err) console.log('err');
//   console.log('Server started on Port 10000');
// });

// /op/2/3
const handler = (req, res) => {
  console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers['user-agent']);
  const [_, op, a, b] = req.url.split('/');
  console.log(op, a, b);

  let o;

  switch (op) {
    case 'sobiranje':
      o = Number(a) + Number(b);
      res.end(`${o}`);
      break;
    case 'odzemanje':
      o = Number(a) - Number(b);
      res.end(`${o}`);
      break;
    case 'delenje':
      o = Number(a) / Number(b);
      res.end(`${o}`);
      break;
    case 'mnozenje':
      o = Number(a) * Number(b);
      res.end(`${o}`);
      break;
    default:
      res.end('Nema takva operacija');
  }
};

const server = http.createServer(handler);

server.listen(10000, '127.0.0.1', (err) => {
  if (err) console.log('err');
  console.log('Server started on Port 10000');
});

//? Servis koj kje obrabatuva ruti od sledniot tip

// /ime/aleksandar
// /ime/pero
// /ime/bojan
// /ime/jovana
// /ime/stanko
// /ime/ivana
// /ime/goran

// string parno:da, karakteri: 5, soglaski:2, samoglaski: 3
