/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Immersive Brand Experience
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple } from "../js/animations.js";

/* ==========================================================
   ESTADO
   ========================================================== */

let heroIndex = 0;
let mediaIndex = 0;

let heroTimer = null;
let mediaTimer = null;

let pointerFrame = null;

/* ==========================================================
   PRODUTOS
   ========================================================== */

const PRODUCTS = [

    {
        id: "angel",
        name: "Angel Moon",
        category: "FEMININO",
        universe: "WELLNESS",
        label: "Cuidado feminino",
        image: "./assets/products/angel.png",
        tone: "#d5b676",
        atmosphere: "#efe3c8"
    },

    {
        id: "ezeno",
        name: "EZENO",
        category: "SAÚDE ORAL",
        universe: "WELLNESS",
        label: "Saúde oral",
        image: "./assets/products/ezeno.png",
        tone: "#9b8354",
        atmosphere: "#ded7c7"
    },

    {
        id: "zenbru",
        name: "Zenbru",
        category: "CAFÉ",
        universe: "LIFESTYLE",
        label: "Café & lifestyle",
        image: "./assets/products/zenbru.png",
        tone: "#9b6b36",
        atmosphere: "#e3d1bb"
    },

    {
        id: "alpha",
        name: "Alpha Vmax",
        category: "PERFORMANCE",
        universe: "PERFORMANCE",
        label: "Performance",
        image: "./assets/products/alpha.png",
        tone: "#897047",
        atmosphere: "#ddd4c4"
    },

    {
        id: "alphameta",
        name: "AlphaMeta",
        category: "NUTRIÇÃO",
        universe: "WELLNESS",
        label: "Nutrição",
        image: "./assets/products/alphameta.png",
        tone: "#bc9b60",
        atmosphere: "#e9dfc9"
    },

    {
        id: "minoseed",
        name: "Minoseed",
        category: "BELEZA",
        universe: "WELLNESS",
        label: "Beleza & bem-estar",
        image: "./assets/products/minoseed.png",
        tone: "#ab8970",
        atmosphere: "#e8ddd4"
    },

    {
        id: "evador",
        name: "Evador",
        category: "PREMIUM CARE",
        universe: "LIFESTYLE",
        label: "Cuidados premium",
        image: "./assets/products/evador.png",
        tone: "#b39a70",
        atmosphere: "#e8dfce"
    },

    {
        id: "alphaspin-ultra",
        name: "AlphaSpin Ultra",
        category: "SMART LIVING",
        universe: "SMART LIVING",
        label: "Tecnologia",
        image: "./assets/products/alphaspin-ultra.png",
        tone: "#938970",
        atmosphere: "#dddcd4"
    },

    {
        id: "ismarts3",
        name: "iSMART S3",
        category: "SMART LIVING",
        universe: "SMART LIVING",
        label: "Smart living",
        image: "./assets/products/ismarts3.png",
        tone: "#b09b6c",
        atmosphere: "#e7dfcd"
    }

];

/* ==========================================================
   HERO
   ========================================================== */

const HERO = [

    {
        product: 0,
        eyebrow: "AD LIFESTYLE",
        pretitle: "WELLNESS · LIFESTYLE · EVOLUTION",
        title: "A sua vida.",
        accent: "A sua experiência.",
        copy:
            "Uma nova visão sobre bem-estar, Lifestyle e evolução."
    },

    {
        product: 1,
        eyebrow: "WELLNESS",
        pretitle: "CUIDADO · CONFORTO · ROTINA",
        title: "Comece pelo",
        accent: "cuidado.",
        copy:
            "Pequenos detalhes podem transformar a forma como vivemos o quotidiano."
    },

    {
        product: 2,
        eyebrow: "LIFESTYLE",
        pretitle: "SABOR · ENERGIA · RITUAL",
        title: "Crie o seu",
        accent: "próprio ritmo.",
        copy:
            "Experiências que acompanham os seus momentos e os seus hábitos."
    },

    {
        product: 8,
        eyebrow: "SMART LIVING",
        pretitle: "TECNOLOGIA · CONFORTO · INOVAÇÃO",
        title: "O futuro",
        accent: "já entrou em casa.",
        copy:
            "Tecnologia pensada para aproximar inovação, conforto e quotidiano."
    },

    {
        product: 3,
        eyebrow: "PERFORMANCE",
        pretitle: "FOCO · PERFORMANCE · EVOLUTION",
        title: "Não fique",
        accent: "no mesmo lugar.",
        copy:
            "Uma experiência orientada para quem procura evolução."
    }

];

