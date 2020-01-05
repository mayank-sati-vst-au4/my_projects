const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, error =>{
    if(error) throw error;
    console.log('Folder created');

});

// Create file using open method

// Create and write to file
//Does not create any folder
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello Mayank', error =>{
    if(error) throw error;
    console.log('Opening and Writing to file after creating it');

});

// Overwriting the above file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'My name is mayank', error =>{
    if(error) throw error;
    console.log('Overwriting the first created file');

    // Asynchronous callback so inside overwriting file
    // Appending text to already existing file
        fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I live in ramnagar', error =>{
        if(error) throw error;
        console.log('Appending text to the overwritten file');

});

});
