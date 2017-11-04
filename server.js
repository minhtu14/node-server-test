const express = require('express');

app = express();
app.get('/', (req, response) => {
  response.send({
    name : 'Tony',
    likes: ['money',
            'cars'
          ]
  });

});

app.get('/about', (req, response) => {
  response.send('About Page');

})

app.listen(3000);
