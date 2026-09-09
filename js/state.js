/* ==========================================================
   AD LIFESTYLE V2
   STATE.JS
   Global State Management
   ========================================================== */

/* ==========================================================
   STORE
   ========================================================== */

const listeners = new Set();

const state = {

    /* ---------- Aplicação ---------- */

    app:{

        loading:true,

        menuOpen:false,

        currentRoute:"/",

        previousRoute:null

    },

    /* ---------- Tema ---------- */

    theme:{

        active:"default",

        previous:"default"

    },

    /* ---------- Produtos ---------- */

    product:{

        selected:null

    },

    /* ---------- Scroll ---------- */

    scroll:{

        y:0,

        direction:"down"

    }

};

/* ==========================================================
   GET STATE
   ========================================================== */

export function getState(){

    return structuredClone(state);

}

/* ==========================================================
   SUBSCRIBE
   ========================================================== */

export function subscribe(callback){

    listeners.add(callback);

    callback(getState());

    return ()=>listeners.delete(callback);

}

/* ==========================================================
   NOTIFY
   ========================================================== */

function notify(){

    const snapshot=getState();

    listeners.forEach(listener=>listener(snapshot));

}

/* ==========================================================
   APP
   ========================================================== */

export function setLoading(value){

    state.app.loading=value;

    notify();

}

export function setMenu(value){

    state.app.menuOpen=value;

    notify();

}

export function setRoute(route){

    state.app.previousRoute=state.app.currentRoute;

    state.app.currentRoute=route;

    notify();

}

/* ==========================================================
   THEME
   ========================================================== */

export function setTheme(theme){

    state.theme.previous=state.theme.active;

    state.theme.active=theme;

    notify();

}

export function getTheme(){

    return state.theme.active;

}

/* ==========================================================
   PRODUCT
   ========================================================== */

export function selectProduct(product){

    state.product.selected=product;

    notify();

}

export function getSelectedProduct(){

    return state.product.selected;

}

/* ==========================================================
   SCROLL
   ========================================================== */

let lastScroll=0;

window.addEventListener("scroll",()=>{

    const y=window.scrollY;

    state.scroll.direction=
        y>lastScroll ? "down" : "up";

    state.scroll.y=y;

    lastScroll=y;

    notify();

},{passive:true});

/* ==========================================================
   PERSISTÊNCIA
   ========================================================== */

const STORAGE_KEY="adlifestyle-theme";

export function saveTheme(theme){

    localStorage.setItem(STORAGE_KEY,theme);

}

export function loadTheme(){

    return localStorage.getItem(STORAGE_KEY) || "default";

}

/* ==========================================================
   RESET
   ========================================================== */

export function resetState(){

    state.app.loading=false;
    state.app.menuOpen=false;
    state.app.currentRoute="/";

    state.theme.active="default";
    state.theme.previous="default";

    state.product.selected=null;

    notify();

}

/* ==========================================================
   DEBUG
   ========================================================== */

window.Store={

    getState,

    setTheme,

    setRoute,

    selectProduct,

    resetState

};