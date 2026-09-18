/* ==========================================================
   AD LIFESTYLE V2
   ISMARTS3.JS
   Premium iSMART S3 Product Page
   Modelo estrutural: AlphaMeta
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

const CERTIFICATION_01 =
    "./assets/certifications/ismarts3-cert-01.png";

const CERTIFICATION_02 =
    "./assets/certifications/ismarts3-cert-02.png";

const CERTIFICATION_03 =
    "./assets/certifications/ismarts3-cert-03.png";

const CERTIFICATION_04 =
    "./assets/certifications/ismarts3-cert-04.png";

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
            data-product-page="ismarts3">

            ${hero()}

            ${overview()}

            ${composition()}

            ${benefits()}

            ${productDetail()}

            ${sleepQuality()}

            ${circulation()}

            ${sleepImpact()}

            ${technology()}

            ${pillow()}

            ${certifications()}

            ${routine()}

            ${faq()}

            ${information()}

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

        <div class="ismarts3-hero-atmosphere">

            <div class="ismarts3-orb ismarts3-orb-1"></div>
            <div class="ismarts3-orb ismarts3-orb-2"></div>

            <div class="ismarts3-orbit ismarts3-orbit-1"></div>
            <div class="ismarts3-orbit ismarts3-orbit-2"></div>

        </div>

        <div class="container ismarts3-hero-grid">

            <div class="ismarts3-hero-copy reveal">

                <span class="ismarts3-eyebrow">
                    iSMART S3 · SMART LIVING
                </span>

                <h1>
                    iSMART
                    <span>S3.</span>
                </h1>

                <p class="ismarts3-hero-description">
                    Um sistema de descanso apresentado através de conforto,
                    tecnologia térmica e uma arquitectura de várias camadas.
                </p>

                <div class="ismarts3-hero-pills">

                    <span class="ismarts3-hero-pill">
                        Cobertor inteligente
                    </span>

                    <span class="ismarts3-hero-pill">
                        Almofada Gravidade Zero
                    </span>

                    <span class="ismarts3-hero-pill">
                        Smart Sleep System
                    </span>

                    <span class="ismarts3-hero-pill">
                        Kit 2 em 1
                    </span>

                </div>

                <div class="ismarts3-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyISmartS3">
                        Comprar o Kit
                    </button>

                    <button
                        type="button"
                        class="btn btn-glass"
                        id="ismarts3Overview"
                        data-scroll="#ismarts3-overview">
                        Conhecer o sistema
                    </button>

                </div>

            </div>

            <div class="ismarts3-hero-product reveal-right">

                <div class="ismarts3-product-aura"></div>

                <div class="ismarts3-product-ring"></div>

                <div class="ismarts3-product-grid">

                    <img
                        src="${KIT_IMAGE}"
                        alt="Kit iSMART S3"
                        loading="eager"
                        decoding="async"
                    >

                </div>

                <div class="ismarts3-product-caption">

                    <strong>ISMART S3</strong>

                    <span>
                        SMART SLEEP SYSTEM
                    </span>

                </div>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   OVERVIEW
   ========================================================== */

function overview(){

    return `

    <section
        id="ismarts3-overview"
        class="section ismarts3-overview-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    VISÃO GERAL
                </span>

                <h2 class="section-title">
                    Conheça o conceito
                    <span>iSMART S3.</span>
                </h2>

                <p class="lead">
                    O iSMART S3 é apresentado como um sistema composto por
                    um Cobertor Inteligente e uma Almofada Gravidade Zero,
                    reunidos numa experiência orientada para conforto e descanso.
                </p>

            </div>

            <div class="ismarts3-overview-grid">

                ${overviewCard(
                    "01",
                    "Cobertor inteligente",
                    "Peça principal do sistema, apresentada com tecnologia de regulação térmica e conforto."
                )}

                ${overviewCard(
                    "02",
                    "Almofada Gravidade Zero",
                    "Peça complementar com design de dupla face e proposta de suporte da zona cervical."
                )}

                ${overviewCard(
                    "03",
                    "Smart Sleep System",
                    "O produto é apresentado dentro de uma abordagem tecnológica orientada para o descanso."
                )}

                ${overviewCard(
                    "04",
                    "Experiência integrada",
                    "O kit pode ser utilizado em conjunto ou os produtos podem ser adquiridos separadamente."
                )}

            </div>

            <div class="ismarts3-overview-note reveal">

                <strong>
                    Um sistema de descanso com identidade tecnológica.
                </strong>

                <p>
                    As especificações, benefícios e certificações devem ser
                    entendidos de acordo com a informação oficial e a documentação
                    disponível para o produto.
                </p>

            </div>

        </div>

    </section>

    `;
}


