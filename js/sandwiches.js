$(document).ready(function() {
    $('.col-md-4').on('click', function() {
        var sandwichName = $(this).find('h1').text();
        var modalTitle = 'Sandwich de ' + sandwichName;
        $('#sandwichModalLabel').text(modalTitle);
        var sandwichDescriptions = {
            'Sandwich de pollo': 'Un sandwich acompañado de tomate y su lechuga. Precio: S/. 1.50',
            'Sandwich de palta': 'Acompañado con su fresca lechuga y su tomate. Precio: S/. 1.50',
            'Sandwich de huevo': 'Ideal para los que gustan acompañada con su jamonada. Precio: S/. 1.50',
            'Sandwich de acelga': 'Rico sandwich acompañado con huevo sancochado y su toque de limon. Precio: S/. 3.50',
            'Sandwich de atun': 'Buen sandwich acompañado de tomate y lechuga, ideal para empezar el dia. Precio: S/. 2.00',
            'Sandwich integral': 'Ideal para consumir en el camino. Precio: S/. 1.50',
            'Sandwich gratinado': 'Un sandwich crocante con su delicioso huevo derretido. Precio: S/. 2.50',
            'Sandwich vegano': 'Acompañado de queso chedar y su lechuga fresca. Precio: S/. 1.50'
        };

        var modalContent = sandwichDescriptions[sandwichName];
        $('#sandwichModalBody').html(modalContent);

        $('#sandwichModal').modal('show');
    });
});