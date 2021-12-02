const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express();
app.use(express.json())

const customers = []

/** 
 * cpf - string
 * name - string
 * id - uuid
 * statememnt - []
*/
app.post("/account", (req, res) =>{
   const {cpf, name} = req.body;
const id = uuidv4()
   customers.push({
      cpf,
      name,
      id,
      statement: []
   });

   return res.status(201).json({
      message: "Deu tudo certo"
   });
});

app.listen(3333);