function overviewCard(
    number,
    title,
    text
){

    const symbols = {
        "01":"◇",
        "02":"○",
        "03":"⌁",
        "04":"✦"
    };

    return `

    <article class="ismarts3-overview-card reveal">

        <span class="ismarts3-card-number">
            ${number}
        </span>

        <div
            class="ismarts3-card-icon"
            aria-hidden="true">
            ${symbols[number] || "◇"}
        </div>

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
   COMPOSITION / ARCHITECTURE
   ========================================================== */

function composition(){

    return `

    <section
        id="ismarts3-composition"
        class="section ismarts3-composition">

        <div class="container">

            <div class="ismarts3-section-heading reveal">

                <span class="eyebrow">
                    ARQUITECTURA
                </span>

                <h2>
                    Uma construção em
                    <span>várias camadas.</span>
                </h2>

                <p>
                    A apresentação do produto descreve uma composição em diferentes
                    camadas funcionais. Os elementos abaixo reproduzem o enquadramento
                    disponibilizado para esta página.
                </p>

            </div>

            <div class="ismarts3-composition-grid">

                ${compositionCard(
                    "01",
                    "❄",
                    "Camada de arrefecimento",
                    "Seda de gelo",
                    "Associada ao conceito de frescura e regulação térmica."
                )}

                ${compositionCard(
                    "02",
                    "◇",
                    "Camada de protecção",
                    "Protecção contra o ar",
                    "Apresentada como elemento adicional de protecção."
                )}

                ${compositionCard(
                    "03",
                    "◌",
                    "Camada biomagnética",
                    "Biomagnetismo",
                    "Associada à tecnologia biomagnética indicada no material."
                )}

                ${compositionCard(
                    "04",
                    "⌁",
                    "Camada protectora",
                    "Protecção",
                    "Estrutura intermédia destinada a complementar a composição."
                )}

            </div>

            <div class="ismarts3-more-wrap">

                <button
                    type="button"
                    class="ismarts3-more-toggle"
                    data-more-toggle="composition"
                    data-open-label="Ver toda a arquitectura"
                    data-close-label="Ocultar arquitectura"
                    aria-expanded="false"
                    aria-controls="ismarts3-composition-more">

                    <span>
                        Ver toda a arquitectura
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>

                <div
                    id="ismarts3-composition-more"
                    class="ismarts3-more-panel"
                    data-more-panel="composition"
                    aria-hidden="true">

                    <div class="ismarts3-detail-grid">

                        ${detailCard(
                            "05 — ENCHIMENTO",
                            "Infravermelho longínquo",
                            "O material promocional associa esta camada à tecnologia de infravermelho distante."
                        )}

                        ${detailCard(
                            "06 — ISOLAMENTO",
                            "Antiderrapante",
                            "Camada final apresentada com função de isolamento e estabilidade."
                        )}

                        ${detailCard(
                            "S3 — CONJUNTO",
                            "Arquitectura funcional",
                            "A composição é apresentada como um sistema de múltiplas camadas, cada uma ligada a uma característica específica."
                        )}

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function compositionCard(
    number,
    symbol,
    title,
    subtitle,
    text
){

    return `

    <article class="ismarts3-composition-card reveal">

        <span class="ismarts3-composition-number">
            ${number}
        </span>

        <div
            class="ismarts3-composition-symbol"
            aria-hidden="true">
            ${symbol}
        </div>

        <span class="ismarts3-composition-label">
            ${subtitle}
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


function detailCard(
    label,
    title,
    text
){

    return `

    <article class="ismarts3-detail-card">

        <span class="label">
            ${label}
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
   BENEFITS
   ========================================================== */

function benefits(){

    return `

    <section class="section ismarts3-benefits">

        <div class="container">

            <div class="ismarts3-benefits-grid">

                <div class="ismarts3-benefits-visual reveal-left">

                    <div class="ismarts3-benefits-frame">

                        <div class="ismarts3-benefits-aura"></div>

                        <div class="ismarts3-benefits-ring"></div>

                        <img
                            src="${KIT_IMAGE}"
                            alt="Kit iSMART S3"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                </div>

                <div class="ismarts3-benefits-copy reveal-right">

                    <span class="label">
                        DESTAQUES
                    </span>

                    <h2 class="section-title">
                        Conforto.
                        Tecnologia.
                        <span>Descanso.</span>
                    </h2>

                    <p class="lead">
                        A linguagem do iSMART S3 combina uma proposta de conforto
                        com referências a frescura, circulação, descanso e tecnologias
                        integradas na construção do produto.
                    </p>

                    <div class="ismarts3-benefit-checks">

                        ${benefitCheck(
                            "Regulação térmica e sensação de frescura"
                        )}

                        ${benefitCheck(
                            "Conceção orientada para conforto durante o descanso"
                        )}

                        ${benefitCheck(
                            "Arquitectura de várias camadas funcionais"
                        )}

                        ${benefitCheck(
                            "Sistema composto por cobertor e almofada"
                        )}

                    </div>

                    <div class="ismarts3-more-wrap">

                        <button
                            type="button"
                            class="ismarts3-more-toggle"
                            data-more-toggle="benefits"
                            data-open-label="Ver informações funcionais"
                            data-close-label="Ocultar informações"
                            aria-expanded="false"
                            aria-controls="ismarts3-benefits-more">

                            <span>
                                Ver informações funcionais
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>

                        <div
                            id="ismarts3-benefits-more"
                            class="ismarts3-more-panel"
                            data-more-panel="benefits"
                            aria-hidden="true">

                            <div class="ismarts3-detail-grid">

                                ${detailCard(
                                    "CONFORTO",
                                    "Experiência térmica",
                                    "O material apresenta o sistema em associação com regulação térmica, frescura e conforto."
                                )}

                                ${detailCard(
                                    "CIRCULAÇÃO",
                                    "Contexto educativo",
                                    "A apresentação educativa fornecida aborda a importância da circulação, do oxigénio, nutrientes e evacuação de resíduos."
                                )}

                                ${detailCard(
                                    "SONO",
                                    "Descanso profundo",
                                    "A linguagem promocional relaciona o sistema com uma experiência de sono profundo e reparador."
                                )}

                                ${detailCard(
                                    "SMART",
                                    "Tecnologia integrada",
                                    "O produto é enquadrado na proposta Smart Living através de diferentes características funcionais."
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function benefitCheck(text){

    return `

    <div class="ismarts3-benefit-check">

        <span>
            ✓
        </span>

        <p>
            ${text}
        </p>

    </div>

    `;
}


/* ==========================================================
   PRODUCT DETAIL — COBERTOR + ALMOFADA
   ========================================================== */

function productDetail(){

    return `

    <section
        id="ismarts3-products"
        class="section ismarts3-product-section">

        <div class="container">

            <div class="ismarts3-section-heading reveal">

                <span class="eyebrow">
                    O PRODUTO
                </span>

                <h2>
                    Duas peças.
                    <span>Uma identidade.</span>
                </h2>

                <p>
                    O sistema pode ser explorado através de cada peça individual,
                    mantendo a mesma linguagem visual e funcional.
                </p>

            </div>

            <div class="ismarts3-product-detail-grid">

                <article class="ismarts3-product-card reveal">

                    <div class="ismarts3-product-card-visual">

                        <div class="ismarts3-detail-aura"></div>
                        <div class="ismarts3-detail-ring"></div>

                        <div class="ismarts3-product-grid">

                            <img
                                src="${BLANKET_IMAGE}"
                                alt="Cobertor Inteligente iSMART S3"
                                loading="lazy"
                                decoding="async"
                                class="ismarts3-product-detail-image"
                            >

                        </div>

                        <span class="ismarts3-detail-caption">
                            iSMART S3 · COBERTOR
                        </span>

                    </div>

                    <div class="ismarts3-product-card-copy">

                        <span class="label">
                            PRODUTO 01
                        </span>

                        <h3>
                            Cobertor Inteligente
                            <span>iSMART S3.</span>
                        </h3>

                        <p>
                            Um cobertor apresentado como peça principal do sistema,
                            associado a conforto, frescura, tecnologia térmica e
                            arquitectura funcional.
                        </p>

                        <div class="ismarts3-product-spec-list">

                            ${productSpec(
                                "Tecnologia",
                                "Regulação térmica"
                            )}

                            ${productSpec(
                                "Experiência",
                                "Conforto e frescura"
                            )}

                            ${productSpec(
                                "Mobilidade",
                                "Leve e transportável"
                            )}

                        </div>

                        <div class="ismarts3-more-wrap">

                            <button
                                type="button"
                                class="ismarts3-more-toggle"
                                data-more-toggle="blanket"
                                data-open-label="Ver mais características"
                                data-close-label="Ocultar características"
                                aria-expanded="false"
                                aria-controls="ismarts3-blanket-more">

                                <span>
                                    Ver mais características
                                </span>

                                <i aria-hidden="true">
                                    +
                                </i>

                            </button>

                            <div
                                id="ismarts3-blanket-more"
                                class="ismarts3-more-panel"
                                data-more-panel="blanket"
                                aria-hidden="true">

                                <div class="ismarts3-detail-list">

                                    ${detailItem(
                                        "Peso total indicado no material: aproximadamente 8 kg incluindo a mala."
                                    )}

                                    ${detailItem(
                                        "O produto é apresentado com sistema de auto-limpeza incorporado."
                                    )}

                                    ${detailItem(
                                        "A utilização deve seguir as instruções oficiais do fabricante."
                                    )}

                                </div>

                            </div>

                        </div>

                        <button
                            type="button"
                            class="btn btn-primary ismarts3-card-buy"
                            data-buy="cobertor">
                            Adquirir cobertor
                        </button>

                    </div>

                </article>


                <article class="ismarts3-product-card is-reverse reveal">

                    <div class="ismarts3-product-card-visual">

                        <div class="ismarts3-detail-aura"></div>
                        <div class="ismarts3-detail-ring"></div>

                        <div class="ismarts3-product-grid">

                            <img
                                src="${PILLOW_IMAGE}"
                                alt="Almofada iSMART S3 Gravidade Zero"
                                loading="lazy"
                                decoding="async"
                                class="ismarts3-product-detail-image"
                            >

                        </div>

                        <span class="ismarts3-detail-caption">
                            iSMART S3 · ALMOFADA
                        </span>

                    </div>

                    <div class="ismarts3-product-card-copy">

                        <span class="label">
                            PRODUTO 02
                        </span>

                        <h3>
                            Almofada iSMART S3
                            <span>Gravidade Zero.</span>
                        </h3>

                        <p>
                            Almofada complementar apresentada com design de dupla face,
                            proposta de suporte da zona cervical e utilização em diferentes posições.
                        </p>

                        <div class="ismarts3-product-spec-list">

                            ${productSpec(
                                "Conceito",
                                "Gravidade Zero"
                            )}

                            ${productSpec(
                                "Estrutura",
                                "Dupla face"
                            )}

                            ${productSpec(
                                "Zona",
                                "Região cervical"
                            )}

                        </div>

                        <div class="ismarts3-more-wrap">

                            <button
                                type="button"
                                class="ismarts3-more-toggle"
                                data-more-toggle="pillow"
                                data-open-label="Ver mais características"
                                data-close-label="Ocultar características"
                                aria-expanded="false"
                                aria-controls="ismarts3-pillow-more">

                                <span>
                                    Ver mais características
                                </span>

                                <i aria-hidden="true">
                                    +
                                </i>

                            </button>

                            <div
                                id="ismarts3-pillow-more"
                                class="ismarts3-more-panel"
                                data-more-panel="pillow"
                                aria-hidden="true">

                                <div class="ismarts3-detail-list">

                                    ${detailItem(
                                        "Estrutura apresentada pelo material como não deformável."
                                    )}

                                    ${detailItem(
                                        "Conceção destinada a acompanhar a região do pescoço."
                                    )}

                                    ${detailItem(
                                        "Pode ser comercializada e adquirida separadamente."
                                    )}

                                </div>

                            </div>

                        </div>

                        <button
                            type="button"
                            class="btn btn-primary ismarts3-card-buy"
                            data-buy="almofada">
                            Adquirir almofada
                        </button>

                    </div>

                </article>

            </div>

        </div>

    </section>

    `;
}


function productSpec(
    label,
    value
){

    return `

    <div class="ismarts3-product-spec">

        <span>
            ${label}
        </span>

        <strong>
            ${value}
        </strong>

    </div>

    `;
}


function detailItem(text){

    return `

    <div class="ismarts3-detail-item">

        <span
            class="ismarts3-check"
            aria-hidden="true">
            ✓
        </span>

        <span>
            ${text}
        </span>

    </div>

    `;
}


/* ==========================================================
   SLEEP QUALITY
   ========================================================== */

function sleepQuality(){

    return `

    <section class="section ismarts3-sleep-section">

        <div class="container">

            <div class="ismarts3-section-heading reveal">

                <span class="eyebrow">
                    QUALIDADE DO SONO
                </span>

                <h2>
                    Como reconhecer
                    <span>um bom descanso.</span>
                </h2>

                <p>
                    A apresentação educativa fornecida diferencia uma experiência de
                    sono de qualidade de sinais associados a uma experiência menos confortável.
                </p>

            </div>

            <div class="ismarts3-sleep-grid">

                <article class="ismarts3-sleep-card good reveal">

                    <span class="ismarts3-sleep-label">
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

                    <span class="ismarts3-sleep-label">
                        02 · Atenção
                    </span>

                    <h3>
                        Má qualidade de sono
                    </h3>

                    <div class="ismarts3-check-list">
                        ${checkItem("Insónia")}
                        ${checkItem("Transpiração abundante")}
                        ${checkItem("Sono não reparador")}
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

    <section class="section ismarts3-circulation">

        <div class="container">

            <div class="ismarts3-circulation-grid">

                <div class="ismarts3-circulation-visual reveal-left">

                    <div class="ismarts3-circulation-aura"></div>

                    <div class="ismarts3-circulation-orbit"></div>

                    <div class="ismarts3-circulation-image-wrap">

                        <img
                            src="${KIT_IMAGE}"
                            alt="Kit iSMART S3"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                    <span>
                        CIRCULAÇÃO
                    </span>

                    <small>
                        21 ACADEMY · iSMART S3
                    </small>

                </div>

                <div class="ismarts3-circulation-copy reveal-right">

                    <span class="label">
                        CONTEXTO EDUCATIVO
                    </span>

                    <h2 class="section-title">
                        A circulação
                        <span>sanguínea.</span>
                    </h2>

                    <p class="lead">
                        O conteúdo educativo fornecido enquadra a circulação como parte
                        importante do equilíbrio fisiológico, destacando o fornecimento
                        de oxigénio e nutrientes e a evacuação dos resíduos.
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
                            data-more-panel="circulation"
                            aria-hidden="true"
                            id="ismarts3-circulation-more">

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
                        class="ismarts3-more-toggle"
                        data-more-toggle="circulation"
                        data-open-label="Ver mais contexto"
                        data-close-label="Ocultar contexto"
                        aria-expanded="false"
                        aria-controls="ismarts3-circulation-more">

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


function infoLine(
    number,
    title,
    text
){

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
   SLEEP IMPACT
   ========================================================== */

function sleepImpact(){

    return `

    <section class="section ismarts3-impact-section">

        <div class="container">

            <div class="ismarts3-section-heading reveal">

                <span class="eyebrow">
                    CONTEXTO DO SONO
                </span>

                <h2>
                    Os distúrbios do sono
                    <span>e o bem-estar.</span>
                </h2>

                <p>
                    A apresentação educativa fornecida relaciona uma má qualidade do sono
                    com diferentes dimensões do bem-estar e da saúde.
                </p>

            </div>

            <div class="ismarts3-impact-grid">

                ${impactCard("01","Stress, ansiedade e depressão")}
                ${impactCard("02","Doenças crónicas e metabólicas")}
                ${impactCard("03","Doenças neurodegenerativas")}
                ${impactCard("04","Obesidade e resistência à insulina")}

            </div>

            <div class="ismarts3-more-wrap">

                <button
                    type="button"
                    class="ismarts3-more-toggle"
                    data-more-toggle="impact"
                    data-open-label="Ver mais áreas"
                    data-close-label="Ocultar áreas"
                    aria-expanded="false"
                    aria-controls="ismarts3-impact-more">

                    <span>
                        Ver mais áreas
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>

                <div
                    id="ismarts3-impact-more"
                    class="ismarts3-more-panel"
                    data-more-panel="impact"
                    aria-hidden="true">

                    <div class="ismarts3-impact-grid ismarts3-impact-grid-more">

                        ${impactCard("05","Distúrbios hormonais")}
                        ${impactCard("06","Envelhecimento prematuro")}
                        ${impactCard("07","Baixa resistência e distúrbios da sexualidade")}

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function impactCard(
    number,
    text
){

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
   TECHNOLOGY / FUNCTIONS
   ========================================================== */

function technology(){

    return `

    <section class="section ismarts3-technology">

        <div class="container">

            <div class="ismarts3-section-heading ismarts3-heading-dark reveal">

                <span class="eyebrow">
                    TECNOLOGIA
                </span>

                <h2>
                    Inteligência integrada
                    <span>no descanso.</span>
                </h2>

                <p>
                    O material fornecido associa o sistema a diferentes funções e
                    características de tecnologia de sono.
                </p>

            </div>

            <div class="ismarts3-technology-feature reveal">

                <div class="ismarts3-technology-number">
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

            <div class="ismarts3-technology-grid">

                ${technologyCard(
                    "01",
                    "Sono profundo",
                    "Favorece uma experiência associada ao descanso profundo."
                )}

                ${technologyCard(
                    "02",
                    "pH sanguíneo",
                    "O material promocional associa o sistema à regulação do pH sanguíneo."
                )}

                ${technologyCard(
                    "03",
                    "Ligação ao oxigénio",
                    "É apresentada uma associação com a capacidade de ligação ao oxigénio."
                )}

                ${technologyCard(
                    "04",
                    "Iões negativos",
                    "A tecnologia é apresentada em associação com iões negativos."
                )}

            </div>

        </div>

    </section>

    `;
}


function technologyCard(
    number,
    title,
    text
){

    return `

    <article class="ismarts3-technology-card reveal">

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

function pillow(){

    return `

    <section class="section ismarts3-pillow-section">

        <div class="container">

            <div class="ismarts3-pillow-grid">

                <div class="ismarts3-pillow-copy reveal-left">

                    <span class="label">
                        ALMOFADA
                    </span>

                    <h2 class="section-title">
                        Gravidade
                        <span>Zero.</span>
                    </h2>

                    <p class="lead">
                        Uma peça complementar apresentada com design de dupla face,
                        estrutura estável e uma proposta centrada na zona cervical.
                    </p>

                    <div class="ismarts3-benefit-checks">

                        ${benefitCheck(
                            "Design de dupla face"
                        )}

                        ${benefitCheck(
                            "Estrutura apresentada como não deformável"
                        )}

                        ${benefitCheck(
                            "Conceção para acompanhar a região do pescoço"
                        )}

                    </div>

                    <button
                        type="button"
                        class="btn btn-primary"
                        data-buy="almofada">
                        Adquirir almofada
                    </button>

                </div>

                <div class="ismarts3-pillow-visual reveal-right">

                    <div class="ismarts3-pillow-frame">

                        <div class="ismarts3-pillow-aura"></div>

                        <div class="ismarts3-pillow-image-grid">

                            <img
                                src="${PILLOW_IMAGE}"
                                alt="Almofada iSMART S3 Gravidade Zero"
                                loading="lazy"
                                decoding="async"
                            >

                        </div>

                        <span>
                            iSMART S3 · GRAVIDADE ZERO
                        </span>

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

    return `

    <section class="section ismarts3-certifications">

        <div class="container">

            <div class="ismarts3-section-heading reveal">

                <span class="eyebrow">
                    DOCUMENTAÇÃO
                </span>

                <h2>
                    Certificações
                    <span>e testes.</span>
                </h2>

                <p>
                    Quatro espaços visuais preparados para receber os certificados,
                    relatórios ou selos oficiais correspondentes ao iSMART S3.
                </p>

            </div>

            <div class="ismarts3-certification-grid">

                ${certificateCard(
                    "01",
                    "Certificação / teste",
                    CERTIFICATION_01
                )}

                ${certificateCard(
                    "02",
                    "Certificação / teste",
                    CERTIFICATION_02
                )}

                ${certificateCard(
                    "03",
                    "Certificação / teste",
                    CERTIFICATION_03
                )}

                ${certificateCard(
                    "04",
                    "Certificação / teste",
                    CERTIFICATION_04
                )}

            </div>

            <div class="ismarts3-certification-note reveal">

                <span class="label">
                    NOTA
                </span>

                <p>
                    A validade, entidade certificadora, âmbito, datas e correspondência
                    dos documentos devem ser confirmados através da documentação oficial
                    antes da publicação de qualquer alegação específica.
                </p>

            </div>

        </div>

    </section>

    `;
}


function certificateCard(
    number,
    title,
    image
){

    return `

    <article class="ismarts3-certificate reveal">

        <div class="ismarts3-certificate-image">

            <img
                src="${image}"
                alt="Espaço para certificação ${number} do iSMART S3"
                loading="lazy"
                decoding="async"
            >

            <div class="ismarts3-certificate-placeholder">

                <span>
                    ${number}
                </span>

                <strong>
                    INSERIR DOCUMENTO
                </strong>

                <small>
                    ${image}
                </small>

            </div>

        </div>

        <div class="ismarts3-certificate-content">

            <span>
                ${number}
            </span>

            <div>

                <strong>
                    ${title}
                </strong>

                <small>
                    Documento oficial
                </small>

            </div>

        </div>

    </article>

    `;
}


/* ==========================================================
   ROUTINE
   ========================================================== */

function routine(){

    return `

    <section class="section ismarts3-routine">

        <div class="container-sm">

            <div class="ismarts3-section-heading reveal">

                <span class="eyebrow">
                    EXPERIÊNCIA
                </span>

                <h2>
                    Uma rotina simples
                    e <span>consistente.</span>
                </h2>

                <p>
                    Uma sequência editorial para apresentar o sistema dentro do quotidiano,
                    sem sobrecarregar a página com toda a informação de uma só vez.
                </p>

            </div>

            <div class="ismarts3-routine-list">

                ${routineStep(
                    "01",
                    "Conhecer",
                    "Conheça o cobertor e a almofada e perceba como o kit está estruturado."
                )}

                ${routineStep(
                    "02",
                    "Escolher",
                    "Opte pelo kit completo ou adquira individualmente o cobertor ou a almofada."
                )}

                <div
                    class="ismarts3-more-panel"
                    data-more-panel="routine"
                    aria-hidden="true"
                    id="ismarts3-routine-more">

                    ${routineStep(
                        "03",
                        "Utilizar",
                        "Utilize os produtos de acordo com as instruções e recomendações oficiais."
                    )}

                    ${routineStep(
                        "04",
                        "Integrar",
                        "Integre o sistema numa rotina de descanso confortável e equilibrada."
                    )}

                </div>

            </div>

            <button
                type="button"
                class="ismarts3-more-toggle"
                data-more-toggle="routine"
                data-open-label="Ver mais passos"
                data-close-label="Ocultar passos"
                aria-expanded="false"
                aria-controls="ismarts3-routine-more">

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


function routineStep(
    number,
    title,
    text
){

    return `

    <article class="ismarts3-routine-step reveal">

        <div class="ismarts3-routine-number">
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
            "O iSMART S3 é apresentado como um sistema de sono da linha Smart Lab Living, constituído por um Cobertor Inteligente e uma Almofada Gravidade Zero."
        ],

        [
            "O iSMART S3 é um único produto?",
            "Não. Nesta página o iSMART S3 é apresentado como um kit com dois produtos, que também podem ser comercializados separadamente."
        ],

        [
            "Posso comprar apenas o cobertor?",
            "Sim. O Cobertor Inteligente iSMART S3 pode ser apresentado e adquirido separadamente."
        ],

        [
            "Posso comprar apenas a almofada?",
            "Sim. A Almofada iSMART S3 Gravidade Zero pode ser apresentada e adquirida separadamente."
        ],

        [
            "Qual é o peso do kit?",
            "O material fornecido indica um peso total de aproximadamente 8 kg, incluindo a mala."
        ],

        [
            "O cobertor pode ser lavado com água?",
            "Segundo a informação fornecida, o produto possui sistema de auto-limpeza incorporado e não é lavado com água. A utilização deve seguir as instruções oficiais."
        ],

        [
            "Quais são as características da almofada?",
            "A almofada é apresentada com conceito Gravidade Zero, design de dupla face, estrutura não deformável segundo o material e uma proposta de acompanhamento da zona cervical."
        ],

        [
            "O que significam as certificações?",
            "Os espaços desta página foram preparados para receber os certificados, relatórios ou selos oficiais. A validade, entidade certificadora e âmbito devem ser confirmados na documentação correspondente."
        ],

        [
            "O iSMART S3 substitui tratamentos médicos?",
            "Não. O produto não deve ser apresentado como substituto de diagnóstico, tratamento médico, medicamentos ou acompanhamento profissional."
        ],

        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre produto, disponibilidade e aquisição."
        ]

    ];

    return `

    <section
        id="ismarts3-faq"
        class="section ismarts3-faq-section">

        <div class="container-sm">

            <div class="ismarts3-section-heading reveal">

                <span class="eyebrow">
                    PERGUNTAS FREQUENTES
                </span>

                <h2>
                    Tudo sobre o
                    <span>iSMART S3.</span>
                </h2>

                <p>
                    As respostas abrem de forma individual: ao seleccionar outra pergunta,
                    a anterior fecha automaticamente.
                </p>

            </div>

            <div class="ismarts3-faq-list">

                ${questions
                    .map(
                        ([questionText,answerText],index) =>
                            faqItem(
                                String(index + 1).padStart(2,"0"),
                                questionText,
                                answerText
                            )
                    )
                    .join("")
                }

            </div>

        </div>

    </section>

    `;
}


function faqItem(
    number,
    questionText,
    answerText
){

    const answerId =
        `ismarts3-faq-answer-${number}`;

    return `

    <article class="ismarts3-faq-item">

        <button
            type="button"
            class="ismarts3-faq-question"
            aria-expanded="false"
            aria-controls="${answerId}">

            <span class="ismarts3-faq-number">
                ${number}
            </span>

            <span class="ismarts3-faq-text">
                ${questionText}
            </span>

            <span
                class="ismarts3-faq-plus"
                aria-hidden="true">
                +
            </span>

        </button>

        <div
            id="${answerId}"
            class="ismarts3-faq-answer"
            role="region"
            aria-hidden="true">

            <p>
                ${answerText}
            </p>

        </div>

    </article>

    `;
}


/* ==========================================================
   INFORMATION
   ========================================================== */

function information(){

    return `

    <section class="section ismarts3-information-section">

        <div class="container">

            <div class="ismarts3-information-box reveal">

                <div class="ismarts3-information-icon">
                    i
                </div>

                <div>

                    <span class="label">
                        COMUNICAÇÃO RESPONSÁVEL
                    </span>

                    <h2>
                        O que é apresentado
                        e o que requer confirmação.
                    </h2>

                    <p>
                        As informações desta página foram organizadas a partir do material
                        disponibilizado para o iSMART S3. Alegações terapêuticas, científicas,
                        sanitárias ou certificações específicas devem ser confirmadas através
                        da documentação oficial antes de serem usadas como garantias ou promessas.
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

                <span class="ismarts3-label-light">
                    ISMART S3
                </span>

                <h2>
                    Eleve a experiência do descanso
                    <span>ao Smart Living.</span>
                </h2>

                <p>
                    Conheça o kit completo ou escolha individualmente o Cobertor Inteligente
                    e a Almofada Gravidade Zero.
                </p>

                <div class="ismarts3-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="ismarts3Whats">
                        Pedir pelo WhatsApp
                    </button>

                    <button
                        type="button"
                        class="btn btn-glass"
                        id="backHome">
                        Voltar à AD Lifestyle
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

    /* ------------------------------------------------------
       RIPPLE
       ------------------------------------------------------ */

    try{
        root
            .querySelectorAll(".btn")
            .forEach(button=>ripple(button));
    }catch(error){
        console.warn(
            "iSMART S3: ripple não inicializado.",
            error
        );
    }

    /* ------------------------------------------------------
       STAGGER
       ------------------------------------------------------ */

    try{

        stagger(
            root.querySelectorAll(
                `
                .ismarts3-overview-grid .reveal,
                .ismarts3-composition-grid .reveal,
                .ismarts3-benefits-grid .reveal,
                .ismarts3-product-detail-grid .reveal,
                .ismarts3-sleep-grid .reveal,
                .ismarts3-impact-grid .reveal,
                .ismarts3-technology-grid .reveal,
                .ismarts3-certification-grid .reveal,
                .ismarts3-routine-list .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "iSMART S3: stagger não inicializado.",
            error
        );

    }

    /* ------------------------------------------------------
       SCROLL
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const trigger =
                event.target.closest(
                    "[data-scroll]"
                );

            if(!trigger){
                return;
            }

            const selector =
                trigger.getAttribute(
                    "data-scroll"
                );

            if(!selector){
                return;
            }

            const target =
                root.querySelector(
                    selector
                );

            if(target){

                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        }
    );

    /* ------------------------------------------------------
       MORE / DETAILS
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "[data-more-toggle]"
                );

            if(!button){
                return;
            }

            const key =
                button.getAttribute(
                    "data-more-toggle"
                );

            const panel =
                root.querySelector(
                    `[data-more-panel="${key}"]`
                );

            if(!panel){
                return;
            }

            const isOpen =
                button.getAttribute(
                    "aria-expanded"
                ) === "true";

            const nextState =
                !isOpen;

            button.setAttribute(
                "aria-expanded",
                String(nextState)
            );

            button.classList.toggle(
                "active",
                nextState
            );

            panel.classList.toggle(
                "active",
                nextState
            );

            panel.setAttribute(
                "aria-hidden",
                String(!nextState)
            );

            if(nextState){

                panel.style.maxHeight =
                    `${panel.scrollHeight}px`;

                panel
                    .querySelectorAll(
                        ".reveal"
                    )
                    .forEach(item=>{
                        item.classList.add(
                            "is-visible"
                        );
                    });

            }else{

                panel.style.maxHeight =
                    `${panel.scrollHeight}px`;

                requestAnimationFrame(()=>{

                    panel.style.maxHeight =
                        "0px";

                });

            }

            const label =
                button.querySelector(
                    "span"
                );

            if(label){

                label.textContent =
                    nextState
                        ? button.dataset.closeLabel || "Ver menos"
                        : button.dataset.openLabel || "Ver mais";

            }

        }
    );

    /* ------------------------------------------------------
       FAQ — APENAS UMA ABERTA
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    ".ismarts3-faq-question"
                );

            if(!button){
                return;
            }

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

            const isOpen =
                item.classList.contains(
                    "active"
                );

            root
                .querySelectorAll(
                    ".ismarts3-faq-item.active"
                )
                .forEach(
                    otherItem=>{

                        if(
                            otherItem !== item
                        ){
                            closeFaqItem(
                                otherItem
                            );
                        }

                    }
                );

            if(isOpen){

                closeFaqItem(item);

            }else{

                openFaqItem(
                    item,
                    button,
                    answer
                );

                openFaqPlus(item);

            }

        }
    );

    /* ------------------------------------------------------
       IMAGE FALLBACKS
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            ".ismarts3-product-grid img"
        )
        .forEach(image=>{

            image.addEventListener(
                "error",
                function(){

                    const parent =
                        image.closest(
                            ".ismarts3-product-grid"
                        );

                    if(parent){

                        parent.classList.add(
                            "image-error"
                        );

                    }

                },
                { once:true }
            );

        });

    /* ------------------------------------------------------
       BUY BUTTONS
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "#buyISmartS3, #ismarts3Whats, [data-buy]"
                );

            if(!button){
                return;
            }

            let message =
                "Olá AD Lifestyle! Tenho interesse no iSMART S3 e gostaria de receber mais informações sobre o produto.";

            const type =
                button.getAttribute(
                    "data-buy"
                );

            if(type === "cobertor"){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o Cobertor Inteligente iSMART S3.";

            }

            if(type === "almofada"){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir a Almofada iSMART S3 Gravidade Zero.";

            }

            if(
                button.id === "buyISmartS3"
            ){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o Kit iSMART S3.";

            }

            openWhatsApp(message);

        }
    );

    /* ------------------------------------------------------
       HOME
       ------------------------------------------------------ */

    const backHome =
        root.querySelector(
            "#backHome"
        );

    if(backHome){

        backHome.addEventListener(
            "click",
            function(){
                navigate("/");
            }
        );

    }

    /* ------------------------------------------------------
       RESIZE
       ------------------------------------------------------ */

    window.addEventListener(
        "resize",
        function(){

            root
                .querySelectorAll(
                    `.ismarts3-faq-item.active .ismarts3-faq-answer`
                )
                .forEach(answer=>{

                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                });

            root
                .querySelectorAll(
                    `.ismarts3-more-panel.active`
                )
                .forEach(panel=>{

                    panel.style.maxHeight =
                        `${panel.scrollHeight}px`;

                });

        },
        {
            passive:true
        }
    );
}


/* ==========================================================
   FAQ HELPERS
   ========================================================== */

function openFaqItem(
    item,
    button,
    answer
){

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


function closeFaqItem(item){

    const button =
        item.querySelector(
            ".ismarts3-faq-question"
        );

    const answer =
        item.querySelector(
            ".ismarts3-faq-answer"
        );

    const plus =
        item.querySelector(
            ".ismarts3-faq-plus"
        );

    item.classList.remove(
        "active"
    );

    if(button){

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    if(answer){

        answer.setAttribute(
            "aria-hidden",
            "true"
        );

        answer.style.maxHeight =
            "0px";

    }

    if(plus){
        plus.textContent = "+";
    }
}


/* ==========================================================
   OPEN FAQ PLUS / MINUS
   ========================================================== */

function openFaqPlus(item){

    const plus =
        item.querySelector(
            ".ismarts3-faq-plus"
        );

    if(plus){
        plus.textContent = "−";
    }
}



/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(message){

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}
