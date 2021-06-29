var calc = document.getElementById("calc");
var kilogramo= document.getElementById("kg");
var m= document.getElementById("m");
var imc = document.getElementById("imc");
var lectura= document.getElementById("lectura");

calc.onclick=function(){
    // Si el valor de kilogramo no es igual a un string vacio
    if(kilogramo.value!="" && m.value!=""){
        imcx = (kilogramo.value/ (m.value* m.value));
        imc.innerHTML = imcx
        console.log(imcx);

        if(imcx<18.5){ lectura.innerHTML = "Peso inferior al normal"; }
        else if(imcx>18.5 && imcx<=24.9){ lectura.innerHTML= "Peso ideal"; }
        else if(imcx>=25 && imcx<=29.9){ lectura.innerHTML = "Peso superior al normal"; }
        else if(imcx>30){ lectura.innerHTML= "Obesidad. Consulte a su médico"; }
    }else{
        alert("Debes ingresar peso y altura.")
    }


};