/* ==========================================================
   AD LIFESTYLE V2
   ALPHA.JS
   ALPHA VMAX — PREMIUM PRODUCT PAGE
   Modelo estrutural: iSMART S3 / AlphaMeta
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

/* ==========================================================
   CONFIG
   ========================================================== */

const PRODUCT_IMAGE =
    "./assets/products/alpha.png";

const WHATSAPP_NUMBER =
    "244924964666";

/* ==========================================================
   LOAD
   ========================================================== */

export function loadAlpha(){

    applyTheme("alpha");

    const app =
        document.getElementById("app");

    if(!app) return;

    app.innerHTML = `

        <div
            class="page-alpha"
            data-product-page="alpha-vmax">

            ${hero()}
            ${overview()}
            ${composition()}
            ${benefits()}
            ${productDetail()}
            ${ingredients()}
            ${usage()}
            ${performance()}
            ${faq()}
            ${information()}
            ${cta()}

        </div>

    `;

    initialiseAlpha();
}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section
        class="section hero alpha-hero"
        id="alpha-top">

        <div
            class="alpha-hero-atmosphere"
            aria-hidden="true">

            <span class="alpha-orb alpha-orb-1"></span>
            <span class="alpha-orb alpha-orb-2"></span>

            <span class="alpha-orbit alpha-orbit-1"></span>
            <span class="alpha-orbit alpha-orbit-2"></span>

        </div>

        <div class="container alpha-hero-grid">

            <div class="alpha-hero-copy reveal">

                <span class="alpha-eyebrow">
                    ALPHA VMAX · PREMIUM PERFORMANCE
                </span>

                <h1 class="alpha-hero-title">
                    Alpha
                    <span>Vmax.</span>
                </h1>

                <p class="alpha-hero-description">
                    Uma fórmula de inspiração botânica,
                    concebida para integrar uma rotina
                    masculina orientada para vitalidade,
                    energia, desempenho e bem-estar.
                </p>

                <div class="alpha-hero-pills">

                    <span class="alpha-hero-pill">
                        Cordyceps
                    </span>

                    <span class="alpha-hero-pill">
                        Bagas de Goji
                    </span>

                    <span class="alpha-hero-pill">
                        Ganoderma
                    </span>

                    <span class="alpha-hero-pill">
                        Grainhas de Uva
                    </span>

                </div>

                <div class="alpha-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyAlpha">

                        Comprar agora

                    </button>

                    <button
                        type="button"
                        class="btn btn-glass"
                        id="alphaComposition"
                        data-scroll="#alpha-composition">

                        Ver composição

                    </button>

                </div>

                <div class="alpha-hero-meta">

                    <div>

                        <strong>
                            Botânico
                        </strong>

                        <span>
                            Matérias-primas apresentadas
                        </span>

                    </div>

                    <div>

                        <strong>
                            Vitalidade
                        </strong>

                        <span>
                            Proposta de bem-estar
                        </span>

                    </div>

                    <div>

                        <strong>
                            Performance
                        </strong>

                        <span>
                            Lifestyle activo
                        </span>

                    </div>

                </div>

            </div>


            <div class="alpha-hero-product reveal-right">

                <div class="alpha-product-aura"></div>

                <div
                    class="alpha-product-ring
                           alpha-product-ring-1">
                </div>

                <div
                    class="alpha-product-ring
                           alpha-product-ring-2">
                </div>

                <div class="alpha-product-grid"></div>

                <img
                    src="${PRODUCT_IMAGE}"
                    alt="Alpha Vmax"
                    loading="eager"
                    decoding="async"
                    class="alpha-hero-product-image"
                >

                <div class="alpha-product-caption">

                    <strong>
                        ALPHA VMAX
                    </strong>

                    <span>
                        PREMIUM PERFORMANCE
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
        id="alpha-overview"
        class="section alpha-overview-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="eyebrow">
                    VISÃO GERAL
                </span>

                <h2 class="section-title">

                    Vitalidade.

                    <span>
                        Energia. Performance.
                    </span>

                </h2>

                <p class="lead">
                    O Alpha Vmax é apresentado como um complemento
                    para uma rotina masculina orientada para bem-estar,
                    disciplina, energia e vitalidade.
                </p>

            </div>

            <div class="alpha-overview-grid">

                ${overviewCard(
                    "01",
                    "Vitalidade",
                    "Uma proposta orientada para integrar uma rotina masculina de bem-estar.",
                    "✦"
                )}

                ${overviewCard(
                    "02",
                    "Energia",
                    "A comunicação do produto associa a fórmula a energia e disposição.",
                    "⚡"
                )}

                ${overviewCard(
                    "03",
                    "Botânicos",
                    "Cordyceps, bagas de Goji, Ganoderma e grainhas de uva.",
                    "◇"
                )}

                ${overviewCard(
                    "04",
                    "Performance",
                    "Uma proposta associada a uma rotina activa e disciplinada.",
                    "◉"
                )}

            </div>

            <div class="alpha-overview-note reveal">

                <strong>
                    Uma proposta de rotina, não apenas de produto.
                </strong>

                <p>
                    O conceito Alpha Vmax combina a fórmula apresentada
                    com uma visão de disciplina, consistência, actividade
                    física e hábitos de bem-estar.
                </p>

            </div>

        </div>

    </section>

    `;
}


function overviewCard(
    number,
    title,
    text,
    icon
){

    return `

    <article class="alpha-overview-card reveal">

        <span class="alpha-card-number">
            ${number}
        </span>

        <div
            class="alpha-card-icon"
            aria-hidden="true">

            ${icon}

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
        id="alpha-composition"
        class="section alpha-composition">

        <div class="container">

            <div class="alpha-section-heading reveal">

                <span class="eyebrow">
                    COMPOSIÇÃO
                </span>

                <h2 class="section-title">

                    Uma composição

                    <span>
                        de inspiração botânica.
                    </span>

                </h2>

                <p>
                    A apresentação do produto destaca quatro
                    matérias-primas principais, associadas no
                    material a energia, vitalidade, circulação
                    e bem-estar.
                </p>

            </div>


            <div class="alpha-composition-grid">

                ${ingredientCard(
                    "01",
                    "Cordyceps",
                    "Ingrediente botânico apresentado no material do produto como associado à energia e vitalidade.",
                    "⚡"
                )}

                ${ingredientCard(
                    "02",
                    "Bagas de Goji",
                    "Ingrediente vegetal apresentado como parte da composição botânica do Alpha Vmax.",
                    "◉"
                )}

                ${ingredientCard(
                    "03",
                    "Ganoderma",
                    "Cogumelo utilizado tradicionalmente em preparações orientadas para bem-estar.",
                    "◇"
                )}

                ${ingredientCard(
                    "04",
                    "Grainhas de Uva",
                    "Ingrediente vegetal apresentado no material em associação com circulação e bem-estar cardiovascular.",
                    "✦"
                )}

            </div>


            ${moreButton(
                "composition",
                "Ver detalhes da composição",
                "Ocultar detalhes da composição",

                `

                <div class="alpha-detail-grid">

                    ${detailCard(
                        "01 — CORDYCEPS",
                        "Energia e vitalidade",
                        "O Cordyceps é apresentado no material de comunicação do Alpha Vmax como uma das matérias-primas orgânicas da fórmula.",
                        [
                            "Matéria-prima de origem botânica",
                            "Associado à energia no material do produto",
                            "Integra a composição Alpha Vmax"
                        ]
                    )}

                    ${detailCard(
                        "02 — BAGAS DE GOJI",
                        "Botânico seleccionado",
                        "As bagas de Goji aparecem entre as matérias-primas orgânicas apresentadas para o Alpha Vmax.",
                        [
                            "Ingrediente vegetal",
                            "Parte da composição botânica",
                            "Associado à vitalidade no material apresentado"
                        ]
                    )}

                    ${detailCard(
                        "03 — GANODERMA",
                        "Cogumelo tradicional",
                        "O Ganoderma é apresentado como uma das matérias-primas orgânicas utilizadas na formulação.",
                        [
                            "Ingrediente de origem natural",
                            "Tradicionalmente utilizado em produtos de bem-estar",
                            "Integra a fórmula Alpha Vmax"
                        ]
                    )}

                    ${detailCard(
                        "04 — GRAINHAS DE UVA",
                        "Circulação e bem-estar",
                        "As grainhas de uva são destacadas no material do produto como uma das matérias-primas orgânicas.",
                        [
                            "Ingrediente de origem vegetal",
                            "Associado à circulação no material apresentado",
                            "Relacionado com protecção cardiovascular na apresentação"
                        ]
                    )}

                    ${detailCard(
                        "INFORMAÇÃO IMPORTANTE",
                        "Comunicação responsável",
                        "As características apresentadas nesta página baseiam-se no material de apresentação disponibilizado para o Alpha Vmax. Estas informações não constituem diagnóstico, tratamento ou garantia de resultados médicos.",
                        []
                    )}

                </div>

                `
            )}

        </div>

    </section>

    `;
}


function ingredientCard(
    number,
    title,
    text,
    symbol
){

    return `

    <article class="alpha-composition-card reveal">

        <div class="alpha-card-top">

            <span class="alpha-card-number">
                ${number}
            </span>

            <i class="alpha-card-symbol">
                ${symbol}
            </i>

        </div>

        <span class="alpha-composition-label">
            MATÉRIA-PRIMA
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

    <section
        id="alpha-benefits"
        class="section alpha-benefits">

        <div class="container">

            <div class="alpha-benefits-grid">

                <div class="alpha-benefits-copy reveal-left">

                    <span class="eyebrow">
                        DESTAQUES
                    </span>

                    <h2 class="section-title">

                        Uma proposta de

                        <span>
                            vitalidade e performance.
                        </span>

                    </h2>

                    <p class="alpha-benefits-intro">
                        Características apresentadas para uma rotina
                        masculina orientada para vitalidade, energia
                        e performance.
                    </p>

                    <div class="alpha-benefit-checks">

                        ${benefitCheck(
                            "Vitalidade masculina"
                        )}

                        ${benefitCheck(
                            "Energia e disposição"
                        )}

                        ${benefitCheck(
                            "Rotina de bem-estar"
                        )}

                        ${benefitCheck(
                            "Estilo de vida activo"
                        )}

                        ${benefitCheck(
                            "Performance"
                        )}

                        ${benefitCheck(
                            "Longevidade"
                        )}

                    </div>


                    ${moreButton(
                        "benefits",
                        "Ver informações funcionais",
                        "Ocultar informações",

                        `

                        <div class="alpha-detail-grid">

                            ${simpleDetailCard(
                                "VITALIDADE",
                                "Rotina masculina",
                                "O material promocional do Alpha Vmax posiciona o produto dentro de uma proposta de vitalidade e bem-estar masculino."
                            )}

                            ${simpleDetailCard(
                                "PERFORMANCE",
                                "Energia e disciplina",
                                "A proposta da linha combina alimentação, hábitos consistentes, actividade física e desenvolvimento pessoal."
                            )}

                            ${simpleDetailCard(
                                "SAÚDE E BEM-ESTAR",
                                "Comunicação responsável",
                                "Alegações relativas a hormonas, fertilidade, circulação, função renal ou condições cardiovasculares devem ser confirmadas através da documentação oficial e de um profissional de saúde."
                            )}

                        </div>

                        `
                    )}

                </div>


                <div class="alpha-benefits-visual reveal-right">

                    <div class="alpha-benefits-frame">

                        <div class="alpha-benefits-aura"></div>

                        <div class="alpha-benefits-ring"></div>

                        <div class="alpha-benefits-grid-decoration"></div>

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Alpha Vmax"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function benefitCheck(text){

    return `

    <div class="alpha-benefit-check reveal">

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
        id="alpha-product"
        class="section alpha-product-section">

        <div class="container">

            <div class="alpha-section-heading reveal">

                <span class="eyebrow">
                    O PRODUTO
                </span>

                <h2 class="section-title">

                    Uma fórmula de inspiração

                    <span>
                        botânica.
                    </span>

                </h2>

                <p>
                    O Alpha Vmax é apresentado como um complemento
                    de bem-estar masculino, reunindo quatro
                    matérias-primas de origem botânica numa proposta
                    de vitalidade, energia e performance.
                </p>

            </div>


            <div class="alpha-product-detail-grid">

                <div class="alpha-product-detail-visual reveal-left">

                    <div class="alpha-product-detail-frame">

                        <div class="alpha-detail-aura"></div>

                        <div class="alpha-detail-ring"></div>

                        <div
                            class="alpha-detail-ring
                                   alpha-detail-ring-secondary">
                        </div>

                        <div class="alpha-detail-grid-decoration"></div>

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Alpha Vmax"
                            class="alpha-product-detail-image"
                            loading="lazy"
                            decoding="async"
                        >

                        <div class="alpha-detail-caption">

                            <strong>
                                ALPHA VMAX
                            </strong>

                            <span>
                                BOTANICAL PERFORMANCE
                            </span>

                        </div>

                    </div>

                </div>


                <div class="alpha-product-detail-copy reveal-right">

                    <span class="label">
                        ALPHA VMAX
                    </span>

                    <h3>
                        Uma abordagem orientada
                        para a rotina.
                    </h3>

                    <p class="lead">
                        O conceito Alpha Vmax procura integrar produto,
                        disciplina, actividade e hábitos de bem-estar
                        numa experiência coerente.
                    </p>

                    <div class="alpha-product-spec-grid">

                        ${productSpec(
                            "01",
                            "Fórmula",
                            "Inspiração botânica"
                        )}

                        ${productSpec(
                            "02",
                            "Matérias-primas",
                            "4 elementos principais"
                        )}

                        ${productSpec(
                            "03",
                            "Proposta",
                            "Vitalidade e energia"
                        )}

                        ${productSpec(
                            "04",
                            "Lifestyle",
                            "Performance e disciplina"
                        )}

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function productSpec(
    number,
    title,
    text
){

    return `

    <div class="alpha-product-spec">

        <span>
            ${number}
        </span>

        <div>

            <strong>
                ${title}
            </strong>

            <small>
                ${text}
            </small>

        </div>

    </div>

    `;
}


/* ==========================================================
   INGREDIENTS
   ========================================================== */

function ingredients(){

    return `

    <section
        id="alpha-ingredients"
        class="section alpha-ingredients">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    MATÉRIAS-PRIMAS
                </span>

                <h2 class="section-title">

                    Quatro elementos

                    <span>
                        numa fórmula diferenciada.
                    </span>

                </h2>

                <p class="lead">
                    Uma combinação de matérias-primas apresentada
                    para acompanhar uma proposta de bem-estar premium.
                </p>

            </div>


            <div class="alpha-ingredients-grid">

                ${ingredientFeature(
                    "01",
                    "C",
                    "CORDYCEPS",
                    "Energia e vitalidade",
                    "Apresentado no material do produto como ingrediente associado à energia e vitalidade.",
                    "large"
                )}

                ${ingredientFeature(
                    "02",
                    "G",
                    "BAGAS DE GOJI",
                    "Botânico seleccionado",
                    "Uma matéria-prima vegetal integrada na composição botânica apresentada."
                )}

                ${ingredientFeature(
                    "03",
                    "G",
                    "GANODERMA",
                    "Cogumelo tradicional",
                    "Cogumelo tradicionalmente associado a preparações orientadas para bem-estar."
                )}

                ${ingredientFeature(
                    "04",
                    "V",
                    "GRAINHAS DE UVA",
                    "Circulação e bem-estar",
                    "Ingrediente vegetal destacado no material em associação com circulação e bem-estar cardiovascular.",
                    "wide"
                )}

            </div>


            <div class="alpha-ingredient-note reveal">

                <span>
                    ALPHAVMAX
                </span>

                <p>
                    A apresentação do produto identifica a fórmula
                    como uma mistura botânica em pó, reforçando a
                    identidade natural da linha.
                </p>

            </div>

        </div>

    </section>

    `;
}


function ingredientFeature(
    number,
    symbol,
    label,
    title,
    text,
    variant = ""
){

    return `

    <article
        class="alpha-ingredient-feature ${variant} reveal">

        <span class="alpha-feature-number">
            ${number}
        </span>

        <div class="alpha-feature-symbol">
            ${symbol}
        </div>

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
   USAGE
   ========================================================== */

