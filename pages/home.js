/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Premium Editorial Landing Experience
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple } from "../js/animations.js";

/* ==========================================================
   ESTADO
   ========================================================== */

let heroTimer = null;
let mediaTimer = null;

let heroIndex = 0;
let mediaIndex = 0;

/* ==========================================================
   DADOS DO HERO
   ========================================================== */

const heroSlides = [

    {
        category:"WELLNESS",
        title:"Viva melhor.",
        accent:"Escolha melhor.",
        description:
            "Uma nova visão de bem-estar, Lifestyle e evolução.",
        image:"./assets/products/angel.png"
    },

    {
        category:"ORAL CARE",
        title:"O cuidado",
        accent:"começa aqui.",
        description:
            "Soluções pensadas para fazer parte da sua rotina.",
        image:"./assets/products/ezeno.png"
    },

    {
        category:"LIFESTYLE",
        title:"Descubra",
        accent:"o seu ritmo.",
        description:
            "Experiências que aproximam sabor, conforto e Lifestyle.",
        image:"./assets/products/zenbru.png"
    },

    {
        category:"SMART LIVING",
        title:"O futuro",
        accent:"já faz parte.",
        description:
            "Tecnologia e inovação integradas na vida quotidiana.",
        image:"./assets/products/ismarts3.png"
    },

    {
        category:"PERFORMANCE",
        title:"Eleve",
        accent:"a sua experiência.",
        description:
            "Uma nova perspectiva sobre performance e Lifestyle.",
        image:"./assets/products/alpha.png"
    }

];

/* ==========================================================
   MEDIA
   ========================================================== */

const mediaSlides = [

    {
        image:"./assets/images/insta1.jpg",
        label:"AD LIFESTYLE",
        title:"Uma comunidade em movimento."
    },

    {
        image:"./assets/images/insta2.jpg",
        label:"EXPERIÊNCIA",
        title:"Momentos que ficam."
    },

    {
        image:"./assets/images/insta3.jpg",
        label:"EVENTOS",
        title:"Conhecimento que ganha vida."
    },

    {
        image:"./assets/images/insta4.jpg",
        label:"JORNADA",
        title:"Estamos apenas a começar."
    }

];

/* ==========================================================
   LOAD
   ========================================================== */

export function loadHome(){

    clearTimers();

    applyTheme("default");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <main class="home-page">

            ${hero()}

            ${manifesto()}

            ${ecosystem()}

            ${featuredProducts()}

            ${mediaSection()}

            ${testimonials()}

            ${finalCTA()}

        </main>

    `;

    initialiseHome();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

        <section
            class="home-hero"
            id="homeHero">

            <div class="home-hero-light home-hero-light-a"></div>
            <div class="home-hero-light home-hero-light-b"></div>

            <div class="home-hero-container">

                <div class="home-hero-left">

                    <div class="home-hero-brand">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle">

                        <div>

                            <strong>
                                AD LIFESTYLE
                            </strong>

                            <span>
                                WELLNESS · LIFESTYLE · EVOLUTION
                            </span>

                        </div>

                    </div>

                    <div class="home-hero-slides">

                        ${heroSlides.map(
                            (slide,index)=>`

                                <article
                                    class="home-hero-slide ${
                                        index === 0
                                            ? "is-active"
                                            : ""
                                    }"
                                    data-hero-slide="${index}">

                                    <span class="home-hero-category">
                                        ${slide.category}
                                    </span>

                                    <h1>

                                        ${slide.title}

                                        <span>
                                            ${slide.accent}
                                        </span>

                                    </h1>

                                    <p>
                                        ${slide.description}
                                    </p>

                                </article>

                            `
                        ).join("")}

                    </div>

                    <div class="home-hero-actions">

                        <button
                            class="home-button home-button-gold"
                            id="heroProducts"
                            type="button">

                            Descobrir produtos

                            <span>→</span>

                        </button>

                        <button
                            class="home-button home-button-outline"
                            id="heroAbout"
                            type="button">

                            A nossa história

                            <span>↗</span>

                        </button>

                    </div>

                    <div class="home-hero-progress">

                        <div class="home-hero-progress-line">

                            <div
                                id="heroProgress">
                            </div>

                        </div>

                        <div class="home-hero-counter">

                            <strong id="heroCurrent">
                                01
                            </strong>

                            <span>
                                /
                            </span>

                            <span>
                                ${String(
                                    heroSlides.length
                                ).padStart(2,"0")}
                            </span>

                        </div>

                    </div>

                </div>

                <div class="home-hero-right">

                    <div class="home-product-stage">

                        <div class="home-product-glow"></div>

                        <div class="home-product-ring"></div>

                        ${heroSlides.map(
                            (slide,index)=>`

                                <div
                                    class="home-hero-product ${
                                        index === 0
                                            ? "is-active"
                                            : ""
                                    }"
                                    data-hero-product="${index}">

                                    <img
                                        src="${slide.image}"
                                        alt="${slide.category}"
                                        loading="${
                                            index === 0
                                                ? "eager"
                                                : "lazy"
                                        }">

                                </div>

                            `
                        ).join("")}

                        <div class="home-hero-brand-orbit">

                            <img
                                src="./assets/images/bzzworld.png"
                                alt="BZZWorld">

                            <img
                                src="./assets/images/a21.png"
                                alt="Academy Twenty One">

                        </div>

                    </div>

                    <div class="home-hero-thumbs">

                        ${heroSlides.map(
                            (slide,index)=>`

                                <button
                                    type="button"
                                    class="${
                                        index === 0
                                            ? "is-active"
                                            : ""
                                    }"
                                    data-hero-thumb="${index}">

                                    <img
                                        src="${slide.image}"
                                        alt="${slide.category}">

                                </button>

                            `
                        ).join("")}

                    </div>

                </div>

            </div>

            <div class="home-hero-bottom">

                <span>
                    SCROLL TO DISCOVER
                </span>

                <span class="home-hero-bottom-line"></span>

                <span>
                    01 — AD LIFESTYLE
                </span>

            </div>

        </section>

    `;

}

