/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Immersive Editorial Experience
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple } from "../js/animations.js";

/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";

const HOME_PRODUCTS = [

    {
        id: "angel",
        title: "Angel Moon",
        category: "WELLNESS",
        micro: "CUIDADO FEMININO",
        image: "./assets/products/angel.png",
        tone: "#d2b16a",
        line: "Conforto. Cuidado. Confiança."
    },

    {
        id: "ezeno",
        title: "EZENO",
        category: "ORAL CARE",
        micro: "SAÚDE ORAL",
        image: "./assets/products/ezeno.png",
        tone: "#9c8b67",
        line: "O cuidado começa no detalhe."
    },

    {
        id: "zenbru",
        title: "Zenbru",
        category: "LIFESTYLE",
        micro: "CAFÉ FUNCIONAL",
        image: "./assets/products/zenbru.png",
        tone: "#9a6d3a",
        line: "Sabor com identidade."
    },

    {
        id: "alpha",
        title: "Alpha Vmax",
        category: "PERFORMANCE",
        micro: "PERFORMANCE",
        image: "./assets/products/alpha.png",
        tone: "#8c6e3b",
        line: "Eleve a experiência."
    },

    {
        id: "alphameta",
        title: "AlphaMeta",
        category: "NUTRIÇÃO",
        micro: "NUTRIÇÃO",
        image: "./assets/products/alphameta.png",
        tone: "#c5a56a",
        line: "Uma nova dimensão."
    },

    {
        id: "minoseed",
        title: "Minoseed",
        category: "BEAUTY",
        micro: "BELEZA & BEM-ESTAR",
        image: "./assets/products/minoseed.png",
        tone: "#ae8f72",
        line: "Cuidado que acompanha."
    },

    {
        id: "evador",
        title: "Evador",
        category: "PREMIUM CARE",
        micro: "CUIDADOS PREMIUM",
        image: "./assets/products/evador.png",
        tone: "#b19467",
        line: "Elegância também é cuidado."
    },

    {
        id: "alphaspin-ultra",
        title: "AlphaSpin Ultra",
        category: "SMART LIVING",
        micro: "SMART LIVING",
        image: "./assets/products/alphaspin-ultra.png",
        tone: "#978a6e",
        line: "Tecnologia com propósito."
    },

    {
        id: "ismarts3",
        title: "iSMART S3",
        category: "SMART LIVING",
        micro: "SMART LIVING",
        image: "./assets/products/ismarts3.png",
        tone: "#b29b6b",
        line: "O futuro entra em casa."
    }

];

const HERO_SLIDES = [

    {
        eyebrow: "AD LIFESTYLE",
        kicker: "WELLNESS · LIFESTYLE · EVOLUTION",
        title: "Não é apenas",
        accent: "Lifestyle.",
        copy:
            "É uma nova forma de descobrir, escolher e evoluir.",
        product: 0
    },

    {
        eyebrow: "WELLNESS",
        kicker: "CUIDADO · CONFORTO · EXPERIÊNCIA",
        title: "Viva melhor.",
        accent: "Comece por si.",
        copy:
            "Soluções pensadas para acompanhar o quotidiano.",
        product: 1
    },

    {
        eyebrow: "LIFESTYLE",
        kicker: "SABOR · RITUAL · IDENTIDADE",
        title: "Transforme",
        accent: "o seu ritmo.",
        copy:
            "Porque os pequenos rituais também definem a experiência.",
        product: 2
    },

    {
        eyebrow: "SMART LIVING",
        kicker: "TECNOLOGIA · CONFORTO · INOVAÇÃO",
        title: "O futuro",
        accent: "já começou.",
        copy:
            "Descubra uma relação diferente entre tecnologia e quotidiano.",
        product: 8
    },

    {
        eyebrow: "EVOLUTION",
        kicker: "CONHECIMENTO · LIDERANÇA · OPORTUNIDADE",
        title: "O produto é",
        accent: "só o começo.",
        copy:
            "Existe uma dimensão maior: aprender, crescer e construir.",
        product: 5
    },

    {
        eyebrow: "AD LIFESTYLE",
        kicker: "DISCOVER · CONNECT · EVOLVE",
        title: "Descubra",
        accent: "o próximo capítulo.",
        copy:
            "A jornada ainda está a começar.",
        product: 7
    }

];

