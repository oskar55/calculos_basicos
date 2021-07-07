const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

//ordenar el Array de los salarios para poder calcualr la mediana
const salariosColSorted = salariosCol.sort(
    function (salary_a, salary_b) {
        return salary_a - salary_b;
    }
);

// ============== HELPERS

//La Mediana
function esPar(valor) {
    if (valor % 2 === 0) {
        return true;
    }else{
        return false;
    }
    //refactorizar el codigo
    // return (valor % 2 === 0);
}

// calcular media aritmetica
function calculasMediaAritmetica(lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, NuevoElemento) {
            return valorAcumulado + NuevoElemento;
        }
    );
   
    const promediolista = sumalista/lista.length;
    return promediolista;        
}


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        // calcular promedio
        const mediana = calculasMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}




const medianaGeneralCol = medianaSalarios(salariosColSorted);


//mediana top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

//grafica 1
const totalSalarios = (salariosColSorted.length);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
    totalSalarios,
});

