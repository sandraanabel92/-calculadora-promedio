//ingreso de datos//
let nombreAlumno = prompt("Ingrese el nombre del alumno");
let materia = prompt("Ingrese la materia");
let promedio = 0;
let nota1, nota2, nota3;
//verificar que las notas sean validas//
while(true){
    nota1 = parseFloat(prompt("Ingrese la primera nota del rango (0 a 10): "));
    if(!isNaN(nota1) && nota1 >=0 && nota1 <= 10){
        break
    }else{
        alert("Porfavor ingrese una nota valida dentro del rango (0 a 10): ");
    }
    
}
while(true){
    nota2 = parseFloat(prompt("Ingrese la segunda nota del rango (0 a 10): "));
    if(!isNaN(nota2) && nota2 >=0 && nota2 <= 10){
        break;
    }else{
        alert("Porfavor ingrese una nota valida dentro del rango (0 a 10): ");
    }
    
}
while(true){
    nota3 = parseFloat(prompt("Ingrese la tercera nota del rango (0 a 10): "));
    if(!isNaN(nota3) && nota3 >=0 && nota3 <= 10){
        break;
    }else{
        alert("Porfavor ingrese una nota valida dentro del rango (0 a 10): ");
    }
    
}

//Calculo del promedio//
promedio = (nota1 + nota2 + nota3) / 3;

// Validacion del Promedio//
let mensaje;
if(promedio >= 7){
    mensaje = `El Nombre del alumno es ${nombreAlumno}, ¡Felicidades! Has aprobado la materia de ${materia} con un promedio de ${promedio}`;
    console.log(mensaje)
}else{
   mensaje = `El Nombre del alumno es ${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio}`;
    console.log(mensaje)
}