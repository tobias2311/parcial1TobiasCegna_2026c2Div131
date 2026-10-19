# Renderizando una lista de usuarios

#### Vamos a emular una prueba técnica! 
Tendrán que clonar la siguiente imagen de muestra, correspondiente al archivo `listaUsuarios.png`. El resultado final debe ser igual que la imagen


![Muestra](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdocs.appian.com%2Fsuite%2Fhelp%2F24.4%2Fimages%2FUsers_Page_Admin.png&f=1&nofb=1&ipt=e7c7113a85ba19bca64de84a838f1244b3c29e646bc1b398f26277f30ca21618)



---


## Parte 1 / HTML 
- **0.5 puntos** / Armar toda la estructura HTML con las [etiquetas semánticas fundamentales](https://www.w3schools.com/html/html_layout.asp). Incluyendo un `<header>` donde pondrán *Parcial 1 y la Division que corresponda* y el código correspondiente la imagen de arriba en la etiqueta `<main>`
- **0.5 puntos** / En el `<footer>` escriban un parrafo donde pondrán su nombre y apellido 
- **1 punto** / Identifiquen y clonen las etiquetas usadas en los elementos de la imagen
	- *Users*
    - La barra horizontal
    - Los inputs de *Active, Inactive, All*
    - La barra de busqueda
    - Los botones
    - Creen un div vacio con id `users-container` (posteriormente lo llenarán desde JavaScript)
    
 ---

## Parte 2 / CSS
- **1 punto** / Maquetar con `flex` (o `grid` si prefieren) la página para que todo se vea igual que en la imagen. Además, el texto del titulo y del footer debe estar centrado sin usar `flex`
- **0.5 puntos** / Crear (y usar) variables CSS para almacenar los siguientes colores
	- Color primario: `darkslateblue` o `#483D8B`
	- Color gris oscuro: `#dddddd`
    - Color gris claro (para las filas impares): `#fbfbfb`
 - **0.5 puntos** / Usen el color primario para el color `username` de la tabla, el color de fondo de los input, el color y el borde de los botones de abajo tal como aparece en la imagen. Usen el color gris oscuro para la barra horizontal, el borde de la barra de busqueda y de los campos de la tabla
 
 ---
 
## Parte 3 / JavaScript
- **2 puntos** / Trabajar y guardar localmente datos con JSON
    1. Conviertan a un array de objetos el json de `index.js`
    2. Guardenlos en `localStorage`. Una vez guardados en el almacenamiento local, comenten esta misma instrucción.
    3. Obtengan estos usuarios directamente del localStorage y muestrenlos en un `console.table`
    
- **4 puntos** / Manipulen el DOM para que al hacer click en el título de *Users*, se rendericen todos esos usuarios en una tabla HTML dentro del div `users-container`. Añadan lo siguiente:
	- Un checkbox
	- Una imagen de [icono de usuario](https://freeicons.io/search/icons?q=user)
	- Los campos username, name, phone y email