function usage(){

    return `

    <section
        id="alpha-usage"
        class="section alpha-usage">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    MODO DE USO
                </span>

                <h2 class="section-title">

                    Uma rotina

                    <span>
                        progressiva.
                    </span>

                </h2>

                <p class="lead">
                    O material de apresentação disponibilizado
                    indica uma utilização progressiva por caixas.
                </p>

            </div>


            <div class="alpha-usage-grid">

                ${usageStep(
                    "01",
                    "Primeira caixa",
                    "1 saqueta por dia, conforme o material de apresentação do produto."
                )}

                ${usageStep(
                    "02",
                    "Segunda caixa",
                    "1 saqueta a cada 2 dias, conforme o material apresentado."
                )}

                ${usageStep(
                    "03",
                    "Terceira caixa",
                    "1 saqueta a cada 3 dias, conforme o material apresentado."
                )}

                ${usageStep(
                    "04",
                    "Orientação",
                    "Confirme sempre a indicação presente na embalagem oficial antes da utilização."
                )}

            </div>


            <div class="alpha-usage-note reveal">

                <span class="label">
                    NOTA IMPORTANTE
                </span>

                <p>
                    A utilização deve respeitar a embalagem e as
                    orientações oficiais do produto. Pessoas com
                    doenças, que utilizem medicamentos ou que tenham
                    dúvidas sobre suplementos devem procurar orientação
                    de um profissional de saúde.
                </p>

            </div>

        </div>

    </section>

    `;
}


