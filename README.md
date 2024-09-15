# API RESTful Simple

Este proyecto proporciona una API RESTful simple utilizando Express en Node.js. La API permite realizar operaciones matemáticas básicas: suma, multiplicación, división, potencia y resta.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Postman o cualquier herramienta para realizar solicitudes HTTP

## Instalación

1. Clona el repositorio o descarga el código.

   git clone git@github.com:AdolfoEscobar/tablas_restful.git

2. Navega al directorio del proyecto.

   cd <DIRECTORIO_DEL_PROYECTO>

3. Instala las dependencias.

   npm install

## Ejecución del Servidor

1. Ejecuta el servidor.

   npm start

   El servidor se ejecutará en http://localhost:4000.

## Operaciones de la API

### 1. Suma (GET /results/:n1/:n2)

Suma los valores n1 y n2.

- Método: GET
- URL: http://localhost:4000/results/:n1/:n2
- Ejemplo: http://localhost:4000/results/3/5

**Uso en Postman**:
1. Selecciona el método GET.
2. Introduce la URL http://localhost:4000/results/3/5.
3. Haz clic en "Send".

### 2. Multiplicación (POST /results)

Multiplica los valores n1 y n2.

- Método: POST
- URL: http://localhost:4000/results
- Cuerpo:
  {
    "n1": 4,
    "n2": 7
  }

**Uso en Postman**:
1. Selecciona el método POST.
2. Introduce la URL http://localhost:4000/results.
3. Selecciona la pestaña "Body", elige "raw" y selecciona "JSON".
4. Introduce el JSON y haz clic en "Send".

### 3. División (PUT /results)

Divide el valor n1 entre n2.

- Método: PUT
- URL: http://localhost:4000/results
- Cuerpo:
  {
    "n1": 20,
    "n2": 4
  }

**Uso en Postman**:
1. Selecciona el método PUT.
2. Introduce la URL http://localhost:4000/results.
3. Selecciona la pestaña "Body", elige "raw" y selecciona "JSON".
4. Introduce el JSON y haz clic en "Send".

### 4. Potencia (PATCH /results)

Calcula n1 elevado a la potencia de n2.

- Método: PATCH
- URL: http://localhost:4000/results
- Cuerpo:
  {
    "n1": 2,
    "n2": 3
  }

**Uso en Postman**:
1. Selecciona el método PATCH.
2. Introduce la URL http://localhost:4000/results.
3. Selecciona la pestaña "Body", elige "raw" y selecciona "JSON".
4. Introduce el JSON y haz clic en "Send".

### 5. Resta (DELETE /results/:n1/:n2)

Resta el valor n2 de n1.

- Método: DELETE
- URL: http://localhost:4000/results/:n1/:n2
- Ejemplo: http://localhost:4000/results/10/4

**Uso en Postman**:
1. Selecciona el método DELETE.
2. Introduce la URL http://localhost:4000/results/10/4.
3. Haz clic en "Send".

## Notas Adicionales

- Asegúrate de que el servidor esté en ejecución antes de enviar las solicitudes.
- Puedes usar Postman para realizar las solicitudes y ver las respuestas.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
