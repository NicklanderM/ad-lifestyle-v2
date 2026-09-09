/* ==========================================================
   AD LIFESTYLE V2
   ANGEL.JS
   Premium Product Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadAngel(){

    applyTheme("angel");

    const app=document.getElementById("app");

    app.innerHTML=`

        ${hero()}

        ${technology()}

        ${benefits()}

        ${composition()}

        ${variants()}

        ${faq()}

        ${cta()}

    `;

    initialiseAngel();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero page angel-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Angel Moon Collection
            </span>

            <h1 class="hero-title">
                Conforto,
                Elegância &
                Bem-estar
            </h1>

            <p class="hero-sub">
                Absorvente feminino premium com tecnologia
                Negative Ion Core, desenvolvido para proporcionar
                conforto superior, elevada respirabilidade e
                uma experiência íntima diferenciada.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyAngel">
                    Comprar Agora
                </button>

                <button class="btn btn-glass" id="benefitsBtn">
                    Ver Benefícios
                </button>

            </div>

        </div>

        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>

                <img
                    class="parallax"
                    data-speed="35"
                    src="./assets/products/angel.png"
                    alt="Angel Moon">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   TECHNOLOGY
   ========================================================== */

function technology(){

return`

<section class="section">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Tecnologia
            </span>

            <h2 class="section-title">
                Estrutura Inteligente
                em 6 Camadas
            </h2>

            <p class="lead">
                Cada camada foi concebida para oferecer
                absorção eficiente, conforto prolongado e
                respirabilidade durante todo o dia.
            </p>

        </div>

        <div class="timeline mt-6">

            ${layer("1","Película respirável","Permite circulação de ar, reduzindo a sensação de humidade.")}

            ${layer("2","Algodão Premium","Toque extremamente suave e delicado para a pele.")}

            ${layer("3","Negative Ion Core","Tecnologia central desenvolvida para proporcionar maior sensação de frescura e conforto.")}

            ${layer("4","SAP Ultra Absorvente","Retém líquidos rapidamente, ajudando a manter a superfície seca.")}

            ${layer("5","Camada Antibacteriana","Contribui para uma utilização mais higiénica e confortável.")}

            ${layer("6","Base Impermeável","Protecção contra fugas sem comprometer a flexibilidade.")}

        </div>

    </div>

</section>

`;

}

