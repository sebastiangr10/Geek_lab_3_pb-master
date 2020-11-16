let valorhora;
let tipo;
let horas;
let descuento;
let valorinicial;
let valortotal;

function calcular() {
   
    horas = Number(document.getElementById("salida").value)
    tipo = (document.getElementById("tipo").value)
    valor = costodelservicio(horas);
    descuento = descontar(tipo,valorinicial);
    valortotal = valor - descuento
    alert("el valor del servicio es " + valor + " pesos ")
    alert('el valor del descuento es ' + descontar(tipo,valorinicial)+ " pesos " ) 
    alert('el total a pagar es ' + valortotal  + " pesos " )
   
}   
function costodelservicio(horas){
 if (horas>=0 && horas<=2){
      valorhora = 5000;  
      valorinicial = ( horas * valorhora)
 }
 else if (horas>=3 && horas<=5){
     valorhora = 4000;  
     valorinicial = ( 2 * 5000 ) + ((horas-2)*valorhora);
}
else if (horas>5 && horas<=10){
    valorhora = 3000;  
    valorinicial = ( 2 * 5000 ) + (3*4000) + ((horas-5)*valorhora);
}
else if (horas>10){
    valorhora = 2000;  
    valorinicial = ( 2 * 5000 ) + (3*4000) +(5*3000)  + ((horas-10)*valorhora);
}
return valorinicial;
}
function descontar(tipo,valorinicial) {
    switch (tipo) {
        case "carro":
            descuento = valorinicial * 0.10;
            break;
        case "moto":
            descuento = valorinicial * 0.15;
            break;
    }
    return descuento; 
}
    
   

 
