/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Signature Brand Experience
   Premium Editorial / Immersive Opening

   BASE:
   EVENTS.JS visual language

   PRINCÍPIOS:
   - preserva a arquitectura da Home
   - não altera o theme.js global
   - mantém navegação SPA
   - hero dinâmico por produto
   - conteúdo nunca depende de reveal para existir
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple } from "../js/animations.js";


/* ==========================================================
   01. STATE
   ========================================================== */

let heroIndex = 0;
let mediaIndex = 0;

let heroTimer = null;
let mediaTimer = null;

let pointerFrame = null;

let homeKeyHandler = null;

let heroPaused = false;


/* ==========================================================
   02. PRODUCTS
   ========================================================== */

const PRODUCTS = [

    {
        id: "angel",
        name: "Angel Moon",
        category: "FEMININO",
        universe: "WELLNESS",
        label: "Cuidado feminino",
        image: "./assets/products/angel.png",
        theme: "angel"
    },

    {
        id: "ezeno",
        name: "EZENO",
        category: "SAÚDE ORAL",
        universe: "WELLNESS",
        label: "Saúde oral",
        image: "./assets/products/ezeno.png",
        theme: "ezeno"
    },

    {
        id: "zenbru",
        name: "Zenbru",
        category: "CAFÉ",
        universe: "LIFESTYLE",
        label: "Café & lifestyle",
        image: "./assets/products/zenbru.png",
        theme: "zenbru"
    },

    {
        id: "alpha",
        name: "Alpha Vmax",
        category: "PERFORMANCE",
        universe: "PERFORMANCE",
        label: "Performance",
        image: "./assets/products/alpha.png",
        theme: "alpha"
    },

    {
        id: "alphameta",
        name: "AlphaMeta",
        category: "NUTRIÇÃO",
        universe: "WELLNESS",
        label: "Nutrição",
        image: "./assets/products/alphameta.png",
        theme: "alphameta"
    },

    {
        id: "minoseed",
        name: "Minoseed",
        category: "BELEZA",
        universe: "WELLNESS",
        label: "Beleza & bem-estar",
        image: "./assets/products/minoseed.png",
        theme: "minoseed"
    },

    {
        id: "evador",
        name: "Evador",
        category: "PREMIUM CARE",
        universe: "LIFESTYLE",
        label: "Cuidados premium",
        image: "./assets/products/evador.png",
        theme: "evador"
    },

    {
        id: "alphaspin-ultra",
        name: "AlphaSpin Ultra",
        category: "SMART LIVING",
        universe: "SMART LIVING",
        label: "Tecnologia",
        image: "./assets/products/alphaspin-ultra.png",
        theme: "alphaspin-ultra"
    },

    {
        id: "ismarts3",
        name: "iSMART S3",
        category: "SMART LIVING",
        universe: "SMART LIVING",
        label: "Smart living",
        image: "./assets/products/ismarts3.png",
        theme: "ismarts3"
    }

];


/* ==========================================================
   03. HERO THEMES
   ========================================================== */

const HERO_THEMES = {

    angel: {
        tone: "#8B5CF6",
        atmosphere: "#E9D5FF",
        deep: "#5B21B6",
        surface: "#FBF7FF"
    },

    ezeno: {
        tone: "#D8A62A",
        atmosphere: "#FFF0C9",
        deep: "#8A5A24",
        surface: "#FFFDF7"
    },

    zenbru: {
        tone: "#D9A41A",
        atmosphere: "#F9E3BA",
        deep: "#5A2A12",
        surface: "#FFF9EF"
    },

    alpha: {
        tone: "#D8A74D",
        atmosphere: "#DDE7F7",
        deep: "#14499B",
        surface: "#F7FAFE"
    },

    alphameta: {
        tone: "#FCC20C",
        atmosphere: "#FFE4C8",
        deep: "#C82D17",
        surface: "#FFFDF8"
    },

    minoseed: {
        tone: "#D8A62A",
        atmosphere: "#F4E7D4",
        deep: "#7E5921",
        surface: "#FFFCF8"
    },

    evador: {
        tone: "#D4AF37",
        atmosphere: "#EDE6D5",
        deep: "#725514",
        surface: "#FBFAF6"
    },

    "alphaspin-ultra": {
        tone: "#B9A3D8",
        atmosphere: "#E8E0F2",
        deep: "#452968",
        surface: "#FBFAFD"
    },

    ismarts3: {
        tone: "#39A953",
        atmosphere: "#DCECDC",
        deep: "#285E38",
        surface: "#F7FBF7"
    }

};


