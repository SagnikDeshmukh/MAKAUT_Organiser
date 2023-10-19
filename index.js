const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function buttonAnimation(){
    var container = document.querySelector(".banner");
var AECbtn = document.querySelector(".play");

container.addEventListener("mouseenter",function(){
   gsap.to(AECbtn,{
        scale:1,
        opacity:1
   })
})

container.addEventListener("mouseleave",function(){
    gsap.to(AECbtn,{
        scale:0,
        opacity:0
   })
})

container.addEventListener("mousemove",function(dets){
    gsap.to(AECbtn,{
        left:dets.x-60,
        top:dets.y-90
})
})
}

buttonAnimation()

function loadingAnimation(){
    gsap.from(".page1 h1",{
        y:90,
        opacity:0,
        delay:1,
        duration:1,
        stagger:.3
    })
}

loadingAnimation()


// --------------------- Adding Dark Theme --------------------

let icon = document.getElementById("moon");
if(document.documentElement.classList.contains("dark")){
    icon.src="./Resources/moon.svg"
    document.documentElement.classList.remove("dark")
}
else{
    icon.src="./Resources/sun.svg"
    document.documentElement.classList.add("dark");
}



document.getElementById("moon").addEventListener("click", () => {
    // document.body.classList.toggle("dark");
    let icon = document.getElementById("moon");
if(document.documentElement.classList.contains("dark")){
    icon.src="./Resources/moon.svg"
    document.documentElement.classList.remove("dark")
}
else{
    icon.src="./Resources/sun.svg"
    document.documentElement.classList.add("dark");
}

    // window.location.reload();
})



