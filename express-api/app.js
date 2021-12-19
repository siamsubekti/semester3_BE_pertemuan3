const express = require('express');
// const bodyParser = require('body-parser');
const Router = require('./routes/routes');
const multer = require('multer');
const form = multer();

const app = express();

// const rawBodySaver =  (req, res, buf, encoding) =>{
//   if (buf && buf.length) {
//     req.rawBody = buf.toString(encoding || 'utf8');
//   }
// }

// const options = {
//   verify: rawBodySaver
// };

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json(options));
app.use(form.array());

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('hello world')
});

const port = 3000;

app.use(Router);

app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${ port }`);
});