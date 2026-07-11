document.addEventListener("DOMContentLoaded", () => {





/* =========================
HERO SLIDER
========================= */


const track = document.querySelector(".hero-track");

const slider = document.querySelector(".hero-slider");

const leftButton = document.querySelector(".slider-arrow-left");

const rightButton = document.querySelector(".slider-arrow-right");



let currentPosition = 0;





function getMaxPosition(){


    if(!track || !slider){
        return 0;
    }


    const max =
    track.scrollWidth - slider.clientWidth;


    return Math.max(max,0);


}







function moveSlider(){


    const max =
    getMaxPosition();



    if(currentPosition < 0){

        currentPosition = 0;

    }



    if(currentPosition > max){

        currentPosition = max;

    }



    track.style.transform =
    `translateX(-${currentPosition}px)`;


}








if(track && slider){



    const moveAmount = 460;





    if(rightButton){


        rightButton.addEventListener(
        "click",
        ()=>{


            currentPosition += moveAmount;


            moveSlider();


        });


    }








    if(leftButton){


        leftButton.addEventListener(
        "click",
        ()=>{


            currentPosition -= moveAmount;


            moveSlider();


        });


    }







    /*
    마우스 휠 가로 이동
    */


    slider.addEventListener(
    "wheel",
    (event)=>{


        if(
            Math.abs(event.deltaY)
            >
            Math.abs(event.deltaX)
        ){


            event.preventDefault();



            currentPosition += event.deltaY;



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


const revealElements =
document.querySelectorAll(".reveal");



const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);



revealObserver.unobserve(
entry.target
);



}


});


},
{

threshold:0.15

}

);





revealElements.forEach(
(element)=>{


revealObserver.observe(
element
);


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







function openPrivacy(){


    if(privacyModal){

        privacyModal.classList.add(
        "active"
        );

    }


}








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
openPrivacy
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
(event)=>{


if(event.key === "Escape"){


closePrivacy();


}


}

);





});