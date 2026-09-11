/* ==========================================================
   AD LIFESTYLE V2
   APP.JS
   Application Bootstrap
   ========================================================== */

import { initRouter, navigate } from "./router.js";
import { loadSavedTheme } from "./theme.js";
import { initialiseAnimations } from "./animations.js";

/* ==========================================================
   BOOTSTRAP
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    createLayout();

    initialiseHeader();

    loadSavedTheme();

    initialiseAnimations();

    initRouter();

    initialiseLoader();

});

/* ==========================================================
   LAYOUT
   ========================================================== */

function createLayout(){

    const root = document.getElementById("root");

    root.innerHTML = `

        <div id="loader" class="loader">

            <div class="loader-content">

                <img
                    src="./assets/logo/logo.png"
                    class="loader-logo"
                    alt="AD Lifestyle">

                <div class="loader-ring"></div>

            </div>

        </div>

        <header id="header"></header>

        <main id="app"></main>

        <footer id="footer"></footer>

    `;

    createHeader();

    createFooter();

}

/* ==========================================================
   LOADER
   ========================================================== */

function initialiseLoader(){

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 900);

    });

}

/* ==========================================================
   HEADER
   ========================================================== */

function createHeader(){

    const header = document.getElementById("header");

    header.innerHTML = `

    <nav class="navbar">

        <div class="container nav-wrapper">

            <div class="logo" data-route="/">

                <img
                    src="./assets/logo/logo.png"
                    alt="AD Lifestyle">

                <span>AD Lifestyle</span>

            </div>

            <div class="nav-links">

                <a data-route="/">Início</a>

                <a data-route="/services">Serviços</a>

                <a data-route="/events">Eventos</a>

                <a data-route="/contact">Contacto</a>
                
                <a data-route="/products">Produtos</a>
              
                <a data-route="/about">Sobre Nós</a>

                
            </div>

            <button id="menuToggle" class="menu-toggle">

                ☰

            </button>

        </div>

    </nav>

    <aside id="mobileMenu" class="mobile-menu">

        <a data-route="/">Início</a>

        <a data-route="/services">Serviços</a>

        <a data-route="/events">Eventos</a>

        <a data-route="/contact">Contacto</a>

        <a data-route="/products">Produtos</a>
              
        <a data-route="/about">Sobre Nós</a>

    </aside>

    `;

}

/* ==========================================================
   HEADER EVENTS
   ========================================================== */

function initialiseHeader(){

    document.addEventListener("click", (e)=>{

        const logo=e.target.closest(".logo");

        if(logo){

            navigate("/");

        }

    });

    document.addEventListener("click", (e)=>{

        const toggle=e.target.closest("#menuToggle");

        if(!toggle) return;

        document
            .getElementById("mobileMenu")
            .classList.toggle("open");

    });

    document.addEventListener("scroll", ()=>{

        const navbar=document.querySelector(".navbar");

        if(!navbar) return;

        navbar.classList.toggle(
            "scrolled",
            window.scrollY>20
        );

    });

    document.addEventListener("click",(e)=>{

        const link=e.target.closest("[data-route]");

        if(!link) return;

        document
            .getElementById("mobileMenu")
            ?.classList.remove("open");

    });

}

/* ==========================================================
   FOOTER
   ========================================================== */

function createFooter(){

    const footer=document.getElementById("footer");

    footer.innerHTML=`

    <section class="footer">

        <div class="container">

            <div class="footer-grid">

                <div>

                    <div class="footer-logo">

                        <img
                            src="./assets/logo/logo.png"
                            alt="logo">

                        <h3>AD Lifestyle</h3>

                    </div>

                    <p class="footer-text">

                        Saúde, Bem-estar, Longevidade,
                        Medicina Holística e
                        Negócios Internacionais.

                    </p>

                </div>

                <div>

                    <h4 class="footer-title">

                        Empresa

                    </h4>

                    <div class="footer-links">

                        <a data-route="/">Quem Somos</a>

                        <a data-route="/services">Serviços</a>

                        <a data-route="/events">Eventos</a>
                     
                        <a data-route="/products">Produtos</a>
              
                        <a data-route="/about">Sobre Nós</a>

                    </div>

                </div>

                <div>

                    <h4 class="footer-title">

                        Produtos

                    </h4>

                    <div class="footer-links">

                        <a data-route="/angel">Angel Moon</a>

                        <a data-route="/ezeno">EZENO</a>

                        <a data-route="/zenbru">Zenbru</a>

                        <a data-route="/alpha">Alpha Vmax</a>

                        <a data-route="/alphameta">AlphaMeta</a>

                        <a data-route="/minoseed">Minoseed</a>

                        <a data-route="/evador">Evador</a>

                        <a data-route="/alphaspin-ultra">AlphaSpin Ultra</a>

                        <a data-route="/ismarts3">iSMARTS3</a>

                    </div>

                </div>

                <div>

                    <h4 class="footer-title">

                        Contacto

                    </h4>

                    <div class="footer-links">

                        <a href="tel:+244924964666">

                            +244 924 964 666

                        </a>

                        <a href="#">

                            Luanda · Angola

                        </a>

                        <a href="https://wa.me/${number}?text=${encodeURIComponent(message)};">

                            WhatsApp

                        </a>
                                            

                    </div>

                </div>

            </div>

            <div class="footer-bottom">

                © <span id="year"></span>
                AD Lifestyle.
                Todos os direitos reservados.

            </div>

        </div>

    </section>

    `;

    document.getElementById("year").textContent=
        new Date().getFullYear();

}

/* ==========================================================
   UTILITÁRIOS
   ========================================================== */

export function scrollTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

export function whatsapp(message="Olá AD Lifestyle!"){

    const number="244924964666";

    const url=
`https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

}

window.AD={
    navigate,
    whatsapp
};
