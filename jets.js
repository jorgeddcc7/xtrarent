document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad")?.toLowerCase() || "";

    // Lista de Jets
    const jets = [
        {
            
        }
    ];

    // Para convertir el precio a formato de moneda
    function formatCurrency(value, currencyCode) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 0
        }).format(value);
    }

    const listaJets = document.getElementById("lista-coches");
    const mensajeNoJets = document.getElementById("mensaje-no-coches");
    const precioSelect = document.getElementById("price-range");

    // Filtrar los jets
    function filtrarJets() {
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

        // Filtrar los jets por ciudad
        const jetsFiltrados = jets.filter(jet =>
            jet.ciudad === ciudadSeleccionada &&
            jet.precio >= precioMin &&
            jet.precio <= precioMax
        );

        // Mostrar los jets filtrados
        if (jetsFiltrados.length > 0) {
            listaJets.innerHTML = jetsFiltrados.map((jet, index) => {
                let monedas = `
                    <strong>${formatCurrency(jet.precio, 'EUR')}</strong> 
                `;

                return `
                    <div class="car-profile">
                        <div class="swiper swiper-${index}">
                            <div class="swiper-wrapper">
                                ${jet.imagenes.map(img => `
                                    <div class="swiper-slide">
                                        <img loading="lazy" src="images/${img}" alt="${jet.marca} ${jet.modelo}">
                                    </div>
                                `).join("")}
                            </div>
                            <div class="swiper-button-next swiper-button-next-${index}"></div>
                            <div class="swiper-button-prev swiper-button-prev-${index}"></div>
                            <div class="swiper-pagination swiper-pagination-${index}"></div>
                        </div>
                        <div class="car-details">
                            <h2>${jet.marca} ${jet.modelo}</h2>
                            <p>
                                Precio por día:<br>
                                ${monedas}
                            </p>
                            <a href="${jet.link}" target="_blank" class="boton-reserva">Reservar por correo</a>
                        </div>
                    </div>
                `;
            }).join("");

            // Inicializar Swiper para cada jet filtrado
            jetsFiltrados.forEach((_, index) => {
                new Swiper(`.swiper-${index}`, {
                    loop: true,
                    navigation: {
                        nextEl: `.swiper-button-next-${index}`,
                        prevEl: `.swiper-button-prev-${index}`,
                    },
                    pagination: {
                        el: `.swiper-pagination-${index}`,
                        clickable: true,
                    },
                });
            });

            mensajeNoJets.style.display = "none"; 
        } else {
            listaJets.innerHTML = "";
            mensajeNoJets.style.display = "block"; 
        }
    }

    filtrarJets();

    precioSelect.addEventListener("change", filtrarJets);
});
