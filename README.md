# prueba_oshinstar

## Ejecución del proyecto
El proyecto puede ser ejecutado mediante docker  para esto es necesario tener docker instalado de manera local, acceder desde la terminal a la ruta donde se encuentre el código fuente y luego ejecutar el comando "docker-compose up" y de esta manera ya estará corriendo el servidor y podrá acceder a los endpoints

## Documentacion
Puede acceder a la documentacion desde el endpoint /api-docs
ejemplo: http://localhost:5000/api-docs


## Preguntas

-  **¿Cuál error code respondieras si un cliente ingresa una contraseña para su cuenta de forma incorrecta?** R/. En este caso se usa el status code 401 "unauthorized"

-  **¿Cuál código usarías para que el servidor le deje saber a un cliente que un recurso fue creado?** R/. El estatus code indicado para este caso es el 201 "created"

-  **¿Cuál código usarías para informar que el servidor tiene X error en su ejecución?** R/. Se usa el status code 400 "bad request"