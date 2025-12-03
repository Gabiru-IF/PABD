var express = require('express');
var router = express.Router();
var db = require('../utils/db');

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

router.get('/saudar/:nome', function(req, res){

  var msg = 'Olá ' + req.params.nome + '! Seja bem-vindo(a)!<br><br><a href="http://localhost:3000/"><button>Página Inicial</button></a>';
  res.send(msg)
})

router.get('/calcular-imc', function(req, res) {

var peso = req.query.peso;
var estatura = req.query.estatura;

var imc = peso / Math.pow(estatura, 2);
var msg = '<h3>Seu IMC é ' + imc.toFixed(2) + '</h3>';
res.send(msg);
// localhost:3000/calcular-imc/?peso=87&estatura=1.82
});

router.get('/livros/listar', function(req, res) {

  var cmd = `
  SELECT id_livro, titulo, ano, nome
	  FROM tb_livro INNER JOIN tb_editora
	    ON tb_editora.id_editora = tb_livro.id_editora
  ORDER BY titulo;`

  db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('livros-lista', {resultado: listagem});
  });

});



module.exports = router;
