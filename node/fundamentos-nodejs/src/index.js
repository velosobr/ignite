const express = require('express');

const app = express();


/**
 * GET - Buscar uma informacao dentro do servidor
 * POST - Inserir uma informacaoo no servidor
 * PUT - Alterar uma informacao no servidor
 * PATCH - ALterar uma informacao especifica
 * DELETE - Deletar uma informacao no servidor
 */

app.get("/courses", (req, res) => {
   return res.json ([
      "Curso 1",
      "Curso 2",
      "Curso 3",
      {materias: ["Portugues", "Matematica"]}
   ])
})
app.get("/", (req, res) => {
   return res.json({Hello : "weaweas"});
})
app.listen(3333)