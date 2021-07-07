const lista1 = [

    1,
    2,
    2,
    3,
    4,
    5,
    6,
    1,
    4,
    8,
    9,
    1,
    2,
    3,
    2,
    4,
    1,
    10,
    45,
    23,    

];

const lista1Count = {
};


lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1 ;
        }
    }
);


//convertir un objeto en un ARRAY
const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        valorAcumulado[1] - nuevoValor[1];
    }
);


const moda = lista1Array[lista1Array.length]
