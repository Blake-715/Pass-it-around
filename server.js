const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

// Home page 
app.get('/', (req, res) => {
    res.send(`
      <h1>99 Bottles of beer on the wall</h1>
      <a href="/98">take one down, pass it around</a>
    `);
  });
  
  // Number of bottles 
  app.get('/:number_of_bottles', (req, res) => {
    const number_of_bottles = parseInt(req.params.number_of_bottles);
  
    if (number_of_bottles === 0) {
      res.send(`
        <h1>No more bottles of beer on the wall</h1>
        <a href="/">Start over</a>
      `);
    } else {
      const next_bottle = number_of_bottles - 1;
      res.send(`
        <h1>${number_of_bottles} Bottles of beer on the wall</h1>
        <a href="/${next_bottle}">take one down, pass it around</a>
      `);
    }
  });


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});