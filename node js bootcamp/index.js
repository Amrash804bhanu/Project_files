const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////SERVER ////////////////////////////////////////

// we parse both syn and async method in code
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.place);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (product.organic === false) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
  }
};

// sunchrounous method
const tempOverview = fs.readFileSync(
  `${__dirname}/farmfest/main.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(`${__dirname}/farmfest/Card.html`, 'utf-8');
const tempProduct = fs.readFileSync(
  `${__dirname}/farmfest/product.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const Pathname = req.url;

  //
  if (Pathname === '/' || Pathname === '/overview') {
    res.writeHead(200, { 'content-type': 'text/html' });

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el));
    console.log(cardsHtml);
    res.end(tempOverview);
  } else if (Pathname === '/product') {
    res.end('this is product page');
  } else if (Pathname === '/api') {
    res.writeHead(200, { 'content-type': 'application/json' });

    res.end(data);
  }

  //NOT FOUND
  else {
    res.end('error');
  }
});

//listen to the server

server.listen(8000, '127.0.0.1', () => {
  console.log('listening to requests on port 8000');
});
