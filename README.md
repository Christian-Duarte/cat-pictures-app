Ejercicio: Galería de Imágenes Aleatorias

Descripción: Vas a construir una pequeña aplicación en React que haga peticiones a una API para obtener imágenes aleatorias de gatos y mostrarlas en pantalla. Además, el usuario podrá hacer clic en un botón para cargar una nueva imagen cada vez que lo desee.

Instrucciones:

Configura tu proyecto en React:

Crea un nuevo proyecto de React utilizando create-react-app o tu método preferido.

Crea un componente CatImage:

Este componente será responsable de mostrar la imagen de un gato y tendrá un botón para cargar una nueva imagen.

Utiliza la API de Cataas (Cat as a Service):

La API para obtener una imagen aleatoria es https://cataas.com/cat?json=true.
Realiza una petición a esta API para obtener la URL de la imagen.

Renderizado condicional:

Muestra un mensaje de carga mientras se espera la respuesta de la API.
Si ocurre un error durante la petición, muestra un mensaje de error.

Interactividad:

Agrega un botón que, al hacer clic, haga una nueva petición a la API y actualice la imagen mostrada.

Estiliza el componente:

Dale un estilo básico al componente para que la imagen y el botón se vean bien centrados en la pantalla.

Pistas:
Uso de useEffect: Usa el hook useEffect para hacer la petición a la API cuando el componente se monta por primera vez.

Estado del componente: Usa useState para manejar el estado de la imagen (URL de la imagen) y el estado de carga (cargando o error).

https://catfact.ninja/fact

https://cataas.com/cat/says/${}?fontSize=50&fontColor=red
