
const accordion = document.getElementsByClassName("q")

for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click',()=>{
        accordion[i].classList.toggle('active')
    })
}

if(window.innerWidth < 1000){
    console.log("fadf")
}