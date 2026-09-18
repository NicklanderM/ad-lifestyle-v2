/* ==========================================================
   AD LIFESTYLE V2
   iSMART S3 — PREMIUM PRODUCT PAGE
   Cobertor Inteligente + Almofada Gravidade Zero
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

const KIT_IMAGE = "./assets/products/ismarts3.png";
const BLANKET_IMAGE = "./assets/products/ismarts3-blanket.png";
const PILLOW_IMAGE = "./assets/products/ismarts3-pillow.png";
const WHATSAPP_NUMBER = "244924964666";

export function loadISmartS3(){
    applyTheme("ismarts3");

    const app = document.getElementById("app");
    if(!app) return;

    app.innerHTML = `
        <div class="page-ismarts3" data-product-page="ismarts3">
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
            <div class="ismarts3-scroll-progress" aria-hidden="true">
                <span></span>
            </div>
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

        <div class="ismarts3-hero-noise" aria-hidden="true"></div>

        <div class="ismarts3-aurora" aria-hidden="true">
            <div class="ismarts3-blob ismarts3-blob-1"></div>
            <div class="ismarts3-blob ismarts3-blob-2"></div>
            <div class="ismarts3-blob ismarts3-blob-3"></div>
        </div>

        <div class="ismarts3-hero-grid container">

            <div class="ismarts3-hero-copy reveal">

                <span class="ismarts3-hero-kicker">
                    iSMART S3 · SMART LAB LIVING
                </span>

                <h1 class="ismarts3-hero-title">
                    A EXPERIÊNCIA
                    <span>DO SONO REPARADOR</span>
                </h1>

                <p class="ismarts3-hero-sub">
                    Um sistema de descanso apresentado através de tecnologia térmica,
                    camadas funcionais e uma proposta de Smart Living.
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
                        Descobrir o sistema
                    </button>

                </div>

                <div class="ismarts3-hero-signature">

                    <span>01</span>

                    <div>
                        <strong>Cobertor + Almofada</strong>
                        <small>um sistema, duas peças</small>
                    </div>

                </div>

            </div>

            <div class="ismarts3-hero-visual reveal-right">

                <div class="ismarts3-hero-frame">

                    <div
                        class="ismarts3-hero-orbit orbit-a"
                        aria-hidden="true">
                    </div>

                    <div
                        class="ismarts3-hero-orbit orbit-b"
                        aria-hidden="true">
                    </div>

                    <div
                        class="ismarts3-hero-glow"
                        aria-hidden="true">
                    </div>

                    <img
                        class="ismarts3-hero-product-image floating parallax"
                        data-speed="18"
                        src="${KIT_IMAGE}"
                        alt="Kit iSMART S3"
                        loading="eager"
                        decoding="async"
                    >

                    <span class="ismarts3-hero-caption">
                        S3 / SMART SLEEP SYSTEM
                    </span>

                </div>

            </div>

        </div>

        <div class="ismarts3-hero-bottom" aria-hidden="true">

            <span>CONFORTO</span>
            <i></i>
            <span>FRESCURA</span>
            <i></i>
            <span>DESCANSO</span>

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

            <div class="ismarts3-section-head reveal">

                <span class="ismarts3-eyebrow">
                    01 · O SISTEMA
                </span>

                <h2 class="section-title">
                    Duas peças.<br>
                    <span>Uma experiência de sono.</span>
                </h2>

                <p class="lead">
                    O iSMART S3 é apresentado como um conjunto formado por um
                    cobertor inteligente e uma almofada de gravidade zero.
                    Ambos podem ser utilizados em conjunto ou separadamente.
                </p>

            </div>

            <div
                class="ismarts3-system-line"
                aria-hidden="true">
            </div>

            <div class="ismarts3-kit-grid">

                ${kitCard(
                    "01",
                    "Produto principal",
                    "Cobertor Inteligente",
                    "iSMART S3",
                    "Regulação térmica, conforto e tecnologia dentro da proposta Smart Living.",
                    [
                        "Temperatura",
                        "Conforto",
                        "Tecnologia"
                    ],
                    "#product-blanket"
                )}

                <div
                    class="ismarts3-kit-plus"
                    aria-hidden="true">
                    +
                </div>

                ${kitCard(
                    "02",
                    "Produto complementar",
                    "Almofada",
                    "Gravidade Zero",
                    "Design de dupla face, apresentado para acompanhar a zona cervical e diferentes posições de utilização.",
                    [
                        "Dupla face",
                        "Ergonomia",
                        "Pescoço"
                    ],
                    "#product-pillow"
                )}

            </div>

            <div class="ismarts3-note reveal">

                <span class="ismarts3-note-mark">
                    ✓
                </span>

                <div>

                    <strong>
                        Kit completo ou compra individual
                    </strong>

                    <p>
                        O cobertor e a almofada podem ser apresentados e adquiridos separadamente.
                    </p>

                </div>

            </div>

        </div>

    </section>
    `;
}

function kitCard(
    number,
    eyebrow,
    title,
    highlight,
    text,
    tags,
    target
){

    return `
    <article class="ismarts3-kit-card reveal">

        <div class="ismarts3-card-number">
            ${number}
        </div>

        <span class="ismarts3-mini-label">
            ${eyebrow}
        </span>

        <h3>
            ${title}
            <span>${highlight}</span>
        </h3>

        <p>
            ${text}
        </p>

        <div class="ismarts3-tag-row">

            ${tags.map(tag=>`
                <span>${tag}</span>
            `).join("")}

        </div>

        <button
            type="button"
            class="ismarts3-anchor-btn"
            data-scroll="${target}"
        >
            Conhecer
            ${number === "01" ? "o cobertor" : "a almofada"}

            <span aria-hidden="true">
                ↗
            </span>

        </button>

    </article>
    `;
}

/* ==========================================================
   PRODUCTS
   ========================================================== */