/* ==========================================================
   04. HERO CONTENT
   ========================================================== */

const HERO = [

    {
        product: 0,
        eyebrow: "WELLNESS",
        pretitle: "CUIDADO · CONFORTO · ROTINA",
        title: "Comece pelo",
        accent: "cuidado.",
        copy:
            "Uma experiência de cuidado feminino pensada para conforto, confiança e bem-estar.",
        phrase:
            "Cuidado que acompanha."
    },

    {
        product: 1,
        eyebrow: "WELLNESS",
        pretitle: "SAÚDE · CUIDADO · ROTINA",
        title: "Cuidar também é",
        accent: "rotina.",
        copy:
            "Uma proposta de higiene oral integrada numa experiência diária de cuidado.",
        phrase:
            "Pequenos gestos. Todos os dias."
    },

    {
        product: 2,
        eyebrow: "LIFESTYLE",
        pretitle: "SABOR · EXPERIÊNCIA · RITUAL",
        title: "Crie o seu",
        accent: "próprio ritmo.",
        copy:
            "Uma experiência de café criada para acompanhar os seus momentos e o seu ritmo.",
        phrase:
            "O seu momento. O seu ritmo."
    },

    {
        product: 3,
        eyebrow: "PERFORMANCE",
        pretitle: "FOCO · MOVIMENTO · EVOLUTION",
        title: "Continue em",
        accent: "evolução.",
        copy:
            "Uma experiência orientada para quem procura movimento, consistência e progresso.",
        phrase:
            "Movimento. Consistência. Progresso."
    },

    {
        product: 4,
        eyebrow: "WELLNESS",
        pretitle: "NUTRIÇÃO · EQUILÍBRIO · ROTINA",
        title: "O equilíbrio começa",
        accent: "por dentro.",
        copy:
            "Nutrição integrada numa abordagem contemporânea ao bem-estar.",
        phrase:
            "Equilíbrio que começa dentro."
    },

    {
        product: 5,
        eyebrow: "WELLNESS",
        pretitle: "BELEZA · CUIDADO · EXPERIÊNCIA",
        title: "Cuidado que se",
        accent: "vive.",
        copy:
            "Beleza, cuidado pessoal e bem-estar reunidos numa mesma experiência.",
        phrase:
            "A experiência também é cuidado."
    },

    {
        product: 6,
        eyebrow: "LIFESTYLE",
        pretitle: "ELEGÂNCIA · CUIDADO · QUOTIDIANO",
        title: "Eleve o seu",
        accent: "quotidiano.",
        copy:
            "Cuidado e apresentação numa proposta pensada para o dia a dia.",
        phrase:
            "Detalhes que transformam."
    },

    {
        product: 7,
        eyebrow: "SMART LIVING",
        pretitle: "TECNOLOGIA · INOVAÇÃO · CONFORTO",
        title: "O futuro já está",
        accent: "em movimento.",
        copy:
            "Tecnologia e inovação aproximando experiência, conforto e quotidiano.",
        phrase:
            "Pensado para acompanhar o futuro."
    },

    {
        product: 8,
        eyebrow: "SMART LIVING",
        pretitle: "INTELIGÊNCIA · CASA · INOVAÇÃO",
        title: "Pense mais",
        accent: "inteligentemente.",
        copy:
            "Uma visão moderna do quotidiano através de soluções inteligentes.",
        phrase:
            "Inteligência aplicada ao quotidiano."
    }

];


/* ==========================================================
   05. MEMORIES
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
   06. HERO LOCAL THEME
   ========================================================== */

