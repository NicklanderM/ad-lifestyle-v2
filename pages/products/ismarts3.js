/* ==========================================================
   AD LIFESTYLE V2
   ISMARTS3.JS
   Premium iSMART S3 — KIT
   Cobertor Inteligente + Almofada Gravidade Zero
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD
   ========================================================== */

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

    <div class="ismarts3-aurora">

        <div class="ismarts3-blob ismarts3-blob-1"></div>
        <div class="ismarts3-blob ismarts3-blob-2"></div>
        <div class="ismarts3-blob ismarts3-blob-3"></div>

    </div>


    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge ismarts3-badge">
                Smart Lab Living
            </span>


            <span class="ismarts3-eyebrow">
                BZZWORLD · 21 Academy
            </span>


            <h1 class="hero-title">

                A EXPERIÊNCIA ÚLTIMA

                <span>
                    DO SONO REPARADOR
                </span>

                E REGENERADOR

            </h1>


            <p class="hero-sub">

                iSMART S3 é apresentado como uma solução de nova geração
                para o descanso, combinando tecnologia de regulação térmica,
                camadas funcionais e uma proposta de Smart Living.

            </p>


            <div class="ismarts3-hero-pills">

                <span>
                    Conforto
                </span>

                <span>
                    Frescura
                </span>

                <span>
                    Circulação
                </span>

                <span>
                    Descanso
                </span>

            </div>


            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    id="buyISmartS3">

                    Comprar o Kit

                </button>


                <button
                    class="btn btn-glass"
                    id="learnMore">

                    Descobrir o Sistema

                </button>

            </div>


            <div class="ismarts3-hero-meta">

                <div>

                    <strong>
                        8 kg
                    </strong>

                    <span>
                        peso total com mala
                    </span>

                </div>


                <div>

                    <strong>
                        2 em 1
                    </strong>

                    <span>
                        kit com dois produtos
                    </span>

                </div>


                <div>

                    <strong>
                        Smart
                    </strong>

                    <span>
                        Sleep System Solution
                    </span>

                </div>

            </div>

        </div>


        <div class="hero-visual reveal-right">

            <div class="hero-product ismarts3-hero-product floating">

                <div class="product-glow"></div>

                <div class="ismarts3-product-ring"></div>

                <img
                    class="parallax"
                    data-speed="30"
                    src="./assets/products/ismarts3.png"
                    alt="Kit iSMART S3">

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

            <span class="label ismarts3-label">
                iSMART S3 SYSTEM
            </span>


            <h2 class="section-title">

                Não é apenas um produto.

                É um
                <span>
                    kit de experiência de sono.
                </span>

            </h2>


            <p class="lead">

                O sistema iSMART S3 é apresentado como um conjunto formado
                por um cobertor inteligente e uma almofada de gravidade zero.
                Ambos podem ser utilizados como kit ou adquiridos separadamente.

            </p>

        </div>


        <div class="ismarts3-kit-grid mt-6">


            <div class="ismarts3-kit-card reveal">

                <div class="ismarts3-kit-number">
                    01
                </div>


                <span class="ismarts3-mini-label">
                    Produto principal
                </span>


                <h3>

                    Cobertor Inteligente

                    <span>
                        iSMART S3
                    </span>

                </h3>


                <p>

                    Cobertor desenvolvido dentro do conceito iSMARTS3
                    para uma experiência de descanso associada a conforto,
                    regulação da temperatura e tecnologias funcionais.

                </p>


                <div class="ismarts3-tag-row">

                    <span>
                        Temperatura
                    </span>

                    <span>
                        Conforto
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

            </div>


            <div class="ismarts3-kit-plus">

                +

            </div>


            <div
                class="ismarts3-kit-card ismarts3-kit-card-pillow reveal delay-1"
            >

                <div class="ismarts3-kit-number">
                    02
                </div>


                <span class="ismarts3-mini-label">
                    Produto complementar
                </span>


                <h3>

                    Almofada

                    <span>
                        Gravidade Zero
                    </span>

                </h3>


                <p>

                    Almofada iSMART S3 com design de dupla face, concebida
                    para acompanhar a zona cervical e adaptar-se a diferentes
                    posições de utilização.

                </p>


                <div class="ismarts3-tag-row">

                    <span>
                        Pescoço
                    </span>

                    <span>
                        Dupla face
                    </span>

                    <span>
                        Ergonomia
                    </span>

                </div>


                <button
                    type="button"
                    class="ismarts3-anchor-btn"
                    data-scroll="#product-pillow"
                >

                    Conhecer a almofada →

                </button>

            </div>

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

                    O cobertor e a almofada podem ser apresentados,
                    comercializados e adquiridos separadamente.

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

