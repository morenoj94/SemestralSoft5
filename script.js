
/*==================================
====================================
Control del formulario de contacto
====================================
==================================*/

// Comprobar si existe el formulario de contacto
const formulario = document.querySelector(".contact-form");

if (formulario) {

    // Inicializamos EmailJS para enviar correos
    emailjs.init({
        publicKey: "bkLbyDq3u4PeANNN5"
    });

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const motivo = document.getElementById("motivo");
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Obtener el texto del motivo seleccionado
        const motivoTexto = motivo.options[motivo.selectedIndex].text;

        // Construir el asunto
        const asunto = `${nombre} - ${motivoTexto}`;

        // Preparar la información del correo
        const datosCorreo = {
            asunto: asunto,
            correo: correo,
            mensaje: mensaje
        };

        // Enviar el correo con EmailJS
        emailjs.send("service_zdlrj9c", "template_fr2na0j", datosCorreo)
            .then(function(response) {
                console.log("Correo enviado correctamente:", response);

                alert("¡Tu mensaje se ha enviado correctamente!");

                formulario.reset();
            })
            .catch(function(error) {
                console.error("Error al enviar el correo:", error);

                alert("No se pudo enviar el mensaje. Inténtalo nuevamente.");
            });
    });

    // Seleccionar motivo y mensaje si viene desde registro
    const parametrosURL = new URLSearchParams(window.location.search);
    const motivoURL = parametrosURL.get("motivo");

    if (motivoURL === "registro") {
        document.getElementById("motivo").value = "registro";
        document.getElementById("mensaje").value = "Me gustaría solicitar una cuenta.";
    }
}


/*=============================================
===============================================
Control de botones de la barra de navegación
===============================================
===============================================*/

// Para inicio de sesión
const btnMostrarLogin = document.getElementById("btn-mostrar-login");
const formularioLogin = document.querySelector(".login-form");
const btnRegistro = document.querySelector(".btn-register");

if (btnMostrarLogin && formularioLogin && btnRegistro) {

    btnMostrarLogin.addEventListener("click", function() {
        formularioLogin.classList.add("active");

        btnMostrarLogin.style.display = "none";
        btnRegistro.style.display = "none";
    });

}
