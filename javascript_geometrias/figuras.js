// =========== CODIGO CUADRADOS
console.group("Cuadrados");

    // perimetro
    function perimetroCuadrado(lado){
        return lado * 4;
    } 
    // console.log("perimetro del cuadrado: " + perimetroCuadrado+"cm");

    // area
    function areaCuadrado(lado){
        return lado * lado;
    }
    // console.log("area del cuadrado: " + areaCuadrado+"cm^2");

console.groupEnd();



// ============= CODIGO TRIANGULOS
console.group("Triandulos");
    // const ladoTriandulo1 = 6;
    // const ladoTriandulo2 = 6;
    // const baseTriandulo = 4;

    // console.log('los lados del trianculo miden '
    //     + ladoTriandulo1 
    //     +'cm, '
    //     + ladoTriandulo2 
    //     + 'cm, '
    //     + baseTriandulo 
    //     + 'cm'
    // );

    // // altura del triangulo
    // const alturaTriangulo = 5.5;
    // console.log("altura del triangulo: " + alturaTriangulo +"cm");

    // perimetro del triangulo
    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
    }
    // console.log("perimetro del triangulo: " + perimetroTriangulo +"cm");

    // area del triangulo
    function areaTriangulo(base, altura){
        return (base * altura) / 2;
    }

    // console.log("area del triangulo: " + areaTriangulo +"cm^2");

console.groupEnd();




console.group("Circulos");

    // radio
    // const radioCirculo = 4;
    // console.log("radio del circulo: " + radioCirculo +"cm");


    // diametro
    function diametroCirculo(radio) {
        return radio * 2;
    }

    // PI
    const PI = Math.PI;


    // circunferencia
    function circunferenciaCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }


    // Area
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }
    
console.groupEnd();



// ============ interaccion con HTML 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    alert(perimetroCuadrado(value));

}

function calcularPerimetroArea(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    alert(areaCuadrado(value));
}


//triangulo
function calcularPerimetroTriangulo(){

    const ladouno = document.getElementById("InputUnoTriangulo");
    const valueuno = ladouno.value;

    const ladodos = document.getElementById("InputDosTriangulo");
    const valueladodos = ladodos.value; 

    const base = document.getElementById("InputBaseTriangulo");
    const valuebase = base.value;

    var valorperimetro = perimetroTriangulo( parseInt(valueuno), parseInt(valueladodos), parseInt(valuebase));

    alert(valorperimetro);

}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputBaseTriangulo");
    const valuebase = base.value;


    const altura = document.getElementById("InputAlturaTriangulo");
    const valuealtura = altura.value;

    var valorarea = areaTriangulo(valuebase, valuealtura);
    alert(valorarea);
}





