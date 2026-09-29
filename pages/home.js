/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Signature Brand Experience — Master Home
   ----------------------------------------------------------
   BASE:
   EVENTS.JS visual language

   OBJECTIVE:
   - Hero editorial, immersive and uncluttered
   - Dynamic product-led atmosphere
   - Strong brand storytelling
   - Featured 2-day event
   - Memories + community voice
   - SPA navigation preserved
   - theme.js global untouched
   - Safe cleanup on SPA navigation
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple } from "../js/animations.js";


/* ==========================================================
   01. STATE
   ========================================================== */

let heroIndex = 0;
let memoryIndex = 0;

let heroTimer = null;
let eventTimer = null;
let memoryTimer = null;

let pointerFrame = null;
let homeKeyHandler = null;

let heroPaused = false;


/* ==========================================================
   02. SOCIAL / CONTACT
   ========================================================== */

const SOCIALS = {

    instagram:
        "https://www.instagram.com/ad.ambassadoracademy21/",

    facebook:
        "https://web.facebook.com/ad.ambassadoracademy21/",

    tiktok:
        "https://www.tiktok.com/@adbdlifestyle"

};

const WHATSAPP_NUMBER = "244924964666";


/* ==========================================================
   03. PRODUCTS
   ========================================================== */

const PRODUCTS = [

    {
        id:"angel",
        name:"Angel Moon",
        category:"FEMININO",
        universe:"WELLNESS",
        label:"Cuidado feminino",
        image:"./assets/products/angel.png",
        theme:"angel"
    },

    {
        id:"ezeno",
        name:"EZENO",
        category:"SAÚDE ORAL",
        universe:"WELLNESS",
        label:"Saúde oral",
        image:"./assets/products/ezeno.png",
        theme:"ezeno"
    },

    {
        id:"zenbru",
        name:"Zenbru",
        category:"CAFÉ",
        universe:"LIFESTYLE",
        label:"Café & lifestyle",
        image:"./assets/products/zenbru.png",
        theme:"zenbru"
    },

    {
        id:"alpha",
        name:"Alpha Vmax",
        category:"PERFORMANCE",
        universe:"PERFORMANCE",
        label:"Performance",
        image:"./assets/products/alpha.png",
        theme:"alpha"
    },

    {
        id:"alphameta",
        name:"AlphaMeta",
        category:"NUTRIÇÃO",
        universe:"WELLNESS",
        label:"Nutrição",
        image:"./assets/products/alphameta.png",
        theme:"alphameta"
    },

    {
        id:"minoseed",
        name:"Minoseed",
        category:"BELEZA",
        universe:"WELLNESS",
        label:"Beleza & bem-estar",
        image:"./assets/products/minoseed.png",
        theme:"minoseed"
    },

    {
        id:"evador",
        name:"Evador",
        category:"PREMIUM CARE",
        universe:"LIFESTYLE",
        label:"Cuidados premium",
        image:"./assets/products/evador.png",
        theme:"evador"
    },

    {
        id:"alphaspin-ultra",
        name:"AlphaSpin Ultra",
        category:"SMART LIVING",
        universe:"SMART LIVING",
        label:"Tecnologia",
        image:"./assets/products/alphaspin-ultra.png",
        theme:"alphaspin-ultra"
    },

    {
        id:"ismarts3",
        name:"iSMART S3",
        category:"SMART LIVING",
        universe:"SMART LIVING",
        label:"Smart living",
        image:"./assets/products/ismarts3.png",
        theme:"ismarts3"
    }

];


/* ==========================================================
   04. HERO THEMES
   ========================================================== */

const HERO_THEMES = {

    angel:{
        tone:"#8B5CF6",
        atmosphere:"#E9D5FF",
        deep:"#5B21B6",
        surface:"#FBF7FF"
    },

    ezeno:{
        tone:"#D8A62A",
        atmosphere:"#FFF0C9",
        deep:"#8A5A24",
        surface:"#FFFDF7"
    },

    zenbru:{
        tone:"#D9A41A",
        atmosphere:"#F9E3BA",
        deep:"#5A2A12",
        surface:"#FFF9EF"
    },

    alpha:{
        tone:"#D8A74D",
        atmosphere:"#DDE7F7",
        deep:"#14499B",
        surface:"#F7FAFE"
    },

    alphameta:{
        tone:"#FCC20C",
        atmosphere:"#FFE4C8",
        deep:"#C82D17",
        surface:"#FFFDF8"
    },

    minoseed:{
        tone:"#D8A62A",
        atmosphere:"#F4E7D4",
        deep:"#7E5921",
        surface:"#FFFCF8"
    },

    evador:{
        tone:"#D4AF37",
        atmosphere:"#EDE6D5",
        deep:"#725514",
        surface:"#FBFAF6"
    },

    "alphaspin-ultra":{
        tone:"#B9A3D8",
        atmosphere:"#E8E0F2",
        deep:"#452968",
        surface:"#FBFAFD"
    },

    ismarts3:{
        tone:"#39A953",
        atmosphere:"#DCECDC",
        deep:"#285E38",
        surface:"#F7FBF7"
    }

};


