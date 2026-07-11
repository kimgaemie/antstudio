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


    return track.scrollWidth - slider.clientWidth;


}






function moveSlider(){


    const max = getMaxPosition();



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



    const moveAmount = 520;



    if(rightBtn){


        rightBtn.addEventListener(
        "click",
        ()=>{


            currentPosition += moveAmount;


            moveSlider();


        });


    }







    if(leftBtn){


        leftBtn.addEventListener(
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
    (e)=>{


        if(
            Math.abs(e.deltaY)
            >
            Math.abs(e.deltaX)
        ){


            e.preventDefault();


            currentPosition += e.deltaY;



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



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


observer.unobserve(
entry.target
);


}


});


},
{

threshold:0.15

}

);





reveals.forEach(
(element)=>{


observer.observe(element);


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
(e)=>{


if(e.key === "Escape"){


closePrivacy();


}


}

);



});