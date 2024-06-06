# Prueba técnica Instaleap para Desarrollador Backend (Node.js + Express + TypeScript)

## IDE

Visual Studio

## Editor de texto

Visual Studio Code versión 1.89.1

## Tecnologías

1. Node.js versión 21.7.1
2. Express.js
3. TypeScript
4. MySQL
5. Swagger

## Descripción de la API

API para la gestión de tareas con CRUD (Crear, Leer, Actualizar, Eliminar) y un sistema de autenticación y autorización, garantizando que los usuarios gestionen únicamente sus propias tareas. La API debe ser consumible desde Postman.

## Estructura de archivos

### Crear package.json

1. Crear carpeta "Prueba técnica".
2. Abrir terminal en la carpeta y escribir "npm init".
3. Dar enter hasta el ítem "description" y escribir "Prueba técnica Nodejs Express con TypeScript".
4. Dar enter hasta el ítem "git repository" y escribir "<https://github.com/Daimond92/Prueba_tecnica.git>".
5. Dar enter hasta el ítem "author" y escribir "David Alejandro Malaver Arévalo".
6. Dar enter hasta finalizar.

### Instalación de dependencias

Para el desarrollo de la prueba se van a instalar las siguientes dependencias:

- class-validator.
- class-transformer.
- cors.
- dotenv.
- express.
- morgan.
- mysql.
- typeorm.
- typeorm-naming-strategies.
- typescript.
- bcrypt
- jsonwebtoken
- passport-jwt
- passport
- passport-local
- reflect-metadata
- jsdoc
- swagger-jsdoc
- swagger-ui-express

Desde la terminal se va ejecutar el siguiente código para la instalación de estas dependencias:

    npm install class-validator class-transformer cors dotenv express morgan mysql typeorm typeorm-naming-strategies typescript bcrypt jsonwebtoken passport-jwt passport passport-local reflect-metadata swagger-jsdoc swagger-ui-express

Adicionalmente, se van a instalar otras dependencias de desarrollo que no serán utilizadas en la etapa de producción y son las siguientes:

- types/cors.
- types/express.
- types/morgan.
- concurrently.
- nodemon.
- types/mysql2.
- types/bcrypt.
- types/passport-jwt
- types/passport-local
- types/jsonwebtoken
- tslint
- types/swagger-jsdoc
- types/swagger-ui-express

Desde la terminal se va ejecutar el siguiente código para la instalación de estas dependencias:

    npm install -D @types/cors @types/express @types/morgan concurrently nodemon types/mysql2 @types/bcrypt @types/passport-jwt @types/passport-local @types/jsonwebtoken tslint jsdoc @types/swagger-jsdoc @types/swagger-ui-express

## Configuración package.json

Dentro de la configuración scripts en el ítem "start" indicar la siguiente ruta:

- "tsc && node dist/server.js"

Adicionalmente, crear el siguiente ítem debajo del ítem start y su ruta:

- "start:dev": "tsc && concurrently \"tsc -w\" \"nodemon dist/server.js\""

## Crear tsconfig.json

Desde la terminal se va ejecutar el siguiente código;

    tsc --init

Luego se van a activar las siguientes opciones:

- "target".
- "experimentalDecorators".
- "emitDecoratorMetadata".
- "module".
- "outDir".
- "esModuleInterop".
- "forceConsistentCasingInFileNames".
- "strict".
- "strictPropertyInitialization".
- "skipLibCheck".

## Crear API de servidor

Se debe crear la siguiente estructura de datos:

1. Crear archivo .env con los datos de conexión a la base de datos que son los siguientes:

   - PORT=8000
   - DB_PORT=3306
   - DB_HOST=localhost
   - DB_DATABASE=instaleap_test
   - DB_USER=root

2. Carpeta src donde se deben incluir lo siguiente:
   - Carpeta auth para la autentificación de usuarios dentro de la API con las siguientes subcarpetas:
     - controllers
     - interfaces
     - services
     - strategies
     - utils
     - archivo de ruta
   - Carpeta config para determinar la configuración de los elementos dentro de la API y su adecuada conexión a la base de datos en MySQL
   - Carpeta shared para adecuar el enrutamiento principal de la API, el middleware principal y los metodos de respuestas y manejo de erroes con las siguientes subcarpetas:
     - middlewares
     - response
     - routers
   - Carpeta task para adecuar el entorno de las tareas de los usuarios dentro de la API con las siguientes subcarpetas:
     - controllers
     - dto
     - entities
     - middlewares
     - services
     - archivo de ruta
   - Carpeta user para adecuar el entorno de los usuarios dentro de la API con las siguientes subcarpetas:
     - controllers
     - dto
     - entities
     - middlewares
     - services
     - archivo de ruta
   - Archivo principal donde se establece el funcionamiento de la API.

## Ejecución de la API

Para ejecutar la API de forma correcta se debe realizar el siguiente proceso:

1. Abrir un terminal en git bash.
2. Escribir el siguiente comando npm run start:dev y dar click en ejecutar
3. Para visualizar un funcionamiento adecuado se debe observar en la consola los siguientes mensajes:
   - "Server listening on port 8000", que indica que la API funciona adecuadamente.
   - "Connect success", que indica que esta conectado de forma correcta a la base de datos MySQL.
4. Abrir el Postman para ejecutar las diferentes rutas:
   - Login.
   - Crear usuarios.
   - Consultar usuarios
   - Crear tareas.
   - Consultar tareas.
   - Modificar tareas.
   - Eliminar tareas.