/* ==========================================================
   05. HERO CONTENT
   ----------------------------------------------------------
   Less text by design. The visual is the hero.
   ========================================================== */

const HERO = [

    {
        product:0,
        eyebrow:"AD LIFESTYLE",
        pretitle:"WELLNESS · LIFESTYLE · EVOLUTION",
        title:"Viva o seu",
        accent:"próprio ritmo.",
        copy:"Uma nova visão sobre bem-estar, Lifestyle e evolução.",
        phrase:"Cuidado que acompanha."
    },

    {
        product:1,
        eyebrow:"WELLNESS",
        pretitle:"CUIDADO · ROTINA · EXPERIÊNCIA",
        title:"O cuidado",
        accent:"começa nos detalhes.",
        copy:"Uma experiência de cuidado integrada ao quotidiano.",
        phrase:"Pequenos gestos. Todos os dias."
    },

    {
        product:2,
        eyebrow:"LIFESTYLE",
        pretitle:"SABOR · RITUAL · EXPERIÊNCIA",
        title:"Encontre o seu",
        accent:"momento.",
        copy:"Uma experiência de café criada para acompanhar o seu ritmo.",
        phrase:"O seu momento. O seu ritmo."
    },

    {
        product:3,
        eyebrow:"PERFORMANCE",
        pretitle:"FOCO · MOVIMENTO · EVOLUTION",
        title:"Continue em",
        accent:"evolução.",
        copy:"Uma experiência orientada para consistência, movimento e progresso.",
        phrase:"Movimento. Consistência. Progresso."
    },

    {
        product:4,
        eyebrow:"WELLNESS",
        pretitle:"NUTRIÇÃO · EQUILÍBRIO · ROTINA",
        title:"O equilíbrio",
        accent:"começa por dentro.",
        copy:"Nutrição integrada numa abordagem contemporânea ao bem-estar.",
        phrase:"Equilíbrio que começa dentro."
    },

    {
        product:5,
        eyebrow:"WELLNESS",
        pretitle:"BELEZA · CUIDADO · EXPERIÊNCIA",
        title:"Cuidado que se",
        accent:"vive.",
        copy:"Beleza, cuidado pessoal e bem-estar reunidos numa mesma experiência.",
        phrase:"A experiência também é cuidado."
    },

    {
        product:6,
        eyebrow:"LIFESTYLE",
        pretitle:"ELEGÂNCIA · CUIDADO · QUOTIDIANO",
        title:"Eleve o seu",
        accent:"quotidiano.",
        copy:"Detalhes de cuidado e apresentação pensados para o dia a dia.",
        phrase:"Detalhes que transformam."
    },

    {
        product:7,
        eyebrow:"SMART LIVING",
        pretitle:"TECNOLOGIA · INOVAÇÃO · CONFORTO",
        title:"O futuro está",
        accent:"em movimento.",
        copy:"Tecnologia e inovação aproximando experiência, conforto e quotidiano.",
        phrase:"Pensado para acompanhar o futuro."
    },

    {
        product:8,
        eyebrow:"SMART LIVING",
        pretitle:"INTELIGÊNCIA · CASA · INOVAÇÃO",
        title:"Viva de forma",
        accent:"mais inteligente.",
        copy:"Uma visão moderna do quotidiano através de soluções inteligentes.",
        phrase:"Inteligência aplicada ao quotidiano."
    }

];


/* ==========================================================
   06. MEMORIES
   ========================================================== */

const MEMORIES = [

    {
        image:"./assets/images/h1.png",
        label:"MEMÓRIA 01",
        title:"O início de uma experiência."
    },

    {
        image:"./assets/images/h2.png",
        label:"MEMÓRIA 02",
        title:"Pessoas que fazem parte da jornada."
    },

    {
        image:"./assets/images/h3.png",
        label:"MEMÓRIA 03",
        title:"Encontros que ganham significado."
    },

    {
        image:"./assets/images/h4.png",
        label:"MEMÓRIA 04",
        title:"Uma visão que continua a crescer."
    }

];


/* ==========================================================
   07. FEATURED EVENT
   ========================================================== */

const FEATURED_EVENT = {

    id:"grande-apresentacao-outubro-2026",

    title:"Grande Apresentação de Dupla Oportunidade",

    category:"GRANDE EVENTO · 2 DIAS",

    location:"Universidade Independente — Luanda",

    price:"8.000 Kz",

    dateLabel:"04 e 05 de Outubro de 2026",

    gallery:[
        "./assets/IMAGES/independente.png",
        "./assets/IMAGES/idependente 1.png",
        "./assets/IMAGES/idependente 2.png",
        "./assets/IMAGES/idependente 3.png"
    ],

    days:[
        {
            number:"01",
            date:"Domingo · 04 de Outubro",
            time:"16h00–18h00",
            title:"Apresentação da Dupla Oportunidade",
            detail:"Saúde e negócios."
        },
        {
            number:"02",
            date:"Segunda-feira · 05 de Outubro",
            time:"17h00–19h00",
            title:"Treinamento",
            detail:"Uma sessão dedicada à continuidade da experiência."
        }
    ]

};


