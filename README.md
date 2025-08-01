# Letter of Love

## 1. Descripción General

**Letter of Love** es una aplicación web desarrollada con React.js y Vite que permite a los usuarios crear cartas personalizadas de amor. La aplicación incluye funcionalidades para ingresar texto, seleccionar colores para el fondo y texto, subir imágenes, y generar una vista previa en tiempo real de la carta. Finalmente, el usuario puede descargar la carta como una imagen PNG.

## 2. Tecnologías Utilizadas

- **React.js** para construir la interfaz de usuario.
- **Vite** como bundler y servidor de desarrollo.
- **JavaScript ES6+** para la lógica.
- **HTML5 y CSS3** para estructura y estilos.
- **FileReader API** para manejar la carga de imágenes por parte del usuario.
- **html-to-image** para convertir la carta en imagen PNG.
- **React Icons** para iconografía.

## 3. Funcionalidades Principales

- **Entrada de texto dinámica:** Permite al usuario escribir títulos, cartas y poemas con vista previa en tiempo real.
- **Selector de colores:** Sistema para elegir colores tanto para el fondo como para el texto de la carta.
- **Subida de imágenes:** El usuario puede subir una imagen que se muestra en la carta y se incluye en la imagen final.
- **Descarga de carta:** Botón para descargar la carta generada en formato PNG.
- **Sistema de carga (loading):** Indicador visual que se muestra al cargar la aplicación inicialmente.
- **Conexión con API de poemas:** La app consume una API para generar poemas que el usuario puede incluir.

## 4. Estructura del Proyecto

```
src/
├── components/
│   ├── forms/
│   │   └── InputLetter.jsx
│   ├── letter_of_love/
│   │   └── Letter.jsx
│   └── Download.jsx
├── App.jsx
├── main.jsx
public/
└── index.html
```

## 5. Descripción de Componentes

| Componente    | Descripción                                                        |
|---------------|------------------------------------------------------------------|
| InputLetter   | Entrada de texto para título, carta o poema, con manejo de estado y eventos. |
| Letter        | Muestra la carta personalizada en vista previa con texto e imagen. |
| Download      | Botón que convierte la carta en imagen PNG y la descarga.         |
| App           | Controla el estado global, lógica para API, subida de imágenes y colores. |

## 6. Manejo de Estado y Hooks

- Uso de `useState` para controlar:
  - Texto de título, carta y poema.
  - Colores de fondo y texto.
  - Imagen subida por el usuario.
  - Estado de carga y errores.
- Uso de `useRef` para referenciar el DOM de la carta para la conversión a imagen.
- Uso de `useEffect` para llamadas a la API y manejo de efectos secundarios.

## 7. Uso de la API de Poemas

- Se hace `fetch` a la API para obtener poemas.
- La respuesta se valida y se maneja el estado de error o carga.
- Los poemas se muestran en el campo correspondiente y se actualizan dinámicamente.

## 8. Instrucciones para Ejecutar el Proyecto Localmente

1. Clonar el repositorio:
```bash
git clone https://github.com/Xavier13554522/letter_of_love_xavier2708.git
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar la app en modo desarrollo con Vite:
```bash
npm run dev
```

4. Abrir en tu navegador la URL que indique Vite en consola, normalmente:
```
http://localhost:3000
```

## 9. Notas sobre el Proyecto y Posibles Mejoras

Este proyecto está pensado como una demostración funcional y base para crear cartas personalizadas. Aunque cumple con sus objetivos principales, podrían explorarse algunas mejoras o funcionalidades adicionales en el futuro, tales como:

- Refinar el manejo de errores y validaciones.
- Optimizar la experiencia de usuario en dispositivos móviles.
- Explorar nuevas formas de integración con APIs externas o servicios adicionales.

Dado que este proyecto puede considerarse un punto de partida, muchas de estas posibles mejoras quedan abiertas a futuras revisiones o nuevos desarrollos.

## 10. Créditos

Creado por Xavier Gomez.

Inspiración en cartas personalizadas y generación dinámica de contenido.

Uso de APIs públicas para contenido poético.