function layer(number,title,desc){

return`

<div class="timeline-item reveal">

    <div class="timeline-dot">
        ${number}
    </div>

    <div class="timeline-content">

        <h3>${title}</h3>

        <p class="text mt-1">
            ${desc}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   BENEFITS
   ========================================================== */

function benefits(){

return`

<section id="benefits" class="section-sm">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Benefícios
            </span>

            <h2 class="section-title">
                Muito além da absorção
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${benefit("🌸","Conforto prolongado","Sensação agradável durante horas.")}

            ${benefit("💜","Frescura","Tecnologia de iões negativos.")}

            ${benefit("🛡️","Alta absorção","Ajuda a manter a superfície seca.")}

            ${benefit("🌿","Respirável","Favorece circulação de ar.")}

            ${benefit("☁️","Suavidade","Algodão delicado para uso diário.")}

            ${benefit("✨","Bem-estar","Experiência íntima premium.")}

        </div>

    </div>

</section>

`;

}

function benefit(icon,title,text){

return`

<div class="card service-card reveal">

    <div class="service-icon">
        ${icon}
    </div>

    <h3>${title}</h3>

    <p class="text mt-2">
        ${text}
    </p>

</div>

`;

}

/* ==========================================================
   COMPOSITION
   ========================================================== */

function composition(){

return`

<section class="section">

    <div class="container">

        <div class="split">

            <div class="split-content reveal-left">

                <span class="label">
                    Composição
                </span>

                <h2 class="section-title">
                    Materiais seleccionados
                    com rigor
                </h2>

                <p class="text">
                    O Angel Moon combina fibras macias,
                    núcleo ultra absorvente e tecnologia
                    Negative Ion Core para proporcionar
                    conforto, leveza e elevada qualidade.
                </p>

                <div class="icon-list mt-4">

                    ${comp("Algodão Premium")}

                    ${comp("Negative Ion Core")}

                    ${comp("SAP Ultra Absorvente")}

                    ${comp("Filme Respirável")}

                    ${comp("Camada Antibacteriana")}

                    ${comp("Base Impermeável")}

                </div>

            </div>

            <div class="split-image reveal-right">

                <img
                    src="./assets/products/angel.png"
                    alt="Angel Moon">

            </div>

        </div>

    </div>

</section>

`;

}

function comp(text){

return`

<div class="icon-item">

    <div class="icon-circle">✓</div>

    <div>
        <strong>${text}</strong>
    </div>

</div>

`;

}

/* ==========================================================
   VARIANTS
   ========================================================== */

function variants(){

return`

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Colecção
            </span>

            <h2 class="section-title">
                Escolha o ideal para si
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${variant("Dia","24 cm","Uso diário","./assets/products/angel1.png")}

            ${variant("Noite","29 cm","Maior cobertura","./assets/products/angel2.png")}

            ${variant("Panty Liner","18 cm","Protecção diária","./assets/products/angel3.png")}

        </div>

    </div>

</section>

`;

}

function variant(name,size,desc,image){

return`

<div class="card product-card reveal">

    <div class="product-image">

        <div class="orb"></div>

        <img
            src="${image}"
            alt="${name}">

    </div>

    <span class="product-category">
        ${size}
    </span>

    <h3>${name}</h3>

    <p class="text mt-1">
        ${desc}
    </p>

</div>

`;

}

/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

return`

<section class="section-sm">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Perguntas Frequentes
            </span>

            <h2 class="section-title">
                Tudo o que precisa de saber
            </h2>

        </div>

        <div class="faq mt-5">

            ${question("O que é o Negative Ion Core?","É o núcleo tecnológico presente no Angel Moon, desenvolvido para proporcionar uma sensação superior de frescura e conforto durante a utilização.")}

            ${question("Qual a diferença entre Dia e Noite?","A versão Noite possui maior comprimento e cobertura para proporcionar maior protecção durante o período nocturno.")}

            ${question("Existe uma versão para uso diário?","Sim. A versão Panty Liner foi concebida especificamente para protecção diária e conforto contínuo.")}

            ${question("O Angel Moon é confortável para peles sensíveis?","A sua superfície em algodão premium foi desenvolvida para proporcionar um toque extremamente suave e agradável.")}

        </div>

    </div>

</section>

`;

}

function question(q,a){

return`

<div class="faq-item">

    <button class="faq-question">

        ${q}

        <span>+</span>

    </button>

    <div class="faq-answer">

        <p>${a}</p>

    </div>

</div>

`;

}

/* ==========================================================
   CTA
   ========================================================== */

function cta(){

return`

<section class="section">

    <div class="container">

        <div class="showcase">

            <div class="showcase-content section-center">

                <span class="badge">
                    Angel Moon
                </span>

                <h2 class="section-title mt-3">
                    Descubra uma nova experiência
                    de cuidado íntimo
                </h2>

                <p class="lead">
                    Fale connosco e descubra qual versão do
                    Angel Moon é mais adequada para si.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="angelWhats">
                        WhatsApp
                    </button>

                    <button class="btn btn-glass" id="backHome">
                        Voltar ao Início
                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   EVENTS
   ========================================================== */

function initialiseAngel(){

    stagger(".service-card");

    document
        .querySelectorAll(".btn")
        .forEach(ripple);

    document
        .getElementById("benefitsBtn")
        ?.addEventListener("click",()=>{

            document
                .getElementById("benefits")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document
        .getElementById("backHome")
        ?.addEventListener("click",()=>{

            navigate("/");

        });

    document
        .getElementById("buyAngel")
        ?.addEventListener("click",openWhats);

    document
        .getElementById("angelWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message=
        "Olá AD Lifestyle! Gostaria de adquirir o Angel Moon.";

    window.open(
        `https://wa.me/244000000000?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}