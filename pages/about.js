/* ==========================================================
   AD LIFESTYLE V2
   ABOUT PAGE
   Premium Institutional Experience
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple, stagger } from "../js/animations.js";

/* ==========================================================
   EXTERNAL DESTINATIONS
   ========================================================== */

const EXTERNAL_LINKS = {
    bzzworld: "https://www.bzzworld.com/",
    academy21: "https://www.academytwentyone.com/"
};

/* ==========================================================
   ASSETS
   ========================================================== */

const ASSETS = {
    logo: "./assets/logo/logo.png",
    abdoulahi: "./assets/images/abdoulahi.png",
    bzzworld: "./assets/images/bzzworld.png",
    a21: "./assets/images/a21.png"
};

/* ==========================================================
   ICONS
   ========================================================== */

const icon = {

    arrow:
    `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h13"/>
        <path d="M13 6l6 6-6 6"/>
    </svg>`,

    arrowUp:
    `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5"/>
        <path d="M6 11l6-6 6 6"/>
    </svg>`,

    external:
    `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 5h5v5"/>
        <path d="M10 14L19 5"/>
        <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"/>
    </svg>`,

    plus:
    `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5v14"/>
        <path d="M5 12h14"/>
    </svg>`,

    check:
    `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 12 4 4L19 6"/>
    </svg>`,

    compass:
    `<svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8"/>
        <path d="m14.5 9.5-1.5 3-3 1.5 1.5-3 3-1.5Z"/>
    </svg>`,

    spark:
    `<svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-2.8L12 2Z"/>
    </svg>`
};

/* ==========================================================
   MAIN
   ========================================================== */

