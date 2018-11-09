const mongoose = require('mongoose');

module.exports = () => {

    const dbHost = process.env.DBHOST || 'localhost';
    const options = {
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30,
    };

    const uri = `mongodb://${dbHost}:27017/todo`;

    console.log('URI: ', uri);

    mongoose.connect(uri, options).then(
        () => {
            console.log('Conexion exitosa')
        },
        err => {
            console.log('Error al conectar a base de datos: ', err)
        }
    );

    return mongoose.model('Todo', {
        name: String,
        priority: Number,
    });
};