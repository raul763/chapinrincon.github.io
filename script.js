

function toggleMenu() {
    var menu = document.getElementById("side-menu");
    menu.classList.toggle("show"); // Alterna la clase 'show' para mostrar/ocultar el menú
}

// Obtener el modal y los botones
const modal = document.getElementById('cookie-modal');
const acceptBtn = document.getElementById('accept');
const rejectBtn = document.getElementById('reject');

// Función para aceptar las cookies
acceptBtn.onclick = function() {
    // Aquí puedes agregar lo que suceda cuando el usuario acepta las cookies
    alert("Cookies aceptadas");
    modal.style.display = 'none'; // Cierra el modal
};

// Función para rechazar las cookies
rejectBtn.onclick = function() {
    // Aquí puedes agregar lo que suceda cuando el usuario rechaza las cookies
    alert("Cookies rechazadas");
    modal.style.display = 'none'; // Cierra el modal
};
// Si quieres hacer algo cuando se hace clic en el botón de ver más:
document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        alert('Redirigiendo a la página del hotel...');
    });
});

function abrirMapa(url) { /*PARA ABRIR LA PAGINA DE GOOGLE MAPS */
    window.open(url, '_blank');
}

/*MARQUESINA */
document.addEventListener("DOMContentLoaded", function () {
    let texto = document.getElementById("marquesina");
    let posicion = window.innerWidth;

    function moverMarquesina() {
        posicion -= 2.7; // Ajusta la velocidad cambiando este valor
        if (posicion < -texto.offsetWidth) {
            posicion = window.innerWidth;
        }
        texto.style.transform = `translateX(${posicion}px)`;
        requestAnimationFrame(moverMarquesina);
    }

    moverMarquesina();
});
// Asegúrate de que el contador de visitas se actualice correctamente
let visitCount = localStorage.getItem('visitCount') || 0;
document.getElementById('visitCount').innerText = visitCount;

function updateVisitCount() {
  visitCount++;
  localStorage.setItem('visitCount', visitCount);
  document.getElementById('visitCount').innerText = visitCount;
}

// Llama a la función cuando la página se cargue
window.onload = updateVisitCount;