export function loadAbout(){

    applyTheme("default");

    const app = document.getElementById("app");

    if(!app){
        console.error("AD LIFESTYLE: elemento #app não encontrado.");
        return;
    }

    app.innerHTML = `
        <div class="about-page">

            ${hero()}

            ${manifesto()}

            ${whoWeAre()}

            ${ecosystem()}

            ${leadership()}

            ${visionMissionValues()}

            ${journey()}

            ${principles()}

            ${future()}

            ${cta()}

        </div>
    `;

    initialiseAbout();
}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `
        <section class="about-hero">

            <div class="about-hero-grid"></div>

            <div class="about-hero-glow about-hero-glow--one"></div>
            <div class="about-hero-glow about-hero-glow--two"></div>

            <div class="about-hero-orbit about-hero-orbit--one"></div>
            <div class="about-hero-orbit about-hero-orbit--two"></div>
            <div class="about-hero-orbit about-hero-orbit--three"></div>

            <div class="about-hero-content">

                <div class="about-hero-kicker reveal">
                    <span class="about-kicker-line"></span>
                    <span>AD LIFESTYLE · ABOUT US</span>
                    <span class="about-kicker-line"></span>
                </div>

                <h1 class="about-hero-title reveal">
                    Uma visão.
                    <span>Um movimento.</span>
                    <strong>Um ecossistema.</strong>
                </h1>

                <p class="about-hero-description reveal">
                    Criamos pontes entre pessoas, conhecimento,
                    bem-estar e novas possibilidades para construir
                    uma jornada de evolução mais consciente.
                </p>

                <div class="about-hero-actions reveal">

                    <a
                        class="about-btn about-btn--gold"
                        href="#about-ecosystem"
                        data-scroll-to="#about-ecosystem"
                    >
                        <span>Explorar o nosso universo</span>
                        ${icon.arrow}
                    </a>

                    <a
                        class="about-btn about-btn--ghost"
                        href="#about-journey"
                        data-scroll-to="#about-journey"
                    >
                        <span>A nossa história</span>
                        ${icon.arrow}
                    </a>

                </div>

            </div>

            <!-- BRAND CORE -->

            <div class="about-brand-core">

                <div class="about-core-ring about-core-ring--outer"></div>
                <div class="about-core-ring about-core-ring--middle"></div>
                <div class="about-core-ring about-core-ring--inner"></div>

                <div class="about-core-particle about-core-particle--one"></div>
                <div class="about-core-particle about-core-particle--two"></div>
                <div class="about-core-particle about-core-particle--three"></div>
                <div class="about-core-particle about-core-particle--four"></div>

                <div class="about-core-logo">

                    <div class="about-core-logo-backdrop"></div>

                    <img
                        src="${ASSETS.logo}"
                        alt="AD Lifestyle"
                    >

                </div>

                <div class="about-core-node about-core-node--wellness">
                    <span>01</span>
                    <strong>WELLNESS</strong>
                </div>

                <div class="about-core-node about-core-node--academy">
                    <span>02</span>
                    <strong>ACADEMY 21</strong>
                </div>

                <div class="about-core-node about-core-node--people">
                    <span>03</span>
                    <strong>PEOPLE</strong>
                </div>

            </div>

            <!-- FLOATING BRAND IMAGES -->

            <div class="about-hero-media about-hero-media--bzz reveal">
                <div class="about-media-label">
                    <span>01</span>
                    <small>WELLNESS</small>
                </div>

                <img
                    src="${ASSETS.bzzworld}"
                    alt="BZZWORLD"
                >
            </div>

            <div class="about-hero-media about-hero-media--a21 reveal">
                <div class="about-media-label">
                    <span>02</span>
                    <small>EVOLUTION</small>
                </div>

                <img
                    src="${ASSETS.a21}"
                    alt="Academy Twenty One"
                >
            </div>

            <div class="about-hero-scroll">

                <span>SCROLL TO DISCOVER</span>

                <div class="about-scroll-line">
                    <span></span>
                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   MANIFESTO
   ========================================================== */

function manifesto(){

    return `
        <section class="about-manifesto">

            <div class="about-section-number">
                01 <span>/</span> MANIFESTO
            </div>

            <div class="about-manifesto-content">

                <p class="about-eyebrow">
                    Mais do que uma marca
                </p>

                <h2>
                    Não queremos apenas
                    <span>vender.</span>
                    Queremos conectar.
                </h2>

                <p class="about-manifesto-text">
                    A AD Lifestyle nasceu com uma ideia simples:
                    criar pontes que aproximem pessoas de produtos,
                    conhecimento, desenvolvimento e oportunidades.
                </p>

                <div class="about-manifesto-line"></div>

                <p class="about-manifesto-small">
                    Wellness para cuidar.
                    Educação para evoluir.
                    Relações para crescer.
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
        <section class="about-who">

            <div class="about-section-header">

                <div>
                    <span class="about-eyebrow">
                        QUEM SOMOS
                    </span>

                    <h2>
                        Uma organização
                        orientada para o futuro.
                    </h2>
                </div>

                <p>
                    A AD Lifestyle desenvolve uma presença que une
                    experiências de wellness, aprendizagem,
                    desenvolvimento pessoal, comunicação e
                    empreendedorismo.
                </p>

            </div>

            <div class="about-who-grid">

                <article class="about-who-card about-who-card--large">

                    <span class="about-card-index">A</span>

                    <div class="about-card-icon">
                        ${icon.compass}
                    </div>

                    <h3>
                        Criamos pontes.
                    </h3>

                    <p>
                        Entre pessoas e possibilidades.
                        Entre soluções de bem-estar e quem procura
                        novas formas de viver.
                        Entre conhecimento e acção.
                    </p>

                </article>

                <article class="about-who-card">

                    <span class="about-card-index">B</span>

                    <div class="about-card-icon">
                        ${icon.spark}
                    </div>

                    <h3>
                        Desenvolvemos experiências.
                    </h3>

                    <p>
                        Apresentações, campanhas, eventos,
                        conteúdos e experiências digitais pensadas
                        para aproximar pessoas de novas possibilidades.
                    </p>

                </article>

                <article class="about-who-card">

                    <span class="about-card-index">C</span>

                    <div class="about-card-icon">
                        ${icon.arrow}
                    </div>

                    <h3>
                        Pensamos além do presente.
                    </h3>

                    <p>
                        Construímos uma organização preparada para
                        acompanhar pessoas numa jornada contínua
                        de aprendizagem, evolução e crescimento.
                    </p>

                </article>

            </div>

        </section>
    `;
}

/* ==========================================================
   ECOSYSTEM
   ========================================================== */

function ecosystem(){

    return `
        <section
            class="about-ecosystem"
            id="about-ecosystem"
        >

            <div class="about-section-number">
                02 <span>/</span> ECOSSISTEMA
            </div>

            <div class="about-ecosystem-heading">

                <span class="about-eyebrow">
                    DOIS UNIVERSOS · UMA EXPERIÊNCIA
                </span>

                <h2>
                    O nosso ecossistema
                    <span>tem dois pilares.</span>
                </h2>

                <p>
                    A AD Lifestyle actua como uma ponte entre duas
                    dimensões complementares: o bem-estar através da
                    BZZWORLD e a evolução através da Academy Twenty One.
                </p>

            </div>

            <div class="about-ecosystem-grid">

                ${ecosystemBzzworld()}

                ${ecosystemA21()}

            </div>

            <div class="about-ecosystem-connector">

                <span>AD LIFESTYLE</span>

                <div class="about-connector-line"></div>

                <span>CONNECTING POSSIBILITIES</span>

            </div>

        </section>
    `;
}

/* ==========================================================
   BZZWORLD
   ========================================================== */

function ecosystemBzzworld(){

    return `
        <article class="about-ecosystem-card about-ecosystem-card--bzz">

            <div class="about-ecosystem-card-top">

                <span class="about-ecosystem-number">
                    01
                </span>

                <span class="about-ecosystem-tag">
                    WELLNESS
                </span>

            </div>

            <div class="about-ecosystem-image">

                <div class="about-image-overlay"></div>

                <img
                    src="${ASSETS.bzzworld}"
                    alt="BZZWORLD"
                >

                <div class="about-image-corner">
                    BZZWORLD
                </div>

            </div>

            <div class="about-ecosystem-copy">

                <h3>BZZWORLD</h3>

                <h4>
                    Um universo dedicado ao wellness
                    e ao lifestyle.
                </h4>

                <p>
                    Através da BZZWORLD, aproximamos produtos,
                    experiências e soluções de wellness das pessoas,
                    criando uma relação mais próxima com aquilo que
                    pode integrar o seu estilo de vida.
                </p>

                <div class="about-ecosystem-highlights">

                    <span>
                        ${icon.check}
                        Wellness
                    </span>

                    <span>
                        ${icon.check}
                        Lifestyle
                    </span>

                    <span>
                        ${icon.check}
                        Produtos
                    </span>

                </div>

                <a
                    href="${EXTERNAL_LINKS.bzzworld}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="about-external-btn"
                >

                    <span>
                        Saber mais sobre a BZZWORLD
                    </span>

                    ${icon.external}

                </a>

            </div>

        </article>
    `;
}

/* ==========================================================
   ACADEMY 21
   ========================================================== */

function ecosystemA21(){

    return `
        <article class="about-ecosystem-card about-ecosystem-card--a21">

            <div class="about-ecosystem-card-top">

                <span class="about-ecosystem-number">
                    02
                </span>

                <span class="about-ecosystem-tag">
                    EVOLUTION
                </span>

            </div>

            <div class="about-ecosystem-image">

                <div class="about-image-overlay"></div>

                <img
                    src="${ASSETS.a21}"
                    alt="Academy Twenty One"
                >

                <div class="about-image-corner">
                    ACADEMY 21
                </div>

            </div>

            <div class="about-ecosystem-copy">

                <h3>ACADEMY TWENTY ONE</h3>

                <h4>
                    Conhecimento que transforma
                    potencial em movimento.
                </h4>

                <p>
                    Através da Academy Twenty One, aproximamo-nos de
                    experiências de desenvolvimento pessoal,
                    liderança, aprendizagem, networking e
                    empreendedorismo.
                </p>

                <div class="about-ecosystem-highlights">

                    <span>
                        ${icon.check}
                        Desenvolvimento
                    </span>

                    <span>
                        ${icon.check}
                        Liderança
                    </span>

                    <span>
                        ${icon.check}
                        Empreendedorismo
                    </span>

                </div>

                <a
                    href="${EXTERNAL_LINKS.academy21}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="about-external-btn"
                >

                    <span>
                        Saber mais sobre a Academy 21
                    </span>

                    ${icon.external}

                </a>

            </div>

        </article>
    `;
}

/* ==========================================================
   LEADERSHIP
   ========================================================== */

function leadership(){

    return `
        <section class="about-leadership">

            <div class="about-leadership-visual">

                <div class="about-leadership-frame"></div>

                <div class="about-leadership-image">

                    <img
                        src="${ASSETS.abdoulahi}"
                        alt="Abdoulahi Doucoure"
                    >

                </div>

                <div class="about-leadership-badge">
                    <span>VISION</span>
                    <strong>IMPACT</strong>
                </div>

            </div>

            <div class="about-leadership-content">

                <span class="about-eyebrow">
                    LIDERANÇA
                </span>

                <p class="about-leadership-label">
                    UMA VISÃO QUE COLOCA AS PESSOAS NO CENTRO.
                </p>

                <h2>
                    Abdoulahi
                    <span>Doucoure</span>
                </h2>

                <p class="about-leadership-role">
                    Founder · Vision · Strategy
                </p>

                <div class="about-leadership-rule"></div>

                <p class="about-leadership-text">
                    Uma organização começa com uma visão,
                    mas cresce quando essa visão é transformada
                    em acção, consistência e impacto.
                </p>

                <div class="about-leadership-values">

                    <div>
                        <strong>01</strong>
                        <span>Visão</span>
                    </div>

                    <div>
                        <strong>02</strong>
                        <span>Pessoas</span>
                    </div>

                    <div>
                        <strong>03</strong>
                        <span>Consistência</span>
                    </div>

                    <div>
                        <strong>04</strong>
                        <span>Futuro</span>
                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   VISION / MISSION / VALUES
   ========================================================== */

