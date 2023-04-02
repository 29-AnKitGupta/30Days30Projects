let start = document.getElementById('start')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')

let hr=0;
//let hrs=hr;
let min=0;
//let mins=min;
let sec=0;
//let secs=sec;
let count=0;
let timer = false;
let counter = true;
start.onclick =()=> starts()
//pause.onclick =()=> pauses()
reset.onclick =()=> resets()

const starts =()=>{
    // timer = true;
    // console.log('fhf');
    stopwatch();
   // counter==false;
    start.innerText="Pause"
    //tart.style.transition = "0.5s";
    if(counter =true){
        timer = true;
        stopwatch();
       // counter++;
       start.onclick =()=> pauses()

    }
    else{
        start.innerText="start"
        timer = false;
    }
}

const pauses =()=>{
    timer= false; 
}

const resets =()=>{
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById('count').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('hrs').innerHTML="00";
    start.innerText="start"
    start.onclick =()=> starts()

    
}

const stopwatch=()=>{
    if(timer == true){
        count +=1;
        if(count == 100){
            sec +=1;
            count =0;
        }
        else if(sec == 60){
            min +=1;
            count =0;
            sec= 0; 
        }
        else if(min == 60){
            hr+=1;
            min=0;
            sec=0;
            count=0;
        }
        let hrs =hr;
        let mins=min;
        let secs=sec;
        let counts=count;
        if(sec<10 ){
            //hrs="0"+hrs;
            secs="0"+secs;
            //mins="0"+mins;
        }
        if(min<10 ){
            mins="0"+mins;
        }  
        if(hr<10 ){
            hrs="0"+hrs;
        }
        if(count<10 ){
            counts="0"+counts;
        }
        document.getElementById('sec').innerHTML = secs;
        document.getElementById('count').innerHTML = counts;
        document.getElementById('min').innerHTML = mins;
        document.getElementById('hrs').innerHTML = hrs;
        setTimeout("stopwatch()",10);
        
    }
    
}
