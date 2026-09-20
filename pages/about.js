/* ==========================================================
   AD LIFESTYLE V2
   ABOUT PAGE
   Premium / Editorial / Institutional
   Base visual: EVENTS
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple } from "../js/animations.js";

/* ==========================================================
   CONFIG
   ========================================================== */

const CONTACT = {
    whatsapp: "https://wa.me/244924964666"
};

const LINKS = {
    bzzworld: "https://www.bzzworld.com/",
    academy21: "https://www.academytwentyone.com/"
};

const ASSETS = {
    logo: "./assets/logo/logo.png",
    abdoulahi: "./assets/images/abdoulahi.png",
    bzzworld: "./assets/images/bzzworld.png",
    academy21: "./assets/images/a21.png"
};

/* ==========================================================
   ICONS
   ========================================================== */

const icons = {

    arrow: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13"></path>
            <path d="M13 6l6 6-6 6"></path>
        </svg>
    `,

    external: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5h5v5"></path>
            <path d="M10 14L19 5"></path>
            <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 12 4 4L19 6"></path>
        </svg>
    `

};

/* ==========================================================
   MAIN
   ========================================================== */

export function loadAbout(){

    applyTheme("default");

    const app = document.getElementById("app");

    if(!app){
        console.error("AD LIFESTYLE: #app não encontrado.");
        return;
    }

    app.innerHTML = `
        <div class="about-page">

            ${renderHero()}

            ${renderManifesto()}

            ${renderWhoWeAre()}

            ${renderEcosystemIntro()}

            ${renderBzzworld()}

            ${renderAcademy21()}

            ${renderLeadership()}

            ${renderDirection()}

            ${renderJourney()}

            ${renderFuture()}

            ${renderCTA()}

        </div>
    `;

    initialiseAbout();
}

/* ==========================================================
   HERO
   ========================================================== */

