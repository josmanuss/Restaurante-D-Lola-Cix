$(document).ready(function () {
    $(".open-almuerzo-modal").click(function (event) {
        event.preventDefault();
        var almuerzo = $(this).data("almuerzo");
        $("#almuerzoModalLabel").text(almuerzo.replace('_', ' ').toUpperCase());
        var descripcionalmuerzo = "";
        switch (almuerzo) {
            case "tallarines verdes":
                descripcionalmuerzo = "Deléitate con nuestra especialidad de tallarines verdes. Una exquisita combinación de pasta fresca y una suave salsa de espinacas con queso parmesano. ¡Una explosión de sabor en cada bocado! Precio: S/10.00.";
                break;
            case "aji de gallina":
                descripcionalmuerzo = "Saborea la auténtica tradición peruana con nuestro Ají de gallina. Un platillo rico y cremoso, con pechuga de pollo desmenuzada y bañada en una deliciosa salsa de ají amarillo. Precio: S/10.00.";
                break;
            case "arroz con pato":
                descripcionalmuerzo = "Prueba la exquisitez de nuestro Arroz con pato, un plato peruano que combina arroz graneado con tierno y jugoso pato cocido a la perfección. ¡Una experiencia culinaria única! Precio: S/10.00.";
                break;
            case "aeropuerto":
                descripcionalmuerzo = "Viaja por sabores con nuestro Aeropuerto, un plato que ofrece una mezcla de carnes, papas fritas, arroz y huevo. ¡Una experiencia completa que te dejará satisfecho! Precio: S/10.00.";
                break;
            case "pollo broaster":
                descripcionalmuerzo = "Disfruta de nuestro Pollo broaster, crujiente por fuera y jugoso por dentro. Acompañado de papas fritas y ensalada fresca. ¡Una deliciosa opción para satisfacer tus antojos! Precio: S/10.00.";
                break;
            case "bisteck a lo pobre":
                descripcionalmuerzo = "El bistec a lo pobre es un plato tradicionalmente sabroso y reconfortante que destaca por su sencillez y delicioso sabor. Se trata de una preparación de carne de res, generalmente bistec, que se cocina de manera simple pero con resultados irresistibles. Precio: S/10.00.";
                break;
            case "seco de cabrito":
                descripcionalmuerzo = "cabrito cocido a fuego lento en una salsa espesa de chicha de jora, ajíes, hierbas y especias. Suele acompañarse con arroz y frijoles. Precio: S/20.00 ";
                break;
            case "causa lambayecana":
                descripcionalmuerzo = "incorpora ingredientes locales como mariscos, cangrejo o pescado fresco. La causa es una especie de pastel de papa amarilla relleno. Precio S/.15.00";
                break;
            case "cabrito a la norteña":
                descripcionalmuerzo = "El cabrito es adobado con hierbas y especias antes de cocinarse lentamente. Precio: S/20.00.";
                break;    
            case "chinguirito":
                descripcionalmuerzo = "Consiste en tiras de pescado seco, marinadas en limón y mezcladas con cebolla, ají, maíz tostado y camote. Precio: S/20.00.";
                break;
            case "carapulcra peruana":
                descripcionalmuerzo = "La carapulcra peruana es un platillo tradicional y emblemático de la gastronomía peruana que ha perdurado a lo largo de los años. Esta deliciosa preparación combina ingredientes autóctonos y técnicas culinarias ancestrales, ofreciendo una experiencia única para el paladar. Precio: S/20.00.";
                break;                                
            default:
                descripcionalmuerzo = "Descripción del almuerzo. Puedes agregar más información aquí.";
                break;
        }

        $("#almuerzoModalDescription").html(descripcionalmuerzo);
        $("#almuerzoModal").modal("show");
    });
});