<section class="section-sm ismarts3-products-section">

    <div class="container">


        <div class="section-center reveal">

            <span class="label">
                Conheça cada produto
            </span>


            <h2 class="section-title">

                Duas peças.

                <span>
                    Uma experiência.
                </span>

            </h2>


            <p class="lead">

                O conceito do iSMART S3 permite explorar cada produto
                individualmente ou utilizar o conjunto como sistema integrado.

            </p>

        </div>


        <div class="ismarts3-product-showcase mt-6">


            <!-- ==================================================
                 COBERTOR
                 ================================================== -->

            <article
                id="product-blanket"
                class="ismarts3-single-product reveal"
            >


                <div class="ismarts3-single-image">

                    <div class="ismarts3-image-placeholder">

                        <span class="ismarts3-placeholder-number">
                            01
                        </span>


                        <span class="ismarts3-placeholder-icon">
                            ◌
                        </span>


                        <strong>
                            IMAGEM DO COBERTOR
                        </strong>


                        <small>

                            Espaço reservado para a imagem individual
                            do iSMART S3

                        </small>

                    </div>

                </div>


                <div class="ismarts3-single-content">


                    <span class="ismarts3-product-label">
                        PRODUTO 01
                    </span>


                    <h3>

                        Cobertor Inteligente

                        <span>
                            iSMART S3
                        </span>

                    </h3>


                    <p>

                        Um cobertor inteligente apresentado como solução
                        de nova geração para uma experiência de sono mais
                        confortável, fresca e integrada no conceito Smart Living.

                    </p>


                    <div class="ismarts3-feature-list">


                        ${productFeature(
                            "❄",
                            "Regulação térmica",
                            "Tecnologia de sono com proposta de regulação da temperatura."
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
                                "Peso total indicado no material: aproximadamente 8 kg, incluindo a mala."
                            )}


                            ${productFeature(
                                "↻",
                                "Auto-limpeza",
                                "O produto é apresentado com sistema de auto-limpeza incorporado."
                            )}

                        </div>


                        <button
                            type="button"
                            class="ismarts3-more-toggle"
                            data-more-toggle="blanket-features"
                            aria-expanded="false"
                            aria-controls="blanket-features-content"
                        >

                            <span>
                                Ver mais detalhes
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>

                    </div>


                    <div class="ismarts3-product-action">

                        <button
                            class="btn btn-primary"
                            data-buy="cobertor"
                        >

                            Adquirir Cobertor

                        </button>

                    </div>

                </div>

            </article>


            <!-- ==================================================
                 ALMOFADA
                 ================================================== -->

            <article
                id="product-pillow"
                class="ismarts3-single-product ismarts3-single-product-reverse reveal"
            >


                <div class="ismarts3-single-image">

                    <div class="ismarts3-image-placeholder ismarts3-image-placeholder-pillow">

                        <span class="ismarts3-placeholder-number">
                            02
                        </span>


                        <span class="ismarts3-placeholder-icon">
                            ◇
                        </span>


                        <strong>
                            IMAGEM DA ALMOFADA
                        </strong>


                        <small>

                            Espaço reservado para a imagem individual
                            da Almofada iSMART S3

                        </small>

                    </div>

                </div>


                <div class="ismarts3-single-content">


                    <span class="ismarts3-product-label">
                        PRODUTO 02
                    </span>


                    <h3>

                        Almofada iSMART S3

                        <span>
                            Gravidade Zero
                        </span>

                    </h3>


                    <p>

                        Uma almofada apresentada dentro do conceito
                        “Gravidade Zero”, com design pensado para acompanhar
                        a zona do pescoço independentemente da posição.

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
                            "Design de duas faces para diferentes experiências de utilização."
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


                        <button
                            type="button"
                            class="ismarts3-more-toggle"
                            data-more-toggle="pillow-features"
                            aria-expanded="false"
                            aria-controls="pillow-features-content"
                        >

                            <span>
                                Ver mais detalhes
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>

                    </div>


                    <div class="ismarts3-product-action">

                        <button
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
                21 Academy
            </span>


            <h2 class="section-title">

                COMO DETERMINAR

                <span>
                    UM BOM SONO?
                </span>

            </h2>

        </div>


        <div class="ismarts3-sleep-grid mt-6">


            <div class="ismarts3-sleep-card good reveal">

                <div class="ismarts3-card-top">

                    <span class="ismarts3-card-symbol">
                        ✓
                    </span>

                    <span>
                        Boa qualidade
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

            </div>


            <div class="ismarts3-sleep-card attention reveal delay-1">

                <div class="ismarts3-card-top">

                    <span class="ismarts3-card-symbol">
                        !
                    </span>

                    <span>
                        Atenção
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

            </div>

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
                    21 Academy
                </span>


                <h2 class="section-title">

                    A má circulação

                    <span>
                        sanguínea
                    </span>

                </h2>


                <p class="lead">

                    O material educativo fornecido enquadra a circulação
                    como parte importante do equilíbrio fisiológico,
                    destacando o fornecimento de oxigénio e nutrientes
                    e a evacuação dos resíduos.

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
                        id="circulation-details-content"
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


                    <button
                        type="button"
                        class="ismarts3-more-toggle ismarts3-more-toggle-light"
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
                21 Academy
            </span>


            <h2 class="section-title">

                AS DOENÇAS

                <span>
                    ARTICULARES
                </span>

            </h2>


            <p class="lead">

                O conteúdo fornecido também aborda a relação entre descanso,
                mobilidade e desconfortos associados ao sistema músculo-esquelético.

            </p>

        </div>


        <div class="grid grid-3 mt-6">


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

