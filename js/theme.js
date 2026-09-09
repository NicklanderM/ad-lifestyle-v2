/* ==========================================================
   AD LIFESTYLE V2
   THEME.JS
   Dynamic Theme Engine
   ========================================================== */

import {
    setTheme,
    getTheme,
    subscribe,
    saveTheme,
    loadTheme
} from "./state.js";

/* ==========================================================
   TEMAS DISPONÍVEIS
   ========================================================== */

export const THEMES = {

    default:{
        name:"AD Lifestyle",
        id:"default",
        color:"#C6A35A"
    },

    angel:{
        name:"Angel Moon",
        id:"angel",
        color:"#8B5CF6"
    },

    ezeno:{
        name:"EZENO",
        id:"ezeno",
        color:"#16A34A"
    },

    zenbru:{
        name:"Zenbru",
        id:"zenbru",
        color:"#8B5A2B"
    },

    alpha:{
        name:"Alpha Vmax",
        id:"alpha",
        color:"#D4AF37"
    }

};

/* ==========================================================
   APLICAÇÃO DO TEMA
   ========================================================== */

export function applyTheme(theme="default"){

    if(!THEMES[theme]) theme="default";

    const body=document.body;

    body.dataset.theme=theme;

    setTheme(theme);

    saveTheme(theme);

    updateMetaColor(theme);

    animateTheme();

}

/* ==========================================================
   CARREGAR TEMA GUARDADO
   ========================================================== */

export function loadSavedTheme(){

    const saved=loadTheme();

    applyTheme(saved);

}

/* ==========================================================
   TEMA ACTUAL
   ========================================================== */

export function currentTheme(){

    return getTheme();

}

/* ==========================================================
   CICLO ENTRE TEMAS
   ========================================================== */

export function nextTheme(){

    const order=[
        "default",
        "angel",
        "ezeno",
        "zenbru",
        "alpha"
    ];

    const current=getTheme();

    const index=order.indexOf(current);

    const next=order[(index+1)%order.length];

    applyTheme(next);

}

/* ==========================================================
   META COLOR
   ========================================================== */

function updateMetaColor(theme){

    const meta=document.querySelector(
        'meta[name="theme-color"]'
    );

    if(!meta) return;

    meta.setAttribute(
        "content",
        THEMES[theme].color
    );

}

/* ==========================================================
   TRANSIÇÃO SUAVE
   ========================================================== */

function animateTheme(){

    const body=document.body;

    body.classList.add("theme-transition");

    clearTimeout(body._themeTimer);

    body._themeTimer=setTimeout(()=>{

        body.classList.remove("theme-transition");

    },650);

}

/* ==========================================================
   OBSERVER
   ========================================================== */

subscribe(state=>{

    document.body.dataset.theme=state.theme.active;

});

/* ==========================================================
   UTILITÁRIOS
   ========================================================== */

export function isDarkTheme(){

    return currentTheme()==="alpha";

}

export function resetTheme(){

    applyTheme("default");

}

/* ==========================================================
   API GLOBAL (DEBUG)
   ========================================================== */

window.Theme={

    apply:applyTheme,

    next:nextTheme,

    current:currentTheme,

    reset:resetTheme

};