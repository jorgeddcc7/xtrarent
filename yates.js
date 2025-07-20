document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad")?.toLowerCase() || "";

    const yates = [
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

    const listaYates = document.getElementById("lista-coches");
    const mensajeNoYates = document.getElementById("mensaje-no-coches");
    const precioSelect = document.getElementById("price-range");

    // Filtrar los yates
    function filtrarYates() {
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

        // Filtrar los yates por ciudad (opcional, se podría incluir también el filtro por ciudad)
        const yatesFiltrados = yates.filter(yate =>
            yate.ciudad === ciudadSeleccionada &&
            yate.precio >= precioMin &&
            yate.precio <= precioMax
        );

        // Mostrar los yates filtrados
        if (yatesFiltrados.length > 0) {
            listaYates.innerHTML = yatesFiltrados.map((yate, index) => {
                let monedas = `
                    <strong>${formatCurrency(yate.precio, 'EUR')}</strong> 
                `;

                return `
                    <div class="car-profile">
                        <div class="swiper swiper-${index}">
                            <div class="swiper-wrapper">
                                ${yate.imagenes.map(img => `
                                    <div class="swiper-slide">
                                        <img loading="lazy" src="images/${img}" alt="${yate.marca} ${yate.modelo}">
                                    </div>
                                `).join("")}
                            </div>
                            <div class="swiper-button-next swiper-button-next-${index}"></div>
                            <div class="swiper-button-prev swiper-button-prev-${index}"></div>
                            <div class="swiper-pagination swiper-pagination-${index}"></div>
                        </div>
                        <div class="car-details">
                            <h2>${yate.marca} ${yate.modelo}</h2>
                            <p>
                                Precio por día:<br>
                                ${monedas}
                            </p>
                            <a href="${yate.link}" target="_blank" class="boton-reserva">Reservar por correo</a>
                        </div>
                    </div>
                `;
            }).join("");

            // Inicializar Swiper para cada yate filtrado
            yatesFiltrados.forEach((_, index) => {
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

            mensajeNoYates.style.display = "none"; 
        } else {
            listaYates.innerHTML = ""; 
            mensajeNoYates.style.display = "block"; 
        }
    }

    filtrarYates();

    precioSelect.addEventListener("change", filtrarYates);
});
