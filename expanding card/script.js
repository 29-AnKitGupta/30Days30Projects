const images= document.querySelectorAll('.img');
const h1 = document.querySelectorAll('h1');
console.log(images)

images.forEach(img=>{
    img.addEventListener('click',function(){
        images.forEach(img=>{
            img.classList.remove('active')
        })
        img.classList.add('active');
    })
})

