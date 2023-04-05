function mostrarmensaje(){
    console.log('Hicieron clic en el boton' + new Date().toLocaleTimeString())
}

//agregar un eventListener a otroBoton
//estoy creando un objeto boton relacionado con el id en html
// luego agrego a ese boton un event listener , que tiene como minimo dos parametros , tipo de evento y una funcion de colback 
//callback se ejecuta cuando la funcion padre se ejecuto 

let boton=document.getElementById("otroBoton")

boton.addEventListener("click", ()=>{console.log('Hicieron clic en el boton' + new Date().toLocaleTimeString())})