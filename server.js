const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");
const bodyParser = require('body-parser');
console.log('here');
const urlencodedParser = express.urlencoded({extended: false});
app.use(bodyParser.json());
console.log('here1');
app.listen(port, () => console.log(`Listening on port ${port}`));
console.log('here2');
app.get('/express_backend', (req, res) => {
  let fileContent = fs.readFileSync("notesData.json", "utf8");
  res.send({data: fileContent});
});
console.log('here3');
app.post('/express_backend_2', urlencodedParser, (req, res) => {
  if(!req.body) return response.sendStatus(400);
  let fileContent = fs.appendFileSync("notesData.json", JSON.stringify(req.body));
});

app.post('/express_backend_delete', urlencodedParser, (req, res) => {
  if(!req.body) return response.sendStatus(400);
  fs.writeFile("notesData.json", JSON.stringify(req.body), function(error){
    res.send(req.body)
  });
});
