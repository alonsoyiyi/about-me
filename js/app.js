/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

let user_name = prompt ('Bienvenido, soy Angel, ¿Cuál es tu nombre?');
alert('Hola ' + user_name + ', vamos a ponerte a prueba para saber si logras adivinar algunas cosas de mí :D. Prepárate, jugaremos un juego muy bonito');
// console.log('Hola ' + user_name + ', vamos a ponerte a prueba para saber si logras adivinar algunas cosas de mí :D. Prepárate, jugaremos un juego muy bonito');

function game() {
    alert('El juego se trata de adivinar la respuesta de diferentes preguntas, las cuales podrán ser constestadas con Y si es un sí o un N si es un no, vale? :D Comencemos 7u7');

    let question1 = prompt ('¿El género de comedia romántica es mi favorito?');
    if (question1.toUpperCase() === 'Y'){
        alert('Muy bien, no existe nada mejor que ver como otros viven el romance que uno no podría vivir :,D');
        //console.log('Muy bien, no existe nada mejor que ver como otros viven el romance que uno no podría vivir :,D');
    } else {
        alert('Pues muy mal, me encanta porque soy un romántico empedernido :3 asi que fallaste!!');
         //console.log('Pues muy mal, me encanta porque soy un romántico empedernido :3 asi que fallaste!!');
    }

    let question2 = prompt ('Es verdad que soy un amante de las frituras como las papitas, chicharrones y cosas crotantes?');
    if (question2.toUpperCase() === 'Y'){
        alert('Obviamente que si :D esas cosas son el manjar de los dioses, porque todo lo rico hará daño? T_T');
        //console.log('Obviamente que si :D esas cosas son el manjar de los dioses, porque todo lo rico hará daño? T_T');
    } else {
        alert('Fallaste, porque realmente me encanta la grasa la grasa es vida la grasa es amor');
         //console.log('Fallaste, porque realmente me encanta la grasa la grasa es vida la grasa es amor');
    }

    let question3 = prompt ('Soy un fiel creyente de algún dogma, creencia, religión, horóscopo o pseudociencia?');
    if (question3.toUpperCase() === 'Y'){
        alert('Pues no, yo sólo creo en lo que puedas probar ya sea física o lógicamente, cual computadora :p');
        //console.log('Pues no, yo sólo creo en lo que puedas probar ya sea física o lógicamente, cual computadora :P');
    } else {
        alert('Genial, acertaste! No tengo ningún tipo de creencia sin fundamento :D y eso que me he leído la bilbia como 4 veces jeje');
         //console.log('Genial, acertaste! No tengo ningún tipo de creencia sin fundamento :D y eso que me he leído la bilbia como 4 veces jeje');
    }

    let question4 = prompt ('¿Soy team gato?');
    if (question4.toUpperCase() === 'Y'){
        alert('Muy bien, aunque me encantan los animales, los gatos son mi predilección :D');
        //console.log('Muy bien, aunque me encantan los animales, los gatos son mi predilección :D');
    } else {
        alert('Fallaste >:D me encantan todos los animes pero amo a los gatos');
         //console.log('Fallaste >:D me encantan todos los animes pero amo a los gatos');
    }

    let question5 = prompt ('¿Me encanta salir a bailar y a las discos?');
    if (question5.toUpperCase() === 'Y'){
        alert('Pues no, casi no salgo de mi casa :P');
        //console.log('Muy bien, no existe nada mejor que ver como otros viven el romance que uno no podría vivir :,D');
    } else {
        alert('Muy bien :D soy un ermitaño encerrado en su cuarto');
         //console.log('Muy bien, no existe nada mejor que ver como otros viven el romance que uno no podría vivir :,D');
    }

        alert('Gracias por jugar conmigo :3 espero que ahora me conozcas mejor');
    }