function visionMissionValues(){

    return `
        <section class="about-vmv">

            <div class="about-section-header about-section-header--center">

                <span class="about-eyebrow">
                    O QUE NOS MOVE
                </span>

                <h2>
                    Três ideias.
                    <span>Uma direcção.</span>
                </h2>

            </div>

            <div class="about-vmv-grid">

                <article class="about-vmv-card">

                    <span class="about-vmv-number">
                        01
                    </span>

                    <h3>Visão</h3>

                    <p>
                        Tornar a AD Lifestyle uma referência na criação
                        de pontes entre wellness, conhecimento,
                        desenvolvimento e novas possibilidades.
                    </p>

                </article>

                <article class="about-vmv-card about-vmv-card--featured">

                    <span class="about-vmv-number">
                        02
                    </span>

                    <h3>Missão</h3>

                    <p>
                        Criar experiências e conexões que ajudem
                        pessoas a descobrir produtos, conhecimento
                        e caminhos de evolução.
                    </p>

                </article>

                <article class="about-vmv-card">

                    <span class="about-vmv-number">
                        03
                    </span>

                    <h3>Valores</h3>

                    <div class="about-values-list">

                        <span>${icon.check} Integridade</span>
                        <span>${icon.check} Aprendizagem</span>
                        <span>${icon.check} Excelência</span>
                        <span>${icon.check} Pessoas</span>

                    </div>

                </article>

            </div>

        </section>
    `;
}

