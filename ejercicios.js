// Ejercicios de práctica en JavaScript

// 1. Ingresar dos valores y sumarlos.
function sumarValores(a, b) {
  return a + b;
}

// 2. Ingresar tres valores e indicar cuál es el mayor y cuál el menor.
function mayorYMenor(a, b, c) {
  const mayor = Math.max(a, b, c);
  const menor = Math.min(a, b, c);
  return { mayor, menor };
}

// 3. Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
function contarLetras(palabra) {
  return `${palabra} tiene ${palabra.length} letras.`;
}

// 4. Ingresar un número e indicar si es par.
function esPar(numero) {
  return numero % 2 === 0 ? "Es par" : "No es par";
}

// 5. Ingresar una palabra y un número "n". Repetir la palabra "n" veces.
function repetirPalabra(palabra, n) {
  return palabra.repeat(n);
}

// 6. Ingresar dos valores enteros y enumerar los elementos que los separan.
function enumerarElementos(a, b) {
  const inicio = Math.min(a, b) + 1;
  const fin = Math.max(a, b);
  const elementos = [];
  for (let i = inicio; i < fin; i++) {
    elementos.push(i);
  }
  return elementos;
}

// 7. Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
function multiplosDeTres(a, b) {
  const inicio = Math.min(a, b) + 1;
  const fin = Math.max(a, b);
  const multiplos = [];
  for (let i = inicio; i < fin; i++) {
    if (i % 3 === 0) multiplos.push(i);
  }
  return multiplos;
}

// 8. Mostrar los múltiplos de 2 y 5 menores a 100.
function multiplosDeDosYCinco() {
  const multiplos = [];
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0 || i % 5 === 0) multiplos.push(i);
  }
  return multiplos;
}

// 9. Obtener la suma de los elementos de un array.
function sumaArray(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

// 10. Sumar solo los elementos pares de un array.
function sumaParesArray(array) {
  return array
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);
}

// 11. Ingresar una palabra e identificar las letras distintas y sus repeticiones.
function contarLetrasDistintas(palabra) {
  const conteo = {};
  for (const letra of palabra) {
    conteo[letra] = (conteo[letra] || 0) + 1;
  }
  return conteo;
}

// 12. Crear un objeto literal con propiedades y realizar operaciones.
function crearListaPersonas() {
  const personas = [
    { nombre: "Ana", sexo: "F", edad: 25 },
    { nombre: "Luis", sexo: "M", edad: 30 },
    { nombre: "María", sexo: "F", edad: 35 },
    { nombre: "Carlos", sexo: "M", edad: 20 },
  ];

  const promedioEdad =
    personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;

  const mujerMayor = personas
    .filter((p) => p.sexo === "F")
    .reduce((mayor, p) => (p.edad > mayor.edad ? p : mayor), { edad: 0 });

  const hombreMenor = personas
    .filter((p) => p.sexo === "M")
    .reduce((menor, p) => (p.edad < menor.edad ? p : menor), {
      edad: Infinity,
    });

  const promedioEdadMujeres = personas
    .filter((p) => p.sexo === "F")
    .reduce((acc, p, _, arr) => acc + p.edad / arr.length, 0);

  return { promedioEdad, mujerMayor, hombreMenor, promedioEdadMujeres };
}

// 13. Generar una función para cada requerimiento del ejercicio anterior.
function obtenerPromedioEdad(personas) {
  return personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;
}

function obtenerMujerMayor(personas) {
  return personas
    .filter((p) => p.sexo === "F")
    .reduce((mayor, p) => (p.edad > mayor.edad ? p : mayor), { edad: 0 });
}

function obtenerHombreMenor(personas) {
  return personas
    .filter((p) => p.sexo === "M")
    .reduce((menor, p) => (p.edad < menor.edad ? p : menor), {
      edad: Infinity,
    });
}

function obtenerPromedioEdadMujeres(personas) {
  return personas
    .filter((p) => p.sexo === "F")
    .reduce((acc, p, _, arr) => acc + p.edad / arr.length, 0);
}

// 14. Crear una función que reciba 3 parámetros: mínimo, máximo y divisor.
function obtenerDivisores(minimo, maximo, divisor) {
  const divisores = [];
  for (let i = minimo; i <= maximo; i++) {
    if (i % divisor === 0) divisores.push(i);
  }
  return divisores;
}
