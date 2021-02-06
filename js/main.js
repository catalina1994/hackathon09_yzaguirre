//ejercicio 1
const sumaNumber = function(number1, number2){
    let sumarTo =  number1 + number2
    return console.log(  `La suma de ${number1} y ${number2} es igual a ${sumarTo}`)
}
sumaNumber(5,45)

//ejercicio 2
 const promedioNotas =function(nota1, nota2,nota3, nota4){
     let promedioTo = (nota1 + nota2 + nota3 + nota4) / 4
     return console.log(`El promedio del alumno es igual a ${promedioTo}`)
 }
 promedioNotas( 18, 14, 15 ,11)

 //ejercicio 3
 const areaRectandulo = function(base, altura){
    let areaRec = (base * altura) 
    return console.log(`El área de este rectangulo es igual a ${areaRec}cm `)
 }
 areaRectandulo( 15, 10)

 //ejercicio 4

 const areaTriangulo = function(base, altura){
    let areaTri = (base * altura) / 2
    return console.log(`El área de este triangulo es igual a ${areaTri}cm`)
 }
 areaTriangulo( 8, 12)

  //ejercicio 5

const areaCircunferencia = function(radio){
    let areaCir = (3.1416 * (Math.pow(radio,2))) 
    return console.log(`El área de esta circunferencia es igual a ${areaCir} metros cuadrados`)
 }
 areaCircunferencia(8)

 //ejercicio 6

 const sueldoSemanal = function(salarioHora, horasTrabajadas){
     let sueldoSemanalTo = salarioHora * horasTrabajadas
     return console.log(`El sueldo semanal de un hombre es igual a ${sueldoSemanalTo} soles`)
 }
 sueldoSemanal(40,48)

  //ejercicio 7

  const convertorPulgadas = function( cantMetros){
      let convertor = Math.round(cantMetros / 0.0254)
      return console.log(`Debe pedir ${convertor} pulgadas de tela.`)
  }
  convertorPulgadas(100)

  //ejercicio 8

  const convertorDollar = function(cantSoles, precioDollar){
    let convertor = (cantSoles / precioDollar)
    return console.log(`Con ${cantSoles} soles puede adquirir ${convertor.toFixed(2)} dolares.`)
}
convertorDollar(1000, 3.62)

 //ejercicio 9

 const agePostulante = function(yearNacimento){
     let yearActual = 2021
     let agePostulateTo = yearActual - yearNacimento
     return console.log(`La edad del postulante es de ${agePostulateTo} años.`)
 }
 agePostulante(1998)

  //ejercicio 10

  let users = [
    {
        name: 'Paty', age :24,
    },
    {
        name: 'Gloria', age :40,
    },
    {
        name: 'Ursula',age :20,
    }
  ]
users.forEach( user => {
    userMin = user.age
})
//console.log(Array.from(userMin))

  //ejercicio 11
  
  const bono = function(yearsAntiguedad){
      let mensaje = `Tienes ${yearsAntiguedad} años resiviras $${yearsAntiguedad}00 dolares.`
      if (yearsAntiguedad == 1){
          return console.log(mensaje)
      }
      if (yearsAntiguedad == 2){
        return console.log(mensaje)
      }
      if(yearsAntiguedad >= 5){
        return console.log(`Tienes ${yearsAntiguedad} años resiviras $1000 dolar`)
      }
  }
  bono(8)

//ejercicio 12

    let salario = 1500,
        incremento = 0.1;

for(let i=1; i < 7; i++ ){
    salario = salario + (salario* incremento)
    console.log(`El salario en el año ${i} es $${salario.toFixed(2)} dolares`)
}
console.log(`El salario dentro de 6 años sera de $${salario.toFixed(2)} dolares`)

//ejercicio 13
let desAprob =0,
        Aprob =0;
let calificaiones = [ 14, 08, 10, 20,17 , 16, 14, 02, 01, 18, 13];
   
    calificaiones.forEach(nota => {
    if(nota <11){
        desAprob = desAprob +1
    }else{
        Aprob =Aprob +1
    }
    });
    
console.log(`De ${calificaiones.length} alumnos Hay ${desAprob} desaprobados y ${Aprob} aprobados`)

//ejercicio 14

let focosTotal = [ 'rojo', 'rojo','rojo','blanco', 'verde','rojo','blanco', 'verde' , 'rojo','blanco', 'verde' ]
let focoVerdes = 0,
    focoBlanco = 0,
    focoRojo = 0;

focosTotal.forEach(foco=>{
    if(foco === 'rojo'){
        focoRojo =focoRojo +1
    }
    if(foco === 'verde'){
        focoVerdes =focoVerdes +1
    }
    if(foco === 'blanco'){
        focoBlanco =focoBlanco +1
    }
});
console.log(`De ${focosTotal.length} focos hay: ${focoVerdes} focos verdes, ${focoRojo} focos rojos y ${focoBlanco} focos
blancos`)

//ejercicio 15

 const votacion = function (agePerson){
     if(agePerson >= 18){
         console.log( `Usted SI puede votar por que tiene ${agePerson} años`)
     }else{
        console.log( `Usted NO puede votar por que tiene ${agePerson} años`)
     }
 }
 votacion(28);