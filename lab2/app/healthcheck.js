const os = require('os');
module.exports = (connection) => {
    return {
        status() {
            let health = {
                hostname: os.hostname(),
                healthy: true,
            };

            health['connection'] = connection.status();

            health.healthy = health.healthy && health.connection.code === 1;

            console.log('Checking health: ', JSON.stringify(health));


            return health;
        },
    };
};