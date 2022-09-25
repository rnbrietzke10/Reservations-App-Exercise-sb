/** Start server for Lunchly. */

const app = require('./app');

app.listen(5050, function () {
  console.log('listening on 5050');
});
