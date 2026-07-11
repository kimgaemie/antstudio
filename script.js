document.addEventListener("DOMContentLoaded", () => {



/* =========================
 HERO SLIDER
========================= */


const track = document.querySelector(".hero-track");

const slider = document.querySelector(".hero-slider");

const leftBtn = document.querySelector(".slider-arrow-left");

const rightBtn = document.querySelector(".slider-arrow-right");



let currentPosition = 0;



function getMaxPosition(){


    if(!track || !slider) return 0;


    const totalWidth = track.scrollWidth;

    const visibleWidth = slider.offsetWidth;


    return totalWidth - visibleWidth;


}






function moveSlider(){


    track.style.transform =
    `translateX(-${currentPosition}px)`;


}







if(track && rightBtn && leftBtn){



    rightBtn.addEventListener("click",()=>{


        const moveAmount = 440;


        currentPosition += moveAmount;



        const max =
        getMaxPosition();



        if(currentPosition > max){

            currentPosition = max;

        }



        moveSlider();


    });







    leftBtn.addEventListener("click",()=>{


        const moveAmount = 440;


        currentPosition -= moveAmount;



        if(currentPosition < 0){

            currentPosition = 0;

        }



        moveSlider();



    });



}









/* =========================
 MOUSE WHEEL HORIZONTAL
========================= */


if(slider){



slider.addEventListener(
"wheel",
(e)=>{


    if(
        Math.abs(e.deltaY)
        >
        Math.abs(e.deltaX)
    ){


        e.preventDefault();



        currentPosition += e.deltaY;



        const max =
        getMaxPosition();



        if(currentPosition < 0){

            currentPosition = 0;

        }



        if(currentPosition > max){

            currentPosition = max;

        }



        moveSlider();



    }


},
{
    passive:false
}

);



}









/* =========================
 SCROLL REVEAL
========================= */


const reveals =
document.querySelectorAll(".reveal");



const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


revealObserver.unobserve(entry.target);


}


});


},
{

threshold:0.15

}

);





reveals.forEach((element)=>{


revealObserver.observe(element);


});









/* =========================
 PRIVACY MODAL
========================= */


const privacyButton =
document.getElementById(
"privacyButton"
);



const privacyModal =
document.getElementById(
"privacyModal"
);



const privacyClose =
document.getElementById(
"privacyClose"
);



const privacyOverlay =
document.querySelector(
".privacy-overlay"
);






function closePrivacy(){


    if(privacyModal){

        privacyModal.classList.remove(
        "active"
        );

    }


}






if(privacyButton){


privacyButton.addEventListener(
"click",
()=>{


privacyModal.classList.add(
"active"
);


}

);


}







if(privacyClose){


privacyClose.addEventListener(
"click",
closePrivacy
);


}







if(privacyOverlay){


privacyOverlay.addEventListener(
"click",
closePrivacy
);


}







document.addEventListener(
"keydown",
(e)=>{


if(e.key === "Escape"){


closePrivacy();


}


}

);




});