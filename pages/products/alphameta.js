/* ==========================================================
   AD LIFESTYLE V2
   ALPHAMETA.JS
   Premium AlphaMeta Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadAlphaMeta(){

    applyTheme("alphameta");

    const app=document.getElementById("app");

    app.innerHTML=`

        ${hero()}

        ${performance()}

        ${benefits()}

        ${formula()}

        ${routine()}

        ${faq()}

        ${cta()}

    `;

    initialiseAlphaMeta();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero alphameta-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Nutrition Collection
            </span>

            <h1 class="hero-title">
                Alpha
                Meta
            </h1>

            <p class="hero-sub">
                Suplemento nutricional premium desenvolvido para integrar
                uma rotina de bem-estar, equilíbrio e vitalidade,
                segundo a filosofia de longevidade da AD Lifestyle.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyAlphaMeta">
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
                    src="./assets/products/alphameta.png"
                    alt="AlphaMeta">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   PERFORMANCE
   ========================================================== */

function performance(){

return`

<section id="performance" class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Nutrição Premium
            </span>

            <h2 class="section-title">
                Uma abordagem moderna
                ao bem-estar diário
            </h2>

            <p class="lead">
                O AlphaMeta integra a linha nutricional premium da AD Lifestyle,
                concebida para acompanhar pessoas que valorizam uma rotina
                equilibrada, consistente e orientada para o bem-estar.
            </p>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-4 reveal">

                <div class="metric">

                    <div class="metric-number">
                        Premium
                    </div>

                    <div class="metric-label">
                        Nutrição
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-1">

                <div class="metric">

                    <div class="metric-number">
                        Daily
                    </div>

                    <div class="metric-label">
                        Routine
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">
                        Smart
                    </div>

                    <div class="metric-label">
                        Nutrition
                    </div>

                </div>

            </div>

            <div class="bento-card span-12 reveal delay-3">

                <h3>Filosofia AlphaMeta</h3>

                <p class="text mt-2">
                    O AlphaMeta representa uma abordagem consciente à nutrição
                    e ao bem-estar, incentivando a consistência, a disciplina
                    e a construção de hábitos que possam integrar-se numa
                    rotina de vida equilibrada.
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
                    src="./assets/products/alphameta.png"
                    alt="AlphaMeta">

            </div>

            <div class="split-content reveal-right">

                <span class="label">
                    Características
                </span>

                <h2 class="section-title">
                    Nutrição.
                    Equilíbrio.
                    Consistência.
                </h2>

                <div class="icon-list mt-4">

                    ${check("Integração numa rotina nutricional")}

                    ${check("Apoio a um estilo de vida equilibrado")}

                    ${check("Pensado para o bem-estar diário")}

                    ${check("Ideal para pessoas com uma rotina activa")}

                    ${check("Foco na consistência dos hábitos")}

                    ${check("Parte da filosofia de longevidade da AD Lifestyle")}

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
                Conceito Nutricional
            </span>

            <h2 class="section-title">
                Uma experiência orientada
                para o bem-estar
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${feature("⚡","Vitalidade","Uma escolha pensada para acompanhar uma rotina activa.")}

            ${feature("🧬","Nutrição","Integra-se numa abordagem consciente à nutrição diária.")}

            ${feature("⚖️","Equilíbrio","Ideal para quem procura consistência e equilíbrio na rotina.")}

            ${feature("💎","Qualidade","Parte de uma linha premium de produtos nutricionais.")}

            ${feature("🏆","Consistência","A construção de hábitos começa com escolhas conscientes.")}

            ${feature("🌍","Lifestyle","Parte da filosofia internacional de bem-estar da AD Lifestyle.")}

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
                Rotina
            </span>

            <h2 class="section-title">
                Transforme escolhas em hábitos
            </h2>

        </div>

        <div class="timeline mt-6">

            ${step(
                "1",
                "Integração",
                "Inclua o AlphaMeta na sua rotina de acordo com as orientações do produto."
            )}

            ${step(
                "2",
                "Equilíbrio",
                "Combine uma alimentação variada e equilibrada com hábitos de vida saudáveis."
            )}

            ${step(
                "3",
                "Consistência",
                "Mantenha uma rotina regular e consciente, respeitando as necessidades do seu organismo."
            )}

            ${step(
                "4",
                "Lifestyle",
                "Construa uma rotina orientada para bem-estar, equilíbrio, longevidade e qualidade de vida."
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
                Dúvidas sobre o AlphaMeta
            </h2>

        </div>

        <div class="faq mt-5">

            ${question(
                "O que é o AlphaMeta?",
                "O AlphaMeta é um produto da linha Smart Lab Nutrition da BZZWORLD, integrado na proposta de nutrição e bem-estar da AD Lifestyle."
            )}

            ${question(
                "Como o AlphaMeta pode ser integrado na rotina?",
                "A sua utilização deve seguir as indicações presentes na embalagem e as orientações oficiais do produto. Pode ser integrado numa rotina que inclua alimentação equilibrada e hábitos de vida saudáveis."
            )}

            ${question(
                "O AlphaMeta substitui uma alimentação equilibrada?",
                "Não. Um suplemento alimentar não deve ser apresentado como substituto de uma alimentação variada e equilibrada."
            )}

            ${question(
                "Quem deve utilizar o AlphaMeta?",
                "A utilização deve respeitar as indicações oficiais, a composição e as recomendações presentes na embalagem do produto."
            )}

            ${question(
                "Qual é a filosofia do AlphaMeta?",
                "O AlphaMeta está associado a uma abordagem de nutrição, bem-estar, consistência e construção de hábitos dentro da filosofia de longevidade da AD Lifestyle."
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
                    AlphaMeta
                </span>

                <h2 class="section-title mt-3">
                    Faça da nutrição
                    parte da sua rotina
                </h2>

                <p class="lead">
                    Descubra o AlphaMeta e conheça uma abordagem moderna
                    à nutrição, ao equilíbrio e ao bem-estar diário.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="alphaMetaWhats">
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

function initialiseAlphaMeta(){

    stagger(".service-card");

    document.querySelectorAll(".btn").forEach(ripple);

    document.getElementById("learnMore")
        ?.addEventListener("click",()=>{

            document.getElementById("performance")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document.getElementById("backHome")
        ?.addEventListener("click",()=>{

            navigate("/");

        });

    document.getElementById("buyAlphaMeta")
        ?.addEventListener("click",openWhats);

    document.getElementById("alphaMetaWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message =
        "Olá AD Lifestyle! Gostaria de adquirir o AlphaMeta.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}