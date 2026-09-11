// BASE DE DATOS LOCAL: Un arreglo (Array) que contiene objetos ({}). 
// Cada objeto guarda las propiedades que construyen la vista de la película.
// BASE DE DATOS LOCAL
const peliculas = [
    { titulo: "¿No te has creado una cuenta?", sinopsis: "Create una cuenta de forma gratuita con este link, para recibir atención personalisada.", precio: "¿Que esperas?", fondo: "./img/fondo-1.jpg", caratula: "./img-1.jpg" },

];



// VARIABLE DE CONTROL
let indiceActual = 0; // Guarda el número de la película que se está viendo

// REFERENCIAS HTML: Guardamos en variables las etiquetas HTML buscando por su atributo "id".
const bannerSection = document.getElementById("hero-banner"); // El recuadro grande izquierdo
// const listaCatalogo = document.getElementById("lista-peliculas"); // El recuadro vertical derecho


// FUNCIÓN PRINCIPAL DE CAMBIO: Lee la película actual y actualiza el HTML con sus datos.
function actualizarPantalla() {
    // Busca las etiquetas y sobreescribe su texto (.innerText) con la información del array.
    document.getElementById("pelicula-titulo").innerText = peliculas[indiceActual].titulo;
    document.getElementById("pelicula-sinopsis").innerText = peliculas[indiceActual].sinopsis;
    document.getElementById("pelicula-precio").innerText = peliculas[indiceActual].precio;
    
    // Sobreescribe el atributo 'src' de la imagen pequeña con la carátula nueva.
    document.getElementById("vhs-portada").src = peliculas[indiceActual].caratula;
    
    // Sobreescribe el fondo del CSS insertando la URL de la imagen de fondo de manera dinámica.
    bannerSection.style.backgroundImage = `url('${peliculas[indiceActual].fondo}')`;
}

// ARRANQUE INICIAL AL CARGAR LA PÁGINA
actualizarPantalla(); // Carga la primera peli para que no diga "Cargando..."