/* ==========================================================
   MEMÓRIAS
   ========================================================== */

const MEMORIES = [

    {
        image: "./assets/images/h1.png",
        label: "MEMÓRIA 01",
        title: "O início de uma experiência."
    },

    {
        image: "./assets/images/h2.png",
        label: "MEMÓRIA 02",
        title: "Pessoas que fazem parte da jornada."
    },

    {
        image: "./assets/images/h3.png",
        label: "MEMÓRIA 03",
        title: "Encontros que ganham significado."
    },

    {
        image: "./assets/images/h4.png",
        label: "MEMÓRIA 04",
        title: "Uma visão que continua a crescer."
    }

];

/* ==========================================================
   LOAD
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

            ${identityStrip()}

            ${manifesto()}

            ${worlds()}

            ${productUniverses()}

            ${featuredProducts()}

            ${event()}

            ${memoryReel()}

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
            id="homeHero">

            <div class="home-hero-backdrop"></div>

            <div
                class="home-hero-atmosphere"
                id="heroAtmosphere">
            </div>

            <div class="home-hero-grid"></div>

            <div class="home-hero-container">

                <div class="home-hero-copy">

                        </div>

                    </div>

                    <div class="home-hero-content">

                        ${HERO.map(
                            (item,index)=>{

                                const product =
                                    PRODUCTS[item.product];

                                return `

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

                                        <span
                                            class="home-hero-eyebrow">
                                            ${item.eyebrow}
                                        </span>

                                        <span
                                            class="home-hero-pretitle">
                                            ${item.pretitle}
                                        </span>

                                        <h1>

                                            ${item.title}

                                            <span>
                                                ${item.accent}
                                            </span>

                                        </h1>

                                        <p>
                                            ${item.copy}
                                        </p>

                                        <div
                                            class="
                                                home-hero-product-tag
                                            ">

                                            <span>
                                                ${product.category}
                                            </span>

                                            <strong>
                                                ${product.name}
                                            </strong>

                                        </div>

                                    </article>

                                `;

                            }
                        ).join("")}

                    </div>

                    <div class="home-hero-actions">

                        <button
                            type="button"
                            class="home-action home-action-primary"
                            id="heroProducts">

                            Explorar produtos

                            <span>→</span>

                        </button>

                        <button
                            type="button"
                            class="home-action home-action-secondary"
                            id="heroAbout">

                            Conhecer a nossa visão

                            <span>↗</span>

                        </button>

                    </div>

                    <div class="home-hero-controls">

                        <button
                            type="button"
                            id="heroPrev"
                            aria-label="Slide anterior">

                            ←

                        </button>

                        <div class="home-hero-track">

                            <div
                                id="heroProgress">
                            </div>

                        </div>

                        <button
                            type="button"
                            id="heroNext"
                            aria-label="Próximo slide">

                            →

                        </button>

                        <div class="home-hero-number">

                            <strong id="heroCurrent">
                                01
                            </strong>

                            <span>
                                /
                            </span>

                            <span>
                                05
                            </span>

                        </div>

                    </div>

                </div>

                <div class="home-hero-visual">

                    <div
                        class="home-hero-aura"
                        id="heroAura">
                    </div>

                    <div class="home-hero-orbit orbit-one"></div>

                    <div class="home-hero-orbit orbit-two"></div>

                    <div class="home-hero-orbit orbit-three"></div>

                    <div class="home-hero-product-stage">

                        ${HERO.map(
                            (item,index)=>{

                                const product =
                                    PRODUCTS[item.product];

                                return `

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
                                            alt="${product.name}"
                                            loading="${
                                                index === 0
                                                    ? "eager"
                                                    : "lazy"
                                            }">

                                    </div>

                                `;

                            }
                        ).join("")}

                    </div>

                    <div class="home-hero-side-label label-left">
                        <span>
                            WELLNESS
                        </span>
                    </div>

                    <div class="home-hero-side-label label-right">
                        <span>
                            EVOLUTION
                        </span>
                    </div>

                    <div class="home-hero-product-index">

                        <span>
                            CURRENT OBJECT
                        </span>

                        <strong id="heroObject">
                            ANGEL MOON
                        </strong>

                    </div>

                </div>

            </div>

            <div class="home-hero-bottom">

                <span>
                    DISCOVER
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
   IDENTITY STRIP
   ========================================================== */

