alert("¡Bienvenido!");
alert("Elija una categoría para jugar");
let ingreso = parseInt(prompt("1) Arte 2) Historia 3) Deportes 4) Ciencias"));

do{
    if (ingreso === 1){
        alert("¿Cómo es el nombre del artista que creó la pintura llamada 'El grito'?");
        let respuesta_arte = parseInt(prompt("1) Leonardo Da Vinci 2) Pablo Pîcasso 3) Edvard Munch 4) DiCaprio"));

    // *******************************ARTE**********************************
        for (respuesta_arte; respuesta_arte != 3;){
            alert("¡Ups! Respuesta incorrecta, intente nuevamente");
            respuesta_arte = parseInt(prompt("1) Leonardo Da Vinci 2) Pablo Pîcasso 3) Edvard Munch 4) DiCaprio"));
        }

        alert("¡Muy Bien! ¡Sigue así!");
        alert("¿Desea jugar nuevamente?");
        let jugar_nuevamente = parseInt(prompt("1) Si 2) No"));

        function verificacion_jugar_nuevamente(){
            for (jugar_nuevamente; jugar_nuevamente > 2 || jugar_nuevamente < 1;){
                alert("Ingrese una opcion correcta")
                jugar_nuevamente = parseInt(prompt("1) Si 2) No"));
            }

            if (jugar_nuevamente === 1){
                ingreso = parseInt(prompt("1) Arte 2) Historia 3) Deportes 4) Ciencias"));
            }

            else if (jugar_nuevamente === 2){
                alert("¡Adiós!");
                window.close();
            }
        }

        verificacion_jugar_nuevamente();
    }

    // *******************************HISTORIA**********************************
    else if (ingreso === 2){
        alert("¿Quién fue el primer hombre en pisar la luna?");
        let respuesta_historia = parseInt(prompt("1) Federich Tereshckova 2) Neil Amstrong 3) Edvard Munch 4) Buzz Lightyear"));

        for (respuesta_historia; respuesta_historia != 2;){
            alert("¡Ups! Respuesta incorrecta, intente nuevamente");
            respuesta_historia = parseInt(prompt("1) Federich Tereshckova 2) Neil Amstrong 3) Edvard Munch 4) Buzz Lightyear"));
        }

        alert("¡Muy Bien! ¡Sigue así!");
        alert("¿Desea jugar nuevamente?");
        jugar_nuevamente = parseInt(prompt("1) Si 2) No"));
        verificacion_jugar_nuevamente();
    }

    else if (ingreso === 3){
        alert("En el boxeo: ¿Qué significa 'TKO'?");
        let respuesta_deportes = parseInt(prompt("1) Technical knockout 2) Total Knockout 3) Terminal Knockout 4) Opponent kicked"));
        
    for (respuesta_deportes; respuesta_deportes != 1;){
        alert("¡Ups! Respuesta incorrecta, intente nuevamente");
        respuesta_deportes = parseInt(prompt("1) Technical knockout 2) Total Knockout 3) Terminal Knockout 4) Opponent kicked"));
    }

        alert("¡Muy Bien! ¡Sigue así!");
        alert("¿Desea jugar nuevamente?");
        jugar_nuevamente = parseInt(prompt("1) Si 2) No"));
        verificacion_jugar_nuevamente();
    }

    //*******************************CIENCIAS**********************************
    else if (ingreso === 4){
        alert("¿Cuál fue la primera computadora que se inventó?");
        let respuesta_ciencias = parseInt(prompt("1) Superordenador Fugaku 2) Computadora personal 3) ENIAC 4) iMac"));
        
        for (respuesta_ciencias; respuesta_ciencias != 3;){
            alert("¡Ups! Respuesta incorrecta, intente nuevamente");
            respuesta_ciencias = parseInt(prompt("1) Superordenador Fugaku 2) Computadora personal 3) ENIAC 4) iMac"));
        }

        alert("¡Muy Bien! ¡Sigue así!");
        alert("¿Desea jugar nuevamente?");
        jugar_nuevamente = parseInt(prompt("1) Si 2) No"));
        verificacion_jugar_nuevamente();
    }

    else{
        for (ingreso; ingreso > 4 || ingreso < 1;){
            alert("Ingrese una opción válida")
            ingreso = parseInt(prompt("1) Arte 2) Historia 3) Deportes 4) Ciencias"));
        }
    };
}
while (ingreso <= 4 && ingreso >= 1 && ingreso != null);