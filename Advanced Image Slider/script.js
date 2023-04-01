const slide=document.querySelector('.slider');
const leftBtn= document.querySelector('.left-btn')
const rightBtn= document.querySelector('.right-btn')
const ul=document.querySelector('ul')
const manualbtns=document.querySelectorAll('ul li')
console.log(manualbtns)

let count=0;
console.log(slide)

// right btn

rightBtn.addEventListener('click',function(){
    count=(count<3)? count+1 : 3 
    document.querySelector('.select').classList.remove('select');
    ul.children[count].classList.add('select') 
    console.log(count)
    let slider=count*(-100)
    slide.style.transform=`translateX(${slider}%)`  
})

// left btn

leftBtn.addEventListener('click',function(){
    count=(count>0)? count-1 : 0 
    document.querySelector('.select').classList.remove('select'); 
    ul.children[count].classList.add('select')
    console.log(count)
    let slider=count*(-100)
    slide.style.transform=`translateX(${slider}%)`
})

// manual btns

manualbtns.forEach((btn,index)=>{
    btn.addEventListener('click',function(){
        console.log(btn)
        count=index
        document.querySelector('.select').classList.remove('select');
        btn.classList.add('select')
        let slider=count*(-100)
        slide.style.transform=`translateX(${slider}%)`
    })
})


 