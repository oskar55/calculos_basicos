// const lista = [
//     100,
//     200,
//     300,
//     500,
// ];


function calculasMediaAritmetica(lista) {

    // forma de iterar con bucle FOR
    // for (let i = 0; i < lista.length; i++) {
    //     sumalista = sumalista + lista[i];    
    // }

    //forma de iterar con funcion
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, NuevoElemento) {
            return valorAcumulado + NuevoElemento;
        }
    );
    
    const promediolista = sumalista/lista.length;

    return promediolista;
        
}