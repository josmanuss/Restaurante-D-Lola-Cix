document.addEventListener("DOMContentLoaded", function () {
    const enlacesJugo = document.querySelectorAll('.open-jugo-modal');

    enlacesJugo.forEach(function (enlace) {
        enlace.addEventListener('click', function (evento) {
            evento.preventDefault();
            const jugo = enlace.getAttribute('data-jugo');
            const descripcionJugo = getDescripcionJugo(jugo);
            const precioJugo = getPrecioJugo(jugo);  
            document.getElementById('jugoModalLabel').textContent = "Jugo de " + jugo.charAt(0).toUpperCase() + jugo.slice(1);
            if (precioJugo) {
                document.getElementById('jugoModalDescription').innerHTML = `Descripción: ${descripcionJugo}<br>Precio: ${precioJugo}`;
            } else {
                document.getElementById('jugoModalDescription').innerHTML = `Descripción: ${descripcionJugo}`;
            }
            $('#jugoModal').modal('show');
        });
    });

    function getDescripcionJugo(jugo) {
        const descripciones = {
            'piña': 'Disfruta de la frescura tropical con nuestro jugo de piña. Cada sorbo te transportará a las cálidas playas con su sabor jugoso y ligeramente ácido.',
            'papaya': 'Sumérgete en la dulzura natural de nuestro jugo de papaya. La suavidad de la papaya madura se combina perfectamente en esta bebida refrescante.',
            'fresa': 'Experimenta la explosión de sabor con nuestro jugo de fresa. Cada gota está cargada con la dulzura intensa y el aroma fresco de las fresas maduras.',
            'surtido papaya + piña': 'Descubre una mezcla exquisita con nuestro jugo de papaya y piña. La combinación de la dulzura de la papaya y la acidez refrescante de la piña crea una experiencia única.',
            'surtido platano + papaya': 'Deléitate con la armonía de sabores en nuestro jugo de plátano y papaya. La cremosidad del plátano se fusiona con la suavidad de la papaya para una experiencia indulgente.',
            'surtido manzana + moras': 'Explora la mezcla equilibrada de nuestro jugo de manzana con moras. La frescura de la manzana se complementa con la riqueza y el toque agridulce de las moras.',
            'default': 'Descripción del Jugo. Puedes agregar más información aquí.'
        };

        return descripciones[jugo] || descripciones['default'];
    }

    function getPrecioJugo(jugo) {
        const precios = {
            'piña': 'S/5.99',
            'papaya': 'S/5.99',
            'fresa': 'S/5.99',
            'surtido papaya + piña': 'S/9.99',
            'surtido platano + papaya': 'S/9.99',
            'surtido manzana + moras': 'S/9.99',
            'default': ''
        };
        return precios[jugo] || precios['default'];
    }
});