function products(){

    return `
    <section class="section-sm ismarts3-products-section">

        <div class="container">

            <div class="ismarts3-section-head reveal">

                <span class="ismarts3-eyebrow">
                    02 · PRODUTOS
                </span>

                <h2 class="section-title">
                    Conheça
                    <span>as duas peças.</span>
                </h2>

                <p class="lead">
                    Uma apresentação visual mais limpa, com os detalhes essenciais
                    primeiro e o restante por abertura.
                </p>

            </div>

            <div class="ismarts3-product-showcase">

                ${singleProduct({

                    id:"product-blanket",

                    number:"01",

                    label:"PRODUTO PRINCIPAL",

                    title:"Cobertor Inteligente",

                    accent:"iSMART S3",

                    description:
                        "Um cobertor inteligente apresentado como solução de nova geração para uma experiência de sono mais confortável, fresca e integrada no conceito Smart Living.",

                    image:BLANKET_IMAGE,

                    alt:"Cobertor Inteligente iSMART S3",

                    theme:"blanket",

                    visible:[
                        [
                            "❄",
                            "Regulação térmica",
                            "Tecnologia de sono com proposta de regulação da temperatura."
                        ],
                        [
                            "◌",
                            "Conforto e frescura",
                            "Conceção orientada para uma experiência confortável durante o descanso."
                        ]
                    ],

                    hidden:[
                        [
                            "⌁",
                            "Leve e transportável",
                            "Peso total indicado no material: aproximadamente 8 kg, incluindo a mala."
                        ],
                        [
                            "↻",
                            "Auto-limpeza",
                            "O produto é apresentado com sistema de auto-limpeza incorporado."
                        ]
                    ],

                    buy:"cobertor",

                    buyLabel:"Adquirir cobertor"

                })}

                ${singleProduct({

                    id:"product-pillow",

                    number:"02",

                    label:"PRODUTO COMPLEMENTAR",

                    title:"Almofada iSMART S3",

                    accent:"Gravidade Zero",

                    description:
                        "Uma almofada apresentada dentro do conceito “Gravidade Zero”, com design pensado para acompanhar a zona do pescoço independentemente da posição.",

                    image:PILLOW_IMAGE,

                    alt:"Almofada iSMART S3 Gravidade Zero",

                    theme:"pillow",

                    reverse:true,

                    visible:[
                        [
                            "◈",
                            "Gravidade Zero",
                            "Conceção orientada para uma sensação de suporte e adaptação."
                        ],
                        [
                            "↔",
                            "Dupla face",
                            "Design de duas faces para diferentes experiências de utilização."
                        ]
                    ],

                    hidden:[
                        [
                            "⌁",
                            "Estrutura estável",
                            "O material promocional apresenta a almofada como não deformável."
                        ],
                        [
                            "◎",
                            "Zona cervical",
                            "Conceção destinada a acompanhar a região do pescoço."
                        ]
                    ],

                    buy:"almofada",

                    buyLabel:"Adquirir almofada"

                })}

            </div>

        </div>

    </section>
    `;
}

