const express = require('express');
const Todo = require('./todo');

const app = express();


app.use(express.json());
app.post('/', (req, res) => {
    Todo.create(req.body, (status) => {
        res.json(status);
    })
});

app.get('/:id', (req, res) => {
    Todo.getById(req.params.id, (status) => {
        res.json(status);
    })
});

app.get('/', (req, res) => {
    Todo.getAll((status) => {
        res.json(status);
    })
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});