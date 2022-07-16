alert("¡Bienvenido!");
alert("Elija una categoría para jugar");
let ingreso = parseInt(prompt("1) Arte 2) Historia 3) Deportes 4) Ciencias"));

for (ingreso; ingreso > 4 || ingreso <= 0;){
    alert("ingrese un valor correcto");
    ingreso = parseInt(prompt("1) Arte 2) Historia 3) Deportes 4) Ciencias"));
}

// *******************************ARTE**********************************
if (ingreso === 1){
    alert("¿Cómo es el nombre del artista que creó la pintura llamada 'El grito'?");
    let respuesta_arte = parseInt(prompt("1) Leonardo Da Vinci 2) Pablo Pîcasso 3) Edvard Munch 4) DiCaprio"));
    
    for (respuesta_arte; respuesta_arte != 3;){
        alert("¡Ups! Respuesta incorrecta, intente nuevamente");
        respuesta_arte = parseInt(prompt("1) Leonardo Da Vinci 2) Pablo Pîcasso 3) Edvard Munch 4) DiCaprio"));
    }

    alert("¡Muy Bien! ¡Sigue así!");
    alert("¿Desea jugar nuevamente?");
    let si_no = parseInt(prompt("1) Si 2) No"));

    if (si_no === 1){
        alert("Elija una categoría para jugar");
        ingreso = parseInt(prompt("1) Arte 2) Historia 3) Deportes 4) Ciencias"));
    }

    else if (si_no === 2){
        alert("¡Adiós!")
        exit();
    }
}

// *******************************HISTORIA**********************************
if (ingreso === 2){
    alert("¿Quién fue el primer hombre en pisar la luna?");
    let respuesta_historia = parseInt(prompt("1) Federich Tereshckova 2) Neil Amstrong 3) Edvard Munch 4) Tom Cruise"));
    
    for (respuesta_historia; respuesta_historia != 2;){
        alert("¡Ups! Respuesta incorrecta, intente nuevamente");
        respuesta_historia = parseInt(prompt("1) Federich Tereshckova 2) Neil Amstrong 3) Edvard Munch 4) Tom Cruise"));
    }

    alert("¡Muy Bien! ¡Sigue así!");
    alert("¿Desea jugar nuevamente?");
    let si_no = parseInt(prompt("1) Si 2) No"));

    if (si_no === 2){
        alert("¡Adiós!")
        exit();
    }
}

// *******************************DEPORTES**********************************
if (ingreso === 3){
    alert("En el boxeo: ¿Qué significa 'TKO'?");
    respuesta_deportes = parseInt(prompt("1) Technical knockout 2) Total Knockout 3) Terminal Knockout 4) Opponent kicked"));
    
    for (respuesta_deportes; respuesta_deportes != 1;){
        alert("¡Ups! Respuesta incorrecta, intente nuevamente");
        respuesta_deportes = parseInt(prompt("1) Technical knockout 2) Total Knockout 3) Terminal Knockout 4) Opponent kicked"));
    }

    alert("¡Muy Bien! ¡Sigue así!");
    alert("¿Desea jugar nuevamente?");
    let si_no = parseInt(prompt("1) Si 2) No"));

    if (si_no === 2){
        alert("¡Adiós!")
        exit();
    }
}