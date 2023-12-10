document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("imageCarousel");
    let touchStartX = 0;

    carousel.addEventListener("touchstart", function (e) {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", function (e) {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            // Deslizar hacia la izquierda, cambiar a la siguiente imagen
            carousel.querySelector(".carousel-control-next").click();
        } else if (touchEndX - touchStartX > 50) {
          // Deslizar hacia la derecha, cambiar a la imagen anterior
            carousel.querySelector(".carousel-control-prev").click();
        }
    });
});
    