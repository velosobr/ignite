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

/**
 * CRIAR CONTA
 */
app.post("/account", (req, res) => {
   const { cpf, name, balance, statement } = req.body;
   const costumersAlreadyExists = customers.some((customer) => customer.cpf === cpf)

   if (!costumersAlreadyExists) {
      customers.push({
         cpf,
         name,
         id: uuidv4(),
         balance,
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

/**
 * EXTRATO
 */
app.get("/statement", verifyIfExistsAccountCPF, (req, res) => {
   const { customer } = req

   return res.status(200).json({
      "name": customer.name,
      "statement": customer.statement
   })

})
/**
 * DEPOSITO
 */
app.post("/deposit", verifyIfExistsAccountCPF, (req, res) => {
   const { description, amount } = req.body

   const { customer } = req

   const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: "credit",
   }

   customer.statement.push(statementOperation)
   customer.balance += amount

   return res.status(201).json({ "message: ": "Deposit done with success", "balance": customer.balance })
})

/**
 * SAQUE
 */
app.post("/withdraw", verifyIfExistsAccountCPF, (req, res) => {
   const { customer } = req
   const { amount } = req.body

   if (customer.balance < amount) {
      return res.status(401).json({
         error: "Insufficient funds"
      })
   }
   customer.balance -= amount
   const statementOperation = {
      amount,
      created_at: new Date(),
      type: "debit",
   }

   customer.statement.push(statementOperation)


   return res.status(200).json({
      "user": customer.name, "statement": customer.statement, "balance": customer.balance
   })
})

app.listen(3333);