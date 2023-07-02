let countDownDate = new Date ("september 19, 2023").getTime();



// update the countdown every 1 second

let x = setInterval(function(){
  //get todays date and time
  let now = new Date().getTime();
  //find the distance btw now and the countdown date
  let distance = countDownDate - now;
  //time cals. for days , hours,minutes, seconds

  let days =Math.floor(distance/(1000*60*60*24));
  let hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
  let minutes = Math.floor((distance %(1000*60*60)/(1000*60)));
  let seconds = Math.floor((distance %(1000*60))/ 1000);

 

  //output the result in an element with id:"countdown"

  document.getElementById("countdown").innerHTML=
  days +"days" + hours +"hours"+minutes + "mins"+ seconds + "secs";

  // countdown.style.color = "red"

  //if the countdown is over , write some text
  if(distance<0){
    clearInterval(x);
    document.getElementById("countdown").innerHTML= "Happy Birthday,Bright!! God Blesses Me. Support Me , Bitcoin Address (39n1gWHkjP8LAUDftyANBHBckaENRzv6RV)";
  }

},1000);