/* ==========================================================
   08. HERO THEME
   ========================================================== */

function applyHomeHeroTheme(name){

    const root =
        document.querySelector(".home-page");

    if(!root){
        return;
    }

    const theme =
        HERO_THEMES[name] || {
            tone:"#C6A15B",
            atmosphere:"#EFE3C8",
            deep:"#5A4727",
            surface:"#FFFFFF"
        };

    root.style.setProperty("--home-hero-tone",theme.tone);
    root.style.setProperty("--home-hero-atmosphere",theme.atmosphere);
    root.style.setProperty("--home-hero-deep",theme.deep);
    root.style.setProperty("--home-hero-surface",theme.surface);

}


/* ==========================================================
   09. LOAD
   ========================================================== */

export function loadHome(){

    destroyHome();

    applyTheme("default");

    const app =
        document.getElementById("app");

    if(!app){

        console.error(
            "AD LIFESTYLE: elemento #app não encontrado."
        );

        return;
    }

    app.innerHTML = `

        <main class="home-page">

            ${hero()}

            ${signatureRail()}

            ${manifesto()}

            ${pillars()}

            ${universes()}

            ${featuredProducts()}

            ${featuredEvent()}

            ${memoryReel()}

            ${communityVoice()}

            ${finalCTA()}

        </main>

    `;

    initialiseHome();

}


/* ==========================================================
   10. HERO
   ========================================================== */

