Se requiere poder ejecutar una abundante cantidad de request POST 
Para abordar el problema se sugiere trabajar de la siguiente manera: 
![image](https://github.com/vlmnst/thousandsOfRequest/assets/81330160/0b23cf42-92bc-4a11-97be-186e6b7a6d17)

### Descripción Detallada del Proceso:
-Recibir solicitudes POST: Las solicitudes POST llegan al servidor.  
-Job Queue: Las solicitudes se encolan para ser procesadas.  
-Proceso de Trabajos: Permite procesar tarea por tarea. 
-Trabajo en Caché: Los datos validados se guardan temporalmente en la caché.  
-Insertar en BBDD: Los datos que se encuentran en la caché se insertan en la base de datos.  

### 👁️ en el archivo src/scriptRequest.ts
En la linea 15 se pueden modificar la cantidad de request a realizar al endpoint.  
Setearlo con el valor deseado antes de arrojar el comando "npm run dev"  

### Se inicia el programa con:
- npm install
- npm run dev

#### Archivo src/Database
Inicia sin archivos, pero al iniciar la app se crea un archivo "output.txt" que simula ser la base de datos donde se inserta la información.
Tener en cuenta que la información de este archivo no se pisa, ni sobreescribe, es decir que cada vez que se ejecute el programa
los datos se insertarán. 

Gracias por leer!
