const express = require('express')
const app = express()
const mysql = require('mysql')
var json={title: 'title', text: 'text'};
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'anderson', 'pass', {
  dialect: 'mysql'
});




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

app.get('/', function (req, res) {
  connectToDatabase('localhost','anderson','pass','blog_db',requiringTheDatabase('select id,title , descripition from ??',['articles']))
    .then(
      responseQuery => res.json(responseQuery
    ));
})

app.get('/:postId', function (req, res) {
  console.log(req.params);
  connectToDatabase('localhost','anderson','pass','blog_db',requiringTheDatabase('select body from ?? where id=?',['articles',req.params.postId]))
    .then(
      responseQuery => res.json(responseQuery
    ));
})

app.post('/post', function (req, res) {
  console.log(req.body);
  // connectToDatabase('localhost','anderson','pass','blog_db',requiringTheDatabase('insert into ?? values (?,?,?,?)',['articles',null, req.body.title,req.body.description, req.body.text]))
  //   .then(responseQuery => console.log(responseQuery));
  //   res.json({message:'Artigo Cadastrado Com Sucesso'});
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });

 
function connectToDatabase(_host, _user, _password, _database, _query){
   let connection = mysql.createConnection({
      host     : _host,
      user     : _user,
      password : _password,
      database :  _database
    });
    
   return new Promise(function(resolve, reject) {
      connection.connect();
      connection.query(_query, function (err, rows, fields) {
      if (err){ 
        throw err
      }
        connection.end()
        resolve(rows);
      })
    
});
}

function requiringTheDatabase(_query, _inserts){
  return mysql.format(_query, _inserts);
}

module.exports = app;





