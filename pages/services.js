/* ==========================================================
   AD LIFESTYLE V2
   SERVICES.JS
   Premium Services & Ecosystem Experience
   Master Pattern: EVENTS PAGE
   Editorial / Immersive / Luxury
   ----------------------------------------------------------
   Página:
   - Hero editorial
   - Ecossistema
   - Dois grandes focos
   - Wellness Experience
   - Academy Twenty One
   - AD Lifestyle Bridge
   - Campanhas & experiências
   - Visão internacional
   - Dupla oportunidade
   - Processo
   - FAQ
   - CTA
   ----------------------------------------------------------
   Assets:
   ./assets/logo/logo.png
   ./assets/images/a21.png"
   ./assets/products/angel.png
   ./assets/products/ezeno.png
   ./assets/products/zenbru.png
   ./assets/products/alpha.png
   ./assets/products/alphameta.png
   ./assets/products/minoseed.png
   ./assets/products/evador.png
   ./assets/products/alphaspin-ultra.png
   ./assets/products/straw.png
   ./assets/products/ismarts3.png
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple, stagger } from "../js/animations.js";

/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER =
    "244924964666";

/* ==========================================================
   PRODUTOS VISUAIS
   ========================================================== */

const SERVICES_PRODUCTS = [

    {
        id:"angel",
        name:"Angel Moon",
        category:"CUIDADO FEMININO",
        image:"./assets/products/angel.png"
    },

    {
        id:"ezeno",
        name:"EZENO",
        category:"SAÚDE ORAL",
        image:"./assets/products/ezeno.png"
    },

    {
        id:"zenbru",
        name:"Zenbru",
        category:"CAFÉ FUNCIONAL",
        image:"./assets/products/zenbru.png"
    },

    {
        id:"alpha",
        name:"Alpha Vmax",
        category:"PERFORMANCE",
        image:"./assets/products/alpha.png"
    },

    {
        id:"alphameta",
        name:"AlphaMeta",
        category:"NUTRIÇÃO",
        image:"./assets/products/alphameta.png"
    },

    {
        id:"minoseed",
        name:"Minoseed",
        category:"BELEZA & BEM-ESTAR",
        image:"./assets/products/minoseed.png"
    },

    {
        id:"evador",
        name:"Evador",
        category:"CUIDADOS PREMIUM",
        image:"./assets/products/evador.png"
    },

    {
        id:"alphaspin-ultra",
        name:"AlphaSpin Ultra",
        category:"SMART LIVING",
        image:"./assets/products/alphaspin-ultra.png"
    },

    {
        id:"alpha-spin-straw",
        name:"Alpha Spin Straw",
        category:"SMART LIVING",
        image:"./assets/products/straw.png"
    },

    {
        id:"ismarts3",
        name:"iSMART S3",
        category:"SMART LIVING",
        image:"./assets/products/ismarts3.png"
    }

];

/* ==========================================================
   LOAD
   ========================================================== */

