function setenta(){
    var primera=parseFloat(document.getElementById('nota1').value);
    var segunda=parseFloat(document.getElementById('nota2').value);
    var tercera=parseFloat(document.getElementById('nota3').value);
    if(primera<=5 && segunda<=5 && tercera<=5 && primera>=0 && segunda>=0 && tercera>=0){
        var setenta= (primera+segunda+tercera)/3; 
        document.getElementById('setres').innerText = 'tu 70% es: '+setenta;
        document.getElementById('setenta').value=setenta;
    }else{
        alert("Error! tienes que poner una nota entre 0 y 5")
    }
}
function definitiva(){
    var setenta=parseFloat(document.getElementById('setenta').value);
    var final=parseFloat(document.getElementById('exFinal').value);
    if(setenta<=5 && final <=5 && setenta >=0 && final >= 0){
        var def= (setenta*0.7)+(final*0.3);
        document.getElementById('defres').innerText='Tu definitiva es: '+def;
    }else{
        alert("Error! debe ingresar una nota entre 0 y 5");
    }
}
function cuanto(){
    var setenta=parseFloat(document.getElementById('setenta').value);
    var nes=(3-(setenta*0.7))/0.3;
    if(setenta<=5 && setenta >=0){
        document.getElementById('defres').innerText='necesitas '+nes;
    }
}
function suma(){
    var s1= parseFloat(document.getElementById('s1').value);
    var s2= parseFloat(document.getElementById('s2').value);
    if(document.getElementById('s1').value==""){
        s1=0;
    }
    if(document.getElementById('s2').value==""){
        s2=0;
    }
    var sum = s1 + s2;
    document.getElementById('sum').innerText=sum;
}
function resta(){
    var r1= parseFloat(document.getElementById('R1').value);
    var r2= parseFloat(document.getElementById('R2').value);
    if(document.getElementById('R1').value==""){
        r1=0;
    }
    if(document.getElementById('R2').value==""){
        r2=0;
    }
    var res = r1 - r2;
    document.getElementById('res').innerText=res;
}
function division(){
    var D1= parseFloat(document.getElementById('D1').value);
    var D2= parseFloat(document.getElementById('D2').value);
    if(document.getElementById('D1').value==""){
        D1=0;
    }
    if(document.getElementById('D2').value==""){
        D2=0;
    }
    var div = D1 / D2;
    document.getElementById('div').innerText=div;
}
function multiplicacion(){
    var m1= parseFloat(document.getElementById('m1').value);
    var m2= parseFloat(document.getElementById('m2').value);
    if(document.getElementById('m1').value==""){
        m1=0;
    }
    if(document.getElementById('m2').value==""){
        m2=0;
    }
    var mul = m1 * m2;
    document.getElementById('mul').innerText=mul;
}