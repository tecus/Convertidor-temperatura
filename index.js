const tempInicial = document.querySelector('#tempinicial')
const eleccion = document.getElementsByTagName('input')
const tempFinal = document.querySelector('#tempfinal')
const barraTemperatura = document.querySelector('#barra')
const boton = document.querySelector('#boton')


let resultado;
let inputValor;
boton.addEventListener('click',() =>{
    eleccion[1].checked==true  ?  resultado=((tempInicial.value-32)*5/9).toFixed(1) :  eleccion[2].checked==true  ? resultado=((tempInicial.value*9/5)+32).toFixed(1) : resultado=null;
    inputValor=parseFloat(tempInicial.value);
    if(resultado===null || isNaN(inputValor)){
        alert()
        return
    }
    tempFinal.textContent=`${resultado}°`
    gradostext.textContent=`${resultado}°`
    resultado>0 && resultado<=99  ? barraTemperatura.style.height=`${resultado}%` : resultado<0 ? barraTemperatura.style.height=`${0}%` : resultado>=100 ? barraTemperatura.style.height=`${100}%` : ""
});

function alert(){
    Swal.fire({
        title: '¡Hola, a todos!',
        text: 'ingresaste datos incorrectos o incompletos',
        icon: 'error',
        confirmButtonText: '¡cerrar!',
    })
}