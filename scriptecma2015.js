//Desestructuracion
const [primero,segundo,...resto]=[1,2,3,4,5];
console.log(resto)
const {nombre,edad:years,ciudad="Tarija"}={nombre:"Fridel",edad:42}
console.log(nombre,years,ciudad)

function saludar({nombre,edad}){
console.log(`Hola ${nombre}, tienes ${edad} años`)
}
saludar({nombre:"Fridel",edad:42})

const arreglo=[1,2,3]
const arreglo2=[...arreglo,4,5]
console.log(arreglo2)
const numeros=[1,3,5,7];
function AdicionarNumeros(a,b,c,d){
    return a+b+c+d
}
console.log(AdicionarNumeros(...numeros))

// Crear un nuevo objeto de un objeto anterior
const formulario={nombre:"Fridel",email:"fridel@gmail.com",password:"123456",edad:28}
const {nombre2,email,edad}=formulario;
const usuario={nombre2,email,edad}
// Juntar dos Objetos
const perfilOriginal={nombre:"Fridel",edad:42,ocupacion:"Ing de Sistemas"};
const actualizacion={ciudad:"Tarija",pais:"Bolivia",direccion:"B Luis de Fuentes"};
const perfilActualizado={...perfilOriginal,...actualizacion}

//foreach
const numeros2=[1,2,3,4,5]
numeros2.forEach(numero=>console.log("Foreach",numero*2))
//MAP
const numeros3=[1,2,3,4,5]
console.log("Original",numeros3)
const cuadrados=numeros3.map(numero=>numero**2)
console.log("MAP",cuadrados)
// FILTER
const numeros4=[1,2,3,4,5,6,7,8,9,10]
const pares=numeros4.filter(numero=>numero%2===0)
console.log("Pares",pares)

