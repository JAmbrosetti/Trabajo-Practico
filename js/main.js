/*boton modo oscuro/claro*/

/*variable id deboton*/
const boton = document.getElementById("btn-modo-oscuro"); 
/*variable id de imagen del boton*/
const imagen = document.getElementById("imgBoton");


boton.addEventListener("click", () => { 
/*verifica si la imagen del boton es la de modo oscuro o modo claro y cambia la imagen y el alt del boton a la que corresponde en cada caso*/
    if (imagen.src.includes("dark_mode")) {
        imagen.src = "imgs/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
        imagen.alt = "Modo Claro";
    } else {
        imagen.src = "imgs/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
        imagen.alt = "Modo Oscuro";
    }
/*agrega o quita la clase modooscuro a los elementos del body, h1, section y cards para cambiar el estilo de la pagina*/
 document.body.classList.toggle("modooscuro");  

 document.querySelector("h1").classList.toggle("modooscuro");

 document.querySelector("section").classList.toggle("modooscuro");

 /*cambia el color de fondo de las cards de bootstrap*/
 document.body.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("text-bg-dark");
    card.classList.toggle("text-bg-success");
  })

 });