function usageStep(
    number,
    title,
    text
){

    return `

    <article class="alpha-usage-step reveal">

        <span class="alpha-usage-number">
            ${number}
        </span>

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
   PERFORMANCE
   ========================================================== */

function performance(){

    return `

    <section
        id="alpha-performance"
        class="section alpha-performance">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    FILOSOFIA ALPHA
                </span>

                <h2 class="section-title">

                    Performance começa

                    <span>
                        na rotina.
                    </span>

                </h2>

                <p class="lead">
                    O conceito Alpha Vmax combina disciplina,
                    vitalidade, hábitos saudáveis e desenvolvimento pessoal.
                </p>

            </div>


            <div class="alpha-performance-grid">

                ${performanceCard(
                    "V",
                    "Vitalidade",
                    "Uma visão orientada para energia, consistência e bem-estar."
                )}

                ${performanceCard(
                    "E",
                    "Energia",
                    "Uma proposta associada a disposição e actividade."
                )}

                ${performanceCard(
                    "P",
                    "Performance",
                    "Uma abordagem contemporânea à evolução pessoal."
                )}

            </div>


            <div class="alpha-performance-feature reveal">

                <span class="label">
                    AD LIFESTYLE
                </span>

                <h3>
                    O conceito Alpha.
                </h3>

                <p>
                    Mais do que uma fórmula, o conceito Alpha
                    representa uma mentalidade baseada em disciplina,
                    consistência, confiança, actividade física,
                    alimentação equilibrada e evolução contínua.
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

    <article class="alpha-performance-card reveal">

        <div class="alpha-performance-letter">
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

    return `

    <section
        id="alpha-faq"
        class="section alpha-faq">

        <div class="container-sm">

            <div class="section-center reveal">

                <span class="label">
                    PERGUNTAS FREQUENTES
                </span>

                <h2 class="section-title">

                    Tudo sobre

                    <span>
                        o Alpha Vmax.
                    </span>

                </h2>

                <p class="lead">
                    Respostas para as perguntas mais relevantes
                    sobre composição, utilização e posicionamento.
                </p>

            </div>


            <div class="alpha-faq-list">

                ${faqItem(
                    "01",
                    "O que é o Alpha Vmax?",
                    "O Alpha Vmax é apresentado como um produto de inspiração botânica destinado a integrar uma rotina masculina orientada para vitalidade, energia, desempenho e bem-estar.",
                    true
                )}

                ${faqItem(
                    "02",
                    "Quais são os principais ingredientes?",
                    "O material apresentado destaca Cordyceps, bagas de Goji, Ganoderma e grainhas de uva como matérias-primas orgânicas."
                )}

                ${faqItem(
                    "03",
                    "Como é apresentado o modo de utilização?",
                    "O material fornecido indica 1 saqueta por dia na primeira caixa, 1 saqueta a cada 2 dias na segunda e 1 saqueta a cada 3 dias na terceira. Deve ser sempre confirmada a indicação da embalagem oficial."
                )}

                ${faqItem(
                    "04",
                    "O Alpha Vmax substitui uma alimentação saudável?",
                    "Não. Um suplemento não deve substituir uma alimentação equilibrada, actividade física adequada, sono e outros hábitos de saúde."
                )}

                ${faqItem(
                    "05",
                    "O Alpha Vmax é um medicamento?",
                    "A página apresenta o Alpha Vmax como produto de bem-estar e não como medicamento. Alegações relacionadas com doenças ou tratamentos devem ser confirmadas através de documentação oficial e de um profissional de saúde."
                )}

                ${faqItem(
                    "06",
                    "O produto pode ser utilizado por qualquer pessoa?",
                    "A utilização deve seguir as indicações oficiais do produto. Pessoas com condições de saúde, que utilizem medicamentos ou que tenham dúvidas sobre suplementos devem consultar um profissional de saúde antes da utilização."
                )}

                ${faqItem(
                    "07",
                    "O Alpha Vmax garante resultados relacionados com testosterona ou fertilidade?",
                    "Não devem ser apresentadas garantias de resultados médicos. Algumas dessas alegações aparecem no material promocional fornecido, mas devem ser tratadas como alegações do material e não como garantia clínica."
                )}

                ${faqItem(
                    "08",
                    "Onde posso obter mais informações?",
                    "Pode falar directamente com a AD Lifestyle através do WhatsApp para receber informações sobre disponibilidade, produto e aquisição."
                )}

            </div>

        </div>

    </section>

    `;
}


