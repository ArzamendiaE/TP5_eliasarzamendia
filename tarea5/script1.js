document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("forms");
    const resultadoDiv = document.getElementById("resultado");
    const inputs = form.querySelectorAll('input, select');

    function actualizarResultado() {
        const nombre = document.getElementById("name").value;
        const pais = document.getElementById("pais").value;
        const genero = document.querySelector('input[name="genero"]:checked')?.value || '';
        const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(el => el.value);

        const resultado = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>País:</strong> ${pais}</p>
            <p><strong>Género:</strong> ${genero}</p>
            <p><strong>Intereses:</strong> ${intereses.join(", ") || "Ninguno"}</p>
        `;

        resultadoDiv.innerHTML = resultado;
    }

    inputs.forEach(input => {
        input.addEventListener('input', actualizarResultado);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        actualizarResultado();
    });

    document.getElementById("resetear").addEventListener("click", function () {
        form.reset();
        resultadoDiv.innerHTML = "";
    });
});