<script>
function abrir(btn) {
    var videoSrc = btn.dataset.video;
    var miPopup = btn.parentElement.querySelector(".miPopup");
    var fondoPopup = btn.parentElement.parentElement.querySelector(".fondoPopup");
    miPopup.querySelector("video source").src = videoSrc;
    miPopup.style.display = "block";
    fondoPopup.style.display = "block";
    miPopup.querySelector("video").load();
    miPopup.querySelector("video").play();
    var botonCerrar = miPopup.querySelector(".cerrar");
    botonCerrar.addEventListener("click", function(event) {
        ocultarPopup(miPopup);
    });
}

function ocultarPopup(miPopup) {
    var fondoPopup = miPopup.parentElement.querySelector(".fondoPopup");
    miPopup.style.display = "none";
    fondoPopup.style.display = "none";
    var video = miPopup.querySelector("video");
    video.pause();
    video.currentTime = 0;
}

var botones = document.querySelectorAll("button[data-video]");
botones.forEach(function(boton) {
    boton.addEventListener("click", function(event) {
        abrir(this);
    });
});


    </script>