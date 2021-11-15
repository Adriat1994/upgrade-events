/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

function funcionalidad () {
    console.log("Acabas de hacer click");
    document.querySelector("input").focus();
}

function crearBoton() {
     let boton = document.createElement("button");
     boton.id = "btnToClick";
     document.body.appendChild(boton);
     document.getElementById("btnToClick").onclick = funcionalidad
}

crearBoton();


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

function funcionalidad () {
    console.log(document.querySelector("button"));
   document.querySelector("input").focus()
   console.log(document.querySelector("input"));
}

function crearBoton() {
    let boton = document.createElement("button");
    boton.id = "btnToClick";
    document.body.appendChild(boton);
    document.getElementById("btnToClick").onclick = funcionalidad
}

crearBoton();



//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

function mostrar () {
    console.log(ocument.querySelector("input"))
}



function darInfo () {
    document.querySelector("input").oninput = mostrar;
}

darInfo ();