export function loadServices(){

    applyTheme("default");

    const app =
        document.getElementById("app");

    if(!app){

        console.error(
            "AD LIFESTYLE Services: elemento #app não encontrado."
        );

        return;

    }

    app.innerHTML = `

        <main class="page-services">

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

        </main>

    `;

    initialiseServices();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

<section
    class="hero services-hero"
    id="services-top"
>

    <div
        class="services-hero-backdrop"
        aria-hidden="true"
    ></div>

    <div
        class="services-hero-glow glow-one"
        aria-hidden="true"
    ></div>

    <div
        class="services-hero-glow glow-two"
        aria-hidden="true"
    ></div>

    <div
        class="container hero-grid services-hero-grid"
    >

        <div
            class="
                hero-content
                services-hero-content
                reveal
            "
        >

            <span class="label">
                AD Lifestyle · Services
            </span>

            <span class="services-eyebrow">
                BEM-ESTAR · EDUCAÇÃO · OPORTUNIDADE
            </span>

            <h1 class="hero-title">

                Criamos pontes

                <span>
                    para novas possibilidades.
                </span>

            </h1>

            <p class="hero-sub">

                A AD Lifestyle conecta pessoas a
                soluções de bem-estar, produtos BZZWORLD,
                conhecimento, desenvolvimento pessoal
                e oportunidades através de uma visão
                integrada com a Academy Twenty One.

            </p>

            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    id="exploreServices"
                    type="button"
                >
                    Explorar o Ecossistema
                </button>

                <button
                    class="btn btn-glass"
                    id="contactServices"
                    type="button"
                >
                    Falar Connosco
                </button>

            </div>

            <div
                class="
                    services-hero-stats
                    reveal
                "
            >

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
                        ACADEMY 21
                    </strong>

                    <span>
                        Educação & evolução
                    </span>

                </div>

                <div>

                    <strong>
                        GLOBAL
                    </strong>

                    <span>
                        Conexão internacional
                    </span>

                </div>

            </div>

        </div>

        <div
            class="
                hero-visual
                services-hero-visual-wrap
                reveal-right
            "
        >

            <div class="services-hero-visual">

                <div
                    class="
                        services-logo-orbit
                        orbit-one
                    "
                ></div>

                <div
                    class="
                        services-logo-orbit
                        orbit-two
                    "
                ></div>

                <div
                    class="
                        services-logo-orbit
                        orbit-three
                    "
                ></div>

                <div class="services-logo-core">

                    <div class="services-logo-mark">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle"
                        >

                    </div>

                    <strong>
                        AD LIFESTYLE
                    </strong>

                    <span>
                        CRIANDO PONTES
                    </span>

                    <small>
                        Bem-Estar · Educação · Oportunidade
                    </small>

                </div>

                <div
                    class="
                        services-floating-card
                        card-one
                    "
                >

                    <span>
                        01
                    </span>

                    <strong>
                        Bem-Estar
                    </strong>

                </div>

                <div
                    class="
                        services-floating-card
                        card-two
                    "
                >

                    <span>
                        21
                    </span>

                    <strong>
                        Academy
                    </strong>

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
    class="
        section
        services-intro
    "
>

    <div class="container">

        <div
            class="
                section-center
                reveal
            "
        >

            <span class="label">
                O que fazemos
            </span>

            <h2 class="section-title">

                Uma organização criada
                <span>
                    para criar pontes.
                </span>

            </h2>

            <p class="lead">

                A AD Lifestyle aproxima pessoas,
                soluções, conhecimento e oportunidades.
                A nossa actividade reúne o universo
                de produtos BZZWORLD e uma dimensão
                de desenvolvimento ligada à
                Academy Twenty One.

            </p>

        </div>

        <div
            class="
                services-intro-grid
                mt-6
            "
        >

            ${introCard(
                "01",
                "Pessoas",
                "Criamos relações e aproximamos pessoas de produtos, conhecimento, comunidades e novas possibilidades.",
                "AD"
            )}

            ${introCard(
                "02",
                "Soluções",
                "Apresentamos produtos e experiências BZZWORLD através de informação, acompanhamento e descoberta.",
                "BZ"
            )}

            ${introCard(
                "03",
                "Evolução",
                "Através da Academy Twenty One, aproximamos educação, liderança, comunicação, networking e desenvolvimento empreendedor.",
                "21"
            )}

        </div>

    </div>

</section>

`;

}

function introCard(
    number,
    title,
    text,
    mark
){

    return `

<div
    class="
        services-intro-card
        reveal
    "
>

    <div
        class="
            services-card-top
        "
    >

        <span class="services-card-number">
            ${number}
        </span>

        <span class="services-card-mark">
            ${mark}
        </span>

    </div>

    <h3>
        ${title}
    </h3>

    <p>
        ${text}
    </p>

</div>

`;

}

/* ==========================================================
   DOIS FOCOS
   ========================================================== */

function focuses(){

    return `

<section
    id="services"
    class="
        section
        services-focus
    "
>

    <div class="container">

        <div
            class="
                section-center
                reveal
            "
        >

            <span class="label">
                Os nossos dois grandes focos
            </span>

            <h2 class="section-title">

                Duas áreas.

                <span>
                    Uma visão.
                </span>

            </h2>

            <p class="lead">

                A AD Lifestyle trabalha sobre dois
                grandes eixos que se complementam:
                bem-estar e evolução.

            </p>

        </div>

        <div
            class="
                services-focus-grid
                mt-6
            "
        >

            ${focusCardWellness()}

            ${focusCardAcademy()}

        </div>

    </div>

</section>

`;

}

function focusCardWellness(){

    return `

<article
    class="
        services-focus-card
        wellness
        reveal
    "
>

    <div class="services-focus-top">

        <span>
            FOCO 01
        </span>

        <strong>
            Bem-Estar
        </strong>

    </div>

    <div class="services-focus-body">

        <div class="services-focus-image">

            <img
                src="./assets/products/ezeno.png"
                alt="Produtos BZZWORLD"
                loading="lazy"
            >

            <div
                class="services-focus-image-overlay"
            ></div>

            <span>
                BZZWORLD
            </span>

        </div>

        <div
            class="
                services-focus-copy
            "
        >

            <span class="services-focus-icon">
                ◌
            </span>

            <h3>
                Soluções de Saúde
                e Bem-estar
            </h3>

            <p>

                Produtos BZZWORLD, experiências de
                Lifestyle, campanhas de apresentação
                e acompanhamento para quem procura
                conhecer novas soluções relacionadas
                com o bem-estar.

            </p>

            <div class="services-chip-row">

                <span>
                    BZZWORLD
                </span>

                <span>
                    Bem-Estar
                </span>

                <span>
                    Lifestyle
                </span>

                <span>
                    Produtos
                </span>

            </div>

            <button
                class="
                    services-text-button
                "
                data-action="products"
                type="button"
            >

                Explorar Produtos

                <span>
                    →
                </span>

            </button>

        </div>

    </div>

</article>

`;

}

function focusCardAcademy(){

    return `

<article
    class="
        services-focus-card
        evolution
        reveal
    "
>

    <div class="services-focus-top">

        <span>
            FOCO 02
        </span>

        <strong>
            EVOLUÇÃO
        </strong>

    </div>

    <div class="services-focus-body">

        <div class="services-focus-image academy-image">

            <img
                 src="./assets/images/a21.png"
                alt="Academy Twenty One"
                loading="lazy"
            >

            <div
                class="
                    services-focus-image-overlay
                "
            ></div>

            <span>
                ACADEMY 21
            </span>

        </div>

        <div
            class="
                services-focus-copy
            "
        >

            <span class="services-focus-icon">
                21
            </span>

            <h3>
                Educação,
                Desenvolvimento
                e Oportunidade
            </h3>

            <p>

                Uma dimensão construída em conjunto
                com a Academy Twenty One para
                aproximar formação, liderança,
                comunicação, networking,
                empreendedorismo e desenvolvimento.

            </p>

            <div class="services-chip-row">

                <span>
                    Academy 21
                </span>

                <span>
                    Liderança
                </span>

                <span>
                    Educação
                </span>

                <span>
                    Networking
                </span>

            </div>

            <button
                class="
                    services-text-button
                "
                data-action="academy"
                type="button"
            >

                Conhecer Academy 21

                <span>
                    →
                </span>

            </button>

        </div>

    </div>

</article>

`;

}

/* ==========================================================
   WELLNESS EXPERIENCE
   ========================================================== */

function wellness(){

    return `

<section
    class="
        section
        services-wellness
    "
    id="services-wellness"
>

    <div class="container">

        <div class="split services-wellness-split">

            <div
                class="
                    split-content
                    reveal-left
                "
            >

                <span class="label">
                    Experiência em Bem-Estar
                </span>

                <h2 class="section-title">

                    Mais do que distribuir.

                    <span>
                        Apresentamos experiências.
                    </span>

                </h2>

                <p class="lead">

                    A nossa actividade não termina
                    na disponibilização do produto.
                    Criamos momentos para apresentar,
                    explicar e contextualizar as
                    soluções BZZWORLD, permitindo que
                    cada pessoa conheça melhor o universo
                    disponível.

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
                        "Ajudamos a compreender as opções disponíveis para que cada pessoa possa decidir de forma informada."
                    )}

                    ${feature(
                        "03",
                        "Lifestyle",
                        "Integramos os produtos numa visão mais ampla de rotina, experiência e qualidade de vida."
                    )}

                    ${feature(
                        "04",
                        "Acompanhamento",
                        "Mantemos uma relação próxima após a descoberta e aquisição."
                    )}

                </div>

                <button
                    class="
                        btn
                        btn-primary
                    "
                    data-action="products"
                    type="button"
                >

                    Ver Produtos

                </button>

            </div>

            <div
                class="
                    split-image
                    reveal-right
                "
            >

                <div
                    class="
                        services-wellness-showcase
                    "
                >

                    <div
                        class="
                            services-wellness-main
                        "
                    >

                        <img
                            src="./assets/products/angel.png"
                            alt="Angel Moon"
                            loading="lazy"
                        >

                        <span>
                            BEM-ESTAR 
                        </span>

                    </div>

                    <div
                        class="
                            services-product-float
                            float-one
                        "
                    >

                        <img
                            src="./assets/products/zenbru.png"
                            alt="Zenbru"
                            loading="lazy"
                        >

                    </div>

                    <div
                        class="
                            services-product-float
                            float-two
                        "
                    >

                        <img
                            src="./assets/products/ezeno.png"
                            alt="EZENO"
                            loading="lazy"
                        >

                    </div>

                    <div
                        class="
                            services-wellness-caption
                        "
                    >

                        <strong>
                            EXPERIÊNCIA
                        </strong>

                        <span>
                            Produto · Informação · Acompanhamento
                        </span>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

