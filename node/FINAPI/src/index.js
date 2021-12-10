const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express();
app.use(express.json())

const customers = []

// Middleware
function verifyIfExistsAccountCPF(req, res, next) {
   const { cpf } = req.headers

   const customer = customers.find((customer) => customer.cpf === cpf)


   if (!customer) {
      console.error("Customer not found");
      return res.status(400).json({
         error: "Customer not found"
      })
   }

   req.customer = customer
   return next()
}
/** 
 * cpf - string
 * name - string
 * id - uuid
 * statememnt - []
*/
app.post("/account", (req, res) => {
   const { cpf, name, statement } = req.body;
   const costumersAlreadyExists = customers.some((customer) => customer.cpf === cpf)

   if (!costumersAlreadyExists) {
      customers.push({
         cpf,
         name,
         id: uuidv4(),
         statement
      });
      console.log(customers);

      return res.status(201).json({
         customers
      });

   } else {
      console.log(customers);
      return res.status(400).json({
         error: "The user already exists"
      });

   }



});

app.get("/statement", verifyIfExistsAccountCPF, (req, res) => {
   const {customer} = req

   return res.status(200).json({
      "name": customer.name,
      "statement": customer.statement
   })

})

app.listen(3333);