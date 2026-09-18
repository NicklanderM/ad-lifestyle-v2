/* ==========================================================
   AD LIFESTYLE V2
   ISMARTS3.JS
   Product Page Master Template
   iSMART S3 — Cobertor + Almofada
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIG
   ========================================================== */

const KIT_IMAGE =
    "./assets/products/ismarts3.png";

const BLANKET_IMAGE =
    "./assets/products/ismarts3-blanket.png";

const PILLOW_IMAGE =
    "./assets/products/ismarts3-pillow.png";

const WHATSAPP_NUMBER =
    "244924964666";


/* ==========================================================
   LOAD
   ========================================================== */

export function loadISmartS3(){

    applyTheme("ismarts3");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-ismarts3"
            data-product-page="ismarts3"
        >

            ${hero()}

            ${kitOverview()}

            ${products()}

            ${sleepQuality()}

            ${circulation()}

            ${jointHealth()}

            ${sleepImpact()}

            ${layerTechnology()}

            ${smartFunctions()}

            ${zeroGravityPillow()}

            ${certifications()}

            ${lifestyleRoutine()}

            ${faq()}

            ${medicalDisclaimer()}

            ${cta()}

        </div>

    `;

    initialiseISmartS3();
}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section class="hero ismarts3-hero">

        <div
            class="ismarts3-hero-atmosphere"
            aria-hidden="true"
        >
            <div class="ismarts3-hero-blob blob-1"></div>
            <div class="ismarts3-hero-blob blob-2"></div>
            <div class="ismarts3-hero-line line-1"></div>
            <div class="ismarts3-hero-line line-2"></div>
        </div>


        <div class="container ismarts3-hero-grid">


            <div class="ismarts3-hero-copy reveal">

                <span class="ismarts3-eyebrow">
                    SMART LIVING · SLEEP SYSTEM
                </span>


                <h1 class="ismarts3-hero-title">

                    Um novo nível de

                    <span>
                        experiência de sono.
                    </span>

                </h1>


                <p class="ismarts3-hero-sub">

                    iSMART S3 reúne um Cobertor Inteligente
                    e uma Almofada Gravidade Zero numa proposta
                    de conforto, tecnologia e descanso.

                </p>


                <div class="ismarts3-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyISmartS3"
                    >
                        Comprar o Kit
                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="learnMore"
                    >
                        Conhecer o sistema
                    </button>

                </div>


                <div class="ismarts3-hero-meta">

                    <span>
                        Cobertor Inteligente
                    </span>

                    <span>
                        +
                    </span>

                    <span>
                        Almofada Gravidade Zero
                    </span>

                </div>

            </div>


            <div class="ismarts3-hero-visual reveal-right">

                <div class="ismarts3-hero-product">

                    <div
                        class="ismarts3-hero-glow"
                        aria-hidden="true"
                    ></div>

                    <div
                        class="ismarts3-product-ring"
                        aria-hidden="true"
                    ></div>

                    <div
                        class="ismarts3-product-orbit"
                        aria-hidden="true"
                    ></div>

                    <img
                        src="${KIT_IMAGE}"
                        alt="Kit iSMART S3"
                        loading="eager"
                    />

                    <div class="ismarts3-hero-caption">

                        <strong>
                            iSMART S3
                        </strong>

                        <span>
                            SLEEP SYSTEM
                        </span>

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   KIT OVERVIEW
   ========================================================== */

function kitOverview(){

    return `

    <section
        id="ismarts3-kit"
        class="section ismarts3-kit-section"
    >

        <div class="container">


            <div class="section-center reveal">

                <span class="label">
                    iSMART S3 SYSTEM
                </span>


                <h2 class="section-title">

                    Duas peças.

                    <span>
                        Uma experiência.
                    </span>

                </h2>


                <p class="lead">

                    O sistema combina um Cobertor Inteligente
                    e uma Almofada Gravidade Zero. O conjunto
                    pode ser explorado como kit ou individualmente.

                </p>

            </div>


            <div class="ismarts3-kit-grid mt-6">


                <article class="ismarts3-kit-card reveal">

                    <span class="ismarts3-card-number">
                        01
                    </span>

                    <span class="ismarts3-mini-label">
                        PRODUTO PRINCIPAL
                    </span>


                    <h3>

                        Cobertor Inteligente

                        <span>
                            iSMART S3
                        </span>

                    </h3>


                    <p>

                        Uma proposta orientada para conforto,
                        frescura, tecnologia e experiência de descanso.

                    </p>


                    <div class="ismarts3-tag-row">

                        <span>
                            Conforto
                        </span>

                        <span>
                            Frescura
                        </span>

                        <span>
                            Tecnologia
                        </span>

                    </div>


                    <button
                        type="button"
                        class="ismarts3-anchor-btn"
                        data-scroll="#product-blanket"
                    >
                        Conhecer o cobertor →
                    </button>

                </article>


                <div class="ismarts3-kit-plus">
                    +
                </div>


                <article
                    class="ismarts3-kit-card kit-card-pillow reveal delay-1"
                >

                    <span class="ismarts3-card-number">
                        02
                    </span>

                    <span class="ismarts3-mini-label">
                        PRODUTO COMPLEMENTAR
                    </span>


                    <h3>

                        Almofada

                        <span>
                            Gravidade Zero
                        </span>

                    </h3>


                    <p>

                        Uma solução apresentada para acompanhar
                        a zona cervical em diferentes posições.

                    </p>


                    <div class="ismarts3-tag-row">

                        <span>
                            Ergonomia
                        </span>

                        <span>
                            Dupla face
                        </span>

                        <span>
                            Conforto
                        </span>

                    </div>


                    <button
                        type="button"
                        class="ismarts3-anchor-btn"
                        data-scroll="#product-pillow"
                    >
                        Conhecer a almofada →
                    </button>

                </article>

            </div>


            <div class="ismarts3-kit-note reveal">

                <div class="ismarts3-note-icon">
                    ✓
                </div>

                <div>

                    <strong>
                        Kit completo ou compra individual
                    </strong>

                    <p>
                        O cobertor e a almofada podem ser
                        apresentados e adquiridos separadamente.
                    </p>

                </div>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   PRODUCTS
   ========================================================== */

function products(){

    return `

    <section
        class="section-sm ismarts3-products-section"
    >

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    COMPONENTES
                </span>


                <h2 class="section-title">

                    Conheça cada

                    <span>
                        elemento do sistema.
                    </span>

                </h2>


                <p class="lead">

                    Informação organizada para explorar cada
                    produto sem tornar a página excessivamente densa.

                </p>

            </div>


            <div class="ismarts3-product-showcase mt-6">


                <!-- ==================================================
                     BLANKET
                     ================================================== -->

                <article
                    id="product-blanket"
                    class="ismarts3-single-product reveal"
                >

                    <div class="ismarts3-single-image">

                        <div class="ismarts3-product-image-frame">

                            <div
                                class="ismarts3-image-glow"
                                aria-hidden="true"
                            ></div>

                            <img
                                src="${BLANKET_IMAGE}"
                                alt="Cobertor Inteligente iSMART S3"
                                loading="lazy"
                            />

                            <span class="ismarts3-image-badge">
                                COBERTOR
                            </span>

                        </div>

                    </div>


                    <div class="ismarts3-single-content">

                        <span class="ismarts3-product-label">
                            PRODUTO 01 · iSMART S3
                        </span>


                        <h3>

                            Cobertor Inteligente

                            <span>
                                iSMART S3
                            </span>

                        </h3>


                        <p>

                            Cobertor apresentado dentro do conceito
                            iSMART S3 para uma experiência de descanso
                            associada a conforto, frescura, regulação
                            térmica e tecnologias funcionais.

                        </p>


                        <div class="ismarts3-feature-list">

                            ${productFeature(
                                "❄",
                                "Regulação térmica",
                                "Tecnologia apresentada em associação com a experiência de temperatura e conforto."
                            )}

                            ${productFeature(
                                "◌",
                                "Conforto e frescura",
                                "Conceção orientada para uma experiência confortável durante o descanso."
                            )}

                            <div
                                class="ismarts3-more-panel"
                                data-more-panel="blanket-features"
                                id="blanket-features-content"
                            >

                                ${productFeature(
                                    "⌁",
                                    "Leve e transportável",
                                    "O material fornecido indica aproximadamente 8 kg para o conjunto com mala."
                                )}

                                ${productFeature(
                                    "↻",
                                    "Auto-limpeza",
                                    "O produto é apresentado com sistema de auto-limpeza incorporado."
                                )}

                            </div>

                        </div>


                        <button
                            type="button"
                            class="ismarts3-more-toggle"
                            data-more-toggle="blanket-features"
                            aria-expanded="false"
                            aria-controls="blanket-features-content"
                        >

                            <span>
                                Ver mais características
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div class="ismarts3-product-action">

                            <button
                                type="button"
                                class="btn btn-primary"
                                data-buy="cobertor"
                            >
                                Adquirir Cobertor
                            </button>

                        </div>

                    </div>

                </article>


                <!-- ==================================================
                     PILLOW
                     ================================================== -->

                <article
                    id="product-pillow"
                    class="ismarts3-single-product reverse reveal"
                >

                    <div class="ismarts3-single-image">

                        <div class="ismarts3-product-image-frame pillow-frame">

                            <div
                                class="ismarts3-image-glow"
                                aria-hidden="true"
                            ></div>

                            <img
                                src="${PILLOW_IMAGE}"
                                alt="Almofada iSMART S3 Gravidade Zero"
                                loading="lazy"
                            />

                            <span class="ismarts3-image-badge">
                                ALMOFADA
                            </span>

                        </div>

                    </div>


                    <div class="ismarts3-single-content">

                        <span class="ismarts3-product-label">
                            PRODUTO 02 · iSMART S3
                        </span>


                        <h3>

                            Almofada iSMART S3

                            <span>
                                Gravidade Zero
                            </span>

                        </h3>


                        <p>

                            Almofada apresentada dentro do conceito
                            Gravidade Zero, com design pensado para
                            acompanhar a zona cervical e diferentes
                            posições de utilização.

                        </p>


                        <div class="ismarts3-feature-list">

                            ${productFeature(
                                "◈",
                                "Gravidade Zero",
                                "Conceção orientada para uma sensação de suporte e adaptação."
                            )}

                            ${productFeature(
                                "↔",
                                "Dupla face",
                                "Design com duas faces para diferentes experiências de utilização."
                            )}

                            <div
                                class="ismarts3-more-panel"
                                data-more-panel="pillow-features"
                                id="pillow-features-content"
                            >

                                ${productFeature(
                                    "⌁",
                                    "Estrutura estável",
                                    "O material promocional apresenta a almofada como não deformável."
                                )}

                                ${productFeature(
                                    "◎",
                                    "Zona cervical",
                                    "Conceção destinada a acompanhar a região do pescoço."
                                )}

                            </div>

                        </div>


                        <button
                            type="button"
                            class="ismarts3-more-toggle"
                            data-more-toggle="pillow-features"
                            aria-expanded="false"
                            aria-controls="pillow-features-content"
                        >

                            <span>
                                Ver mais características
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div class="ismarts3-product-action">

                            <button
                                type="button"
                                class="btn btn-primary"
                                data-buy="almofada"
                            >
                                Adquirir Almofada
                            </button>

                        </div>

                    </div>

                </article>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   PRODUCT FEATURE
   ========================================================== */

function productFeature(icon,title,text){

    return `

    <div class="ismarts3-product-feature">

        <div class="ismarts3-feature-icon">
            ${icon}
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
   SLEEP QUALITY
   ========================================================== */

function sleepQuality(){

    return `

    <section class="section ismarts3-dark-section">

        <div class="container">


            <div class="section-center reveal">

                <span class="label ismarts3-label-light">
                    21 ACADEMY
                </span>


                <h2 class="section-title">

                    Como reconhecer

                    <span>
                        um bom sono?
                    </span>

                </h2>


                <p class="lead">

                    A apresentação educativa fornecida utiliza
                    alguns sinais para distinguir uma experiência
                    de sono de melhor ou pior qualidade.

                </p>

            </div>


            <div class="ismarts3-sleep-grid mt-6">


                <article class="ismarts3-sleep-card good reveal">

                    <div class="ismarts3-card-top">

                        <span class="ismarts3-card-symbol">
                            ✓
                        </span>

                        <span>
                            BOA EXPERIÊNCIA
                        </span>

                    </div>


                    <h3>
                        Sono de qualidade
                    </h3>


                    <div class="ismarts3-sleep-list">

                        ${checkItem("Sono rápido")}
                        ${checkItem("Sono ininterrupto")}
                        ${checkItem("Sono reparador")}

                    </div>

                </article>


                <article class="ismarts3-sleep-card attention reveal">

                    <div class="ismarts3-card-top">

                        <span class="ismarts3-card-symbol">
                            !
                        </span>

                        <span>
                            ATENÇÃO
                        </span>

                    </div>


                    <h3>
                        Má qualidade de sono
                    </h3>


                    <div class="ismarts3-sleep-list">

                        ${checkItem("Insónia")}
                        ${checkItem("Transpiração abundante")}
                        ${checkItem("Má qualidade de sono")}

                    </div>

                </article>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   CIRCULATION
   ========================================================== */

function circulation(){

    return `

    <section class="section ismarts3-light-section">

        <div class="container">

            <div class="split ismarts3-split">


                <div class="split-image reveal-left">

                    <div class="ismarts3-visual-card">

                        <div class="ismarts3-visual-orbit"></div>

                        <div class="ismarts3-visual-symbol">
                            ◌
                        </div>

                        <span>
                            CIRCULAÇÃO
                        </span>

                    </div>

                </div>


                <div class="split-content reveal-right">

                    <span class="label">
                        21 ACADEMY
                    </span>


                    <h2 class="section-title">

                        A importância da

                        <span>
                            circulação
                        </span>

                    </h2>


                    <p class="lead">

                        O material educativo fornecido enquadra a
                        circulação como parte importante do equilíbrio
                        fisiológico, incluindo fornecimento de oxigénio
                        e nutrientes e remoção de resíduos.

                    </p>


                    <div class="ismarts3-info-stack">

                        ${infoLine(
                            "01",
                            "Fornecimento de oxigénio",
                            "O material aborda a importância de um fornecimento adequado de oxigénio."
                        )}

                        ${infoLine(
                            "02",
                            "Fornecimento de nutrientes",
                            "Nutrientes e circulação são apresentados como elementos relacionados."
                        )}


                        <div
                            class="ismarts3-more-panel"
                            data-more-panel="circulation-details"
                            id="circulation-details-content"
                        >

                            ${infoLine(
                                "03",
                                "Insuficiência",
                                "O conteúdo chama atenção para situações de fornecimento insuficiente."
                            )}

                            ${infoLine(
                                "04",
                                "Evacuação de resíduos",
                                "A circulação também é apresentada em relação à remoção de resíduos."
                            )}

                        </div>


                        <button
                            type="button"
                            class="ismarts3-more-toggle light"
                            data-more-toggle="circulation-details"
                            aria-expanded="false"
                            aria-controls="circulation-details-content"
                        >

                            <span>
                                Ver mais
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   JOINT HEALTH
   ========================================================== */

function jointHealth(){

    return `

    <section class="section ismarts3-joint-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    21 ACADEMY
                </span>


                <h2 class="section-title">

                    Conforto,

                    <span>
                        mobilidade e descanso
                    </span>

                </h2>


                <p class="lead">

                    O material fornecido também aborda a relação
                    entre descanso, mobilidade e desconfortos
                    associados ao sistema músculo-esquelético.

                </p>

            </div>


            <div class="ismarts3-joint-grid mt-6">

                ${jointCard(
                    "01",
                    "Flexibilidade",
                    "Má flexibilidade é apresentada como um dos factores associados às dificuldades articulares."
                )}

                ${jointCard(
                    "02",
                    "Desconforto",
                    "O material menciona dores e desconfortos como parte das queixas associadas às articulações."
                )}

                ${jointCard(
                    "03",
                    "Ossos e coluna",
                    "São referidas condições relacionadas com ossos e coluna vertebral."
                )}

            </div>

        </div>

    </section>

    `;
}


function jointCard(number,title,text){

    return `

    <article class="ismarts3-joint-card reveal">

        <span>
            ${number}
        </span>

        <h3>
            ${title}
        </h3>

        <p>
            ${text}
        </p>

    </article>

    `;
}


/* ==========================================================
   SLEEP IMPACT
   ========================================================== */

function sleepImpact(){

    return `

    <section class="section ismarts3-impact-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    21 ACADEMY
                </span>


                <h2 class="section-title">

                    O sono influencia

                    <span>
                        várias dimensões do bem-estar.
                    </span>

                </h2>


                <p class="lead">

                    A apresentação educativa fornecida relaciona
                    a qualidade do sono com diferentes dimensões
                    do bem-estar e da saúde.

                </p>

            </div>


            <div class="ismarts3-impact-grid mt-6">

                ${impactCard(
                    "01",
                    "Stress e ansiedade"
                )}

                ${impactCard(
                    "02",
                    "Saúde metabólica"
                )}

                ${impactCard(
                    "03",
                    "Saúde neurológica"
                )}

                ${impactCard(
                    "04",
                    "Peso e metabolismo"
                )}


                <div
                    class="ismarts3-more-panel impact-panel"
                    data-more-panel="impact-details"
                    id="impact-details-content"
                >

                    ${impactCard(
                        "05",
                        "Distúrbios hormonais"
                    )}

                    ${impactCard(
                        "06",
                        "Envelhecimento"
                    )}

                    ${impactCard(
                        "07",
                        "Resistência física"
                    )}

                </div>


                <button
                    type="button"
                    class="ismarts3-more-toggle wide"
                    data-more-toggle="impact-details"
                    aria-expanded="false"
                    aria-controls="impact-details-content"
                >

                    <span>
                        Ver mais áreas
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>

            </div>

        </div>

    </section>

    `;
}


function impactCard(number,text){

    return `

    <article class="ismarts3-impact-card">

        <span>
            ${number}
        </span>

        <strong>
            ${text}
        </strong>

    </article>

    `;
}


/* ==========================================================
   LAYERS
   ========================================================== */

function layerTechnology(){

    return `

    <section class="section ismarts3-layers-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label ismarts3-label-light">
                    iSMART S3 · TECNOLOGIA
                </span>


                <h2 class="section-title">

                    Conceção de

                    <span>
                        várias camadas.
                    </span>

                </h2>


                <p class="lead">

                    A arquitectura do produto é apresentada
                    através de diferentes camadas funcionais.

                </p>

            </div>


            <div class="ismarts3-layers mt-6">

                ${layer(
                    "01",
                    "Camada de arrefecimento",
                    "Seda de gelo",
                    "Associada ao conceito de frescura e regulação térmica."
                )}

                ${layer(
                    "02",
                    "Camada de protecção",
                    "Protecção contra o ar",
                    "Estrutura apresentada como elemento adicional de protecção."
                )}

                ${layer(
                    "03",
                    "Camada biomagnética",
                    "Biomagnetismo",
                    "Camada associada à tecnologia biomagnética indicada no material."
                )}


                <div
                    class="ismarts3-more-panel layers-panel"
                    data-more-panel="layer-details"
                    id="layer-details-content"
                >

                    ${layer(
                        "04",
                        "Camada protectora",
                        "Protecção",
                        "Estrutura intermédia destinada a complementar a composição."
                    )}

                    ${layer(
                        "05",
                        "Camada de enchimento",
                        "Infravermelho longínquo",
                        "O material promocional associa esta camada à tecnologia de infravermelho distante."
                    )}

                    ${layer(
                        "06",
                        "Camada de isolamento",
                        "Antiderrapante",
                        "Camada final apresentada com função de isolamento e estabilidade."
                    )}

                </div>


                <button
                    type="button"
                    class="ismarts3-more-toggle wide"
                    data-more-toggle="layer-details"
                    aria-expanded="false"
                    aria-controls="layer-details-content"
                >

                    <span>
                        Ver todas as camadas
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>

            </div>

        </div>

    </section>

    `;
}


function layer(number,title,tech,text){

    return `

    <article class="ismarts3-layer reveal">

        <div class="ismarts3-layer-number">
            ${number}
        </div>

        <div class="ismarts3-layer-body">

            <span>
                ${tech}
            </span>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

        </div>

    </article>

    `;
}


/* ==========================================================
   SMART FUNCTIONS
   ========================================================== */

function smartFunctions(){

    return `

    <section class="section ismarts3-functions-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    iSMART S3 · DESTAQUES
                </span>


                <h2 class="section-title">

                    Funções e

                    <span>
                        características.
                    </span>

                </h2>

            </div>


            <div class="ismarts3-function-highlight reveal">

                <div class="ismarts3-function-main">

                    <strong>
                        &gt; 4.000
                    </strong>

                    <span>
                        iões / cm³
                    </span>

                </div>


                <div class="ismarts3-function-copy">

                    <span>
                        DESTAQUE DO MATERIAL PROMOCIONAL
                    </span>

                    <p>

                        O conteúdo fornecido associa o sistema à emissão
                        de mais de 4.000 iões por cm³ e apresenta outras
                        funções relacionadas com a experiência de sono.

                    </p>

                </div>

            </div>


            <div class="ismarts3-function-grid mt-5">

                ${functionCard(
                    "01",
                    "Sono profundo",
                    "Favorece uma experiência associada ao descanso profundo."
                )}

                ${functionCard(
                    "02",
                    "pH sanguíneo",
                    "O material promocional associa o sistema à regulação do pH sanguíneo."
                )}

                ${functionCard(
                    "03",
                    "Ligação ao oxigénio",
                    "É apresentada uma associação com a capacidade de ligação ao oxigénio."
                )}

                ${functionCard(
                    "04",
                    "Iões negativos",
                    "A tecnologia é apresentada em associação com iões negativos."
                )}

            </div>

        </div>

    </section>

    `;
}


function functionCard(number,title,text){

    return `

    <article class="ismarts3-function-card reveal">

        <span>
            ${number}
        </span>

        <h3>
            ${title}
        </h3>

        <p>
            ${text}
        </p>

    </article>

    `;
}


/* ==========================================================
   PILLOW FEATURE
   ========================================================== */

function zeroGravityPillow(){

    return `

    <section class="section ismarts3-pillow-section">

        <div class="container">

            <div class="ismarts3-pillow-grid">


                <div class="ismarts3-pillow-content reveal-left">

                    <span class="label">
                        iSMART S3
                    </span>


                    <h2 class="section-title">

                        Almofada

                        <span>
                            Gravidade Zero.
                        </span>

                    </h2>


                    <p class="lead">

                        Uma almofada apresentada para acompanhar
                        a zona do pescoço e diferentes posições
                        de utilização.

                    </p>


                    <div class="ismarts3-pillow-points">

                        ${checkItem(
                            "Design de dupla face"
                        )}

                        ${checkItem(
                            "Estrutura apresentada como não deformável"
                        )}


                        <div
                            class="ismarts3-more-panel"
                            data-more-panel="pillow-points"
                            id="pillow-points-content"
                        >

                            ${checkItem(
                                "Conceção em gravidade zero"
                            )}

                            ${checkItem(
                                "Pode ser comercializada separadamente"
                            )}

                        </div>


                        <button
                            type="button"
                            class="ismarts3-more-toggle light"
                            data-more-toggle="pillow-points"
                            aria-expanded="false"
                            aria-controls="pillow-points-content"
                        >

                            <span>
                                Ver mais características
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>

                    </div>


                    <button
                        type="button"
                        class="btn btn-primary"
                        data-buy="almofada"
                    >
                        Quero a Almofada
                    </button>

                </div>


                <div class="ismarts3-pillow-visual reveal-right">

                    <div class="ismarts3-pillow-image-frame">

                        <div
                            class="ismarts3-pillow-glow"
                            aria-hidden="true"
                        ></div>

                        <img
                            src="${PILLOW_IMAGE}"
                            alt="Almofada iSMART S3 Gravidade Zero"
                            loading="lazy"
                        />

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   CERTIFICATIONS
   ========================================================== */

function certifications(){

    const items = [

        "Teste antibacteriano",
        "Teste antiácaros",
        "Teste antiodor",
        "Teste de segurança de corantes AZO",
        "Teste sem formaldeído",
        "Teste sem radiação",
        "Teste funcional — aniões",
        "Refresco instantâneo ao contacto",
        "Teste de sensação"

    ];


    return `

    <section class="section ismarts3-certifications-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    QUALIDADE
                </span>


                <h2 class="section-title">

                    Testes e

                    <span>
                        documentação.
                    </span>

                </h2>


                <p class="lead">

                    A lista abaixo corresponde às referências
                    apresentadas no material promocional fornecido.

                </p>

            </div>


            <div class="ismarts3-cert-grid mt-6">

                ${items.slice(0,3).map(
                    (item,index)=>certCard(
                        index + 1,
                        item
                    )
                ).join("")}


                <div
                    class="ismarts3-more-panel cert-panel"
                    data-more-panel="cert-details"
                    id="cert-details-content"
                >

                    ${items.slice(3).map(
                        (item,index)=>certCard(
                            index + 4,
                            item
                        )
                    ).join("")}

                </div>


                <button
                    type="button"
                    class="ismarts3-more-toggle wide"
                    data-more-toggle="cert-details"
                    aria-expanded="false"
                    aria-controls="cert-details-content"
                >

                    <span>
                        Ver todos os testes
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>

            </div>


            <div class="ismarts3-cert-note reveal">

                <strong>
                    Certificações internacionais
                </strong>

                <p>

                    O material fornecido apresenta referências
                    a certificações internacionais. A validade,
                    entidade certificadora, âmbito e documentos
                    específicos devem ser confirmados antes de
                    qualquer publicação como garantia.

                </p>

            </div>

        </div>

    </section>

    `;
}


function certCard(number,text){

    return `

    <article class="ismarts3-cert-card reveal">

        <span>
            ${String(number).padStart(2,"0")}
        </span>

        <div class="ismarts3-cert-check">
            ✓
        </div>

        <strong>
            ${text}
        </strong>

    </article>

    `;
}


/* ==========================================================
   ROUTINE
   ========================================================== */

function lifestyleRoutine(){

    return `

    <section class="section-sm ismarts3-routine-section">

        <div class="container-sm">

            <div class="section-center reveal">

                <span class="label">
                    SMART LIFESTYLE
                </span>


                <h2 class="section-title">

                    Uma experiência

                    <span>
                        integrada no quotidiano.
                    </span>

                </h2>

            </div>


            <div class="ismarts3-timeline mt-6">

                ${step(
                    "01",
                    "Conhecer",
                    "Conheça o cobertor e a almofada e perceba como o sistema está estruturado."
                )}

                ${step(
                    "02",
                    "Escolher",
                    "Opte pelo kit completo ou pelo produto que melhor corresponde à sua necessidade."
                )}


                <div
                    class="ismarts3-more-panel"
                    data-more-panel="routine-details"
                    id="routine-details-content"
                >

                    ${step(
                        "03",
                        "Utilizar",
                        "Utilize os produtos de acordo com as instruções e recomendações oficiais."
                    )}

                    ${step(
                        "04",
                        "Integrar",
                        "Integre o sistema numa rotina de descanso confortável e equilibrada."
                    )}

                </div>


                <button
                    type="button"
                    class="ismarts3-more-toggle light"
                    data-more-toggle="routine-details"
                    aria-expanded="false"
                    aria-controls="routine-details-content"
                >

                    <span>
                        Ver mais passos
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>

            </div>

        </div>

    </section>

    `;
}


function step(number,title,text){

    return `

    <article class="ismarts3-timeline-item reveal">

        <div class="ismarts3-timeline-number">
            ${number}
        </div>

        <div>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

        </div>

    </article>

    `;
}


/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

    const questions = [

        [
            "O que é o iSMART S3?",
            "O iSMART S3 é apresentado como um sistema de sono constituído por um Cobertor Inteligente e uma Almofada Gravidade Zero."
        ],

        [
            "O iSMART S3 é um único produto?",
            "Não. Nesta apresentação, o iSMART S3 é composto por dois elementos que podem funcionar como kit."
        ],

        [
            "Posso comprar apenas o cobertor?",
            "Sim. O material fornecido apresenta o cobertor como produto que pode ser adquirido separadamente."
        ],

        [
            "Posso comprar apenas a almofada?",
            "Sim. A Almofada Gravidade Zero também é apresentada como produto que pode ser adquirido separadamente."
        ],

        [
            "Qual é o peso indicado?",
            "O material fornecido indica aproximadamente 8 kg para o conjunto com mala."
        ],

        [
            "O cobertor pode ser lavado com água?",
            "Segundo a informação fornecida, o produto é apresentado com sistema de auto-limpeza e não como um artigo a lavar com água. As instruções oficiais devem prevalecer."
        ],

        [
            "Quem pode utilizar o produto?",
            "O material promocional menciona diferentes grupos etários. A adequação individual deve seguir as instruções oficiais e, quando necessário, orientação profissional."
        ],

        [
            "O iSMART S3 substitui cuidados médicos?",
            "Não. A página não apresenta o produto como substituto de diagnóstico, tratamento médico, medicamentos ou acompanhamento profissional."
        ]

    ];


    return `

    <section
        class="section-sm ismarts3-faq-section"
        id="ismarts3-faq"
    >

        <div class="container-sm">

            <div class="section-center reveal">

                <span class="label">
                    PERGUNTAS FREQUENTES
                </span>


                <h2 class="section-title">

                    Dúvidas sobre o

                    <span>
                        iSMART S3.
                    </span>

                </h2>


                <p class="lead">

                    Abra cada pergunta para consultar
                    a resposta correspondente.

                </p>

            </div>


            <div class="ismarts3-faq-list">

                ${questions.slice(0,4).map(
                    (item,index)=>faqItem(
                        index + 1,
                        item[0],
                        item[1]
                    )
                ).join("")}


                <div
                    class="ismarts3-more-panel faq-more-panel"
                    data-more-panel="faq-details"
                    id="faq-details-content"
                >

                    ${questions.slice(4).map(
                        (item,index)=>faqItem(
                            index + 5,
                            item[0],
                            item[1]
                        )
                    ).join("")}

                </div>

            </div>


            <button
                type="button"
                class="ismarts3-more-toggle faq-toggle"
                data-more-toggle="faq-details"
                aria-expanded="false"
                aria-controls="faq-details-content"
            >

                <span>
                    Ver mais perguntas
                </span>

                <i aria-hidden="true">
                    +
                </i>

            </button>

        </div>

    </section>

    `;
}


function faqItem(number,questionText,answerText){

    const answerId =
        `ismarts3-answer-${number}`;


    return `

    <article class="ismarts3-faq-item">

        <button
            type="button"
            class="ismarts3-faq-question"
            aria-expanded="false"
            aria-controls="${answerId}"
        >

            <span class="ismarts3-faq-number">
                ${String(number).padStart(2,"0")}
            </span>

            <span class="ismarts3-faq-text">
                ${questionText}
            </span>

            <span
                class="ismarts3-faq-icon"
                aria-hidden="true"
            >
                +
            </span>

        </button>


        <div
            class="ismarts3-faq-answer"
            id="${answerId}"
            role="region"
            aria-hidden="true"
        >

            <p>
                ${answerText}
            </p>

        </div>

    </article>

    `;
}


/* ==========================================================
   DISCLAIMER
   ========================================================== */

function medicalDisclaimer(){

    return `

    <section class="ismarts3-disclaimer">

        <div class="container">

            <div class="ismarts3-disclaimer-box reveal">

                <div class="ismarts3-disclaimer-icon">
                    i
                </div>

                <div>

                    <strong>
                        Comunicação responsável
                    </strong>

                    <p>

                        Alguns benefícios, efeitos e características
                        referidos nesta página foram organizados a partir
                        do material promocional fornecido. Alegações
                        terapêuticas, científicas ou sanitárias devem ser
                        confirmadas através de documentação oficial antes
                        de serem utilizadas como garantias.

                    </p>

                </div>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   CTA
   ========================================================== */

function cta(){

    return `

    <section class="section ismarts3-cta-section">

        <div class="container">

            <div class="ismarts3-cta-box reveal">

                <span>
                    iSMART S3
                </span>


                <h2>

                    Transforme o descanso

                    <em>
                        numa experiência.
                    </em>

                </h2>


                <p>

                    Explore o kit completo ou escolha
                    individualmente o Cobertor Inteligente
                    ou a Almofada Gravidade Zero.

                </p>


                <div class="ismarts3-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="ismarts3Whats"
                    >
                        Falar no WhatsApp
                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="backHome"
                    >
                        Voltar ao início
                    </button>

                </div>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   CHECK ITEM
   ========================================================== */

function checkItem(text){

    return `

    <div class="ismarts3-check-item">

        <span>
            ✓
        </span>

        <strong>
            ${text}
        </strong>

    </div>

    `;
}


/* ==========================================================
   INFO LINE
   ========================================================== */

function infoLine(number,title,text){

    return `

    <div class="ismarts3-info-line">

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

function initialiseISmartS3(){

    const root =
        document.querySelector(
            ".page-ismarts3"
        );

    if(!root){
        return;
    }


    /* ======================================================
       ANIMATIONS
       ====================================================== */

    stagger(
        ".page-ismarts3 .reveal"
    );


    /* ======================================================
       RIPPLE
       ====================================================== */

    root
        .querySelectorAll(".btn")
        .forEach(button=>{

            ripple(button);

        });


    /* ======================================================
       INTERNAL SCROLL
       ====================================================== */

    root
        .querySelectorAll("[data-scroll]")
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const selector =
                        button.getAttribute(
                            "data-scroll"
                        );

                    const target =
                        root.querySelector(
                            selector
                        );

                    target?.scrollIntoView({
                        behavior:"smooth",
                        block:"start"
                    });

                }
            );

        });


    /* ======================================================
       HERO DISCOVER
       ====================================================== */

    root
        .querySelector("#learnMore")
        ?.addEventListener(
            "click",
            ()=>{

                root
                    .querySelector("#ismarts3-kit")
                    ?.scrollIntoView({
                        behavior:"smooth",
                        block:"start"
                    });

            }
        );


    /* ======================================================
       HOME
       ====================================================== */

    root
        .querySelector("#backHome")
        ?.addEventListener(
            "click",
            ()=>{

                navigate("/");

            }
        );


    /* ======================================================
       WHATSAPP
       ====================================================== */

    root
        .querySelector("#buyISmartS3")
        ?.addEventListener(
            "click",
            ()=>{

                openWhats(
                    "Olá AD Lifestyle! Gostaria de adquirir o Kit iSMART S3."
                );

            }
        );


    root
        .querySelector("#ismarts3Whats")
        ?.addEventListener(
            "click",
            ()=>{

                openWhats(
                    "Olá AD Lifestyle! Gostaria de saber mais sobre o Kit iSMART S3."
                );

            }
        );


    /* ======================================================
       INDIVIDUAL BUY
       ====================================================== */

    root
        .querySelectorAll("[data-buy]")
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const product =
                        button.getAttribute(
                            "data-buy"
                        );

                    const messages = {

                        cobertor:
                            "Olá AD Lifestyle! Gostaria de adquirir o Cobertor Inteligente iSMART S3.",

                        almofada:
                            "Olá AD Lifestyle! Gostaria de adquirir a Almofada iSMART S3 Gravidade Zero."

                    };

                    openWhats(
                        messages[product] ||
                        "Olá AD Lifestyle! Gostaria de saber mais sobre o iSMART S3."
                    );

                }
            );

        });


    /* ======================================================
       PROGRESSIVE DISCLOSURE
       ====================================================== */

    root
        .querySelectorAll(
            "[data-more-toggle]"
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const targetName =
                        button.getAttribute(
                            "data-more-toggle"
                        );

                    const panel =
                        root.querySelector(
                            `[data-more-panel="${targetName}"]`
                        );

                    if(!panel){
                        return;
                    }


                    const isOpen =
                        panel.classList.toggle(
                            "is-open"
                        );


                    button.classList.toggle(
                        "is-open",
                        isOpen
                    );


                    button.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );


                    const label =
                        button.querySelector(
                            "span"
                        );


                    const faqToggle =
                        button.classList.contains(
                            "faq-toggle"
                        );


                    if(label){

                        label.textContent =
                            isOpen
                                ? (
                                    faqToggle
                                        ? "Ocultar perguntas"
                                        : "Ver menos"
                                )
                                : (
                                    faqToggle
                                        ? "Ver mais perguntas"
                                        : getMoreLabel(
                                            targetName
                                        )
                                );

                    }


                    if(isOpen){

                        panel
                            .querySelectorAll(
                                ".reveal"
                            )
                            .forEach(element=>{

                                element.classList.add(
                                    "is-visible"
                                );

                            });

                    }

                }
            );

        });


    /* ======================================================
       FAQ ACCORDION
       ====================================================== */

    root
        .querySelectorAll(
            ".ismarts3-faq-question"
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const item =
                        button.closest(
                            ".ismarts3-faq-item"
                        );

                    if(!item){
                        return;
                    }


                    const answer =
                        item.querySelector(
                            ".ismarts3-faq-answer"
                        );

                    if(!answer){
                        return;
                    }


                    const wasOpen =
                        item.classList.contains(
                            "active"
                        );


                    root
                        .querySelectorAll(
                            ".ismarts3-faq-item.active"
                        )
                        .forEach(other=>{

                            if(other !== item){

                                closeFaq(
                                    other
                                );

                            }

                        });


                    if(wasOpen){

                        closeFaq(item);

                        return;

                    }


                    item.classList.add(
                        "active"
                    );


                    button.setAttribute(
                        "aria-expanded",
                        "true"
                    );


                    answer.setAttribute(
                        "aria-hidden",
                        "false"
                    );


                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                }
            );

        });


    /* ======================================================
       RESIZE
       ====================================================== */

    window.addEventListener(
        "resize",
        ()=>{

            root
                .querySelectorAll(
                    ".ismarts3-faq-item.active .ismarts3-faq-answer"
                )
                .forEach(answer=>{

                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                });

        },
        {
            passive:true
        }
    );

}


/* ==========================================================
   FAQ CLOSE
   ========================================================== */

function closeFaq(item){

    const button =
        item.querySelector(
            ".ismarts3-faq-question"
        );

    const answer =
        item.querySelector(
            ".ismarts3-faq-answer"
        );

    if(!button || !answer){
        return;
    }


    item.classList.remove(
        "active"
    );


    button.setAttribute(
        "aria-expanded",
        "false"
    );


    answer.setAttribute(
        "aria-hidden",
        "true"
    );


    answer.style.maxHeight =
        "0px";

}


/* ==========================================================
   MORE LABEL
   ========================================================== */

function getMoreLabel(target){

    const labels = {

        "blanket-features":
            "Ver mais características",

        "pillow-features":
            "Ver mais características",

        "circulation-details":
            "Ver mais",

        "impact-details":
            "Ver mais áreas",

        "layer-details":
            "Ver todas as camadas",

        "pillow-points":
            "Ver mais características",

        "cert-details":
            "Ver todos os testes",

        "routine-details":
            "Ver mais passos",

        "faq-details":
            "Ver mais perguntas"

    };

    return (
        labels[target] ||
        "Ver mais"
    );

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhats(message){

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