function renderHero(){

    return `
        <section class="about-hero">

            <div class="about-hero-bg"></div>

            <div class="about-container about-hero-container">

                <div class="about-hero-top">

                    <span>
                        AD LIFESTYLE
                    </span>

                    <span>
                        ABOUT / 01
                    </span>

                </div>

                <div class="about-hero-main">

                    <div class="about-hero-copy">

                        <div class="about-eyebrow">
                            UMA VISÃO · UM MOVIMENTO
                        </div>

                        <h1>
                            Criamos
                            <span>pontes</span>
                            para novas
                            possibilidades.
                        </h1>

                        <p>
                            Wellness, aprendizagem, desenvolvimento
                            e conexão humana reunidos numa organização
                            criada para aproximar pessoas de novas
                            possibilidades.
                        </p>

                        <div class="about-hero-actions">

                            <a
                                href="#about-ecosystem"
                                class="about-button about-button-gold"
                                data-scroll-target="#about-ecosystem"
                            >
                                <span>
                                    Descobrir o nosso universo
                                </span>

                                ${icons.arrow}
                            </a>

                            <a
                                href="#about-story"
                                class="about-button about-button-outline"
                                data-scroll-target="#about-story"
                            >
                                <span>
                                    Conhecer a nossa história
                                </span>
                            </a>

                        </div>

                    </div>

                    <div class="about-hero-visual">

                        <div class="about-hero-image-wrap">

                            <div class="about-hero-image">

                                <img
                                    src="${ASSETS.abdoulahi}"
                                    alt="Abdoulahi Doucoure"
                                    loading="eager"
                                    decoding="async"
                                >

                            </div>

                            <div class="about-hero-image-accent"></div>

                        </div>

                        <div class="about-hero-brand-card">

                            <div class="about-hero-logo">

                                <img
                                    src="${ASSETS.logo}"
                                    alt="AD Lifestyle"
                                    loading="eager"
                                >

                            </div>

                            <div class="about-hero-brand-copy">

                                <span>
                                    AD LIFESTYLE
                                </span>

                                <small>
                                    Wellness · Evolution
                                </small>

                            </div>

                            <strong>
                                2026
                            </strong>

                        </div>

                        <div class="about-hero-caption">

                            <span></span>

                            <p>
                                Uma visão transformada
                                em movimento.
                            </p>

                        </div>

                    </div>

                </div>

                <div class="about-hero-bottom">

                    <span>
                        LUANDA · ANGOLA
                    </span>

                    <span class="about-hero-scroll">
                        SCROLL
                        <i></i>
                    </span>

                    <span>
                        WELLNESS / EVOLUTION
                    </span>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   MANIFESTO
   ========================================================== */

function renderManifesto(){

    return `
        <section class="about-manifesto">

            <div class="about-container about-manifesto-grid">

                <div class="about-section-label">

                    <strong>
                        02
                    </strong>

                    <span>
                        MANIFESTO
                    </span>

                </div>

                <div class="about-manifesto-content">

                    <div class="about-eyebrow">
                        MAIS DO QUE UMA MARCA
                    </div>

                    <h2>
                        Não queremos apenas
                        <em>vender.</em>
                        Queremos
                        <strong>conectar.</strong>
                    </h2>

                    <p>
                        Acreditamos que novas possibilidades surgem
                        quando as pessoas certas encontram produtos,
                        conhecimento, experiências e relações que
                        podem acrescentar valor à sua jornada.
                    </p>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   WHO WE ARE
   ========================================================== */

function renderWhoWeAre(){

    return `
        <section
            class="about-who"
            id="about-story"
        >

            <div class="about-container">

                <div class="about-section-heading">

                    <div>

                        <div class="about-eyebrow">
                            QUEM SOMOS
                        </div>

                        <h2>
                            Uma organização construída
                            <span>
                                à volta das pessoas.
                            </span>
                        </h2>

                    </div>

                    <p>
                        A AD Lifestyle nasce com uma missão simples:
                        criar pontes entre pessoas e novas
                        possibilidades de wellness, aprendizagem,
                        desenvolvimento e evolução.
                    </p>

                </div>

                <div class="about-who-card">

                    <div class="about-who-card-number">
                        01
                    </div>

                    <div class="about-who-card-title">

                        <small>
                            A NOSSA IDEIA CENTRAL
                        </small>

                        <h3>
                            Conectar.
                        </h3>

                    </div>

                    <div class="about-who-card-text">

                        <p>
                            Não funcionamos como um ponto isolado.
                            Somos uma estrutura de conexão entre
                            universos complementares.
                        </p>

                        <p>
                            Wellness de um lado. Desenvolvimento
                            e aprendizagem do outro. Pessoas no
                            centro de ambos.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   ECOSYSTEM INTRO
   ========================================================== */

function renderEcosystemIntro(){

    return `
        <section
            class="about-ecosystem-intro"
            id="about-ecosystem"
        >

            <div class="about-container">

                <div class="about-section-heading about-section-heading-ecosystem">

                    <div>

                        <div class="about-eyebrow">
                            O NOSSO ECOSSISTEMA
                        </div>

                        <h2>
                            Dois universos.
                            <span>
                                Uma direcção.
                            </span>
                        </h2>

                    </div>

                    <p>
                        A AD Lifestyle aproxima duas dimensões
                        complementares: o universo do wellness
                        e o universo da evolução.
                    </p>

                </div>

                <div class="about-ecosystem-map">

                    <div class="about-ecosystem-side">

                        <small>
                            01
                        </small>

                        <strong>
                            WELLNESS
                        </strong>

                    </div>

                    <div class="about-ecosystem-line"></div>

                    <div class="about-ecosystem-core">

                        <img
                            src="${ASSETS.logo}"
                            alt="AD Lifestyle"
                            loading="lazy"
                        >

                    </div>

                    <div class="about-ecosystem-line"></div>

                    <div class="about-ecosystem-side about-ecosystem-side-right">

                        <small>
                            02
                        </small>

                        <strong>
                            EVOLUTION
                        </strong>

                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   BZZWORLD
   ========================================================== */

function renderBzzworld(){

    return `
        <section class="about-brand about-brand-bzzworld">

            <div class="about-container about-brand-grid">

                <div class="about-brand-visual">

                    <span class="about-brand-number">
                        01
                    </span>

                    <div class="about-brand-image">

                        <img
                            src="${ASSETS.bzzworld}"
                            alt="BZZWORLD"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                    <span class="about-brand-category">
                        WELLNESS
                    </span>

                </div>

                <div class="about-brand-content">

                    <div class="about-eyebrow">
                        PRIMEIRO UNIVERSO
                    </div>

                    <div class="about-brand-title">
                        BZZWORLD
                    </div>

                    <h2>
                        Bem-estar que
                        encontra o lifestyle.
                    </h2>

                    <p>
                        Através da BZZWORLD, a AD Lifestyle aproxima
                        pessoas de um universo de produtos,
                        experiências e possibilidades relacionadas
                        com wellness e estilo de vida.
                    </p>

                    <div class="about-brand-list">

                        <span>
                            ${icons.check}
                            Wellness
                        </span>

                        <span>
                            ${icons.check}
                            Lifestyle
                        </span>

                        <span>
                            ${icons.check}
                            Produtos
                        </span>

                    </div>

                    <a
                        href="${LINKS.bzzworld}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="about-brand-link"
                    >
                        <span>
                            Saber mais sobre a BZZWORLD
                        </span>

                        ${icons.external}
                    </a>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   ACADEMY 21
   ========================================================== */

function renderAcademy21(){

    return `
        <section class="about-brand about-brand-academy">

            <div class="about-container about-brand-grid about-brand-grid-reverse">

                <div class="about-brand-content">

                    <div class="about-eyebrow">
                        SEGUNDO UNIVERSO
                    </div>

                    <div class="about-brand-title">
                        ACADEMY 21
                    </div>

                    <h2>
                        Conhecimento que
                        transforma potencial.
                    </h2>

                    <p>
                        Através da Academy Twenty One, aproximamo-nos
                        de experiências ligadas a desenvolvimento
                        pessoal, liderança, aprendizagem, networking
                        e empreendedorismo.
                    </p>

                    <div class="about-brand-list">

                        <span>
                            ${icons.check}
                            Desenvolvimento
                        </span>

                        <span>
                            ${icons.check}
                            Liderança
                        </span>

                        <span>
                            ${icons.check}
                            Empreendedorismo
                        </span>

                    </div>

                    <a
                        href="${LINKS.academy21}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="about-brand-link"
                    >
                        <span>
                            Saber mais sobre a Academy 21
                        </span>

                        ${icons.external}
                    </a>

                </div>

                <div class="about-brand-visual">

                    <span class="about-brand-number">
                        02
                    </span>

                    <div class="about-brand-image">

                        <img
                            src="${ASSETS.academy21}"
                            alt="Academy Twenty One"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                    <span class="about-brand-category">
                        EVOLUTION
                    </span>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   LEADERSHIP
   ========================================================== */

function renderLeadership(){

    return `
        <section class="about-leadership">

            <div class="about-container about-leadership-grid">

                <div class="about-leadership-image">

                    <img
                        src="${ASSETS.abdoulahi}"
                        alt="Abdoulahi Doucoure"
                        loading="lazy"
                        decoding="async"
                    >

                    <div class="about-leadership-image-info">

                        <span>
                            VISION
                        </span>

                        <strong>
                            AD LIFESTYLE
                        </strong>

                    </div>

                </div>

                <div class="about-leadership-content">

                    <div class="about-eyebrow">
                        LIDERANÇA
                    </div>

                    <small>
                        UMA VISÃO TRANSFORMADA EM ORGANIZAÇÃO.
                    </small>

                    <h2>
                        Abdoulahi
                        <span>
                            Doucoure
                        </span>
                    </h2>

                    <div class="about-leadership-line"></div>

                    <p>
                        Uma organização começa com uma visão,
                        mas cresce quando essa visão encontra
                        consistência, pessoas e vontade de construir.
                    </p>

                    <p>
                        É essa perspectiva que orienta o
                        desenvolvimento da AD Lifestyle:
                        criar uma estrutura capaz de gerar
                        conexões, experiências e novas possibilidades.
                    </p>

                    <div class="about-leadership-signature">
                        VISION · PEOPLE · FUTURE
                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   DIRECTION
   ========================================================== */

function renderDirection(){

    return `
        <section class="about-direction">

            <div class="about-container">

                <div class="about-direction-heading">

                    <div class="about-eyebrow">
                        A NOSSA DIRECÇÃO
                    </div>

                    <h2>
                        O que nos orienta
                        <span>
                            todos os dias.
                        </span>
                    </h2>

                </div>

                <div class="about-direction-grid">

                    <article>

                        <span>
                            01
                        </span>

                        <h3>
                            Visão
                        </h3>

                        <p>
                            Tornar a AD Lifestyle uma referência na
                            criação de pontes entre wellness,
                            conhecimento, pessoas e oportunidades.
                        </p>

                    </article>

                    <article class="about-direction-main">

                        <span>
                            02
                        </span>

                        <h3>
                            Missão
                        </h3>

                        <p>
                            Criar experiências e conexões que
                            aproximem pessoas de produtos,
                            conhecimento, desenvolvimento e
                            novos caminhos.
                        </p>

                    </article>

                    <article>

                        <span>
                            03
                        </span>

                        <h3>
                            Valores
                        </h3>

                        <ul>

                            <li>
                                ${icons.check}
                                Integridade
                            </li>

                            <li>
                                ${icons.check}
                                Aprendizagem
                            </li>

                            <li>
                                ${icons.check}
                                Excelência
                            </li>

                            <li>
                                ${icons.check}
                                Pessoas
                            </li>

                        </ul>

                    </article>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   JOURNEY
   ========================================================== */

function renderJourney(){

    const items = [
        [
            "01",
            "Fundação",
            "Uma visão nasce com a vontade de aproximar pessoas de novas possibilidades."
        ],
        [
            "02",
            "Estrutura",
            "A ideia transforma-se numa organização com identidade, direcção e propósito."
        ],
        [
            "03",
            "Ecossistema",
            "Wellness e Evolution passam a coexistir numa experiência integrada."
        ],
        [
            "04",
            "Experiência",
            "Eventos, campanhas, apresentações, conteúdos e experiências digitais aproximam a organização das pessoas."
        ],
        [
            "05",
            "Expansão",
            "O próximo capítulo é continuar a criar pontes dentro e além-fronteiras."
        ]
    ];

    return `
        <section class="about-journey">

            <div class="about-container">

                <div class="about-journey-heading">

                    <div class="about-eyebrow">
                        A NOSSA JORNADA
                    </div>

                    <h2>
                        Uma construção
                        <span>
                            contínua.
                        </span>
                    </h2>

                </div>

                <div class="about-journey-list">

                    ${items.map(item => `
                        <article class="about-journey-item">

                            <div class="about-journey-number">
                                ${item[0]}
                            </div>

                            <div class="about-journey-title">

                                <small>
                                    ${item[0]}
                                </small>

                                <h3>
                                    ${item[1]}
                                </h3>

                            </div>

                            <div class="about-journey-text">

                                <p>
                                    ${item[2]}
                                </p>

                            </div>

                        </article>
                    `).join("")}

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   FUTURE
   ========================================================== */

function renderFuture(){

    return `
        <section class="about-future">

            <div class="about-future-mark">
                AD
            </div>

            <div class="about-container">

                <div class="about-future-content">

                    <div class="about-eyebrow">
                        THE NEXT CHAPTER
                    </div>

                    <h2>
                        Hoje construímos
                        a organização que
                        <span>
                            queremos ver amanhã.
                        </span>
                    </h2>

                    <p>
                        Mais experiências.
                        Mais aprendizagem.
                        Mais conexões.
                        Mais possibilidades.
                    </p>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   CTA
   ========================================================== */

function renderCTA(){

    return `
        <section class="about-cta">

            <div class="about-container">

                <div class="about-cta-box">

                    <div class="about-cta-brand">

                        <img
                            src="${ASSETS.logo}"
                            alt="AD Lifestyle"
                            loading="lazy"
                        >

                    </div>

                    <div class="about-cta-content">

                        <div class="about-eyebrow">
                            AD LIFESTYLE
                        </div>

                        <h2>
                            O próximo passo
                            <span>
                                começa aqui.
                            </span>
                        </h2>

                        <p>
                            Explore o nosso universo, descubra os
                            produtos ou entre directamente em
                            contacto connosco.
                        </p>

                    </div>

                    <div class="about-cta-actions">

                        <button
                            type="button"
                            class="about-button about-button-gold"
                            data-action="products"
                        >
                            <span>
                                Explorar produtos
                            </span>

                            ${icons.arrow}

                        </button>

                        <a
                            href="${CONTACT.whatsapp}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="about-button about-button-dark"
                        >
                            <span>
                                Falar connosco
                            </span>

                            ${icons.arrow}

                        </a>

                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseAbout(){

    /* ------------------------------------------------------
       Smooth scroll
       ------------------------------------------------------ */

    document
        .querySelectorAll(
            ".about-page [data-scroll-target]"
        )
        .forEach(link => {

            link.addEventListener("click", event => {

                event.preventDefault();

                const selector =
                    link.dataset.scrollTarget;

                const target =
                    document.querySelector(selector);

                if(!target){
                    return;
                }

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

    /* ------------------------------------------------------
       Products
       ------------------------------------------------------ */

    document
        .querySelectorAll(
            '.about-page [data-action="products"]'
        )
        .forEach(button => {

            button.addEventListener("click", () => {
                navigate("/products");
            });

            if(typeof ripple === "function"){
                ripple(button);
            }

        });

    /* ------------------------------------------------------
       Buttons
       ------------------------------------------------------ */

    document
        .querySelectorAll(
            ".about-page .about-button"
        )
        .forEach(button => {

            if(typeof ripple === "function"){
                ripple(button);
            }

        });

    /* ------------------------------------------------------
       Reveal observer
       ------------------------------------------------------ */

    const revealElements =
        document.querySelectorAll(`
            .about-manifesto-content,
            .about-section-heading,
            .about-who-card,
            .about-ecosystem-map,
            .about-brand,
            .about-leadership-grid,
            .about-direction-heading,
            .about-direction-grid,
            .about-journey-heading,
            .about-journey-item,
            .about-future-content,
            .about-cta-box
        `);

    /*
       Os elementos já ficam visíveis por CSS.
       O observer apenas acrescenta a animação.
    */

    if("IntersectionObserver" in window){

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if(!entry.isIntersecting){
                            return;
                        }

                        entry.target.classList.add(
                            "about-is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px"
                }
            );

        revealElements.forEach(element => {
            observer.observe(element);
        });

    }else{

        revealElements.forEach(element => {
            element.classList.add(
                "about-is-visible"
            );
        });

    }

    /* ------------------------------------------------------
       Hero image movement
       ------------------------------------------------------ */

    const hero =
        document.querySelector(
            ".about-hero"
        );

    const heroImage =
        document.querySelector(
            ".about-hero-image"
        );

    if(
        hero &&
        heroImage &&
        window.matchMedia("(pointer:fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ){

        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();

                const x =
                    ((event.clientX - rect.left) /
                        rect.width) - 0.5;

                const y =
                    ((event.clientY - rect.top) /
                        rect.height) - 0.5;

                heroImage.style.transform = `
                    translate(
                        ${x * 7}px,
                        ${y * 7}px
                    ) scale(1.02)
                `;

            }
        );

        hero.addEventListener(
            "mouseleave",
            () => {

                heroImage.style.transform =
                    "translate(0,0) scale(1)";

            }
        );

    }

}