const MEMORY_ITEMS = [

    {
        image: "./assets/images/insta1.jpg",
        label: "AD LIFESTYLE",
        title: "Uma comunidade em movimento."
    },

    {
        image: "./assets/images/insta2.jpg",
        label: "EXPERIÊNCIA",
        title: "Momentos que ficam."
    },

    {
        image: "./assets/images/insta3.jpg",
        label: "EVENTOS",
        title: "Conhecimento que ganha vida."
    },

    {
        image: "./assets/images/insta4.jpg",
        label: "JORNADA",
        title: "Estamos apenas a começar."
    }

];

/* ==========================================================
   ESTADO
   ========================================================== */

let heroIndex = 0;
let memoryIndex = 0;

let heroInterval = null;
let memoryInterval = null;

let rafId = null;

let pointerX = 0;
let pointerY = 0;

let targetX = 0;
let targetY = 0;

/* ==========================================================
   LOAD HOME
   ========================================================== */

export function loadHome(){

    destroyHome();

    applyTheme("default");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <main class="home-page">

            ${hero()}

            ${signalStrip()}

            ${manifesto()}

            ${ecosystem()}

            ${products()}

            ${experience()}

            ${memories()}

            ${testimonial()}

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
            data-home-canvas>

            <div class="home-hero-noise"></div>

            <div
                class="home-hero-light"
                id="heroLight">
            </div>

            <div class="home-hero-grid-lines"></div>

            <div class="home-hero-container">

                <div class="home-hero-copy">

                    <div class="home-brand-lockup">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle">

                        <div>

                            <strong>
                                AD LIFESTYLE
                            </strong>

                            <span>
                                LUANDA · ANGOLA
                            </span>

                        </div>

                    </div>

                    <div class="home-hero-slides">

                        ${HERO_SLIDES.map(
                            (slide,index)=>`

                                <article
                                    class="
                                        home-hero-slide
                                        ${
                                            index === 0
                                                ? "is-active"
                                                : ""
                                        }
                                    "
                                    data-hero-slide="${index}">

                                    <div
                                        class="home-hero-eyebrow">
                                        ${slide.eyebrow}
                                    </div>

                                    <div
                                        class="home-hero-kicker">
                                        ${slide.kicker}
                                    </div>

                                    <h1>

                                        ${slide.title}

                                        <span>
                                            ${slide.accent}
                                        </span>

                                    </h1>

                                    <p>
                                        ${slide.copy}
                                    </p>

                                </article>

                            `
                        ).join("")}

                    </div>

                    <div class="home-hero-actions">

                        <button
                            type="button"
                            class="
                                home-action
                                home-action-primary
                            "
                            id="heroExplore">

                            Explorar universo

                            <span>→</span>

                        </button>

                        <button
                            type="button"
                            class="
                                home-action
                                home-action-secondary
                            "
                            id="heroStory">

                            Conhecer a nossa história

                            <span>↗</span>

                        </button>

                    </div>

                    <div class="home-hero-navigation">

                        <button
                            type="button"
                            class="home-hero-arrow"
                            id="heroPrev"
                            aria-label="Anterior">

                            ←

                        </button>

                        <div class="home-hero-progress">

                            <div
                                class="home-hero-progress-fill"
                                id="heroProgress">
                            </div>

                        </div>

                        <button
                            type="button"
                            class="home-hero-arrow"
                            id="heroNext"
                            aria-label="Seguinte">

                            →

                        </button>

                        <div class="home-hero-count">

                            <strong id="heroCount">
                                01
                            </strong>

                            <span>
                                /
                            </span>

                            <span>
                                06
                            </span>

                        </div>

                    </div>

                </div>

                <div class="home-hero-scene">

                    <div
                        class="home-hero-halo"
                        id="heroHalo">
                    </div>

                    <div class="home-hero-orbit orbit-a"></div>
                    <div class="home-hero-orbit orbit-b"></div>

                    <div class="home-hero-product-core">

                        ${HOME_PRODUCTS.map(
                            (product,index)=>`

                                <div
                                    class="
                                        home-hero-product
                                        ${
                                            index === 0
                                                ? "is-active"
                                                : ""
                                        }
                                    "
                                    data-hero-product="${index}">

                                    <img
                                        src="${product.image}"
                                        alt="${product.title}"
                                        loading="${
                                            index === 0
                                                ? "eager"
                                                : "lazy"
                                        }">

                                </div>

                            `
                        ).join("")}

                    </div>

                    <div
                        class="
                            home-hero-constellation
                            constellation-one
                        "
                        data-parallax="1">

                        <span>
                            WELLNESS
                        </span>

                    </div>

                    <div
                        class="
                            home-hero-constellation
                            constellation-two
                        "
                        data-parallax="2">

                        <span>
                            SMART
                        </span>

                    </div>

                    <div
                        class="
                            home-hero-constellation
                            constellation-three
                        "
                        data-parallax="3">

                        <span>
                            EVOLVE
                        </span>

                    </div>

                    <div class="home-hero-orbit-brand">

                        <img
                            src="./assets/images/bzzworld.png"
                            alt="BZZWorld">

                        <span></span>

                        <img
                            src="./assets/images/a21.png"
                            alt="Academy Twenty One">

                    </div>

                    <div class="home-hero-product-caption">

                        <span id="heroProductCategory">
                            WELLNESS
                        </span>

                        <strong id="heroProductTitle">
                            Angel Moon
                        </strong>

                    </div>

                </div>

            </div>

            <div class="home-hero-footer">

                <span>
                    SCROLL TO DISCOVER
                </span>

                <div></div>

                <span>
                    AD / 01
                </span>

            </div>

        </section>

    `;

}

/* ==========================================================
   SIGNAL STRIP
   ========================================================== */

function signalStrip(){

    return `

        <section class="home-signal">

            <div class="home-signal-track">

                <span>
                    WELLNESS
                </span>

                <i>✦</i>

                <span>
                    LIFESTYLE
                </span>

                <i>✦</i>

                <span>
                    EVOLUTION
                </span>

                <i>✦</i>

                <span>
                    SMART LIVING
                </span>

                <i>✦</i>

                <span>
                    WELLNESS
                </span>

                <i>✦</i>

                <span>
                    LIFESTYLE
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

                <div class="home-manifesto-top reveal">

                    <span class="home-overline">
                        MANIFESTO
                    </span>

                    <span>
                        01 / 04
                    </span>

                </div>

                <div class="home-manifesto-text reveal">

                    <p>
                        Acreditamos que
                    </p>

                    <h2>
                        viver melhor
                        <span>
                            começa por descobrir melhor.
                        </span>
                    </h2>

                </div>

                <div class="home-manifesto-bottom reveal">

                    <span>
                        Produto
                    </span>

                    <span>
                        Experiência
                    </span>

                    <span>
                        Conhecimento
                    </span>

                    <span>
                        Possibilidade
                    </span>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   ECOSYSTEM
   ========================================================== */

function ecosystem(){

    return `

        <section class="home-ecosystem">

            <div class="home-container">

                <div class="home-ecosystem-intro reveal">

                    <span class="home-overline">
                        ECOSSISTEMA
                    </span>

                    <h2>
                        Duas dimensões.
                        <span>
                            Uma direcção.
                        </span>
                    </h2>

                </div>

                <div class="home-worlds">

                    <article
                        class="
                            home-world
                            home-world-products
                            reveal
                        "
                        data-world="bzz">

                        <div class="home-world-image">

                            <div class="home-world-glow"></div>

                            <img
                                src="./assets/images/bzzworld.png"
                                alt="BZZWorld">

                        </div>

                        <div class="home-world-content">

                            <div class="home-world-index">
                                01
                            </div>

                            <span>
                                WELLNESS · PRODUCTS
                            </span>

                            <h3>
                                BZZWorld
                            </h3>

                            <p>
                                O universo onde produtos,
                                bem-estar e Lifestyle se encontram.
                            </p>

                            <a
                                href="https://www.bzzworld.com/"
                                target="_blank"
                                rel="noopener noreferrer">

                                Explorar BZZWorld
                                <span>↗</span>

                            </a>

                        </div>

                    </article>

                    <article
                        class="
                            home-world
                            home-world-academy
                            reveal
                        "
                        data-world="academy">

                        <div class="home-world-image">

                            <div class="home-world-number">
                                21
                            </div>

                            <img
                                src="./assets/images/a21.png"
                                alt="Academy Twenty One">

                        </div>

                        <div class="home-world-content">

                            <div class="home-world-index">
                                02
                            </div>

                            <span>
                                LEARNING · EVOLUTION
                            </span>

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

                                Explorar Academy 21
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

function products(){

    const featured = [
        HOME_PRODUCTS[0],
        HOME_PRODUCTS[1],
        HOME_PRODUCTS[2],
        HOME_PRODUCTS[8]
    ];

    return `

        <section
            class="home-products"
            id="homeProducts">

            <div class="home-container">

                <div class="home-products-head reveal">

                    <div>

                        <span class="home-overline">
                            SELECTED OBJECTS
                        </span>

                        <h2>
                            Alguns universos.
                            <span>
                                Uma só experiência.
                            </span>
                        </h2>

                    </div>

                    <button
                        type="button"
                        class="home-minimal-button"
                        id="openProducts">

                        Ver todos
                        <span>→</span>

                    </button>

                </div>

                <div class="home-products-rail">

                    ${featured.map(
                        (product,index)=>`

                            <article
                                class="
                                    home-product-item
                                    reveal
                                "
                                data-product="${product.id}">

                                <div class="home-product-number">
                                    0${index + 1}
                                </div>

                                <div class="home-product-item-image">

                                    <div
                                        class="home-product-item-glow"
                                        style="
                                            --product-tone:
                                            ${product.tone};
                                        ">
                                    </div>

                                    <img
                                        src="${product.image}"
                                        alt="${product.title}"
                                        loading="lazy">

                                </div>

                                <div class="home-product-item-meta">

                                    <div>

                                        <span>
                                            ${product.micro}
                                        </span>

                                        <h3>
                                            ${product.title}
                                        </h3>

                                        <p>
                                            ${product.line}
                                        </p>

                                    </div>

                                    <strong>
                                        ↗
                                    </strong>

                                </div>

                            </article>

                        `
                    ).join("")}

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   EXPERIENCE / EVENT
   ========================================================== */

function experience(){

    return `

        <section class="home-experience">

            <div class="home-container">

                <div class="home-experience-grid reveal">

                    <div class="home-experience-side">

                        <span class="home-overline">
                            NEXT EXPERIENCE
                        </span>

                        <div class="home-experience-number">
                            20
                        </div>

                        <span class="home-experience-month">
                            SETEMBRO · 2026
                        </span>

                    </div>

                    <div class="home-experience-main">

                        <span>
                            DOMINGO · 15H00
                        </span>

                        <h2>
                            Grande Apresentação
                            de <em>Dupla Oportunidade.</em>
                        </h2>

                        <p>
                            Saúde, bem-estar, longevidade,
                            aprendizagem e negócios internacionais
                            num único encontro.
                        </p>

                        <div class="home-experience-footer">

                            <div>

                                <strong>
                                    FLY HOTEL
                                </strong>

                                <span>
                                    Luanda · Antigo Aeroporto Doméstico
                                </span>

                            </div>

                            <button
                                type="button"
                                class="home-minimal-button"
                                id="openEvents">

                                Ver evento
                                <span>→</span>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   MEMORIES
   ========================================================== */

function memories(){

    return `

        <section class="home-memories">

            <div class="home-container">

                <div class="home-memories-head reveal">

                    <div>

                        <span class="home-overline">
                            MEMORY REEL
                        </span>

                        <h2>
                            A marca também
                            <span>
                                acontece.
                            </span>
                        </h2>

                    </div>

                    <div class="home-memory-counter">

                        <strong id="memoryCounter">
                            01
                        </strong>

                        <span>
                            /
                        </span>

                        <span>
                            04
                        </span>

                    </div>

                </div>

                <div class="home-memory-stage reveal">

                    ${MEMORY_ITEMS.map(
                        (item,index)=>`

                            <article
                                class="
                                    home-memory-slide
                                    ${
                                        index === 0
                                            ? "is-active"
                                            : ""
                                    }
                                "
                                data-memory-slide="${index}">

                                <img
                                    src="${item.image}"
                                    alt="${item.title}"
                                    loading="lazy">

                                <div
                                    class="home-memory-caption">

                                    <span>
                                        ${item.label}
                                    </span>

                                    <strong>
                                        ${item.title}
                                    </strong>

                                </div>

                            </article>

                        `
                    ).join("")}

                    <div class="home-memory-controls">

                        <button
                            type="button"
                            id="memoryPrev"
                            aria-label="Anterior">

                            ←

                        </button>

                        <button
                            type="button"
                            id="memoryNext"
                            aria-label="Seguinte">

                            →

                        </button>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   TESTIMONIAL
   ========================================================== */

function testimonial(){

    return `

        <section class="home-testimonial">

            <div class="home-container">

                <div class="home-testimonial-mark reveal">
                    “
                </div>

                <div class="home-testimonial-content reveal">

                    <span class="home-overline">
                        COMMUNITY VOICE
                    </span>

                    <blockquote>
                        Descobri que por trás dos produtos
                        existe uma visão muito maior sobre
                        <em>desenvolvimento e evolução.</em>
                    </blockquote>

                    <div class="home-testimonial-author">

                        <span>
                            MARIA
                        </span>

                        <small>
                            Comunidade AD Lifestyle
                        </small>

                    </div>

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

            <div class="home-final-glow"></div>

            <div class="home-container">

                <div class="home-final-content reveal">

                    <span class="home-overline">
                        AD LIFESTYLE
                    </span>

                    <div class="home-final-title-wrap">

                        <span class="home-final-ghost">
                            AD
                        </span>

                        <h2>
                            A próxima descoberta
                            <span>
                                começa onde a curiosidade encontra
                                uma nova possibilidade.
                            </span>
                        </h2>

                    </div>

                    <div class="home-final-actions">

                        <button
                            type="button"
                            class="
                                home-action
                                home-action-primary
                            "
                            id="finalProducts">

                            Explorar produtos
                            <span>→</span>

                        </button>

                        <button
                            type="button"
                            class="
                                home-action
                                home-action-dark
                            "
                            id="finalContact">

                            Falar connosco
                            <span>↗</span>

                        </button>

                    </div>

                </div>

                <div class="home-final-bottom">

                    <span>
                        LUANDA · ANGOLA
                    </span>

                    <span>
                        WELLNESS
                    </span>

                    <span>
                        LIFESTYLE
                    </span>

                    <span>
                        EVOLUTION
                    </span>

                    <span>
                        © AD LIFESTYLE
                    </span>

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
        .querySelectorAll(".home-action")
        .forEach(button=>{
            ripple(button);
        });

    initialiseHero(root);
    initialiseNavigation(root);
    initialiseProducts(root);
    initialiseMemories(root);
    initialiseReveal(root);
    initialisePointer(root);
    initialiseWorldHover(root);
    initialiseKeyboard(root);

}

/* ==========================================================
   HERO
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

    const current =
        root.querySelector(
            "#heroCount"
        );

    const progress =
        root.querySelector(
            "#heroProgress"
        );

    const productTitle =
        root.querySelector(
            "#heroProductTitle"
        );

    const productCategory =
        root.querySelector(
            "#heroProductCategory"
        );

    const halo =
        root.querySelector(
            "#heroHalo"
        );

    if(!slides.length){
        return;
    }

    heroIndex = 0;

    function render(index){

        heroIndex = index;

        slides.forEach(
            (slide,i)=>{
                slide.classList.toggle(
                    "is-active",
                    i === index
                );
            }
        );

        const productIndex =
            HERO_SLIDES[index].product;

        products.forEach(
            (product,i)=>{
                product.classList.toggle(
                    "is-active",
                    i === productIndex
                );
            }
        );

        const activeProduct =
            HOME_PRODUCTS[productIndex];

        if(
            productTitle &&
            activeProduct
        ){

            productTitle.textContent =
                activeProduct.title;

        }

        if(
            productCategory &&
            activeProduct
        ){

            productCategory.textContent =
                activeProduct.category;

        }

        if(halo){

            halo.style.setProperty(
                "--hero-tone",
                activeProduct?.tone || "#c8a052"
            );

        }

        if(current){

            current.textContent =
                String(index + 1)
                    .padStart(2,"0");

        }

        if(progress){

            progress.style.animation =
                "none";

            void progress.offsetWidth;

            progress.style.animation =
                "homeHeroProgress 6s linear forwards";

        }

    }

    function next(){

        render(
            (heroIndex + 1) %
            HERO_SLIDES.length
        );

        restart();

    }

    function previous(){

        render(
            (
                heroIndex -
                1 +
                HERO_SLIDES.length
            ) %
            HERO_SLIDES.length
        );

        restart();

    }

    root
        .querySelector("#heroNext")
        ?.addEventListener(
            "click",
            next
        );

    root
        .querySelector("#heroPrev")
        ?.addEventListener(
            "click",
            previous
        );

    function restart(){

        window.clearInterval(
            heroInterval
        );

        heroInterval =
            window.setInterval(
                next,
                6000
            );

    }

    const scene =
        root.querySelector(
            ".home-hero-scene"
        );

    if(scene){

        let startX = 0;

        scene.addEventListener(
            "pointerdown",
            event=>{
                startX = event.clientX;
            }
        );

        scene.addEventListener(
            "pointerup",
            event=>{

                const difference =
                    event.clientX - startX;

                if(
                    Math.abs(difference) < 45
                ){
                    return;
                }

                difference < 0
                    ? next()
                    : previous();

            }
        );

    }

    render(0);
    restart();

}

/* ==========================================================
   NAVIGATION
   ========================================================== */

function initialiseNavigation(root){

    root
        .querySelector("#heroExplore")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/products");
            }
        );

    root
        .querySelector("#heroStory")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/about");
            }
        );

    root
        .querySelector("#openProducts")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/products");
            }
        );

    root
        .querySelector("#openEvents")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/events");
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
   PRODUCTS
   ========================================================== */

function initialiseProducts(root){

    root
        .querySelectorAll("[data-product]")
        .forEach(
            card=>{

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

            }
        );

}

/* ==========================================================
   MEMORY
   ========================================================== */

function initialiseMemories(root){

    const slides =
        [...root.querySelectorAll(
            "[data-memory-slide]"
        )];

    const counter =
        root.querySelector(
            "#memoryCounter"
        );

    if(!slides.length){
        return;
    }

    memoryIndex = 0;

    function render(index){

        memoryIndex = index;

        slides.forEach(
            (slide,i)=>{
                slide.classList.toggle(
                    "is-active",
                    i === index
                );
            }
        );

        if(counter){

            counter.textContent =
                String(index + 1)
                    .padStart(2,"0");

        }

    }

    function next(){

        render(
            (memoryIndex + 1) %
            slides.length
        );

        restart();

    }

    function previous(){

        render(
            (
                memoryIndex -
                1 +
                slides.length
            ) %
            slides.length
        );

        restart();

    }

    root
        .querySelector("#memoryNext")
        ?.addEventListener(
            "click",
            next
        );

    root
        .querySelector("#memoryPrev")
        ?.addEventListener(
            "click",
            previous
        );

    function restart(){

        window.clearInterval(
            memoryInterval
        );

        memoryInterval =
            window.setInterval(
                next,
                5000
            );

    }

    render(0);
    restart();

}

/* ==========================================================
   REVEAL
   ========================================================== */

function initialiseReveal(root){

    const elements =
        root.querySelectorAll(
            ".reveal"
        );

    if(
        !("IntersectionObserver" in window)
    ){

        elements.forEach(
            element=>{
                element.classList.add(
                    "is-visible"
                );
            }
        );

        return;
    }

    const observer =
        new IntersectionObserver(
            entries=>{

                entries.forEach(
                    entry=>{

                        if(
                            entry.isIntersecting
                        ){

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:.12,
                rootMargin:"0px 0px -8% 0px"
            }
        );

    elements.forEach(
        element=>{
            observer.observe(element);
        }
    );

}

/* ==========================================================
   POINTER / SPOTLIGHT / PARALLAX
   ========================================================== */

function initialisePointer(root){

    const hero =
        root.querySelector(
            "[data-home-canvas]"
        );

    if(!hero){
        return;
    }

    const light =
        root.querySelector(
            "#heroLight"
        );

    const halo =
        root.querySelector(
            "#heroHalo"
        );

    const objects =
        [
            ...root.querySelectorAll(
                "[data-parallax]"
            )
        ];

    function pointerMove(event){

        const rect =
            hero.getBoundingClientRect();

        pointerX =
            event.clientX -
            rect.left -
            rect.width / 2;

        pointerY =
            event.clientY -
            rect.top -
            rect.height / 2;

        targetX =
            pointerX /
            rect.width;

        targetY =
            pointerY /
            rect.height;

        if(
            light
        ){

            light.style.setProperty(
                "--pointer-x",
                `${event.clientX - rect.left}px`
            );

            light.style.setProperty(
                "--pointer-y",
                `${event.clientY - rect.top}px`
            );

        }

        if(
            !rafId
        ){

            rafId =
                window.requestAnimationFrame(
                    animatePointer
                );

        }

    }

    function animatePointer(){

        rafId = null;

        objects.forEach(
            object=>{

                const depth =
                    Number(
                        object.dataset.parallax
                    ) || 1;

                object.style.transform =
                    `
                        translate3d(
                            ${targetX * depth * 18}px,
                            ${targetY * depth * 12}px,
                            0
                        )
                    `;

            }
        );

        if(halo){

            halo.style.transform =
                `
                    translate(
                        ${targetX * 8}px,
                        ${targetY * 8}px
                    )
                `;

        }

    }

    hero.addEventListener(
        "pointermove",
        pointerMove
    );

    hero.addEventListener(
        "pointerleave",
        ()=>{

            objects.forEach(
                object=>{
                    object.style.transform =
                        "translate3d(0,0,0)";
                }
            );

        }
    );

}

/* ==========================================================
   WORLD HOVER
   ========================================================== */

function initialiseWorldHover(root){

    root
        .querySelectorAll(".home-world")
        .forEach(world=>{

            world.addEventListener(
                "pointermove",
                event=>{

                    const rect =
                        world.getBoundingClientRect();

                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) / rect.width;

                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) / rect.height;

                    world.style.setProperty(
                        "--world-x",
                        `${(x - .5) * 10}deg`
                    );

                    world.style.setProperty(
                        "--world-y",
                        `${(y - .5) * -10}deg`
                    );

                }
            );

            world.addEventListener(
                "pointerleave",
                ()=>{
                    world.style.setProperty(
                        "--world-x",
                        "0deg"
                    );

                    world.style.setProperty(
                        "--world-y",
                        "0deg"
                    );
                }
            );

        });

}

/* ==========================================================
   KEYBOARD
   ========================================================== */

function initialiseKeyboard(root){

    document.addEventListener(
        "keydown",
        event=>{

            const active =
                document.activeElement;

            const isTyping =
                active &&
                (
                    active.tagName === "INPUT" ||
                    active.tagName === "TEXTAREA" ||
                    active.isContentEditable
                );

            if(isTyping){
                return;
            }

            if(
                event.key === "ArrowRight"
            ){

                root
                    .querySelector("#heroNext")
                    ?.click();

            }

            if(
                event.key === "ArrowLeft"
            ){

                root
                    .querySelector("#heroPrev")
                    ?.click();

            }

        }
    );

}

/* ==========================================================
   CLEANUP
   ========================================================== */

function destroyHome(){

    if(heroInterval){

        window.clearInterval(
            heroInterval
        );

        heroInterval = null;

    }

    if(memoryInterval){

        window.clearInterval(
            memoryInterval
        );

        memoryInterval = null;

    }

    if(rafId){

        window.cancelAnimationFrame(
            rafId
        );

        rafId = null;

    }

}
