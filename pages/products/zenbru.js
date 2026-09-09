/* ==========================================================
   AD LIFESTYLE V2
   ZENBRU.JS
   Premium Functional Coffee Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadZenbru(){

    applyTheme("zenbru");

    const app=document.getElementById("app");

    app.innerHTML=`

        ${hero()}

        ${ingredients()}

        ${benefits()}

        ${experience()}

        ${howToPrepare()}

        ${faq()}

        ${cta()}

    `;

    initialiseZenbru();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero zenbru-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Functional Coffee Collection
            </span>

            <h1 class="hero-title">
                Zenbru
                Premium
                Coffee
            </h1>

            <p class="hero-sub">
                Um café funcional cuidadosamente desenvolvido
                para proporcionar uma experiência aromática,
                energia equilibrada e bem-estar para o seu dia.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyZenbru">
                    Comprar Agora
                </button>

                <button class="btn btn-glass" id="coffeeBtn">
                    Ver Composição
                </button>

            </div>

        </div>

        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>

                <img
                    class="parallax"
                    data-speed="35"
                    src="./assets/products/zenbru.png"
                    alt="Zenbru">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   INGREDIENTS
   ========================================================== */

function ingredients(){

return `

<section id="coffee" class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Composição Premium
            </span>

            <h2 class="section-title">
                Ingredientes seleccionados
                para uma experiência superior
            </h2>

        </div>

        <div class="grid grid-2 mt-6">

            ${ingredient("☕","Café Premium","Grãos cuidadosamente seleccionados para um aroma intenso e sabor elegante.")}

            ${ingredient("🌿","Extractos Naturais","Componentes vegetais integrados na filosofia de bem-estar da AD Lifestyle.")}

            ${ingredient("🍃","Aroma Rico","Perfil aromático equilibrado para momentos únicos de degustação.")}

            ${ingredient("✨","Qualidade Premium","Produzido com elevado padrão de qualidade e consistência.")}

        </div>

    </div>

</section>

`;

}

function ingredient(icon,title,text){

return `

<div class="card service-card reveal">

    <div class="service-icon">${icon}</div>

    <h3>${title}</h3>

    <p class="text mt-2">${text}</p>

</div>

`;

}

/* ==========================================================
   BENEFITS
   ========================================================== */

function benefits(){

return `

<section class="section-sm">

    <div class="container">

        <div class="split">

            <div class="split-image reveal-left">

                <img
                    src="./assets/products/zenbru.png"
                    alt="Zenbru">

            </div>

            <div class="split-content reveal-right">

                <span class="label">
                    Benefícios
                </span>

                <h2 class="section-title">
                    Muito mais do que um café
                </h2>

                <div class="icon-list mt-4">

                    ${check("Energia para o dia-a-dia")}

                    ${check("Aroma intenso e sofisticado")}

                    ${check("Experiência premium de degustação")}

                    ${check("Ideal para manhãs produtivas")}

                    ${check("Sabor equilibrado e agradável")}

                    ${check("Integra uma rotina de bem-estar")}

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

function check(text){

return `

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

return `

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Experiência Zenbru
            </span>

            <h2 class="section-title">
                O ritual perfeito
                para começar o dia
            </h2>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-7 reveal">

                <h3>Energia Equilibrada</h3>

                <p class="text mt-2">
                    Uma bebida criada para acompanhar momentos de foco,
                    produtividade e tranquilidade ao longo do dia.
                </p>

            </div>

            <div class="bento-card span-5 reveal delay-1">

                <h3>Aroma Sofisticado</h3>

                <p class="text mt-2">
                    Uma combinação harmoniosa entre sabor intenso
                    e uma experiência sensorial elegante.
                </p>

            </div>

            <div class="bento-card span-12 reveal delay-2">

                <h3>Filosofia AD Lifestyle</h3>

                <p class="text mt-2">
                    O Zenbru representa a união entre qualidade,
                    bem-estar, estilo de vida e desenvolvimento humano,
                    valores centrais da nossa comunidade.
                </p>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   HOW TO PREPARE
   ========================================================== */

function howToPrepare(){

return `

<section class="section-sm">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Preparação
            </span>

            <h2 class="section-title">
                Simples, elegante e delicioso
            </h2>

        </div>

        <div class="timeline mt-6">

            ${step("1","Aquecer","Prepare aproximadamente 180–200 ml de água quente.")}

            ${step("2","Adicionar","Coloque a quantidade recomendada de Zenbru na chávena.")}

            ${step("3","Misturar","Mexa cuidadosamente até obter uma mistura homogénea.")}

            ${step("4","Desfrutar","Aproveite o aroma e transforme o seu momento numa experiência premium.")}

        </div>

    </div>

</section>

`;

}

function step(n,title,text){

return `

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

return `

<section class="section-sm">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Perguntas Frequentes
            </span>

            <h2 class="section-title">
                Tudo sobre o Zenbru
            </h2>

        </div>

        <div class="faq mt-5">

            ${question("O Zenbru é um café funcional?","Sim. O Zenbru integra a linha de bebidas funcionais da AD Lifestyle, aliando qualidade premium e bem-estar.")}

            ${question("Pode ser consumido diariamente?","Sim. Pode integrar uma rotina diária de consumo de café, de acordo com as preferências individuais.")}

            ${question("Qual é o principal diferencial?","O seu aroma sofisticado, qualidade premium e filosofia de bem-estar tornam-no numa experiência distinta.")}

            ${question("É indicado para manhãs produtivas?","Sim. Foi pensado para acompanhar momentos de foco, trabalho e produtividade.")}

        </div>

    </div>

</section>

`;

}

function question(q,a){

return `

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

return `

<section class="section">

    <div class="container">

        <div class="showcase">

            <div class="showcase-content section-center">

                <span class="badge">
                    Zenbru Coffee
                </span>

                <h2 class="section-title mt-3">
                    Transforme cada chávena
                    num momento especial
                </h2>

                <p class="lead">
                    Descubra o café funcional premium que combina
                    aroma, elegância e bem-estar.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="zenbruWhats">
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

function initialiseZenbru(){

    stagger(".service-card");

    document.querySelectorAll(".btn").forEach(ripple);

    document.getElementById("coffeeBtn")
        ?.addEventListener("click",()=>{

            document.getElementById("coffee")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document.getElementById("backHome")
        ?.addEventListener("click",()=>{

            navigate("/");

        });

    document.getElementById("buyZenbru")
        ?.addEventListener("click",openWhats);

    document.getElementById("zenbruWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message=
        "Olá AD Lifestyle! Gostaria de adquirir o Zenbru Premium Coffee.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}