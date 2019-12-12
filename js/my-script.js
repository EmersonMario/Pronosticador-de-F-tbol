/*LOCAL*/
function probabilidadLocal() {
    var partido1LocalGEP = document.querySelector('input[type="radio"][name="partidoLocal1"]:checked').defaultValue;
    var partido2LocalGEP = document.querySelector('input[type="radio"][name="partidoLocal2"]:checked').defaultValue;
    var probabilidadElemento1Local = parseFloat(partido1LocalGEP) + parseFloat(partido2LocalGEP); //Esta variable obtiene el resultado de la probabilidad del primer punto a tomar en cuenta
    
    var partido1LocalLV = document.querySelector('input[type="radio"][name="localVisitante1"]:checked').defaultValue;
    var partido1LocalLVResultado1;
    var partido2LocalLV = document.querySelector('input[type="radio"][name="localVisitante2"]:checked').defaultValue;
    var partido2LocalLVResultado2;
    var probabilidadElemento2Local;//Esta variable obtiene el resultado de la probabilidad del segundo punto a tomar en cuenta

    var partido1LocalGA = document.getElementById("anotaciones1").value;
    var partido1LocalGAResultado1;
    var partido2LocalGA = document.getElementById("anotaciones2").value;
    var partido2LocalGAResultado2;
    var probabilidadElemento3Local;//Esta variable obtiene el resultado de la probabilidad del tercer punto a tomar en cuenta

    var partido1LocalGR = document.getElementById('recibidos1').value;
    var partido1LocalGRResultado1;
    var partido2LocalGR = document.getElementById('recibidos2').value;
    var partido2LocalGRResultado2;
    var probabilidadElemento4Local;//Esta variable obtiene el resultado de la probabilidad del cuarto punto a tomar en cuenta

    var partido1LocalTMR = document.getElementById('metaRealizados1').value;
    var partido1LocalTMRResultado1;
    var partido2LocalTMR = document.getElementById('metaRealizados2').value;
    var partido2LocalTMRResultado2;
    var probabilidadElemento5Local;//Esta variable obtiene el resultado de la probabilidad del quinto punto a tomar en cuenta

    var partido1LocalTMRe = document.getElementById('metaRecibidos1').value;
    var partido1LocalTMReResultado1;
    var partido2LocalTMRe = document.getElementById('metaRecibidos2').value;
    var partido2LocalTMReResultado2;
    var probabilidadElemento6Local;//Esta variable obtiene el resultado de la probabilidad del sexto punto a tomar en cuenta

    var partido1LocalNLP = document.getElementById('inputGroupSelect1').value
    var partido2LocalNLP = document.getElementById('inputGroupSelect2').value
    var probabilidadElemento7Local = parseFloat(partido1LocalNLP) + parseFloat(partido2LocalNLP); //Esta variable obtiene el resultado de la probabilidad del séptimo punto a tomar en cuenta

    var partido1LocalPPB = document.getElementById('posesion1').value;
    var partido1LocalPPBResultado1;
    var partido2LocalPPB = document.getElementById('posesion2').value;
    var partido2LocalPPBResultado2;
    var probabilidadElemento8Local;//Esta variable obtiene el resultado de la probabilidad del octavo punto a tomar en cuenta


    /*Aquí se obtiene la probabilidad del segundo punto a tomar en cuenta en la probabilidad, si fue local o visita*/
    /*Partido 1*/
    if (parseFloat(partido1LocalGEP) == 0.50 && partido1LocalLV == "local") {
    partido1LocalLVResultado1 = 0.40;
    } else if (parseFloat(partido1LocalGEP) == 0.25 && partido1LocalLV == "local"){
        partido1LocalLVResultado1 = 0.15;
    } else if (parseFloat(partido1LocalGEP) == 0 && partido1LocalLV == "local"){
        partido1LocalLVResultado1 = 0;
    } else if (parseFloat(partido1LocalGEP) == 0.50 && partido1LocalLV == "visitante") {
        partido1LocalLVResultado1 = 0.50;
    } else if (parseFloat(partido1LocalGEP) == 0.25 && partido1LocalLV == "visitante") {
        partido1LocalLVResultado1 = 0.30;
    } else if (parseFloat(partido1LocalGEP) == 0 && partido1LocalLV == "visitante"){
        partido1LocalLVResultado1 = 0;
    }
    /*Partido 2*/
    if (parseFloat(partido2LocalGEP) == 0.50 && partido2LocalLV == "local") {
        partido2LocalLVResultado2 = 0.40;
    } else if (parseFloat(partido2LocalGEP) == 0.25 && partido2LocalLV == "local"){
        partido2LocalLVResultado2 = 0.15;
    } else if (parseFloat(partido2LocalGEP) == 0 && partido2LocalLV == "local"){
        partido2LocalLVResultado2 = 0;
    } else if (parseFloat(partido2LocalGEP) == 0.50 && partido2LocalLV == "visitante") {
        partido2LocalLVResultado2 = 0.50;
    } else if (parseFloat(partido2LocalGEP) == 0.25 && partido2LocalLV == "visitante") {
        partido2LocalLVResultado2 = 0.30;
    } else if (parseFloat(partido2LocalGEP) == 0 && partido2LocalLV == "visitante"){
        partido2LocalLVResultado2 = 0;
    }

    probabilidadElemento2Local = partido1LocalLVResultado1 + partido2LocalLVResultado2;//Aquí se obtiene el valor

    /*Aquí se obtiene la probabilidad del tercer punto a tomar en cuenta en la probabilidad, cuántos goles anotó */
    /*Partido 1*/
    if (partido1LocalGA >= 5) {
        partido1LocalGAResultado1 = 0.50;
    } else if (partido1LocalGA == 3 || partido1LocalGA == 4) {
        partido1LocalGAResultado1 = 0.40;
    } else if(partido1LocalGA == 1 || partido1LocalGA == 2){
        partido1LocalGAResultado1 = 0.20;
    } else if (partido1LocalGA == 0){
        partido1LocalGAResultado1 = 0;
    }
    /*Partido 2*/
    if (partido2LocalGA >= 5) {
        partido2LocalGAResultado2 = 0.50;
    } else if (partido2LocalGA == 3 || partido2LocalGA == 4) {
        partido2LocalGAResultado2 = 0.40;
    } else if (partido2LocalGA == 1 || partido2LocalGA == 2){
        partido2LocalGAResultado2 = 0.20;
    } else if (partido2LocalGA == 0){
        partido2LocalGAResultado2 = 0;
    }
    
    probabilidadElemento3Local = partido1LocalGAResultado1 + partido2LocalGAResultado2;
    
    /*Aquí se obtiene la probabilidad del cuarto punto a tomar en cuenta en la probabilidad, cuántos goles recibió */
    /*Partido 1*/
    if (partido1LocalGR >= 3) {
        partido1LocalGRResultado1 = 0;
    } else if (partido1LocalGR == 2) {
        partido1LocalGRResultado1 = 0.15;
    } else if(partido1LocalGR == 1){
        partido1LocalGRResultado1 = 0.30;
    } else if (partido1LocalGR == 0){
        partido1LocalGRResultado1 = 0.50;
    }
    /*Partido 2*/
    if (partido2LocalGR >= 3) {
        partido2LocalGRResultado2 = 0;
    } else if (partido2LocalGR == 2) {
        partido2LocalGRResultado2 = 0.15;
    } else if (partido2LocalGR == 1){
        partido2LocalGRResultado2 = 0.30;
    } else if (partido2LocalGR == 0){
        partido2LocalGRResultado2 = 0.50;
    }
    
    probabilidadElemento4Local = partido1LocalGRResultado1 + partido2LocalGRResultado2;


    /*Aquí se obtiene la probabilidad del quinto punto a tomar en cuenta en la probabilidad, cuántos tiros a meta realizó */
    /*Partido 1*/
    if ((partido1LocalGA/partido1LocalTMR)*100 >= 50 && (partido1LocalGA/partido1LocalTMR)*100 <= 100) {
        partido1LocalTMRResultado1 = 0.50;
    } else if ((partido1LocalGA/partido1LocalTMR)*100 >= 25 && (partido1LocalGA/partido1LocalTMR)*100 <= 49) {
        partido1LocalTMRResultado1 = 0.30;
    } else if((partido1LocalGA/partido1LocalTMR)*100 >= 1 && (partido1LocalGA/partido1LocalTMR)*100 <= 24){
        partido1LocalTMRResultado1 = 0.15;
    } else if ((partido1LocalGA/partido1LocalTMR)*100 == 0){
        partido1LocalTMRResultado1 = 0;
    }
    /*Partido 2*/
    if ((partido2LocalGA/partido2LocalTMR)*100 >= 50 && (partido2LocalGA/partido2LocalTMR)*100 <= 100) {
        partido2LocalTMRResultado2 = 0.50;
    } else if ((partido2LocalGA/partido2LocalTMR)*100 >= 25 && (partido2LocalGA/partido2LocalTMR)*100 <= 49) {
        partido2LocalTMRResultado2 = 0.30;
    } else if((partido2LocalGA/partido2LocalTMR)*100 >= 1 && (partido2LocalGA/partido2LocalTMR)*100 <= 24){
        partido2LocalTMRResultado2 = 0.15;
    } else if ((partido2LocalGA/partido2LocalTMR)*100 == 0){
        partido2LocalTMRResultado2 = 0;
    }
    
    probabilidadElemento5Local = partido1LocalTMRResultado1 + partido2LocalTMRResultado2;


    /*Aquí se obtiene la probabilidad del sexto punto a tomar en cuenta en la probabilidad, cuántos tiros a meta recibió */
    /*Partido 1*/
    if ((partido1LocalGR/partido1LocalTMRe)*100 >= 50 && (partido1LocalGR/partido1LocalTMRe)*100 <= 100) {
        partido1LocalTMReResultado1 = 0;
    } else if ((partido1LocalGR/partido1LocalTMRe)*100 >= 25 && (partido1LocalGR/partido1LocalTMRe)*100 <= 49) {
        partido1LocalTMReResultado1 = 0.15;
    } else if((partido1LocalGR/partido1LocalTMRe)*100 >= 1 && (partido1LocalGR/partido1LocalTMRe)*100 <= 24){
        partido1LocalTMReResultado1 = 0.30;
    } else if ((partido1LocalGR/partido1LocalTMRe)*100 == 0){
        partido1LocalTMReResultado1 = 0.50;
    }
    /*Partido 2*/
    if ((partido2LocalGR/partido2LocalTMRe)*100 >= 50 && (partido2LocalGR/partido2LocalTMRe)*100 <= 100) {
        partido2LocalTMReResultado2 = 0;
    } else if ((partido2LocalGR/partido2LocalTMRe)*100 >= 25 && (partido2LocalGR/partido2LocalTMRe)*100 <= 49) {
        partido2LocalTMReResultado2 = 0.15;
    } else if((partido2LocalGR/partido2LocalTMRe)*100 >= 1 && (partido2LocalGR/partido2LocalTMRe)*100 <= 24){
        partido2LocalTMReResultado2 = 0.30;
    } else if ((partido2LocalGR/partido2LocalTMRe)*100 == 0){
        partido2LocalTMReResultado2 = 0.50;
    }
    
    probabilidadElemento6Local = partido1LocalTMReResultado1 + partido2LocalTMReResultado2;


    /*Aquí se obtiene la probabilidad del octavo punto a tomar en cuenta en la probabilidad, posesión de balón */
    /*Partido 1*/
    if (partido1LocalPPB >= 75 && partido1LocalPPB <= 100) {
        partido1LocalPPBResultado1 = 0.50;
    } else if (partido1LocalPPB >= 60 && partido1LocalPPB <= 74) {
        partido1LocalPPBResultado1 = 0.40;
    } else if(partido1LocalPPB >= 50 && partido1LocalPPB <= 59){
        partido1LocalPPBResultado1 = 0.30;
    } else if (partido1LocalPPB >= 35 && partido1LocalPPB <= 49){
        partido1LocalPPBResultado1 = 0.15;
    } else if(partido1LocalPPB >= 0 && partido1LocalPPB <= 34){
        partido1LocalPPBResultado1 = 0;
    }
    /*Partido 2*/
    if (partido2LocalPPB >= 75 && partido2LocalPPB <= 100) {
        partido2LocalPPBResultado2 = 0.50;
    } else if (partido2LocalPPB >= 60 && partido2LocalPPB <= 74) {
        partido2LocalPPBResultado2 = 0.40;
    } else if(partido2LocalPPB >= 50 && partido2LocalPPB <= 59){
        partido2LocalPPBResultado2 = 0.30;
    } else if (partido2LocalPPB >= 35 && partido2LocalPPB <= 49){
        partido2LocalPPBResultado2 = 0.15;
    } else if(partido2LocalPPB >= 0 && partido2LocalPPB <= 34){
        partido2LocalPPBResultado2 = 0;
    }
    
    probabilidadElemento8Local = partido1LocalPPBResultado1 + partido2LocalPPBResultado2;


    //document.getElementById('probabilidad1').innerHTML = probabilidadElemento8Local;
    document.getElementById("probabilidad1").innerHTML = (probabilidadElemento1Local/8 + probabilidadElemento2Local/8 + probabilidadElemento3Local/8 + probabilidadElemento4Local/8 + probabilidadElemento5Local/8 + probabilidadElemento6Local/8 + probabilidadElemento7Local/8 + probabilidadElemento8Local/8)*100 + '%';  
}


