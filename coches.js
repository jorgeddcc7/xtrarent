document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad") ? urlParams.get("ciudad").toLowerCase() : "";

    const coches = [
        {
            marca: "Audi",
            modelo: "A1 Sportback",
            precio: 80,
            ciudad: "ibiza",
            imagenes: ["a1ibiza.png"],
            link: "https://www.wiberrentacar.com/es/?aff=XTRARENT"
        },
        {
            marca: "Mercedes",
            modelo: "Clase T",
            precio: 107,
            ciudad: "malaga",
            imagenes: ["clasetmalaga.avif"],
            link: "https://www.wiberrentacar.com/es/?aff=XTRARENT"
        },
        {
            marca: "Jeep",
            modelo: "Renegade",
            precio: 93,
            ciudad: "malaga",
            imagenes: ["jeepmalaga.avif"],
            link: "https://www.wiberrentacar.com/es/?aff=XTRARENT"
        },
        {
            marca: "Audi",
            modelo: "A1 Sportback",
            precio: 60,
            ciudad: "mallorca",
            imagenes: ["a1ibiza.png"],
            link: "https://www.wiberrentacar.com/es/?aff=XTRARENT"
        },
        {
            marca: "Audi",
            modelo: "A5",
            precio: 75,
            ciudad: "mallorca",
            imagenes: ["a5mallorca.avif"],
            link: "https://www.wiberrentacar.com/es/?aff=XTRARENT"
        },
        {
            marca: "Mercedes",
            modelo: "Clase A",
            precio: 75,
            ciudad: "mallorca",
            imagenes: ["claseamallorca.avif"],
            link: "https://www.wiberrentacar.com/es/?aff=XTRARENT"
        },
        {
            marca: "Audi",
            modelo: "A1",
            precio: 65,
            ciudad: "mallorca",
            imagenes: ["a1.avif"],
            link: "https://www.wiberrentacar.com/es/?aff=XTRARENT"
        },
        {
            marca: "Mercedes",
            modelo: "Clase T",
            precio: 107,
            ciudad: "valencia",
            imagenes: ["clasetmalaga.avif"],
            link: "https://www.wiberrentacar.com/es/?aff=XTRARENT"
        },
        {
            marca: "Ferrari",
            modelo: "Purosangre",
            precio: 999,
            ciudad: "dubai",
            imagenes: ["purosangredubai.webp", "purosangredubai2.webp", "purosangredubai3.webp", "purosangredubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ferrari",
            modelo: "296 GTB",
            precio: 400,
            ciudad: "dubai",
            imagenes: ["296dubai.webp", "296dubai2.webp", "296dubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Huracan Evo Spyder",
            precio: 375,
            ciudad: "dubai",
            imagenes: ["spyderdubai.webp", "spyderdubai2.webp", "spyderdubai3.webp", "spyderdubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Urus Mansory",
            precio: 450,
            ciudad: "dubai",
            imagenes: ["urusdubai2.webp", "urusdubai.webp", "urusdubai3.webp", "urusdubai4.webp", "urusdubai5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Urus Yellow",
            precio: 450,
            ciudad: "dubai",
            imagenes: ["urusydubai.webp", "urusydubai2.webp", "urusydubai3.webp", "urusydubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "McLaren",
            modelo: "Artura Spyder",
            precio: 420,
            ciudad: "dubai",
            imagenes: ["mclarendubai.webp", "mclarendubai2.webp", "mclarendubai3.webp", "mclarendubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lotus",
            modelo: "Emira",
            precio: 120,
            ciudad: "dubai",
            imagenes: ["lotusdubai.webp", "lotusdubai2.webp", "lotusdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "G63 AMG 2025",
            precio: 250,
            ciudad: "dubai",
            imagenes: ["g6325dubai.webp", "g6325dubai2.webp", "g6325dubai3.webp", "g6325dubai4.webp", "g6325dubai5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "Brabus",
            precio: 260,
            ciudad: "dubai",
            imagenes: ["brabusdubai.webp", "brabusdubai2.webp", "brabusdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "G63 AMG",
            precio: 220,
            ciudad: "dubai",
            imagenes: ["g63dubai.webp", "g63dubai2.webp", "g63dubai3.webp", "g63dubai4.webp", "g63dubai5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "S500",
            precio: 70,
            ciudad: "dubai",
            imagenes: ["s500dubai.webp", "s500dubai2.webp", "s500dubai3.webp", "s500dubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Audi",
            modelo: "A3",
            precio: 30,
            ciudad: "dubai",
            imagenes: ["a3dubai.webp", "a3dubai2.webp","a3dubai3.webp", "a3dubai4.webp", "a3dubai5.webp", "a3dubai6.webp", "a3dubai7.webp", "a3dubai8.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Audi",
            modelo: "A6",
            precio: 45,
            ciudad: "dubai",
            imagenes: ["a6dubai.webp", "a6dubai2.webp","a6dubai3.webp","a6dubai4.webp","a6dubai5.webp","a6dubai6.webp", ],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Audi",
            modelo: "Q3",
            precio: 49,
            ciudad: "dubai",
            imagenes: ["q3dubai.webp", "q3dubai2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Audi",
            modelo: "RSQ3",
            precio: 75,
            ciudad: "dubai",
            imagenes: ["rsq3dubai.webp", "rsq3dubai3.webp", "rsq3dubai2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
            {
            marca: "BMW",
            modelo: "420i",
            precio: 75,
            ciudad: "dubai",
            imagenes: ["420dubai.webp", "420dubai2.webp","420dubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "BMW",
            modelo: "735i",
            precio: 100,
            ciudad: "dubai",
            imagenes: ["735dubai.webp", "735dubai2.webp", "735dubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Chevrolet",
            modelo: "Corvette",
            precio: 125,
            ciudad: "dubai",
            imagenes: ["corvettedubai.webp", "corvettedubai2.webp", "corvettedubai3.webp",],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Cadillac",
            modelo: "Escalade",
            precio: 90,
            ciudad: "dubai",
            imagenes: ["escaladedubai.webp", "escaladedubai2.webp", "escaladedubai3.webp",],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lange Rover",
            modelo: "Defender",
            precio: 99,
            ciudad: "dubai",
            imagenes: ["defenderdubai.webp", "defenderdubai2.webp", "defenderdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Range Rover",
            modelo: "Sport",
            precio: 85,
            ciudad: "dubai",
            imagenes: ["rrsportdubai.webp", "rrsportdubai2.webp", "rrsportdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Range Rover",
            modelo: "Velar",
            precio: 85,
            ciudad: "dubai",
            imagenes: ["rrvelardubai.webp", "rrvelardubai2.webp", "rrvelardubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ford",
            modelo: "Bronco",
            precio: 80,
            ciudad: "dubai",
            imagenes: ["broncodubai.webp", "broncodubai2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ford",
            modelo: "Mustang Coupe",
            precio: 75,
            ciudad: "dubai",
            imagenes: ["coupedubai.webp", "coupedubai2.webp", "coupedubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ford",
            modelo: "Mustang GT V8",
            precio: 85,
            ciudad: "dubai",
            imagenes: ["fordgtdubai.webp", "fordgtdubai2.webp", "fordgtdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Jetour",
            modelo: "T2",
            precio: 69,
            ciudad: "dubai",
            imagenes: ["jetourdubai.webp", "jetourdubai3.webp", "jetourdubai2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        }
    ];


    // Tasas de cambio desde EUR
    const exchangeRates = {
        EUR: 1,
        USD: 1.15,  // ajusta si tienes datos en tiempo real
        AED: 10.52
    };
    function formatCurrency(value, currencyCode) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 0
        }).format(value);
    }


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
            listaCoches.innerHTML = cochesFiltrados.map((coche, index) => `
                <div class="car-profile">
                    <div class="swiper swiper-${index}">
                        <div class="swiper-wrapper">
                            ${coche.imagenes.map(img => `
                                <div class="swiper-slide">
                                    <img loading="lazy" src="images/${img}" alt="${coche.marca} ${coche.modelo}">
                                </div>
                            `).join("")}
                        </div>
                        <!-- Controles -->
                        <div class="swiper-button-next swiper-button-next-${index}"></div>
                        <div class="swiper-button-prev swiper-button-prev-${index}"></div>
                        <div class="swiper-pagination swiper-pagination-${index}"></div>
                    </div>
                            
                    <div class="car-details">
                        <h2>${coche.marca} ${coche.modelo}</h2>
                        <p>
                            Precio por día:<br>
                            <strong>${formatCurrency(coche.precio, 'EUR')}</strong> / 
                            <strong>${formatCurrency(coche.precio * exchangeRates.USD, 'USD')}</strong> / 
                            <strong>${formatCurrency(coche.precio * exchangeRates.AED, 'AED')}</strong>
                        </p>
                        <a href="${coche.link}" target="_blank" class="boton-reserva">Reservar por correo</a>
                    </div>
                </div>
            `).join("");

            cochesFiltrados.forEach((_, index) => {
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
