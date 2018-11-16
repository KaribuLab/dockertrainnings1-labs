const express = require('express');
const mongoose = require('mongoose');
const connection = require('./connection')(mongoose);
const healthcheck = require('./healthcheck')(connection);
const Todo = require('./todo')(mongoose);

connection.open();

const app = express();


app.use(express.json());
app.get('/healthcheck', (req, res) => {
    const status = healthcheck.status();
    let code = status.healthy !== true ? 503 : 200;
    res.status(code).json(status);
});

app.post('/', (req, res) => {

    todo = new Todo({
        name: req.body.name,
        priotiry: req.body.priotiry,
    });

    todo.save((err, todo) => {
        if (err) {
            res.sendStatus(400);
            res.json({
                error: err,
            });
        } else {
            res.json(todo);
        }
    });
});

app.get('/:id', (req, res) => {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) {
            res.sendStatus(400);
            res.json({
                error: err,
            });
        } else {
            res.json(todo);
        }
    });
});

app.get('/', (req, res) => {
    Todo.find(function (err, todos) {
        if (err) {
            res.sendStatus(400);
            res.json({
                error: err,
            });
        } else {
            res.json(todos);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});