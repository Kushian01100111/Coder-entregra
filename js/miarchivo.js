
const h2 = document.querySelector('h2')
const primeraA = document.getElementById('primeraA')
const segundaA = document.getElementById('segundaA')
const terceraA = document.getElementById('terceraA')
const respuesta1 = document.getElementById('respuesta1')
const respuesta2 = document.getElementById('respuesta2')
const respuesta3 = document.getElementById('respuesta3')
const input1 = document.getElementById('P')
const input2 = document.getElementById('S')
const input3 = document.getElementById('T')
const button1 = document.getElementById('calP')
const button2 =document.getElementById('calS')
const button3 =document.getElementById('calT')




const MateriasCBC = {
    1:["fisica","física"],
    2:["quimica","química"],
    3:["icse","sociedad y estado","introducción a sociedad y estado"],
    4:["ipc","pensamiento cientifico","introducción al pensamiento científico"],
    5:["algebra","álgebra"],
    6:["analisis matematico","análisis matemático","analisis", "análisis"]
}



let cantidad = 0,
    primera = "",
    segunda = "",
    tercera = "",
    nombre = "";


    

const preguntasAlEntrar = () =>{
    let estudias = prompt("Hola! te pregunto, estas rindiendo actualmente el CBC en la UBA?(S/N)")
    if(estudias.toLowerCase() === "si" || estudias.toLowerCase() === "s"){
        let cuantas = Number(prompt("Cuantas estas rindiendo?(min:1 max:3)"))
        cantidad = cuantas
        if(cuantas === 1){
            primera = prompt("Cual es la materia?").toLowerCase();
            for(let i = 1 ; i <= 6; i++){
                if(MateriasCBC[i].indexOf(primera) !== -1){
                    h2.classList.remove("hidden")
                    primeraA.innerText = primera
                    input2.classList.add("hidden")
                    input3.classList.add("hidden")
                    button2.classList.add("hidden")
                    button3.classList.add("hidden")
                }
            }
        }else if(cuantas === 2){
            primera = prompt("Cual es la primera materia?").toLowerCase();
            segunda = prompt("Cual es la segunda materia?").toLowerCase();
            for(let i = 1 ; i <= 6; i++){
                if(MateriasCBC[i].indexOf(primera) !== -1){
                    primeraA.innerText = primera
                }
            }
            for(let i = 1 ; i <= 6; i++){
                if(MateriasCBC[i].indexOf(segunda) !== -1){
                    h2.classList.remove("hidden")
                    segundaA.innerText = segunda
                    input3.classList.add("hidden")
                    button3.classList.add("hidden")
                }
            }
        }else if(cuantas === 3){
            primera = prompt("Cual es la primera materia?").toLowerCase()
            segunda = prompt("Cual es la segunda materia?").toLowerCase()
            tercera = prompt("Cual es la tercera materia?").toLowerCase()
            for(let i = 1 ; i <= 6; i++){
                if(MateriasCBC[i].indexOf(primera) !== -1){
                    primeraA.innerText = primera
                }
            }
            for(let i = 1 ; i <= 6; i++){
                if(MateriasCBC[i].indexOf(segunda) !== -1){
                    segundaA.innerText = segunda
                }
            }
            for(let i = 1 ; i <= 6; i++){
                if(MateriasCBC[i].indexOf(tercera) !== -1){
                    h2.classList.remove("hidden")
                    terceraA.innerText = tercera
                }
            }
        }
    }else{
        alert("Ah!, bueno este simulador es para gente que esta rindiendo el CBC, Chao!")
    }
}

document.getElementById('calP').addEventListener("click",calcularPrimero)
document.getElementById('calS').addEventListener("click",calcularSegundo)
document.getElementById('calT').addEventListener("click",calcularTercero)

function calcularPrimero(){
    let num = document.getElementById('P').value
    if((13 - num) < 10 ){
       respuesta1.innerText = `Necesitas un ${13 - num} para por lo menos para tener 6.5`
    }else if((14 - num) < 10){
        respuesta1.innerText =`Necesitas un ${14 - num} para por lo menos tener un 7`
    }else if((13 - num) > 10){
        respuesta1.innerText =`Necesitas un ${13 - num} para el 6.5, no llegas hermano hay que recuperar el primer parcial`
    }
}

function calcularSegundo(){
    let num = document.getElementById('S').value
    if((13 - num) < 10 ){
       respuesta2.innerText = `Necesitas un ${13 - num} para por lo menos para tener 6.5`
    }else if((14 - num) < 10){
        respuesta2.innerText =`Necesitas un ${14 - num} para por lo menos tener un 7`
    }else if((13 - num) > 10){
        respuesta2.innerText =`Necesitas un ${13 - num} para el 6.5, no llegas hermano hay que recuperar el primer parcial`
    }
}

function calcularTercero(){
    let num = document.getElementById('T').value
    if((13 - num) < 10 ){
       respuesta3.innerText = `Necesitas un ${13 - num} para por lo menos para tener 6.5`
    }else if((14 - num) < 10){
        respuesta3.innerText =`Necesitas un ${14 - num} para por lo menos tener un 7`
    }else if((13 - num) > 10){
        respuesta3.innerText =`Necesitas un ${13 - num} para el 6.5, no llegas hermano hay que recuperar el primer parcial`
    }
}

preguntasAlEntrar()