<div class="card ismarts3-joint-card reveal">

    <span class="ismarts3-joint-number">

        ${number}

    </span>


    <h3>

        ${title}

    </h3>


    <p class="text">

        ${text}

    </p>

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


        <div class="section-center reveal">

            <span class="label">
                21 Academy
            </span>


            <h2 class="section-title">

                Os distúrbios do sono

                <span>
                    afectam a sua saúde
                </span>

            </h2>


            <p class="lead">

                A apresentação educativa fornecida relaciona uma má qualidade
                do sono com várias dimensões do bem-estar e da saúde.

            </p>

        </div>


        <div class="ismarts3-impact-grid mt-6">


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
                class="ismarts3-more-panel ismarts3-more-grid"
                data-more-panel="impact-details"
                id="impact-details-content"
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


            <button
                type="button"
                class="ismarts3-more-toggle ismarts3-more-toggle-wide"
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

<div class="ismarts3-impact-card reveal">

    <span>
        ${number}
    </span>


    <strong>
        ${text}
    </strong>

</div>

`;

}


/* ==========================================================
   LAYER TECHNOLOGY
   ========================================================== */

function layerTechnology(){

return `

<section class="section ismarts3-layers-section">

    <div class="container">


        <div class="section-center reveal">

            <span class="label ismarts3-label-light">
                21 Academy · iSMART S3
            </span>


            <h2 class="section-title">

                CONCEÇÃO DE

                <span>
                    VÁRIAS CAMADAS
                </span>

            </h2>


            <p class="lead">

                A arquitectura do produto é apresentada através de diferentes
                camadas funcionais, cada uma associada a uma característica específica.

            </p>

        </div>


        <div class="ismarts3-layers mt-6">


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
                class="ismarts3-more-panel ismarts3-more-grid"
                data-more-panel="layer-details"
                id="layer-details-content"
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


            <button
                type="button"
                class="ismarts3-more-toggle ismarts3-more-toggle-wide"
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

