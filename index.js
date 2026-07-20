const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const VERIFY_TOKEN = "exam48507"; // এটা পরে চেঞ্জ করবেন

app.get('/webhook', (req, res) => {
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  
  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.listen(3000, () => console.log('Server running'));
