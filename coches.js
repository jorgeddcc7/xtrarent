document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad") ? urlParams.get("ciudad").toLowerCase() : "";

    const coches = [
        { marca: "Audi", modelo: "A1 Sportback", precio: 80, ciudad: "ibiza", imagen: "a1ibiza.png" },
        { marca: "Mercedes", modelo: "Clase T", precio: 107, ciudad: "malaga", imagen: "clasetmalaga.avif" },
        { marca: "Jeep", modelo: "Renegade", precio: 93, ciudad: "malaga", imagen: "jeepmalaga.avif" },
        { marca: "Audi", modelo: "A1 Sportback", precio: 60, ciudad: "mallorca", imagen: "a1ibiza.png" },
        { marca: "Audi", modelo: "A5", precio: 75, ciudad: "mallorca", imagen: "a5mallorca.avif" },
        { marca: "Mercedes", modelo: "Clase A", precio: 75, ciudad: "mallorca", imagen: "claseamallorca.avif" },
        { marca: "Audi", modelo: "A1", precio: 65, ciudad: "mallorca", imagen: "a1.avif" },
        { marca: "Mercedes", modelo: "Clase T", precio: 107, ciudad: "valencia", imagen: "clasetmalaga.avif" },
    ];

    const listaCoches = document.getElementById("lista-coches");
    const mensajeNoCoches = document.getElementById("mensaje-no-coches");
    const marcaSelect = document.getElementById("marca");
    const precioSelect = document.getElementById("price-range");

    function filtrarCoches() {
        const marcaSeleccionada = marcaSelect.value;
        const precioSeleccionado = precioSelect.value;

        let precioMin = 0, precioMax = Infinity;

        // Determinar el rango de precios seleccionado
        if (precioSeleccionado === "0-500") {
            precioMin = 0;
            precioMax = 500;
        } else if (precioSeleccionado === "500-1000") {
            precioMin = 500;
            precioMax = 1000;
        } else if (precioSeleccionado === "1000-2000") {
            precioMin = 1000;
            precioMax = 2000;
        } else if (precioSeleccionado === "2000+") {
            precioMin = 2000;
            precioMax = Infinity;
        }

        // Filtrar los coches por ciudad, marca y rango de precios
        const cochesFiltrados = coches.filter(coche =>
            coche.ciudad === ciudadSeleccionada &&
            (marcaSeleccionada === "" || coche.marca === marcaSeleccionada) &&
            coche.precio >= precioMin && coche.precio < precioMax // Aquí corregimos el rango
        );

        // Mostrar los coches filtrados en la página
        if (cochesFiltrados.length > 0) {
            listaCoches.innerHTML = cochesFiltrados.map(coche => `
                <div class="car-profile">
                    <div class="car-image">
                        <img src="images/${coche.imagen}" alt="${coche.marca} ${coche.modelo}">
                    </div>
                    <div class="car-details">
                        <h2>${coche.marca} ${coche.modelo}</h2>
                        <p>Precio por día: <strong>€${coche.precio}</strong></p>
                        <a href="https://www.wiberrentacar.com/es/?aff=XTRARENT&&utm_source=affiliate&utm_medium=link&utm_campaign=generic_es&utm_content=xtrarent"><button>Reservar ahora</button></a>
                    </div>
                </div>
            `).join("");

            mensajeNoCoches.style.display = "none";
        } else {
            listaCoches.innerHTML = ""; // Vaciar la lista de coches
            mensajeNoCoches.style.display = "block"; // Mostrar mensaje de "No hay coches"
        }
    }

    // Ejecutar el filtro al cargar la página
    filtrarCoches();

    // Aplicar filtro cuando el usuario seleccione una marca o un rango de precios
    marcaSelect.addEventListener("change", filtrarCoches);
    precioSelect.addEventListener("change", filtrarCoches);
});
