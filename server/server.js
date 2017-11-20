const express = require('express');

let app = express();
let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(404).send({error: 'Page not found'});
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Serhii',
            age: 20
        },
        {
            name: 'Mike',
            age: 22
        },
        {
            name: 'John',
            age: 25
        }
    ]);
});


app.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});

module.exports.app = app;
