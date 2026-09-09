/* ==========================================================
   AD LIFESTYLE V2
   EZENO.JS
   Premium Oral Care Product Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadEzeno(){

    applyTheme("ezeno");

    const app=document.getElementById("app");

    app.innerHTML=`

        ${hero()}

        ${ingredients()}

        ${benefits()}

        ${technology()}

        ${howToUse()}

        ${faq()}

        ${cta()}

    `;

    initialiseEzeno();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Premium Oral Care
            </span>

            <h1 class="hero-title">
                EZENO
                Herbal
                Toothpaste
            </h1>

            <p class="hero-sub">
                Pasta dentífrica premium desenvolvida com ingredientes
                naturais seleccionados para promover higiene oral,
                hálito fresco, protecção das gengivas e um sorriso saudável.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyEzeno">
                    Comprar Agora
                </button>

                <button class="btn btn-glass" id="ingredientsBtn">
                    Ingredientes
                </button>

            </div>

        </div>

        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>

                <img
                    class="parallax"
                    data-speed="30"
                    src="./assets/products/ezeno.png"
                    alt="EZENO">

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

return`

<section id="ingredients" class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Ingredientes Naturais
            </span>

            <h2 class="section-title">
                Uma combinação herbal
                cuidadosamente seleccionada
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${ingredient("🌿","Menta Natural","Proporciona uma sensação intensa de frescura e hálito agradável.")}

            ${ingredient("🍃","Chá Verde","Conhecido pelas suas propriedades antioxidantes e de cuidado oral.")}

            ${ingredient("🌱","Aloe Vera","Ajuda a proporcionar conforto às gengivas durante a higiene oral.")}

            ${ingredient("🌸","Extractos Botânicos","Ingredientes vegetais seleccionados para uma experiência mais natural.")}

            ${ingredient("🛡️","Sílica Suave","Auxilia na limpeza delicada da superfície dentária.")}

            ${ingredient("✨","Essências Naturais","Contribuem para uma escovagem refrescante e agradável.")}

        </div>

    </div>

</section>

`;

}

function ingredient(icon,title,text){

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
   BENEFITS
   ========================================================== */

function benefits(){

return`

<section class="section-sm">

    <div class="container">

        <div class="split">

            <div class="split-image reveal-left">

                <img
                    src="./assets/products/ezeno.png"
                    alt="EZENO">

            </div>

            <div class="split-content reveal-right">

                <span class="label">
                    Benefícios
                </span>

                <h2 class="section-title">
                    Cuidado diário
                    para toda a família
                </h2>

                <div class="icon-list mt-4">

                    ${check("Hálito fresco durante mais tempo")}

                    ${check("Auxilia na limpeza dos dentes")}

                    ${check("Contribui para uma higiene oral completa")}

                    ${check("Sensação prolongada de frescura")}

                    ${check("Cuidado delicado das gengivas")}

                    ${check("Escovagem confortável e agradável")}

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
   TECHNOLOGY
   ========================================================== */

function technology(){

return`

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Tecnologia Herbal
            </span>

            <h2 class="section-title">
                Higiene oral inspirada
                na natureza
            </h2>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-7 reveal">

                <h3>Frescura Natural</h3>

                <p class="text mt-2">
                    A combinação de ingredientes naturais proporciona uma
                    sensação refrescante e uma experiência agradável em cada utilização.
                </p>

            </div>

            <div class="bento-card span-5 reveal delay-1">

                <h3>Protecção Diária</h3>

                <p class="text mt-2">
                    Desenvolvida para integrar facilmente a rotina diária
                    de higiene oral de toda a família.
                </p>

            </div>

            <div class="bento-card span-12 reveal delay-2">

                <h3>Porque escolher EZENO?</h3>

                <p class="text mt-2">
                    Uma pasta dentífrica premium que combina ingredientes herbais,
                    conforto, frescura e uma experiência de escovagem superior,
                    alinhada com a filosofia de bem-estar da AD Lifestyle.
                </p>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   HOW TO USE
   ========================================================== */

function howToUse(){

return`

<section class="section-sm">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Como Utilizar
            </span>

            <h2 class="section-title">
                Uma rotina simples e eficaz
            </h2>

        </div>

        <div class="timeline mt-6">

            ${step("1","Aplicar","Coloque uma pequena quantidade de EZENO na escova.")}

            ${step("2","Escovar","Escove cuidadosamente durante aproximadamente 2 minutos.")}

            ${step("3","Enxaguar","Enxague completamente a boca com água.")}

            ${step("4","Repetir","Utilize diariamente, de preferência após as refeições.")}

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
                Dúvidas comuns sobre o EZENO
            </h2>

        </div>

        <div class="faq mt-5">

            ${question("O EZENO pode ser utilizado diariamente?","Sim. Foi desenvolvido para integrar a rotina diária de higiene oral.")}

            ${question("É adequado para toda a família?","Sim. A sua utilização destina-se à higiene oral diária.")}

            ${question("O que torna o EZENO diferente?","A combinação de ingredientes herbais e uma experiência premium de frescura e conforto.")}

            ${question("Ajuda a refrescar o hálito?","Sim. A presença de ingredientes naturais proporciona uma sensação prolongada de frescura.")}

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
                    EZENO
                </span>

                <h2 class="section-title mt-3">
                    O seu sorriso merece
                    um cuidado premium
                </h2>

                <p class="lead">
                    Descubra uma nova forma de cuidar da sua higiene oral
                    com ingredientes naturais e uma experiência refrescante.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="ezenoWhats">
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

function initialiseEzeno(){

    stagger(".service-card");

    document.querySelectorAll(".btn").forEach(ripple);

    document.getElementById("ingredientsBtn")
        ?.addEventListener("click",()=>{

            document.getElementById("ingredients")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document.getElementById("backHome")
        ?.addEventListener("click",()=>{

            navigate("/");

        });

    document.getElementById("buyEzeno")
        ?.addEventListener("click",openWhats);

    document.getElementById("ezenoWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message=
        "Olá AD Lifestyle! Gostaria de adquirir a pasta dentífrica EZENO.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}