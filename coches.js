document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad")?.toLowerCase() || "";

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
            marca: "Lamborghini",
            modelo: "Huracan Evo Spyder RWD Rosso Mars",
            precio: 1199,
            ciudad: "miami",
            imagenes: ["huracanmiami.webp", "huracanmiami2.webp", "huracanmiami3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Black Urus",
            precio: 979,
            ciudad: "miami",
            imagenes: ["blackurusmia2.webp", "blackurusmia3.webp", "blackurusmia.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Urus Performante Arancio Borealis",
            precio: 1195,
            ciudad: "miami",
            imagenes: ["urusperformantemia.webp", "urusperformante2mia.webp", "urusperformantemia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Huracan Evo Spyder Orange",
            precio: 1199,
            ciudad: "miami",
            imagenes: ["evospyderomia.webp", "evospyderomia2.webp", "evospyderomia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Huracan Evo Spyder Le Mans Blue",
            precio: 1199,
            ciudad: "miami",
            imagenes: ["evospyderbmia.webp", "evospyderbmia2.webp", "evospyderbmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Huracan Evo Spyder Bianco Icarus",
            precio: 1199,
            ciudad: "miami",
            imagenes: ["evospyderwmia.webp", "evospyderwmia2.webp", "evospyderwmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ferrari",
            modelo: "F8 Tributo Spider Rosso Corsa",
            precio: 1695,
            ciudad: "miami",
            imagenes: ["ferrarif8mia.webp", "ferrarif8mia2.webp", "ferrarif8mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ferrari",
            modelo: "488 Spider",
            precio: 1199,
            ciudad: "miami",
            imagenes: ["ferrari488mia.webp", "ferrari488mia2.webp", "ferrari488mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ferrari",
            modelo: "California T",
            precio: 979,
            ciudad: "miami",
            imagenes: ["californiamia.webp", "californiamia2.webp", "californiamia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "McLaren",
            modelo: "570s Spider",
            precio: 975,
            ciudad: "miami",
            imagenes: ["570mia.webp", "570mia2.webp", "570mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "McLaren",
            modelo: "720S Spider",
            precio: 1699,
            ciudad: "miami",
            imagenes: ["720mia.webp", "720mia2.webp", "720mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Rolls Royce",
            modelo: "Phantom",
            precio: 2395,
            ciudad: "miami",
            imagenes: ["phantonmia.webp", "phantonmia2.webp", "phantonmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Rolls Royce",
            modelo: "Cullinan White",
            precio: 1425,
            ciudad: "miami",
            imagenes: ["cullinammia.webp", "cullinammia2.webp", "cullinammia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Bentley",
            modelo: "Bentayga S Black",
            precio: 785,
            ciudad: "miami",
            imagenes: ["bentaygamia.webp", "bentaygamia2.webp", "bentaygamia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Bentley",
            modelo: "Continental GT",
            precio: 970,
            ciudad: "miami",
            imagenes: ["continentalmia.webp", "continentalmia2.webp", "continentalmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Porsche",
            modelo: "911 Carrera Convertible",
            precio: 485,
            ciudad: "miami",
            imagenes: ["911mia.webp", "911mia2.webp", "911mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Porsche",
            modelo: "911 Carrera S 992",
            precio: 489,
            ciudad: "miami",
            imagenes: ["992mia.webp", "992mia2.webp", "992mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Porsche",
            modelo: "Panamera 4 E-Hybrid White",
            precio: 305,
            ciudad: "miami",
            imagenes: ["panameramia.webp", "panameramia2.webp", "panameramia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Porsche",
            modelo: "Macan Black",
            precio: 300,
            ciudad: "miami",
            imagenes: ["macanmia.webp", "macanmia2.webp", "macanmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Aston Martin",
            modelo: "DB12",
            precio: 955,
            ciudad: "miami",
            imagenes: ["db12mia.webp", "db12mia2.webp", "db12mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Tesla",
            modelo: "Cybertruck AWD",
            precio: 470,
            ciudad: "miami",
            imagenes: ["truckmia.webp", "truckmia2.webp", "truckmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Chevrolet",
            modelo: "Corvette Stingray",
            precio: 379,
            ciudad: "miami",
            imagenes: ["corvettewmia.webp", "corvettewmia2.webp", "corvettewmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
                {
            marca: "Chevrolet",
            modelo: "Corvette Stingray",
            precio: 379,
            ciudad: "miami",
            imagenes: ["corvetteymia.webp", "corvetteymia2.webp", "corvetteymia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Chevrolet",
            modelo: "Corvette Stingray",
            precio: 379,
            ciudad: "miami",
            imagenes: ["corvettebmia.webp", "corvettebmia2.webp", "corvettebmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "BMW",
            modelo: "I8 Roadster Black",
            precio: 469,
            ciudad: "miami",
            imagenes: ["i8mia.webp", "i8mia2.webp", "i8mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "BMW",
            modelo: "440i Convertible",
            precio: 469,
            ciudad: "miami",
            imagenes: ["440imia.webp", "440imia2.webp", "440imia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "Benz G-Class",
            precio: 469,
            ciudad: "miami",
            imagenes: ["gclassmia.webp", "gclassmia2.webp", "gclassmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "Benz G63 Blue",
            precio: 745,
            ciudad: "miami",
            imagenes: ["g63mia.webp", "g63mia2.webp", "g63mia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "Maybach S 680",
            precio: 745,
            ciudad: "miami",
            imagenes: ["maybachmia.webp", "maybachmia2.webp", "maybachmia3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "Maybach S 580",
            precio: 745,
            ciudad: "miami",
            imagenes: ["s580mia.webp", "s580mia2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "Maybach GLS 600",
            precio: 745,
            ciudad: "miami",
            imagenes: ["gls600mia3.webp", "gls600mia.webp", "gls600mia2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "Benz C300 Convertible",
            precio: 745,
            ciudad: "miami",
            imagenes: ["c300mia3.webp", "c300mia.webp", "C300mia2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ferrari",
            modelo: "Purosangue",
            precio: 2499,
            ciudad: "dubai",
            imagenes: ["purosangredubai.webp", "purosangredubai2.webp", "purosangredubai3.webp", "purosangredubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ferrari",
            modelo: "296 GTB",
            precio: 1099,
            ciudad: "dubai",
            imagenes: ["296dubai.webp", "296dubai2.webp", "296dubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Huracan Evo Spyder",
            precio: 830,
            ciudad: "dubai",
            imagenes: ["spyderdubai.webp", "spyderdubai2.webp", "spyderdubai3.webp", "spyderdubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Urus Mansory",
            precio: 1099,
            ciudad: "dubai",
            imagenes: ["urusdubai2.webp", "urusdubai.webp", "urusdubai3.webp", "urusdubai4.webp", "urusdubai5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lamborghini",
            modelo: "Urus Yellow",
            precio: 999,
            ciudad: "dubai",
            imagenes: ["urusydubai.webp", "urusydubai2.webp", "urusydubai3.webp", "urusydubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "McLaren",
            modelo: "Artura Spyder",
            precio: 1099,
            ciudad: "dubai",
            imagenes: ["mclarendubai.webp", "mclarendubai2.webp", "mclarendubai3.webp", "mclarendubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lotus",
            modelo: "Emira",
            precio: 259,
            ciudad: "dubai",
            imagenes: ["lotusdubai.webp", "lotusdubai2.webp", "lotusdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "G63 AMG 2025",
            precio: 549,
            ciudad: "dubai",
            imagenes: ["g6325dubai.webp", "g6325dubai2.webp", "g6325dubai3.webp", "g6325dubai4.webp", "g6325dubai5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "Brabus",
            precio: 560,
            ciudad: "dubai",
            imagenes: ["brabusdubai.webp", "brabusdubai2.webp", "brabusdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "G63 AMG",
            precio: 499,
            ciudad: "dubai",
            imagenes: ["g63dubai.webp", "g63dubai2.webp", "g63dubai3.webp", "g63dubai4.webp", "g63dubai5.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Mercedes",
            modelo: "S500",
            precio: 300,
            ciudad: "dubai",
            imagenes: ["s500dubai.webp", "s500dubai2.webp", "s500dubai3.webp", "s500dubai4.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Audi",
            modelo: "A3",
            precio: 115,
            ciudad: "dubai",
            imagenes: ["a3dubai.webp", "a3dubai2.webp","a3dubai3.webp", "a3dubai4.webp", "a3dubai5.webp", "a3dubai6.webp", "a3dubai7.webp", "a3dubai8.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Audi",
            modelo: "A6",
            precio: 120,
            ciudad: "dubai",
            imagenes: ["a6dubai.webp", "a6dubai2.webp","a6dubai3.webp","a6dubai4.webp","a6dubai5.webp","a6dubai6.webp", ],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Audi",
            modelo: "Q3",
            precio: 129,
            ciudad: "dubai",
            imagenes: ["q3dubai.webp", "q3dubai2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Audi",
            modelo: "RSQ3",
            precio: 199,
            ciudad: "dubai",
            imagenes: ["rsq3dubai.webp", "rsq3dubai3.webp", "rsq3dubai2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
            {
            marca: "BMW",
            modelo: "420i",
            precio: 189,
            ciudad: "dubai",
            imagenes: ["420dubai.webp", "420dubai2.webp","420dubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "BMW",
            modelo: "735i",
            precio: 299,
            ciudad: "dubai",
            imagenes: ["735dubai.webp", "735dubai2.webp", "735dubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Chevrolet",
            modelo: "Corvette",
            precio: 349,
            ciudad: "dubai",
            imagenes: ["corvettedubai.webp", "corvettedubai2.webp", "corvettedubai3.webp",],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Cadillac",
            modelo: "Escalade",
            precio: 225,
            ciudad: "dubai",
            imagenes: ["escaladedubai.webp", "escaladedubai2.webp", "escaladedubai3.webp",],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Lange Rover",
            modelo: "Defender",
            precio: 259,
            ciudad: "dubai",
            imagenes: ["defenderdubai.webp", "defenderdubai2.webp", "defenderdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Range Rover",
            modelo: "Sport",
            precio: 250,
            ciudad: "dubai",
            imagenes: ["rrsportdubai.webp", "rrsportdubai2.webp", "rrsportdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Range Rover",
            modelo: "Velar",
            precio: 229,
            ciudad: "dubai",
            imagenes: ["rrvelardubai.webp", "rrvelardubai2.webp", "rrvelardubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ford",
            modelo: "Bronco",
            precio: 159,
            ciudad: "dubai",
            imagenes: ["broncodubai.webp", "broncodubai2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ford",
            modelo: "Mustang Coupe",
            precio: 169,
            ciudad: "dubai",
            imagenes: ["coupedubai.webp", "coupedubai2.webp", "coupedubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Ford",
            modelo: "Mustang GT V8",
            precio: 189,
            ciudad: "dubai",
            imagenes: ["fordgtdubai.webp", "fordgtdubai2.webp", "fordgtdubai3.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        },
        {
            marca: "Jetour",
            modelo: "T2",
            precio: 139,
            ciudad: "dubai",
            imagenes: ["jetourdubai.webp", "jetourdubai3.webp", "jetourdubai2.webp"],
            link: "mailto:xtrarent.contact@gmail.com?subject=Car%20Rental"
        }
    ];


    // Tasas de cambio desde EUR
    const exchangeRates = {
        EUR: 1,
        USD: 1.18,  // ajusta si tienes datos en tiempo real
        AED: 4.33
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
            coche.precio >= precioMin && coche.precio < precioMax 
        );

        // Mostrar los coches filtrados en la página
        if (cochesFiltrados.length > 0) {
            listaCoches.innerHTML = cochesFiltrados.map((coche, index) => {
                // Lógica para mostrar solo EUR y USD si la ciudad es España, de lo contrario, mostrar AED
                let monedas = `
                    <strong>${formatCurrency(coche.precio, 'EUR')}</strong> / 
                    <strong>${formatCurrency(coche.precio * exchangeRates.USD, 'USD')}</strong>
                `;
                
                if (ciudadSeleccionada === 'dubai') {
                    monedas += ` / <strong>${formatCurrency(coche.precio * exchangeRates.AED, 'AED')}</strong>`;
                }

                return `
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
                                ${monedas}
                            </p>
                            <a href="${coche.link}" target="_blank" class="boton-reserva">Reservar por correo</a>
                        </div>
                    </div>
                `;
            }).join("");

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