function singleProduct({

    id,
    number,
    label,
    title,
    accent,
    description,
    image,
    alt,
    theme,
    reverse=false,
    visible,
    hidden,
    buy,
    buyLabel

}){

    const panelId = `${id}-more`;

    return `
    <article
        id="${id}"
        class="
            ismarts3-single-product
            ${reverse ? "is-reverse" : ""}
            ${theme}
            reveal
        "
    >

        <div class="ismarts3-product-media">

            <div
                class="ismarts3-product-halo"
                aria-hidden="true">
            </div>

            <div class="ismarts3-image-stage">

                <img
                    src="${image}"
                    alt="${alt}"
                    class="ismarts3-product-image"
                    loading="lazy"
                    decoding="async"
                    data-product-image
                >

                <div
                    class="ismarts3-image-fallback"
                    hidden
                >

                    <span>
                        ${number}
                    </span>

                    <strong>
                        Imagem do produto
                    </strong>

                    <small>
                        ${image}
                    </small>

                </div>

            </div>

            <div class="ismarts3-media-label">
                iSMART S3 / ${number}
            </div>

        </div>

        <div class="ismarts3-product-copy">

            <span class="ismarts3-product-label">
                ${label}
            </span>

            <h3>
                ${title}
                <span>${accent}</span>
            </h3>

            <p class="ismarts3-product-intro">
                ${description}
            </p>

            <div class="ismarts3-feature-list">

                ${visible.map(
                    ([icon,name,text]) =>
                        productFeature(icon,name,text)
                ).join("")}

                <div
                    class="ismarts3-more-panel"
                    data-more-panel="${id}"
                    id="${panelId}"
                >

                    ${hidden.map(
                        ([icon,name,text]) =>
                            productFeature(icon,name,text)
                    ).join("")}

                </div>

                <button
                    type="button"
                    class="ismarts3-more-toggle"
                    data-more-toggle="${id}"
                    aria-expanded="false"
                    aria-controls="${panelId}"
                >
                    <span>
                        Ver mais
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>
                </button>

            </div>

            <div class="ismarts3-product-footer">

                <button
                    type="button"
                    class="btn btn-primary"
                    data-buy="${buy}"
                >
                    ${buyLabel}
                </button>

                <span>
                    ${number} / 02
                </span>

            </div>

        </div>

    </article>
    `;
}

