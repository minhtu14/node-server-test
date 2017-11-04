const express = require('express');

app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, response) => {
  response.send({
    name : 'Tony',
    likes: ['money',
            'cars'
          ]
  });

});

app.get('/about', (req, response) => {
  response.send(`About Page ${port}`);

})

app.listen(port);
