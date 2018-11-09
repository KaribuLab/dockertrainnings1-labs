const fs = require('fs');

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
        try {
            const todo = JSON.parse(fs.readFileSync(fileName, 'utf8'));
            cb(todo);
        } catch (error) {
            cb({
                error: error,
            });
        }
    },
    getAll(cb) {
        const todos = fs.readdirSync('/tmp').filter((file) => {
            return file.indexOf('todo-') > -1;
        }).map((file) => {
            return JSON.parse(fs.readFileSync(`/tmp/${file}`, 'utf8'));
        });
        cb(todos);
    },
};