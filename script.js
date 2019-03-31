      let clockTime = function(){
      let date = new Date();
      let hours = date.getHours();
      let mins = date.getMinutes();
      let seconds = date.getSeconds();
      
      let hourHand = document.querySelector('.hour-hand');
      let hourDegs = ((hours/12)*360+90);
      hourHand.style.transform = `rotate(${hourDegs}deg)`;

      //fix the glitch of going from 360 degs to 0 degs
      
      if(hourDegs === 90) {
        hourHand.style.transition = 'none';
      } else {  
        hourHand.style.transition = '';
      }

      let secHand = document.querySelector('.second-hand');
      let secondsDegs = ((seconds/60)*360+90);
      secHand.style.transform = `rotate(${secondsDegs}deg)`;
      
      //fix the glitch of going from 360 degs to 0 degs

      if(secondsDegs === 90) {
        secHand.style.transition = 'none';
      } else {  
        secHand.style.transition = '';
      }

      let minHand = document.querySelector('.min-hand');
      let minDegs = ((mins/60)*360+90);
      minHand.style.transform = `rotate(${minDegs}deg)`;
      
      //fix the glitch of going from 360 degs to 0 degs
    
      if(minDegs === 90) {
        minHand.style.transition = 'none';
      } else {  
        minHand.style.transition = '';
      }


    }
    
    let digitalTime = function(){ 
      let date = new Date();
      let mins = ('0'+date.getMinutes()).slice(-2);
      let seconds = ('0'+date.getSeconds()).slice(-2);

      let hours = date.getHours();
      if (hours > 12){
        hours -= 12;
      }
      if (hours == 0 || hours == 24){
        hours = 12;
      }
      hours = ('0'+ hours).slice(-2);

      let currentTime = `${hours}:${mins}:${seconds}`; 
      let el = document.getElementById('digital');
      el.innerText = currentTime;
    }

   
    setInterval(clockTime, 1000);
    setInterval(digitalTime, 1000);