/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Premium Institutional Experience
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { stagger, ripple } from "../js/animations.js";

/* ==========================================================
   ESTADO
   ========================================================== */

let heroTimer = null;
let mediaTimer = null;
let heroIndex = 0;
let mediaIndex = 0;

/* ==========================================================
   DADOS
   ========================================================== */

const heroProducts = [

    {
        id:"angel",
        category:"CUIDADO FEMININO",
        title:"Angel Moon",
        claim:"Conforto pensado para o quotidiano.",
        description:
            "Uma experiência de cuidado feminino integrada numa visão de conforto, confiança e bem-estar.",
        image:"./assets/products/angel.png"
    },

    {
        id:"ezeno",
        category:"SAÚDE ORAL",
        title:"EZENO",
        claim:"O cuidado começa todos os dias.",
        description:
            "Uma proposta de higiene oral pensada para integrar facilmente a rotina de autocuidado.",
        image:"./assets/products/ezeno.png"
    },

    {
        id:"zenbru",
        category:"CAFÉ & LIFESTYLE",
        title:"Zenbru",
        claim:"Sabor, energia e personalidade.",
        description:
            "Café Robusta combinado com ginseng e gengibre para uma experiência distinta de Lifestyle.",
        image:"./assets/products/zenbru.png"
    },

    {
        id:"alpha",
        category:"PERFORMANCE",
        title:"Alpha Vmax",
        claim:"Performance com identidade.",
        description:
            "Uma solução direccionada para o universo de performance e Lifestyle masculino.",
        image:"./assets/products/alpha.png"
    },

    {
        id:"alphameta",
        category:"NUTRIÇÃO",
        title:"AlphaMeta",
        claim:"Uma nova dimensão de nutrição.",
        description:
            "Uma proposta de nutrição integrada no universo premium da AD Lifestyle.",
        image:"./assets/products/alphameta.png"
    },

    {
        id:"minoseed",
        category:"BELEZA & BEM-ESTAR",
        title:"Minoseed",
        claim:"Cuidado que acompanha o seu ritmo.",
        description:
            "Uma experiência orientada para beleza, cuidado pessoal e Lifestyle.",
        image:"./assets/products/minoseed.png"
    },

    {
        id:"evador",
        category:"CUIDADOS PREMIUM",
        title:"Evador",
        claim:"Elegância também é cuidado.",
        description:
            "Uma solução integrada numa visão de cuidado premium e atenção aos detalhes.",
        image:"./assets/products/evador.png"
    },

    {
        id:"alphaspin-ultra",
        category:"SMART LIVING",
        title:"AlphaSpin Ultra",
        claim:"Tecnologia que entra no seu Lifestyle.",
        description:
            "Uma proposta tecnológica pensada para aproximar inovação e quotidiano.",
        image:"./assets/products/alphaspin-ultra.png"
    },

    {
        id:"ismarts3",
        category:"SMART LIVING",
        title:"iSMART S3",
        claim:"O quotidiano pode ser mais inteligente.",
        description:
            "Um conceito de Smart Living que aproxima tecnologia, conforto e experiência.",
        image:"./assets/products/ismarts3.png"
    }

];

const mediaItems = [

    {
        type:"image",
        image:"./assets/images/insta1.jpg",
        label:"Lifestyle",
        title:"Momentos que fazem parte da nossa jornada."
    },

    {
        type:"image",
        image:"./assets/images/insta2.jpg",
        label:"Experiências",
        title:"Uma comunidade em movimento."
    },

    {
        type:"image",
        image:"./assets/images/insta3.jpg",
        label:"Eventos",
        title:"Conhecimento que ganha vida."
    },

    {
        type:"image",
        image:"./assets/images/insta4.jpg",
        label:"Registos",
        title:"Cada encontro deixa uma história."
    },

    {
        type:"video",
        image:"./assets/images/insta1.jpg",
        label:"Vídeo",
        title:"Em breve: experiências AD Lifestyle em vídeo.",
        video:""
    }

];

/* ==========================================================
   LOAD HOME
   ========================================================== */