function hero(){

    return `

<section
    class="home-hero"
    id="homeHero">

    <div class="home-hero-background"></div>

    <div
        class="home-hero-atmosphere"
        id="heroAtmosphere">
    </div>

    <div class="home-hero-grid"></div>

    <div class="home-hero-noise"></div>

    <div class="home-hero-backdrop" id="heroBackdrop"></div>


    <div class="home-container home-hero-container">

        <header class="home-hero-topline">

            <div class="home-brand-lockup">

                <img
                    src="./assets/logo/logo.png"
                    alt="AD Lifestyle"
                    decoding="async">

                <div>
                    <strong>AD LIFESTYLE</strong>
                    <span>LUANDA · ANGOLA</span>
                </div>

            </div>


            <div class="home-hero-edition">
                <span>EDITION</span>
                <strong>2026</strong>
            </div>

        </header>


        <div class="home-hero-main">

            <div class="home-hero-copy">

                <div class="home-hero-index-label">
                    <span>01</span>
                    <i></i>
                    <span>DISCOVER</span>
                </div>


                <div class="home-hero-content">

                    ${HERO.map(
                        (item,index)=>{

                            const product =
                                PRODUCTS[item.product];

                            return `

<article
    class="home-hero-slide ${index === 0 ? "is-active" : ""}"
    data-hero-slide="${index}">

    <span class="home-hero-eyebrow">
        ${item.eyebrow}
    </span>

    <span class="home-hero-pretitle">
        ${item.pretitle}
    </span>

    <h1>
        ${item.title}
        <span>${item.accent}</span>
    </h1>

    <p>
        ${item.copy}
    </p>

    <div class="home-hero-product-tag">
        <span>${product.category}</span>
        <strong>${product.name}</strong>
    </div>

    <div class="home-hero-phrase">
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
                        class="home-action home-action-primary"
                        id="heroProducts">

                        <span>Explorar produtos</span>
                        <span aria-hidden="true">→</span>

                    </button>

                    <button
                        type="button"
                        class="home-action home-action-secondary"
                        id="heroAbout">

                        <span>A nossa visão</span>
                        <span aria-hidden="true">↗</span>

                    </button>

                </div>


                <div class="home-hero-controls">

                    <button
                        type="button"
                        id="heroPrev"
                        aria-label="Slide anterior">
                        ←
                    </button>

                    <div class="home-hero-progress">
                        <div id="heroProgress"></div>
                    </div>

                    <button
                        type="button"
                        id="heroNext"
                        aria-label="Próximo slide">
                        →
                    </button>

                    <div class="home-hero-number">
                        <strong id="heroCurrent">01</strong>
                        <span>/</span>
                        <span>${String(HERO.length).padStart(2,"0")}</span>
                    </div>

                </div>

            </div>


            <div class="home-hero-visual">

                <div class="home-hero-halo"></div>
                <div class="home-hero-halo-secondary"></div>

                <div class="home-hero-orbit orbit-one"></div>
                <div class="home-hero-orbit orbit-two"></div>

                <div
                    class="home-hero-product-stage"
                    id="heroProductStage">

                    ${HERO.map(
                        (item,index)=>{

                            const product =
                                PRODUCTS[item.product];

                            return `

<div
    class="home-hero-product ${index === 0 ? "is-active" : ""}"
    data-hero-product="${index}">

    <div class="home-hero-product-shadow"></div>
    <div class="home-hero-product-glow"></div>

    <img
        src="${product.image}"
        alt="${product.name}"
        loading="${index === 0 ? "eager" : "lazy"}"
        decoding="async">

</div>

                            `;
                        }
                    ).join("")}

                </div>


                <div class="home-hero-object-meta">

                    <span>SELECTED OBJECT</span>

                    <strong id="heroObject">
                        ANGEL MOON
                    </strong>

                    <small id="heroObjectCategory">
                        FEMININO · WELLNESS
                    </small>

                </div>


                <div class="home-hero-visual-index" id="heroVisualIndex">
                    01
                </div>

            </div>

        </div>


        <div class="home-hero-bottom-rail">

            <span>WELLNESS</span>
            <i></i>
            <span>LIFESTYLE</span>
            <i></i>
            <span>SMART LIVING</span>
            <i></i>
            <span>EVOLUTION</span>

        </div>

    </div>

</section>

    `;

}


/* ==========================================================
   11. SIGNATURE RAIL
   ========================================================== */

function signatureRail(){

    return `

<section class="home-signature-rail">

    <div class="home-signature-track">

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
        <i>✦</i>
        <span>EVOLUTION</span>

    </div>

</section>

    `;

}


/* ==========================================================
   12. MANIFESTO
   ========================================================== */

function manifesto(){

    return `

<section class="home-manifesto section">

    <div class="home-container">

        <div class="home-section-marker reveal">
            <span>01</span>
            <i></i>
            <span>MANIFESTO</span>
        </div>


        <div class="home-manifesto-layout">

            <div class="home-manifesto-lead reveal">
                <span class="home-overline">NA AD LIFESTYLE</span>
            </div>


            <div class="home-manifesto-copy reveal">

                <h2>
                    Viver melhor
                    <span>é também descobrir melhor.</span>
                </h2>

                <p>
                    Produtos, experiências, conhecimento e possibilidades
                    encontram-se numa mesma visão contemporânea de Lifestyle.
                </p>

            </div>

        </div>


        <div class="home-manifesto-foot reveal">

            <span>Produtos</span>
            <span>Experiências</span>
            <span>Conhecimento</span>
            <span>Possibilidades</span>

        </div>

    </div>

</section>

    `;

}


/* ==========================================================
   13. PILLARS — BZZWORLD + ACADEMY 21
   ========================================================== */

function pillars(){

    return `

<section class="home-pillars section-sm">

    <div class="home-container">

        <div class="home-section-head reveal">

            <div>
                <span class="home-overline">ECOSSISTEMA</span>
                <h2>
                    Duas dimensões.
                    <span>Uma experiência.</span>
                </h2>
            </div>

            <p>
                Bem-estar, aprendizagem, liderança e Lifestyle
                reunidos numa experiência de marca.
            </p>

        </div>


        <div class="home-pillar-grid">

            <article class="home-pillar home-pillar-bzz reveal">

                <div class="home-pillar-number">01</div>

                <div class="home-pillar-visual">
                    <div class="home-pillar-aura"></div>
                    <img
                        src="./assets/images/bzzworld.png"
                        alt="BZZWorld"
                        loading="lazy"
                        decoding="async">
                </div>

                <div class="home-pillar-content">
                    <span>WELLNESS · PRODUCTS</span>
                    <h3>BZZWorld</h3>
                    <p>
                        Produtos e soluções que dão forma à dimensão
                        de bem-estar e Lifestyle.
                    </p>
                    <a
                        href="https://www.bzzworld.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Explorar <span>↗</span>
                    </a>
                </div>

            </article>


            <article class="home-pillar home-pillar-a21 reveal">

                <div class="home-pillar-number">02</div>

                <div class="home-pillar-visual">
                    <div class="home-pillar-aura"></div>
                    <img
                        src="./assets/images/a21.png"
                        alt="Academy Twenty One"
                        loading="lazy"
                        decoding="async">
                </div>

                <div class="home-pillar-content">
                    <span>LEARNING · LEADERSHIP</span>
                    <h3>Academy Twenty One</h3>
                    <p>
                        Conhecimento, liderança, desenvolvimento pessoal,
                        networking e educação empreendedora.
                    </p>
                    <a
                        href="https://www.academytwentyone.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Explorar <span>↗</span>
                    </a>
                </div>

            </article>

        </div>

    </div>

</section>

    `;

}


/* ==========================================================
   14. UNIVERSOS
   ========================================================== */

function universes(){

    const items = [

        {
            number:"01",
            code:"WELLNESS",
            title:"Bem-estar",
            text:"Cuidado, autocuidado, nutrição e Lifestyle."
        },

        {
            number:"02",
            code:"LIFESTYLE",
            title:"Experiência",
            text:"Sabor, conforto, beleza e experiências premium."
        },

        {
            number:"03",
            code:"SMART LIVING",
            title:"Inteligência",
            text:"Tecnologia, inovação e soluções para o quotidiano."
        }

    ];

    return `

<section class="home-universes section">

    <div class="home-container">

        <div class="home-section-head reveal">

            <div>
                <span class="home-overline">OS NOSSOS UNIVERSOS</span>
                <h2>
                    Três formas de
                    <span>viver a experiência.</span>
                </h2>
            </div>

        </div>


        <div class="home-universe-list">

            ${items.map(
                item=>`

<article class="home-universe reveal">

    <span class="home-universe-number">${item.number}</span>

    <div>
        <small>${item.code}</small>
        <h3>${item.title}</h3>
    </div>

    <p>${item.text}</p>

    <span class="home-universe-arrow">↗</span>

</article>

                `
            ).join("")}

        </div>

    </div>

</section>

    `;

}


/* ==========================================================
   15. FEATURED PRODUCTS
   ========================================================== */

function featuredProducts(){

    const featured = [
        PRODUCTS[0],
        PRODUCTS[1],
        PRODUCTS[2],
        PRODUCTS[7],
        PRODUCTS[8]
    ];

    return `

<section class="home-products section">

    <div class="home-container">

        <div class="home-section-head reveal">

            <div>
                <span class="home-overline">CURATED SELECTION</span>
                <h2>
                    Comece por
                    <span>descobrir.</span>
                </h2>
            </div>

            <button
                type="button"
                class="home-minimal-button"
                id="allProducts">
                Ver catálogo <span>→</span>
            </button>

        </div>


        <div class="home-product-grid">

            ${featured.map(
                (product,index)=>`

<article
    class="home-product-card reveal ${index === 0 ? "is-featured" : ""}"
    data-product="${product.id}"
    style="--card-tone:${getCardTone(product.id)};--card-atmosphere:${getCardAtmosphere(product.id)};"
    tabindex="0"
    role="link">

    <div class="home-product-card-top">
        <span>0${index + 1}</span>
        <span>${product.universe}</span>
    </div>

    <div class="home-product-card-image">
        <div class="home-product-card-aura"></div>
        <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            decoding="async">
    </div>

    <div class="home-product-card-info">
        <small>${product.category}</small>
        <h3>${product.name}</h3>
        <p>${product.label}</p>
        <span>Explorar <b>↗</b></span>
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
   16. FEATURED EVENT
   ========================================================== */

function featuredEvent(){

    return `

<section class="home-event section">

    <div class="home-container">

        <div class="home-event-intro reveal">
            <span class="home-overline">NEXT EXPERIENCE</span>
            <h2>
                Dois dias.
                <span>Uma experiência.</span>
            </h2>
        </div>


        <article class="home-event-card reveal">

            <div class="home-event-gallery">

                <div class="home-event-gallery-track">

                    ${FEATURED_EVENT.gallery.map(
                        (image,index)=>`

<div
    class="home-event-slide ${index === 0 ? "is-active" : ""}"
    data-event-slide="${index}">

    <img
        src="${image}"
        alt="${FEATURED_EVENT.title} — imagem ${index + 1}"
        loading="${index === 0 ? "eager" : "lazy"}"
        decoding="async">

</div>

                        `
                    ).join("")}

                </div>


                <div class="home-event-gallery-overlay"></div>


                <div class="home-event-gallery-top">
                    <span>AD LIFESTYLE · 2026</span>
                    <strong>04—05 OUT</strong>
                </div>


                <div class="home-event-gallery-controls">

                    <button
                        type="button"
                        id="eventPrev"
                        aria-label="Imagem anterior">
                        ←
                    </button>

                    <div>
                        ${FEATURED_EVENT.gallery.map(
                            (_,index)=>`
                            <button
                                type="button"
                                class="${index === 0 ? "active" : ""}"
                                data-event-dot="${index}"
                                aria-label="Imagem ${index + 1}">
                            </button>
                            `
                        ).join("")}
                    </div>

                    <button
                        type="button"
                        id="eventNext"
                        aria-label="Próxima imagem">
                        →
                    </button>

                </div>

            </div>


            <div class="home-event-content">

                <span class="home-event-category">
                    ${FEATURED_EVENT.category}
                </span>

                <div class="home-event-heading">

                    <div class="home-event-date-big">
                        04<span>—05</span>
                    </div>

                    <div>

                        <small>
                            OUTUBRO · 2026
                        </small>

                        <h3>
                            ${FEATURED_EVENT.title}
                        </h3>

                    </div>

                </div>


                <p class="home-event-description">

                    Uma experiência de dois dias na Universidade Independente,
                    unindo apresentação da Dupla Oportunidade e treinamento.

                </p>


                <div class="home-event-meta-grid">

                    <div>

                        <span>
                            LOCAL
                        </span>

                        <strong>
                            ${FEATURED_EVENT.location}
                        </strong>

                    </div>


                    <div>

                        <span>
                            INGRESSO
                        </span>

                        <strong>
                            ${FEATURED_EVENT.price}
                        </strong>

                    </div>

                </div>


                <div class="home-event-ticket">

                    <span>
                        BILHETE ÚNICO
                    </span>

                    <strong>
                        Válido para os dois dias
                    </strong>

                    <small>
                        ${FEATURED_EVENT.price}
                    </small>

                </div>


                <div class="home-event-days">

                    ${FEATURED_EVENT.days.map(
                        day=>`

<div class="home-event-day">

    <span>
        DIA ${day.number}
    </span>

    <strong>
        ${day.date}
    </strong>

    <em>
        ${day.time}
    </em>

    <p>
        ${day.title}
    </p>

    <small>
        ${day.detail}
    </small>

</div>

                        `
                    ).join("")}

                </div>


                <div class="home-event-actions">

                    <button
                        type="button"
                        class="home-action home-action-dark"
                        id="eventButton">

                        <span>
                            Ver evento completo
                        </span>

                        <span>
                            →
                        </span>

                    </button>


                    <button
                        type="button"
                        class="home-action home-action-light"
                        id="eventReserve">

                        <span>
                            Reservar lugar
                        </span>

                        <span>
                            ↗
                        </span>

                    </button>

                </div>

            </div>

        </article>

    </div>

</section>

    `;

}


/* ==========================================================
   17. MEMORY REEL
   ========================================================== */

function memoryReel(){

    return `

<section class="home-memories section">

    <div class="home-container">

        <div class="home-section-head reveal">

            <div>

                <span class="home-overline">
                    MEMORY REEL
                </span>

                <h2>
                    A experiência
                    <span>também se recorda.</span>
                </h2>

            </div>


            <div class="home-memory-counter">

                <strong id="memoryCurrent">
                    01
                </strong>

                <span>
                    / ${String(MEMORIES.length).padStart(2,"0")}
                </span>

            </div>

        </div>


        <div class="home-memory-layout reveal">

            <div class="home-memory-stage">

                ${MEMORIES.map(
                    (item,index)=>`

<article
    class="home-memory-slide ${index === 0 ? "is-active" : ""}"
    data-memory-slide="${index}">

    <img
        src="${item.image}"
        alt="${item.title}"
        loading="lazy"
        decoding="async">

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


                <div class="home-memory-controls">

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


            <aside class="home-memory-aside">

                <span>
                    FROM THE ARCHIVE
                </span>


                <strong>
                    Registos, encontros,
                    pessoas e momentos.
                </strong>


                <p>
                    A memória da AD Lifestyle cresce com cada
                    experiência partilhada pela comunidade.
                </p>


                <button
                    type="button"
                    class="home-minimal-button"
                    id="memoryInstagram">

                    Ver no Instagram
                    <span>↗</span>

                </button>

            </aside>

        </div>

    </div>

</section>

    `;

}


/* ==========================================================
   18. COMMUNITY VOICE
   ========================================================== */

function communityVoice(){

    return `

<section class="home-community section-sm">

    <div class="home-container">

        <div class="home-community-grid">

            <div class="home-community-mark reveal">
                “
            </div>


            <div class="home-community-content reveal">

                <span class="home-overline">
                    COMMUNITY VOICE
                </span>


                <blockquote>

                    Descobri que por trás dos produtos existe uma visão
                    muito maior sobre

                    <em>
                        desenvolvimento e evolução.
                    </em>

                </blockquote>


                <div class="home-community-person">

                    <div class="home-community-avatar">

                        <img
                            src="./assets/images/maria.png"
                            alt="Maria"
                            loading="lazy"
                            decoding="async"
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

    </div>

</section>

    `;

}


/* ==========================================================
   19. FINAL CTA
   ========================================================== */

function finalCTA(){

    return `

<section class="home-final section">

    <div class="home-final-light"></div>

    <div class="home-final-grid"></div>


    <div class="home-container">

        <div class="home-final-content reveal">

            <span class="home-overline">
                AD LIFESTYLE
            </span>


            <h2>
                A próxima descoberta
                <span>pode começar aqui.</span>
            </h2>


            <p>
                Explore produtos, experiências, conhecimento
                e novas possibilidades.
            </p>


            <div class="home-final-actions">

                <button
                    type="button"
                    class="home-action home-action-primary"
                    id="finalProducts">

                    <span>
                        Explorar universo
                    </span>

                    <span>
                        →
                    </span>

                </button>


                <button
                    type="button"
                    class="home-action home-action-secondary"
                    id="finalContact">

                    <span>
                        Falar connosco
                    </span>

                    <span>
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
   20. CARD THEMES
   ========================================================== */

function getCardTone(id){

    const themes = {

        angel:"#C6A15B",
        ezeno:"#B48B36",
        zenbru:"#A66D31",
        alpha:"#8A713E",
        alphameta:"#B99A55",
        minoseed:"#A88772",
        evador:"#B49A60",
        "alphaspin-ultra":"#8F7D9F",
        ismarts3:"#549568"

    };

    return themes[id] || "#B8924A";

}


function getCardAtmosphere(id){

    const themes = {

        angel:"#F3ECDD",
        ezeno:"#F2EAD8",
        zenbru:"#F0E2CF",
        alpha:"#E8EEF5",
        alphameta:"#F2E8D6",
        minoseed:"#F0E5DE",
        evador:"#ECE6D8",
        "alphaspin-ultra":"#EDE7F2",
        ismarts3:"#E8F0EA"

    };

    return themes[id] || "#EFE5D3";

}


/* ==========================================================
   21. INITIALISE
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

            if(typeof ripple !== "function"){
                return;
            }

            try{

                ripple(button);

            }
            catch(error){

                console.warn(
                    "AD LIFESTYLE: ripple não inicializado.",
                    error
                );

            }

        });


    initialiseHero(root);

    initialiseNavigation(root);

    initialiseProducts(root);

    initialiseEvent(root);

    initialiseMemory(root);

    initialiseReveal(root);

    initialisePointer(root);

    initialiseKeyboard(root);

}


/* ==========================================================
   22. HERO ENGINE
   ========================================================== */

function initialiseHero(root){

    const slides = [
        ...root.querySelectorAll(
            "[data-hero-slide]"
        )
    ];

    const products = [
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
        !products.length ||
        !hero
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
                    "homeHeroProgress 6.5s linear forwards";

            }

        }


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


    function next(){

        render(
            (heroIndex + 1) %
            HERO.length
        );

        restart();

    }


    function previous(){

        render(
            (
                heroIndex -
                1 +
                HERO.length
            ) %
            HERO.length
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
                6500
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

        let startX =
            null;


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

                if(startX === null){

                    return;

                }


                const distance =
                    event.clientX -
                    startX;


                startX =
                    null;


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


        stage.addEventListener(
            "pointercancel",
            ()=>{

                startX =
                    null;

            }
        );

    }


    hero.addEventListener(
        "mouseenter",
        ()=>{

            heroPaused =
                true;


            clearInterval(
                heroTimer
            );


            if(progress){

                progress.style.animationPlayState =
                    "paused";

            }

        }
    );


    hero.addEventListener(
        "mouseleave",
        ()=>{

            heroPaused =
                false;


            render(
                heroIndex
            );


            restart();

        }
    );


    render(0);

    restart();

}


/* ==========================================================
   23. NAVIGATION
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


    root
        .querySelector(
            "#memoryInstagram"
        )
        ?.addEventListener(
            "click",
            ()=>{

                window.open(
                    SOCIALS.instagram,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );


    root
        .querySelector(
            "#eventReserve"
        )
        ?.addEventListener(
            "click",
            ()=>{

                const message =
                    `Olá AD Lifestyle! Gostaria de reservar um lugar para o evento "${FEATURED_EVENT.title}". O bilhete é de ${FEATURED_EVENT.price} e é válido para os dois dias, 04 e 05 de Outubro de 2026.`;


                window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
                    "_blank"
                );

            }
        );

}


/* ==========================================================
   24. PRODUCTS
   ========================================================== */

function initialiseProducts(root){

    root
        .querySelectorAll(
            ".home-product-card[data-product]"
        )
        .forEach(
            card=>{

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
                    event=>{

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

            }
        );

}


/* ==========================================================
   25. EVENT GALLERY
   ========================================================== */

function initialiseEvent(root){

    const slides = [
        ...root.querySelectorAll(
            "[data-event-slide]"
        )
    ];


    const dots = [
        ...root.querySelectorAll(
            "[data-event-dot]"
        )
    ];


    const prev =
        root.querySelector(
            "#eventPrev"
        );


    const next =
        root.querySelector(
            "#eventNext"
        );


    if(slides.length <= 1){

        return;

    }


    let index =
        0;


    const render =
        newIndex=>{

            index =
                (
                    newIndex +
                    slides.length
                )
                %
                slides.length;


            slides.forEach(
                (slide,i)=>{

                    slide.classList.toggle(
                        "is-active",
                        i === index
                    );

                }
            );


            dots.forEach(
                (dot,i)=>{

                    dot.classList.toggle(
                        "active",
                        i === index
                    );

                }
            );

        };


    const restart =
        ()=>{

            clearInterval(
                eventTimer
            );


            eventTimer =
                window.setInterval(
                    ()=>{

                        render(
                            index + 1
                        );

                    },
                    5600
                );

        };


    prev?.addEventListener(
        "click",
        ()=>{

            render(
                index - 1
            );

            restart();

        }
    );


    next?.addEventListener(
        "click",
        ()=>{

            render(
                index + 1
            );

            restart();

        }
    );


    dots.forEach(
        dot=>{

            dot.addEventListener(
                "click",
                ()=>{

                    render(
                        Number(
                            dot.dataset.eventDot
                        )
                    );

                    restart();

                }
            );

        }
    );


    const gallery =
        root.querySelector(
            ".home-event-gallery"
        );


    gallery?.addEventListener(
        "mouseenter",
        ()=>{

            clearInterval(
                eventTimer
            );

        }
    );


    gallery?.addEventListener(
        "mouseleave",
        restart
    );


    render(0);

    restart();

}


/* ==========================================================
   26. MEMORY ENGINE
   ========================================================== */

function initialiseMemory(root){

    const slides = [
        ...root.querySelectorAll(
            "[data-memory-slide]"
        )
    ];


    const current =
        root.querySelector(
            "#memoryCurrent"
        );


    const prev =
        root.querySelector(
            "#memoryPrev"
        );


    const next =
        root.querySelector(
            "#memoryNext"
        );


    if(!slides.length){

        return;

    }


    function render(index){

        memoryIndex =
            (
                index +
                slides.length
            )
            %
            slides.length;


        slides.forEach(
            (slide,i)=>{

                slide.classList.toggle(
                    "is-active",
                    i === memoryIndex
                );

            }
        );


        if(current){

            current.textContent =
                String(
                    memoryIndex + 1
                )
                .padStart(
                    2,
                    "0"
                );

        }

    }


    function nextMemory(){

        render(
            memoryIndex + 1
        );

        restart();

    }


    function previousMemory(){

        render(
            memoryIndex - 1
        );

        restart();

    }


    function restart(){

        clearInterval(
            memoryTimer
        );


        memoryTimer =
            window.setInterval(
                nextMemory,
                5200
            );

    }


    next?.addEventListener(
        "click",
        nextMemory
    );


    prev?.addEventListener(
        "click",
        previousMemory
    );


    const stage =
        root.querySelector(
            ".home-memory-stage"
        );


    stage?.addEventListener(
        "mouseenter",
        ()=>{

            clearInterval(
                memoryTimer
            );

        }
    );


    stage?.addEventListener(
        "mouseleave",
        restart
    );


    render(0);

    restart();

}


/* ==========================================================
   27. REVEAL
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
                    "0px 0px -7% 0px"

            }
        );


    elements.forEach(
        element=>{

            observer.observe(
                element
            );

        }
    );

}


/* ==========================================================
   28. POINTER EXPERIENCE
   ========================================================== */

function initialisePointer(root){

    const hero =
        root.querySelector(
            "#homeHero"
        );


    if(!hero){

        return;

    }


    const mediaQuery =
        window.matchMedia(
            "(pointer:fine)"
        );


    if(!mediaQuery.matches){

        return;

    }


    const atmosphere =
        root.querySelector(
            "#heroAtmosphere"
        );


    const visual =
        root.querySelector(
            ".home-hero-visual"
        );


    const backdrop =
        root.querySelector(
            "#heroBackdrop"
        );


    const halos =
        root.querySelectorAll(
            ".home-hero-halo,.home-hero-halo-secondary"
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


            atmosphere?.style.setProperty(
                "--mouse-x",
                `${x}px`
            );


            atmosphere?.style.setProperty(
                "--mouse-y",
                `${y}px`
            );


            if(pointerFrame){

                return;

            }


            pointerFrame =
                requestAnimationFrame(
                    ()=>{

                        pointerFrame =
                            null;


                        if(visual){

                            visual.style.transform =
                                `translate(${px * 5}px,${py * 4}px)`;

                        }


                        if(backdrop){

                            backdrop.style.transform =
                                `translate(${px * -10}px,${py * -7}px)`;

                        }


                        halos.forEach(
                            (halo,index)=>{

                                const depth =
                                    (index + 1) * 6;


                                halo.style.transform =
                                    `translate(${px * depth}px,${py * depth}px)`;

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


            if(visual){

                visual.style.transform =
                    "translate(0,0)";

            }


            if(backdrop){

                backdrop.style.transform =
                    "translate(0,0)";

            }


            halos.forEach(
                halo=>{

                    halo.style.transform =
                        "translate(0,0)";

                }
            );

        }
    );

}


/* ==========================================================
   29. KEYBOARD
   ========================================================== */

function initialiseKeyboard(root){

    homeKeyHandler =
        event=>{

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
   30. CLEANUP
   ========================================================== */

function destroyHome(){

    clearInterval(
        heroTimer
    );


    clearInterval(
        eventTimer
    );


    clearInterval(
        memoryTimer
    );


    heroTimer =
        null;


    eventTimer =
        null;


    memoryTimer =
        null;


    if(pointerFrame){

        cancelAnimationFrame(
            pointerFrame
        );


        pointerFrame =
            null;

    }


    if(homeKeyHandler){

        document.removeEventListener(
            "keydown",
            homeKeyHandler
        );


        homeKeyHandler =
            null;

    }


    heroPaused =
        false;


    applyHomeHeroTheme(
        null
    );

}


/* ==========================================================
   END
   ========================================================== */