<div class="ismarts3-layer reveal">


    <div class="ismarts3-layer-number">

        ${number}

    </div>


    <div class="ismarts3-layer-core">


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

</div>

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

                21 Academy · iSMART S3

            </span>


            <h2 class="section-title">

                AS FUNÇÕES

                <span>
                    DO iSMART S3
                </span>

            </h2>

        </div>


        <div class="ismarts3-function-highlight reveal">


            <div class="ismarts3-function-main">

                <span class="ismarts3-function-big">

                    &gt; 4.000

                </span>


                <span>

                    iões / cm³

                </span>

            </div>


            <div class="ismarts3-function-copy">


                <span class="ismarts3-function-label">

                    DESTAQUE DO MATERIAL PROMOCIONAL

                </span>


                <p>

                    O conteúdo fornecido associa o sistema à emissão de
                    mais de 4.000 iões por cm³ e apresenta outras funções
                    relacionadas com a experiência de sono.

                </p>

            </div>

        </div>


        <div class="grid grid-4 mt-5">


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

<div class="card ismarts3-function-card reveal">


    <span>

        ${number}

    </span>


    <h3>

        ${title}

    </h3>


    <p class="text">

        ${text}

    </p>

</div>

`;

}


/* ==========================================================
   ZERO GRAVITY PILLOW
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

                    ALMOFADA

                    <span>
                        GRAVIDADE ZERO
                    </span>

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
                        class="ismarts3-more-toggle ismarts3-more-toggle-light"
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
                    class="btn btn-primary"
                    data-buy="almofada"
                >

                    Quero a Almofada

                </button>

            </div>


            <div class="ismarts3-pillow-visual reveal-right">

                <div class="ismarts3-pillow-placeholder">


                    <span>

                        IMAGEM DA ALMOFADA

                    </span>


                    <small>

                        Área reservada para a fotografia
                        individual do produto

                    </small>

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

                Qualidade

            </span>


            <h2 class="section-title">

                CERTIFICAÇÕES

                <span>
                    E TESTES
                </span>

            </h2>


            <p class="lead">

                Os testes abaixo correspondem à lista apresentada no material
                promocional fornecido para o iSMART S3.

            </p>

        </div>


        <div class="ismarts3-cert-grid mt-6">


            ${items.slice(0,3).map((item,index)=>`

                <div class="ismarts3-cert-card reveal">


                    <span class="ismarts3-cert-number">

                        ${String(index + 1).padStart(2,"0")}

                    </span>


                    <div class="ismarts3-cert-check">

                        ✓

                    </div>


                    <strong>

                        ${item}

                    </strong>

                </div>

            `).join("")}


            <div
                class="ismarts3-more-panel ismarts3-more-grid"
                data-more-panel="cert-details"
                id="cert-details-content"
            >

                ${items.slice(3).map((item,index)=>`

                    <div class="ismarts3-cert-card reveal">


                        <span class="ismarts3-cert-number">

                            ${String(index + 4).padStart(2,"0")}

                        </span>


                        <div class="ismarts3-cert-check">

                            ✓

                        </div>


                        <strong>

                            ${item}

                        </strong>

                    </div>

                `).join("")}

            </div>


            <button
                type="button"
                class="ismarts3-more-toggle ismarts3-more-toggle-wide"
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

                O material fornecido também apresenta o iSMART S3 como
                possuidor de certificações internacionais. A AD Lifestyle
                deve confirmar os documentos e certificados oficiais antes
                de publicar números, organismos certificadores ou selos específicos.

            </p>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   LIFESTYLE ROUTINE
   ========================================================== */

function lifestyleRoutine(){

return `

