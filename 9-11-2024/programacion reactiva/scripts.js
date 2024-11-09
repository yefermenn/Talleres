const boton = document.getElementById("sumar");
var entrada= document.getElementById("entrada");
var imprimir = document.getElementById("imprimir");
var imagen = document.getElementById("imagen");
var titulo = document.getElementById("tituloRojo");
const botonSubir = document.getElementById("aumentar");
const botonBajar = document.getElementById("reducir");
var tamañoInicial=parseInt(window.getComputedStyle(titulo).fontSize);
var suma = 0;
var divisible;
var incremento=1;
var cambio=0;


function cargar(){
    imprimir.textContent= `${suma}`;
}

boton.addEventListener('click', function(){
    divisible=(suma/5);
    if(divisible<1){
        suma=suma+incremento;
    }else{
        if(divisible>= incremento){
            incremento=incremento+1;
            suma=suma+incremento;
        }else{
            suma=suma+incremento;
        }
    }
    imprimir.textContent= `${suma}`;
    if(suma>=100){
        boton.setAttribute("disabled","true");
    }
});
entrada.addEventListener('blur',function(){
    var contenido= entrada.value.toUpperCase();
    alert("el usuario ha dejado la caja de texto!");
    alert("contenido en mayuscula: "+ contenido)
});
imagen.addEventListener('mouseenter', function(){
    if(cambio==0){
        imagen.setAttribute("src", "imagenes/gato.jpeg");
        cambio=1;
    }else{
        imagen.setAttribute("src", "imagenes/perro.jpg");
        cambio=0;
    }
})
botonSubir.addEventListener('click', function(){
    tamañoInicial=parseInt(window.getComputedStyle(titulo).fontSize);
    titulo.style.fontSize=(tamañoInicial+10)+'px';
})
botonBajar.addEventListener('click',function(){
    tamañoInicial=parseInt(window.getComputedStyle(titulo).fontSize);
    if(tamañoInicial>40){
        titulo.style.fontSize=(tamañoInicial-10)+'px';
    }
})
window.onload(cargar());