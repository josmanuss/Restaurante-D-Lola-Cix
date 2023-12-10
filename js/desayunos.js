document.addEventListener("DOMContentLoaded", function () {
    const enlacesDesayuno = document.querySelectorAll('.open-desayuno-modal');

    enlacesDesayuno.forEach(function (enlace) {
        enlace.addEventListener('click', function (evento) {
            evento.preventDefault();
            const nombreDesayuno = enlace.getAttribute('data-desayuno');
            const descripcionDesayuno = getDescripcionDesayuno(nombreDesayuno);
            const precioDesayuno = getPrecioDesayuno(nombreDesayuno);  
            document.getElementById('desayunoModalLabel').textContent = nombreDesayuno;
            if (precioDesayuno) {
                document.getElementById('desayunoModalDescription').innerHTML = `Descripción: ${descripcionDesayuno}<br>Precio: ${precioDesayuno}`;
            } else {
                document.getElementById('desayunoModalDescription').innerHTML = `Descripción: ${descripcionDesayuno}`;
            }
            $('#desayunoModal').modal('show');
        });
    });

    function getDescripcionDesayuno(nombreDesayuno) {
        const descripciones = {
            'batido de fresa': 'Delicioso batido de fresa.',
            'crumble de manzana': 'Crumble de manzana con un toque especial.',
            'causa lambayecana': 'Galletas de almendra con un toque único.',
            'huevos revueltos': 'Huevos revueltos preparados a la perfección.',
            'pancakes': 'Pancakes esponjosos y deliciosos.',
            'torta kiwi con fresas': 'Torta de kiwi con fresas para un desayuno especial.',
            'tortitas de avena con platano': 'Tortitas de avena con platano, una opción saludable.',
            'tostadas con palta': 'Tostadas con palta, una combinación deliciosa.',
            'yogur de avellanas y vainilla': 'Yogurt de avellanas y vainilla, una opción refrescante.'
        };

        return descripciones[nombreDesayuno] || '';
    }

    function getPrecioDesayuno(nombreDesayuno) {
        const precios = {
            'batido de fresa': 'S/6.00',
            'crumble de manzana': 'S/6.00',
            'causa lambayecana': 'S/6.00',
            'huevos revueltos': 'S/6.00',
            'pancakes': 'S/6.00',
            'torta kiwi con fresas': 'S/6.00',
            'tortitas de avena con platano': 'S/6.00',
            'tostadas con palta': 'S/6.00',
            'yogur de avellanas y vainilla': 'S/6.00'
        };
        return precios[nombreDesayuno] || "";
    }
});