function applyHomeHeroTheme(name){

    const root =
        document.querySelector(".home-page");

    if(!root){
        return;
    }


    const theme =
        HERO_THEMES[name];


    const current =
        theme || {
            tone:"#C6A15B",
            atmosphere:"#EFE3C8",
            deep:"#5A4727",
            surface:"#FFFFFF"
        };


    root.style.setProperty(
        "--home-hero-tone",
        current.tone
    );


    root.style.setProperty(
        "--home-hero-atmosphere",
        current.atmosphere
    );


    root.style.setProperty(
        "--home-hero-deep",
        current.deep
    );


    root.style.setProperty(
        "--home-hero-surface",
        current.surface
    );


    /*
       Mantemos estes aliases para compatibilidade
       com eventuais regras locais antigas.
    */

    root.style.setProperty(
        "--hero-tone",
        current.tone
    );


    root.style.setProperty(
        "--hero-atmosphere",
        current.atmosphere
    );


    root.style.setProperty(
        "--hero-deep",
        current.deep
    );

}


/* ==========================================================
   07. LOAD
   ========================================================== */

export function loadHome(){

    destroyHome();

    applyTheme("default");


    const app =
        document.getElementById("app");


    if(!app){
        console.error(
            "AD LIFESTYLE: #app não encontrado."
        );
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
   08. HERO
   ========================================================== */

function hero(){

    return `

        <section
            class="home-hero"
            id="homeHero"
        >

            <div
                class="home-hero-background"
                aria-hidden="true"
            ></div>


            <div
                class="home-hero-backdrop"
                id="heroBackdrop"
                aria-hidden="true"
            ></div>


            <div
                class="home-hero-atmosphere"
                id="heroAtmosphere"
                aria-hidden="true"
            ></div>


            <div
                class="home-hero-grid"
                aria-hidden="true"
            ></div>


            <div
                class="home-hero-light-streak"
                aria-hidden="true"
            ></div>


            <div
                class="home-hero-corner-mark"
                aria-hidden="true"
            >
                AD
            </div>


            <div class="home-hero-container">


                <!-- =========================================
                     HERO TOP
                     ========================================= -->

                <div class="home-hero-topline">

                    <div>

                        <span>
                            AD LIFESTYLE
                        </span>

                        <i></i>

                        <span>
                            LUXURY WELLNESS
                        </span>

                    </div>


                    <div>

                        <span>
                            LUANDA · ANGOLA
                        </span>

                        <span>
                            2026
                        </span>

                    </div>

                </div>


                <div class="home-hero-main">


                    <!-- =====================================
                         COPY
                         ===================================== -->

                    <div class="home-hero-copy">


                        <div class="home-hero-copy-index">

                            <span>
                                01
                            </span>

                            <div></div>

                            <span>
                                DISCOVER
                            </span>

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
                                            data-hero-slide="${index}"
                                        >


                                            <span
                                                class="home-hero-eyebrow"
                                            >
                                                ${item.eyebrow}
                                            </span>


                                            <span
                                                class="home-hero-pretitle"
                                            >
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
                                                "
                                            >

                                                <span>
                                                    ${product.category}
                                                </span>

                                                <strong>
                                                    ${product.name}
                                                </strong>

                                            </div>


                                            <div
                                                class="
                                                    home-hero-phrase
                                                "
                                            >
                                                ${item.phrase}
                                            </div>


                                        </article>

                                    `;

                                }
                            ).join("")}


                        </div>


                        <div class="home-hero-actions">


                            <button
                                type="button"
                                class="
                                    home-action
                                    home-action-primary
                                "
                                id="heroProducts"
                            >

                                <span>
                                    Explorar produtos
                                </span>

                                <span aria-hidden="true">
                                    →
                                </span>

                            </button>


                            <button
                                type="button"
                                class="
                                    home-action
                                    home-action-secondary
                                "
                                id="heroAbout"
                            >

                                <span>
                                    Conhecer a nossa visão
                                </span>

                                <span aria-hidden="true">
                                    ↗
                                </span>

                            </button>


                        </div>


                        <div class="home-hero-controls">


                            <button
                                type="button"
                                id="heroPrev"
                                aria-label="Slide anterior"
                            >
                                ←
                            </button>


                            <div class="home-hero-track">

                                <div
                                    id="heroProgress"
                                ></div>

                            </div>


                            <button
                                type="button"
                                id="heroNext"
                                aria-label="Próximo slide"
                            >
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
                                    09
                                </span>

                            </div>


                        </div>


                    </div>


                    <!-- =====================================
                         VISUAL
                         ===================================== -->

                    <div class="home-hero-visual">


                        <div
                            class="
                                home-hero-visual-ring
                                ring-one
                            "
                            aria-hidden="true"
                        ></div>


                        <div
                            class="
                                home-hero-visual-ring
                                ring-two
                            "
                            aria-hidden="true"
                        ></div>


                        <div
                            class="
                                home-hero-visual-ring
                                ring-three
                            "
                            aria-hidden="true"
                        ></div>


                        <div
                            class="home-hero-aura"
                            id="heroAura"
                            aria-hidden="true"
                        ></div>


                        <div
                            class="
                                home-hero-orbit
                                orbit-one
                            "
                            aria-hidden="true"
                        ></div>


                        <div
                            class="
                                home-hero-orbit
                                orbit-two
                            "
                            aria-hidden="true"
                        ></div>


                        <div
                            class="home-hero-product-stage"
                            id="heroProductStage"
                        >


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
                                            data-hero-product="${index}"
                                        >

                                            <div
                                                class="
                                                    home-hero-product-halo
                                                "
                                            ></div>


                                            <div
                                                class="
                                                    home-hero-product-shadow
                                                "
                                            ></div>


                                            <img
                                                src="${product.image}"
                                                alt="${product.name}"
                                                loading="${
                                                    index === 0
                                                        ? "eager"
                                                        : "lazy"
                                                }"
                                                decoding="async"
                                            >

                                        </div>

                                    `;

                                }
                            ).join("")}


                        </div>


                        <div class="home-hero-object-line">
                            <span></span>
                            <div></div>
                            <span></span>
                        </div>


                        <div class="home-hero-product-index">


                            <span>
                                CURRENT OBJECT
                            </span>


                            <strong id="heroObject">
                                ANGEL MOON
                            </strong>


                            <small id="heroObjectCategory">
                                FEMININO · WELLNESS
                            </small>


                        </div>


                        <div
                            class="home-hero-visual-index"
                            id="heroVisualIndex"
                        >
                            01
                        </div>


                        <div class="home-hero-vertical-label">
                            DISCOVER · EXPERIENCE · EVOLVE
                        </div>


                    </div>


                </div>


                <!-- =========================================
                     BOTTOM
                     ========================================= -->

                <div class="home-hero-bottom">


                    <span>
                        WELLNESS
                    </span>


                    <div></div>


                    <span>
                        LIFESTYLE
                    </span>


                    <div></div>


                    <span>
                        SMART LIVING
                    </span>


                    <div></div>


                    <span>
                        EVOLUTION
                    </span>


                </div>


            </div>


        </section>

    `;

}


