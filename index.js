const express = require('express');

const app = express();

// Middleware para parsear el cuerpo de la solicitud en formato JSON
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Ruta raíz: Bienvenido al servidor!');
});

// Ruta para sumar n1 y n2
app.get('/results/:n1/:n2', (req, res) => {
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    const result = n1 + n2;
    res.send(`Suma: ${n1} + ${n2} = ${result}`);
});

// Ruta para multiplicar n1 y n2
app.post('/results', (req, res) => {
    const { n1, n2 } = req.body;
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return res.status(400).send('Both n1 and n2 must be numbers');
    }
    const result = n1 * n2;
    res.send(`Multiplicación: ${n1} * ${n2} = ${result}`);
});

// Ruta para dividir n1 y n2
app.put('/results', (req, res) => {
    const { n1, n2 } = req.body;
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return res.status(400).send('Both n1 and n2 must be numbers');
    }
    if (n2 === 0) {
        return res.status(400).send('Division by zero is not allowed');
    }
    const result = n1 / n2;
    res.send(`División: ${n1} / ${n2} = ${result}`);
});

// Ruta para calcular la potencia de n1 elevado a n2
app.patch('/results', (req, res) => {
    const { n1, n2 } = req.body;
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return res.status(400).send('Both n1 and n2 must be numbers');
    }
    const result = Math.pow(n1, n2);
    res.send(`Potencia: ${n1} ^ ${n2} = ${result}`);
});

// Ruta para restar n1 y n2
app.delete('/results/:n1/:n2', (req, res) => {
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    const result = n1 - n2;
    res.send(`Resta: ${n1} - ${n2} = ${result}`);
});

// Iniciar el servidor en el puerto 4000
app.listen(4000, () => {
    console.log('El servidor se está ejecutando en el puerto 4000');
});

