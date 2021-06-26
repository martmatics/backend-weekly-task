const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
})
