/* ==========================================================
   AD LIFESTYLE V2
   ANIMATIONS.JS
   Luxury Motion Engine
   ========================================================== */

import { subscribe } from "./state.js";

/* ==========================================================
   ESTADO
   ========================================================== */

let revealObserver = null;
let counterObserver = null;

let cursor = null;
let progressBar = null;

/* ==========================================================
   INICIALIZAÇÃO GERAL
   ========================================================== */

export function initialiseAnimations(){

    createCursorGlow();

    createProgressBar();

    initialiseReveal();

    initialiseCounters();

    initialiseParallax();

    initialiseMagneticButtons();

    initialiseFAQ();

    updateProgressBar();

    subscribe(() => {

        requestAnimationFrame(() => {

            initialiseReveal();

            initialiseCounters();

            initialiseParallax();

            initialiseMagneticButtons();

            initialiseFAQ();

        });

    });

}

/* ==========================================================
   REVEAL ON SCROLL
   ========================================================== */

function initialiseReveal(){

    if(revealObserver){

        revealObserver.disconnect();

    }

    revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },{

        threshold:0.15,

        rootMargin:"0px 0px -40px 0px"

    });

    document
        .querySelectorAll(
            ".reveal,.reveal-up,.reveal-left,.reveal-right,.reveal-scale"
        )
        .forEach(el=>revealObserver.observe(el));

}

/* ==========================================================
   CONTADORES ANIMADOS
   ========================================================== */

function initialiseCounters(){

    if(counterObserver){

        counterObserver.disconnect();

    }

    counterObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        });

    },{

        threshold:.5

    });

    document
        .querySelectorAll("[data-counter]")
        .forEach(counter=>counterObserver.observe(counter));

}

function animateCounter(element){

    const target=Number(element.dataset.counter);

    const duration=1800;

    const start=performance.now();

    function update(now){

        const progress=Math.min((now-start)/duration,1);

        const ease=1-Math.pow(1-progress,4);

        const value=Math.floor(target*ease);

        element.textContent=value.toLocaleString("pt-PT");

        if(progress<1){

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

/* ==========================================================
   CURSOR GLOW
   ========================================================== */

function createCursorGlow(){

    cursor=document.createElement("div");

    cursor.className="cursor-glow";

    document.body.appendChild(cursor);

    let x=window.innerWidth/2;
    let y=window.innerHeight/2;

    window.addEventListener("pointermove",e=>{

        x=e.clientX;
        y=e.clientY;

        cursor.style.left=x+"px";
        cursor.style.top=y+"px";

    },{passive:true});

    document.addEventListener("pointerdown",()=>{

        cursor.classList.add("active");

    });

    document.addEventListener("pointerup",()=>{

        cursor.classList.remove("active");

    });

}

/* ==========================================================
   SCROLL PROGRESS
   ========================================================== */

function createProgressBar(){

    progressBar=document.createElement("div");

    progressBar.className="scroll-progress";

    document.body.appendChild(progressBar);

    window.addEventListener("scroll",updateProgressBar,{passive:true});

}

function updateProgressBar(){

    const height=
        document.documentElement.scrollHeight-window.innerHeight;

    const progress=(window.scrollY/height)*100;

    progressBar.style.width=progress+"%";

}

/* ==========================================================
   PARALLAX HERO
   ========================================================== */

function initialiseParallax(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    const layers=hero.querySelectorAll(".parallax");

    if(!layers.length) return;

    hero.onmousemove=e=>{

        const rect=hero.getBoundingClientRect();

        const x=(e.clientX-rect.left)/rect.width-.5;
        const y=(e.clientY-rect.top)/rect.height-.5;

        layers.forEach(layer=>{

            const speed=Number(layer.dataset.speed||20);

            const tx=x*speed;
            const ty=y*speed;

            layer.style.transform=
                `translate(${tx}px,${ty}px)`;

        });

    };

    hero.onmouseleave=()=>{

        layers.forEach(layer=>{

            layer.style.transform="translate(0,0)";

        });

    };

}

/* ==========================================================
   BOTÕES MAGNÉTICOS
   ========================================================== */

function initialiseMagneticButtons(){

    document
        .querySelectorAll(".btn")
        .forEach(button=>{

            button.onmousemove=e=>{

                const rect=button.getBoundingClientRect();

                const x=e.clientX-rect.left-rect.width/2;
                const y=e.clientY-rect.top-rect.height/2;

                button.style.transform=
                    `translate(${x*.15}px,${y*.25}px)`;

            };

            button.onmouseleave=()=>{

                button.style.transform="translate(0,0)";

            };

        });

}

/* ==========================================================
   FAQ
   ========================================================== */

function initialiseFAQ(){

    document
        .querySelectorAll(".faq-question")
        .forEach(button=>{

            button.onclick=()=>{

                const item=button.parentElement;

                const open=item.classList.contains("active");

                document
                    .querySelectorAll(".faq-item")
                    .forEach(el=>el.classList.remove("active"));

                if(!open){

                    item.classList.add("active");

                }

            };

        });

}

/* ==========================================================
   FLOATING PRODUCTS
   ========================================================== */

export function float(element){

    let angle=Math.random()*Math.PI*2;

    function animate(){

        angle+=0.015;

        const y=Math.sin(angle)*8;

        const r=Math.cos(angle)*2;

        element.style.transform=
            `translateY(${y}px) rotate(${r}deg)`;

        requestAnimationFrame(animate);

    }

    animate();

}

/* ==========================================================
   SCROLL TO ELEMENT
   ========================================================== */

export function scrollToElement(selector){

    const el=document.querySelector(selector);

    if(!el) return;

    el.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}

/* ==========================================================
   STAGGER REVEAL
   ========================================================== */

export function stagger(selector){

    document
        .querySelectorAll(selector)
        .forEach((el,index)=>{

            el.style.transitionDelay=`${index*90}ms`;

        });

}

/* ==========================================================
   RIPPLE EFFECT
   ========================================================== */

export function ripple(button){

    button.addEventListener("click",e=>{

        const circle=document.createElement("span");

        const diameter=Math.max(
            button.clientWidth,
            button.clientHeight
        );

        circle.style.width=diameter+"px";
        circle.style.height=diameter+"px";

        circle.style.position="absolute";
        circle.style.borderRadius="50%";
        circle.style.pointerEvents="none";

        circle.style.left=
            e.offsetX-diameter/2+"px";

        circle.style.top=
            e.offsetY-diameter/2+"px";

        circle.style.background=
            "rgba(255,255,255,.35)";

        circle.style.transform="scale(0)";
        circle.style.transition=".6s";

        button.appendChild(circle);

        requestAnimationFrame(()=>{

            circle.style.transform="scale(2.6)";
            circle.style.opacity="0";

        });

        setTimeout(()=>circle.remove(),600);

    });

}

/* ==========================================================
   API GLOBAL
   ========================================================== */

window.Motion={

    stagger,

    ripple,

    scrollToElement,

    float

};