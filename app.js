const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.post('/', (req, res) => {
  const body = req.body;
  return res.status(201).json(body);
  
  
});


app.put('/', (req, res) => {
  const body = req.body;
  body.message = 'PUT:' + body.message;
  return res.json(body);
});

app.delete('/', (req, res) => {
  return res.json({ message: 'Deleted'});
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
