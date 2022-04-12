// CODIGO DEL CUADRADO
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("Perimetro del cuadrado miden: "+ perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("Area del cuadrado miden: "+ areaCuadrado + "cm^2");
console.groupEnd();




// CODIGO DEL TRIANGULO
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 
    + "cm, "
    +ladoTriangulo2
    +"cm, "
    +baseTriangulo
    +"cm"
);

const alturaTriangulo = 5.5;
console.log("altura del triangulo miden: "+ alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("Perimetro del triangulo miden: "+ perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("Area del triangulo miden: "+ areaTriangulo + "cm^2");

console.groupEnd();




// CODIGO DEL CIRCULO
console.group("Circulo");

// Radio
const radioCirculo = 4;
console.log("Radio del Circulo mide: "+ radioCirculo + "cm");

// Diametro
const diametroCirculo = radioCirculo * 2; 
console.log("Diametro del Circulo mide: "+ diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("Valor de PI: "+ PI);

// perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("Perimetro del Circulo mide: "+ perimetroCirculo + "cm");

// Area
const AreaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("Area del Circulo mide: "+ AreaCirculo + "cm^2");

console.groupEnd();
