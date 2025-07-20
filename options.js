document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudad = urlParams.get('ciudad');  // Obtenemos el parámetro de ciudad de la URL

    // Si no hay ciudad en la URL, redirigimos a la página de inicio
    if (!ciudad) {
        window.location.href = "index.html";
        return;
    }

    // Verificar que la ciudad es válida, si no redirigimos al inicio
    const ciudadesValidas = ["malaga", "mallorca", "ibiza", "valencia", "dubai", "miami"];
    if (!ciudadesValidas.includes(ciudad)) {
        window.location.href = "index.html";
        return;
    }

    // Asignar la ciudad en algún lugar visible si lo necesitas (por ejemplo, en el título)
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = `Opciones de alquiler en ${ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}`;
    }

    // Añadimos los eventos de los botones de opción (coches, yates, jets, villas)
    const botonesOpciones = document.querySelectorAll('.category-card a');
    botonesOpciones.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            const opcionSeleccionada = boton.getAttribute('href'); // Obtenemos el href del enlace (el destino)
            // Redirigimos a la página de la opción seleccionada, manteniendo el parámetro de ciudad en la URL
            window.location.href = `${opcionSeleccionada}?ciudad=${ciudad}`;
        });
    });
});
