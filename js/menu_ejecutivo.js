document.addEventListener("DOMContentLoaded", function () {
    const enlacesMenu = document.querySelectorAll('.open-menu-ej-modal');

    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener('click', function (evento) {
            evento.preventDefault();
            const nombreMenu = enlace.getAttribute('data-menu-ec');
            const descripcionMenu = getDescripcionMenuEjecutivo(nombreMenu);
            const precioMenu = getPrecioMenuEjecutivo(nombreMenu);
            document.getElementById('menu-ejModalLabel').textContent = nombreMenu;
            document.getElementById('menu-ejModalDescription').innerHTML = `Descripción: ${descripcionMenu}<br>Precio: ${precioMenu}`;
            $('#menu-ejModal').modal('show');
        });
    });

    function getDescripcionMenuEjecutivo(nombreMenu) {
        const descripciones = {
            'arroz arabe': 'Arroz con especias árabes, aromático y delicioso.',
            'cuy con papas': 'Cuy preparado con papas en una deliciosa combinación de sabores.',
            'ensalada rusa con pollo': 'Ensalada rusa acompañada de tiernos trozos de pollo.',
            'lasaña napolitana': 'Lasaña con capas de carne, salsa de tomate y queso fundido.',
            'lomo saltado': 'Trozos de lomo de res salteados con verduras y aderezos peruanos.',
            'sopa wantan': 'Sopa con dumplings de pollo y vegetales, una deliciosa opción.'
        };

        return descripciones[nombreMenu] || '';
    }

    function getPrecioMenuEjecutivo(nombreMenu) {
        const precios = {
            'arroz arabe': 'S/30.00',
            'cuy con papas': 'S/30.00',
            'ensalada rusa con pollo': 'S/30.00',
            'lasaña napolitana': 'S/30.00',
            'lomo saltado': 'S/30.00',
            'sopa wantan': 'S/30.00'
        };

        return precios[nombreMenu] || '';
    }
});
