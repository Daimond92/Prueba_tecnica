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

# Estructura de archivos

## Crear package.json

1. Crear carpeta "Prueba técnica".
2. Abrir terminal en la carpeta y escribir "npm init".
3. Dar enter hasta el ítem "description" y escribir "Prueba técnica Nodejs Express con TypeScript".
4. Dar enter hasta el ítem "git repository" y escribir "<https://github.com/Daimond92/Prueba_tecnica.git>".
5. Dar enter hasta el ítem "author" y escribir "David Alejandro Malaver Arévalo".
6. Dar enter hasta finalizar.

## Instalación de dependencias

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

Desde la terminal se va ejecutar el siguiente código para la instalación de estas dependencias:

    npm install class-validator class-transformer cors dotenv express morgan mysql typeorm typeorm-naming-strategies typescript bcrypt jsonwebtoken passport-jwt passport passport-local reflect-metadata

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

Desde la terminal se va ejecutar el siguiente código para la instalación de estas dependencias:

    npm install -D @types/cors @types/express @types/morgan concurrently nodemon types/mysql2 @types/bcrypt @types/passport-jwt @types/passport-local @types/jsonwebtoken tslint

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

# Crear API de servidor

# Crear router

# Crear config

# Crear entidades