/* ==========================================================
   09. IDENTITY STRIP
   ========================================================== */

function identityStrip(){

    return `

        <section class="home-identity">

            <div class="home-identity-word">

                <span>WELLNESS</span>
                <i>✦</i>
                <span>LIFESTYLE</span>
                <i>✦</i>
                <span>SMART LIVING</span>
                <i>✦</i>
                <span>EVOLUTION</span>
                <i>✦</i>
                <span>WELLNESS</span>
                <i>✦</i>
                <span>LIFESTYLE</span>
                <i>✦</i>
                <span>SMART LIVING</span>

            </div>

        </section>

    `;

}


/* ==========================================================
   10. MANIFESTO
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
                        NA AD LIFESTYLE
                    </p>


                    <h2>

                        viver melhor

                        <span>
                            é também descobrir melhor.
                        </span>

                    </h2>


                    <div class="home-manifesto-subline">

                        Produtos.
                        Experiências.
                        Conhecimento.
                        Possibilidades.

                    </div>


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
   11. WORLDS
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
                        Dois pilares.
                        Uma experiência.
                    </p>

                </div>


                <div class="home-world-grid">


                    <article
                        class="
                            home-world
                            home-world-bzz
                            reveal
                        "
                    >

                        <div class="home-world-number">
                            01
                        </div>


                        <div class="home-world-image">

                            <div class="home-world-glow"></div>

                            <div class="home-world-orbit"></div>

                            <img
                                src="./assets/images/bzzworld.png"
                                alt="BZZWorld"
                                loading="lazy"
                                decoding="async"
                            >

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
                                rel="noopener noreferrer"
                            >

                                Explorar

                                <span>
                                    ↗
                                </span>

                            </a>

                        </div>


                    </article>


                    <article
                        class="
                            home-world
                            home-world-a21
                            reveal
                        "
                    >

                        <div class="home-world-number">
                            02
                        </div>


                        <div class="home-world-image">

                            <div class="home-world-glow"></div>

                            <div class="home-world-orbit"></div>

                            <img
                                src="./assets/images/a21.png"
                                alt="Academy Twenty One"
                                loading="lazy"
                                decoding="async"
                            >

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
                                rel="noopener noreferrer"
                            >

                                Explorar

                                <span>
                                    ↗
                                </span>

                            </a>

                        </div>


                    </article>


                </div>


            </div>

        </section>

    `;

}


/* ==========================================================
   12. PRODUCT UNIVERSES
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
   13. FEATURED PRODUCTS
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
                        id="allProducts"
                    >

                        Ver catálogo

                        <span>
                            →
                        </span>

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
                                data-product="${product.id}"

                                style="
                                    --card-tone:${getCardTone(product.id)};
                                    --card-atmosphere:${getCardAtmosphere(product.id)};
                                "
                            >


                                <div class="home-feature-top">

                                    <span>
                                        0${index + 1}
                                    </span>


                                    <span>
                                        ${product.universe}
                                    </span>

                                </div>


                                <div class="home-feature-image">


                                    <div class="home-feature-aura"></div>


                                    <div class="home-feature-number">
                                        0${index + 1}
                                    </div>


                                    <img
                                        src="${product.image}"
                                        alt="${product.name}"
                                        loading="lazy"
                                        decoding="async"
                                    >

                                </div>


                                <div class="home-feature-info">

                                    <small>
                                        ${product.category}
                                    </small>


                                    <h3>
                                        ${product.name}
                                    </h3>


                                    <p>
                                        ${product.label}
                                    </p>


                                    <span>
                                        Explorar ↗
                                    </span>

                                </div>


                            </article>

                    `).join("")}


                </div>


            </div>

        </section>

    `;

}


/* ==========================================================
   14. EVENT
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


                <article
                    class="
                        home-event-card
                        reveal
                    "
                >


                    <div class="home-event-poster">

                        <img
                            src="./assets/images/independente.png"
                            alt="Grande Apresentação de Dupla Oportunidade"
                            loading="lazy"
                            decoding="async"
                        >


                        <div class="home-event-poster-label">
                            AD LIFESTYLE
                        </div>

                    </div>


                    <div class="home-event-details">


                        <div class="home-event-number">

                            04

                            <span>
                                —05
                            </span>

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
                            class="
                                home-action
                                home-action-dark
                            "
                            id="eventButton"
                        >

                            <span>
                                Mais informações
                            </span>

                            <span aria-hidden="true">
                                →
                            </span>

                        </button>


                    </div>


                </article>


            </div>

        </section>

    `;

}


/* ==========================================================
   15. MEMORY REEL
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


                <div
                    class="
                        home-memory-wrap
                        reveal
                    "
                >


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
                                    data-memory-slide="${index}"
                                >

                                    <img
                                        src="${item.image}"
                                        alt="${item.title}"
                                        loading="lazy"
                                        decoding="async"
                                    >


                                    <div class="home-memory-caption">

                                        <span>
                                            ${item.label}
                                        </span>

                                        <strong>
                                            ${item.title}
                                        </strong>

                                    </div>

                                </article>

                        `).join("")}


                        <div class="home-memory-nav">


                            <button
                                type="button"
                                id="memoryPrev"
                                aria-label="Memória anterior"
                            >
                                ←
                            </button>


                            <button
                                type="button"
                                id="memoryNext"
                                aria-label="Próxima memória"
                            >
                                →
                            </button>


                        </div>


                    </div>


                    <aside class="home-memory-side">


                        <div class="home-memory-side-index">
                            ARCHIVE / 04
                        </div>


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
   16. TESTIMONIAL
   ========================================================== */

