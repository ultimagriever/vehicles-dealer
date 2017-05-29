const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, 'build')));
app.set('views', path.resolve(__dirname, 'build'));
app.set('view engine', 'ejs');

app.get('*', function(req, res, next) {
  res.render('index', { reactApp: 'supposedly server-side rendering' });
});

app.listen(3333, () => console.log('Express listening on port 3333'));
