/* ==========================================================
   AD LIFESTYLE V2
   ABOUT PAGE
   Editorial / Premium / Institutional
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

const EXTERNAL = {
    bzzworld: "https://www.bzzworld.com/",
    academy21: "https://www.academytwentyone.com/"
};

const ASSETS = {
    logo: "./assets/logo/logo.png",
    founder: "./assets/images/abdoulahi.png",
    bzzworld: "./assets/images/bzzworld.png",
    academy21: "./assets/images/a21.png"
};

/* ==========================================================
   ICONS
   ========================================================== */

const icon = {

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
            <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"></path>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 12 4 4L19 6"></path>
        </svg>
    `,

    plus: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14"></path>
            <path d="M5 12h14"></path>
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
        <main class="about-page">

            ${hero()}

            ${statement()}

            ${whoWeAre()}

            ${ecosystemIntro()}

            ${bzzworldSection()}

            ${academySection()}

            ${leadership()}

            ${visionMission()}

            ${journey()}

            ${future()}

            ${cta()}

        </main>
    `;

    initialiseAbout();
}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `
        <section class="about-hero">

            <div class="about-hero-background"></div>

            <div class="about-hero-top">

                <span class="about-overline">
                    AD LIFESTYLE
                </span>

                <span class="about-overline about-overline-right">
                    ABOUT / 01
                </span>

            </div>

            <div class="about-hero-layout">

                <div class="about-hero-copy">

                    <span class="about-eyebrow">
                        UMA ORGANIZAÇÃO · UMA VISÃO
                    </span>

                    <h1>
                        Criamos
                        <span>pontes</span>
                        para novas
                        possibilidades.
                    </h1>

                    <p>
                        Wellness, aprendizagem, desenvolvimento
                        e conexão humana reunidos numa experiência
                        criada para acompanhar pessoas em evolução.
                    </p>

                    <div class="about-hero-actions">

                        <a
                            href="#about-ecosystem"
                            class="about-button about-button-gold"
                            data-scroll="#about-ecosystem"
                        >
                            <span>Descobrir o ecossistema</span>
                            ${icon.arrow}
                        </a>

                        <a
                            href="#about-story"
                            class="about-button about-button-light"
                            data-scroll="#about-story"
                        >
                            <span>Conhecer a nossa história</span>
                        </a>

                    </div>

                </div>

                <div class="about-hero-visual">

                    <div class="about-hero-image">

                        <img
                            src="${ASSETS.founder}"
                            alt="Abdoulahi Doucoure"
                        >

                    </div>

                    <div class="about-hero-panel">

                        <div class="about-hero-logo">

                            <img
                                src="${ASSETS.logo}"
                                alt="AD Lifestyle"
                            >

                        </div>

                        <div class="about-hero-panel-copy">

                            <span>
                                AD LIFESTYLE
                            </span>

                            <strong>
                                Wellness · Evolution
                            </strong>

                        </div>

                        <span class="about-hero-panel-number">
                            2026
                        </span>

                    </div>

                    <div class="about-hero-caption">

                        <span class="about-caption-line"></span>

                        <span>
                            Uma visão transformada
                            em movimento.
                        </span>

                    </div>

                </div>

            </div>

            <div class="about-hero-bottom">

                <span>LUANDA · ANGOLA</span>

                <span class="about-hero-scroll">
                    SCROLL
                    <i></i>
                </span>

                <span>WELLNESS / EVOLUTION</span>

            </div>

        </section>
    `;
}

/* ==========================================================
   STATEMENT
   ========================================================== */

function statement(){

    return `
        <section class="about-statement">

            <div class="about-section-marker">
                <span>02</span>
                <small>MANIFESTO</small>
            </div>

            <div class="about-statement-content">

                <p class="about-eyebrow">
                    MAIS DO QUE UMA MARCA
                </p>

                <h2>
                    Não queremos apenas
                    <em>vender.</em>
                    Queremos
                    <strong>conectar.</strong>
                </h2>

                <p class="about-statement-support">
                    Acreditamos que as melhores oportunidades
                    surgem quando pessoas, conhecimento,
                    soluções e relações certas se encontram.
                </p>

            </div>

        </section>
    `;
}

/* ==========================================================
   WHO WE ARE
   ========================================================== */