function faqItem(
    number,
    questionText,
    answerText,
    isOpen = false
){

    const id =
        `alpha-faq-${number}`;

    return `

    <article
        class="alpha-faq-item ${isOpen ? "active" : ""}">

        <button
            type="button"
            class="alpha-faq-question"
            aria-expanded="${isOpen}"
            aria-controls="${id}">

            <span class="alpha-faq-number">
                ${number}
            </span>

            <span class="alpha-faq-text">
                ${questionText}
            </span>

            <span
                class="alpha-faq-plus"
                aria-hidden="true">

                ${isOpen ? "−" : "+"}

            </span>

        </button>


        <div
            id="${id}"
            class="alpha-faq-answer"
            aria-hidden="${!isOpen}">

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
        class="section alpha-information-section">

        <div class="container">

            <div class="alpha-information-box reveal">

                <div class="alpha-information-icon">
                    i
                </div>

                <div>

                    <span class="label">
                        INFORMAÇÃO IMPORTANTE
                    </span>

                    <h2>
                        Comunicação responsável
                        sobre o Alpha Vmax
                    </h2>

                    <p>
                        As características, propriedades e alegações
                        apresentadas nesta página foram organizadas
                        a partir do material disponibilizado para
                        o Alpha Vmax.
                    </p>

                    <p>
                        Informações relacionadas com efeitos
                        terapêuticos, alterações fisiológicas ou
                        benefícios clínicos devem ser confirmadas
                        através de documentação técnica, evidência
                        oficial e orientação profissional adequada.
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
        id="alpha-contact"
        class="section alpha-cta">

        <div class="container">

            <div class="alpha-cta-box reveal">

                <div>

                    <span class="alpha-label-light">
                        ALPHA VMAX
                    </span>

                    <h2>

                        Eleve a sua rotina

                        <span>
                            para outro nível.
                        </span>

                    </h2>

                    <p>
                        Descubra uma proposta premium que combina
                        botânicos seleccionados, vitalidade,
                        disciplina e lifestyle.
                    </p>

                </div>


                <div class="alpha-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="alphaWhats">

                        Falar no WhatsApp

                    </button>

                    <button
                        type="button"
                        class="btn btn-glass alpha-btn-dark"
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
   DETAIL HELPERS
   ========================================================== */

function detailCard(
    label,
    title,
    text,
    items = []
){

    return `

    <article class="alpha-detail-card">

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

                    <div class="alpha-detail-list">

                        ${
                            items.map(
                                item => `

                                <div class="alpha-detail-item">

                                    <span class="alpha-detail-check">
                                        ✓
                                    </span>

                                    <span>
                                        ${item}
                                    </span>

                                </div>

                                `
                            ).join("")
                        }

                    </div>

                  `
                : ""
        }

    </article>

    `;
}


