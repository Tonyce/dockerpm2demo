const Koa = require('koa');
const app = new Koa();


// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// // Connection URL
// var url = 'mongodb://mongo/myproject';
// // Use connect method to connect to the Server
// MongoClient.connect(url, function (err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//   db.close();
// });

// let a = 1;
app.use(ctx => {
  console.log('log');
  console.error('err--')
  let a = 2;
  a += 5;
  ctx.body = a;
});

app.listen('8000', () => {
  console.log('start at 8000')
});