<section class="section-sm ismarts3-routine-section">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">

                Smart Lifestyle

            </span>


            <h2 class="section-title">

                Uma experiência

                <span>
                    integrada no quotidiano
                </span>

            </h2>

        </div>


        <div class="timeline mt-6">


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
                id="routine-details-content"
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


            <button
                type="button"
                class="ismarts3-more-toggle ismarts3-more-toggle-light"
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


function step(n,title,text){

return `

<div class="timeline-item reveal">


    <div class="timeline-dot">

        ${n}

    </div>


    <div class="timeline-content">


        <h3>

            ${title}

        </h3>


        <p class="text mt-1">

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

<section class="section-sm ismarts3-faq-section">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">

                Perguntas Frequentes

            </span>


            <h2 class="section-title">

                Dúvidas sobre o

                <span>
                    iSMART S3
                </span>

            </h2>


            <p class="lead ismarts3-faq-intro">

                As respostas abaixo resumem a informação disponibilizada
                para esta apresentação.

            </p>

        </div>


        <div class="faq mt-5">


            ${question(
                "O que é o iSMART S3?",
                "O iSMART S3 é apresentado como um sistema de sono da linha Smart Lab Living, constituído por um cobertor inteligente e uma almofada Gravidade Zero.",
                "01"
            )}


            ${question(
                "O iSMART S3 é um único produto?",
                "Não. Nesta página o iSMART S3 é apresentado como um kit com dois produtos: o Cobertor Inteligente iSMART S3 e a Almofada iSMART S3.",
                "02"
            )}


            ${question(
                "Posso comprar apenas o cobertor?",
                "Sim. O cobertor pode ser apresentado e adquirido separadamente.",
                "03"
            )}


            ${question(
                "Posso comprar apenas a almofada?",
                "Sim. A Almofada iSMART S3 Gravidade Zero também pode ser comercializada e adquirida separadamente.",
                "04"
            )}


            <div
                class="ismarts3-more-panel"
                data-more-panel="faq-details"
                id="faq-details-content"
            >


                ${question(
                    "Qual é o peso do kit?",
                    "O material fornecido indica um peso total de aproximadamente 8 kg, incluindo a mala.",
                    "05"
                )}


                ${question(
                    "O cobertor pode ser lavado com água?",
                    "Segundo as informações fornecidas, o produto possui um sistema de auto-limpeza incorporado e não é lavado com água. A utilização deve seguir as instruções oficiais.",
                    "06"
                )}


                ${question(
                    "Para quem é apresentado o produto?",
                    "O material promocional menciona crianças, grávidas, adultos e idosos. A adequação individual deve, contudo, seguir as instruções oficiais e, quando necessário, orientação profissional.",
                    "07"
                )}


                ${question(
                    "O iSMART S3 substitui tratamentos médicos?",
                    "Não. O produto não deve ser apresentado como substituto de diagnóstico, tratamento médico, medicamentos ou acompanhamento profissional.",
                    "08"
                )}

            </div>


            <button
                type="button"
                class="ismarts3-more-toggle ismarts3-more-toggle-faq"
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

    </div>

</section>

`;

}


/* ==========================================================
   FAQ QUESTION
   ========================================================== */

function question(q,a,number){

    const id =
        `ismarts3-faq-${number}`;


    return `

<div class="faq-item">


    <button
        type="button"
        class="faq-question"
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
        class="faq-answer"
        id="${id}-answer"
        role="region"
    >


        <p>

            ${a}

        </p>

    </div>

</div>

`;

}


/* ==========================================================
   MEDICAL DISCLAIMER
   ========================================================== */