function whoWeAre(){

    return `
        <section class="about-who" id="about-story">

            <div class="about-container">

                <div class="about-who-header">

                    <div>

                        <p class="about-eyebrow">
                            QUEM SOMOS
                        </p>

                        <h2>
                            Uma organização construída
                            <span>à volta das pessoas.</span>
                        </h2>

                    </div>

                    <p>
                        A AD Lifestyle nasce com uma missão clara:
                        criar pontes entre pessoas e novas
                        possibilidades de bem-estar, aprendizagem,
                        desenvolvimento e crescimento.
                    </p>

                </div>

                <div class="about-who-feature">

                    <div class="about-who-number">
                        01
                    </div>

                    <div class="about-who-title">
                        <span>IDEIA CENTRAL</span>

                        <h3>
                            Conectar
                            <br>
                            pessoas.
                        </h3>
                    </div>

                    <div class="about-who-description">

                        <p>
                            Não funcionamos como um ponto isolado.
                            Somos uma estrutura de conexão entre
                            universos complementares.
                        </p>

                        <p>
                            De um lado, soluções e experiências
                            ligadas ao wellness. Do outro,
                            aprendizagem, desenvolvimento e
                            evolução pessoal.
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

function ecosystemIntro(){

    return `
        <section
            class="about-ecosystem-intro"
            id="about-ecosystem"
        >

            <div class="about-container">

                <div class="about-ecosystem-heading">

                    <div>

                        <p class="about-eyebrow">
                            O NOSSO ECOSSISTEMA
                        </p>

                        <h2>
                            Dois universos.
                            <span>Uma direcção.</span>
                        </h2>

                    </div>

                    <p>
                        A AD Lifestyle aproxima duas dimensões
                        complementares que acreditamos serem
                        importantes para uma vida mais completa.
                    </p>

                </div>

                <div class="about-ecosystem-line">

                    <div class="about-ecosystem-node">
                        <span>01</span>
                        <strong>WELLNESS</strong>
                    </div>

                    <div class="about-ecosystem-connector"></div>

                    <div class="about-ecosystem-core">

                        <img
                            src="${ASSETS.logo}"
                            alt="AD Lifestyle"
                        >

                    </div>

                    <div class="about-ecosystem-connector"></div>

                    <div class="about-ecosystem-node">
                        <span>02</span>
                        <strong>EVOLUTION</strong>
                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   BZZWORLD
   ========================================================== */

function bzzworldSection(){

    return `
        <section class="about-brand-section about-brand-section-bzz">

            <div class="about-brand-image-wrap">

                <div class="about-brand-index">
                    01
                </div>

                <div class="about-brand-image">

                    <img
                        src="${ASSETS.bzzworld}"
                        alt="BZZWORLD"
                    >

                </div>

                <div class="about-brand-image-note">
                    WELLNESS
                </div>

            </div>

            <div class="about-brand-content">

                <p class="about-eyebrow">
                    PRIMEIRO UNIVERSO
                </p>

                <div class="about-brand-name">
                    BZZWORLD
                </div>

                <h2>
                    Bem-estar que
                    encontra o lifestyle.
                </h2>

                <p class="about-brand-description">
                    Através da BZZWORLD, a AD Lifestyle aproxima
                    pessoas de um universo de produtos,
                    experiências e possibilidades ligadas ao
                    wellness e ao estilo de vida.
                </p>

                <div class="about-brand-points">

                    <div>
                        ${icon.check}
                        <span>Wellness</span>
                    </div>

                    <div>
                        ${icon.check}
                        <span>Lifestyle</span>
                    </div>

                    <div>
                        ${icon.check}
                        <span>Produtos</span>
                    </div>

                </div>

                <a
                    href="${EXTERNAL.bzzworld}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="about-brand-link"
                >
                    <span>Saber mais sobre a BZZWORLD</span>
                    ${icon.external}
                </a>

            </div>

        </section>
    `;
}

/* ==========================================================
   ACADEMY 21
   ========================================================== */

function academySection(){

    return `
        <section class="about-brand-section about-brand-section-a21">

            <div class="about-brand-content">

                <p class="about-eyebrow">
                    SEGUNDO UNIVERSO
                </p>

                <div class="about-brand-name">
                    ACADEMY 21
                </div>

                <h2>
                    Conhecimento que
                    transforma potencial.
                </h2>

                <p class="about-brand-description">
                    Através da Academy Twenty One, aproximamo-nos
                    de experiências de desenvolvimento pessoal,
                    liderança, aprendizagem, networking e
                    empreendedorismo.
                </p>

                <div class="about-brand-points">

                    <div>
                        ${icon.check}
                        <span>Desenvolvimento</span>
                    </div>

                    <div>
                        ${icon.check}
                        <span>Liderança</span>
                    </div>

                    <div>
                        ${icon.check}
                        <span>Empreendedorismo</span>
                    </div>

                </div>

                <a
                    href="${EXTERNAL.academy21}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="about-brand-link"
                >
                    <span>Saber mais sobre a Academy 21</span>
                    ${icon.external}
                </a>

            </div>

            <div class="about-brand-image-wrap">

                <div class="about-brand-index">
                    02
                </div>

                <div class="about-brand-image">

                    <img
                        src="${ASSETS.academy21}"
                        alt="Academy Twenty One"
                    >

                </div>

                <div class="about-brand-image-note">
                    EVOLUTION
                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   LEADERSHIP
   ========================================================== */

function leadership(){

    return `
        <section class="about-leadership">

            <div class="about-container">

                <div class="about-leadership-grid">

                    <div class="about-leadership-image">

                        <img
                            src="${ASSETS.founder}"
                            alt="Abdoulahi Doucoure"
                        >

                        <div class="about-leadership-image-label">

                            <span>VISION</span>

                            <strong>
                                AD LIFESTYLE
                            </strong>

                        </div>

                    </div>

                    <div class="about-leadership-copy">

                        <p class="about-eyebrow">
                            LIDERANÇA
                        </p>

                        <span class="about-leadership-small">
                            UMA VISÃO TRANSFORMADA EM ORGANIZAÇÃO.
                        </span>

                        <h2>
                            Abdoulahi
                            <span>Doucoure</span>
                        </h2>

                        <div class="about-leadership-rule"></div>

                        <p>
                            Uma organização começa quando uma ideia
                            encontra visão, consistência e vontade
                            de construir.
                        </p>

                        <p>
                            É essa perspectiva que orienta o
                            desenvolvimento da AD Lifestyle:
                            construir uma estrutura capaz de criar
                            valor, conexões e novas possibilidades.
                        </p>

                        <div class="about-leadership-signature">
                            <span>VISION · PEOPLE · FUTURE</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   VISION MISSION
   ========================================================== */

function visionMission(){

    return `
        <section class="about-direction">

            <div class="about-container">

                <div class="about-direction-heading">

                    <p class="about-eyebrow">
                        A NOSSA DIRECÇÃO
                    </p>

                    <h2>
                        O que nos orienta
                        <span>todos os dias.</span>
                    </h2>

                </div>

                <div class="about-direction-grid">

                    <article>

                        <span>01</span>

                        <h3>
                            Visão
                        </h3>

                        <p>
                            Tornar a AD Lifestyle uma referência
                            na criação de pontes entre wellness,
                            conhecimento, pessoas e oportunidades.
                        </p>

                    </article>

                    <article class="about-direction-featured">

                        <span>02</span>

                        <h3>
                            Missão
                        </h3>

                        <p>
                            Criar experiências e conexões que
                            aproximem pessoas de produtos,
                            conhecimento, desenvolvimento e novos
                            caminhos.
                        </p>

                    </article>

                    <article>

                        <span>03</span>

                        <h3>
                            Valores
                        </h3>

                        <ul>

                            <li>
                                ${icon.check}
                                Integridade
                            </li>

                            <li>
                                ${icon.check}
                                Aprendizagem
                            </li>

                            <li>
                                ${icon.check}
                                Excelência
                            </li>

                            <li>
                                ${icon.check}
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

function journey(){

    return `
        <section class="about-journey">

            <div class="about-container">

                <div class="about-journey-heading">

                    <p class="about-eyebrow">
                        A NOSSA JORNADA
                    </p>

                    <h2>
                        Uma construção
                        <span>contínua.</span>
                    </h2>

                </div>

                <div class="about-journey-list">

                    ${journeyItem(
                        "01",
                        "Fundação",
                        "Uma visão nasce com a vontade de aproximar pessoas de novas possibilidades."
                    )}

                    ${journeyItem(
                        "02",
                        "Estrutura",
                        "A ideia transforma-se numa organização com identidade, direcção e propósito."
                    )}

                    ${journeyItem(
                        "03",
                        "Ecossistema",
                        "Wellness e Evolution passam a coexistir dentro de uma experiência integrada."
                    )}

                    ${journeyItem(
                        "04",
                        "Experiência",
                        "Eventos, campanhas, apresentações, conteúdos e experiências digitais aproximam a organização das pessoas."
                    )}

                    ${journeyItem(
                        "05",
                        "Expansão",
                        "O próximo capítulo é continuar a criar pontes dentro e além-fronteiras."
                    )}

                </div>

            </div>

        </section>
    `;
}

function journeyItem(number, title, text){

    return `
        <article class="about-journey-item">

            <div class="about-journey-marker">
                ${number}
            </div>

            <div class="about-journey-title">
                <span>${number}</span>
                <h3>${title}</h3>
            </div>

            <div class="about-journey-text">
                <p>${text}</p>
            </div>

        </article>
    `;
}

/* ==========================================================
   FUTURE
   ========================================================== */

function future(){

    return `
        <section class="about-future">

            <div class="about-future-watermark">
                AD
            </div>

            <div class="about-container">

                <div class="about-future-content">

                    <p class="about-eyebrow">
                        THE NEXT CHAPTER
                    </p>

                    <h2>
                        Hoje construímos
                        a organização que
                        <span>queremos ver amanhã.</span>
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

function cta(){

    return `
        <section class="about-cta">

            <div class="about-container">

                <div class="about-cta-box">

                    <div class="about-cta-brand">

                        <img
                            src="${ASSETS.logo}"
                            alt="AD Lifestyle"
                        >

                    </div>

                    <div class="about-cta-copy">

                        <p class="about-eyebrow">
                            AD LIFESTYLE
                        </p>

                        <h2>
                            Vamos criar a próxima
                            <span>possibilidade.</span>
                        </h2>

                        <p>
                            Explore o nosso universo,
                            descubra os produtos ou entre
                            directamente em contacto connosco.
                        </p>

                    </div>

                    <div class="about-cta-actions">

                        <button
                            type="button"
                            class="about-button about-button-gold"
                            data-action="products"
                        >
                            <span>Explorar produtos</span>
                            ${icon.arrow}
                        </button>

                        <a
                            href="${CONTACT.whatsapp}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="about-button about-button-dark"
                        >
                            <span>Falar connosco</span>
                            ${icon.arrow}
                        </a>

                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   INITIALISATION
   ========================================================== */

function initialiseAbout(){

    /* ------------------------------------------------------
       Smooth anchors
       ------------------------------------------------------ */

    document
        .querySelectorAll(".about-page [data-scroll]")
        .forEach(link => {

            link.addEventListener("click", event => {

                event.preventDefault();

                const selector = link.dataset.scroll;
                const target = document.querySelector(selector);

                if(target){

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });

    /* ------------------------------------------------------
       Products
       ------------------------------------------------------ */

    document
        .querySelectorAll('.about-page [data-action="products"]')
        .forEach(button => {

            button.addEventListener("click", () => {
                navigate("/products");
            });

            if(typeof ripple === "function"){
                ripple(button);
            }

        });

    /* ------------------------------------------------------
       Buttons ripple
       ------------------------------------------------------ */

    document
        .querySelectorAll(".about-page .about-button")
        .forEach(button => {

            if(typeof ripple === "function"){
                ripple(button);
            }

        });

    /* ------------------------------------------------------
       Reveal
       ------------------------------------------------------ */

    const revealItems =
        document.querySelectorAll(`
            .about-page .about-statement-content,
            .about-page .about-who-header,
            .about-page .about-who-feature,
            .about-page .about-ecosystem-heading,
            .about-page .about-ecosystem-line,
            .about-page .about-brand-section,
            .about-page .about-leadership-grid,
            .about-page .about-direction-heading,
            .about-page .about-direction-grid,
            .about-page .about-journey-heading,
            .about-page .about-journey-item,
            .about-page .about-future-content,
            .about-page .about-cta-box
        `);

    if("IntersectionObserver" in window){

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if(!entry.isIntersecting){
                        return;
                    }

                    entry.target.classList.add("about-visible");
                    observer.unobserve(entry.target);

                });

            },
            {
                threshold:.12,
                rootMargin:"0px 0px -40px"
            }
        );

        revealItems.forEach(item => {
            observer.observe(item);
        });

    }else{

        revealItems.forEach(item => {
            item.classList.add("about-visible");
        });

    }

    /* ------------------------------------------------------
       Hero movement
       ------------------------------------------------------ */

    const hero =
        document.querySelector(".about-hero");

    const heroImage =
        document.querySelector(".about-hero-image");

    if(hero && heroImage && window.matchMedia("(pointer:fine)").matches){

        hero.addEventListener("mousemove", event => {

            const rect = hero.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width) - .5;

            const y =
                ((event.clientY - rect.top) / rect.height) - .5;

            heroImage.style.transform = `
                translate3d(
                    ${x * 8}px,
                    ${y * 8}px,
                    0
                )
                scale(1.02)
            `;

        });

        hero.addEventListener("mouseleave", () => {

            heroImage.style.transform =
                "translate3d(0,0,0) scale(1)";

        });

    }

}
