document.addEventListener("DOMContentLoaded", function () {
    const paisSelect = document.getElementById("pais");
    const ciudadSelect = document.getElementById("ciudad");

    // Lista de ciudades organizadas por país
    const ciudadesPorPais = {
        españa: [
            { nombre: "Madrid", valor: "madrid" },
            { nombre: "Barcelona", valor: "barcelona" },
            { nombre: "Valencia", valor: "valencia" },
            { nombre: "Bilbao", valor: "bilbao" },
            { nombre: "Sevilla", valor: "sevilla" },
        ]
    };

    // Cuando cambie el país, actualizar las ciudades
    paisSelect.addEventListener("change", function () {
        const paisSeleccionado = paisSelect.value;
        
        // Limpiar y resetear el select de ciudad
        ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
        ciudadSelect.disabled = true;

        // Si se ha seleccionado un país válido, llenar las ciudades
        if (paisSeleccionado && ciudadesPorPais[paisSeleccionado]) {
            ciudadesPorPais[paisSeleccionado].forEach(ciudad => {
                let option = document.createElement("option");
                option.value = ciudad.valor;
                option.textContent = ciudad.nombre;
                ciudadSelect.appendChild(option);
            });

            ciudadSelect.disabled = false; // Habilitar select de ciudad
        }
    });

    // Redireccionar al hacer submit
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let ciudad = ciudadSelect.value;
        if (ciudad) {
            window.location.href = `coches.html?ciudad=${ciudad}`;
        }
    });
});