/*VISITANTE*/
function probabilidadVisitante() {
    var partido1VisitanteGEP = document.querySelector('input[type="radio"][name="partidoVisitante1"]:checked').defaultValue;
    var partido2VisitanteGEP = document.querySelector('input[type="radio"][name="partidoVisitante2"]:checked').defaultValue;
    var probabilidadElemento1Visitante = parseFloat(partido1VisitanteGEP) + parseFloat(partido2VisitanteGEP); //Esta variable obtiene el resultado de la probabilidad del primer punto a tomar en cuenta
    
    var partido1VisitanteLV = document.querySelector('input[type="radio"][name="localVisitante3"]:checked').defaultValue;
    var partido1VisitanteLVResultado1;
    var partido2VisitanteLV = document.querySelector('input[type="radio"][name="localVisitante4"]:checked').defaultValue;
    var partido2VisitanteLVResultado2;
    var probabilidadElemento2Visitante;//Esta variable obtiene el resultado de la probabilidad del segundo punto a tomar en cuenta

    var partido1VisitanteGA = document.getElementById("anotaciones3").value;
    var partido1VisitanteGAResultado1;
    var partido2VisitanteGA = document.getElementById("anotaciones4").value;
    var partido2VisitanteGAResultado2;
    var probabilidadElemento3Visitante;//Esta variable obtiene el resultado de la probabilidad del tercer punto a tomar en cuenta

    var partido1VisitanteGR = document.getElementById('recibidos3').value;
    var partido1VisitanteGRResultado1;
    var partido2VisitanteGR = document.getElementById('recibidos4').value;
    var partido2VisitanteGRResultado2;
    var probabilidadElemento4Visitante;//Esta variable obtiene el resultado de la probabilidad del cuarto punto a tomar en cuenta

    var partido1VisitanteTMR = document.getElementById('metaRealizados3').value;
    var partido1VisitanteTMRResultado1;
    var partido2VisitanteTMR = document.getElementById('metaRealizados4').value;
    var partido2VisitanteTMRResultado2;
    var probabilidadElemento5Visitante;//Esta variable obtiene el resultado de la probabilidad del quinto punto a tomar en cuenta

    var partido1VisitanteTMRe = document.getElementById('metaRecibidos3').value;
    var partido1VisitanteTMReResultado1;
    var partido2VisitanteTMRe = document.getElementById('metaRecibidos4').value;
    var partido2VisitanteTMReResultado2;
    var probabilidadElemento6Visitante;//Esta variable obtiene el resultado de la probabilidad del sexto punto a tomar en cuenta

    var partido1VisitanteNLP = document.getElementById('inputGroupSelect3').value
    var partido2VisitanteNLP = document.getElementById('inputGroupSelect4').value
    var probabilidadElemento7Visitante = parseFloat(partido1VisitanteNLP) + parseFloat(partido2VisitanteNLP); //Esta variable obtiene el resultado de la probabilidad del séptimo punto a tomar en cuenta

    var partido1VisitantePPB = document.getElementById('posesion3').value;
    var partido1VisitantePPBResultado1;
    var partido2VisitantePPB = document.getElementById('posesion4').value;
    var partido2VisitantePPBResultado2;
    var probabilidadElemento8Visitante;//Esta variable obtiene el resultado de la probabilidad del octavo punto a tomar en cuenta


    /*Aquí se obtiene la probabilidad del segundo punto a tomar en cuenta en la probabilidad, si fue local o visita*/
    /*Partido 1*/
    if (parseFloat(partido1VisitanteGEP) == 0.50 && partido1VisitanteLV == "local") {
    partido1VisitanteLVResultado1 = 0.40;
    } else if (parseFloat(partido1VisitanteGEP) == 0.25 && partido1VisitanteLV == "local"){
        partido1VisitanteLVResultado1 = 0.15;
    } else if (parseFloat(partido1VisitanteGEP) == 0 && partido1VisitanteLV == "local"){
        partido1VisitanteLVResultado1 = 0;
    } else if (parseFloat(partido1VisitanteGEP) == 0.50 && partido1VisitanteLV == "visitante") {
        partido1VisitanteLVResultado1 = 0.50;
    } else if (parseFloat(partido1VisitanteGEP) == 0.25 && partido1VisitanteLV == "visitante") {
        partido1VisitanteLVResultado1 = 0.30;
    } else if (parseFloat(partido1VisitanteGEP) == 0 && partido1VisitanteLV == "visitante"){
        partido1VisitanteLVResultado1 = 0;
    }
    /*Partido 2*/
    if (parseFloat(partido2VisitanteGEP) == 0.50 && partido2VisitanteLV == "local") {
        partido2VisitanteLVResultado2 = 0.40;
    } else if (parseFloat(partido2VisitanteGEP) == 0.25 && partido2VisitanteLV == "local"){
        partido2VisitanteLVResultado2 = 0.15;
    } else if (parseFloat(partido2VisitanteGEP) == 0 && partido2VisitanteLV == "local"){
        partido2VisitanteLVResultado2 = 0;
    } else if (parseFloat(partido2VisitanteGEP) == 0.50 && partido2VisitanteLV == "visitante") {
        partido2VisitanteLVResultado2 = 0.50;
    } else if (parseFloat(partido2VisitanteGEP) == 0.25 && partido2VisitanteLV == "visitante") {
        partido2VisitanteLVResultado2 = 0.30;
    } else if (parseFloat(partido2VisitanteGEP) == 0 && partido2VisitanteLV == "visitante"){
        partido2VisitanteLVResultado2 = 0;
    }

    probabilidadElemento2Visitante = partido1VisitanteLVResultado1 + partido2VisitanteLVResultado2;//Aquí se obtiene el valor

    /*Aquí se obtiene la probabilidad del tercer punto a tomar en cuenta en la probabilidad, cuántos goles anotó */
    /*Partido 1*/
    if (partido1VisitanteGA >= 5) {
        partido1VisitanteGAResultado1 = 0.50;
    } else if (partido1VisitanteGA == 3 || partido1VisitanteGA == 4) {
        partido1VisitanteGAResultado1 = 0.40;
    } else if(partido1VisitanteGA == 1 || partido1VisitanteGA == 2){
        partido1VisitanteGAResultado1 = 0.20;
    } else if (partido1VisitanteGA == 0){
        partido1VisitanteGAResultado1 = 0;
    }
    /*Partido 2*/
    if (partido2VisitanteGA >= 5) {
        partido2VisitanteGAResultado2 = 0.50;
    } else if (partido2VisitanteGA == 3 || partido2VisitanteGA == 4) {
        partido2VisitanteGAResultado2 = 0.40;
    } else if (partido2VisitanteGA == 1 || partido2VisitanteGA == 2){
        partido2VisitanteGAResultado2 = 0.20;
    } else if (partido2VisitanteGA == 0){
        partido2VisitanteGAResultado2 = 0;
    }
    
    probabilidadElemento3Visitante = partido1VisitanteGAResultado1 + partido2VisitanteGAResultado2;
    
    /*Aquí se obtiene la probabilidad del cuarto punto a tomar en cuenta en la probabilidad, cuántos goles recibió */
    /*Partido 1*/
    if (partido1VisitanteGR >= 3) {
        partido1VisitanteGRResultado1 = 0;
    } else if (partido1VisitanteGR == 2) {
        partido1VisitanteGRResultado1 = 0.15;
    } else if(partido1VisitanteGR == 1){
        partido1VisitanteGRResultado1 = 0.30;
    } else if (partido1VisitanteGR == 0){
        partido1VisitanteGRResultado1 = 0.50;
    }
    /*Partido 2*/
    if (partido2VisitanteGR >= 3) {
        partido2VisitanteGRResultado2 = 0;
    } else if (partido2VisitanteGR == 2) {
        partido2VisitanteGRResultado2 = 0.15;
    } else if (partido2VisitanteGR == 1){
        partido2VisitanteGRResultado2 = 0.30;
    } else if (partido2VisitanteGR == 0){
        partido2VisitanteGRResultado2 = 0.50;
    }
    
    probabilidadElemento4Visitante = partido1VisitanteGRResultado1 + partido2VisitanteGRResultado2;


    /*Aquí se obtiene la probabilidad del quinto punto a tomar en cuenta en la probabilidad, cuántos tiros a meta realizó */
    /*Partido 1*/
    if ((partido1VisitanteGA/partido1VisitanteTMR)*100 >= 50 && (partido1VisitanteGA/partido1VisitanteTMR)*100 <= 100) {
        partido1VisitanteTMRResultado1 = 0.50;
    } else if ((partido1VisitanteGA/partido1VisitanteTMR)*100 >= 25 && (partido1VisitanteGA/partido1VisitanteTMR)*100 <= 49) {
        partido1VisitanteTMRResultado1 = 0.30;
    } else if((partido1VisitanteGA/partido1VisitanteTMR)*100 >= 1 && (partido1VisitanteGA/partido1VisitanteTMR)*100 <= 24){
        partido1VisitanteTMRResultado1 = 0.15;
    } else if ((partido1VisitanteGA/partido1VisitanteTMR)*100 == 0){
        partido1VisitanteTMRResultado1 = 0;
    }
    /*Partido 2*/
    if ((partido2VisitanteGA/partido2VisitanteTMR)*100 >= 50 && (partido2VisitanteGA/partido2VisitanteTMR)*100 <= 100) {
        partido2VisitanteTMRResultado2 = 0.50;
    } else if ((partido2VisitanteGA/partido2VisitanteTMR)*100 >= 25 && (partido2VisitanteGA/partido2VisitanteTMR)*100 <= 49) {
        partido2VisitanteTMRResultado2 = 0.30;
    } else if((partido2VisitanteGA/partido2VisitanteTMR)*100 >= 1 && (partido2VisitanteGA/partido2VisitanteTMR)*100 <= 24){
        partido2VisitanteTMRResultado2 = 0.15;
    } else if ((partido2VisitanteGA/partido2VisitanteTMR)*100 == 0){
        partido2VisitanteTMRResultado2 = 0;
    }
    
    probabilidadElemento5Visitante = partido1VisitanteTMRResultado1 + partido2VisitanteTMRResultado2;


    /*Aquí se obtiene la probabilidad del sexto punto a tomar en cuenta en la probabilidad, cuántos tiros a meta recibió */
    /*Partido 1*/
    if ((partido1VisitanteGR/partido1VisitanteTMRe)*100 >= 50 && (partido1VisitanteGR/partido1VisitanteTMRe)*100 <= 100) {
        partido1VisitanteTMReResultado1 = 0;
    } else if ((partido1VisitanteGR/partido1VisitanteTMRe)*100 >= 25 && (partido1VisitanteGR/partido1VisitanteTMRe)*100 <= 49) {
        partido1VisitanteTMReResultado1 = 0.15;
    } else if((partido1VisitanteGR/partido1VisitanteTMRe)*100 >= 1 && (partido1VisitanteGR/partido1VisitanteTMRe)*100 <= 24){
        partido1VisitanteTMReResultado1 = 0.30;
    } else if ((partido1VisitanteGR/partido1VisitanteTMRe)*100 == 0){
        partido1VisitanteTMReResultado1 = 0.50;
    }
    /*Partido 2*/
    if ((partido2VisitanteGR/partido2VisitanteTMRe)*100 >= 50 && (partido2VisitanteGR/partido2VisitanteTMRe)*100 <= 100) {
        partido2VisitanteTMReResultado2 = 0;
    } else if ((partido2VisitanteGR/partido2VisitanteTMRe)*100 >= 25 && (partido2VisitanteGR/partido2VisitanteTMRe)*100 <= 49) {
        partido2VisitanteTMReResultado2 = 0.15;
    } else if((partido2VisitanteGR/partido2VisitanteTMRe)*100 >= 1 && (partido2VisitanteGR/partido2VisitanteTMRe)*100 <= 24){
        partido2VisitanteTMReResultado2 = 0.30;
    } else if ((partido2VisitanteGR/partido2VisitanteTMRe)*100 == 0){
        partido2VisitanteTMReResultado2 = 0.50;
    }
    
    probabilidadElemento6Visitante = partido1VisitanteTMReResultado1 + partido2VisitanteTMReResultado2;


    /*Aquí se obtiene la probabilidad del octavo punto a tomar en cuenta en la probabilidad, posesión de balón */
    /*Partido 1*/
    if (partido1VisitantePPB >= 75 && partido1VisitantePPB <= 100) {
        partido1VisitantePPBResultado1 = 0.50;
    } else if (partido1VisitantePPB >= 60 && partido1VisitantePPB <= 74) {
        partido1VisitantePPBResultado1 = 0.40;
    } else if(partido1VisitantePPB >= 50 && partido1VisitantePPB <= 59){
        partido1VisitantePPBResultado1 = 0.30;
    } else if (partido1VisitantePPB >= 35 && partido1VisitantePPB <= 49){
        partido1VisitantePPBResultado1 = 0.15;
    } else if(partido1VisitantePPB >= 0 && partido1VisitantePPB <= 34){
        partido1VisitantePPBResultado1 = 0;
    }
    /*Partido 2*/
    if (partido2VisitantePPB >= 75 && partido2VisitantePPB <= 100) {
        partido2VisitantePPBResultado2 = 0.50;
    } else if (partido2VisitantePPB >= 60 && partido2VisitantePPB <= 74) {
        partido2VisitantePPBResultado2 = 0.40;
    } else if(partido2VisitantePPB >= 50 && partido2VisitantePPB <= 59){
        partido2VisitantePPBResultado2 = 0.30;
    } else if (partido2VisitantePPB >= 35 && partido2VisitantePPB <= 49){
        partido2VisitantePPBResultado2 = 0.15;
    } else if(partido2VisitantePPB >= 0 && partido2VisitantePPB <= 34){
        partido2VisitantePPBResultado2 = 0;
    }
    
    probabilidadElemento8Visitante = partido1VisitantePPBResultado1 + partido2VisitantePPBResultado2;


    //document.getElementById('probabilidad2').innerHTML = probabilidadElemento2Visitante;
    document.getElementById("probabilidad2").innerHTML = (probabilidadElemento1Visitante/8 + probabilidadElemento2Visitante/8 + probabilidadElemento3Visitante/8 + probabilidadElemento4Visitante/8 + probabilidadElemento5Visitante/8 + probabilidadElemento6Visitante/8 + probabilidadElemento7Visitante/8 + probabilidadElemento8Visitante/8)*100 + '%';  
}

/*Función para obtener consejo*/
function obtenerConsejo(){
    var prob1 = document.getElementById("probabilidad1").innerHTML
    var prob2 = document.getElementById("probabilidad2").innerHTML
    var diferencia = prob1.substring(0, prob1.length - 1) - prob2.substring(0, prob2.length - 1);

    if (diferencia >= 10) {
        document.getElementById('consejo').innerHTML = "Según los datos obtenidos se recomienda apostar por el gane del equipo local";
    } else if(diferencia < 10 && diferencia > -10){
        if (diferencia < 10 && diferencia > 0 ) {
            document.getElementById('consejo').innerHTML = "Según los datos obtenidos se recomienda apostar por el gane o empate del equipo local";
        } else {
            document.getElementById('consejo').innerHTML = "Según los datos obtenidos se recomienda apostar por el gane o empate del equipo visitante";
        }
    } else if(diferencia <= -10){
        document.getElementById('consejo').innerHTML = "Según los datos obtenidos se recomienda apostar por el gane del equipo visitante";
    }
}

/*Función para cargar el JSON*/