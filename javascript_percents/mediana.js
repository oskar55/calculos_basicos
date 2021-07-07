function calculasMediaAritmetica(lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, NuevoElemento) {
            return valorAcumulado + NuevoElemento;
        }
    );
   
    const promediolista = sumalista/lista.length;
    return promediolista;        
}


const list1desorden = [
    100,
    200,
    500,
    40000000,
];

const list1 = list1desorden.sort(function (a, b) {
    return a - b;
});

const mitadLista1 = parseInt(list1.length / 2);

function esPar(valor) {
    if (valor % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

let mediana;


if (esPar(list1.length)) {
    //calcular los 2 elementos en la mitad del array
    const elemento1 = list1[mitadLista1 - 1];
    const elemento2 = list1[mitadLista1];

    const promedioElementos = calculasMediaAritmetica([
        elemento1, elemento2
    ]);

    mediana = promedioElementos;
}else{
    mediana = list1[mitadLista1];
}