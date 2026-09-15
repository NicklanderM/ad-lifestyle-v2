/* ==========================================================
   AD LIFESTYLE V2
   ALPHAMETA.JS
   Premium AlphaMeta Product Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIG
   ========================================================== */

const PRODUCT_IMAGE =
    "./assets/products/alphameta.png";

const WHATSAPP_NUMBER =
    "244924964666";


/* ==========================================================
   LOAD
   ========================================================== */

export function loadAlphaMeta(){

    applyTheme("alphameta");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-alphameta"
            data-product-page="alphameta">

            ${hero()}

            ${overview()}

            ${composition()}

            ${benefits()}

            ${productDetail()}

            ${ingredients()}

            ${routine()}

            ${certifications()}

            ${performance()}

            ${faq()}

            ${information()}

            ${cta()}

        </div>

    `;

    initialiseAlphaMeta();

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section class="hero alphameta-hero">

        <div class="alphameta-hero-atmosphere">

            <div class="alphameta-orb alphameta-orb-1"></div>

            <div class="alphameta-orb alphameta-orb-2"></div>

            <div class="alphameta-orbit alphameta-orbit-1"></div>

            <div class="alphameta-orbit alphameta-orbit-2"></div>

        </div>


        <div class="container alphameta-hero-grid">


            <div class="alphameta-hero-copy reveal">

                <span class="alphameta-eyebrow">

                    ALPHAMETA · NUTRIÇÃO

                </span>


                <h1>

                    Alpha
                    <span>Meta.</span>

                </h1>


                <p class="alphameta-hero-description">

                    Uma bebida nutricional de inspiração
                    cereal e botânica, apresentada dentro
                    de uma proposta de nutrição, equilíbrio,
                    vitalidade e bem-estar.

                </p>


                <div class="alphameta-hero-pills">


                    <span class="alphameta-hero-pill">
                        Organic Oryza
                    </span>


                    <span class="alphameta-hero-pill">
                        Arroz Integral Orgânico
                    </span>


                    <span class="alphameta-hero-pill">
                        Nutrição Celular
                    </span>


                    <span class="alphameta-hero-pill">
                        25 Saquetas
                    </span>


                </div>


                <div class="alphameta-hero-actions">


                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyAlphaMeta">

                        Comprar agora

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="alphaMetaComposition"
                        data-scroll="#alphameta-composition">

                        Ver composição

                    </button>


                </div>

            </div>


            <div class="alphameta-hero-product reveal-right">


                <div class="alphameta-product-aura"></div>


                <div class="alphameta-product-ring"></div>


                <div class="alphameta-product-grid">


                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="AlphaMeta"
                        loading="eager"
                    >


                </div>


                <div class="alphameta-product-caption">

                    <strong>ALPHAMETA</strong>

                    <span>
                        ORGANIC ORYZA
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
        id="alphameta-overview"
        class="section alphameta-overview-section">

        <div class="container">


            <div class="section-center reveal">

                <span class="label">
                    VISÃO GERAL
                </span>


                <h2 class="section-title">

                    Conheça o conceito
                    <span>AlphaMeta.</span>

                </h2>


                <p class="lead">

                    A apresentação do produto está centrada
                    no conceito Organic Oryza Cereal Drink,
                    no arroz integral orgânico e numa proposta
                    de nutrição integrada no quotidiano.

                </p>

            </div>


            <div class="alphameta-overview-grid">


                ${overviewCard(
                    "01",
                    "Organic Oryza",
                    "O arroz integral orgânico é apresentado como um dos elementos centrais do produto."
                )}


                ${overviewCard(
                    "02",
                    "Bebida de cereal",
                    "A embalagem apresenta o AlphaMeta como Organic Oryza Cereal Drink."
                )}


                ${overviewCard(
                    "03",
                    "Nutrição celular",
                    "“Nutrição Celular” faz parte da linguagem utilizada na apresentação do produto."
                )}


                ${overviewCard(
                    "04",
                    "Rotina",
                    "O produto é apresentado para integração numa rotina orientada para consistência e bem-estar."
                )}


            </div>


            <div class="alphameta-overview-note reveal">

                <strong>
                    Uma proposta nutricional apresentada
                    com uma identidade tecnológica.
                </strong>

                <p>

                    As características técnicas, científicas
                    e alegações de saúde devem ser confirmadas
                    através da documentação oficial correspondente.

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

    <article class="alphameta-overview-card reveal">

        <span class="alphameta-card-number">
            ${number}
        </span>


        <div
            class="alphameta-card-icon"
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
   COMPOSITION
   ========================================================== */

function composition(){

    return `

    <section
        id="alphameta-composition"
        class="section alphameta-composition">

        <div class="container">


            <div class="alphameta-section-heading reveal">

                <span class="eyebrow">
                    COMPOSIÇÃO
                </span>


                <h2>

                    Uma fórmula de
                    <span>inspiração nutricional.</span>

                </h2>


                <p>

                    O material de apresentação destaca
                    o arroz integral orgânico, a proposta
                    de nutrição celular e uma abordagem
                    tecnológica associada ao produto.

                </p>

            </div>


            <div class="alphameta-composition-grid">


                ${ingredientCard(
                    "01",
                    "🌾",
                    "Arroz Integral Orgânico",
                    "Ingrediente central destacado na apresentação do AlphaMeta."
                )}


                ${ingredientCard(
                    "02",
                    "🧬",
                    "Nutrição Celular",
                    "Conceito utilizado na comunicação nutricional do produto."
                )}


                ${ingredientCard(
                    "03",
                    "⚙",
                    "Tecnologia",
                    "O material fornecido associa o desenvolvimento do produto a tecnologia de processamento avançada."
                )}


                ${ingredientCard(
                    "04",
                    "🌿",
                    "Origem vegetal",
                    "A apresentação destaca uma identidade associada a ingredientes de origem vegetal."
                )}


            </div>


            <div
                class="alphameta-more-wrap"
                data-more-container="composition">

                <button
                    type="button"
                    class="alphameta-more-toggle"
                    data-more-toggle="composition"
                    aria-expanded="false"
                    aria-controls="alphameta-composition-more">

                    <span>
                        Ver detalhes da composição
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>


                <div
                    id="alphameta-composition-more"
                    class="alphameta-more-panel"
                    data-more-panel="composition"
                    aria-hidden="true">

                    <div class="alphameta-detail-grid">


                        ${detailCard(
                            "01 — ORGANIC ORYZA",
                            "Base cereal",
                            `
                            A apresentação comercial identifica
                            o produto como Organic Oryza Cereal Drink,
                            destacando o arroz integral orgânico
                            como elemento central.
                            `,
                            [
                                "Ingrediente de origem vegetal",
                                "Base cereal apresentada no produto",
                                "Integra a identidade nutricional AlphaMeta"
                            ]
                        )}


                        ${detailCard(
                            "02 — NUTRIÇÃO CELULAR",
                            "Conceito AlphaMeta",
                            `
                            A expressão “Nutrição Celular” é utilizada
                            na comunicação fornecida para representar
                            o posicionamento nutricional do produto.
                            `,
                            [
                                "Posicionamento nutricional",
                                "Conceito ligado à comunicação celular",
                                "Parte da apresentação do produto"
                            ]
                        )}


                        ${detailCard(
                            "03 — TECNOLOGIA",
                            "Processamento",
                            `
                            O material fornecido associa o AlphaMeta
                            à utilização de tecnologia de processamento
                            avançada.
                            `,
                            [
                                "Tecnologia apresentada pela marca",
                                "Processamento especializado",
                                "Posicionamento tecnológico"
                            ]
                        )}


                        ${detailCard(
                            "04 — NATURALIDADE",
                            "Origem e proposta",
                            `
                            A apresentação destaca uma proposta associada
                            a ingredientes de origem vegetal e a uma visão
                            nutricional orientada para o quotidiano.
                            `,
                            [
                                "Ingrediente vegetal",
                                "Identidade ligada ao cereal",
                                "Proposta nutricional"
                            ]
                        )}


                        <article class="alphameta-detail-card alphameta-detail-card-wide">

                            <span class="label">
                                INFORMAÇÃO IMPORTANTE
                            </span>


                            <h3>
                                Comunicação responsável
                            </h3>


                            <p>

                                Algumas apresentações promocionais
                                do AlphaMeta atribuem ao produto efeitos
                                relacionados com imunidade, metabolismo,
                                envelhecimento, doenças e outras condições
                                de saúde.

                            </p>


                            <p>

                                Nesta página, essas afirmações não são
                                apresentadas como resultados clínicos
                                comprovados ou garantidos.

                            </p>

                        </article>


                    </div>

                </div>

            </div>


        </div>

    </section>

    `;

}


function ingredientCard(
    number,
    symbol,
    title,
    text
){

    return `

    <article class="alphameta-ingredient-card reveal">


        <span class="alphameta-ingredient-number">
            ${number}
        </span>


        <div
            class="alphameta-ingredient-symbol"
            aria-hidden="true">

            ${symbol}

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


function detailCard(
    label,
    title,
    text,
    items = []
){

    return `

    <article class="alphameta-detail-card">


        <span class="label">
            ${label}
        </span>


        <h3>
            ${title}
        </h3>


        <p>
            ${text}
        </p>


        ${
            items.length
                ? `
                    <div class="alphameta-detail-list">

                        ${items
                            .map(item => detailItem(item))
                            .join("")
                        }

                    </div>
                  `
                : ""
        }


    </article>

    `;

}


function detailItem(text){

    return `

    <div class="alphameta-detail-item">

        <span
            class="alphameta-check"
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
   BENEFITS
   ========================================================== */

function benefits(){

    return `

    <section
        class="section alphameta-benefits">

        <div class="container">


            <div class="alphameta-benefits-grid">


                <div class="alphameta-benefits-visual reveal-left">

                    <div class="alphameta-benefits-frame">

                        <div class="alphameta-benefits-aura"></div>


                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="AlphaMeta"
                            loading="lazy"
                        >

                    </div>

                </div>


                <div class="alphameta-benefits-copy reveal-right">


                    <span class="label">
                        DESTAQUES
                    </span>


                    <h2 class="section-title">

                        Nutrição.
                        Equilíbrio.
                        <span>Vitalidade.</span>

                    </h2>


                    <p class="lead">

                        O AlphaMeta é apresentado como uma
                        solução nutricional integrada numa
                        filosofia de consistência, bem-estar
                        e rotina activa.

                    </p>


                    <div class="alphameta-check-list">


                        ${benefitCheck(
                            "Nutrição orientada para uma rotina equilibrada"
                        )}


                        ${benefitCheck(
                            "Proposta associada a ingredientes de origem vegetal"
                        )}


                        ${benefitCheck(
                            "Conceito de nutrição celular"
                        )}


                        ${benefitCheck(
                            "Integração numa rotina activa"
                        )}


                        ${benefitCheck(
                            "Identidade ligada ao cereal e à tecnologia"
                        )}


                        ${benefitCheck(
                            "Apresentação dentro da filosofia de bem-estar AD Lifestyle"
                        )}


                    </div>


                    <div
                        class="alphameta-more-wrap"
                        data-more-container="benefits">


                        <button
                            type="button"
                            class="alphameta-more-toggle"
                            data-more-toggle="benefits"
                            aria-expanded="false"
                            aria-controls="alphameta-benefits-more">

                            <span>
                                Ver informações funcionais
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="alphameta-benefits-more"
                            class="alphameta-more-panel"
                            data-more-panel="benefits"
                            aria-hidden="true">


                            <div class="alphameta-detail-grid">


                                ${detailCard(
                                    "VITALIDADE",
                                    "Rotina activa",
                                    `
                                    O material promocional associa
                                    o AlphaMeta a energia, vitalidade
                                    e construção de uma rotina activa.
                                    `
                                )}


                                ${detailCard(
                                    "METABOLISMO",
                                    "Conceito celular",
                                    `
                                    A apresentação utiliza conceitos
                                    relacionados com metabolismo,
                                    restauração, regeneração e
                                    protecção celular.
                                    `
                                )}


                                ${detailCard(
                                    "IMUNIDADE",
                                    "Defesa do organismo",
                                    `
                                    O material fornecido associa
                                    o produto a uma proposta de
                                    suporte à imunidade.
                                    `
                                )}


                                ${detailCard(
                                    "SAÚDE",
                                    "Sem promessas médicas",
                                    `
                                    Afirmações relativas a doenças,
                                    gravidez, bebés, tratamentos,
                                    cura ou prevenção não são tratadas
                                    nesta página como garantias clínicas.
                                    `
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

    <div class="alphameta-benefit-check">

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
   PRODUCT DETAIL
   ========================================================== */

function productDetail(){

    return `

    <section
        class="section alphameta-product-section">

        <div class="container">


            <div class="alphameta-product-detail-grid">


                <div class="alphameta-product-detail-frame reveal-left">


                    <div class="alphameta-detail-aura"></div>

                    <div class="alphameta-detail-ring"></div>

                    <div class="alphameta-detail-decoration"></div>


                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="AlphaMeta"
                        class="alphameta-product-detail-image"
                        loading="lazy"
                    >


                    <div class="alphameta-detail-caption">

                        ORGANIC ORYZA
                        ·
                        CEREAL DRINK

                    </div>


                </div>


                <div class="alphameta-product-detail-copy reveal-right">


                    <span class="label">
                        O PRODUTO
                    </span>


                    <h2 class="section-title">

                        AlphaMeta
                        <span>Organic Oryza.</span>

                    </h2>


                    <p class="lead">

                        A própria apresentação comercial
                        identifica o produto como Organic Oryza
                        Cereal Drink, colocando o cereal e o arroz
                        integral orgânico no centro da sua identidade.

                    </p>


                    <div class="alphameta-spec-grid">


                        ${productSpec(
                            "Formato",
                            "Bebida em pó"
                        )}


                        ${productSpec(
                            "Ingrediente destacado",
                            "Arroz integral orgânico"
                        )}


                        ${productSpec(
                            "Quantidade",
                            "25 saquetas"
                        )}


                        ${productSpec(
                            "Conceito",
                            "Nutrição celular"
                        )}


                    </div>


                    <div class="alphameta-product-highlight">


                        <strong>
                            Organic Oryza Cereal Drink
                        </strong>


                        <p>

                            Uma apresentação centrada
                            no cereal, na nutrição e numa
                            experiência integrada na rotina.

                        </p>


                    </div>


                </div>


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

    <div class="alphameta-product-spec">

        <span>
            ${label}
        </span>

        <strong>
            ${value}
        </strong>

    </div>

    `;

}


/* ==========================================================
   INGREDIENTS / CONCEPT
   ========================================================== */

function ingredients(){

    return `

    <section
        class="section alphameta-ingredients">

        <div class="container">


            <div class="alphameta-section-heading reveal">


                <span class="eyebrow">
                    CONCEITO NUTRICIONAL
                </span>


                <h2>

                    A essência do
                    <span>AlphaMeta.</span>

                </h2>


                <p>

                    Uma identidade construída em torno
                    do cereal, da tecnologia e de uma visão
                    moderna de nutrição e bem-estar.

                </p>


            </div>


            <div class="alphameta-concept-grid">


                ${conceptCard(
                    "01",
                    "O",
                    "Organic Oryza",
                    "O arroz integral orgânico é um dos elementos centrais destacados na apresentação."
                )}


                ${conceptCard(
                    "02",
                    "N",
                    "Nutrição Celular",
                    "Conceito utilizado para enquadrar a proposta nutricional do AlphaMeta."
                )}


                ${conceptCard(
                    "03",
                    "T",
                    "Tecnologia",
                    "A apresentação associa o produto a uma abordagem tecnológica de processamento."
                )}


                ${conceptCard(
                    "04",
                    "A",
                    "Naturalidade",
                    "Cereal, origem vegetal e nutrição fazem parte da identidade comunicada."
                )}


            </div>


            <div class="alphameta-concept-wide reveal">


                <span class="label">
                    ALPHAMETA
                </span>


                <h3>
                    Organic Oryza Cereal Drink
                </h3>


                <p>

                    A designação presente na embalagem reforça
                    a identidade do AlphaMeta enquanto bebida
                    nutricional à base de cereal.

                </p>


            </div>


        </div>

    </section>

    `;

}


function conceptCard(
    number,
    symbol,
    title,
    text
){

    return `

    <article class="alphameta-concept-card reveal">


        <span class="alphameta-concept-number">
            ${number}
        </span>


        <div class="alphameta-concept-symbol">
            ${symbol}
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
   ROUTINE
   ========================================================== */

function routine(){

    return `

    <section
        class="section alphameta-routine">

        <div class="container-sm">


            <div class="alphameta-section-heading reveal">


                <span class="eyebrow">
                    UTILIZAÇÃO
                </span>


                <h2>

                    Uma rotina simples
                    e <span>consistente.</span>

                </h2>


                <p>

                    As indicações abaixo reproduzem
                    o material de apresentação fornecido
                    para o produto. A embalagem oficial
                    deve prevalecer.

                </p>


            </div>


            <div class="alphameta-routine-list">


                ${routineStep(
                    "01",
                    "Preparação",
                    "Verter 1 saqueta em 300 ml a 1 litro de água, conforme a indicação apresentada."
                )}


                ${routineStep(
                    "02",
                    "Rotina intensiva",
                    "O material fornecido indica 3 utilizações por dia antes das refeições durante pelo menos 3 meses."
                )}


                ${routineStep(
                    "03",
                    "Manutenção",
                    "A apresentação indica 1 a 2 utilizações por dia para manutenção."
                )}


                ${routineStep(
                    "04",
                    "Confirmação",
                    "Consultar sempre as instruções, composição e recomendações presentes na embalagem oficial."
                )}


            </div>


            <div class="alphameta-routine-note reveal">


                <span class="label">
                    INFORMAÇÃO IMPORTANTE
                </span>


                <p>

                    No caso de crianças, gravidez,
                    amamentação, doenças ou utilização
                    de medicamentos, a utilização deve
                    ser previamente avaliada por um
                    profissional de saúde.

                </p>


            </div>


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

    <article class="alphameta-routine-step reveal">


        <div class="alphameta-routine-number">
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
   CERTIFICATIONS
   ========================================================== */

function certifications(){

    return `

    <section
        class="section alphameta-certifications">

        <div class="container">


            <div class="alphameta-section-heading reveal">


                <span class="eyebrow">
                    DOCUMENTAÇÃO
                </span>


                <h2>

                    Apresentação e
                    <span>certificações.</span>

                </h2>


                <p>

                    O material disponibilizado apresenta
                    referências visuais a certificações
                    europeias e Halal.

                </p>


            </div>


            <div class="alphameta-certification-grid">


                ${certificateCard(
                    "CERT",
                    "Certificação",
                    "Documento apresentado no material fornecido."
                )}


                ${certificateCard(
                    "ANNEX",
                    "Anexo",
                    "Documento complementar apresentado no material."
                )}


                ${certificateCard(
                    "HALAL",
                    "Certificação Halal",
                    "A apresentação inclui referência a certificação Halal."
                )}


            </div>


            <div class="alphameta-certification-note reveal">


                <span class="label">
                    NOTA
                </span>


                <p>

                    A validade, entidade certificadora,
                    âmbito, datas e correspondência de
                    qualquer certificação devem ser
                    confirmados através da documentação oficial.

                </p>


            </div>


        </div>

    </section>

    `;

}


function certificateCard(
    code,
    title,
    text
){

    return `

    <article class="alphameta-certificate reveal">


        <div class="alphameta-certificate-mark">
            ${code}
        </div>


        <div>

            <span class="label">
                ${title}
            </span>


            <p>
                ${text}
            </p>

        </div>


    </article>

    `;

}


/* ==========================================================
   PERFORMANCE / PHILOSOPHY
   ========================================================== */

function performance(){

    return `

    <section
        class="section alphameta-performance">

        <div class="container">


            <div class="alphameta-section-heading reveal">


                <span class="eyebrow">
                    FILOSOFIA ALPHAMETA
                </span>


                <h2>

                    Nutrição.
                    Tecnologia.
                    <span>Consistência.</span>

                </h2>


                <p>

                    O conceito AlphaMeta combina uma
                    identidade nutricional baseada em
                    cereal com uma apresentação tecnológica
                    e uma filosofia de rotina.

                </p>


            </div>


            <div class="alphameta-performance-grid">


                ${performanceCard(
                    "N",
                    "Nutrição",
                    "O cereal e a proposta nutricional estão no centro da apresentação."
                )}


                ${performanceCard(
                    "T",
                    "Tecnologia",
                    "A comunicação do produto inclui referências a processamento tecnológico."
                )}


                ${performanceCard(
                    "E",
                    "Equilíbrio",
                    "A identidade do produto é apresentada associada a uma rotina de consistência e bem-estar."
                )}


            </div>


            <div class="alphameta-performance-feature reveal">


                <span class="label">
                    AD LIFESTYLE
                </span>


                <h3>
                    Uma filosofia de hábitos.
                </h3>


                <p>

                    O AlphaMeta é apresentado dentro de
                    uma abordagem que valoriza rotina,
                    consistência, equilíbrio e escolhas
                    conscientes.

                </p>


            </div>


        </div>

    </section>

    `;

}


function performanceCard(
    letter,
    title,
    text
){

    return `

    <article class="alphameta-performance-card reveal">


        <div class="alphameta-performance-letter">
            ${letter}
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
   FAQ
   ========================================================== */

function faq(){

    const questions = [

        [
            "O que é o AlphaMeta?",
            "O AlphaMeta é apresentado como Organic Oryza Cereal Drink, integrado na proposta de nutrição e bem-estar da AD Lifestyle."
        ],

        [
            "Qual é o principal ingrediente destacado?",
            "O material fornecido destaca o arroz integral orgânico como um dos principais elementos da apresentação do produto."
        ],

        [
            "Quantas saquetas contém uma caixa?",
            "Segundo a informação fornecida, uma caixa contém 25 saquetas."
        ],

        [
            "Como é apresentada a utilização?",
            "O material fornecido indica 1 saqueta em 300 ml a 1 litro de água, 3 vezes por dia antes das refeições durante pelo menos 3 meses, e 1 a 2 vezes por dia para manutenção. A indicação presente na embalagem oficial deve prevalecer."
        ],

        [
            "O AlphaMeta substitui uma alimentação equilibrada?",
            "Não. O produto não deve ser apresentado como substituto de uma alimentação variada e equilibrada."
        ],

        [
            "O AlphaMeta é um medicamento?",
            "Nesta página, o AlphaMeta é apresentado como produto nutricional. Não deve ser apresentado como medicamento ou como tratamento de doenças."
        ],

        [
            "O AlphaMeta pode curar doenças?",
            "Algumas apresentações promocionais fazem afirmações relativas a várias condições de saúde. Essas afirmações não são apresentadas nesta página como garantias clínicas ou tratamentos comprovados."
        ],

        [
            "Pode ser utilizado por gestantes, crianças ou bebés?",
            "Essa indicação aparece no material promocional fornecido, mas não deve ser entendida como recomendação universal. Gravidez, amamentação e utilização por crianças devem ser avaliadas com orientação de um profissional de saúde."
        ],

        [
            "O que significam as referências a certificações?",
            "O material disponibilizado apresenta referências visuais a certificações europeias e Halal. A validade, âmbito e entidade certificadora devem ser confirmados na documentação oficial."
        ],

        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre o produto, disponibilidade e aquisição."
        ]

    ];


    return `

    <section
        id="alphameta-faq"
        class="section alphameta-faq">

        <div class="container-sm">


            <div class="alphameta-section-heading reveal">


                <span class="eyebrow">
                    PERGUNTAS FREQUENTES
                </span>


                <h2>

                    Tudo sobre o
                    <span>AlphaMeta.</span>

                </h2>


                <p>

                    Respostas claras sobre apresentação,
                    utilização, composição e informações
                    importantes do produto.

                </p>


            </div>


            <div class="alphameta-faq-list">


                ${questions
                    .map(
                        (item,index) =>
                            faqItem(
                                String(index + 1).padStart(2,"0"),
                                item[0],
                                item[1]
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
        `alphameta-faq-answer-${number}`;

    return `

    <article class="alphameta-faq-item">


        <button
            type="button"
            class="alphameta-faq-question"
            aria-expanded="false"
            aria-controls="${answerId}">


            <span class="alphameta-faq-number">
                ${number}
            </span>


            <span class="alphameta-faq-text">
                ${questionText}
            </span>


            <span
                class="alphameta-faq-plus"
                aria-hidden="true">

                +

            </span>


        </button>


        <div
            id="${answerId}"
            class="alphameta-faq-answer"
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

    <section
        class="section alphameta-information-section">

        <div class="container">


            <div class="alphameta-information-box reveal">


                <div class="alphameta-information-icon">
                    i
                </div>


                <div>


                    <span class="label">
                        COMUNICAÇÃO RESPONSÁVEL
                    </span>


                    <h2>

                        O que está apresentado
                        e o que requer confirmação.

                    </h2>


                    <p>

                        As informações desta página foram
                        organizadas a partir do material fornecido
                        para o AlphaMeta. Alegações terapêuticas,
                        científicas ou sanitárias devem ser
                        confirmadas através de documentação oficial
                        antes de serem utilizadas como garantias
                        ou promessas de resultado.

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

    <section
        class="section alphameta-cta">

        <div class="container">


            <div class="alphameta-cta-box reveal">


                <span class="alphameta-label-light">
                    ALPHAMETA
                </span>


                <h2>

                    Faça da nutrição
                    parte da sua <span>rotina.</span>

                </h2>


                <p>

                    Conheça uma proposta nutricional
                    apresentada a partir do arroz integral
                    orgânico, do conceito Organic Oryza
                    e da filosofia de bem-estar AD Lifestyle.

                </p>


                <div class="alphameta-cta-actions">


                    <button
                        type="button"
                        class="btn btn-primary"
                        id="alphaMetaWhats">

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
   INITIALISE
   ========================================================== */

function initialiseAlphaMeta(){

    const root =
        document.querySelector(
            ".page-alphameta"
        );


    if(!root){
        return;
    }


    /* ------------------------------------------------------
       RIPPLE
       ------------------------------------------------------ */

    try{

        ripple(root);

    }catch(error){

        console.warn(
            "AlphaMeta: ripple não inicializado.",
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
                .alphameta-overview-grid .reveal,
                .alphameta-composition-grid .reveal,
                .alphameta-benefits-grid .reveal,
                .alphameta-concept-grid .reveal,
                .alphameta-routine-list .reveal,
                .alphameta-certification-grid .reveal,
                .alphameta-performance-grid .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "AlphaMeta: stagger não inicializado.",
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


            button.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );


            button.classList.toggle(
                "active",
                !isOpen
            );


            panel.classList.toggle(
                "active",
                !isOpen
            );


            panel.setAttribute(
                "aria-hidden",
                String(isOpen)
            );


            if(!isOpen){

                panel.style.maxHeight =
                    `${panel.scrollHeight}px`;

            }else{

                panel.style.maxHeight =
                    "0px";

            }


            const label =
                button.querySelector(
                    "span"
                );


            if(label){

                label.textContent =
                    !isOpen
                        ? closeMoreLabel(key)
                        : openMoreLabel(key);

            }

        }
    );


    /* ------------------------------------------------------
       FAQ
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    ".alphameta-faq-question"
                );


            if(!button){
                return;
            }


            const item =
                button.closest(
                    ".alphameta-faq-item"
                );


            if(!item){
                return;
            }


            const answer =
                item.querySelector(
                    ".alphameta-faq-answer"
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
                    ".alphameta-faq-item.active"
                )
                .forEach(
                    otherItem => {

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

            }

        }
    );


    /* ------------------------------------------------------
       RESIZE FAQ / DETAILS
       ------------------------------------------------------ */

    window.addEventListener(
        "resize",
        function(){

            root
                .querySelectorAll(
                    `
                    .alphameta-faq-item.active
                    .alphameta-faq-answer
                    `
                )
                .forEach(
                    answer => {

                        answer.style.maxHeight =
                            `${answer.scrollHeight}px`;

                    }
                );


            root
                .querySelectorAll(
                    `
                    .alphameta-more-panel.active
                    `
                )
                .forEach(
                    panel => {

                        panel.style.maxHeight =
                            `${panel.scrollHeight}px`;

                    }
                );

        }
    );


    /* ------------------------------------------------------
       BUY
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "#buyAlphaMeta, #alphaMetaWhats"
                );


            if(!button){
                return;
            }


            openWhatsApp();

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
            ".alphameta-faq-question"
        );


    const answer =
        item.querySelector(
            ".alphameta-faq-answer"
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

}


/* ==========================================================
   MORE LABELS
   ========================================================== */

function openMoreLabel(key){

    const labels = {

        composition:
            "Ver detalhes da composição",

        benefits:
            "Ver informações funcionais"

    };


    return (
        labels[key] ||
        "Ver mais"
    );

}


function closeMoreLabel(key){

    const labels = {

        composition:
            "Ocultar detalhes da composição",

        benefits:
            "Ocultar informações funcionais"

    };


    return (
        labels[key] ||
        "Ocultar"
    );

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(){

    const message =
        "Olá AD Lifestyle! Tenho interesse no AlphaMeta e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
