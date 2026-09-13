/* ==========================================================
   AD LIFESTYLE V2
   SERVICES.JS
   Premium Services & Ecosystem Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple, stagger } from "../js/animations.js";

/* ==========================================================
   LOAD
   ========================================================== */

export function loadServices(){

    applyTheme("default");

    const app = document.getElementById("app");

    if(!app) return;

    app.innerHTML = `

        <div class="page-services">

            ${hero()}

            ${intro()}

            ${focuses()}

            ${wellness()}

            ${academy()}

            ${bridge()}

            ${campaigns()}

            ${international()}

            ${opportunity()}

            ${process()}

            ${faq()}

            ${cta()}

        </div>

    `;

    initialiseServices();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero services-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="label">
                AD Lifestyle · Services
            </span>

            <span class="services-eyebrow">
                WELLNESS · EDUCATION · OPPORTUNITY
            </span>

            <h1 class="hero-title">

                Criamos pontes
                <span>para novas possibilidades.</span>

            </h1>

            <p class="hero-sub">

                A AD Lifestyle conecta pessoas a soluções de bem-estar,
                produtos BZZWORLD, conhecimento, desenvolvimento pessoal
                e oportunidades através de uma visão integrada com a
                Academy Twenty One.

            </p>

            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    id="exploreServices">

                    Explorar o Ecossistema

                </button>

                <button
                    class="btn btn-glass"
                    id="contactServices">

                    Falar Connosco

                </button>

            </div>

            <div class="services-hero-stats">

                <div>

                    <strong>
                        BZZWORLD
                    </strong>

                    <span>
                        Soluções de bem-estar
                    </span>

                </div>

                <div>

                    <strong>
                        Academy 21
                    </strong>

                    <span>
                        Educação e evolução
                    </span>

                </div>

                <div>

                    <strong>
                        Global
                    </strong>

                    <span>
                        Distribuição e conexão
                    </span>

                </div>

            </div>

        </div>

        <div class="hero-visual reveal-right">

            <div class="services-hero-visual">

                <div class="services-logo-orbit orbit-one"></div>
                <div class="services-logo-orbit orbit-two"></div>

                <div class="services-logo-core">

                    <div class="services-logo-mark">
                        AD
                    </div>

                    <span>
                        LIFESTYLE
                    </span>

                    <small>
                        Creating Bridges
                    </small>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   INTRO
   ========================================================== */

function intro(){

return `

<section
    id="services-intro"
    class="section services-intro">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                O que fazemos
            </span>

            <h2 class="section-title">

                Uma organização criada
                <span>para criar pontes.</span>

            </h2>

            <p class="lead">

                A AD Lifestyle nasceu para aproximar pessoas,
                soluções e oportunidades. De um lado, disponibilizamos
                produtos e experiências ligados ao bem-estar.
                Do outro, criamos acesso a conhecimento, desenvolvimento
                pessoal e evolução empreendedora.

            </p>

        </div>

        <div class="services-intro-grid mt-6">

            <div class="services-intro-card reveal">

                <span class="services-card-number">
                    01
                </span>

                <div class="services-card-icon">
                    ◇
                </div>

                <h3>
                    Pessoas
                </h3>

                <p>
                    Criamos relações e aproximamos pessoas de
                    produtos, conhecimento, comunidades e novas
                    possibilidades.
                </p>

            </div>

            <div class="services-intro-card reveal delay-1">

                <span class="services-card-number">
                    02
                </span>

                <div class="services-card-icon">
                    ◌
                </div>

                <h3>
                    Soluções
                </h3>

                <p>
                    Apresentamos soluções de bem-estar e produtos
                    da BZZWORLD através de uma experiência de
                    acompanhamento e descoberta.
                </p>

            </div>

            <div class="services-intro-card reveal delay-2">

                <span class="services-card-number">
                    03
                </span>

                <div class="services-card-icon">
                    21
                </div>

                <h3>
                    Evolução
                </h3>

                <p>
                    Através da Academy Twenty One, aproximamos
                    educação, liderança, comunicação e desenvolvimento
                    empreendedor das pessoas.
                </p>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   TWO FOCUSES
   ========================================================== */

function focuses(){

return `

<section
    id="services"
    class="section services-focus">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Os nossos dois grandes focos
            </span>

            <h2 class="section-title">

                Duas áreas.
                <span>Uma visão.</span>

            </h2>

            <p class="lead">

                A AD Lifestyle trabalha sobre dois grandes eixos
                que se complementam: bem-estar e evolução.

            </p>

        </div>

        <div class="services-focus-grid mt-6">

            <article
                class="services-focus-card wellness reveal">

                <div class="services-focus-top">

                    <span>
                        FOCO 01
                    </span>

                    <div>
                        WELLNESS
                    </div>

                </div>

                <div class="services-focus-body">

                    <span class="services-focus-icon">
                        ◌
                    </span>

                    <h3>
                        Soluções de Saúde
                        e Bem-estar
                    </h3>

                    <p>
                        Produtos BZZWORLD, experiências de Lifestyle,
                        campanhas de apresentação e acompanhamento
                        para quem procura conhecer novas soluções
                        relacionadas com o bem-estar.
                    </p>

                    <div class="services-chip-row">

                        <span>BZZWORLD</span>
                        <span>Wellness</span>
                        <span>Lifestyle</span>
                        <span>Produtos</span>

                    </div>

                    <button
                        class="services-text-button"
                        data-action="products">

                        Explorar Produtos →

                    </button>

                </div>

            </article>

            <article
                class="services-focus-card evolution reveal delay-1">

                <div class="services-focus-top">

                    <span>
                        FOCO 02
                    </span>

                    <div>
                        EVOLUTION
                    </div>

                </div>

                <div class="services-focus-body">

                    <span class="services-focus-icon">
                        21
                    </span>

                    <h3>
                        Educação, Desenvolvimento
                        e Oportunidade
                    </h3>

                    <p>
                        Uma dimensão construída em conjunto com a
                        Academy Twenty One para aproximar formação,
                        liderança, comunicação, networking,
                        empreendedorismo e oportunidades.
                    </p>

                    <div class="services-chip-row">

                        <span>Academy 21</span>
                        <span>Liderança</span>
                        <span>Educação</span>
                        <span>Networking</span>

                    </div>

                    <button
                        class="services-text-button"
                        data-action="academy">

                        Conhecer Academy 21 →

                    </button>

                </div>

            </article>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   WELLNESS
   ========================================================== */

function wellness(){

return `

<section class="section services-wellness">

    <div class="container">

        <div class="split">

            <div class="split-content reveal-left">

                <span class="label">
                    Wellness Experience
                </span>

                <h2 class="section-title">

                    Mais do que distribuir.
                    <span>Apresentamos experiências.</span>

                </h2>

                <p class="lead">

                    A nossa actividade não termina na disponibilização
                    do produto. Criamos momentos para apresentar,
                    explicar e contextualizar as soluções BZZWORLD,
                    permitindo que cada pessoa conheça melhor o
                    universo de produtos disponível.

                </p>

                <div class="services-feature-list">

                    ${feature(
                        "01",
                        "Apresentação de produtos",
                        "Sessões e conteúdos dedicados à descoberta de produtos e das suas características."
                    )}

                    ${feature(
                        "02",
                        "Orientação",
                        "Ajudamos a compreender as opções disponíveis e a escolher de forma informada."
                    )}

                    ${feature(
                        "03",
                        "Lifestyle",
                        "Integramos os produtos numa visão mais ampla de bem-estar e qualidade de vida."
                    )}

                    ${feature(
                        "04",
                        "Acompanhamento",
                        "Mantemos uma relação próxima após a descoberta e aquisição."
                    )}

                </div>

            </div>

            <div class="split-image reveal-right">

                <div class="services-image-placeholder">

                    <span>
                        WELLNESS
                    </span>

                    <strong>
                        Espaço para imagem
                    </strong>

                    <small>
                        Área reservada para fotografia
                        institucional ou campanha de produtos.
                    </small>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   ACADEMY
   ========================================================== */

function academy(){

return `

<section class="section services-academy">

    <div class="container">

        <div class="services-academy-panel">

            <div class="services-academy-content reveal-left">

                <span class="label">
                    Academy Twenty One
                </span>

                <h2 class="section-title">

                    Crescimento começa
                    <span>com conhecimento.</span>

                </h2>

                <p class="text-lg">

                    A dimensão Academy da AD Lifestyle aproxima
                    pessoas de conteúdos e experiências de desenvolvimento
                    pessoal e empreendedor, criando espaço para aprender,
                    comunicar, liderar e evoluir.

                </p>

                <div class="services-academy-list">

                    ${academyFeature(
                        "01",
                        "Comunicação & Oratória",
                        "Desenvolvimento da capacidade de comunicar e apresentar ideias."
                    )}

                    ${academyFeature(
                        "02",
                        "Liderança",
                        "Competências para crescer pessoalmente e assumir novas responsabilidades."
                    )}

                    ${academyFeature(
                        "03",
                        "Empreendedorismo",
                        "Conhecimento e visão para compreender novas possibilidades."
                    )}

                    ${academyFeature(
                        "04",
                        "Networking",
                        "Construção de relações e conexão entre pessoas."
                    )}

                </div>

                <button
                    class="btn btn-primary mt-4"
                    id="academyButton">

                    Explorar Academy 21

                </button>

            </div>

            <div class="services-academy-visual reveal-right">

                <div class="academy21-symbol">

                    <strong>
                        21
                    </strong>

                    <span>
                        ACADEMY
                    </span>

                    <small>
                        Learn · Lead · Evolve
                    </small>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   BRIDGE
   ========================================================== */

function bridge(){

return `

<section class="section-sm services-bridge">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                The AD Lifestyle Bridge
            </span>

            <h2 class="section-title">

                Onde os dois mundos
                <span>se encontram.</span>

            </h2>

            <p class="lead">

                Bem-estar e evolução não precisam de viver separados.
                A nossa proposta é criar uma ponte entre cuidar de si,
                aprender, desenvolver competências e descobrir novas
                possibilidades.

            </p>

        </div>

        <div class="services-bridge-flow mt-6">

            <div class="bridge-node reveal">

                <span>
                    01
                </span>

                <strong>
                    Descobrir
                </strong>

                <p>
                    Conheça soluções e novas ideias.
                </p>

            </div>

            <div class="bridge-line"></div>

            <div class="bridge-node reveal delay-1">

                <span>
                    02
                </span>

                <strong>
                    Aprender
                </strong>

                <p>
                    Adquira conhecimento e compreensão.
                </p>

            </div>

            <div class="bridge-line"></div>

            <div class="bridge-node reveal delay-2">

                <span>
                    03
                </span>

                <strong>
                    Evoluir
                </strong>

                <p>
                    Desenvolva novas competências e perspectivas.
                </p>

            </div>

            <div class="bridge-line"></div>

            <div class="bridge-node reveal delay-3">

                <span>
                    04
                </span>

                <strong>
                    Conectar
                </strong>

                <p>
                    Faça parte de uma rede e novas possibilidades.
                </p>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   CAMPAIGNS
   ========================================================== */

function campaigns(){

return `

<section class="section services-campaigns">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Experiências AD Lifestyle
            </span>

            <h2 class="section-title">

                Apresentações,
                campanhas e <span>experiências.</span>

            </h2>

            <p class="lead">

                Criamos diferentes formatos para levar informação
                e conhecimento directamente às pessoas.

            </p>

        </div>

        <div class="grid grid-3 mt-6">

            ${campaignCard(
                "01",
                "Campanhas de Produtos",
                "Momentos dedicados à apresentação e demonstração de soluções BZZWORLD."
            )}

            ${campaignCard(
                "02",
                "Apresentações",
                "Sessões presenciais e digitais para explicar produtos, conceitos e experiências."
            )}

            ${campaignCard(
                "03",
                "Conteúdo Digital",
                "Conteúdo educativo e informativo para redes sociais e canais digitais."
            )}

            ${campaignCard(
                "04",
                "Eventos",
                "Encontros que reúnem bem-estar, desenvolvimento, conhecimento e networking."
            )}

            ${campaignCard(
                "05",
                "Dupla Oportunidade",
                "Apresentações estruturadas sobre os ecossistemas BZZWORLD e Academy Twenty One."
            )}

            ${campaignCard(
                "06",
                "Comunidade",
                "Construção de relações, partilha de experiências e aprendizagem contínua."
            )}

        </div>

    </div>

</section>

`;

}

function campaignCard(number,title,text){

return `

<div class="card services-campaign-card reveal">

    <span>
        ${number}
    </span>

    <h3>
        ${title}
    </h3>

    <p class="text mt-2">
        ${text}
    </p>

</div>

`;

}

/* ==========================================================
   INTERNATIONAL
   ========================================================== */

function international(){

return `

<section class="section services-international">

    <div class="container">

        <div class="services-global">

            <div class="services-global-content reveal-left">

                <span class="label">
                    Beyond Borders
                </span>

                <h2 class="section-title">

                    Uma organização
                    <span>sem fronteiras.</span>

                </h2>

                <p class="text-lg">

                    A AD Lifestyle trabalha numa lógica de conexão
                    internacional, criando pontes entre pessoas,
                    soluções e redes para além do mercado local.

                </p>

                <div class="services-global-points">

                    ${globalPoint(
                        "Distribuição",
                        "Entregas e acesso a produtos para diferentes destinos, de acordo com disponibilidade e logística."
                    )}

                    ${globalPoint(
                        "Conexão",
                        "Ligação entre pessoas, comunidades e redes de diferentes mercados."
                    )}

                    ${globalPoint(
                        "Expansão",
                        "Uma visão orientada para crescimento, aprendizagem e novas possibilidades."
                    )}

                </div>

            </div>

            <div class="services-global-visual reveal-right">

                <div class="global-orbit">

                    <span class="global-point p1">
                        AO
                    </span>

                    <span class="global-point p2">
                        EU
                    </span>

                    <span class="global-point p3">
                        INT
                    </span>

                    <div class="global-core">
                        AD
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

function globalPoint(title,text){

return `

<div class="services-global-point">

    <span>
        ✓
    </span>

    <div>

        <strong>
            ${title}
        </strong>

        <p>
            ${text}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   OPPORTUNITY
   ========================================================== */

function opportunity(){

return `

<section class="section services-opportunity">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Dupla Oportunidade
            </span>

            <h2 class="section-title">

                Conhecimento para
                <span>compreender as possibilidades.</span>

            </h2>

            <p class="lead">

                As apresentações de dupla oportunidade permitem
                explicar de forma organizada os dois universos que
                fazem parte da nossa actividade: produtos e soluções
                BZZWORLD, juntamente com a dimensão de desenvolvimento
                e oportunidades associada à Academy Twenty One.

            </p>

        </div>

        <div class="services-opportunity-grid mt-6">

            ${opportunityCard(
                "BZZWORLD",
                "Wellness",
                "Conheça o universo de produtos, a proposta de bem-estar e o modelo de distribuição."
            )}

            ${opportunityCard(
                "ACADEMY 21",
                "Evolution",
                "Conheça a dimensão de aprendizagem, liderança, desenvolvimento e empreendedorismo."
            )}

        </div>

        <div class="services-opportunity-note reveal">

            <span>
                IMPORTANTE
            </span>

            <p>
                Participar numa apresentação permite obter informação
                e compreender melhor o modelo. Qualquer decisão de
                participação, compra ou investimento deve ser tomada
                de forma consciente, depois de conhecer as condições oficiais.
            </p>

        </div>

    </div>

</section>

`;

}

function opportunityCard(brand,title,text){

return `

<div class="services-opportunity-card reveal">

    <span>
        ${brand}
    </span>

    <h3>
        ${title}
    </h3>

    <p>
        ${text}
    </p>

    <div class="services-opportunity-arrow">
        →
    </div>

</div>

`;

}

/* ==========================================================
   PROCESS
   ========================================================== */

function process(){

return `

<section class="section-sm services-process">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Como funciona
            </span>

            <h2 class="section-title">

                Da descoberta
                <span>à evolução.</span>

            </h2>

        </div>

        <div class="timeline mt-6">

            ${step(
                "1",
                "Descoberta",
                "Conhecemos o seu interesse e apresentamos as soluções disponíveis."
            )}

            ${step(
                "2",
                "Apresentação",
                "Explicamos produtos, conceitos, experiências ou possibilidades de aprendizagem."
            )}

            ${step(
                "3",
                "Escolha",
                "Cada pessoa decide de acordo com os seus objectivos e condições."
            )}

            ${step(
                "4",
                "Acompanhamento",
                "Mantemos a ligação para apoiar a utilização, aprendizagem e evolução."
            )}

            ${step(
                "5",
                "Comunidade",
                "A experiência pode continuar através de conteúdos, eventos e networking."
            )}

        </div>

    </div>

</section>

`;

}

function step(number,title,text){

return `

<div class="timeline-item reveal">

    <div class="timeline-dot">
        ${number}
    </div>

    <div class="timeline-content">

        <h3>
            ${title}
        </h3>

        <p class="text">
            ${text}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

return `

<section class="section-sm services-faq">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Perguntas Frequentes
            </span>

            <h2 class="section-title">
                Sobre os nossos
                <span>serviços.</span>
            </h2>

        </div>

        <div class="faq mt-5">

            ${question(
                "O que é exactamente a AD Lifestyle?",
                "A AD Lifestyle é uma organização criada para criar pontes entre pessoas, soluções de bem-estar, produtos BZZWORLD, conhecimento, desenvolvimento pessoal e oportunidades."
            )}

            ${question(
                "Quais são os principais focos da AD Lifestyle?",
                "Os dois grandes focos são o universo Wellness, com produtos e soluções BZZWORLD, e o universo de Evolution, ligado à Academy Twenty One, educação, desenvolvimento pessoal e empreendedorismo."
            )}

            ${question(
                "A AD Lifestyle vende apenas produtos?",
                "Não. A actividade inclui apresentação de produtos, campanhas, conteúdos, eventos, distribuição, experiências de Lifestyle e uma dimensão educacional e empreendedora."
            )}

            ${question(
                "A AD Lifestyle faz entregas internacionais?",
                "A organização trabalha com uma visão internacional e pode disponibilizar entregas para diferentes destinos de acordo com o produto, disponibilidade e condições logísticas aplicáveis."
            )}

            ${question(
                "O que são as apresentações de dupla oportunidade?",
                "São apresentações estruturadas destinadas a explicar os dois universos da actividade: BZZWORLD e Academy Twenty One, permitindo compreender melhor produtos, educação, comunidade e possibilidades."
            )}

            ${question(
                "A participação numa apresentação garante resultados financeiros?",
                "Não. Uma apresentação fornece informação sobre o modelo e as possibilidades existentes, mas não constitui garantia de rendimento ou sucesso financeiro."
            )}

            ${question(
                "Preciso de comprar um produto para conhecer a Academy 21?",
                "Não necessariamente. Os dois universos podem ser conhecidos de forma independente. O melhor caminho depende do interesse e dos objectivos de cada pessoa."
            )}

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

        <span>
            +
        </span>

    </button>

    <div class="faq-answer">

        <p>
            ${a}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   CTA
   ========================================================== */

function cta(){

return `

<section class="section services-cta">

    <div class="container">

        <div class="showcase services-final-showcase">

            <div class="services-cta-glow"></div>

            <div class="showcase-content section-center">

                <span class="badge">
                    AD Lifestyle
                </span>

                <h2 class="section-title mt-3">

                    Descubra onde
                    <span>podemos criar uma ponte.</span>

                </h2>

                <p class="lead">

                    Quer conhecer os produtos, participar numa apresentação,
                    saber mais sobre a Academy Twenty One ou simplesmente
                    conversar connosco?

                </p>

                <div class="hero-actions center mt-4">

                    <button
                        class="btn btn-primary"
                        id="servicesWhatsApp">

                        Falar no WhatsApp

                    </button>

                    <button
                        class="btn btn-glass"
                        id="servicesContact">

                        Página de Contacto

                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   COMPONENTS
   ========================================================== */

function feature(number,title,text){

return `

<div class="services-feature">

    <div class="services-feature-number">
        ${number}
    </div>

    <div>

        <strong>
            ${title}
        </strong>

        <p>
            ${text}
        </p>

    </div>

</div>

`;

}

function academyFeature(number,title,text){

return `

<div class="services-academy-feature">

    <span>
        ${number}
    </span>

    <div>

        <strong>
            ${title}
        </strong>

        <p>
            ${text}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseServices(){

    const root =
        document.querySelector(".page-services");

    if(!root) return;

    /* ------------------------------------------------------
       ANIMATIONS
       ------------------------------------------------------ */

    stagger(".page-services .card");

    root
        .querySelectorAll(".btn")
        .forEach(button=>{

            ripple(button);

        });

    /* ------------------------------------------------------
       HERO — EXPLORE
       ------------------------------------------------------ */

    root
        .querySelector("#exploreServices")
        ?.addEventListener("click",()=>{

            root
                .querySelector("#services")
                ?.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

        });

    /* ------------------------------------------------------
       WELLNESS / ACADEMY BUTTONS
       ------------------------------------------------------ */

    root
        .querySelectorAll('[data-action="products"]')
        .forEach(button=>{

            button.addEventListener("click",()=>{

                navigate("/products");

            });

        });

    root
        .querySelectorAll('[data-action="academy"]')
        .forEach(button=>{

            button.addEventListener("click",()=>{

                navigate("/events");

            });

        });

    /* ------------------------------------------------------
       ACADEMY BUTTON
       ------------------------------------------------------ */

    root
        .querySelector("#academyButton")
        ?.addEventListener("click",()=>{

            navigate("/events");

        });

    /* ------------------------------------------------------
       CONTACT
       ------------------------------------------------------ */

    root
        .querySelector("#contactServices")
        ?.addEventListener("click",()=>{

            navigate("/contact");

        });

    root
        .querySelector("#servicesContact")
        ?.addEventListener("click",()=>{

            navigate("/contact");

        });

    /* ------------------------------------------------------
       WHATSAPP
       ------------------------------------------------------ */

    root
        .querySelector("#servicesWhatsApp")
        ?.addEventListener("click",()=>{

            const message =
                "Olá AD Lifestyle! Gostaria de conhecer melhor os serviços, produtos e oportunidades disponíveis.";

            window.open(
                `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
                "_blank"
            );

        });

    /* ------------------------------------------------------
       FAQ
       ------------------------------------------------------ */

    root
        .querySelectorAll(".faq-question")
        .forEach(button=>{

            button.addEventListener("click",()=>{

                const item =
                    button.closest(".faq-item");

                if(!item) return;

                root
                    .querySelectorAll(".faq-item")
                    .forEach(other=>{

                        if(other !== item){

                            other.classList.remove("active");

                        }

                    });

                item.classList.toggle("active");

            });

        });

}
