document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad")?.toLowerCase() || "";

    // Lista de Villas
    const villas = [
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

    const listaVillas = document.getElementById("lista-coches");
    const mensajeNoVillas = document.getElementById("mensaje-no-coches");
    const precioSelect = document.getElementById("price-range");

    // Filtrar las villas
    function filtrarVillas() {
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

        // Filtrar las villas por ciudad
        const villasFiltradas = villas.filter(villa =>
            villa.ciudad === ciudadSeleccionada &&
            villa.precio >= precioMin &&
            villa.precio <= precioMax
        );

        // Mostrar las villas filtradas
        if (villasFiltradas.length > 0) {
            listaVillas.innerHTML = villasFiltradas.map((villa, index) => {
                let monedas = `
                    <strong>${formatCurrency(villa.precio, 'EUR')}</strong> 
                `;

                return `
                    <div class="car-profile">
                        <div class="swiper swiper-${index}">
                            <div class="swiper-wrapper">
                                ${villa.imagenes.map(img => `
                                    <div class="swiper-slide">
                                        <img loading="lazy" src="images/${img}" alt="${villa.marca} ${villa.modelo}">
                                    </div>
                                `).join("")}
                            </div>
                            <div class="swiper-button-next swiper-button-next-${index}"></div>
                            <div class="swiper-button-prev swiper-button-prev-${index}"></div>
                            <div class="swiper-pagination swiper-pagination-${index}"></div>
                        </div>
                        <div class="car-details">
                            <h2>${villa.marca} ${villa.modelo}</h2>
                            <p>
                                Precio por día:<br>
                                ${monedas}
                            </p>
                            <a href="${villa.link}" target="_blank" class="boton-reserva">Reservar por correo</a>
                        </div>
                    </div>
                `;
            }).join("");

            // Inicializar Swiper para cada villa filtrada
            villasFiltradas.forEach((_, index) => {
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

            mensajeNoVillas.style.display = "none"; 
        } else {
            listaVillas.innerHTML = ""; 
            mensajeNoVillas.style.display = "block"; 
        }
    }

    filtrarVillas();

    precioSelect.addEventListener("change", filtrarVillas);
});
