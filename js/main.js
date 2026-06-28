/*
   MODO OSCURO / CLARO
*/

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btn-modo-oscuro");
    const imagen = document.getElementById("imgBoton");
    boton.addEventListener("click", () => {

        // Activa o desactiva el modo oscuro
        document.body.classList.toggle("modooscuro");

        // Cambia el icono del botón
        if (document.body.classList.contains("modooscuro")) {

            imagen.src = "imgs/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
            imagen.alt = "Modo Claro";

        } else {

            imagen.src = "imgs/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
            imagen.alt = "Modo Oscuro";

        }

        // Cambia el aspecto de las cards de bootstrap
        document.querySelectorAll(".card").forEach(card => {
            card.classList.toggle("text-bg-dark");
        });

    });

});