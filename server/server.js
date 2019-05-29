const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const bodyParser = require('body-parser');
const { getHouse } = require('./models/modal');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public/dist'));

app.use('/review/:id', (req, res) => {
  const id = Number(req.params.id);
  getHouse(id)
    .then((data) => {
      res.status(202);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.end(err);
    });
});


app.listen(port, () => console.log(`LISTENING TO ANDRE PORT ${port}`));