function feature(
    number,
    title,
    text
){

    return `

<div class="services-feature">

    <div
        class="
            services-feature-number
        "
    >
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

/* ==========================================================
   ACADEMY
   ========================================================== */

function academy(){

    return `

<section
    class="
        section
        services-academy
    "
    id="services-academy"
>

    <div class="container">

        <div class="services-academy-panel">

            <div
                class="
                    services-academy-content
                    reveal-left
                "
            >

                <span class="label">
                    Academy Twenty One
                </span>

                <h2 class="section-title">
                
                    <span>
                       Crescimento começa
                    </span>
                    <span>
                        com conhecimento.
                    </span>

                </h2>

                <p class="text-lg">

                    A dimensão Academy da AD Lifestyle
                    aproxima pessoas de conteúdos e
                    experiências de desenvolvimento pessoal
                    e empreendedor, criando espaço para
                    aprender, comunicar, liderar e evoluir.

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
                    class="
                        btn
                        btn-primary
                        mt-4
                    "
                    id="academyButton"
                    type="button"
                >

                    Explorar Academy 21

                </button>

            </div>

            <div
                class="
                    services-academy-visual
                    reveal-right
                "
            >

                <div
                    class="
                        services-academy-orbit
                    "
                ></div>

                <div
                    class="
                        services-academy-logo
                    "
                >

                    <img
                        src="./assets/images/a21.png"
                        alt="Academy Twenty One"
                        loading="lazy"
                    >

                </div>

                <span
                    class="
                        services-academy-line
                        line-one
                    "
                >
                    APRENDER
                </span>

                <span
                    class="
                        services-academy-line
                        line-two
                    "
                >
                    LIDERAR
                </span>

                <span
                    class="
                        services-academy-line
                        line-three
                    "
                >
                    EVOLUIR
                </span>

            </div>

        </div>

    </div>

</section>

`;

}

function academyFeature(
    number,
    title,
    text
){

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
   BRIDGE
   ========================================================== */

function bridge(){

    return `

<section
    class="
        section
        services-bridge
    "
    id="services-bridge"
>

    <div class="container">

        <div
            class="
                section-center
                reveal
            "
        >

            <span class="label">
                The AD Lifestyle Bridge
            </span>

            <h2 class="section-title">

                Onde os dois mundos

                <span>
                    se encontram.
                </span>

            </h2>

            <p class="lead">

                Bem-estar e evolução podem existir
                dentro da mesma experiência.
                A proposta é criar uma ponte entre
                descobrir, aprender, evoluir e conectar.

            </p>

        </div>

        <div
            class="
                services-bridge-flow
                mt-6
            "
        >

            ${bridgeNode(
                "01",
                "Descobrir",
                "Conheça soluções, produtos e novas ideias."
            )}

            <div class="bridge-line"></div>

            ${bridgeNode(
                "02",
                "Aprender",
                "Adquira conhecimento e compreensão."
            )}

            <div class="bridge-line"></div>

            ${bridgeNode(
                "03",
                "Evoluir",
                "Desenvolva competências e perspectivas."
            )}

            <div class="bridge-line"></div>

            ${bridgeNode(
                "04",
                "Conectar",
                "Faça parte de uma rede de pessoas e possibilidades."
            )}

        </div>

    </div>

</section>

`;

}

function bridgeNode(
    number,
    title,
    text
){

    return `

<div
    class="
        bridge-node
        reveal
    "
>

    <span>
        ${number}
    </span>

    <strong>
        ${title}
    </strong>

    <p>
        ${text}
    </p>

</div>

`;

}

/* ==========================================================
   CAMPANHAS
   ========================================================== */

function campaigns(){

    const cards = [

        [
            "01",
            "Campanhas de Produtos",
            "Momentos dedicados à apresentação e demonstração de soluções BZZWORLD."
        ],

        [
            "02",
            "Apresentações",
            "Sessões presenciais e digitais para explicar produtos, conceitos e experiências."
        ],

        [
            "03",
            "Conteúdo Digital",
            "Conteúdo educativo e informativo para redes sociais e canais digitais."
        ],

        [
            "04",
            "Eventos",
            "Encontros que reúnem bem-estar, desenvolvimento, conhecimento e networking."
        ],

        [
            "05",
            "Dupla Oportunidade",
            "Apresentações estruturadas sobre os ecossistemas BZZWORLD e Academy Twenty One."
        ],

        [
            "06",
            "Comunidade",
            "Construção de relações, partilha de experiências e aprendizagem contínua."
        ]

    ];

    return `

<section
    class="
        section
        services-campaigns
    "
    id="services-campaigns"
>

    <div class="container">

        <div
            class="
                section-center
                reveal
            "
        >

            <span class="label">
                Experiências AD Lifestyle
            </span>

            <h2 class="section-title">

                Apresentações,
                campanhas e

                <span>
                    experiências.
                </span>

            </h2>

            <p class="lead">

                Diferentes formatos para levar
                informação, conhecimento e experiências
                directamente às pessoas.

            </p>

        </div>

        <div
            class="
                grid
                grid-3
                mt-6
            "
        >

            ${
                cards
                    .map(
                        ([
                            number,
                            title,
                            text
                        ]) =>
                            campaignCard(
                                number,
                                title,
                                text
                            )
                    )
                    .join("")
            }

        </div>

    </div>

</section>

`;

}

function campaignCard(
    number,
    title,
    text
){

    return `

<article
    class="
        card
        services-campaign-card
        reveal
    "
>

    <span>
        ${number}
    </span>

    <h3>
        ${title}
    </h3>

    <p class="text mt-2">
        ${text}
    </p>

</article>

`;

}

/* ==========================================================
   VISÃO INTERNACIONAL
   ========================================================== */

function international(){

    return `

<section
    class="
        section
        services-international
    "
    id="services-international"
>

    <div class="container">

        <div class="services-global">

            <div
                class="
                    services-global-content
                    reveal-left
                "
            >

                <span class="label">
                    Para além de fronteiras
                </span>

                <h2 class="section-title">

                    Uma organização

                    <span>
                        sem fronteiras.
                    </span>

                </h2>

                <p class="text-lg">

                    A AD Lifestyle trabalha numa lógica
                    de conexão internacional, criando
                    pontes entre pessoas, soluções e
                    redes para além do mercado local.

                </p>

                <div class="services-global-points">

                    ${globalPoint(
                        "Distribuição",
                        "Acesso a produtos para diferentes destinos, de acordo com disponibilidade e condições logísticas."
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

            <div
                class="
                    services-global-visual
                    reveal-right
                "
            >

                <div class="global-orbit">

                    <div
                        class="
                            global-ring
                            ring-one
                        "
                    ></div>

                    <div
                        class="
                            global-ring
                            ring-two
                        "
                    ></div>

                    <span
                        class="
                            global-point
                            p1
                        "
                    >
                        AO
                    </span>

                    <span
                        class="
                            global-point
                            p2
                        "
                    >
                        EU
                    </span>

                    <span
                        class="
                            global-point
                            p3
                        "
                    >
                        INT
                    </span>

                    <div class="global-core">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle"
                        >

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

function globalPoint(
    title,
    text
){

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
   DUPLA OPORTUNIDADE
   ========================================================== */

function opportunity(){

    return `

<section
    class="
        section
        services-opportunity
    "
    id="services-opportunity"
>

    <div class="container">

        <div
            class="
                section-center
                reveal
            "
        >

            <span class="label">
                Dupla Oportunidade
            </span>

            <h2 class="section-title">

                Conhecimento para

                <span>
                    compreender as possibilidades.
                </span>

            </h2>

            <p class="lead">

                As apresentações de dupla oportunidade
                permitem explicar de forma organizada
                os dois universos da actividade:
                produtos e soluções BZZWORLD, juntamente
                com a dimensão de desenvolvimento e
                oportunidades associada à Academy Twenty One.

            </p>

        </div>

        <div
            class="
                services-opportunity-grid
                mt-6
            "
        >

            ${opportunityCard(
                "BZZWORLD",
                "Bem-estar",
                "Conheça o universo de produtos, a proposta de bem-estar e o modelo de distribuição.",
                "./assets/products/alphameta.png"
            )}

            ${opportunityCard(
                "ACADEMY 21",
                "Evolução",
                "Conheça a dimensão de aprendizagem, liderança, desenvolvimento e empreendedorismo.",
                "./assets/images/a21.png"
            )}

        </div>

        <div
            class="
                services-opportunity-note
                reveal
            "
        >

            <span>
                IMPORTANTE
            </span>

            <p>

                Participar numa apresentação permite obter
                informação e compreender melhor o modelo.
                Qualquer decisão de participação, compra
                ou investimento deve ser tomada de forma
                consciente, depois de conhecer as
                condições oficiais.

            </p>

        </div>

    </div>

</section>

`;

}

function opportunityCard(
    brand,
    title,
    text,
    image
){

    return `

<article
    class="
        services-opportunity-card
        reveal
    "
>

    <div
        class="
            services-opportunity-image
        "
    >

        <img
            src="${image}"
            alt="${brand}"
            loading="lazy"
        >

    </div>

    <div class="services-opportunity-content">

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

</article>

`;

}

/* ==========================================================
   PROCESSO
   ========================================================== */

function process(){

    return `

<section
    class="
        section
        services-process
    "
    id="services-process"
>

    <div class="container">

        <div
            class="
                section-center
                reveal
            "
        >

            <span class="label">
                Como funciona
            </span>

            <h2 class="section-title">

                Da descoberta

                <span>
                    à evolução.
                </span>

            </h2>

            <p class="lead">

                Uma experiência construída por etapas,
                desde o primeiro contacto até à ligação
                contínua com a comunidade.

            </p>

        </div>

        <div
            class="
                timeline
                services-process-timeline
                mt-6
            "
        >

            ${step(
                "01",
                "Descoberta",
                "Conhecemos o seu interesse e apresentamos as soluções disponíveis."
            )}

            ${step(
                "02",
                "Apresentação",
                "Explicamos produtos, conceitos, experiências ou possibilidades de aprendizagem."
            )}

            ${step(
                "03",
                "Escolha",
                "Cada pessoa decide de acordo com os seus objectivos e condições."
            )}

            ${step(
                "04",
                "Acompanhamento",
                "Mantemos a ligação para apoiar a utilização, aprendizagem e evolução."
            )}

            ${step(
                "05",
                "Comunidade",
                "A experiência pode continuar através de conteúdos, eventos e networking."
            )}

        </div>

    </div>

</section>

`;

}

function step(
    number,
    title,
    text
){

    return `

<div
    class="
        timeline-item
        services-process-item
        reveal
    "
>

    <div class="timeline-dot">
        ${number}
    </div>

    <div class="timeline-content">

        <span>
            ETAPA ${number}
        </span>

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

    const questions = [

        [
            "O que é exactamente a AD Lifestyle?",
            "A AD Lifestyle é uma organização criada para criar pontes entre pessoas, soluções de bem-estar, produtos BZZWORLD, conhecimento, desenvolvimento pessoal e oportunidades."
        ],

        [
            "Quais são os principais focos da AD Lifestyle?",
            "Os dois grandes focos são o universo Wellness, com produtos e soluções BZZWORLD, e o universo de Evolution, ligado à Academy Twenty One, educação, desenvolvimento pessoal e empreendedorismo."
        ],

        [
            "A AD Lifestyle vende apenas produtos?",
            "Não. A actividade inclui apresentação de produtos, campanhas, conteúdos, eventos, distribuição, experiências de Lifestyle e uma dimensão educacional e empreendedora."
        ],

        [
            "A AD Lifestyle trabalha apenas em Angola?",
            "A organização trabalha com uma visão internacional e procura criar ligações entre pessoas, soluções e redes de diferentes mercados, de acordo com disponibilidade e condições aplicáveis."
        ],

        [
            "O que são as apresentações de dupla oportunidade?",
            "São apresentações estruturadas destinadas a explicar os dois universos da actividade: BZZWORLD e Academy Twenty One, permitindo compreender melhor produtos, educação, comunidade e possibilidades."
        ],

        [
            "A participação numa apresentação garante resultados financeiros?",
            "Não. Uma apresentação fornece informação sobre o modelo e as possibilidades existentes, mas não constitui garantia de rendimento ou sucesso financeiro."
        ],

        [
            "Preciso de comprar um produto para conhecer a Academy 21?",
            "Não necessariamente. Os dois universos podem ser conhecidos de forma independente. O percurso depende do interesse e dos objectivos de cada pessoa."
        ]

    ];

    return `

<section
    class="
        section
        services-faq
    "
    id="services-faq"
>

    <div class="container-sm">

        <div
            class="
                section-center
                reveal
            "
        >

            <span class="label">
                Perguntas Frequentes
            </span>

            <h2 class="section-title">

                Sobre os nossos

                <span>
                    serviços.
                </span>

            </h2>

            <p class="lead">

                Algumas respostas para compreender
                melhor a experiência AD Lifestyle.

            </p>

        </div>

        <div
            class="
                faq
                mt-5
            "
        >

            ${
                questions
                    .map(
                        ([
                            questionText,
                            answer
                        ]) =>
                            question(
                                questionText,
                                answer
                            )
                    )
                    .join("")
            }

        </div>

    </div>

</section>

`;

}

function question(
    q,
    a
){

    return `

<div class="faq-item reveal">

    <button
        class="faq-question"
        type="button"
        aria-expanded="false"
    >

        <span>
            ${q}
        </span>

        <span class="faq-question-icon">
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

<section
    class="
        section
        services-cta
    "
    id="services-cta"
>

    <div class="container">

        <div
            class="
                showcase
                services-final-showcase
                reveal
            "
        >

            <div
                class="
                    services-cta-glow
                "
            ></div>

            <div
                class="
                    services-cta-decoration
                    decoration-one
                "
            ></div>

            <div
                class="
                    services-cta-decoration
                    decoration-two
                "
            ></div>

            <div
                class="
                    showcase-content
                    section-center
                "
            >

                <div
                    class="
                        services-cta-logo
                    "
                >

                    <img
                        src="./assets/logo/logo.png"
                        alt="AD Lifestyle"
                    >

                </div>

                <span class="badge">
                    AD Lifestyle
                </span>

                <h2 class="section-title mt-3">

                    Descubra onde

                    <span>
                        podemos criar uma ponte.
                    </span>

                </h2>

                <p class="lead">

                    Quer conhecer os produtos, participar
                    numa apresentação, saber mais sobre
                    a Academy Twenty One ou simplesmente
                    conversar connosco?

                </p>

                <div
                    class="
                        hero-actions
                        center
                        mt-4
                    "
                >

                    <button
                        class="
                            btn
                            btn-primary
                        "
                        id="servicesWhatsApp"
                        type="button"
                    >

                        Falar no WhatsApp

                    </button>

                    <button
                        class="
                            btn
                            btn-glass
                        "
                        id="servicesContact"
                        type="button"
                    >

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
   INITIALISE
   ========================================================== */

function initialiseServices(){

    const root =
        document.querySelector(
            ".page-services"
        );

    if(!root){

        return;

    }

    /* ------------------------------------------------------
       RIPPLE
       ------------------------------------------------------ */

    try{

        root
            .querySelectorAll(
                `
                    .btn,
                    .services-text-button,
                    .faq-question,
                    .services-focus-card,
                    .services-opportunity-card,
                    .services-campaign-card
                `
            )
            .forEach(
                element => {

                    if(
                        typeof ripple ===
                        "function"
                    ){

                        ripple(
                            element
                        );

                    }

                }
            );

    }catch(error){

        console.warn(
            "AD LIFESTYLE SERVICES: ripple não inicializado.",
            error
        );

    }

    /* ------------------------------------------------------
       STAGGER
       ------------------------------------------------------ */

    try{

        if(
            typeof stagger ===
            "function"
        ){

            stagger(
                root.querySelectorAll(
                    `
                        .services-intro-card,
                        .services-focus-card,
                        .services-campaign-card,
                        .services-opportunity-card,
                        .services-feature,
                        .services-academy-feature,
                        .bridge-node
                    `
                )
            );

        }

    }catch(error){

        console.warn(
            "AD LIFESTYLE SERVICES: stagger não inicializado.",
            error
        );

    }

    /* ------------------------------------------------------
       HERO — EXPLORAR
       ------------------------------------------------------ */

    root
        .querySelector(
            "#exploreServices"
        )
        ?.addEventListener(
            "click",
            ()=>{

                root
                    .querySelector(
                        "#services"
                    )
                    ?.scrollIntoView({

                        behavior:"smooth",

                        block:"start"

                    });

            }
        );

    /* ------------------------------------------------------
       HERO — CONTACTO
       ------------------------------------------------------ */

    root
        .querySelector(
            "#contactServices"
        )
        ?.addEventListener(
            "click",
            ()=>{

                navigate(
                    "/contact"
                );

            }
        );

    /* ------------------------------------------------------
       PRODUCTS
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            '[data-action="products"]'
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    ()=>{

                        navigate(
                            "/products"
                        );

                    }
                );

            }
        );

    /* ------------------------------------------------------
       ACADEMY
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            '[data-action="academy"]'
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    ()=>{

                        navigate(
                            "/events"
                        );

                    }
                );

            }
        );

    root
        .querySelector(
            "#academyButton"
        )
        ?.addEventListener(
            "click",
            ()=>{

                navigate(
                    "/events"
                );

            }
        );

    /* ------------------------------------------------------
       CONTACT PAGE
       ------------------------------------------------------ */

    root
        .querySelector(
            "#servicesContact"
        )
        ?.addEventListener(
            "click",
            ()=>{

                navigate(
                    "/contact"
                );

            }
        );

    /* ------------------------------------------------------
       WHATSAPP
       ------------------------------------------------------ */

    root
        .querySelector(
            "#servicesWhatsApp"
        )
        ?.addEventListener(
            "click",
            ()=>{

                const message =
                    "Olá AD Lifestyle! Gostaria de conhecer melhor os serviços, produtos e oportunidades disponíveis.";

                window.open(

                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        message
                    )}`,

                    "_blank",

                    "noopener,noreferrer"

                );

            }
        );

    /* ------------------------------------------------------
       FAQ
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            ".faq-question"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    ()=>{

                        const item =
                            button.closest(
                                ".faq-item"
                            );

                        if(!item){

                            return;

                        }

                        const wasActive =
                            item.classList.contains(
                                "active"
                            );

                        root
                            .querySelectorAll(
                                ".faq-item"
                            )
                            .forEach(
                                other => {

                                    other.classList.remove(
                                        "active"
                                    );

                                    const otherButton =
                                        other.querySelector(
                                            ".faq-question"
                                        );

                                    otherButton?.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    );

                                }
                            );

                        if(!wasActive){

                            item.classList.add(
                                "active"
                            );

                            button.setAttribute(
                                "aria-expanded",
                                "true"
                            );

                        }

                    }
                );

            }
        );

    /* ------------------------------------------------------
       REVEAL
       ------------------------------------------------------ */

    initialiseServicesReveal(
        root
    );

}

/* ==========================================================
   REVEAL
   ========================================================== */

function initialiseServicesReveal(
    root
){

    const elements =
        root.querySelectorAll(
            `
                .reveal,
                .reveal-left,
                .reveal-right,
                .services-intro-card,
                .services-focus-card,
                .services-campaign-card,
                .services-opportunity-card,
                .services-feature,
                .services-academy-feature,
                .bridge-node
            `
        );

    if(
        !(
            "IntersectionObserver"
            in window
        )
    ){

        elements.forEach(
            element => {

                element.classList.add(
                    "visible",
                    "services-visible"
                );

            }
        );

        return;

    }

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if(
                            !entry.isIntersecting
                        ){

                            return;

                        }

                        entry.target.classList.add(
                            "visible",
                            "services-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },

            {
                threshold:.08,
                rootMargin:
                    "0px 0px -35px"
            }

        );

    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}

/* ==========================================================
   FIM
   ========================================================== */

