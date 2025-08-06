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
            imagenes: ["/yates/dubai/zaf.webp", "/yates/dubai/zaf2.webp", "/yates/dubai/zaf3.webp", "/yates/dubai/zaf4.webp", "/yates/dubai/zaf5.webp", "/yates/dubai/zaf6.webp", "/yates/dubai/zaf7.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Sky Fall 164FT",
            precio: 206400, 
            precioHora: 17200,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/skyfall.webp", "/yates/dubai/skyfall2.webp", "/yates/dubai/skyfall3.webp", "/yates/dubai/skyfall4.webp", "/yates/dubai/skyfall5.webp", "/yates/dubai/skyfall6.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Santorini 115FT",
            precio: 195600, 
            precioHora: 16300,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/santorini.webp", "/yates/dubai/santorini2.webp", "/yates/dubai/santorini3.webp", "/yates/dubai/santorini4.webp", "/yates/dubai/santorini5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Suffuriya 123FT",
            precio: 171600, 
            precioHora: 14300,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/suffuriya.webp", "/yates/dubai/suffuriya2.webp", "/yates/dubai/suffuriya3.webp", "/yates/dubai/suffuriya4.webp", "/yates/dubai/suffuriya5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Suffuriya 123FT",
            precio: 171600, 
            precioHora: 14300,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/suffuriya.webp", "/yates/dubai/suffuriya2.webp", "/yates/dubai/suffuriya3.webp", "/yates/dubai/suffuriya4.webp", "/yates/dubai/suffuriya5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Lucien 121FT",
            precio: 171600, 
            precioHora: 14300,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/lucien.webp", "/yates/dubai/lucien2.webp", "/yates/dubai/lucien3.webp", "/yates/dubai/lucien4.webp", "/yates/dubai/lucien5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Legende 116FT",
            precio: 246000, 
            precioHora: 20500,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/legende.webp", "/yates/dubai/legende2.webp", "/yates/dubai/legende3.webp", "/yates/dubai/legende4.webp", "/yates/dubai/legende6.webp", "/yates/dubai/legende7.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Lucien 121FT",
            precio: 171600, 
            precioHora: 14300,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/lucien.webp", "/yates/dubai/lucien2.webp", "/yates/dubai/lucien3.webp", "/yates/dubai/lucien4.webp", "/yates/dubai/lucien5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Dolce Vita 105FT",
            precio: 94800, 
            precioHora: 7900,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/dolcevita.webp", "/yates/dubai/dolcevita2.webp", "/yates/dubai/dolcevita3.webp", "/yates/dubai/dolcevita4.webp", "/yates/dubai/dolcevita5.webp", "/yates/dubai/dolcevita6.webp", ],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Khalili 100FT",
            precio: 103200, 
            precioHora: 8600,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/khalili.webp", "/yates/dubai/khalili2.webp", "/yates/dubai/khalili3.webp", "/yates/dubai/khalili4.webp", "/yates/dubai/khalili5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Medusa 100FT",
            precio: 60000, 
            precioHora: 5000,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/medusa.webp", "/yates/dubai/medusa2.webp", "/yates/dubai/medusa3.webp", "/yates/dubai/medusa4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Matrix 82FT",
            precio: 48000, 
            precioHora: 4000,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/matrix.webp", "/yates/dubai/matrix2.webp", "/yates/dubai/matrix3.webp", "/yates/dubai/matrix4.webp", "/yates/dubai/matrix5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "My Serenity 70FT",
            precio: 21600, 
            precioHora: 1800,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/serenity.webp", "/yates/dubai/serenity2.webp", "/yates/dubai/serenity3.webp", "/yates/dubai/serenity4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Thunderball 56FT",
            precio: 12000, 
            precioHora: 1000,
            ciudad: "dubai",
            imagenes: ["/yates/dubai/thunder3.webp", "/yates/dubai/thunder2.webp", "/yates/dubai/thunder.webp", "/yates/dubai/thunder4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Cranchi A46",
            precio: 11956.8, 
            precioHora: null,
            ciudad: "ibiza",
            imagenes: ["/yates/ibiza/cranchi.webp", "/yates/ibiza/cranchi2.webp", "/yates/ibiza/cranchi3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "De Antonio D42",
            precio: 8670.8, 
            precioHora: null,
            ciudad: "ibiza",
            imagenes: ["/yates/ibiza/antonio.webp", "/yates/ibiza/antonio2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Alfastreet Marine 28",
            precio: 5512, 
            precioHora: null,
            ciudad: "ibiza",
            imagenes: ["/yates/ibiza/alfastreet.webp", "/yates/ibiza/alfastreet2.webp", "/yates/ibiza/alfastreet3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "De Antonio 32",
            precio: 5936, 
            precioHora: null,
            ciudad: "ibiza",
            imagenes: ["/yates/ibiza/donatello.webp", "/yates/ibiza/donatello2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Key Largo 27",
            precio: 3392, 
            precioHora: null,
            ciudad: "ibiza",
            imagenes: ["/yates/ibiza/keylargo.webp", "/yates/ibiza/keylargo2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Sterk 31 WB",
            precio: 4240, 
            precioHora: null,
            ciudad: "ibiza",
            imagenes: ["/yates/ibiza/sterk.webp", "/yates/ibiza/sterk2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            modelo: "Ranieri 330 LX",
            precio: 4240, 
            precioHora: null,
            ciudad: "ibiza",
            imagenes: ["/yates/ibiza/ranieri.webp", "/yates/ibiza/ranieri2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
    ];

function formatCurrency(value, currencyCode) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 0
        }).format(value);
    }

    function convertirAEDenEUR(aed) {
        return aed / tipoCambio;
    }

    const listaYates = document.getElementById("lista-coches");
    const mensajeNoYates = document.getElementById("mensaje-no-coches");
    const precioSelect = document.getElementById("price-range");

    function filtrarYates() {
        const precioSeleccionado = precioSelect.value;

        let precioMin = 0, precioMax = Infinity;

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

        const yatesFiltrados = yates.filter(yate =>
            yate.ciudad === ciudadSeleccionada &&
            yate.precio >= precioMin &&
            yate.precio <= precioMax
        );

        if (yatesFiltrados.length > 0) {
            listaYates.innerHTML = yatesFiltrados.map((yate, index) => {
                let precioPorDiaHTML = "";
                let precioPorHoraHTML = "";

                if (ciudadSeleccionada === "dubai") {
                    precioPorDiaHTML = `Precio por día: ${formatCurrency(yate.precio, 'AED')}`;
                    if (yate.precioHora !== null) {
                        precioPorHoraHTML = `Precio por hora: ${formatCurrency(yate.precioHora, 'AED')}<br>`;
                    }
                } else if (ciudadSeleccionada === "ibiza") {
                    const precioEUR = convertirAEDenEUR(yate.precio);
                    precioPorDiaHTML = `Precio por día: ${formatCurrency(precioEUR, 'EUR')}`;
                    if (yate.precioHora !== null) {
                        const precioHoraEUR = convertirAEDenEUR(yate.precioHora);
                        precioPorHoraHTML = `Precio por hora: ${formatCurrency(precioHoraEUR, 'EUR')}<br>`;
                    }
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
                                ${precioPorDiaHTML}
                            </p>
                            <a href="${yate.link}" target="_blank" class="boton-reserva">Reservar por correo</a>
                        </div>
                    </div>
                `;
            }).join("");

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