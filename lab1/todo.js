const fs = require('fs');

const PREFIX = 'todo-';
const SUFFIX = '.json';

module.exports = {
    create(data, cb) {
        const timestamp = new Date().getTime();
        const fileName = `/tmp/todo-${timestamp}.json`;
        const content = JSON.stringify(data);
        console.log('Datos a persistir: ', content)
        console.log('Creando todo en archivo: ', fileName);

        fs.writeFile(fileName, content, 'utf8', function (err) {
            const status = {};

            if (err) {
                status['error'] = err;

            } else {
                status['id'] = timestamp;
            }

            cb(status);
        });
    },
    getById(id, cb) {
        const fileName = `/tmp/todo-${id}.json`;
        console.log('Buscando todo por ID: ', id);
        try {
            const todo = JSON.parse(fs.readFileSync(fileName, 'utf8'));
            console.log('Retornando todo: ', JSON.stringify(todo));
            cb(todo);
        } catch (error) {
            cb({
                error: error,
            });
        }
    },
    getAll(cb) {
        const todos = fs.readdirSync('/tmp').filter((file) => {
            return file.indexOf(PREFIX) > -1;
        }).map((file) => {
            let todo = JSON.parse(fs.readFileSync(`/tmp/${file}`, 'utf8'));
            const begin = PREFIX.length;
            const length = file.length - (begin + SUFFIX.length)
            const id = file.substr(begin, length);
            todo['id'] = Integer.parse(id);
            return todo;
        });
        console.log('Retornando lista de todos: ', JSON.stringify(todos));
        cb(todos);
    },
};