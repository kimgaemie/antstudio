document.addEventListener("DOMContentLoaded",()=>{


/* =========================
HERO SLIDER
========================= */


const heroTrack =
document.querySelector(".hero-track");


const heroSlider =
document.querySelector(".hero-slider");


const heroLeft =
document.querySelector(".slider-arrow-left");


const heroRight =
document.querySelector(".slider-arrow-right");


let heroPosition = 0;



function getHeroMax(){

if(!heroTrack || !heroSlider){

return 0;

}


return Math.max(
heroTrack.scrollWidth - heroSlider.clientWidth,
0
);

}



function moveHero(){

const max =
getHeroMax();


if(heroPosition < 0){

heroPosition = 0;

}


if(heroPosition > max){

heroPosition = max;

}


heroTrack.style.transform =
`translateX(-${heroPosition}px)`;

}




if(heroTrack){


if(heroRight){

heroRight.addEventListener(
"click",
()=>{

heroPosition += 476;

moveHero();

}

);

}



if(heroLeft){

heroLeft.addEventListener(
"click",
()=>{

heroPosition -= 476;

moveHero();

}

);

}



if(heroSlider){

heroSlider.addEventListener(
"wheel",
(e)=>{


if(
Math.abs(e.deltaY)
>
Math.abs(e.deltaX)
){

e.preventDefault();


heroPosition += e.deltaY;


moveHero();

}


},
{
passive:false
}

);

}


}









/* =========================
WORK MORE BUTTON
3개씩 열기
========================= */


const moreButtons =
document.querySelectorAll(".more-button");


moreButtons.forEach(button=>{


    const categoryImages =
    button.previousElementSibling;


    if(!categoryImages){
        return;
    }


    const extraRows =
    categoryImages.querySelectorAll(".extra-row");



    button.addEventListener("click",()=>{


        const isOpen =
        button.classList.contains("active");



        extraRows.forEach(row=>{


            row.classList.toggle(
                "show",
                !isOpen
            );


        });



        button.classList.toggle(
            "active"
        );



        button.innerText =
        isOpen ? "더보기" : "접기";



    });


});









/* =========================
SCROLL REVEAL
========================= */


const reveals =
document.querySelectorAll(".reveal");



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


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



reveals.forEach(item=>{


observer.observe(item);


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


if(e.key==="Escape"){

closePrivacy();

}


}

);



});