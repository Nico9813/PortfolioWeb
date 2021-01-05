## Descripcion

Este proyecto es un portfolio facilmente personalizable para que puedas mostrar todos tus proyectos. Posee un diseño responsive lo cual hace comoda su visualizacion tanto en navegadores como en celulares. Es generado como un sitio estatico utilizando react y cargado en base a un archivo json con los datos que se quieren mostrar.

Tambien esta configurado para hostearse en Github Pages utilizando un dominio configurable.

Se puede ver ejemplo de su uso en [mi propio portfolio](https://nico9813.github.io/PortfolioWeb/)

## Guia de instalacion

Ejecucar en la terminal los siguientes comandos:

1. `git clone https://github.com/Nico9813/PortfolioWeb.git`
2. `npm install`
3. `npm start`

Finalmente abrir [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador

## Guia de configuracion

1. Cargar todas las imagenes que se vayan a utilizar en la carpeta `/public`.
2. Abrir el archivo `perfil.json` y configurarlo con sus datos personales.

<img src="https://github.com/Nico9813/PortfolioWeb/blob/master/PerfilEjemplo.png?raw=true" width="700px" height="675px"/>

**Nota:** se encuentra cargado con mis propios datos personales a modo de ejemplo.

## Guia de despliegue en github pages

1. Modificar el atributo **homepage** del archivo `/package.json` con el dominio con el que se desea hostear la aplicacion
2. Ejecutar el comando `gh-pages -d build` (Agregado ya con el comando `npm run deploy`)

<img src="https://github.com/Nico9813/PortfolioWeb/blob/master/GhPages.png?raw=true" width="500px" height="300px"/>

Una vez finalizada la ejecucion de este comando su portfolio estara desplegado en el dominio indicado.
