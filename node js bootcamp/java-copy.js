// const replaceTemplate = (temp, product) => {
//   let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
//   output = output.replace(/{%IMAGE%}/g, product.image);
//   output = output.replace(/{%PRICE%}/g, product.price);
//   output = output.replace(/{%FROM%}/g, product.place);
//   output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//   output = output.replace(/{%QUANTITY%}/g, product.quantity);
//   output = output.replace(/{%DESCRIPTION%}/g, product.description);
//   output = output.replace(/{%ID%}/g, product.id);

//   if (product.organic === false) {
//     output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
//     return output;
//   }
// };

// const tempmain = fs.readFileSync(`${__dirname}/farming/main.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/farming/card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(
//   `${__dirname}/farming/product.html`,
//   'utf-8'
// );
// const data = fs.readFileSync(`${__dirname}/farming/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);
