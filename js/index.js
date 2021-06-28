//console.log("Hola Mundo");
/*
const nombre = "Aplicaciones Web";
if(true){
     nombre = "Base de datos";
    console.log(nombre);
}
console.log(nombre);
*/


const materia = {
    nombre: "Aplicaciones Web",
    horario: "9:00 a 10:45 hrs"
};
Object.freeze(materia);
console.log(materia.nombre);
materia.nombre= "Base de datos";
console.log(materia.nombre);

//Arrow functions de forma explicita
var suma = (a, b) => {
    return a+b;
}
console.log(suma(5,8));

var imprimir = (x) => {
    console.log(x);
}
imprimir("Hola");

var unSaludo = (nombre = "josé", edad=29) =>{
    console.log("Hola soy "+nombre+" y mi edad es "+ edad+ " años");
    console.log(`Hola soy ${nombre} y mi edad es ${edad} años`);
}

unSaludo();
console.log("==========");
unSaludo("Narváes");
console.log("==========");
unSaludo("Narváes" , 30);

var num1= 2;
var num1= 34;

/*console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);

console.log("Hola voy a adr un salto de línea \n ya di uno \n otro \n otro"); */

var curso = {
    nombre: "",
    descripcion:"",
    docente:{
        nombre:"",
        cursos:0
    }
};



function actualizar(){
    console.log ("se llamo actualizar");
    curso.nombre = document.getElementById("nombre").value;
    curso.descripcion = document.getElementById("descripcion").value;
    curso.docente.nombre = document.getElementById("docente").value;
    curso.docente.cursos = document.getElementById("cursos").value;

    console.log(curso);
    actualizarFicha();
}

function actualizarFicha(){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("descrip").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById("total").innerHTML = curso.docente.cursos;
}

var btnCambiar = document.querySelector(".btn-cambiar");
console.log(btnCambiar);
btnCambiar.addEventListener("click",()=>{
    document.querySelector(".btn-success").innerHTML="Update";
});