/* ==========================================================
   MANIFESTO
   ========================================================== */

function manifesto(){

    return `

        <section class="home-manifesto">

            <div class="home-container">

                <div class="home-manifesto-inner reveal">

                    <span class="home-overline">
                        A NOSSA VISÃO
                    </span>

                    <h2>
                        Não queremos apenas
                        estar no mercado.
                        <span>
                            Queremos criar uma nova forma
                            de viver a experiência de Lifestyle.
                        </span>
                    </h2>

                    <div class="home-manifesto-footer">

                        <p>
                            Bem-estar. Conhecimento.
                            Relações. Experiência.
                        </p>

                        <span>
                            AD LIFESTYLE
                        </span>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   ECOSSISTEMA
   ========================================================== */

function ecosystem(){

    return `

        <section class="home-ecosystem">

            <div class="home-container">

                <div class="home-ecosystem-header reveal">

                    <div>

                        <span class="home-overline">
                            O ECOSSISTEMA
                        </span>

                        <h2>
                            Duas forças.
                            <span>
                                Uma visão.
                            </span>
                        </h2>

                    </div>

                    <p>
                        Produtos, bem-estar e uma cultura
                        de aprendizagem contínua.
                    </p>

                </div>

                <div class="home-ecosystem-grid">

                    <article class="home-ecosystem-card home-ecosystem-bzz reveal">

                        <div class="home-ecosystem-card-top">

                            <span>
                                WELLNESS
                            </span>

                            <span>
                                01
                            </span>

                        </div>

                        <img
                            src="./assets/images/bzzworld.png"
                            alt="BZZWorld">

                        <div>

                            <h3>
                                BZZWorld
                            </h3>

                            <p>
                                O universo de produtos,
                                bem-estar e Lifestyle que
                                alimenta a experiência AD Lifestyle.
                            </p>

                            <a
                                href="https://www.bzzworld.com/"
                                target="_blank"
                                rel="noopener noreferrer">

                                Conhecer BZZWorld
                                <span>↗</span>

                            </a>

                        </div>

                    </article>

                    <article class="home-ecosystem-card home-ecosystem-a21 reveal">

                        <div class="home-ecosystem-card-top">

                            <span>
                                DEVELOPMENT
                            </span>

                            <span>
                                02
                            </span>

                        </div>

                        <img
                            src="./assets/images/a21.png"
                            alt="Academy Twenty One">

                        <div>

                            <h3>
                                Academy Twenty One
                            </h3>

                            <p>
                                Conhecimento, liderança,
                                desenvolvimento pessoal e
                                educação empreendedora.
                            </p>

                            <a
                                href="https://www.academytwentyone.com/"
                                target="_blank"
                                rel="noopener noreferrer">

                                Conhecer Academy 21
                                <span>↗</span>

                            </a>

                        </div>

                    </article>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   PRODUCTS
   ========================================================== */

function featuredProducts(){

    return `

        <section
            class="home-products"
            id="products">

            <div class="home-container">

                <div class="home-products-header reveal">

                    <div>

                        <span class="home-overline">
                            PRODUTOS
                        </span>

                        <h2>
                            Escolhas que
                            <span>
                                despertam curiosidade.
                            </span>
                        </h2>

                    </div>

                    <button
                        type="button"
                        class="home-text-button"
                        id="viewProducts">

                        Ver catálogo completo
                        <span>→</span>

                    </button>

                </div>

                <div class="home-product-grid">

                    ${featuredProduct(
                        "angel",
                        "CUIDADO FEMININO",
                        "Angel Moon",
                        "./assets/products/angel.png",
                        "Conforto e cuidado."
                    )}

                    ${featuredProduct(
                        "ezeno",
                        "SAÚDE ORAL",
                        "EZENO",
                        "./assets/products/ezeno.png",
                        "Cuidado diário."
                    )}

                    ${featuredProduct(
                        "zenbru",
                        "CAFÉ & LIFESTYLE",
                        "Zenbru",
                        "./assets/products/zenbru.png",
                        "Sabor com personalidade."
                    )}

                    ${featuredProduct(
                        "ismarts3",
                        "SMART LIVING",
                        "iSMART S3",
                        "./assets/products/ismarts3.png",
                        "Tecnologia no quotidiano."
                    )}

                </div>

            </div>

        </section>

    `;

}

function featuredProduct(
    route,
    category,
    title,
    image,
    caption
){

    return `

        <article
            class="home-product-tile reveal"
            data-product="${route}">

            <div class="home-product-tile-image">

                <div class="home-product-tile-glow"></div>

                <img
                    src="${image}"
                    alt="${title}"
                    loading="lazy">

                <span>
                    ↗
                </span>

            </div>

            <div class="home-product-tile-info">

                <div>

                    <small>
                        ${category}
                    </small>

                    <h3>
                        ${title}
                    </h3>

                    <p>
                        ${caption}
                    </p>

                </div>

                <strong>
                    Descobrir
                </strong>

            </div>

        </article>

    `;

}

/* ==========================================================
   MEDIA
   ========================================================== */

function mediaSection(){

    return `

        <section class="home-media">

            <div class="home-container">

                <div class="home-media-header reveal">

                    <span class="home-overline">
                        REGISTOS
                    </span>

                    <h2>
                        Algumas histórias
                        <span>
                            já começaram.
                        </span>
                    </h2>

                    <p>
                        Um espaço para reunir fotografias,
                        vídeos, eventos e momentos reais
                        da evolução da AD Lifestyle.
                    </p>

                </div>

                <div class="home-media-layout">

                    <div class="home-media-main reveal">

                        ${mediaSlides.map(
                            (slide,index)=>`

                                <div
                                    class="home-media-slide ${
                                        index === 0
                                            ? "is-active"
                                            : ""
                                    }"
                                    data-media-slide="${index}">

                                    <img
                                        src="${slide.image}"
                                        alt="${slide.title}"
                                        loading="lazy">

                                    <div class="home-media-caption">

                                        <span>
                                            ${slide.label}
                                        </span>

                                        <strong>
                                            ${slide.title}
                                        </strong>

                                    </div>

                                </div>

                            `
                        ).join("")}

                    </div>

                    <div class="home-media-side reveal">

                        <div class="home-media-side-top">

                            <strong>
                                REGISTO
                            </strong>

                            <span id="mediaCurrent">
                                01
                            </span>

                        </div>

                        <div class="home-media-thumbs">

                            ${mediaSlides.map(
                                (slide,index)=>`

                                    <button
                                        type="button"
                                        class="${
                                            index === 0
                                                ? "is-active"
                                                : ""
                                        }"
                                        data-media-thumb="${index}">

                                        <img
                                            src="${slide.image}"
                                            alt="${slide.label}">

                                    </button>

                                `
                            ).join("")}

                        </div>

                        <div class="home-media-note">

                            <span>
                                EM BREVE
                            </span>

                            <p>
                                Vídeos, entrevistas,
                                apresentações e momentos
                                exclusivos da nossa jornada.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   TESTIMONIALS
   ========================================================== */

function testimonials(){

    return `

        <section class="home-testimonials">

            <div class="home-container">

                <div class="home-testimonial-heading reveal">

                    <span class="home-overline">
                        COMUNIDADE
                    </span>

                    <h2>
                        Uma marca cresce.
                        <span>
                            Uma comunidade confirma.
                        </span>
                    </h2>

                </div>

                <div class="home-testimonial-track">

                    <article class="home-testimonial reveal">

                        <div class="home-testimonial-mark">
                            “
                        </div>

                        <p>
                            Gosto da forma como a AD Lifestyle
                            junta produtos, aprendizagem e uma
                            visão diferente de futuro.
                        </p>

                        <div>

                            <strong>
                                Maria
                            </strong>

                            <span>
                                Comunidade AD Lifestyle
                            </span>

                        </div>

                    </article>

                    <article class="home-testimonial reveal">

                        <div class="home-testimonial-mark">
                            “
                        </div>

                        <p>
                            Descobri que por trás dos produtos
                            existe uma ideia muito maior sobre
                            desenvolvimento e evolução.
                        </p>

                        <div>

                            <strong>
                                Ana
                            </strong>

                            <span>
                                Comunidade AD Lifestyle
                            </span>

                        </div>

                    </article>

                    <article class="home-testimonial reveal">

                        <div class="home-testimonial-mark">
                            “
                        </div>

                        <p>
                            É uma proposta que transmite vontade
                            de crescer e construir algo com identidade.
                        </p>

                        <div>

                            <strong>
                                João
                            </strong>

                            <span>
                                Comunidade AD Lifestyle
                            </span>

                        </div>

                    </article>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   FINAL CTA
   ========================================================== */

