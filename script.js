document.addEventListener("DOMContentLoaded", function () {
    const paisSelect = document.getElementById("pais");
    const ciudadSelect = document.getElementById("ciudad");

    const ciudadesPorPais = {
        españa: [
            { nombre: "Málaga", valor: "malaga" },
            { nombre: "Mallorca", valor: "mallorca" },
            { nombre: "Ibiza", valor: "ibiza" },
            { nombre: "Valencia", valor: "valencia" },
        ],
        uae: [
            { nombre: "Dubai", valor: "dubai" },
        ],
        us: [
            {nombre: "Miami", valor: "miami"}
        ],
    };

    // Función para actualizar las ciudades
    function actualizarCiudades(paisSeleccionado) {
        const fragmento = document.createDocumentFragment();
        ciudadSelect.innerHTML = '';  
        ciudadSelect.disabled = true; 

        if (paisSeleccionado && ciudadesPorPais[paisSeleccionado]) {
            const opciones = ciudadesPorPais[paisSeleccionado].map(ciudad => {
                const option = document.createElement("option");
                option.value = ciudad.valor;
                option.textContent = ciudad.nombre;
                return option;
            });

            opciones.forEach(option => fragmento.appendChild(option)); 
            ciudadSelect.appendChild(fragmento); 
            ciudadSelect.disabled = false; 
        }
    }

    // Cuando cambie el país, actualizar las ciudades
    paisSelect.addEventListener("change", function () {
        const paisSeleccionado = paisSelect.value;
        actualizarCiudades(paisSeleccionado); 
    });

    // Función para redirigir a options.html con el parámetro ciudad
    function redirigir() {
        const ciudad = ciudadSelect.value;
        if (!ciudad) {
            alert("Por favor, selecciona una ciudad."); 
            return;
        }
        // Redirigir a options.html con la ciudad seleccionada
        window.location.href = `options.html?ciudad=${ciudad}`;
    }

    // Redireccionar al hacer submit
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault();
        redirigir(); 
    });
});
