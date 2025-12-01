var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { turma: 'Info 3M' });
});

router.get('/meu-endpoint', function(req, res) {
  let msg = '<h3>Este é o meu primeiro endpoint<h3><br><a href="http://localhost:3000/"><button>Página Inicial</button></a>';
  res.send(msg);

  /*res.send('<h3>Este é o meu primeiro endpoint</h3>')*/

}) 

router.get('/agora', function(req,res){

  var data = new Date();
  res.send('Agora são: ' + data + '<br><br><a href="http://localhost:3000/"><button>Página Inicial</button></a>')


})

module.exports = router;
