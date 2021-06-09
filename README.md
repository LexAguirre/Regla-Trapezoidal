![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)

> Moremi Game Reserve, Botswana. Photo by <a href="https://unsplash.com/@chrisstenger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Stenger</a> on <a href="https://unsplash.com/t/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

# Examen DOM: Receta de Cocina

El objetivo de este ejercicio es evaluar la interacción con HTML utilizando la api DOM de javascript

## Requerimientos funcionales

Programar una página web que permita a los usuarios agregar ingredientes a una receta de cocina.

- La página web contará con un formulario que permita al usuario capturar:

  - El nombre del ingrediente
  - La cantidad
  - Las unidades de medida, por ejemplo gramos, litros, cucharadas, etc.
  - El costo del ingrediente en pesos mexicanos.
  - Calificación de español

- La página web también mostrará una tabla con los siguientes datos:

  - Nombre del ingrediente
  - Cantidad y unidades juntos, es decir en la misma columna (ver imágen de ejemplo)
  - Costo del ingrediente

- Al final del listado o tabla se mostrarán el costo total de todos los ingredientes

![Ejemplo](img/ejemplo.png)

> Ejemplo de la aplicación terminada.

1. (50 Puntos) Programar la clase `Ingredient`. Deberá incluir los siguientes:

   - Atributos:

     - `String name` nombre del ingrediente.
     - `Number amount` cantidad a utilizar.
     - `String unit` unidad de medida, por ejemplo gramos, litros, cucharadas, etc.
     - `Number cost` el costo de ingrediente.

   - Métodos:
     - (10 puntos) `constructor()` recibe los valores iniciales para todos los atributos.
     - (10 puntos) métodos de acceso de lectura para todos los atributos.
     - (30 puntos) `static readForm()` obtiene la información capturada en el formulario y si todo es correcto regresa un nuevo objeto tipo `Ingredient` con la información obtenida. En caso de que ocurra algún error regresa `false`. Todos los campos son requeridos, por lo que si el usuario no llena información en todos los campos, será considerado como un error.

2. (50 Puntos) Programar la clase `Recipie`. Deberá incluir los siguientes:
   - Atributos:
     - `Ingredient ingredients[]` vector que guarda todos ingredientes a utilizar en la receta.
   - Métodos:
     - (10 puntos) `constructor()` inicia `ingredients`
     - (20 puntos) `add(ingredient)` agrega un `ingredient` al vector `ingredients`. Si el `ingredient` no está registrado se agrega y regresa `true`. Si ya está registrado no se agrega y regresa `false`. Dos `ingredient` son iguales si tienen el mismo `name`.En ambos casos la página web deberá mostrar una notificación (alert) dependiendo del caso.
     - (10 puntos) También, cuando se agrega un nuevo registro de calificaciones deberá mostrarse su información en una tabla dentro de la página web. La información que deberá mostrarse son: `name` nombre del ingrediente (todo en mayúsculas), `amount` y `unit` juntos por ejemplo: 10 litros, 11 gramos, 2 cucharadas, etc., `cost` el costo de los ingredientes incluyendo el signo de pesos, por ejemplo $20, $500.
     - (10 puntos) También, deberá actualizar en el último renglón de la tabla, el costo total de la receta, es decir, la suma total de los ingredientes.

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Las clases deberán estar encapsuladas.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables

## Entregable

- Código fuente en este repositorio

## Evaluación

- Para que la tarea sea considerada como válida, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y obtendrán cero como calificación.
