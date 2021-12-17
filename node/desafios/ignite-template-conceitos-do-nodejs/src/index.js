const express = require('express');
const cors = require('cors');
const req = require('express/lib/request');

const { v4: uuidv4 } = require('uuid');
const { use } = require('express/lib/application');
const res = require('express/lib/response');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers

  const user = users.find((user) => user.username === username)

  if (!user) {
    return response.status(400).json({
      error: 'Usuário já existe'
    })
  }

  request.user = user
  return next
}

app.post('/users', (request, response) => {
  const { name, username } = request.body

  const checksExistsUserAccount = users.find((user) => user.username === username)

  if (checksExistsUserAccount) {
    return response.status(400).json({
      error: "User already exists"
    })
  }
  const user = {
    id: uuidv4(), // precisa ser um uuid
    name,
    username,
    todos: []
  }

  users.push(user);
  return response.status(201).json(user)

});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { username } = request.headers

  const user = users.some((user) => user.username === username)

  return user.todos
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;