// Burger menus 
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});


// Rest code

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