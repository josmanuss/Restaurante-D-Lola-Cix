document.addEventListener("DOMContentLoaded", function () {
    const enlacesMenu = document.querySelectorAll('.open-menu-ec-modal');

    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener('click', function (evento) {
            evento.preventDefault();
            const nombreMenu = enlace.getAttribute('data-menu-ec');
            const descripcionMenu = getDescripcionMenu(nombreMenu);
            const precioMenu = getPrecioMenu(nombreMenu);  
            document.getElementById('menu-ecModalLabel').textContent = nombreMenu;
            if (precioMenu) {
                document.getElementById('menu-ecModalDescription').innerHTML = `Descripción: ${descripcionMenu}<br>Precio: ${precioMenu}`;
            } else {
                document.getElementById('menu-ecModalDescription').innerHTML = `Descripción: ${descripcionMenu}`;
            }
            $('#menu-ecModal').modal('show');
        });
    });

    function getDescripcionMenu(nombreMenu) {
        const descripciones = {
            'ceviche': 'Mariscos frescos marinados en jugo de limón con cebolla y cilantro.',
            'papa a la huancaina': 'Papas en rodajas servidas con una salsa peruana cremosa y picante de queso.',
            'sopa del dia': 'Sopa especial del chef del día con una variedad de ingredientes frescos.',
            'ensalada': 'Ensalada refrescante con hojas verdes mixtas, tomates y aderezo agridulce.',
            'adobo de chancho': 'Cerdo marinado en una sabrosa y picante salsa de adobo, servido con arroz.',
            'estofado de pollo': 'Pollo tierno estofado en un caldo sabroso con verduras.',
            'tortilla de raya': 'Plato peruano tradicional con raya en una tortilla.',
            'sudado': 'Pescado estofado con tomates, cebollas y especias peruanas.',
            'aeropuerto': 'Un plato contundente con una variedad de carnes, papas y arroz.',
            'bisteck a lo pobre': 'Bistec de res servido con arroz, plátanos fritos y un huevo frito.',
            'pescado frito': 'Pescado crujiente frito servido con yuca frita.'
        };

        return descripciones[nombreMenu] || '';
    }

    function getPrecioMenu(nombreMenu) {
        const precios = {
            'adobo de chancho': 'S/8.00',
            'estofado de pollo': 'S/7.00',
            'tortilla de raya': 'S/7.00',
            'sudado': 'S/7.00',
            'aeropuerto': 'S/8.50',
            'bisteck a lo pobre': 'S/8.50',
            'pescado frito': 'S/8.00'
        };
        return precios[nombreMenu] || "";
    }
});