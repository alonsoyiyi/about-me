/* eslint-disable indent */
'use strict';


 let user_name = prompt ('Bienvenido, soy Angel, ¿Cuál es tu nombre?');
        alert('Hola ' + user_name + ', vamos a ponerte a prueba para saber si logras adivinar algunas cosas de mí :D. Prepárate, jugaremos un juego muy bonito');

function game() {
    let puntos = 0;
        alert('El juego se trata de adivinar la respuesta de diferentes preguntas, las cuales podrán ser constestadas con Y si es un sí o un N si es un no, vale? :D Comencemos 7u7');

    function question1(){
        let question1 = prompt ('¿El género de comedia romántica es mi favorito?');
        if (question1.toUpperCase() === 'Y'){
            alert('Muy bien, no existe nada mejor que ver como otros viven el romance que uno no podría vivir :,D');
                puntos++;
        } else {
            alert('Pues muy mal, me encanta porque soy un romántico empedernido :3 asi que fallaste!!');
        }
    }

    function question2(){
        let question2 = prompt ('Es verdad que soy un amante de las frituras como las papitas, chicharrones y cosas crocantes?');
        if (question2.toUpperCase() === 'Y'){
            alert('Obviamente que si :D esas cosas son el manjar de los dioses, porque todo lo rico hará daño? T_T');
            puntos++;
        } else {
            alert('Fallaste, porque realmente me encanta la grasa la grasa es vida la grasa es amor');
        }
    }

    function question3(){
        let question3 = prompt ('Soy un fiel creyente de algún dogma, creencia, religión, horóscopo o pseudociencia?');
        if (question3.toUpperCase() === 'Y'){
            alert('Pues no, yo sólo creo en lo que puedas probar ya sea física o lógicamente, cual computadora :p');
        } else {
            alert('Genial, acertaste! No tengo ningún tipo de creencia sin fundamento :D y eso que me he leído la bilbia como 4 veces jeje');
         puntos++;
        }
    }

    function question4(){
        let question4 = prompt ('¿Soy team gato?');
        if (question4.toUpperCase() === 'Y'){
            alert('Muy bien, aunque me encantan los animales, los gatos son mi predilección :D');
        puntos++;
        } else {
            alert('Fallaste >:D me encantan todos los animes pero amo a los gatos');
        }
    }

    function question5(){
        let question5 = prompt ('¿Me encanta salir a bailar y a las discos?');
        if (question5.toUpperCase() === 'Y'){
            alert('Pues no, casi no salgo de mi casa :P');
        } else {
            alert('Muy bien :D soy un ermitaño encerrado en su cuarto');
         puntos++;
        }
    }

    function question6(){
        let games;
        let attempts = 0;
        while (games !== 59 && attempts < 4){
            games = prompt('¿Cuántos juegos tengo en mi biblioteca de Steam?  Te daré una pista, no son mas de 80 jeje');
            if (games < 59){
                alert('Es muy bajo, gasto más en juegos jeje');
            } else if (games > 59){
                alert('Muy alto! También bajo juegos pirata :P');
            } else{
                alert('Magnífico, acertaste :D');
                puntos++;
                break;
            }
                attempts++;
            if(attempts === 4){
                    alert('Tengo 59 juegos en mi biblioteca de Steam :DD');
            }
        }
    } 

    function question7() {
        let paisfav = ['japon', 'canada', 'suiza'];
        let pais;
        let attempts = 1;
        while (attempts < 7) {
            pais = prompt('Adivina mi país favorito :D');
            pais = pais.toLowerCase();
            let acertado = false;
            for (let i = 0; i < paisfav.length; i++) {
                if (pais === paisfav[i]) {
                    alert('Muy bien, acertaste :DDD. Mis paises favoritos son japon, canada y suiza');
                    acertado = true;
                    puntos++;
                    break;
                }
            }
            if (!acertado) {
                alert('Muy mal :c , usaste el intento ' + attempts + ' de 6');
                attempts++;
            } else {
                break;
            }
        }
        if (attempts === 7) {
            alert('¡Se acabaron los intentos :v! Mis países favoritos son: japon, canada y suiza');
        }
    }
    
        question1();
        question2();
        question3();
        question4();
        question5();
        question6();
        question7();
        alert('Gracias por jugar conmigo :3 espero que ahora me conozcas mejor. Tu puntaje fue: '+ puntos);
    }
    game();
