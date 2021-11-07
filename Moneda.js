const optDivisal = document.getElementById ("divisa_uno"); 
const optDivisa2 = document.getElementById ("divisa_dos"); 
const txtCantidadl = document.getElementById ("cantidad_uno"); 
const txtCantidad2 = document.getElementById ("cantidad_dos"); 

const lblTarifa = document.getElementById ("tarifa"); 
const btnIntercambiar = document.getElementById ("intercambiar"); 

function calcular() { 
    const divisa1 = optDivisa1.value; 
    const divisa2 = optDivisa2.value;
    fetch("https://open.exchangerate-api.com/v6/latest") 
    .then( res => res.json()) 
    .then (data => { 
        console.log(data. rates[divisa1] ); 
        console.log(data.rates[divisa2]); 
    });

} 

btnIntercambiar.addEventListener ("click", () => { 
    const temp = optDivisal.value; 
    optDivisal.value = optDivisa2.value 
    optDivisa2.value=temp 
    calcular (); 
}); 

optDivisal.addEventListener ("change", calcular); 
optDivisa2.addEventListener ("change", calcular); 
txtCantidad1.addEventListener ("input", calcular);
    
calcular();