function simpleDetailCard(
    label,
    title,
    text
){

    return detailCard(
        label,
        title,
        text,
        []
    );
}


function moreButton(
    key,
    openLabel,
    closeLabel,
    content
){

    const id =
        `alpha-more-${key}`;

    return `

    <div class="alpha-more-wrap">

        <button
            type="button"
            class="alpha-more-toggle"
            data-more-toggle="${key}"
            data-open-label="${openLabel}"
            data-close-label="${closeLabel}"
            aria-expanded="false"
            aria-controls="${id}">

            <span>
                ${openLabel}
            </span>

            <i aria-hidden="true">
                +
            </i>

        </button>


        <div
            id="${id}"
            class="alpha-more-panel"
            data-more-panel="${key}"
            aria-hidden="true">

            ${content}

        </div>

    </div>

    `;
}


/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseAlpha(){

    const root =
        document.querySelector(
            ".page-alpha"
        );

    if(!root) return;


    /* ------------------------------------------------------
       RIPPLE
       ------------------------------------------------------ */

    try{

        root
            .querySelectorAll(
                ".btn, .alpha-more-toggle, .alpha-faq-question"
            )
            .forEach(
                button => ripple(button)
            );

    }catch(error){

        console.warn(
            "Alpha Vmax: ripple não inicializado.",
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
                .alpha-overview-grid .reveal,
                .alpha-composition-grid .reveal,
                .alpha-benefits-grid .reveal,
                .alpha-product-detail-grid .reveal,
                .alpha-ingredients-grid .reveal,
                .alpha-usage-grid .reveal,
                .alpha-performance-grid .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "Alpha Vmax: stagger não inicializado.",
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

            if(
                !trigger ||
                !root.contains(trigger)
            ){
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
       MORE / VER MAIS
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "[data-more-toggle]"
                );

            if(
                !button ||
                !root.contains(button)
            ){
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


            button.classList.toggle(
                "active",
                nextState
            );


            button.setAttribute(
                "aria-expanded",
                String(nextState)
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

            }else{

                panel.style.maxHeight =
                    `${panel.scrollHeight}px`;

                requestAnimationFrame(
                    () => {

                        panel.style.maxHeight =
                            "0px";

                    }
                );

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
       FAQ
       Apenas uma resposta aberta de cada vez
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    ".alpha-faq-question"
                );

            if(
                !button ||
                !root.contains(button)
            ){
                return;
            }

            const item =
                button.closest(
                    ".alpha-faq-item"
                );

            if(!item){
                return;
            }

            const answer =
                item.querySelector(
                    ".alpha-faq-answer"
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
                    ".alpha-faq-item.active"
                )
                .forEach(
                    other => {

                        if(
                            other !== item
                        ){

                            closeAlphaFaq(
                                other
                            );

                        }

                    }
                );


            if(isOpen){

                closeAlphaFaq(
                    item
                );

            }else{

                openAlphaFaq(
                    item,
                    button,
                    answer
                );

            }

        }
    );


    /* ------------------------------------------------------
       PRIMEIRA RESPOSTA VISÍVEL
       ------------------------------------------------------ */

    const firstFaq =
        root.querySelector(
            ".alpha-faq-item"
        );

    if(firstFaq){

        const firstButton =
            firstFaq.querySelector(
                ".alpha-faq-question"
            );

        const firstAnswer =
            firstFaq.querySelector(
                ".alpha-faq-answer"
            );

        if(
            firstButton &&
            firstAnswer
        ){

            openAlphaFaq(
                firstFaq,
                firstButton,
                firstAnswer
            );

        }

    }


    /* ------------------------------------------------------
       IMAGE FALLBACK
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            "img"
        )
        .forEach(
            image => {

                image.addEventListener(
                    "error",
                    function(){

                        const frame =
                            image.closest(
                                `
                                .alpha-hero-product,
                                .alpha-product-detail-frame,
                                .alpha-benefits-frame
                                `
                            );

                        if(frame){

                            frame.classList.add(
                                "image-error"
                            );

                        }

                        image.style.display =
                            "none";

                    },
                    {
                        once:true
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
                    "#buyAlpha, #alphaWhats"
                );

            if(
                !button ||
                !root.contains(button)
            ){
                return;
            }

            openWhatsApp();

        }
    );


    /* ------------------------------------------------------
       HOME
       ------------------------------------------------------ */

    root
        .querySelector(
            "#backHome"
        )
        ?.addEventListener(
            "click",
            () => {

                navigate("/");

            }
        );


    /* ------------------------------------------------------
       RESIZE
       ------------------------------------------------------ */

    window.addEventListener(
        "resize",
        function(){

            root
                .querySelectorAll(
                    ".alpha-faq-item.active .alpha-faq-answer"
                )
                .forEach(
                    answer => {

                        answer.style.maxHeight =
                            `${answer.scrollHeight}px`;

                    }
                );


            root
                .querySelectorAll(
                    ".alpha-more-panel.active"
                )
                .forEach(
                    panel => {

                        panel.style.maxHeight =
                            `${panel.scrollHeight}px`;

                    }
                );

        },
        {
            passive:true
        }
    );

}


/* ==========================================================
   FAQ HELPERS
   ========================================================== */

function openAlphaFaq(
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

    const plus =
        item.querySelector(
            ".alpha-faq-plus"
        );

    if(plus){

        plus.textContent =
            "−";

    }

}


function closeAlphaFaq(
    item
){

    const button =
        item.querySelector(
            ".alpha-faq-question"
        );

    const answer =
        item.querySelector(
            ".alpha-faq-answer"
        );

    const plus =
        item.querySelector(
            ".alpha-faq-plus"
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

        plus.textContent =
            "+";

    }

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(){

    const message =
        "Olá AD Lifestyle! Tenho interesse no Alpha Vmax e gostaria de receber mais informações sobre o produto.";

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
