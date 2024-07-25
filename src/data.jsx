const data = {
    projects: [
        {
            stack: ["Vue", "TailwindCSS"],
            title: "Aventuro",
            img: "/projects/aventuro.webp",
            description: "Aventuro es una aplicación web para agencias de viajes que permite a los usuarios explorar varios paquetes de viajes, realizar reservas y administrar sus cuentas de manera eficiente. Diseñado pensando en la experiencia del usuario, Aventuro ofrece una gama de funcionalidades para garantizar un proceso de reserva fluido y agradable.",
            repository: "https://github.com/stivenm0/aventuro_frontend",
            link: "https://youtu.be/gSUW1SWNJuk?si=VmcKAuGltvgrbWJW"
        },
        {
            stack: ["Laravel", "TailwindCSS", "Alpine.js", "MySQL"],
            title: "Aventuro API",
            img: "/projects/aventuro-api.webp",
            description: "Aventuro API  permite la comunicación eficiente entre el frontend y el backend, y cuenta con un panel administrativo que proporciona una interfaz amigable para gestionar todos los aspectos de la plataforma.",
            repository: "https://github.com/stivenm0/aventuro_backend",
            link: "https://youtu.be/gSUW1SWNJuk?si=VmcKAuGltvgrbWJW"
        },
        {
            stack: ["Laravel", "React", "TailwindCSS", "MySQL"],
            title: "Rasus",
            img: "/projects/rasus.webp",
            description: "Rasus proporciona un conjunto de herramientas para integrar un acortamiento de enlaces en Rasus. la API fue testeada con postman y es consumida por un Frontend en React, ademas, esta versionada y cuenta con bearer API token.",
            repository: "https://github.com/stivenm0/rasus_backend",
            link: "https://youtu.be/yB9iMueEPH8"
        },
        {
            stack: ["Laravel", "Livewire", "Alpine.js","TailwindCSS", "MySQL"],
            title: "Comprana",
            img: "/projects/comprana.webp",
            description: "Comprana es una aplicación web monolítica que permite comprar víveres desde casa y recibirlos en la puerta. Ofrece una amplia gama de productos, una interfaz intuitiva para buscar y comprar.",
            repository: "https://github.com/stivenm0/comprana",
            link: " https://youtu.be/8wZqrtXeqaA"
        },
        {
            stack: ["Laravel", "Livewire", "TailwindCSS", "Alpine.js", "MySQL"],
            title: "Repositi",
            img: "/projects/repositi.webp",
            description: "Repositi es una plataforma que recopila y comparte información sobre herramientas web útiles y recursos en línea. Proporciona a los usuarios una fuente confiable de herramientas y recursos que pueden facilitar su trabajo, mejorar su productividad y enriquecer su experiencia en línea.",
            repository: "https://github.com/stivenm0/Repositi",
            link: "https://youtu.be/JrGrcLe6LL0"
        },
        {
            stack: ["Alpine.js", "Bootstrap", "dice-Bear"],
            title: "AvatarMaker",
            img: "/projects/avatarmaker.webp",
            description: "Cree y descargue avatares personalizados con AvatarMaker utilizando la API DiceBear.",
            repository: "https://github.com/stivenm0/avatarmaker",
            link: "https://avatarsmaker.netlify.app/"
        },
        {
            stack: ["Laravel", "Bootstrap", "MySQL"],
            title: "Pixello",
            img: "/projects/pixello.webp",
            description: "Pixello es una plataforma web diseñada para los amantes de la fotografía y la creatividad visual. Con su elegante interfaz y su amplia gama de funciones, Pixello permite a los usuarios explorar, subir, comentar y dar 'me gusta' a fotos de manera fácil y emocionante.",
            repository: "https://github.com/stivenm0/pixello_web",
            link: "https://github.com/stivenm0/pixello_web"
        },
        {
            stack: ["PHP", "Bootstrap" ,"MySQL"],
            title: "Blog Videojuegos",
            img: "/projects/blog.webp",
            description: "Este proyecto web es un Blog de Videojuegos que tiene como objetivo permitir a los usuarios subir posts, registrarse, iniciar sesión, editar datos del usuario... La interfaz de usuario está desarrollada en un tono a blog antiguo.",
            repository: "https://github.com/stivenm0/practices_php/tree/main/blog-videojuegos",
            link: "https://github.com/stivenm0/practices_php/tree/main/blog-videojuegos"
        },
        {
            stack: ['React', "CSS"],
            title: "Rick and Morty",
            img: "/projects/rick.webp",
            description: "Aplicación web del universo de Rick y Morty, permite explorar  personajes junto con sus datos característicos. Con un diseño atractivo e inmersivo.",
            repository: "https://github.com/stivenm0/Rick_and_Morty",
            link: "https://rick-and-morty-lilac.vercel.app/"
        },
        {
            stack: ["HTML", "CSS", "Javascript"],
            title: "Pokedex",
            img: "/projects/pokedex.webp",
            description: "Esta aplicación interactiva permite explorar información detallada sobre Pokémon, desde estadísticas hasta curiosidades. Con un diseño sencillo, responsivo y colorido.",
            repository: "https://github.com/stivenm0/Launch_X/tree/main/Pokedex",
            link: "https://s-pokedex.netlify.app/"
        },
        {
            stack: ["React", "CSS"],
            title: "Calculadora",
            img: "/projects/calculadora.webp",
            description: "Calculadora con simplicidad y funcionalidad. Diseñada con una interfaz moderna y atractiva, esta aplicación realiza operaciones básicas, como suma, resta, multiplicación y división.",
            repository: "https://github.com/stivenm0/Launch_X/tree/main/Calculadora",
            link: "https://mcalculatorm.netlify.app/"
        },
    ],

    certifications: [
        {
            name: "Laravel",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
            shadow: "shadow-red-900"
        },
        {
            name: "MySQL",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            shadow: "shadow-indigo-900"
        },
        {
            name: "Inertia.js",
            img: "https://avatars.githubusercontent.com/u/47703742?s=280&v=4",
            shadow: "shadow-violet-900"
        },
        {
            name: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            shadow: "shadow-sky-900"
        },
        {
            name: "Vue.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
            shadow: "shadow-emerald-900"
        },
        {
            name: "Alpine.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg",
            shadow: "shadow-black"
        },
        {
            name: "PHP",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            shadow: "shadow-purple-900"
        },
        {
            name: "Javascript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            shadow: "shadow-yellow-900"
        },
        {
            name: "Git",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            shadow: "shadow-orange-900"
        },
        {
            name: "TailwindCSS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            shadow: "shadow-blue-900"
        },
        {
            name: "Bootstrap 5",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            shadow: "shadow-purple-900"
        },
        {
            name: "CSS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            shadow: "shadow-white"
        },
        {
            name: "HTML",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            shadow: "shadow-orange-900"
        },
    ]
}

export default data;