function medicalDisclaimer(){

return `

<section class="ismarts3-disclaimer">

    <div class="container">


        <div class="ismarts3-disclaimer-box reveal">


            <div class="ismarts3-disclaimer-icon">

                !

            </div>


            <div>


                <strong>

                    Nota importante sobre as alegações de saúde

                </strong>


                <p>

                    Alguns benefícios e efeitos mencionados nesta página
                    foram fornecidos pela informação promocional do produto.
                    Estes conteúdos não constituem, por si só, garantia clínica
                    nem substituem aconselhamento, diagnóstico ou tratamento
                    médico. A AD Lifestyle deve utilizar apenas alegações e
                    certificações que possam ser documentalmente comprovadas.

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


        <div class="showcase ismarts3-showcase">


            <div class="showcase-content section-center">


                <span class="badge">

                    iSMART S3

                </span>


                <h2 class="section-title mt-3">

                    Transforme o descanso

                    numa experiência

                    <span>
                        Smart Living.
                    </span>

                </h2>


                <p class="lead">

                    Explore o sistema completo, adquira o kit ou escolha
                    individualmente o Cobertor Inteligente ou a Almofada
                    Gravidade Zero.

                </p>


                <div class="hero-actions center mt-4">


                    <button
                        class="btn btn-primary"
                        id="ismarts3Whats"
                    >

                        Falar no WhatsApp

                    </button>


                    <button
                        class="btn btn-glass"
                        id="backHome"
                    >

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


    /* ======================================================
       BASE ANIMATIONS
       ====================================================== */

    stagger(
        ".page-ismarts3 .card"
    );


    stagger(
        ".page-ismarts3 .ismarts3-cert-card"
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


    /* ======================================================
       HERO → DISCOVER SYSTEM
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
       BUY KIT
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


    /* ======================================================
       CTA WHATSAPP
       ====================================================== */

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
       INDIVIDUAL BUY BUTTONS
       ====================================================== */

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


    /* ======================================================
       COLLAPSIBLE CONTENT
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


                    if(!panel) return;


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


                    if(label){

                        const isFaqButton =
                            button.classList.contains(
                                "ismarts3-more-toggle-faq"
                            );


                        const defaultLabel =
                            isFaqButton
                                ? "Ver mais perguntas"
                                : "Ver mais";


                        const closeLabel =
                            isFaqButton
                                ? "Ocultar perguntas"
                                : "Ver menos";


                        label.textContent =
                            isOpen
                                ? closeLabel
                                : defaultLabel;

                    }


                    if(isOpen){

                        panel
                            .querySelectorAll(
                                ".reveal"
                            )
                            .forEach(el=>{

                                el.classList.add(
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

    const closeFaq =
        item=>{

            const button =
                item?.querySelector(
                    ".faq-question"
                );


            const answer =
                item?.querySelector(
                    ".faq-answer"
                );


            if(!button || !answer) return;


            item.classList.remove(
                "active"
            );


            button.setAttribute(
                "aria-expanded",
                "false"
            );


            answer.style.maxHeight =
                "0px";

        };


    root
        .querySelectorAll(
            ".faq-question"
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const item =
                        button.closest(
                            ".faq-item"
                        );


                    const answer =
                        item?.querySelector(
                            ".faq-answer"
                        );


                    if(
                        !item ||
                        !answer
                    ){

                        return;

                    }


                    const wasOpen =
                        item.classList.contains(
                            "active"
                        );


                    /*
                       Fecha todas as restantes
                    */

                    root
                        .querySelectorAll(
                            ".faq-item.active"
                        )
                        .forEach(other=>{

                            if(
                                other !== item
                            ){

                                closeFaq(
                                    other
                                );

                            }

                        });


                    /*
                       Se já estava aberta,
                       fecha-a.
                    */

                    if(wasOpen){

                        closeFaq(
                            item
                        );

                        return;

                    }


                    /*
                       Abre a pergunta actual.
                    */

                    item.classList.add(
                        "active"
                    );


                    button.setAttribute(
                        "aria-expanded",
                        "true"
                    );


                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                }
            );

        });


    /* ======================================================
       RESIZE
       Mantém o FAQ correcto após rotação,
       resize ou mudança de largura.
       ====================================================== */

    window.addEventListener(
        "resize",
        ()=>{

            root
                .querySelectorAll(
                    ".faq-item.active .faq-answer"
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
   WHATSAPP
   ========================================================== */

function openWhats(message){

    window.open(

        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,

        "_blank"

    );

}
