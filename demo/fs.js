const fs = require('fs');
const path = require('path');

/**
 * CREATE NEW FOLDER
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if(err) {
        throw err
    }
    console.log('Succes create folder')
})
*/

const filePath = path.join(__dirname, 'test', 'text.txt')
/*
CREATE NEW FILE 
fs.writeFile(filePath, 'Hello NodeJS', err => {
    if(err) {
        throw err
    }

    console.log('File create')
})


APPEND INFORMATION IN FILE
fs.appendFile(filePath, '\nHello NodeJS', err => {
    if(err) {
        throw err
    }

    console.log('File rewrite')
})
*/
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    /*
    const data = Buffer.from(content) //old version
    console.log('Content: ', data)
    */
    console.log(content)
})

