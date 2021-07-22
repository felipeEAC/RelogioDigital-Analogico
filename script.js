let digitalelement = document.querySelector('.digital');    // selecionando o relegio digital
let sElement = document.querySelector('.p_s');              // selecionando os ponteiros
let mElement = document.querySelector('.p_m');              // selecionando os ponteiros
let hElement = document.querySelector('.p_h');              // selecionando os ponteiros


function updateClock(){
    let now = new Date();                         //now =  puxa a hora atual / Date () classe que manipula
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalelement.innerHTML =`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;  //innerHTML = adciona um texto : : :

}

function fixZero(time){
  /*  if(time < 10 ){
        return '0' + time;
    }else{
        return time;
    }
    */

     return time <10 ? `0${time}` : time;         // forma alternativa

}


setInterval(updateClock, 1000);                 // cria um intervalo para contagem de tempo