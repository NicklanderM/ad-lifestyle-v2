/* ==========================================================
   AD LIFESTYLE V2
   EVADOR.JS
   Premium Evador Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadEvador(){

    applyTheme("evador");

    const app=document.getElementById("app");

    app.innerHTML=`

        ${hero()}

        ${wellness()}

        ${benefits()}

        ${formula()}

        ${routine()}

        ${faq()}

        ${cta()}

    `;

    initialiseEvador();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero evador-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Beauty & Wellness Collection
            </span>

            <h1 class="hero-title">
                Evador
            </h1>

            <p class="hero-sub">
                Produto premium da linha Smart Lab Beauty da BZZWORLD,
                concebido para integrar uma rotina de cuidado pessoal,
                beleza e bem-estar dentro da filosofia AD Lifestyle.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyEvador">
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
                    src="./assets/products/evador.png"
                    alt="Evador">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   WELLNESS
   ========================================================== */

function wellness(){

return`

<section id="wellness" class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Beauty & Wellness
            </span>

            <h2 class="section-title">
                Cuidado pessoal com
                uma abordagem premium
            </h2>

            <p class="lead">
                O Evador integra a linha Smart Lab Beauty da BZZWORLD,
                enquadrando-se numa proposta moderna de beleza,
                cuidado pessoal e bem-estar.
            </p>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-4 reveal">

                <div class="metric">

                    <div class="metric-number">
                        Premium
                    </div>

                    <div class="metric-label">
                        Beauty
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-1">

                <div class="metric">

                    <div class="metric-number">
                        Daily
                    </div>

                    <div class="metric-label">
                        Care
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">
                        Smart
                    </div>

                    <div class="metric-label">
                        Wellness
                    </div>

                </div>

            </div>

            <div class="bento-card span-12 reveal delay-3">

                <h3>Filosofia Evador</h3>

                <p class="text mt-2">
                    O Evador representa uma abordagem orientada para o cuidado
                    pessoal e o bem-estar, valorizando a consistência, a
                    qualidade e a integração de bons hábitos no quotidiano.
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
                    src="./assets/products/evador.png"
                    alt="Evador">

            </div>

            <div class="split-content reveal-right">

                <span class="label">
                    Características
                </span>

                <h2 class="section-title">
                    Cuidado.
                    Qualidade.
                    Bem-estar.
                </h2>

                <div class="icon-list mt-4">

                    ${check("Integração numa rotina de cuidado pessoal")}

                    ${check("Abordagem orientada para beleza e bem-estar")}

                    ${check("Conceito premium de cuidado")}

                    ${check("Pensado para acompanhar uma rotina consistente")}

                    ${check("Parte da linha Smart Lab Beauty")}

                    ${check("Integração na filosofia de Lifestyle da BZZWORLD")}

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
   FORMULA
   ========================================================== */

function formula(){

return`

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Conceito Premium
            </span>

            <h2 class="section-title">
                Uma proposta de beleza
                integrada no Lifestyle
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${feature(
                "✨",
                "Beleza",
                "Uma proposta pensada para integrar o cuidado pessoal no quotidiano."
            )}

            ${feature(
                "🌿",
                "Bem-estar",
                "Parte de uma abordagem global de cuidado e equilíbrio."
            )}

            ${feature(
                "💎",
                "Qualidade",
                "Produto integrado na linha Smart Lab Beauty da BZZWORLD."
            )}

            ${feature(
                "🧘",
                "Cuidado",
                "Incentiva uma abordagem mais consciente aos hábitos de cuidado pessoal."
            )}

            ${feature(
                "🏆",
                "Consistência",
                "A valorização do cuidado começa pela construção de uma rotina."
            )}

            ${feature(
                "🌍",
                "Lifestyle",
                "Parte de uma visão internacional de beleza, bem-estar e estilo de vida."
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
                Rotina de Cuidado
            </span>

            <h2 class="section-title">
                Transforme cuidado
                em hábito
            </h2>

        </div>

        <div class="timeline mt-6">

            ${step(
                "1",
                "Conheça",
                "Conheça o Evador e consulte atentamente as indicações oficiais do produto."
            )}

            ${step(
                "2",
                "Integre",
                "Integre o produto na sua rotina de acordo com as orientações oficiais."
            )}

            ${step(
                "3",
                "Consistência",
                "Mantenha uma rotina regular de cuidado pessoal e hábitos equilibrados."
            )}

            ${step(
                "4",
                "Lifestyle",
                "Faça do cuidado pessoal uma parte consciente do seu estilo de vida."
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
                Dúvidas sobre o Evador
            </h2>

        </div>

        <div class="faq mt-5">

            ${question(
                "O que é o Evador?",
                "O Evador é um produto da linha Smart Lab Beauty da BZZWORLD, integrado na proposta de beleza, cuidado pessoal e bem-estar da marca."
            )}

            ${question(
                "O Evador faz parte da linha Beauty?",
                "Sim. O Evador está integrado na linha Smart Lab Beauty da BZZWORLD."
            )}

            ${question(
                "Como devo utilizar o Evador?",
                "A utilização deve seguir as indicações oficiais presentes na embalagem e a documentação disponibilizada para o produto."
            )}

            ${question(
                "O Evador substitui uma rotina de cuidados?",
                "Não. O produto deve ser entendido como parte de uma rotina de cuidado pessoal e não como substituto de hábitos adequados de higiene e bem-estar."
            )}

            ${question(
                "Qual é a filosofia do Evador?",
                "O conceito está associado a uma visão integrada de beleza, cuidado pessoal, bem-estar, consistência e qualidade de vida."
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
                    Evador
                </span>

                <h2 class="section-title mt-3">
                    Eleve a sua rotina
                    de cuidado
                </h2>

                <p class="lead">
                    Descubra o Evador e conheça uma proposta premium
                    de beleza, cuidado pessoal e bem-estar integrada
                    no Lifestyle da BZZWORLD.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="evadorWhats">
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

function initialiseEvador(){

    stagger(".service-card");

    document.querySelectorAll(".btn").forEach(ripple);

    document.getElementById("learnMore")
        ?.addEventListener("click",()=>{

            document.getElementById("wellness")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document.getElementById("backHome")
        ?.addEventListener("click",()=>{

            navigate("/");

        });

    document.getElementById("buyEvador")
        ?.addEventListener("click",openWhats);

    document.getElementById("evadorWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message =
        "Olá AD Lifestyle! Gostaria de adquirir o Evador.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}