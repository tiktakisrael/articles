const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

const article = [];



app.post('/', (req, res) => {
  console.log(app);
  console.log(req.body, req.header);
  article.push(req.body);
  res.json(req.body);
});

app.get('/', (req, res) => {
  console.log(req.body, article);
  res.json({article});
});

app.listen(port, () => console.log('server started on port ', port ));
