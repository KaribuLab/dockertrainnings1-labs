module.exports = (mongoose) => {
    return {
        status() {
            const readyState = mongoose.connection.readyState;

            let status = {
                code: readyState,
                message: '',
            };

            switch (readyState) {
                case 0:
                    status.message = 'disconnected';
                    break;
                case 1:
                    status.message = 'connected';
                    break;
                case 2:
                    status.message = 'connecting';
                    break;
                case 3:
                    status.message = 'disconnecting';
                    break;
                default:
                    status.message = 'unknown';;
                    break;
            }

            return status;
        },
        open() {
            const dbHost = process.env.DBHOST || 'localhost';

            const uri = `mongodb://${dbHost}:27017/todo`;

            console.log('URI: ', uri);

            const options = {
                useNewUrlParser: true,
                autoReconnect: true,
                reconnectTries: 3,
                reconnectInterval: 3000,
            };

            mongoose.connect(uri, options).then(() => {
                console.log('Conexión exitosa');
            }, (err) => {
                console.log('Error al iniciar conexión: ', err);
                process.exit(-1);
            });
        },
    };
};