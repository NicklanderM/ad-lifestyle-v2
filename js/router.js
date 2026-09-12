/* ==========================================================
   AD LIFESTYLE V2
   ROUTER.JS
   SPA History Router
   ========================================================== */

import { setRoute } from "./state.js";
import { scrollTop } from "./app.js";

/* ========= IMPORTAÇÃO DAS PÁGINAS ========= */

import { loadHome } from "../pages/home.js";
import { loadServices } from "../pages/services.js";
import { loadEvents } from "../pages/events.js";
import { loadContact } from "../pages/contact-page.js";
import { loadAbout } from "../pages/about.js";
import { loadProducts } from "../pages/products.js";

import { loadAngel } from "../pages/products/angel.js";
import { loadEzeno } from "../pages/products/ezeno.js";
import { loadZenbru } from "../pages/products/zenbru.js";
import { loadAlpha } from "../pages/products/alpha.js";

import { loadAlphaMeta } from "../pages/products/alphameta.js";
import { loadMinoseed } from "../pages/products/minoseed.js";
import { loadEvador } from "../pages/products/evador.js";
import { loadAlphaSpinUltra } from "../pages/products/alphaspin-ultra.js";
import { loadISmartS3 } from "../pages/products/ismarts3.js";

/* ==========================================================
   DEFINIÇÃO DAS ROTAS
   ========================================================== */

const routes = {

    "/": loadHome,

    "/services": loadServices,

    "/events": loadEvents,

    "/contact": loadContact,
   
    "/products": loadProducts,
   
    "/about": loadAbout,

    "/angel": loadAngel,

    "/ezeno": loadEzeno,

    "/zenbru": loadZenbru,

    "/alpha": loadAlpha,

    /* ========= NOVOS PRODUTOS ========= */

    "/alphameta": loadAlphaMeta,

    "/minoseed": loadMinoseed,

    "/evador": loadEvador,

    "/alphaspin-ultra": loadAlphaSpinUltra,

    "/ismarts3": loadISmartS3

};

/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

export function initRouter(){

    document.addEventListener("click", handleNavigation);

    window.addEventListener("popstate", ()=>{

        render(location.pathname,false);

    });

    render(location.pathname,false);

}

/* ==========================================================
   NAVEGAÇÃO
   ========================================================== */

export function navigate(path){

    if(location.pathname===path) return;

    history.pushState({}, "", path);

    render(path,true);

}

/* ==========================================================
   INTERCEPTAR LINKS
   ========================================================== */

function handleNavigation(event){

    const link = event.target.closest("[data-route]");

    if(!link) return;

    event.preventDefault();

    const route = link.dataset.route;

    navigate(route);

}

/* ==========================================================
   RENDERIZAÇÃO
   ========================================================== */

function render(path, animate = true){

    const app = document.getElementById("app");

    if(!app) return;

    const page = routes[path];

    setRoute(path);

    updateActiveLinks(path);

    if(!page){

        render404();

        return;

    }

    if(animate){

        app.classList.add("page-leave");

        setTimeout(()=>{

            app.classList.remove("page-leave");

            page();

            revealPage();

        },220);

    }else{

        page();

        revealPage();

    }

    scrollTop();

}

/* ==========================================================
   REVEAL DA PÁGINA
   ========================================================== */

function revealPage(){

    const app = document.getElementById("app");

    app.classList.add("page-enter");

    requestAnimationFrame(()=>{

        app.classList.add("page-enter-active");

        setTimeout(()=>{

            app.classList.remove(
                "page-enter",
                "page-enter-active"
            );

        },700);

    });

}

/* ==========================================================
   LINKS ACTIVOS
   ========================================================== */

function updateActiveLinks(path){

    document
        .querySelectorAll("[data-route]")
        .forEach(link=>{

            const active =
                link.dataset.route === path;

            link.classList.toggle("active",active);

        });

}

/* ==========================================================
   404
   ========================================================== */

function render404(){

    const app = document.getElementById("app");

    app.innerHTML = `

    <section class="hero">

        <div class="container section-center">

            <span class="label">
                Página não encontrada
            </span>

            <h1 class="display">
                404
            </h1>

            <p class="lead">
                A página que procura não existe ou foi movida.
            </p>

            <div class="hero-actions center">

                <button
                    class="btn btn-primary"
                    id="backHome">

                    Voltar ao início

                </button>

            </div>

        </div>

    </section>

    `;

    document
        .getElementById("backHome")
        .onclick = ()=>navigate("/");

}

/* ==========================================================
   UTILITÁRIOS
   ========================================================== */

export function currentRoute(){

    return location.pathname;

}

export function routeExists(path){

    return Object.hasOwn(routes,path);

}

/* ==========================================================
   API GLOBAL
   ========================================================== */

window.Router = {

    navigate,

    current: currentRoute

};
