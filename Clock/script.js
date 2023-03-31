const sec= document.querySelector('.sec');
const min= document.querySelector('.min');
const hour= document.querySelector('.hour');
const secHand= document.querySelector('.sec-hand');


setInterval(function(){
     
const date = new Date();
    console.log(date);
    let minisec=date.getMilliseconds();
    let seconds= date.getSeconds();
    sec.style.transform=`rotate(${(seconds*6+(minisec*6/1000))}deg)`;
    secHand.style.transform=`rotate(${180+((seconds*6+(minisec*6/1000)))}deg)`
    let minutes= date.getMinutes();
    min.style.transform=`rotate(${(minutes*6)+(seconds/10)}deg)`

    let hours= date.getHours()
    hour.style.transform=`rotate(${(hours*30)+ (minutes/2) + (seconds/120)}deg)`
},1)
