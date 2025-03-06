# GermanKochDev - Portfolio Personal

Bienvenido a germankochdev, mi portfolio personal. Esta aplicación web fue desarrollada para mostrar mis habilidades como desarrollador frontend y ofrecer una forma sencilla para que los reclutadores y empleadores puedan conocer mi trabajo y habilidades.

El sitio tiene una estructura simple con una barra de navegación que te permite desplazarte fácilmente entre las secciones: Inicio, Portfolio, Tecnologías y Contacto.

## Tecnologías Utilizadas

- React: Biblioteca para construir interfaces de usuario interactivas.
- Vite: Herramienta de construcción rápida para mejorar el rendimiento durante el desarrollo.
- TypeScript: Añade tipado estático a JavaScript, mejorando la calidad y seguridad del código.
- Tailwind CSS: Framework CSS de utilidad para facilitar el diseño y estilizado de la interfaz.
- React Icons: Biblioteca para integrar fácilmente íconos SVG de manera sencilla y eficiente.
- React Scroll: Para la navegación suave entre secciones con desplazamiento (scrolling).

## Instalación

Para ejecutar este proyecto localmente en tu máquina:

1. Clona este repositorio:
   git clone https://github.com/GerKoch/my-portfolio.git

2. Navega al directorio del proyecto:
   cd my-portfolio

3. Instala las dependencias:
   npm install

4. Ejecuta el servidor de desarrollo:
   npm run dev

Esto abrirá la aplicación en tu navegador en la dirección http://localhost:5173 o la que esté preestablecida.

## Secciones de la Aplicación

- Inicio: Una pequeña introducción sobre mí, mi experiencia y lo que hago como desarrollador frontend.
- Portfolio: Muestra una selección de mis proyectos más destacados. Cada proyecto incluye una breve descripción y enlaces a repositorios sus respectivas páginas web.
- Tecnologías: Una lista de las principales tecnologías y herramientas con las que trabajo.
- Contacto: Información sobre cómo los reclutadores o cualquier persona interesada puede ponerse en contacto conmigo.

## Estructura de componentes

La aplicación está organizada en una estructura modular, donde cada sección o funcionalidad se maneja a través de componentes reutilizables. A continuación se describe la estructura de carpetas y componentes:

src/
├── assets/ ----------------> Archivos estáticos.
│ └── images/ --------------> Imágenes utilizadas en el proyecto
│
├── components/ ------------> Carpeta principal de componentes reutilizables
│ ├── contact/ -------------> Componente relacionado con la sección de contacto
│ │ └── Contact.tsx --------> Componente que muestra el formulario e información de contacto
│ ├── contactLinks/ --------> Enlaces de redes sociales y otros medios de contacto
│ │ └── ContactLinks.tsx ---> Componente para los enlaces sociales
│ ├── dashboard/ -----------> Contenedor principal que organiza las secciones
│ │ └── Dashboard.tsx ------> Contenedor que muestra las secciones Home, Portfolio, Technologies y contact
│ ├── home/ ----------------> Componente de la sección Home (inicio)
│ │ └── Home.tsx -----------> Componente principal de la sección "Inicio"
│ ├── navbar/ --------------> Componente de la barra de navegación
│ │ └── Navbar.tsx ---------> Barra de navegación con enlaces a las secciones
│ ├── portfolio/ -----------> Componente de la sección de Portfolio
│ │ └── Portfolio.tsx ------> Componente que lista tus proyectos
│ ├── tecnologies/ ---------> Componente para la sección de Tecnologías
│ │ └── Technologies.tsx ---> Componente que describe las tecnologías
└── App.tsx ----------------> Componente principal que organiza la aplicación
