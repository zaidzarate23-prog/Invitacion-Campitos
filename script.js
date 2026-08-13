/* =========================
   ABRIR INVITACIÓN
========================= */

function abrirInvitacion() {

    document.getElementById("contenido")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   CUENTA REGRESIVA
========================= */

const fechaBoda =
    new Date("January 16, 2027 18:00:00").getTime();


function actualizarCuenta() {

    const ahora = new Date().getTime();

    const diferencia = fechaBoda - ahora;


    if (diferencia <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;

    }


    const dias =
        Math.floor(
            diferencia / (1000 * 60 * 60 * 24)
        );

    const horas =
        Math.floor(
            (diferencia %
                (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutos =
        Math.floor(
            (diferencia %
                (1000 * 60 * 60))
            / (1000 * 60)
        );

    const segundos =
        Math.floor(
            (diferencia %
                (1000 * 60))
            / 1000
        );


    document.getElementById("days")
        .innerText = dias.toString().padStart(2, "0");

    document.getElementById("hours")
        .innerText = horas.toString().padStart(2, "0");

    document.getElementById("minutes")
        .innerText = minutos.toString().padStart(2, "0");

    document.getElementById("seconds")
        .innerText = segundos.toString().padStart(2, "0");

}


actualizarCuenta();

setInterval(actualizarCuenta, 1000);
