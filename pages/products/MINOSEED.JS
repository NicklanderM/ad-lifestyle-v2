/* ==========================================================
   AD LIFESTYLE V2
   MINOSEED.JS
   Premium Minoseed Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadMinoseed(){

    applyTheme("minoseed");

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

    initialiseMinoseed();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero minoseed-hero">

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
                Minoseed
            </h1>

            <p class="hero-sub">
                Produto premium da linha Smart Lab Beauty da BZZWORLD,
                desenvolvido para integrar uma rotina de beleza,
                cuidado e bem-estar dentro da filosofia AD Lifestyle.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyMinoseed">
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
                    src="./assets/products/minoseed.png"
                    alt="Minoseed">

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
                Uma abordagem consciente
                ao cuidado pessoal
            </h2>

            <p class="lead">
                O Minoseed integra a linha Smart Lab Beauty da BZZWORLD,
                oferecendo uma proposta orientada para o cuidado pessoal,
                beleza e bem-estar como parte de uma rotina consistente.
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

                <h3>Filosofia Minoseed</h3>

                <p class="text mt-2">
                    O Minoseed enquadra-se numa visão moderna de beleza
                    e bem-estar, onde o cuidado pessoal é integrado numa
                    rotina consciente, equilibrada e consistente.
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
                    src="./assets/products/minoseed.png"
                    alt="Minoseed">

            </div>

            <div class="split-content reveal-right">

                <span class="label">
                    Características
                </span>

                <h2 class="section-title">
                    Cuidado.
                    Beleza.
                    Bem-estar.
                </h2>

                <div class="icon-list mt-4">

                    ${check("Integração numa rotina de cuidado pessoal")}

                    ${check("Abordagem orientada para beleza e bem-estar")}

                    ${check("Pensado para acompanhar uma rotina consistente")}

                    ${check("Parte da linha Smart Lab Beauty")}

                    ${check("Conceito premium de cuidado pessoal")}

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
                Beleza integrada
                numa rotina de bem-estar
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${feature(
                "✨",
                "Beleza",
                "Uma proposta orientada para integrar o cuidado pessoal na rotina."
            )}

            ${feature(
                "🌿",
                "Bem-estar",
                "Pensado dentro de uma abordagem global de cuidado e equilíbrio."
            )}

            ${feature(
                "💎",
                "Qualidade",
                "Parte da linha Smart Lab Beauty da BZZWORLD."
            )}

            ${feature(
                "🧘",
                "Cuidado",
                "Incentiva uma relação mais consciente com os hábitos de cuidado pessoal."
            )}

            ${feature(
                "🏆",
                "Consistência",
                "O cuidado pessoal ganha valor quando se transforma numa rotina."
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
                Pequenas escolhas.
                Grandes hábitos.
            </h2>

        </div>

        <div class="timeline mt-6">

            ${step(
                "1",
                "Conheça",
                "Conheça o Minoseed e consulte atentamente as indicações oficiais do produto."
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
                "Transforme o cuidado pessoal numa parte consciente do seu estilo de vida."
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
                Dúvidas sobre o Minoseed
            </h2>

        </div>

        <div class="faq mt-5">

            ${question(
                "O que é o Minoseed?",
                "O Minoseed é um produto da linha Smart Lab Beauty da BZZWORLD, integrado na proposta de beleza, cuidado pessoal e bem-estar da marca."
            )}

            ${question(
                "O Minoseed faz parte da linha Beauty?",
                "Sim. O Minoseed está integrado na linha Smart Lab Beauty da BZZWORLD."
            )}

            ${question(
                "Como devo utilizar o Minoseed?",
                "A utilização deve seguir rigorosamente as indicações oficiais presentes na embalagem e na documentação do produto."
            )}

            ${question(
                "O Minoseed substitui cuidados pessoais?",
                "Não. O produto deve ser entendido como parte de uma rotina de cuidado e não como substituto de hábitos adequados de higiene, alimentação ou estilo de vida."
            )}

            ${question(
                "Qual é a filosofia do Minoseed?",
                "A proposta está associada a uma visão integrada de beleza, cuidado pessoal, bem-estar, consistência e qualidade de vida."
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
                    Minoseed
                </span>

                <h2 class="section-title mt-3">
                    Eleve a sua rotina
                    de cuidado pessoal
                </h2>

                <p class="lead">
                    Descubra o Minoseed e conheça uma proposta premium
                    de beleza, cuidado e bem-estar integrada no Lifestyle
                    da BZZWORLD.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="minoseedWhats">
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

function initialiseMinoseed(){

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

    document.getElementById("buyMinoseed")
        ?.addEventListener("click",openWhats);

    document.getElementById("minoseedWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message =
        "Olá AD Lifestyle! Gostaria de adquirir o Minoseed.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}