// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
var todo = require('../models/todo.js')

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get('/api/todos', function (req, res) {
    todo.findAll()
      .then(results => {
        console.log(`
        *****
        todo.findAll():
        ${results}`)

        res.json(results)
      })
  })

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post('/api/todos', function (req, res) {
    console.log(req.body)
    todo.create(req.body)
      .then(results => {
        console.log(`
        *****
        todo.create():
        ${results}`);
        res.json(results)
      })
  })

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete('/api/todos/:id', function (req, res) {
    todo.destroy(req.params.id)
      .then(results => {
        console.log(`
        ******
        ${req.params.id} has been destroyed`)
        res.json(results)
      })
  })


  // PUT route for updating todos. We can access the updated todo in req.body
  app.put('/api/todos', function (req, res) {
    todo.update(req.body)
      .then(results => {
        console.log(`
        *****
        ${req.body.text} has been completed.`)
        res.json(results)
      })
  })
}
