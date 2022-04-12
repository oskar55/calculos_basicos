// CODIGO DEL CUADRADO
console.group("Cuadrado");
    function perimetroCuadrado(lado) {
        return lado * 4;
    }

    function areaCuadrado(lado) {
        return lado * lado;
    }

console.groupEnd();




// CODIGO DEL TRIANGULO
console.group("Triangulo");   

    function alturaTrianguloIsoseles(lado1, lado2, base){

        if (lado1 == lado2 || lado1 == base || lado2 == base) {
            
            const altura = (Math.sqrt((lado1 * lado2) - (base * base)/4 ));

            // retornar altura isoseles
            return altura;
        }
    };

    function perimetroTriangulo(lado1, lado2, base){     
        return lado1 + lado2 + base;
    };


    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }

console.groupEnd();




// CODIGO DEL CIRCULO
console.group("Circulo");

    // Diametro
    function diametroCirculo(radio) {
        return radio * 2;
    }

    // PI
    const PI = Math.PI;

    // perimetro
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    // Area
    function AreaCirculo(radio) {
        return (radio * radio) * PI;        
    }

console.groupEnd();



// INTERACCION CON EL CODIGO HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}