export function loadHome(){

    clearHomeTimers();

    applyTheme("default");

    const app = document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <main class="home-page">

            ${hero()}

            ${brandIntroduction()}

            ${pillars()}

            ${featuredProducts()}

            ${businessVision()}

            ${event()}

            ${mediaShowcase()}

            ${testimonials()}

            ${digitalPresence()}

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

            <div class="home-hero-background"></div>

            <div class="home-hero-orb home-hero-orb-a"></div>
            <div class="home-hero-orb home-hero-orb-b"></div>

            <div class="home-hero-container">

                <div class="home-hero-copy">

                    <div class="home-hero-brand">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle">

                        <span>
                            WELLNESS · LIFESTYLE · EVOLUTION
                        </span>

                    </div>

                    <div class="home-hero-slides">

                        ${heroProducts.map(
                            (product,index)=>heroSlide(product,index)
                        ).join("")}

                    </div>

                    <div class="home-hero-actions">

                        <button
                            type="button"
                            class="home-button home-button-gold"
                            id="heroProducts">

                            Descobrir produtos

                            <span>→</span>

                        </button>

                        <button
                            type="button"
                            class="home-button home-button-light"
                            id="heroAbout">

                            Conhecer a AD Lifestyle

                            <span>→</span>

                        </button>

                    </div>

                    <div class="home-hero-progress">

                        <div
                            class="home-hero-progress-track">

                            <div
                                class="home-hero-progress-bar"
                                id="heroProgressBar">
                            </div>

                        </div>

                        <div class="home-hero-counter">

                            <strong id="heroCurrent">
                                01
                            </strong>

                            <span>/</span>

                            <span>
                                ${String(heroProducts.length).padStart(2,"0")}
                            </span>

                        </div>

                    </div>

                </div>

                <div class="home-hero-visual">

                    <div class="home-hero-image-stage">

                        <div class="home-hero-glow"></div>

                        <div class="home-hero-ring"></div>

                        ${heroProducts.map(
                            (product,index)=>`
                                <div
                                    class="home-hero-product ${
                                        index === 0 ? "is-active" : ""
                                    }"
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

                    <div class="home-hero-thumbnails">

                        ${heroProducts.map(
                            (product,index)=>`
                                <button
                                    type="button"
                                    class="home-hero-thumb ${
                                        index === 0
                                            ? "is-active"
                                            : ""
                                    }"
                                    data-hero-thumb="${index}"
                                    aria-label="Ver ${product.title}">

                                    <img
                                        src="${product.image}"
                                        alt="${product.title}">

                                </button>
                            `
                        ).join("")}

                    </div>

                    <div class="home-hero-floating">

                        <span class="home-hero-floating-line"></span>

                        <div>

                            <strong>
                                AD Lifestyle
                            </strong>

                            <small>
                                Uma experiência em construção.
                            </small>

                        </div>

                    </div>

                </div>

            </div>

            <div class="home-hero-bottom">

                <span>
                    Explorar
                </span>

                <div class="home-scroll-line"></div>

                <span>
                    AD Lifestyle
                </span>

            </div>

        </section>

    `;

}

function heroSlide(product,index){

    return `

        <article
            class="home-hero-slide ${
                index === 0 ? "is-active" : ""
            }"
            data-hero-slide="${index}">

            <span class="home-section-label">
                ${product.category}
            </span>

            <h1>
                ${product.title}
                <span>
                    ${product.claim}
                </span>
            </h1>

            <p>
                ${product.description}
            </p>

        </article>

    `;

}

/* ==========================================================
   BRAND INTRODUCTION
   ========================================================== */

function brandIntroduction(){

    return `

        <section
            class="home-section home-introduction"
            id="about">

            <div class="home-container">

                <div class="home-section-heading home-heading-center reveal">

                    <span class="home-section-label">
                        A AD Lifestyle
                    </span>

                    <h2>
                        Não vendemos apenas produtos.
                        <span>
                            Criamos possibilidades.
                        </span>
                    </h2>

                    <p>
                        A AD Lifestyle nasce da ligação entre
                        bem-estar, Lifestyle, aprendizagem,
                        desenvolvimento pessoal e uma visão
                        empreendedora orientada para novas
                        possibilidades.
                    </p>

                </div>

                <div class="home-introduction-grid">

                    <article class="home-introduction-main reveal">

                        <div class="home-card-number">
                            01
                        </div>

                        <div>

                            <span class="home-card-label">
                                VISÃO
                            </span>

                            <h3>
                                Uma marca pensada
                                para evoluir consigo.
                            </h3>

                            <p>
                                Construímos uma experiência onde
                                produtos, conhecimento, tecnologia,
                                relações e oportunidades podem
                                coexistir numa mesma visão.
                            </p>

                        </div>

                        <button
                            type="button"
                            class="home-text-link"
                            data-route-action="/about">

                            Descobrir a nossa história
                            <span>↗</span>

                        </button>

                    </article>

                    <article class="home-introduction-side reveal">

                        <span class="home-card-label">
                            O NOSSO ECOSSISTEMA
                        </span>

                        <div class="home-mini-points">

                            ${miniPoint(
                                "W",
                                "Wellness",
                                "Bem-estar, autocuidado e Lifestyle."
                            )}

                            ${miniPoint(
                                "S",
                                "Smart Living",
                                "Tecnologia e inovação no quotidiano."
                            )}

                            ${miniPoint(
                                "A",
                                "Academy 21",
                                "Conhecimento, liderança e desenvolvimento."
                            )}

                        </div>

                    </article>

                </div>

                <div class="home-metrics reveal">

                    <div class="home-metric">
                        <strong>01</strong>
                        <span>Uma visão integrada</span>
                    </div>

                    <div class="home-metric">
                        <strong>02</strong>
                        <span>Bem-estar + inovação</span>
                    </div>

                    <div class="home-metric">
                        <strong>03</strong>
                        <span>Conhecimento + oportunidade</span>
                    </div>

                    <div class="home-metric">
                        <strong>04</strong>
                        <span>Visão com dimensão internacional</span>
                    </div>

                </div>

            </div>

        </section>

    `;

}

function miniPoint(letter,title,text){

    return `

        <div class="home-mini-point">

            <div class="home-mini-icon">
                ${letter}
            </div>

            <div>

                <strong>
                    ${title}
                </strong>

                <p>
                    ${text}
                </p>

            </div>

        </div>

    `;

}

/* ==========================================================
   PILLARS
   ========================================================== */

function pillars(){

    const items = [

        [
            "01",
            "Bem-estar",
            "Soluções e experiências pensadas para acompanhar uma rotina mais consciente."
        ],

        [
            "02",
            "Inovação",
            "Produtos e conceitos que aproximam tecnologia, conforto e Lifestyle."
        ],

        [
            "03",
            "Desenvolvimento",
            "Conhecimento, liderança, comunicação e crescimento pessoal."
        ],

        [
            "04",
            "Oportunidade",
            "Uma visão empreendedora orientada para novas possibilidades."
        ]

    ];

    return `

        <section class="home-section home-pillars">

            <div class="home-container">

                <div class="home-section-heading reveal">

                    <span class="home-section-label">
                        O que nos move
                    </span>

                    <h2>
                        Quatro dimensões.
                        <span>
                            Uma experiência.
                        </span>
                    </h2>

                </div>

                <div class="home-pillar-grid">

                    ${items.map(
                        item=>`

                            <article class="home-pillar-card reveal">

                                <div class="home-pillar-number">
                                    ${item[0]}
                                </div>

                                <h3>
                                    ${item[1]}
                                </h3>

                                <p>
                                    ${item[2]}
                                </p>

                                <span class="home-pillar-arrow">
                                    ↗
                                </span>

                            </article>

                        `
                    ).join("")}

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
            class="home-section home-products"
            id="products">

            <div class="home-container">

                <div class="home-section-heading home-heading-center reveal">

                    <span class="home-section-label">
                        Selecção AD Lifestyle
                    </span>

                    <h2>
                        Alguns dos universos
                        <span>
                            que pode descobrir.
                        </span>
                    </h2>

                    <p>
                        Uma selecção de produtos representativos
                        da diversidade da nossa plataforma.
                    </p>

                </div>

                <div class="home-products-grid">

                    ${productCard(
                        "angel",
                        "Cuidado Feminino",
                        "Angel Moon",
                        "./assets/products/angel.png",
                        "Conforto, cuidado e uma experiência pensada para o universo feminino."
                    )}

                    ${productCard(
                        "ezeno",
                        "Saúde Oral",
                        "EZENO",
                        "./assets/products/ezeno.png",
                        "Uma proposta de cuidado oral integrada numa rotina de higiene e autocuidado."
                    )}

                    ${productCard(
                        "zenbru",
                        "Café & Lifestyle",
                        "Zenbru",
                        "./assets/products/zenbru.png",
                        "Café Robusta, ginseng e gengibre numa experiência de sabor distinta."
                    )}

                    ${productCard(
                        "ismarts3",
                        "Smart Living",
                        "iSMART S3",
                        "./assets/products/ismarts3.png",
                        "Um conceito de Smart Living que aproxima tecnologia e experiência."
                    )}

                </div>

                <div class="home-products-footer reveal">

                    <div>

                        <span class="home-section-label">
                            E AINDA HÁ MAIS
                        </span>

                        <p>
                            Explore todo o catálogo e descubra
                            os restantes universos de produto.
                        </p>

                    </div>

                    <button
                        type="button"
                        class="home-button home-button-dark"
                        id="viewProducts">

                        Ver todos os produtos

                        <span>→</span>

                    </button>

                </div>

            </div>

        </section>

    `;

}

function productCard(
    route,
    category,
    title,
    image,
    description
){

    return `

        <article
            class="home-product-card reveal"
            data-product="${route}">

            <div class="home-product-visual">

                <div class="home-product-orb"></div>

                <img
                    src="${image}"
                    alt="${title}"
                    loading="lazy">

                <span class="home-product-index">
                    +
                </span>

            </div>

            <div class="home-product-info">

                <span class="home-product-category">
                    ${category}
                </span>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${description}
                </p>

                <span class="home-product-link">
                    Explorar produto
                    <span>↗</span>
                </span>

            </div>

        </article>

    `;

}

/* ==========================================================
   BUSINESS / ACADEMY
   ========================================================== */

function businessVision(){

    return `

        <section class="home-section home-business">

            <div class="home-container">

                <div class="home-business-panel reveal">

                    <div class="home-business-grid">

                        <div class="home-business-visual">

                            <div class="home-business-circle">

                                <span>
                                    21
                                </span>

                                <small>
                                    ACADEMY
                                </small>

                            </div>

                            <div class="home-business-lines"></div>

                            <div class="home-business-tag">
                                LEARNING · LEADERSHIP · OPPORTUNITY
                            </div>

                        </div>

                        <div class="home-business-copy">

                            <span class="home-section-label">
                                NEGÓCIOS & EVOLUÇÃO
                            </span>

                            <h2>
                                O produto pode abrir
                                uma porta.
                                <span>
                                    O conhecimento pode abrir muitas.
                                </span>
                            </h2>

                            <p>
                                A AD Lifestyle integra uma dimensão
                                educacional e empreendedora através
                                da Academy Twenty One, aproximando
                                pessoas de aprendizagem contínua,
                                liderança, comunicação, networking
                                e novas possibilidades.
                            </p>

                            <div class="home-business-features">

                                ${businessFeature(
                                    "01",
                                    "Desenvolvimento pessoal",
                                    "Aprender para evoluir."
                                )}

                                ${businessFeature(
                                    "02",
                                    "Educação empreendedora",
                                    "Conhecimento para agir."
                                )}

                                ${businessFeature(
                                    "03",
                                    "Liderança & networking",
                                    "Relações que criam valor."
                                )}

                            </div>

                            <button
                                type="button"
                                class="home-button home-button-gold"
                                id="businessAbout">

                                Conhecer a nossa visão

                                <span>→</span>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    `;

}

function businessFeature(number,title,text){

    return `

        <div class="home-business-feature">

            <div>
                ${number}
            </div>

            <section>

                <strong>
                    ${title}
                </strong>

                <span>
                    ${text}
                </span>

            </section>

        </div>

    `;

}

/* ==========================================================
   EVENT
   ========================================================== */

function event(){

    return `

        <section class="home-section home-event">

            <div class="home-container">

                <div class="home-event-header reveal">

                    <div>

                        <span class="home-section-label">
                            PRÓXIMA EXPERIÊNCIA
                        </span>

                        <h2>
                            Conhecimento,
                            encontro e
                            <span>
                                oportunidade.
                            </span>
                        </h2>

                    </div>

                    <button
                        type="button"
                        class="home-text-link"
                        id="allEvents">

                        Ver agenda completa
                        <span>↗</span>

                    </button>

                </div>

                <div class="home-event-card reveal">

                    <div class="home-event-image">

                        <img
                            src="./assets/hotel/fly.png"
                            alt="Fly Hotel"
                            loading="lazy">

                        <div class="home-event-date">

                            <strong>
                                20
                            </strong>

                            <span>
                                SET
                            </span>

                        </div>

                    </div>

                    <div class="home-event-content">

                        <span class="home-section-label">
                            GRANDE APRESENTAÇÃO
                        </span>

                        <h3>
                            Dupla Oportunidade
                        </h3>

                        <p>
                            Uma experiência dedicada a saúde,
                            bem-estar, longevidade, aprendizagem
                            e negócios internacionais.
                        </p>

                        <div class="home-event-details">

                            <span>
                                📅 Domingo · 20 Setembro 2026
                            </span>

                            <span>
                                🕒 15h00
                            </span>

                            <span>
                                📍 Fly Hotel · Luanda
                            </span>

                            <span>
                                🎟️ 2.500 Kz
                            </span>

                        </div>

                        <button
                            type="button"
                            class="home-button home-button-dark"
                            id="eventDetails">

                            Ver evento completo

                            <span>→</span>

                        </button>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   MEDIA / REGISTOS
   ========================================================== */

function mediaShowcase(){

    return `

        <section class="home-section home-media">

            <div class="home-container">

                <div class="home-section-heading home-heading-center reveal">

                    <span class="home-section-label">
                        REGISTOS AD LIFESTYLE
                    </span>

                    <h2>
                        Uma marca também se
                        <span>
                            constrói em momentos.
                        </span>
                    </h2>

                    <p>
                        Aqui poderá reunir fotografias, vídeos,
                        encontros, apresentações e outros registos
                        da evolução da AD Lifestyle.
                    </p>

                </div>

                <div class="home-media-shell reveal">

                    <div class="home-media-stage">

                        ${mediaItems.map(
                            (item,index)=>`

                                <article
                                    class="home-media-slide ${
                                        index === 0
                                            ? "is-active"
                                            : ""
                                    }"
                                    data-media-slide="${index}">

                                    ${
                                        item.type === "video" && item.video
                                        ? `
                                            <video
                                                controls
                                                poster="${item.image}"
                                                preload="metadata">

                                                <source
                                                    src="${item.video}"
                                                    type="video/mp4">

                                                O seu navegador não suporta vídeo.
                                            </video>
                                        `
                                        : `
                                            <img
                                                src="${item.image}"
                                                alt="${item.title}"
                                                loading="lazy">
                                        `
                                    }

                                    <div class="home-media-overlay">

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

                    </div>

                    <div class="home-media-controls">

                        <div class="home-media-counter">

                            <strong id="mediaCurrent">
                                01
                            </strong>

                            <span>
                                /
                            </span>

                            <span>
                                ${String(mediaItems.length).padStart(2,"0")}
                            </span>

                        </div>

                        <div class="home-media-dots">

                            ${mediaItems.map(
                                (_,index)=>`

                                    <button
                                        type="button"
                                        class="${
                                            index === 0
                                                ? "is-active"
                                                : ""
                                        }"
                                        data-media-thumb="${index}"
                                        aria-label="Registo ${index+1}">
                                    </button>

                                `
                            ).join("")}

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

    const testimonials = [

        {
            text:
                "A experiência com a AD Lifestyle começou com um produto, mas rapidamente se transformou numa descoberta muito maior.",
            name:"Maria",
            role:"Comunidade AD Lifestyle"
        },

        {
            text:
                "Gosto da forma como a marca junta Lifestyle, aprendizagem e uma visão de futuro.",
            name:"Ana",
            role:"Comunidade AD Lifestyle"
        },

        {
            text:
                "O mais interessante é perceber que existe uma visão por trás daquilo que está a ser construído.",
            name:"João",
            role:"Comunidade AD Lifestyle"
        },

        {
            text:
                "Uma proposta diferente, mais humana e com vontade de crescer de forma profissional.",
            name:"Helena",
            role:"Comunidade AD Lifestyle"
        }

    ];

    return `

        <section class="home-section home-testimonials">

            <div class="home-container">

                <div class="home-testimonial-heading reveal">

                    <span class="home-section-label">
                        COMUNIDADE
                    </span>

                    <h2>
                        Histórias que ajudam
                        <span>
                            a contar a nossa história.
                        </span>
                    </h2>

                </div>

                <div class="home-testimonial-grid">

                    ${testimonials.map(
                        item=>`

                            <article class="home-testimonial reveal">

                                <div class="home-quote">
                                    “
                                </div>

                                <p>
                                    ${item.text}
                                </p>

                                <div class="home-testimonial-person">

                                    <div class="home-testimonial-avatar">
                                        ${item.name.charAt(0)}
                                    </div>

                                    <div>

                                        <strong>
                                            ${item.name}
                                        </strong>

                                        <span>
                                            ${item.role}
                                        </span>

                                    </div>

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
   DIGITAL PRESENCE
   ========================================================== */

function digitalPresence(){

    return `

        <section class="home-section home-digital">

            <div class="home-container">

                <div class="home-digital-panel reveal">

                    <div class="home-digital-copy">

                        <span class="home-section-label">
                            AD LIFESTYLE DIGITAL
                        </span>

                        <h2>
                            Acompanhe aquilo
                            que estamos a construir.
                        </h2>

                        <p>
                            Produtos, eventos, experiências,
                            conhecimento e novos capítulos
                            da nossa jornada.
                        </p>

                    </div>

                    <div class="home-social-grid">

                        ${socialCard(
                            "IG",
                            "Instagram",
                            "@ad.ambassadoracademy21",
                            "https://www.instagram.com/ad.ambassadoracademy21/"
                        )}

                        ${socialCard(
                            "FB",
                            "Facebook",
                            "AD Lifestyle",
                            "https://web.facebook.com/ad.ambassadoracademy21/"
                        )}

                        ${socialCard(
                            "TK",
                            "TikTok",
                            "@adbdlifestyle",
                            "https://www.tiktok.com/@adbdlifestyle"
                        )}

                    </div>

                </div>

            </div>

        </section>

    `;

}

function socialCard(icon,title,handle,url){

    return `

        <a
            class="home-social-card"
            href="${url}"
            target="_blank"
            rel="noopener noreferrer">

            <div class="home-social-icon">
                ${icon}
            </div>

            <div>

                <strong>
                    ${title}
                </strong>

                <span>
                    ${handle}
                </span>

            </div>

            <span class="home-social-arrow">
                ↗
            </span>

        </a>

    `;

}

/* ==========================================================
   FINAL CTA
   ========================================================== */

function finalCTA(){

    return `

        <section class="home-section home-final">

            <div class="home-container">

                <div class="home-final-panel reveal">

                    <div class="home-final-number">
                        AD
                    </div>

                    <div class="home-final-content">

                        <span class="home-section-label">
                            O PRÓXIMO CAPÍTULO
                        </span>

                        <h2>
                            Talvez a próxima
                            descoberta comece aqui.
                        </h2>

                        <p>
                            Explore a AD Lifestyle, conheça os nossos
                            produtos, descubra o nosso universo e
                            perceba onde esta jornada pode levá-lo.
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

            </div>

        </section>

    `;

}

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseHome(){

    const root = document.querySelector(".home-page");

    if(!root){
        return;
    }

    root
        .querySelectorAll(".home-button")
        .forEach(button=>{
            ripple(button);
        });

    stagger(".home-page .home-product-card");
    stagger(".home-page .home-pillar-card");

    initialiseHero(root);
    initialiseProducts(root);
    initialiseNavigation(root);
    initialiseMedia(root);

}

/* ==========================================================
   HERO SLIDESHOW
   ========================================================== */

function initialiseHero(root){

    const slides = [
        ...root.querySelectorAll("[data-hero-slide]")
    ];

    const products = [
        ...root.querySelectorAll("[data-hero-product]")
    ];

    const thumbs = [
        ...root.querySelectorAll("[data-hero-thumb]")
    ];

    const current =
        root.querySelector("#heroCurrent");

    const progress =
        root.querySelector("#heroProgressBar");

    if(
        !slides.length ||
        !products.length
    ){
        return;
    }

    heroIndex = 0;

    function renderHero(index){

        heroIndex = index;

        slides.forEach(
            (slide,i)=>{
                slide.classList.toggle(
                    "is-active",
                    i === index
                );
            }
        );

        products.forEach(
            (product,i)=>{
                product.classList.toggle(
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
                String(index + 1).padStart(2,"0");

        }

        if(progress){

            progress.style.animation = "none";

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

                    const index =
                        Number(
                            thumb.dataset.heroThumb
                        );

                    renderHero(index);

                    startHeroTimer();

                }
            );

        }
    );

    const stage =
        root.querySelector(".home-hero-image-stage");

    if(stage){

        let startX = 0;

        stage.addEventListener(
            "pointerdown",
            event=>{
                startX = event.clientX;
            }
        );

        stage.addEventListener(
            "pointerup",
            event=>{

                const diff =
                    event.clientX - startX;

                if(Math.abs(diff) < 45){
                    return;
                }

                if(diff < 0){

                    renderHero(
                        (heroIndex + 1) %
                        heroProducts.length
                    );

                }else{

                    renderHero(
                        (heroIndex - 1 + heroProducts.length) %
                        heroProducts.length
                    );

                }

                startHeroTimer();

            }
        );

    }

    function startHeroTimer(){

        clearInterval(heroTimer);

        heroTimer =
            window.setInterval(
                ()=>{

                    renderHero(
                        (heroIndex + 1) %
                        heroProducts.length
                    );

                },
                6000
            );

    }

    renderHero(0);
    startHeroTimer();

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

                    const route =
                        card.dataset.product;

                    if(!route){
                        return;
                    }

                    navigate("/" + route);

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
        .querySelector("#businessAbout")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/about");
            }
        );

    root
        .querySelector("#allEvents")
        ?.addEventListener(
            "click",
            ()=>{
                navigate("/events");
            }
        );

    root
        .querySelector("#eventDetails")
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

    root
        .querySelectorAll("[data-route-action]")
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const route =
                        button.dataset.routeAction;

                    if(route){
                        navigate(route);
                    }

                }
            );

        });

}

/* ==========================================================
   MEDIA SLIDESHOW
   ========================================================== */

function initialiseMedia(root){

    const slides = [
        ...root.querySelectorAll(
            "[data-media-slide]"
        )
    ];

    const thumbs = [
        ...root.querySelectorAll(
            "[data-media-thumb]"
        )
    ];

    const current =
        root.querySelector("#mediaCurrent");

    if(!slides.length){
        return;
    }

    mediaIndex = 0;

    function renderMedia(index){

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
                String(index + 1).padStart(2,"0");

        }

    }

    thumbs.forEach(
        thumb=>{

            thumb.addEventListener(
                "click",
                ()=>{

                    renderMedia(
                        Number(
                            thumb.dataset.mediaThumb
                        )
                    );

                    startMediaTimer();

                }
            );

        }
    );

    function startMediaTimer(){

        clearInterval(mediaTimer);

        mediaTimer =
            window.setInterval(
                ()=>{

                    renderMedia(
                        (mediaIndex + 1) %
                        slides.length
                    );

                },
                5000
            );

    }

    renderMedia(0);
    startMediaTimer();

}

/* ==========================================================
   CLEANUP
   ========================================================== */

function clearHomeTimers(){

    if(heroTimer){

        clearInterval(heroTimer);
        heroTimer = null;

    }

    if(mediaTimer){

        clearInterval(mediaTimer);
        mediaTimer = null;

    }

}
