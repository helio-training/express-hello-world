import Express from 'express';
import Path from 'path';
import Logger from 'morgan';
import Parser from 'body-parser';

import users from './routes/users';

const app = Express();


app.use(Logger('dev'));
app.use(Parser.json());
app.use(Express.static(Path.join(__dirname, 'public')));

app.use('/users', users);


app.set('db', { users: [] });

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