/* ==========================================================
   JOURNEY
   ========================================================== */

function journey(){

    return `
        <section
            class="about-journey"
            id="about-journey"
        >

            <div class="about-journey-intro">

                <span class="about-eyebrow">
                    A NOSSA JORNADA
                </span>

                <h2>
                    Não é apenas
                    <span>onde estamos.</span>
                </h2>

                <p>
                    É aquilo que estamos a construir.
                </p>

            </div>

            <div class="about-journey-track">

                <div class="about-journey-axis"></div>

                ${journeyPoint(
                    "01",
                    "Fundação",
                    "Uma visão nasce com a vontade de aproximar pessoas de novas possibilidades."
                )}

                ${journeyPoint(
                    "02",
                    "Estrutura",
                    "Construímos uma identidade e uma organização orientadas para servir melhor."
                )}

                ${journeyPoint(
                    "03",
                    "Ecossistema",
                    "Integramos Wellness e Evolution numa experiência mais ampla."
                )}

                ${journeyPoint(
                    "04",
                    "Experiência",
                    "Eventos, apresentações, conteúdos, campanhas e experiências digitais."
                )}

                ${journeyPoint(
                    "05",
                    "Expansão",
                    "O próximo capítulo é continuar a criar pontes, dentro e além-fronteiras."
                )}

            </div>

        </section>
    `;
}

function journeyPoint(number, title, text){

    return `
        <article class="about-journey-point">

            <div class="about-journey-marker">
                ${number}
            </div>

            <div class="about-journey-copy">

                <span>${number}</span>

                <h3>${title}</h3>

                <p>${text}</p>

            </div>

        </article>
    `;
}

/* ==========================================================
   PRINCIPLES
   ========================================================== */

