/* ==========================================================
   AD LIFESTYLE V2
   ISMARTS3.JS
   Premium iSMARTS3 Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadISmartS3(){

    applyTheme("ismarts3");

    const app=document.getElementById("app");

    app.innerHTML=`

        ${hero()}

        ${living()}

        ${benefits()}

        ${experience()}

        ${routine()}

        ${faq()}

        ${cta()}

    `;

    initialiseISmartS3();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero ismarts3-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Smart Lab Living
            </span>

            <h1 class="hero-title">
                iSMARTS3
            </h1>

            <p class="hero-sub">
                Produto da linha Smart Lab Living da BZZWORLD,
                integrado numa proposta moderna de Lifestyle,
                inovação, tecnologia e bem-estar no quotidiano.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyISmartS3">
                    Comprar Agora
                </button>

                <button class="btn btn-glass" id="learnMore">
                    Descobrir Mais
                </button>

            </div>

        </div>

        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>

                <img
                    class="parallax"
                    data-speed="40"
                    src="./assets/products/ismarts3.png"
                    alt="iSMARTS3">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   LIVING
   ========================================================== */

function living(){

return`

<section id="living" class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Smart Living
            </span>

            <h2 class="section-title">
                Inovação integrada
                no Lifestyle moderno
            </h2>

            <p class="lead">
                O iSMARTS3 integra a linha Smart Lab Living da BZZWORLD,
                uma categoria dedicada a soluções que acompanham as
                necessidades e experiências do quotidiano contemporâneo.
            </p>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-4 reveal">

                <div class="metric">

                    <div class="metric-number">
                        Smart
                    </div>

                    <div class="metric-label">
                        Technology
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-1">

                <div class="metric">

                    <div class="metric-number">
                        Premium
                    </div>

                    <div class="metric-label">
                        Experience
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">
                        Modern
                    </div>

                    <div class="metric-label">
                        Lifestyle
                    </div>

                </div>

            </div>

            <div class="bento-card span-12 reveal delay-3">

                <h3>Filosofia iSMARTS3</h3>

                <p class="text mt-2">
                    O iSMARTS3 enquadra-se numa visão de Smart Living,
                    aproximando inovação, tecnologia e praticidade da
                    experiência quotidiana e de um Lifestyle contemporâneo.
                </p>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   BENEFITS
   ========================================================== */

function benefits(){

return`

<section class="section-sm">

    <div class="container">

        <div class="split">

            <div class="split-image reveal-left">

                <img
                    src="./assets/products/ismarts3.png"
                    alt="iSMARTS3">

            </div>

            <div class="split-content reveal-right">

                <span class="label">
                    Proposta
                </span>

                <h2 class="section-title">
                    Tecnologia.
                    Inovação.
                    Experiência.
                </h2>

                <div class="icon-list mt-4">

                    ${check("Integração na linha Smart Lab Living")}

                    ${check("Conceito orientado para Smart Living")}

                    ${check("Proposta associada a um Lifestyle moderno")}

                    ${check("Foco na experiência e praticidade")}

                    ${check("Conceito tecnológico e contemporâneo")}

                    ${check("Parte do ecossistema BZZWORLD")}

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

function check(text){

return`

<div class="icon-item">

    <div class="icon-circle">✓</div>

    <div>${text}</div>

</div>

`;

}

/* ==========================================================
   EXPERIENCE
   ========================================================== */

function experience(){

return`

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Smart Experience
            </span>

            <h2 class="section-title">
                Tecnologia pensada
                para o Lifestyle
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${feature(
                "⚙️",
                "Tecnologia",
                "Produto integrado na visão Smart Lab Living da BZZWORLD."
            )}

            ${feature(
                "💡",
                "Inovação",
                "Uma proposta orientada para acompanhar as exigências do Lifestyle moderno."
            )}

            ${feature(
                "✨",
                "Experiência",
                "Pensado para proporcionar uma experiência contemporânea de utilização."
            )}

            ${feature(
                "💎",
                "Qualidade",
                "Parte do ecossistema de produtos e soluções da BZZWORLD."
            )}

            ${feature(
                "🔄",
                "Praticidade",
                "Uma abordagem centrada na integração da tecnologia no quotidiano."
            )}

            ${feature(
                "🌍",
                "Lifestyle",
                "Parte de uma visão internacional de inovação, tecnologia e qualidade de vida."
            )}

        </div>

    </div>

</section>

`;

}

function feature(icon,title,text){

return`

<div class="card service-card reveal">

    <div class="service-icon">${icon}</div>

    <h3>${title}</h3>

    <p class="text mt-2">${text}</p>

</div>

`;

}

/* ==========================================================
   ROUTINE
   ========================================================== */

function routine(){

return`

<section class="section-sm">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Smart Lifestyle
            </span>

            <h2 class="section-title">
                Uma experiência integrada
                no seu quotidiano
            </h2>

        </div>

        <div class="timeline mt-6">

            ${step(
                "1",
                "Conheça",
                "Conheça o iSMARTS3 e consulte as informações e especificações oficiais do produto."
            )}

            ${step(
                "2",
                "Explore",
                "Conheça as funcionalidades e possibilidades de utilização disponibilizadas pelo produto."
            )}

            ${step(
                "3",
                "Integre",
                "Utilize o iSMARTS3 de acordo com as instruções e recomendações oficiais."
            )}

            ${step(
                "4",
                "Lifestyle",
                "Integre tecnologia, inovação e praticidade numa experiência moderna de vida."
            )}

        </div>

    </div>

</section>

`;

}

function step(n,title,text){

return`

<div class="timeline-item reveal">

    <div class="timeline-dot">${n}</div>

    <div class="timeline-content">

        <h3>${title}</h3>

        <p class="text mt-1">${text}</p>

    </div>

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
                Dúvidas sobre o iSMARTS3
            </h2>

        </div>

        <div class="faq mt-5">

            ${question(
                "O que é o iSMARTS3?",
                "O iSMARTS3 é um produto da linha Smart Lab Living da BZZWORLD."
            )}

            ${question(
                "A que linha pertence o iSMARTS3?",
                "O iSMARTS3 pertence à categoria Smart Lab Living da BZZWORLD."
            )}

            ${question(
                "Qual é a proposta do iSMARTS3?",
                "O produto está enquadrado numa proposta de Smart Living, associada a tecnologia, inovação, praticidade e Lifestyle moderno."
            )}

            ${question(
                "Como devo utilizar o iSMARTS3?",
                "A utilização deve seguir as instruções, especificações e recomendações oficiais disponibilizadas para o produto."
            )}

            ${question(
                "O iSMARTS3 substitui hábitos saudáveis?",
                "Não. O produto deve ser integrado de forma responsável numa rotina equilibrada e não deve ser apresentado como substituto de hábitos saudáveis."
            )}

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
                    iSMARTS3
                </span>

                <h2 class="section-title mt-3">
                    Eleve o seu Lifestyle
                    através da inovação
                </h2>

                <p class="lead">
                    Descubra o iSMARTS3 e explore uma nova perspectiva
                    de tecnologia, inovação e experiência no quotidiano.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="ismarts3Whats">
                        Falar no WhatsApp
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
   INITIALISE
   ========================================================== */

function initialiseISmartS3(){

    stagger(".service-card");

    document.querySelectorAll(".btn").forEach(ripple);

    document.getElementById("learnMore")
        ?.addEventListener("click",()=>{

            document.getElementById("living")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document.getElementById("backHome")
        ?.addEventListener("click",()=>{

            navigate("/");

        });

    document.getElementById("buyISmartS3")
        ?.addEventListener("click",openWhats);

    document.getElementById("ismarts3Whats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message =
        "Olá AD Lifestyle! Gostaria de adquirir o iSMARTS3.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}