function productFeature(icon,title,text){

    return `
    <div class="ismarts3-product-feature">

        <div
            class="ismarts3-feature-icon"
            aria-hidden="true"
        >
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

            <div
                class="
                    ismarts3-section-head
                    ismarts3-head-dark
                    reveal
                "
            >

                <span class="ismarts3-eyebrow">
                    03 · QUALIDADE DO SONO
                </span>

                <h2 class="section-title">
                    Como determinar
                    <span>um bom sono?</span>
                </h2>

            </div>

            <div class="ismarts3-sleep-grid">

                <article class="ismarts3-sleep-card good reveal">

                    <span class="ismarts3-status">
                        01 · Boa qualidade
                    </span>

                    <h3>
                        Sono de qualidade
                    </h3>

                    <div class="ismarts3-check-list">

                        ${checkItem("Sono rápido")}

                        ${checkItem("Sono ininterrupto")}

                        ${checkItem("Sono reparador")}

                    </div>

                </article>

                <article class="ismarts3-sleep-card attention reveal">

                    <span class="ismarts3-status">
                        02 · Atenção
                    </span>

                    <h3>
                        Má qualidade de sono
                    </h3>

                    <div class="ismarts3-check-list">

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

    const panelId =
        "circulation-details-content";

    return `
    <section class="section ismarts3-light-section">

        <div class="container">

            <div class="ismarts3-split">

                <div class="ismarts3-editorial-visual reveal-left">

                    <div class="ismarts3-orbital-icon">
                        ◌
                    </div>

                    <span>
                        CIRCULAÇÃO
                    </span>

                    <small>
                        21 ACADEMY · iSMART S3
                    </small>

                </div>

                <div class="ismarts3-split-copy reveal-right">

                    <span class="ismarts3-eyebrow">
                        04 · CONTEXTO EDUCATIVO
                    </span>

                    <h2 class="section-title">
                        A má circulação
                        <span>sanguínea</span>
                    </h2>

                    <p class="lead">
                        O material educativo fornecido enquadra a circulação como parte importante do equilíbrio fisiológico,
                        destacando o fornecimento de oxigénio e nutrientes e a evacuação dos resíduos.
                    </p>

                    <div class="ismarts3-info-stack">

                        ${infoLine(
                            "01",
                            "Alimentação em oxigénio",
                            "O material aborda a importância do fornecimento adequado de oxigénio."
                        )}

                        ${infoLine(
                            "02",
                            "Fornecimento de nutrientes",
                            "Nutrientes e circulação são apresentados como elementos relacionados."
                        )}

                        <div
                            class="ismarts3-more-panel"
                            data-more-panel="circulation-details"
                            id="${panelId}"
                        >

                            ${infoLine(
                                "03",
                                "Insuficiência",
                                "O conteúdo chama atenção para situações de fornecimento insuficiente."
                            )}

                            ${infoLine(
                                "04",
                                "Evacuação dos resíduos",
                                "A circulação também é apresentada em relação à remoção de resíduos."
                            )}

                        </div>

                    </div>

                    <button
                        type="button"
                        class="ismarts3-more-toggle light"
                        data-more-toggle="circulation-details"
                        aria-expanded="false"
                        aria-controls="${panelId}"
                    >
                        <span>
                            Ver mais contexto
                        </span>

                        <i aria-hidden="true">
                            +
                        </i>
                    </button>

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

            <div class="ismarts3-section-head reveal">

                <span class="ismarts3-eyebrow">
                    05 · MOBILIDADE
                </span>

                <h2 class="section-title">
                    As doenças
                    <span>articulares</span>
                </h2>

                <p class="lead">
                    O conteúdo fornecido também aborda a relação entre descanso,
                    mobilidade e desconfortos associados ao sistema músculo-esquelético.
                </p>

            </div>

            <div class="ismarts3-joint-grid">

                ${jointCard(
                    "01",
                    "Flexibilidade",
                    "Má flexibilidade é apresentada como um dos factores associados às dificuldades articulares."
                )}

                ${jointCard(
                    "02",
                    "Dores",
                    "O material menciona dores como parte das queixas associadas às articulações."
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

    const panelId =
        "impact-details-content";

    return `
    <section class="section ismarts3-impact-section">

        <div class="container">

            <div class="ismarts3-section-head reveal">

                <span class="ismarts3-eyebrow">
                    06 · IMPACTO
                </span>

                <h2 class="section-title">
                    Os distúrbios do sono
                    <span>afectam a sua saúde</span>
                </h2>

                <p class="lead">
                    A apresentação educativa fornecida relaciona uma má qualidade
                    do sono com várias dimensões do bem-estar e da saúde.
                </p>

            </div>

            <div class="ismarts3-impact-grid">

                ${impactCard(
                    "01",
                    "Stress, ansiedade e depressão"
                )}

                ${impactCard(
                    "02",
                    "Doenças crónicas e metabólicas"
                )}

                ${impactCard(
                    "03",
                    "Doenças neurodegenerativas"
                )}

                ${impactCard(
                    "04",
                    "Obesidade e resistência à insulina"
                )}

                <div
                    class="
                        ismarts3-more-panel
                        impact-panel
                    "
                    data-more-panel="impact-details"
                    id="${panelId}"
                >

                    ${impactCard(
                        "05",
                        "Distúrbios hormonais"
                    )}

                    ${impactCard(
                        "06",
                        "Envelhecimento prematuro"
                    )}

                    ${impactCard(
                        "07",
                        "Baixa resistência e distúrbios da sexualidade"
                    )}

                </div>

            </div>

            <button
                type="button"
                class="
                    ismarts3-more-toggle
                    light
                    centered
                "
                data-more-toggle="impact-details"
                aria-expanded="false"
                aria-controls="${panelId}"
            >
                <span>
                    Ver mais áreas
                </span>

                <i aria-hidden="true">
                    +
                </i>
            </button>

        </div>

    </section>
    `;
}

function impactCard(number,text){

    return `
    <article class="ismarts3-impact-card reveal">

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

    const panelId =
        "layer-details-content";

    return `
    <section class="section ismarts3-layers-section">

        <div class="container">

            <div
                class="
                    ismarts3-section-head
                    ismarts3-head-dark
                    reveal
                "
            >

                <span class="ismarts3-eyebrow">
                    07 · TECNOLOGIA
                </span>

                <h2 class="section-title">
                    Conceção de
                    <span>várias camadas</span>
                </h2>

                <p class="lead">
                    A arquitectura do produto é apresentada através de diferentes
                    camadas funcionais, cada uma associada a uma característica específica.
                </p>

            </div>

            <div class="ismarts3-layers-grid">

                ${layer(
                    "01",
                    "Camada de arrefecimento",
                    "Seda de gelo",
                    "Camada associada ao conceito de frescura e regulação térmica."
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
                    class="
                        ismarts3-more-panel
                        layers-panel
                    "
                    data-more-panel="layer-details"
                    id="${panelId}"
                >

                    ${layer(
                        "04",
                        "Camada protectora",
                        "Protecção",
                        "Estrutura intermédia destinada a complementar a composição do produto."
                    )}

                    ${layer(
                        "05",
                        "Camada de enchimento",
                        "Infravermelho longínquo",
                        "Material promocional associa esta camada à tecnologia de infravermelho distante."
                    )}

                    ${layer(
                        "06",
                        "Camada de isolamento",
                        "Antiderrapante",
                        "Camada final apresentada com função de isolamento e estabilidade."
                    )}

                </div>

            </div>

            <button
                type="button"
                class="ismarts3-more-toggle centered"
                data-more-toggle="layer-details"
                aria-expanded="false"
                aria-controls="${panelId}"
            >
                <span>
                    Ver todas as camadas
                </span>

                <i aria-hidden="true">
                    +
                </i>
            </button>

        </div>

    </section>
    `;
}

function layer(number,title,tech,text){

    return `
    <article class="ismarts3-layer-card reveal">

        <span class="ismarts3-layer-number">
            ${number}
        </span>

        <div>

            <small>
                ${tech}
            </small>

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

            <div class="ismarts3-section-head reveal">

                <span class="ismarts3-eyebrow">
                    08 · FUNÇÕES
                </span>

                <h2 class="section-title">
                    As funções
                    <span>do iSMART S3</span>
                </h2>

            </div>

            <div class="ismarts3-function-feature reveal">

                <div class="ismarts3-function-number">
                    &gt; 4.000
                </div>

                <div>

                    <span>
                        DESTAQUE DO MATERIAL PROMOCIONAL
                    </span>

                    <p>
                        O conteúdo fornecido associa o sistema à emissão de mais de
                        4.000 iões por cm³ e apresenta outras funções relacionadas
                        com a experiência de sono.
                    </p>

                </div>

            </div>

            <div class="ismarts3-function-grid">

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
   ZERO GRAVITY PILLOW
   ========================================================== */

function zeroGravityPillow(){

    const panelId =
        "pillow-points-content";

    return `
    <section class="section ismarts3-pillow-section">

        <div class="container">

            <div class="ismarts3-pillow-layout">

                <div class="ismarts3-pillow-copy reveal-left">

                    <span class="ismarts3-eyebrow">
                        09 · ALMOFADA
                    </span>

                    <h2 class="section-title">
                        Almofada
                        <span>Gravidade Zero</span>
                    </h2>

                    <p class="lead">
                        Ajusta-se ao pescoço independentemente da posição,
                        segundo a proposta apresentada para o produto.
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
                            id="${panelId}"
                        >

                            ${checkItem(
                                "Conceção em gravidade zero"
                            )}

                            ${checkItem(
                                "Pode ser comercializada separadamente"
                            )}

                        </div>

                    </div>

                    <button
                        type="button"
                        class="ismarts3-more-toggle light"
                        data-more-toggle="pillow-points"
                        aria-expanded="false"
                        aria-controls="${panelId}"
                    >
                        <span>
                            Ver mais características
                        </span>

                        <i aria-hidden="true">
                            +
                        </i>
                    </button>

                    <div class="ismarts3-inline-action">

                        <button
                            type="button"
                            class="btn btn-primary"
                            data-buy="almofada"
                        >
                            Quero a almofada
                        </button>

                    </div>

                </div>

                <div class="ismarts3-pillow-media reveal-right">

                    <div class="ismarts3-pillow-frame">

                        <img
                            src="${PILLOW_IMAGE}"
                            alt="Almofada iSMART S3 Gravidade Zero"
                            class="ismarts3-pillow-image"
                            loading="lazy"
                            decoding="async"
                            data-product-image
                        >

                        <div
                            class="ismarts3-image-fallback"
                            hidden
                        >

                            <span>
                                02
                            </span>

                            <strong>
                                Imagem da almofada
                            </strong>

                            <small>
                                ${PILLOW_IMAGE}
                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
    `;
}

/* ==========================================================
   CERTIFICATIONS / IMAGE SLOTS
   ========================================================== */

function certifications(){

    const certs = [

        [
            "01",
            "Teste / certificação",
            "./assets/certifications/ismarts3-cert-01.png"
        ],

        [
            "02",
            "Teste / certificação",
            "./assets/certifications/ismarts3-cert-02.png"
        ],

        [
            "03",
            "Teste / certificação",
            "./assets/certifications/ismarts3-cert-03.png"
        ],

        [
            "04",
            "Teste / certificação",
            "./assets/certifications/ismarts3-cert-04.png"
        ]

    ];

    return `
    <section class="section ismarts3-certifications-section">

        <div class="container">

            <div class="ismarts3-section-head reveal">

                <span class="ismarts3-eyebrow">
                    10 · DOCUMENTAÇÃO
                </span>

                <h2 class="section-title">
                    Certificações
                    <span>e testes</span>
                </h2>

                <p class="lead">
                    Espaços preparados para receber imagens dos documentos e selos correspondentes.
                    Os nomes específicos devem ser preenchidos apenas após confirmação documental.
                </p>

            </div>

            <div class="ismarts3-cert-grid">

                ${certs.map(
                    ([number,title,path]) =>
                        certCard(number,title,path)
                ).join("")}

            </div>

            <div class="ismarts3-cert-info reveal">

                <span class="ismarts3-cert-info-mark">
                    DOC
                </span>

                <div>

                    <strong>
                        Área preparada para prova visual
                    </strong>

                    <p>
                        Substitua os quatro ficheiros pelos certificados,
                        relatórios ou selos oficiais correspondentes antes da publicação.
                    </p>

                </div>

            </div>

        </div>

    </section>
    `;
}

function certCard(number,title,path){

    return `
    <article class="ismarts3-cert-card reveal">

        <div class="ismarts3-cert-image-slot">

            <img
                src="${path}"
                alt="Espaço para imagem da certificação ${number}"
                loading="lazy"
                decoding="async"
                data-cert-image
            >

            <div class="ismarts3-cert-placeholder">

                <span>
                    ${number}
                </span>

                <strong>
                    Adicionar imagem
                </strong>

                <small>
                    ${path}
                </small>

            </div>

        </div>

        <div class="ismarts3-cert-meta">

            <span>
                ${number}
            </span>

            <strong>
                ${title}
            </strong>

            <small>
                Documento oficial
            </small>

        </div>

    </article>
    `;
}

/* ==========================================================
   ROUTINE
   ========================================================== */

function lifestyleRoutine(){

    const panelId =
        "routine-details-content";

    return `
    <section class="section-sm ismarts3-routine-section">

        <div class="container-sm">

            <div class="ismarts3-section-head reveal">

                <span class="ismarts3-eyebrow">
                    11 · ROTINA
                </span>

                <h2 class="section-title">
                    Uma experiência
                    <span>integrada no quotidiano</span>
                </h2>

            </div>

            <div class="ismarts3-timeline">

                ${step(
                    "1",
                    "Conhecer",
                    "Conheça o cobertor e a almofada e perceba como o kit está estruturado."
                )}

                ${step(
                    "2",
                    "Escolher",
                    "Opte pelo kit completo ou adquira individualmente o cobertor ou a almofada."
                )}

                <div
                    class="ismarts3-more-panel"
                    data-more-panel="routine-details"
                    id="${panelId}"
                >

                    ${step(
                        "3",
                        "Utilizar",
                        "Utilize os produtos de acordo com as instruções e recomendações oficiais."
                    )}

                    ${step(
                        "4",
                        "Integrar",
                        "Integre o sistema numa rotina de descanso confortável e equilibrada."
                    )}

                </div>

            </div>

            <button
                type="button"
                class="ismarts3-more-toggle light centered"
                data-more-toggle="routine-details"
                aria-expanded="false"
                aria-controls="${panelId}"
            >
                <span>
                    Ver mais passos
                </span>

                <i aria-hidden="true">
                    +
                </i>
            </button>

        </div>

    </section>
    `;
}

function step(number,title,text){

    return `
    <article class="ismarts3-timeline-item reveal">

        <div class="ismarts3-timeline-index">
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
            "01",
            "O que é o iSMART S3?",
            "O iSMART S3 é apresentado como um sistema de sono da linha Smart Lab Living, constituído por um cobertor inteligente e uma almofada Gravidade Zero."
        ],

        [
            "02",
            "O iSMART S3 é um único produto?",
            "Não. Nesta página o iSMART S3 é apresentado como um kit com dois produtos: o Cobertor Inteligente iSMART S3 e a Almofada iSMART S3."
        ],

        [
            "03",
            "Posso comprar apenas o cobertor?",
            "Sim. O cobertor pode ser apresentado e adquirido separadamente."
        ],

        [
            "04",
            "Posso comprar apenas a almofada?",
            "Sim. A Almofada iSMART S3 Gravidade Zero também pode ser comercializada e adquirida separadamente."
        ],

        [
            "05",
            "Qual é o peso do kit?",
            "O material fornecido indica um peso total de aproximadamente 8 kg, incluindo a mala."
        ],

        [
            "06",
            "O cobertor pode ser lavado com água?",
            "Segundo as informações fornecidas, o produto possui um sistema de auto-limpeza incorporado e não é lavado com água. A utilização deve seguir as instruções oficiais."
        ],

        [
            "07",
            "Para quem é apresentado o produto?",
            "O material promocional menciona crianças, grávidas, adultos e idosos. A adequação individual deve seguir as instruções oficiais e, quando necessário, orientação profissional."
        ],

        [
            "08",
            "O iSMART S3 substitui tratamentos médicos?",
            "Não. O produto não deve ser apresentado como substituto de diagnóstico, tratamento médico, medicamentos ou acompanhamento profissional."
        ]

    ];

    return `
    <section class="section-sm ismarts3-faq-section">

        <div class="container-sm">

            <div class="ismarts3-section-head reveal">

                <span class="ismarts3-eyebrow">
                    12 · PERGUNTAS
                </span>

                <h2 class="section-title">
                    Dúvidas sobre
                    <span>o iSMART S3</span>
                </h2>

                <p class="lead">
                    Uma leitura simples e funcional. Ao abrir uma pergunta,
                    a anterior fecha automaticamente.
                </p>

            </div>

            <div
                class="ismarts3-faq"
                data-faq-root
            >

                ${questions.map(
                    ([number,q,a]) =>
                        question(q,a,number)
                ).join("")}

            </div>

        </div>

    </section>
    `;
}

function question(q,a,number){

    const id =
        `ismarts3-faq-${number}`;

    return `
    <article class="ismarts3-faq-item">

        <button
            type="button"
            class="ismarts3-faq-question"
            aria-expanded="false"
            aria-controls="${id}-answer"
        >

            <span class="ismarts3-faq-number">
                ${number}
            </span>

            <span class="ismarts3-faq-question-text">
                ${q}
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
            id="${id}-answer"
            role="region"
        >

            <div class="ismarts3-faq-answer-inner">

                <p>
                    ${a}
                </p>

            </div>

        </div>

    </article>
    `;
}

/* ==========================================================
   TRUST / HEALTH NOTICE
   ========================================================== */

function medicalDisclaimer(){

    return `
    <section class="ismarts3-trust-section">

        <div class="container">

            <div class="ismarts3-trust-box reveal">

                <div class="ismarts3-trust-mark">
                    !
                </div>

                <div>

                    <span class="ismarts3-eyebrow">
                        NOTA IMPORTANTE
                    </span>

                    <strong>
                        Utilize apenas alegações e certificações
                        documentalmente comprovadas.
                    </strong>

                    <p>
                        Alguns benefícios e efeitos mencionados nesta página
                        foram fornecidos pela informação promocional do produto.
                        Estes conteúdos não constituem, por si só, garantia clínica
                        nem substituem aconselhamento, diagnóstico ou tratamento médico.
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

            <div class="ismarts3-cta-shell reveal">

                <span class="ismarts3-cta-label">
                    iSMART S3 · SMART LIVING
                </span>

                <h2>
                    Transforme o descanso numa experiência
                    <span>mais sofisticada.</span>
                </h2>

                <p>
                    Explore o sistema completo, adquira o kit ou escolha
                    individualmente o Cobertor Inteligente ou a Almofada
                    Gravidade Zero.
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
   HELPERS
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

    if(!root) return;

    /* --------------------------------------------------------
       BASE ANIMATIONS
       -------------------------------------------------------- */

    stagger(
        ".page-ismarts3 .card"
    );

    stagger(
        ".page-ismarts3 .ismarts3-cert-card"
    );

    /* --------------------------------------------------------
       RIPPLE
       -------------------------------------------------------- */

    root
        .querySelectorAll(".btn")
        .forEach(
            button => ripple(button)
        );

    /* --------------------------------------------------------
       INTERNAL ANCHORS
       -------------------------------------------------------- */

    root
        .querySelectorAll("[data-scroll]")
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const target =
                        button.getAttribute(
                            "data-scroll"
                        );

                    root
                        .querySelector(target)
                        ?.scrollIntoView({
                            behavior:"smooth",
                            block:"start"
                        });

                }
            );

        });

    /* --------------------------------------------------------
       HERO DISCOVER
       -------------------------------------------------------- */

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

    /* --------------------------------------------------------
       HOME
       -------------------------------------------------------- */

    root
        .querySelector("#backHome")
        ?.addEventListener(
            "click",
            ()=>navigate("/")
        );

    /* --------------------------------------------------------
       BUY KIT
       -------------------------------------------------------- */

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

    /* --------------------------------------------------------
       CTA
       -------------------------------------------------------- */

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

    /* --------------------------------------------------------
       INDIVIDUAL BUY
       -------------------------------------------------------- */

    root
        .querySelectorAll("[data-buy]")
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const type =
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
                        messages[type] ||
                        "Olá AD Lifestyle! Gostaria de saber mais sobre o iSMART S3."
                    );

                }
            );

        });

    /* --------------------------------------------------------
       PROGRESSIVE DISCLOSURE
       -------------------------------------------------------- */

    root
        .querySelectorAll(
            "[data-more-toggle]"
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const key =
                        button.getAttribute(
                            "data-more-toggle"
                        );

                    const panel =
                        root.querySelector(
                            `[data-more-panel="${key}"]`
                        );

                    if(!panel) return;

                    const open =
                        panel.classList.toggle(
                            "is-open"
                        );

                    button.classList.toggle(
                        "is-open",
                        open
                    );

                    button.setAttribute(
                        "aria-expanded",
                        String(open)
                    );

                    const label =
                        button.querySelector(
                            "span"
                        );

                    if(label){

                        label.textContent =
                            open
                                ? "Ver menos"
                                : getMoreLabel(button);

                    }

                    if(open){

                        panel
                            .querySelectorAll(".reveal")
                            .forEach(item=>{
                                item.classList.add(
                                    "is-visible"
                                );
                            });

                        requestAnimationFrame(
                            ()=>{
                                panel.style.maxHeight =
                                    `${panel.scrollHeight}px`;
                            }
                        );

                    }else{

                        panel.style.maxHeight =
                            `${panel.scrollHeight}px`;

                        requestAnimationFrame(
                            ()=>{
                                panel.style.maxHeight =
                                    "0px";
                            }
                        );

                    }

                }
            );

        });

    /* --------------------------------------------------------
       FAQ ACCORDION
       Apenas uma pergunta aberta de cada vez.
       -------------------------------------------------------- */

    const faqItems = [
        ...root.querySelectorAll(
            ".ismarts3-faq-item"
        )
    ];

    const closeFaq = item=>{

        const questionButton =
            item.querySelector(
                ".ismarts3-faq-question"
            );

        const answer =
            item.querySelector(
                ".ismarts3-faq-answer"
            );

        const icon =
            item.querySelector(
                ".ismarts3-faq-icon"
            );

        if(
            !questionButton ||
            !answer
        ) return;

        item.classList.remove(
            "is-open"
        );

        questionButton.setAttribute(
            "aria-expanded",
            "false"
        );

        answer.style.maxHeight =
            "0px";

        if(icon){
            icon.textContent =
                "+";
        }
    };

    const openFaq = item=>{

        const questionButton =
            item.querySelector(
                ".ismarts3-faq-question"
            );

        const answer =
            item.querySelector(
                ".ismarts3-faq-answer"
            );

        const icon =
            item.querySelector(
                ".ismarts3-faq-icon"
            );

        if(
            !questionButton ||
            !answer
        ) return;

        item.classList.add(
            "is-open"
        );

        questionButton.setAttribute(
            "aria-expanded",
            "true"
        );

        answer.style.maxHeight =
            `${answer.scrollHeight}px`;

        if(icon){
            icon.textContent =
                "−";
        }
    };

    faqItems.forEach(item=>{

        item
            .querySelector(
                ".ismarts3-faq-question"
            )
            ?.addEventListener(
                "click",
                ()=>{

                    const alreadyOpen =
                        item.classList.contains(
                            "is-open"
                        );

                    faqItems.forEach(
                        other=>{

                            if(
                                other !== item
                            ){
                                closeFaq(
                                    other
                                );
                            }

                        }
                    );

                    if(alreadyOpen){

                        closeFaq(
                            item
                        );

                    }else{

                        openFaq(
                            item
                        );

                    }

                }
            );

    });

    /* --------------------------------------------------------
       RESIZE
       -------------------------------------------------------- */

    window.addEventListener(
        "resize",
        ()=>{

            root
                .querySelectorAll(
                    ".ismarts3-faq-item.is-open .ismarts3-faq-answer"
                )
                .forEach(
                    answer=>{
                        answer.style.maxHeight =
                            `${answer.scrollHeight}px`;
                    }
                );

            root
                .querySelectorAll(
                    ".ismarts3-more-panel.is-open"
                )
                .forEach(
                    panel=>{
                        panel.style.maxHeight =
                            `${panel.scrollHeight}px`;
                    }
                );

        },
        {
            passive:true
        }
    );

    /* --------------------------------------------------------
       PRODUCT IMAGE FALLBACK
       -------------------------------------------------------- */

    root
        .querySelectorAll(
            "[data-product-image]"
        )
        .forEach(image=>{

            image.addEventListener(
                "error",
                ()=>{

                    image.hidden =
                        true;

                    const fallback =
                        image
                            .closest(
                                ".ismarts3-image-stage,.ismarts3-pillow-frame"
                            )
                            ?.querySelector(
                                ".ismarts3-image-fallback"
                            );

                    if(fallback){
                        fallback.hidden =
                            false;
                    }

                },
                {
                    once:true
                }
            );

        });

    /* --------------------------------------------------------
       CERTIFICATION IMAGE FALLBACK
       -------------------------------------------------------- */

    root
        .querySelectorAll(
            "[data-cert-image]"
        )
        .forEach(image=>{

            const placeholder =
                image
                    .closest(
                        ".ismarts3-cert-image-slot"
                    )
                    ?.querySelector(
                        ".ismarts3-cert-placeholder"
                    );

            image.addEventListener(
                "error",
                ()=>{

                    image.hidden =
                        true;

                    if(placeholder){
                        placeholder.classList.add(
                            "is-visible"
                        );
                    }

                },
                {
                    once:true
                }
            );

            image.addEventListener(
                "load",
                ()=>{

                    if(placeholder){
                        placeholder.classList.remove(
                            "is-visible"
                        );
                    }

                },
                {
                    once:true
                }
            );

        });

    /* --------------------------------------------------------
       SCROLL PROGRESS
       -------------------------------------------------------- */

    const progress =
        root.querySelector(
            ".ismarts3-scroll-progress span"
        );

    if(progress){

        const updateProgress = ()=>{

            const doc =
                document.documentElement;

            const max =
                doc.scrollHeight -
                window.innerHeight;

            const value =
                max > 0
                    ? (
                        window.scrollY /
                        max
                    ) * 100
                    : 0;

            progress.style.width =
                `${value}%`;

        };

        window.addEventListener(
            "scroll",
            updateProgress,
            {
                passive:true
            }
        );

        updateProgress();

    }

}

function getMoreLabel(button){

    const text =
        button.classList.contains(
            "ismarts3-more-toggle-faq"
        )
            ? "Ver mais perguntas"
            : button.dataset.moreDefault;

    return text || "Ver mais";
}

function openWhats(message){

    window.open(

        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,

        "_blank",

        "noopener,noreferrer"

    );

}
