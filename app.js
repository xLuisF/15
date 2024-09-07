ScrollReveal().reveal(".headline");
ScrollReveal().reveal(".tagline", { delay: 500 });
ScrollReveal().reveal(".punchline", { delay: 1000 });


document.addEventListener('DOMContentLoaded',() => { 

    //===
    // VARIABLES
    //===
    const diaDelEvento = new Date('05/24/2024 10:00 PM');
    // DOM for render
    const dias = document.getElementById('days');
    const horas = document.getElementById('hours');
    const minutos = document.getElementById('minutes');
    const segundos = document.getElementById('seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    //===
    // FUNCTIONS
    //===

    /**
    * Method that updates the countdown and the sample
    */
    function actualizarContador() {
        // Calcs
        const fechaActual = new Date()
        const duracion = diaDelEvento - fechaActual;
        const diasRestantes = Math.floor(duracion / MILLISECONDS_OF_A_DAY);
        const horasRestantes = Math.floor((duracion % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const minutosRestantes = Math.floor((duracion % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const segundosRestantes = Math.floor((duracion % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        // Render
        dias.textContent = diasRestantes.toString().padStart(2, '0');
        horas.textContent = horasRestantes.toString().padStart(2, '0');
        minutos.textContent = minutosRestantes.toString().padStart(2, '0');
        segundos.textContent = segundosRestantes.toString().padStart(2, '0');
    }

    //===
    // INIT
    //===
    actualizarContador();
    // Refresh every second
    setInterval(actualizarContador, MILLISECONDS_OF_A_SECOND);
});