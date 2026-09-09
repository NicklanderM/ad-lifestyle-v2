/* ==========================================================
   AD LIFESTYLE V2
   ALPHA.JS
   Premium Alpha Vmax Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadAlpha(){

    applyTheme("alpha");

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

    initialiseAlpha();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero alpha-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Performance Collection
            </span>

            <h1 class="hero-title">
                Alpha
                Vmax
            </h1>

            <p class="hero-sub">
                Suplemento premium desenvolvido para homens que procuram
                uma rotina de vitalidade, energia, desempenho e bem-estar,
                integrado na filosofia de longevidade da AD Lifestyle.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyAlpha">
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
                    src="./assets/products/alpha.png"
                    alt="Alpha Vmax">

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
                Performance Premium
            </span>

            <h2 class="section-title">
                Desenvolvido para homens
                de elevada performance
            </h2>

            <p class="lead">
                O Alpha Vmax representa uma abordagem moderna ao bem-estar
                masculino, combinando ingredientes cuidadosamente seleccionados
                com uma filosofia de desenvolvimento físico e mental.
            </p>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-4 reveal">

                <div class="metric">

                    <div class="metric-number">
                        100%
                    </div>

                    <div class="metric-label">
                        Linha Premium
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-1">

                <div class="metric">

                    <div class="metric-number">
                        Elite
                    </div>

                    <div class="metric-label">
                        Performance
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">
                        Daily
                    </div>

                    <div class="metric-label">
                        Routine
                    </div>

                </div>

            </div>

            <div class="bento-card span-12 reveal delay-3">

                <h3>Filosofia Alpha</h3>

                <p class="text mt-2">
                    Mais do que um produto, o Alpha Vmax representa disciplina,
                    confiança, desenvolvimento pessoal e um compromisso contínuo
                    com uma vida saudável e produtiva.
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
                    src="./assets/products/alpha.png"
                    alt="Alpha Vmax">

            </div>

            <div class="split-content reveal-right">

                <span class="label">
                    Benefícios
                </span>

                <h2 class="section-title">
                    Energia. Confiança.
                    Vitalidade.
                </h2>

                <div class="icon-list mt-4">

                    ${check("Apoio à vitalidade masculina")}

                    ${check("Rotina de energia diária")}

                    ${check("Bem-estar e desempenho")}

                    ${check("Estilo de vida activo")}

                    ${check("Confiança e disciplina")}

                    ${check("Integração na filosofia de longevidade")}

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
                Formulação Premium
            </span>

            <h2 class="section-title">
                Uma combinação cuidadosamente
                seleccionada
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${feature("⚡","Energia","Pensado para acompanhar dias intensos.")}

            ${feature("🛡️","Vitalidade","Integra uma rotina masculina de bem-estar.")}

            ${feature("🔥","Performance","Ideal para homens activos e determinados.")}

            ${feature("💎","Qualidade","Produzido segundo elevados padrões premium.")}

            ${feature("🏆","Confiança","Um símbolo de disciplina e evolução pessoal.")}

            ${feature("🌍","Lifestyle","Parte da filosofia internacional da AD Lifestyle.")}

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
                Rotina Recomendada
            </span>

            <h2 class="section-title">
                Construa hábitos de excelência
            </h2>

        </div>

        <div class="timeline mt-6">

            ${step("1","Manhã","Integre o Alpha Vmax na sua rotina diária.")}

            ${step("2","Disciplina","Combine uma alimentação equilibrada com actividade física.")}

            ${step("3","Consistência","O verdadeiro resultado nasce da regularidade dos hábitos.")}

            ${step("4","Lifestyle","Desenvolva uma vida orientada para saúde, liderança e propósito.")}

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
                Dúvidas sobre o Alpha Vmax
            </h2>

        </div>

        <div class="faq mt-5">

            ${question("O Alpha Vmax faz parte da linha premium?","Sim. É um dos produtos premium da colecção AD Lifestyle.")}

            ${question("Quem pode integrar este produto na sua rotina?","Homens adultos que pretendam adoptar uma rotina orientada para vitalidade e bem-estar.")}

            ${question("O Alpha substitui hábitos saudáveis?","Não. O Alpha Vmax deve ser encarado como complemento de um estilo de vida saudável.")}

            ${question("Qual é a filosofia por detrás do produto?","Disciplina, desenvolvimento humano, longevidade e performance pessoal.")}

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
                    Alpha Vmax
                </span>

                <h2 class="section-title mt-3">
                    Eleve o seu potencial
                    ao próximo nível
                </h2>

                <p class="lead">
                    Junte-se aos homens que escolheram uma vida de disciplina,
                    confiança, bem-estar e desenvolvimento contínuo.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="alphaWhats">
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

function initialiseAlpha(){

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

    document.getElementById("buyAlpha")
        ?.addEventListener("click",openWhats);

    document.getElementById("alphaWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message=
        "Olá AD Lifestyle! Gostaria de adquirir o Alpha Vmax.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}