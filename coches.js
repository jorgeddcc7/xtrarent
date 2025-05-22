document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad") ? urlParams.get("ciudad").toLowerCase() : "";

    const coches = [
        { marca: "Jeep", modelo: "Renegade", precio: 312, ciudad: "sevilla", imagen: "jeeprenegade-sev.webp" },
        { marca: "Ferrari", modelo: "Portofino", precio: 1200, ciudad: "sevilla", imagen: "ferrariportofino-sev.webp" },
        { marca: "Mini", modelo: "John Cooper Works Cabrio", precio: 175, ciudad: "sevilla", imagen: "mini-sev.webp" },
        { marca: "Ford", modelo: "Puma", precio: 66, ciudad: "bilbao", imagen: "fordpuma-blb.webp" },
        { marca: "BMW", modelo: "M4 Competition", precio: 700, ciudad: "bilbao", imagen: "bmwcompetition-blb.webp" },
        { marca: "Mercedes", modelo: "AMG", precio: 1220, ciudad: "bilbao", imagen: "mercedesamg-blb.jpg" },
        { marca: "Lamborghini", modelo: "Urus", precio: 1400, ciudad: "madrid", imagen: "urus-madrid.webp" },
        { marca: "Lamborghini", modelo: "Aventador SV Roaster", precio: 5000, ciudad: "madrid", imagen: "aventador-madrid.webp" },
        { marca: "Ford", modelo: "Focus", precio: 100, ciudad: "madrid", imagen: "fordfocus-madrid.webp" },
        { marca: "Mercedes", modelo: "G63 AMG", precio: 1100, ciudad: "madrid", imagen: "amg-madrid.webp" },
        { marca: "Tesla", modelo: "Model X p100d", precio: 500, ciudad: "madrid", imagen: "tesla-madrid.webp" },
        { marca: "Chevrolet", modelo: "Corvette Stringray Z06", precio: 650, ciudad: "madrid", imagen: "chevrolet-mdz.jpg" },
        { marca: "Aston-Martin", modelo: "DB11 Volante", precio: 1220, ciudad: "madrid", imagen: "astonmartin-mdz.webp" },
        { marca: "Mercedes", modelo: "B180", precio: 450, ciudad: "barcelona", imagen: "mercedesb180-bcn.webp" },
        { marca: "Mercedes", modelo: "Clase A", precio: 180, ciudad: "barcelona", imagen: "mercedesclasea-bcn.webp" },
        { marca: "Porsche", modelo: "Cayenne Turbo GT", precio: 1300, ciudad: "barcelona", imagen: "cayenne-bcn.webp" },
        { marca: "Mustang", modelo: " ", precio: 920, ciudad: "barcelona", imagen: "mustang-bcn.webp" },
        { marca: "Lamborghini", modelo: "Huracán", precio: 1220, ciudad: "barcelona", imagen: "lambohuracan-bcn.webp" },
        { marca: "Audi", modelo: "A5 Sportback", precio: 155, ciudad: "valencia", imagen: "audia5-vlc.webp" },
        { marca: "Audi", modelo: "R8 VPlus", precio: 920, ciudad: "valencia", imagen: "audir8-vlc.webp" },
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
                        <button>Reservar ahora</button>
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
