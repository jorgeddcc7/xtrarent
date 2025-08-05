document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad")?.toLowerCase() || "";

    const tipoCambio = 4.24;  

    const yates = [
        {
            modelo: "ZAF 200FT",
            precio: 343000, 
            precioHora: null, 
            ciudad: "dubai",
            imagenes: ["/yates/zaf.webp", "/yates/zaf2.webp", "/yates/zaf3.webp", "/yates/zaf4.webp", "/yates/zaf5.webp", "/yates/zaf6.webp", "/yates/zaf7.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Sky Fall 164FT",
            precio: 206400, 
            precioHora: 17200,
            ciudad: "dubai",
            imagenes: ["/yates/skyfall.webp", "/yates/skyfall2.webp", "/yates/skyfall3.webp", "/yates/skyfall4.webp", "/yates/skyfall5.webp", "/yates/skyfall6.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Santorini 115FT",
            precio: 195600, 
            precioHora: 16300,
            ciudad: "dubai",
            imagenes: ["/yates/santorini.webp", "/yates/santorini2.webp", "/yates/santorini3.webp", "/yates/santorini4.webp", "/yates/santorini5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Suffuriya 123FT",
            precio: 171600, 
            precioHora: 14300,
            ciudad: "dubai",
            imagenes: ["/yates/suffuriya.webp", "/yates/suffuriya2.webp", "/yates/suffuriya3.webp", "/yates/suffuriya4.webp", "/yates/suffuriya5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Suffuriya 123FT",
            precio: 171600, 
            precioHora: 14300,
            ciudad: "dubai",
            imagenes: ["/yates/suffuriya.webp", "/yates/suffuriya2.webp", "/yates/suffuriya3.webp", "/yates/suffuriya4.webp", "/yates/suffuriya5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Lucien 121FT",
            precio: 171600, 
            precioHora: 14300,
            ciudad: "dubai",
            imagenes: ["/yates/lucien.webp", "/yates/lucien2.webp", "/yates/lucien3.webp", "/yates/lucien4.webp", "/yates/lucien5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Legende 116FT",
            precio: 246000, 
            precioHora: 20500,
            ciudad: "dubai",
            imagenes: ["/yates/legende.webp", "/yates/legende2.webp", "/yates/legende3.webp", "/yates/legende4.webp", "/yates/legende6.webp", "/yates/legende7.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Lucien 121FT",
            precio: 171600, 
            precioHora: 14300,
            ciudad: "dubai",
            imagenes: ["/yates/lucien.webp", "/yates/lucien2.webp", "/yates/lucien3.webp", "/yates/lucien4.webp", "/yates/lucien5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Dolce Vita 105FT",
            precio: 94800, 
            precioHora: 7900,
            ciudad: "dubai",
            imagenes: ["/yates/dolcevita.webp", "/yates/dolcevita2.webp", "/yates/dolcevita3.webp", "/yates/dolcevita4.webp", "/yates/dolcevita5.webp", "/yates/dolcevita6.webp", ],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Khalili 100FT",
            precio: 103200, 
            precioHora: 8600,
            ciudad: "dubai",
            imagenes: ["/yates/khalili.webp", "/yates/khalili2.webp", "/yates/khalili3.webp", "/yates/khalili4.webp", "/yates/khalili5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Medusa 100FT",
            precio: 60000, 
            precioHora: 5000,
            ciudad: "dubai",
            imagenes: ["/yates/medusa.webp", "/yates/medusa2.webp", "/yates/medusa3.webp", "/yates/medusa4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Matrix 82FT",
            precio: 48000, 
            precioHora: 4000,
            ciudad: "dubai",
            imagenes: ["/yates/matrix.webp", "/yates/matrix2.webp", "/yates/matrix3.webp", "/yates/matrix4.webp", "/yates/matrix5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "My Serenity 70FT",
            precio: 21600, 
            precioHora: 1800,
            ciudad: "dubai",
            imagenes: ["/yates/serenity.webp", "/yates/serenity2.webp", "/yates/serenity3.webp", "/yates/serenity4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Thunderball 56FT",
            precio: 12000, 
            precioHora: 1000,
            ciudad: "dubai",
            imagenes: ["/yates/thunder3.webp", "/yates/thunder2.webp", "/yates/thunder.webp", "/yates/thunder4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
    ];

    // Para convertir el precio a formato de moneda
    function formatCurrency(value, currencyCode) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 0
        }).format(value);
    }

    // Convertir precio de AED a EUR
    function convertirAEDenEUR(aed) {
        return aed / tipoCambio;
    }

    const listaYates = document.getElementById("lista-coches");
    const mensajeNoYates = document.getElementById("mensaje-no-coches");
    const precioSelect = document.getElementById("price-range");

    // Filtrar los yates
    function filtrarYates() {
        const precioSeleccionado = precioSelect.value;

        let precioMin = 0, precioMax = Infinity;

        // Determinar el rango de precios seleccionado
        if (precioSeleccionado === "0-50000") {
            precioMin = 0;
            precioMax = 50000;
        } else if (precioSeleccionado === "50000-100000") {
            precioMin = 50000;
            precioMax = 100000;
        } else if (precioSeleccionado === "100000-200000") {
            precioMin = 100000;
            precioMax = 200000;
        } else if (precioSeleccionado === "200000+") {
            precioMin = 200000;
            precioMax = Infinity;
        }

        // Filtrar los yates por ciudad y precio por día (usamos yate.precio para el filtro)
        const yatesFiltrados = yates.filter(yate =>
            yate.ciudad === ciudadSeleccionada &&
            yate.precio >= precioMin &&
            yate.precio <= precioMax
        );

        // Mostrar los yates filtrados
        if (yatesFiltrados.length > 0) {
            listaYates.innerHTML = yatesFiltrados.map((yate, index) => {
                // Precio por día en AED y su conversión a EUR
                const precioPorDiaAED = formatCurrency(yate.precio, 'AED');
                const precioPorDiaEUR = formatCurrency(convertirAEDenEUR(yate.precio), 'EUR');

                // Si el precio por hora existe, mostrarlo. Si no, solo mostrar precio por día.
                let precioPorHoraHTML = '';
                if (yate.precioHora !== null) {
                    const precioPorHoraAED = formatCurrency(yate.precioHora, 'AED');
                    const precioPorHoraEUR = formatCurrency(convertirAEDenEUR(yate.precioHora), 'EUR');
                    precioPorHoraHTML = `
                        Precio por hora: ${precioPorHoraAED} / ${precioPorHoraEUR}<br>
                    `;
                }

                return `
                    <div class="car-profile">
                        <div class="swiper swiper-${index}">
                            <div class="swiper-wrapper">
                                ${yate.imagenes.map(img => `
                                    <div class="swiper-slide">
                                        <img loading="lazy" src="images/${img}" alt="${yate.modelo}">
                                    </div>
                                `).join("")}
                            </div>
                            <div class="swiper-button-next swiper-button-next-${index}"></div>
                            <div class="swiper-button-prev swiper-button-prev-${index}"></div>
                            <div class="swiper-pagination swiper-pagination-${index}"></div>
                        </div>
                        <div class="car-details">
                            <h2>${yate.modelo}</h2>
                            <p>
                                ${precioPorHoraHTML}
                                Precio por día: ${precioPorDiaAED} / ${precioPorDiaEUR}
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
