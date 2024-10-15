const os = require('os');

const user=os.userInfo();
console.log(user);

console.log(`the system is running ${os.uptime()}`);

const system = {
    name: os.type(),
    cpu: os.cpus(),
    memory: {
        total: os.totalmem(),
        free: os.freemem()
    },
    arch : os.arch()

};
console.log(system);

