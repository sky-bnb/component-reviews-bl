const express = require('express');
const app = express();
const port = 3001

app.use(express.static('./public/dist'))

app.use('/review/:id' , (req, res) => {
  
})


app.listen(port, () => console.log(`LISTENING TO ANDRE PORT ${port}`));
