const precioOriginal = 120;
const descuento = 18;

//manual
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

//encapsulado
function calcularPrecioConDescuento(precio, descuento) {
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}


//cupones

const cupones = [
       'cupon Duno',
       'cupon exito',
       'cupon carulla',
];


function onClickButtonPriceDiscount(params) {
    const inputPrecio = document.getElementById("inputPrecio");
    const inputPreciovalue = inputPrecio.value;

    const inputDisc = document.getElementById("inputDisc");
    const inputDiscvalue = inputDisc.value;

    const precioConDescuenTototal = calcularPrecioConDescuento(inputPreciovalue, inputDiscvalue);

    return document.getElementById("totalprecio").innerText = "$" + precioConDescuenTototal;
}




function onClickButtonPriceCupon(params) {
    const inputPrecio = document.getElementById("inputPrecio");
    const inputPreciovalue = inputPrecio.value;

    const inputCupon = document.getElementById("inputCupon");
    const inputCuponvalue = inputCupon.value;


    for (const iterator of object) {
        
    }
    switch (cupones) {
        case cupones:
            
            break;
    
        default:
            break;
    }

    const precioConDescuenTototalcUPON = calcularPrecioConDescuento(inputPreciovalue, inputCuponvalue);

    return document.getElementById("totalprecio").innerText = "$" + precioConDescuenTototalcUPON;
}