function testimonial(){

    return `

        <section class="home-testimonial">

            <div class="home-container">


                <div class="home-testimonial-mark reveal">
                    “
                </div>


                <div
                    class="
                        home-testimonial-main
                        reveal
                    "
                >


                    <span class="home-overline">
                        COMMUNITY VOICE
                    </span>


                    <blockquote>

                        Descobri que por trás dos
                        produtos existe uma visão
                        muito maior sobre

                        <em>
                            desenvolvimento e evolução.
                        </em>

                    </blockquote>


                    <div class="home-testimonial-person">


                        <div class="home-testimonial-photo">


                            <img
                                src="./assets/images/maria.png"
                                alt="Maria"
                                loading="lazy"
                                decoding="async"
                                onerror="
                                    this.onerror=null;
                                    this.src='./assets/images/avatar.png';
                                "
                            >


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
   17. FINAL CTA
   ========================================================== */

function finalCTA(){

    return `

        <section class="home-final">


            <div
                class="home-final-light"
                aria-hidden="true"
            ></div>


            <div
                class="home-final-grid"
                aria-hidden="true"
            ></div>


            <div class="home-container">


                <div
                    class="
                        home-final-content
                        reveal
                    "
                >


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
                            class="
                                home-action
                                home-action-primary
                            "
                            id="finalProducts"
                        >

                            <span>
                                Explorar universo
                            </span>

                            <span aria-hidden="true">
                                →
                            </span>

                        </button>


                        <button
                            type="button"
                            class="
                                home-action
                                home-action-secondary
                            "
                            id="finalContact"
                        >

                            <span>
                                Falar connosco
                            </span>

                            <span aria-hidden="true">
                                ↗
                            </span>

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
   18. CARD THEMES
   ========================================================== */

function getCardTone(id){

    const themes = {

        angel: "#C6A15B",
        ezeno: "#B48B36",
        zenbru: "#A66D31",
        alpha: "#8A713E",
        alphameta: "#B99A55",
        minoseed: "#A88772",
        evador: "#B49A60",
        "alphaspin-ultra": "#8F7D9F",
        ismarts3: "#549568"

    };


    return themes[id] || "#B8924A";

}


function getCardAtmosphere(id){

    const themes = {

        angel: "#F3ECDD",
        ezeno: "#F2EAD8",
        zenbru: "#F0E2CF",
        alpha: "#E8EEF5",
        alphameta: "#F2E8D6",
        minoseed: "#F0E5DE",
        evador: "#ECE6D8",
        "alphaspin-ultra": "#EDE7F2",
        ismarts3: "#E8F0EA"

    };


    return themes[id] || "#EFE5D3";

}


/* ==========================================================
   19. INITIALISE
   ========================================================== */

function initialiseHome(){

    const root =
        document.querySelector(
            ".home-page"
        );


    if(!root){
        return;
    }


    root
        .querySelectorAll(
            ".home-action"
        )
        .forEach(
            button => {

                if(
                    typeof ripple ===
                    "function"
                ){

                    try{
                        ripple(button);
                    }catch(error){

                        console.warn(
                            "AD LIFESTYLE: ripple não inicializado.",
                            error
                        );

                    }

                }

            }
        );


    initialiseHero(root);

    initialiseNavigation(root);

    initialiseProducts(root);

    initialiseMemory(root);

    initialiseReveal(root);

    initialisePointer(root);

    initialiseKeyboard(root);

}


/* ==========================================================
   20. HERO ENGINE
   ========================================================== */

function initialiseHero(root){

    const slides =
        [
            ...root.querySelectorAll(
                "[data-hero-slide]"
            )
        ];


    const products =
        [
            ...root.querySelectorAll(
                "[data-hero-product]"
            )
        ];


    const current =
        root.querySelector(
            "#heroCurrent"
        );


    const progress =
        root.querySelector(
            "#heroProgress"
        );


    const object =
        root.querySelector(
            "#heroObject"
        );


    const objectCategory =
        root.querySelector(
            "#heroObjectCategory"
        );


    const visualIndex =
        root.querySelector(
            "#heroVisualIndex"
        );


    const hero =
        root.querySelector(
            "#homeHero"
        );


    if(
        !slides.length ||
        !products.length
    ){
        return;
    }


    function render(index){

        heroIndex =
            index;


        const item =
            HERO[index];


        const product =
            PRODUCTS[item.product];


        slides.forEach(
            (slide,i)=>{

                slide.classList.toggle(
                    "is-active",
                    i === index
                );

            }
        );


        products.forEach(
            (productLayer,i)=>{

                productLayer.classList.toggle(
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


        if(visualIndex){

            visualIndex.textContent =
                String(index + 1)
                    .padStart(2,"0");

        }


        if(object){

            object.textContent =
                product.name.toUpperCase();

        }


        if(objectCategory){

            objectCategory.textContent =
                `${product.category} · ${product.universe}`;

        }


        applyHomeHeroTheme(
            product.theme
        );


        if(progress){

            progress.style.animation =
                "none";


            void progress.offsetWidth;


            if(!heroPaused){

                progress.style.animation =
                    "homeHeroProgress 6s linear forwards";

            }

        }


        if(hero){

            hero.classList.remove(
                "is-changing"
            );


            requestAnimationFrame(
                ()=>{

                    hero.classList.add(
                        "is-changing"
                    );

                }
            );

        }

    }


    function next(){

        if(heroPaused){
            return;
        }


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

        clearInterval(
            heroTimer
        );


        if(heroPaused){
            return;
        }


        heroTimer =
            window.setInterval(
                next,
                6000
            );

    }


    root
        .querySelector(
            "#heroNext"
        )
        ?.addEventListener(
            "click",
            next
        );


    root
        .querySelector(
            "#heroPrev"
        )
        ?.addEventListener(
            "click",
            previous
        );


    const stage =
        root.querySelector(
            "#heroProductStage"
        );


    if(stage){

        let startX = null;


        stage.addEventListener(
            "pointerdown",
            event => {

                startX =
                    event.clientX;

            }
        );


        stage.addEventListener(
            "pointerup",
            event => {

                if(
                    startX === null
                ){
                    return;
                }


                const distance =
                    event.clientX -
                    startX;


                startX = null;


                if(
                    Math.abs(distance) < 45
                ){
                    return;
                }


                if(distance < 0){

                    next();

                }else{

                    previous();

                }

            }
        );


        stage.addEventListener(
            "pointercancel",
            ()=>{
                startX = null;
            }
        );

    }


    /*
       Pausa quando o pointer permanece
       sobre o Hero, útil para exploração visual.
    */

    if(hero){

        hero.addEventListener(
            "mouseenter",
            ()=>{
                heroPaused = true;

                clearInterval(
                    heroTimer
                );
            }
        );


        hero.addEventListener(
            "mouseleave",
            ()=>{
                heroPaused = false;

                render(heroIndex);

                restart();
            }
        );

    }


    render(0);

    restart();

}


/* ==========================================================
   21. NAVIGATION
   ========================================================== */

function initialiseNavigation(root){

    root
        .querySelector(
            "#heroProducts"
        )
        ?.addEventListener(
            "click",
            ()=>{
                navigate(
                    "/products"
                );
            }
        );


    root
        .querySelector(
            "#heroAbout"
        )
        ?.addEventListener(
            "click",
            ()=>{
                navigate(
                    "/about"
                );
            }
        );


    root
        .querySelector(
            "#allProducts"
        )
        ?.addEventListener(
            "click",
            ()=>{
                navigate(
                    "/products"
                );
            }
        );


    root
        .querySelector(
            "#eventButton"
        )
        ?.addEventListener(
            "click",
            ()=>{
                navigate(
                    "/events"
                );
            }
        );


    root
        .querySelector(
            "#finalProducts"
        )
        ?.addEventListener(
            "click",
            ()=>{
                navigate(
                    "/products"
                );
            }
        );


    root
        .querySelector(
            "#finalContact"
        )
        ?.addEventListener(
            "click",
            ()=>{
                navigate(
                    "/contact"
                );
            }
        );

}


/* ==========================================================
   22. PRODUCT NAVIGATION
   ========================================================== */

function initialiseProducts(root){

    root
        .querySelectorAll(
            ".home-feature-product[data-product]"
        )
        .forEach(
            card => {

                const open =
                    ()=>{
                        const product =
                            card.dataset.product;


                        if(!product){
                            return;
                        }


                        navigate(
                            "/" + product
                        );

                    };


                card.addEventListener(
                    "click",
                    open
                );


                card.addEventListener(
                    "keydown",
                    event => {

                        if(
                            event.key !== "Enter" &&
                            event.key !== " "
                        ){
                            return;
                        }


                        event.preventDefault();

                        open();

                    }
                );


                card.setAttribute(
                    "tabindex",
                    "0"
                );


                card.setAttribute(
                    "role",
                    "link"
                );

            }
        );

}


/* ==========================================================
   23. MEMORY
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
            (
                mediaIndex + 1
            ) % slides.length
        );


        restart();

    }


    function previous(){

        render(
            (
                mediaIndex -
                1 +
                slides.length
            ) % slides.length
        );


        restart();

    }


    root
        .querySelector(
            "#memoryNext"
        )
        ?.addEventListener(
            "click",
            next
        );


    root
        .querySelector(
            "#memoryPrev"
        )
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
   24. REVEAL
   ========================================================== */

function initialiseReveal(root){

    const elements =
        root.querySelectorAll(
            ".reveal"
        );


    /*
       O elemento continua visível mesmo
       sem IntersectionObserver.
    */

    if(
        !("IntersectionObserver" in window)
    ){

        elements.forEach(
            element =>{
                element.classList.add(
                    "is-visible"
                );
            }
        );


        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if(
                            !entry.isIntersecting
                        ){
                            return;
                        }


                        entry.target.classList.add(
                            "is-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:.08,
                rootMargin:
                    "0px 0px -6% 0px"
            }
        );


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}


/* ==========================================================
   25. POINTER EXPERIENCE
   ========================================================== */

function initialisePointer(root){

    const hero =
        root.querySelector(
            "#homeHero"
        );


    if(!hero){
        return;
    }


    if(
        !window.matchMedia(
            "(pointer:fine)"
        ).matches
    ){
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


    const visual =
        root.querySelector(
            ".home-hero-visual"
        );


    const orbits =
        root.querySelectorAll(
            ".home-hero-orbit"
        );


    const backdrop =
        root.querySelector(
            "#heroBackdrop"
        );


    hero.addEventListener(
        "pointermove",
        event => {

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


            if(atmosphere){

                atmosphere.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );


                atmosphere.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            }


            if(pointerFrame){
                return;
            }


            pointerFrame =
                requestAnimationFrame(
                    ()=>{
                        pointerFrame = null;


                        if(aura){

                            aura.style.transform =
                                `
                                    translate(
                                        ${px * 16}px,
                                        ${py * 12}px
                                    )
                                `;

                        }


                        if(visual){

                            visual.style.transform =
                                `
                                    translate(
                                        ${px * 3}px,
                                        ${py * 2}px
                                    )
                                `;

                        }


                        if(backdrop){

                            backdrop.style.transform =
                                `
                                    translate(
                                        ${px * -16}px,
                                        ${py * -10}px
                                    )
                                `;

                        }


                        orbits.forEach(
                            (orbit,index)=>{

                                const depth =
                                    (index + 1) * 6;


                                orbit.style.transform =
                                    index === 0
                                        ? `
                                            translate(
                                                ${px * depth}px,
                                                ${py * depth}px
                                            )
                                            rotate(-18deg)
                                          `
                                        : `
                                            translate(
                                                ${px * depth}px,
                                                ${py * depth}px
                                            )
                                          `;

                            }
                        );

                    }
                );

        }
    );


    hero.addEventListener(
        "pointerleave",
        ()=>{

            if(atmosphere){

                atmosphere.style.setProperty(
                    "--mouse-x",
                    "50%"
                );


                atmosphere.style.setProperty(
                    "--mouse-y",
                    "50%"
                );

            }


            if(aura){

                aura.style.transform =
                    "translate(0,0)";

            }


            if(visual){

                visual.style.transform =
                    "translate(0,0)";

            }


            if(backdrop){

                backdrop.style.transform =
                    "translate(0,0)";

            }


            orbits.forEach(
                (orbit,index)=>{

                    orbit.style.transform =
                        index === 0
                            ? "rotate(-18deg)"
                            : "translate(0,0)";

                }
            );

        }
    );

}


/* ==========================================================
   26. KEYBOARD
   ========================================================== */

function initialiseKeyboard(root){

    homeKeyHandler =
        event => {

            const active =
                document.activeElement;


            if(
                active &&
                (
                    active.tagName === "INPUT" ||
                    active.tagName === "TEXTAREA" ||
                    active.tagName === "SELECT" ||
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

        };


    document.addEventListener(
        "keydown",
        homeKeyHandler
    );

}


/* ==========================================================
   27. CLEANUP
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


    if(homeKeyHandler){

        document.removeEventListener(
            "keydown",
            homeKeyHandler
        );

        homeKeyHandler = null;

    }


    heroPaused = false;


    /*
       Não alteramos o theme.js.
    */

    applyHomeHeroTheme(null);

}

