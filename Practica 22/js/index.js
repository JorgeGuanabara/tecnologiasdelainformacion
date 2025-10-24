let alumnos =["Johan", "Luis", "Carlos", "Marta", "Sofía"];
console.log("Lista de alumnos:",alumnos);
console.log("Numero de alumnos:",alumnos.Leght);
alumnos.push("Ana");
console.log("Lista actualizada de alumnos:",alumnos);
alumnos[6]="Angel";
console.log("Lista final de alumnos:",alumnos);
console.log(alumnos[8]);
console.log(alumnos[-3]);
alumnos[8]="Sofia";
console.log("Lista final de alumnos:",alumnos);
alumnos.pop();
console.log("Lista despues de eliminar el ultimo alumno:",alumnos);
alumnos.shift();
console.log("Lista despues de eliminar el primer alumno:",alumnos);

for(let i=0;i<alumnos.length;i++){
    console.log("Alumno en la posicion",i,":",alumnos[i]);
}

let numero = [1,2,3,4,5,6,7,8,9,10];
console.log(numero[6]);

let ListaAlumnos=document.getElementById("Lista de alumnos");
ListaAlumnos.innerHTML="Lista de alumnos: "+alumnos.join(" - ");


