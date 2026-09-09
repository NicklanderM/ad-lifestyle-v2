/* ==========================================================
   AD LIFESTYLE V2
   ALPHASPIN-ULTRA.JS
   Premium AlphaSpin Ultra Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadAlphaSpinUltra(){

    applyTheme("alphaspin-ultra");

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

    initialiseAlphaSpinUltra();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero alphaspin-ultra-hero">

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
                AlphaSpin
                Ultra
            </h1>

            <p class="hero-sub">
                Produto da linha Smart Lab Living da BZZWORLD,
                integrado numa proposta moderna de Lifestyle,
                tecnologia, conforto e bem-estar no quotidiano.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyAlphaSpinUltra">
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
                    src="./assets/products/alphaspin-ultra.png"
                    alt="AlphaSpin Ultra">

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
                Tecnologia e Lifestyle
                para uma vida mais inteligente
            </h2>

            <p class="lead">
                O AlphaSpin Ultra integra a linha Smart Lab Living da
                BZZWORLD, uma categoria orientada para soluções que
                acompanham diferentes dimensões do quotidiano moderno.
            </p>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-4 reveal">

                <div class="metric">

                    <div class="metric-number">
                        Smart
                    </div>

                    <div class="metric-label">
                        Living
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-1">

                <div class="metric">

                    <div class="metric-number">
                        Premium
                    </div>

                    <div class="metric-label">
                        Lifestyle
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">
                        Ultra
                    </div>

                    <div class="metric-label">
                        Experience
                    </div>

                </div>

            </div>

            <div class="bento-card span-12 reveal delay-3">

                <h3>Filosofia AlphaSpin Ultra</h3>

                <p class="text mt-2">
                    O AlphaSpin Ultra enquadra-se numa visão de Smart Living,
                    procurando aproximar tecnologia, praticidade e qualidade
                    de vida das necessidades do quotidiano moderno.
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
                    src="./assets/products/alphaspin-ultra.png"
                    alt="AlphaSpin Ultra">

            </div>

            <div class="split-content reveal-right">

                <span class="label">
                    Proposta
                </span>

                <h2 class="section-title">
                    Tecnologia.
                    Conforto.
                    Lifestyle.
                </h2>

                <div class="icon-list mt-4">

                    ${check("Integração na linha Smart Lab Living")}

                    ${check("Conceito orientado para Smart Living")}

                    ${check("Proposta associada ao Lifestyle moderno")}

                    ${check("Foco na praticidade do quotidiano")}

                    ${check("Design pensado para uma experiência premium")}

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
                Uma nova perspectiva
                sobre o Lifestyle
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${feature(
                "⚙️",
                "Tecnologia",
                "Uma proposta integrada na visão Smart Lab Living da BZZWORLD."
            )}

            ${feature(
                "✨",
                "Experiência",
                "Pensado para fazer parte de uma experiência moderna de utilização."
            )}

            ${feature(
                "🏠",
                "Lifestyle",
                "Integra-se no conceito de vida contemporânea e Smart Living."
            )}

            ${feature(
                "💎",
                "Qualidade",
                "Produto pertencente ao ecossistema premium da BZZWORLD."
            )}

            ${feature(
                "🔄",
                "Praticidade",
                "Uma abordagem orientada para facilitar e acompanhar o quotidiano."
            )}

            ${feature(
                "🌍",
                "Inovação",
                "Parte de uma visão internacional de tecnologia e Lifestyle."
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
                Tecnologia integrada
                no seu quotidiano
            </h2>

        </div>

        <div class="timeline mt-6">

            ${step(
                "1",
                "Conheça",
                "Conheça o AlphaSpin Ultra e consulte as informações e especificações oficiais do produto."
            )}

            ${step(
                "2",
                "Integre",
                "Utilize o produto de acordo com as instruções e recomendações oficiais."
            )}

            ${step(
                "3",
                "Explore",
                "Descubra como a proposta Smart Living pode integrar-se no seu quotidiano."
            )}

            ${step(
                "4",
                "Lifestyle",
                "Construa uma rotina moderna onde tecnologia, praticidade e qualidade de vida caminham juntas."
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
                Dúvidas sobre o AlphaSpin Ultra
            </h2>

        </div>

        <div class="faq mt-5">

            ${question(
                "O que é o AlphaSpin Ultra?",
                "O AlphaSpin Ultra é um produto da linha Smart Lab Living da BZZWORLD."
            )}

            ${question(
                "A que linha pertence o AlphaSpin Ultra?",
                "O AlphaSpin Ultra pertence à categoria Smart Lab Living da BZZWORLD."
            )}

            ${question(
                "Qual é a proposta do AlphaSpin Ultra?",
                "O produto está enquadrado numa proposta de Smart Living, associada a tecnologia, praticidade e Lifestyle moderno."
            )}

            ${question(
                "Como devo utilizar o AlphaSpin Ultra?",
                "A utilização deve seguir as instruções, especificações e recomendações oficiais disponibilizadas para o produto."
            )}

            ${question(
                "O AlphaSpin Ultra substitui hábitos saudáveis?",
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
                    AlphaSpin Ultra
                </span>

                <h2 class="section-title mt-3">
                    Eleve a sua experiência
                    de Smart Living
                </h2>

                <p class="lead">
                    Descubra o AlphaSpin Ultra e conheça uma nova abordagem
                    ao Lifestyle, à tecnologia e à experiência quotidiana.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="alphaSpinWhats">
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

function initialiseAlphaSpinUltra(){

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

    document.getElementById("buyAlphaSpinUltra")
        ?.addEventListener("click",openWhats);

    document.getElementById("alphaSpinWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message =
        "Olá AD Lifestyle! Gostaria de adquirir o AlphaSpin Ultra.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}