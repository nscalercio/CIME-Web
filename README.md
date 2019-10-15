# CIME WEB

Este proyecto esta realizado con Sapper.

A diferencia del uso mas corriente de Sapper (Web dinamica mediante SSR), en este proyecto Sapper se utiliza unicamente como generador de archivos estaticos. 

De esta manera se asegura que la web este compuesta por archivos estaticos ligeros y de carga rapida, que pueden actualizarse y regenerarse de manera periodica (como si fuese un blog).

Para mas info sobre Sapper: https://sapper.svelte.dev/

## Agregado de un Proyecto

Para agregar un proyecto solo se debera modificar el archivo \_proyectos.js que esta dentro de la carpeta routes.

Dentro del archivo se encuentra un arreglo de objetos llamado "proyectos", para agregar un nuevo proyecto se debera agregar un nuevo objeto con la siguiente información:

- nombre -> Cadena de texto con el nombre completo del proyecto. _(Ej: "Proyecto X")_

- showcase -> Arreglo con los nombres y extension de las imagenes que iran en el carrousel de la pagina del proyecto _(Ej: ["img1.png","img2.png"])_

- tecnologias -> Arreglo con los nombres de las tecnologias utilizadas en el proyecto. _(Ej: ["JavaScript","SQL"])_

- estado -> Entero que representa el estado actual del proyecto, siendo 0="En desarrollo", 1="Prototipo en Pruebas", 2="Finalizado". _(Opcional)_

- link -> Cadena con el link al sitio del proyecto, si lo tuviera. _(Ej: "http://proyecto1.com")_ _(Opcional)_

- caracteristicas -> Arreglo de cadenas con las caracteristicas del proyecto. _(Ej: ["Caracteristica 1","Caracteristica 2"])_

- breve -> Cadena de texto con una descripción breve del proyecto que se muestra en el home.

- descripcion -> Descripción detallada mostrada en la pagina del proyecto. Esta cadena puede utilizar tags HTML que seran renderizados al generar la pagina. Se recomienda el uso del tag "strong" para dar enfasis en ciertas partes de la descripción, y el tag "break" para ingresar saltos de linea.
  
- logo -> Nombre y extensión del archivo del logo. _(Ej: "logoProyecto.svg")_

Consideraciones: 
- Debido a que el servidor corre en linux, los nombres de archivos son case-sensitive.
- El campo de descripción no esta sanitizado, por ende, no ingresar tags html que puedan afectar el normal funcionamiento de la web. (Script tags, canvas, etc).

## Ubicación de archivos

Una vez ingresado un nuevo proyecto, se deben guardar los archivos estaticos correspondientes en las siguientes ubicaciones:

- Logos: El logo del proyecto va guardado en el directorio static/logos. Como nombre se recomienda simplemente el nombre del proyecto y la extension. _(Ej: proyectoX.svg)_

- Showcase: Las imagenes que correspondan al carrousel deben ir guardadas en el directorio static/carrousel. Como nombre se recomienda simplemente el nombre del proyecto y un numero a modo de indice. _(Ej: proyectoX1.png, proyectoX2.png, etc)_

## Generación de archivos estaticos

Si bien la pagina se generara mediante CI / CD de manera automatica, si se desea generar de manera manual los archivos, se debera correr el comando *npm run export*.
