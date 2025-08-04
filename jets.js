document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ciudadSeleccionada = urlParams.get("ciudad")?.toLowerCase() || "";

    const jets = [
        {
            modelo: "Gulfstream GIV",
            capacidad: 16, 
            ciudad: "dubai",
            imagenes: ["/jets/gulfstream.webp", "/jets/gulfstream2.webp", "/jets/gulfstream3.webp"],
            link: "https://wa.me/+34640119130?text=Hola,%20quiero%20más%20información%20sobre%20el%20jet%20Gulfstream%GIV"
        },
        {
            modelo: "Hawker 4000",
            capacidad: 10, 
            ciudad: "dubai",
            imagenes: ["/jets/hawker4000.webp", "/jets/hawker40002.webp","/jets/hawker40003.webp"],
            link: "https://wa.me/+34640119130?text=Hola,%20quiero%20más%20información%20sobre%20el%20jet%Hawker%204000"
        },
        {
            modelo: "Hawker 800A",
            capacidad: 8, 
            ciudad: "dubai",
            imagenes: ["/jets/hawker800.webp", "/jets/hawker8002.webp"],
            link: "https://wa.me/+34640119130?text=Hola,%20quiero%20más%20información%20sobre%20el%20jet%Hawker%800A"
        },
        {
            modelo: "Bombardier Global 6000",
            capacidad: 13, 
            ciudad: "dubai",
            imagenes: ["/jets/bomb6000.webp", "/jets/bomb60002.webp"],
            link: "https://wa.me/+34640119130?text=Hola,%20quiero%20más%20información%20sobre%20el%20jet%20Bombardier%20Global%206000"
        },
        {
            modelo: "Bombardier Global 5000",
            capacidad: 13, 
            ciudad: "dubai",
            imagenes: ["/jets/bomb5000.webp", "/jets/bomb50002.webp", "/jets/bomb50003.webp"],
            link: "https://wa.me/+34640119130?text=Hola,%20quiero%20más%20información%20sobre%20el%20jet%20Bombardier%20Global%205000"
        },
        {
            modelo: "Bombardier Global XRS",
            capacidad: 15, 
            ciudad: "dubai",
            imagenes: ["/jets/bombxrs.webp", "/jets/bombxrs2.webp", "/jets/bombxrs3.webp"],
            link: "https://wa.me/+34640119130?text=Hola,%20quiero%20más%20información%20sobre%20el%20jet%20Bombardier%20Global%20XRS"
        },
        {
            modelo: "Cessna Citation III",
            capacidad: 8, 
            ciudad: "dubai",
            imagenes: ["/jets/cesnajet.webp"],
            link: "https://wa.me/+34640119130?text=Hola,%20quiero%20más%20información%20sobre%20el%20jet%20Cessna%20Citation%20III"
        },
    ];

    const listaJets = document.getElementById("lista-coches");
    const mensajeNoJets = document.getElementById("mensaje-no-coches");
    const precioSelect = document.getElementById("price-range");

    function mostrarJets() {
        const jetsFiltrados = jets.filter(jet => jet.ciudad === ciudadSeleccionada);

        if (jetsFiltrados.length > 0) {
            listaJets.innerHTML = jetsFiltrados.map((jet, index) => {
                let contactoWhatsApp = `
                    <strong>Precio: <a href="${jet.link}" target="_blank" style="color: #dca911; text-decoration: underline;">Contáctanos</a></strong>
                `;

                return `
                    <div class="car-profile">
                        <div class="swiper swiper-${index}">
                            <div class="swiper-wrapper">
                                ${jet.imagenes.map(img => `
                                    <div class="swiper-slide">
                                        <img loading="lazy" src="images/${img}" alt="${jet.modelo}">
                                    </div>
                                `).join("")}
                            </div>
                            <div class="swiper-button-next swiper-button-next-${index}"></div>
                            <div class="swiper-button-prev swiper-button-prev-${index}"></div>
                            <div class="swiper-pagination swiper-pagination-${index}"></div>
                        </div>
                        <div class="car-details">
                            <h2>${jet.modelo}</h2>
                            <p>
                                <strong>Pasajeros:</strong> ${jet.capacidad} <br>
                                ${contactoWhatsApp} <!-- Aquí mostramos el texto con el enlace -->
                            </p>
                        </div>
                    </div>
                `;
            }).join("");

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

    mostrarJets();
});