function identityStrip(){

    return `

        <section class="home-identity">

            <div class="home-identity-word">

                <span>
                    WELLNESS
                </span>

                <i>✦</i>

                <span>
                    LIFESTYLE
                </span>

                <i>✦</i>

                <span>
                    SMART LIVING
                </span>

                <i>✦</i>

                <span>
                    EVOLUTION
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

                <div class="home-manifesto-meta reveal">

                    <span>
                        01
                    </span>

                    <div></div>

                    <span>
                        MANIFESTO
                    </span>

                </div>

                <div class="home-manifesto-copy reveal">

                    <p>
                        Na AD Lifestyle
                    </p>

                    <h2>
                        viver melhor
                        <span>
                            é também descobrir melhor.
                        </span>
                    </h2>

                </div>

                <div class="home-manifesto-footer reveal">

                    <span>
                        Produtos
                    </span>

                    <span>
                        Experiências
                    </span>

                    <span>
                        Conhecimento
                    </span>

                    <span>
                        Possibilidades
                    </span>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   WORLDS
   ========================================================== */

function worlds(){

    return `

        <section class="home-worlds">

            <div class="home-container">

                <div class="home-worlds-header reveal">

                    <div>

                        <span class="home-overline">
                            ECOSSISTEMA
                        </span>

                        <h2>
                            Um universo de
                            <span>
                                possibilidades.
                            </span>
                        </h2>

                    </div>

                    <p>
                        Dois pilares. Uma experiência.
                    </p>

                </div>

                <div class="home-world-grid">

                    <article
                        class="home-world home-world-bzz reveal">

                        <div class="home-world-number">
                            01
                        </div>

                        <div class="home-world-image">

                            <div class="home-world-glow"></div>

                            <img
                                src="./assets/images/bzzworld.png"
                                alt="BZZWorld">

                        </div>

                        <div class="home-world-content">

                            <span>
                                WELLNESS · PRODUCTS
                            </span>

                            <h3>
                                BZZWorld
                            </h3>

                            <p>
                                Produtos e soluções que dão
                                forma à nossa dimensão de
                                bem-estar e Lifestyle.
                            </p>

                            <a
                                href="https://www.bzzworld.com/"
                                target="_blank"
                                rel="noopener noreferrer">

                                Explorar
                                <span>↗</span>

                            </a>

                        </div>

                    </article>

                    <article
                        class="home-world home-world-a21 reveal">

                        <div class="home-world-number">
                            02
                        </div>

                        <div class="home-world-image">

                            <div class="home-world-a21-number">
                                21
                            </div>

                            <img
                                src="./assets/images/a21.png"
                                alt="Academy Twenty One">

                        </div>

                        <div class="home-world-content">

                            <span>
                                LEARNING · LEADERSHIP
                            </span>

                            <h3>
                                Academy Twenty One
                            </h3>

                            <p>
                                Conhecimento, liderança,
                                desenvolvimento pessoal,
                                networking e educação
                                empreendedora.
                            </p>

                            <a
                                href="https://www.academytwentyone.com/"
                                target="_blank"
                                rel="noopener noreferrer">

                                Explorar
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
   PRODUCT UNIVERSES
   ========================================================== */

function productUniverses(){

    return `

        <section class="home-universes">

            <div class="home-container">

                <div class="home-universes-head reveal">

                    <span class="home-overline">
                        OS NOSSOS UNIVERSOS
                    </span>

                    <h2>
                        Três formas de
                        <span>
                            viver a experiência.
                        </span>
                    </h2>

                </div>

                <div class="home-universe-list">

                    <article class="home-universe reveal">

                        <span>
                            01
                        </span>

                        <div>

                            <small>
                                WELLNESS
                            </small>

                            <h3>
                                Bem-estar
                            </h3>

                        </div>

                        <p>
                            Cuidado, autocuidado,
                            nutrição e Lifestyle.
                        </p>

                    </article>

                    <article class="home-universe reveal">

                        <span>
                            02
                        </span>

                        <div>

                            <small>
                                LIFESTYLE
                            </small>

                            <h3>
                                Experiência
                            </h3>

                        </div>

                        <p>
                            Sabor, conforto,
                            beleza e experiências premium.
                        </p>

                    </article>

                    <article class="home-universe reveal">

                        <span>
                            03
                        </span>

                        <div>

                            <small>
                                SMART LIVING
                            </small>

                            <h3>
                                Inteligência
                            </h3>

                        </div>

                        <p>
                            Tecnologia, inovação
                            e soluções para o quotidiano.
                        </p>

                    </article>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   FEATURED PRODUCTS
   ========================================================== */

function featuredProducts(){

    const featured = [
        PRODUCTS[0],
        PRODUCTS[1],
        PRODUCTS[2],
        PRODUCTS[8]
    ];

    return `

        <section class="home-products">

            <div class="home-container">

                <div class="home-products-head reveal">

                    <div>

                        <span class="home-overline">
                            SELECTED PRODUCTS
                        </span>

                        <h2>
                            Comece por
                            <span>
                                descobrir.
                            </span>
                        </h2>

                    </div>

                    <button
                        type="button"
                        class="home-minimal-button"
                        id="allProducts">

                        Ver catálogo
                        <span>→</span>

                    </button>

                </div>

                <div class="home-product-gallery">

                    ${featured.map(
                        (product,index)=>`

                            <article
                                class="
                                    home-feature-product
                                    ${
                                        index === 0
                                            ? "home-feature-large"
                                            : ""
                                    }
                                    reveal
                                "
                                data-product="${product.id}">

                                <div class="home-feature-top">

                                    <span>
                                        0${index + 1}
                                    </span>

                                    <span>
                                        ${product.universe}
                                    </span>

                                </div>

                                <div class="home-feature-image">

                                    <div
                                        class="home-feature-aura"
                                        style="
                                            --product-tone:
                                            ${product.tone};
                                        ">
                                    </div>

                                    <img
                                        src="${product.image}"
                                        alt="${product.name}"
                                        loading="lazy">

                                </div>

                                <div class="home-feature-info">

                                    <small>
                                        ${product.category}
                                    </small>

                                    <h3>
                                        ${product.name}
                                    </h3>

                                    <p>
                                        ${product.line || product.label}
                                    </p>

                                    <span>
                                        Explorar ↗
                                    </span>

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
   EVENT
   ========================================================== */

function event(){

    return `

        <section class="home-event">

            <div class="home-container">

                <div class="home-event-intro reveal">

                    <span class="home-overline">
                        NEXT EXPERIENCE
                    </span>

                    <h2>
                        Um encontro.
                        <span>
                            Uma oportunidade.
                        </span>
                    </h2>

                </div>

                <article class="home-event-card reveal">

                    <div class="home-event-poster">

                        <img
                            src="./assets/images/independente.png"
                            alt="Grande Apresentação de Dupla Oportunidade"
                            loading="lazy">

                        <div class="home-event-poster-label">
                            AD LIFESTYLE
                        </div>

                    </div>

                    <div class="home-event-details">

                        <div class="home-event-number">
                            04<span>—05</span>
                        </div>

                        <span class="home-event-month">
                            OUTUBRO · 2026
                        </span>

                        <h3>
                            Grande Apresentação
                            de Dupla Oportunidade
                        </h3>

                        <p>
                            Dois dias dedicados a conhecimento,
                            bem-estar, desenvolvimento e negócios
                            internacionais.
                        </p>

                        <div class="home-event-info">

                            <div>

                                <span>
                                    LOCAL
                                </span>

                                <strong>
                                    Anfiteatro da
                                    Universidade Independente
                                </strong>

                            </div>

                            <div>

                                <span>
                                    DATA
                                </span>

                                <strong>
                                    4 e 5 de Outubro
                                </strong>

                            </div>

                            <div>

                                <span>
                                    CATEGORIAS
                                </span>

                                <strong>
                                    Wellness · Negócios · Educação
                                </strong>

                            </div>

                        </div>

                        <button
                            type="button"
                            class="home-action home-action-dark"
                            id="eventButton">

                            Mais informações

                            <span>→</span>

                        </button>

                    </div>

                </article>

            </div>

        </section>

    `;

}

/* ==========================================================
   MEMORY REEL
   ========================================================== */

function memoryReel(){

    return `

        <section class="home-memories">

            <div class="home-container">

                <div class="home-memory-head reveal">

                    <div>

                        <span class="home-overline">
                            MEMORY REEL
                        </span>

                        <h2>
                            A experiência
                            <span>
                                também se recorda.
                            </span>
                        </h2>

                    </div>

                    <div class="home-memory-count">

                        <strong id="memoryCurrent">
                            01
                        </strong>

                        <span>
                            / 04
                        </span>

                    </div>

                </div>

                <div class="home-memory-wrap reveal">

                    <div class="home-memory-stage">

                        ${MEMORIES.map(
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

                                    <div class="home-memory-caption">

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

                        <div class="home-memory-nav">

                            <button
                                type="button"
                                id="memoryPrev"
                                aria-label="Memória anterior">

                                ←

                            </button>

                            <button
                                type="button"
                                id="memoryNext"
                                aria-label="Próxima memória">

                                →

                            </button>

                        </div>

                    </div>

                    <aside class="home-memory-side">

                        <span>
                            FROM THE ARCHIVE
                        </span>

                        <strong>
                            Registos, encontros,
                            pessoas e momentos.
                        </strong>

                        <p>
                            Esta área está preparada para
                            crescer com fotografias, vídeos,
                            entrevistas e bastidores da
                            AD Lifestyle.
                        </p>

                    </aside>

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

                <div class="home-testimonial-main reveal">

                    <span class="home-overline">
                        COMMUNITY VOICE
                    </span>

                    <blockquote>
                        Descobri que por trás dos
                        produtos existe uma visão
                        muito maior sobre
                        <em>desenvolvimento e evolução.</em>
                    </blockquote>

                    <div class="home-testimonial-person">

                        <div class="home-testimonial-photo">

                            <img
                                src="./assets/images/maria.png"
                                alt="Maria"
                                onerror="
                                    this.onerror=null;
                                    this.src='./assets/images/avatar.png';
                                ">

                        </div>

                        <div>

                            <strong>
                                Maria
                            </strong>

                            <span>
                                Comunidade AD Lifestyle
                            </span>

                        </div>

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

            <div class="home-final-light"></div>

            <div class="home-container">

                <div class="home-final-content reveal">

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
                        Produtos, experiências,
                        conhecimento e novas possibilidades.
                    </p>

                    <div class="home-final-actions">

                        <button
                            type="button"
                            class="home-action home-action-primary"
                            id="finalProducts">

                            Explorar universo

                            <span>→</span>

                        </button>

                        <button
                            type="button"
                            class="home-action home-action-dark"
                            id="finalContact">

                            Falar connosco

                            <span>↗</span>

                        </button>

                    </div>

                </div>

                <footer class="home-final-footer">

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
                        SMART LIVING
                    </span>

                    <span>
                        EVOLUTION
                    </span>

                    <span>
                        © AD LIFESTYLE
                    </span>

                </footer>

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
    initialiseMemory(root);
    initialiseReveal(root);
    initialisePointer(root);
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
        root.querySelector("#heroCurrent");

    const progress =
        root.querySelector("#heroProgress");

    const object =
        root.querySelector("#heroObject");

    const atmosphere =
        root.querySelector("#heroAtmosphere");

    const aura =
        root.querySelector("#heroAura");

    if(!slides.length){
        return;
    }

    function render(index){

        heroIndex = index;

        const heroItem =
            HERO[index];

        const product =
            PRODUCTS[
                heroItem.product
            ];

        slides.forEach(
            (slide,i)=>{

                slide.classList.toggle(
                    "is-active",
                    i === index
                );

            }
        );

        products.forEach(
            (item,i)=>{

                item.classList.toggle(
                    "is-active",
                    i === heroItem.product
                );

            }
        );

        if(current){

            current.textContent =
                String(
                    index + 1
                ).padStart(2,"0");

        }

        if(object){

            object.textContent =
                product.name.toUpperCase();

        }

        if(
            atmosphere &&
            product
        ){

            atmosphere.style.setProperty(
                "--hero-atmosphere",
                product.atmosphere
            );

            atmosphere.style.setProperty(
                "--hero-tone",
                product.tone
            );

        }

        if(
            aura &&
            product
        ){

            aura.style.setProperty(
                "--hero-tone",
                product.tone
            );

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
            (
                heroIndex + 1
            ) % HERO.length
        );

        restart();

    }

    function previous(){

        render(
            (
                heroIndex -
                1 +
                HERO.length
            ) % HERO.length
        );

        restart();

    }

    function restart(){

        clearInterval(heroTimer);

        heroTimer =
            window.setInterval(
                next,
                6000
            );

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
                    event.clientX -
                    startX;

                if(
                    Math.abs(distance) < 45
                ){
                    return;
                }

                distance < 0
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
        .querySelector("#allProducts")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/products");
            }
        );

    root
        .querySelector("#eventButton")
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
   PRODUCT NAVIGATION
   ========================================================== */

function initialiseProducts(root){

    root
        .querySelectorAll(
            "[data-product]"
        )
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

function initialiseMemory(root){

    const slides =
        [
            ...root.querySelectorAll(
                "[data-memory-slide]"
            )
        ];

    const current =
        root.querySelector(
            "#memoryCurrent"
        );

    if(!slides.length){
        return;
    }

    function render(index){

        mediaIndex =
            index;

        slides.forEach(
            (slide,i)=>{

                slide.classList.toggle(
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

    function next(){

        render(
            (mediaIndex + 1) %
            slides.length
        );

        restart();

    }

    function previous(){

        render(
            (
                mediaIndex -
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

        clearInterval(
            mediaTimer
        );

        mediaTimer =
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
            item=>{
                item.classList.add(
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
                rootMargin:
                    "0px 0px -7% 0px"
            }
        );

    elements.forEach(
        item=>{
            observer.observe(item);
        }
    );

}

/* ==========================================================
   POINTER
   ========================================================== */

function initialisePointer(root){

    const hero =
        root.querySelector(
            "#homeHero"
        );

    if(!hero){
        return;
    }

    const atmosphere =
        root.querySelector(
            "#heroAtmosphere"
        );

    const aura =
        root.querySelector(
            "#heroAura"
        );

    const orbits =
        root.querySelectorAll(
            ".home-hero-orbit"
        );

    hero.addEventListener(
        "pointermove",
        event=>{

            const rect =
                hero.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const px =
                (x / rect.width) -
                .5;

            const py =
                (y / rect.height) -
                .5;

            if(
                atmosphere
            ){

                atmosphere.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                atmosphere.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            }

            if(
                !pointerFrame
            ){

                pointerFrame =
                    requestAnimationFrame(
                        ()=>{

                            pointerFrame =
                                null;

                            if(aura){

                                aura.style.transform =
                                    `
                                        translate(
                                            ${
                                                px * 18
                                            }px,
                                            ${
                                                py * 15
                                            }px
                                        )
                                    `;

                            }

                            orbits.forEach(
                                (orbit,index)=>{

                                    const depth =
                                        (
                                            index + 1
                                        ) * 7;

                                    orbit.style.transform =
                                        `
                                            translate(
                                                ${
                                                    px * depth
                                                }px,
                                                ${
                                                    py * depth
                                                }px
                                            )
                                        `;

                                }
                            );

                        }
                    );

            }

        }
    );

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

            if(
                active &&
                (
                    active.tagName === "INPUT" ||
                    active.tagName === "TEXTAREA" ||
                    active.isContentEditable
                )
            ){
                return;
            }

            if(
                event.key === "ArrowRight"
            ){

                root
                    .querySelector(
                        "#heroNext"
                    )
                    ?.click();

            }

            if(
                event.key === "ArrowLeft"
            ){

                root
                    .querySelector(
                        "#heroPrev"
                    )
                    ?.click();

            }

        }
    );

}

/* ==========================================================
   CLEANUP
   ========================================================== */

function destroyHome(){

    if(heroTimer){

        clearInterval(
            heroTimer
        );

        heroTimer = null;

    }

    if(mediaTimer){

        clearInterval(
            mediaTimer
        );

        mediaTimer = null;

    }

    if(pointerFrame){

        cancelAnimationFrame(
            pointerFrame
        );

        pointerFrame = null;

    }

}
