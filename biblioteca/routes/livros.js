let express = require('express');
let db = require('../utils/db')
let router = express.Router();

router.get('/listar', function(req, res) {

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
  
  router.get('/cadastrar', function(req, res) {
  
    res.render('livros-add');
  
  });

  router.post('/cadastrar', function(req, res) {

    var isbn        = req.body.isbn;
    var titulo      = req.body.titulo;
    var ano         = req.body.ano;
    var sinopse     = req.body.sinopse;
    var editora     = req.body.editora;
    var conservacao = req.body.conservacao;
    var estoque     = req.body.estoque;
    var preco       = req.body.preco;
    var media       = req.body.media;
    var avaliacoes  = req.body.avaliacoes;

    let cmd = `INSERT INTO tb_livro (isbn, titulo, sinopse, ano, preco, estoque,
        conservacao, media_avaliacao, num_avaliacoes, id_editora)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    db.query(cmd, [isbn, titulo, sinopse, ano, preco, estoque, conservacao, media, avaliacoes, editora], 
        
    function(erro){
    if (erro){
    res.send(erro);
    }
    res.redirect('/livros/listar');
    });
    });

    module.exports = router;