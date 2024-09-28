# Cat-Pictures-App

Este proyecto es una aplicación web que consume la API de [Cataas](https://cataas.com/) y [Cat Facts](https://catfact.ninja/) para mostrar imágenes de gatos con un texto basado en datos curiosos sobre gatos. La aplicación está desarrollada en **React.js** y utiliza un hook personalizado para manejar la lógica de las peticiones a las APIs.

## Características

- Muestra datos curiosos sobre gatos obtenidos de la API de **Cat Facts**.
- Genera imágenes de gatos a partir del texto de los datos curiosos utilizando la API de **Cataas**.
- Manejo de errores en caso de que las peticiones a las APIs fallen.
- Interfaz simple y funcional.
- Botón para refrescar el dato curioso y la imagen del gato.

## Capturas de Pantalla

![Captura de pantalla 2024-09-28 111226](https://github.com/user-attachments/assets/97b0b63b-09e3-47e7-9d56-7e7f7b38c04b)
*Interfaz de usuario mostrando un dato curioso y una imagen de gato*

## Tecnologías Utilizadas

- **React.js**: Para crear la interfaz de usuario.
- **JavaScript (ES6+)**: Para la lógica de la aplicación y el consumo de las APIs.
- **Fetch API**: Para realizar las solicitudes HTTP a las APIs.
- **CSS**: Para el diseño básico de la aplicación.
- **Cataas API**: Para generar imágenes de gatos con texto.
- **Cat Facts API**: Para obtener datos curiosos sobre gatos.


## Cómo ejecutar el proyecto
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Christian-Duarte/cat-pictures-app.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd cat-pictures-app
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Ejecutar la aplicación:
   ```bash
   npm run dev
   ```
