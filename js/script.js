// JavaScript para abrir y cerrar el modal
function openModal() {
    document.getElementById("registro").style.display = "block";
}

function closeModal() {
    document.getElementById("registro").style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera de él
window.onclick = function (event) {
    var modal = document.getElementById("registro");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}