const os = require('os')

console.log('OS ', os.platform())
console.log('ArchProcessor ', os.arch())
console.log('Processors ', os.cpus())
console.log('Свободная память ', os.freemem())
console.log('Всего память ', os.totalmem())
console.log('Домашняя директория ', os.homedir())
console.log('Время работы ', os.uptime())