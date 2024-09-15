const express = require('express');

const app = express();

// Ruta raíz
app.get('/', (request, response) => {
    response.send('Ruta raíz: Bienvenido al servidor!');
});

// Users Routes API RESTFUL

app.post('/users', (request, response) => {
    response.send('POST => users => create');
});

app.get('/users', (request, response) => {
    response.send('GET => users => list');
});

app.get('/users/:id', (request, response) => {
    response.send(`GET => users => show, ID: ${request.params.id}`);
});

app.patch('/users/:id', (request, response) => {
    response.send(`PATCH => users, ID: ${request.params.id}`);
});

app.put('/users/:id', (request, response) => {
    response.send(`PUT => users => replace, ID: ${request.params.id}`);
});

app.delete('/users/:id', (request, response) => {
    response.send(`DELETE => users => destroy, ID: ${request.params.id}`);
});

app.listen(4000, () => {
    console.log('El servidor se está ejecutando en el puerto 4000');
});