function finalCTA(){

    return `

        <section class="home-final">

            <div class="home-final-background"></div>

            <div class="home-container">

                <div class="home-final-inner reveal">

                    <div class="home-final-symbol">
                        AD
                    </div>

                    <span class="home-overline">
                        AD LIFESTYLE
                    </span>

                    <h2>
                        A próxima descoberta
                        <span>
                            pode começar aqui.
                        </span>
                    </h2>

                    <p>
                        Explore o universo AD Lifestyle.
                        Descubra produtos, experiências,
                        conhecimento e novas possibilidades.
                    </p>

                    <div class="home-final-actions">

                        <button
                            type="button"
                            class="home-button home-button-gold"
                            id="finalProducts">

                            Explorar produtos
                            <span>→</span>

                        </button>

                        <button
                            type="button"
                            class="home-button home-button-dark"
                            id="finalContact">

                            Falar connosco
                            <span>→</span>

                        </button>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseHome(){

    const root =
        document.querySelector(".home-page");

    if(!root){
        return;
    }

    root
        .querySelectorAll(".home-button")
        .forEach(button=>{
            ripple(button);
        });

    initialiseHero(root);
    initialiseProducts(root);
    initialiseNavigation(root);
    initialiseMedia(root);

}

/* ==========================================================
   HERO SLIDER
   ========================================================== */

function initialiseHero(root){

    const slides =
        [...root.querySelectorAll(
            "[data-hero-slide]"
        )];

    const products =
        [...root.querySelectorAll(
            "[data-hero-product]"
        )];

    const thumbs =
        [...root.querySelectorAll(
            "[data-hero-thumb]"
        )];

    const current =
        root.querySelector("#heroCurrent");

    const progress =
        root.querySelector("#heroProgress");

    if(!slides.length){
        return;
    }

    heroIndex = 0;

    function render(index){

        heroIndex = index;

        slides.forEach(
            (item,i)=>{
                item.classList.toggle(
                    "is-active",
                    i === index
                );
            }
        );

        products.forEach(
            (item,i)=>{
                item.classList.toggle(
                    "is-active",
                    i === index
                );
            }
        );

        thumbs.forEach(
            (item,i)=>{
                item.classList.toggle(
                    "is-active",
                    i === index
                );
            }
        );

        if(current){

            current.textContent =
                String(index + 1).padStart(2,"0");

        }

        if(progress){

            progress.style.animation =
                "none";

            void progress.offsetWidth;

            progress.style.animation =
                "homeHeroProgress 6s linear forwards";

        }

    }

    thumbs.forEach(
        thumb=>{

            thumb.addEventListener(
                "click",
                ()=>{

                    render(
                        Number(
                            thumb.dataset.heroThumb
                        )
                    );

                    restart();

                }
            );

        }
    );

    const stage =
        root.querySelector(
            ".home-product-stage"
        );

    if(stage){

        let startX = 0;

        stage.addEventListener(
            "pointerdown",
            event=>{
                startX =
                    event.clientX;
            }
        );

        stage.addEventListener(
            "pointerup",
            event=>{

                const distance =
                    event.clientX - startX;

                if(
                    Math.abs(distance) < 45
                ){
                    return;
                }

                if(distance < 0){

                    render(
                        (
                            heroIndex + 1
                        ) %
                        heroSlides.length
                    );

                }else{

                    render(
                        (
                            heroIndex -
                            1 +
                            heroSlides.length
                        ) %
                        heroSlides.length
                    );

                }

                restart();

            }
        );

    }

    function restart(){

        clearInterval(heroTimer);

        heroTimer =
            window.setInterval(
                ()=>{
                    render(
                        (
                            heroIndex + 1
                        ) %
                        heroSlides.length
                    );
                },
                6000
            );

    }

    render(0);
    restart();

}

/* ==========================================================
   PRODUCTS
   ========================================================== */

function initialiseProducts(root){

    root
        .querySelectorAll("[data-product]")
        .forEach(card=>{

            card.addEventListener(
                "click",
                ()=>{

                    const product =
                        card.dataset.product;

                    if(!product){
                        return;
                    }

                    navigate(
                        "/" + product
                    );

                }
            );

        });

}

/* ==========================================================
   NAVIGATION
   ========================================================== */

function initialiseNavigation(root){

    root
        .querySelector("#heroProducts")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/products");
            }
        );

    root
        .querySelector("#heroAbout")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/about");
            }
        );

    root
        .querySelector("#viewProducts")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/products");
            }
        );

    root
        .querySelector("#finalProducts")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/products");
            }
        );

    root
        .querySelector("#finalContact")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/contact");
            }
        );

}

/* ==========================================================
   MEDIA
   ========================================================== */

function initialiseMedia(root){

    const slides =
        [...root.querySelectorAll(
            "[data-media-slide]"
        )];

    const thumbs =
        [...root.querySelectorAll(
            "[data-media-thumb]"
        )];

    const current =
        root.querySelector(
            "#mediaCurrent"
        );

    if(!slides.length){
        return;
    }

    mediaIndex = 0;

    function render(index){

        mediaIndex = index;

        slides.forEach(
            (slide,i)=>{
                slide.classList.toggle(
                    "is-active",
                    i === index
                );
            }
        );

        thumbs.forEach(
            (thumb,i)=>{
                thumb.classList.toggle(
                    "is-active",
                    i === index
                );
            }
        );

        if(current){

            current.textContent =
                String(index + 1)
                    .padStart(2,"0");

        }

    }

    thumbs.forEach(
        thumb=>{

            thumb.addEventListener(
                "click",
                ()=>{

                    render(
                        Number(
                            thumb.dataset.mediaThumb
                        )
                    );

                    restart();

                }
            );

        }
    );

    function restart(){

        clearInterval(mediaTimer);

        mediaTimer =
            window.setInterval(
                ()=>{
                    render(
                        (
                            mediaIndex + 1
                        ) %
                        mediaSlides.length
                    );
                },
                5000
            );

    }

    render(0);
    restart();

}

/* ==========================================================
   CLEANUP
   ========================================================== */

function clearTimers(){

    if(heroTimer){

        clearInterval(heroTimer);
        heroTimer = null;

    }

    if(mediaTimer){

        clearInterval(mediaTimer);
        mediaTimer = null;

    }

}
