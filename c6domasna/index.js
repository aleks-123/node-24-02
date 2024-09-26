const http = require('http');

//kreiranje na server

const server = http.createServer((req, res) => {
  console.log(req.url.split('/'));
  const [_, path, name] = req.url.split('/');

  if (!name) {
    res.end('Invalid URL');
  }

  const brojNaBukvi = name.length;
  const eParen = brojNaBukvi % 2 === 0 ? 'da' : 'ne';
  const bukviArray = name.split('');
  const samoglaski = ['a', 'e', 'i', 'o', 'u'];

  let samoglaskiBroj = 0;

  for (let i = 0; i < bukviArray.length; i++) {
    if (samoglaski.includes(bukviArray[i])) {
      samoglaskiBroj++;
    }
  }
  const soglaskiBroj = brojNaBukvi - samoglaskiBroj;
  res.end(`parno: ${eParen}, karakteri: ${brojNaBukvi}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`);
});

server.listen(10000, (err) => {
  if (err) console.log(err);
  console.log('Server has started on port 10000');
});
