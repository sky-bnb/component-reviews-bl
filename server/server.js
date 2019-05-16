const express = require('express');
const app = express();
const port = 3001

const bodyParser = require('body-parser')
const { getHouse } = require('./models/modal');

app.use(bodyParser.json())

app.use(express.static('./public/dist'))

app.use('/review/:id' , (req, res) => {
  const id = req.params.id
  // getHouse(id, (err, data) => {
  //   if (err) {
  //     res.status(404).end();
  //   } else {
  //     res.status(202).send(data)
  //   }
  // })
});

app.listen(port, () => console.log(`LISTENING TO ANDRE PORT ${port}`));
