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