function principles(){

    return `
        <section class="about-principles">

            <div class="about-principles-heading">

                <span class="about-eyebrow">
                    OS NOSSOS PRINCÍPIOS
                </span>

                <h2>
                    O que não muda
                    <span>enquanto crescemos.</span>
                </h2>

            </div>

            <div class="about-principles-grid">

                <article>
                    <span>01</span>
                    <h3>Integridade</h3>
                    <p>
                        Construir relações baseadas em respeito,
                        transparência e confiança.
                    </p>
                </article>

                <article>
                    <span>02</span>
                    <h3>Aprendizagem</h3>
                    <p>
                        Continuar a aprender para continuar
                        a evoluir.
                    </p>
                </article>

                <article>
                    <span>03</span>
                    <h3>Excelência</h3>
                    <p>
                        Melhorar continuamente cada experiência
                        que colocamos diante das pessoas.
                    </p>
                </article>

                <article>
                    <span>04</span>
                    <h3>Pessoas</h3>
                    <p>
                        Colocar relações humanas e desenvolvimento
                        no centro da nossa visão.
                    </p>
                </article>

            </div>

        </section>
    `;
}

/* ==========================================================
   FUTURE
   ========================================================== */

function future(){

    return `
        <section class="about-future">

            <div class="about-future-grid"></div>

            <div class="about-future-content">

                <span class="about-eyebrow">
                    THE NEXT CHAPTER
                </span>

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

            <div class="about-future-orbit"></div>

        </section>
    `;
}

/* ==========================================================
   CTA
   ========================================================== */

function cta(){

    return `
        <section class="about-final-cta">

            <div class="about-final-cta-inner">

                <span class="about-eyebrow">
                    AD LIFESTYLE
                </span>

                <h2>
                    O próximo capítulo
                    <span>pode começar aqui.</span>
                </h2>

                <p>
                    Explore os nossos produtos, conheça os nossos
                    serviços ou entre directamente em contacto
                    connosco.
                </p>

                <div class="about-final-actions">

                    <button
                        type="button"
                        class="about-btn about-btn--gold"
                        data-action="products"
                    >
                        <span>Explorar produtos</span>
                        ${icon.arrow}
                    </button>

                    <a
                        href="https://wa.me/244924964666"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="about-btn about-btn--dark"
                    >
                        <span>Falar connosco</span>
                        ${icon.arrow}
                    </a>

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
       Scroll links
       ------------------------------------------------------ */

    document
        .querySelectorAll(".about-page [data-scroll-to]")
        .forEach(link => {

            link.addEventListener("click", event => {

                event.preventDefault();

                const selector = link.dataset.scrollTo;
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
       Products CTA
       ------------------------------------------------------ */

    document
        .querySelectorAll('.about-page [data-action="products"]')
        .forEach(button => {

            button.addEventListener("click", () => {
                navigate("/products");
            });

            ripple(button);

        });

    /* ------------------------------------------------------
       External buttons
       ------------------------------------------------------ */

    document
        .querySelectorAll(".about-external-btn")
        .forEach(button => {
            ripple(button);
        });

    /* ------------------------------------------------------
       Reveal animations
       ------------------------------------------------------ */

    if(typeof stagger === "function"){

        try{
            stagger(".about-page .about-who-card");
            stagger(".about-page .about-vmv-card");
            stagger(".about-page .about-journey-point");
            stagger(".about-page .about-principles-grid article");
        }catch(error){
            console.warn(
                "AD LIFESTYLE: animações stagger não inicializadas.",
                error
            );
        }
    }

    /* ------------------------------------------------------
       Intersection observer
       ------------------------------------------------------ */

    const revealItems =
        document.querySelectorAll(
            ".about-page .reveal, " +
            ".about-page .about-section-header, " +
            ".about-page .about-manifesto-content, " +
            ".about-page .about-ecosystem-card, " +
            ".about-page .about-leadership-content, " +
            ".about-page .about-future-content"
        );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach(item => observer.observe(item));

    /* ------------------------------------------------------
       Hero parallax
       ------------------------------------------------------ */

    const heroSection =
        document.querySelector(".about-hero");

    const brandCore =
        document.querySelector(".about-brand-core");

    if(heroSection && brandCore){

        heroSection.addEventListener("mousemove", event => {

            const rect =
                heroSection.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;

            brandCore.style.transform = `
                translate3d(
                    ${x * 18}px,
                    ${y * 18}px,
                    0
                )
            `;
        });

        heroSection.addEventListener("mouseleave", () => {

            brandCore.style.transform =
                "translate3d(0,0,0)";
        });

    }

}
