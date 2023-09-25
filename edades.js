//TAREA-------------------------------------------------------------------------------------------------------
//hacer un programa que imprima la etapa de la persona dependiendo su edad
// 1 a 5 años es Bebe , 6 a 12 es Niñez, 13 a 17 es Adolescente, 18 a 30 es Adulto Joven
// 31 a 40 es Adulto, 41 a 59 Adulto Mayor, 60 en adelante es Anciano 
// OJO: Debes tener tener una opcion que cuando se escriba 0 o menos te diga 'edad fuera de rango'

let edades = 10;
let etapas = '';

if(edades >= 1 && edades <= 5){
    etapas = 'bebe';
    console.log('etapas: ',etapas)
}else if(edades >= 6 && edades <= 12){
    etapas = 'niñez';
    console.log('etapas: ',etapas)
}else if(edades >= 13 && edades <= 17){
    etapas = 'adolescente';
    console.log('etapas: ',etapas)
}else if(edades >=18 && edades <= 30){
    etapas = 'adulto joven';
    console.log('etapas: ',etapas)
}else if(edades >= 31 && edades <= 40){
    etapas = 'adulto';
    console.log('etapas: ',etapas)
}else if(edades >= 41 && edades <= 59){
    etapas = 'adulto mayor';
    console.log('etapas: ',etapas)
}else if(edades >= 60 ){
    etapas = 'anciano';
    console.log('etapas: ',etapas) 
}
else{
    console.log('edad fuera de rango')
}





