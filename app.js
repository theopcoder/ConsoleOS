const prompt = require('prompt');
const chalk = require("chalk");
const db = require("quick.db");

console.log("Hello World");

prompt.start();

prompt.get(['username', 'email'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);

    if (result.username == "Bob"){
        console.log("Hi Bob!");
    }
});