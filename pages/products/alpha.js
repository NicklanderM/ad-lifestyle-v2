/* ==========================================================
   AD LIFESTYLE V2
   ALPHA.JS
   Premium Alpha Vmax Product Page
   Standardised Product Architecture
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";
const PRODUCT_IMAGE = "./assets/products/alpha.png";


/* ==========================================================
   LOAD
   ========================================================== */

export function loadAlpha(){

    applyTheme("alpha");

    const app = document.getElementById("app");

    if(!app){

        return;

    }


    app.innerHTML = `

        <div
            class="page-alpha"
            data-product-page="alpha-vmax">

            ${alphaHero()}

            ${alphaOverview()}

            ${alphaComposition()}

            ${alphaBenefits()}

            ${alphaProductDetail()}

            ${alphaIngredients()}

            ${alphaUsage()}

            ${alphaPerformance()}

            ${alphaFaq()}

            ${alphaDisclaimer()}

            ${alphaCta()}

        </div>

    `;


    initialiseAlpha();

}


/* ==========================================================
   HERO
   ========================================================== */

function alphaHero(){

    return `

    <section
        class="hero alpha-hero"
        id="alpha-top">


        <div
            class="alpha-hero-atmosphere"
            aria-hidden="true">

            <span class="alpha-orb alpha-orb-1"></span>

            <span class="alpha-orb alpha-orb-2"></span>

            <span class="alpha-orb alpha-orb-3"></span>

            <span class="alpha-orbit alpha-orbit-1"></span>

            <span class="alpha-orbit alpha-orbit-2"></span>

        </div>


        <div class="container hero-grid">


            <!-- ==================================================
                 HERO CONTENT
                 ================================================== -->

            <div class="hero-content reveal">


                <span class="alpha-eyebrow">
                    ALPHA VMAX · PREMIUM PERFORMANCE
                </span>


                <h1 class="hero-title">

                    Alpha
                    <span>
                        Vmax
                    </span>

                </h1>


                <p class="hero-sub">

                    Uma fórmula de inspiração botânica,
                    concebida para integrar uma rotina
                    masculina orientada para vitalidade,
                    energia, desempenho e bem-estar.

                </p>


                <div class="alpha-hero-pills">


                    <span>
                        Cordyceps
                    </span>


                    <span>
                        Bagas de Goji
                    </span>


                    <span>
                        Ganoderma
                    </span>


                    <span>
                        Grainhas de Uva
                    </span>


                </div>


                <div class="hero-actions">


                    <button
                        class="btn btn-primary alpha-btn-primary"
                        id="buyAlpha"
                        type="button">

                        Comprar agora

                    </button>


                    <button
                        class="btn btn-glass alpha-btn-glass"
                        id="alphaComposition"
                        type="button">

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


            <!-- ==================================================
                 HERO PRODUCT
                 ================================================== -->

            <div class="hero-visual reveal-right">


                <div class="alpha-hero-product floating">


                    <div
                        class="alpha-product-aura"
                        aria-hidden="true">
                    </div>


                    <div
                        class="alpha-product-ring alpha-product-ring-1"
                        aria-hidden="true">
                    </div>


                    <div
                        class="alpha-product-ring alpha-product-ring-2"
                        aria-hidden="true">
                    </div>


                    <div
                        class="alpha-product-grid"
                        aria-hidden="true">
                    </div>


                    <img
                        class="parallax"
                        data-speed="35"
                        src="${PRODUCT_IMAGE}"
                        alt="Alpha Vmax"
                        loading="eager"
                    >


                    <div class="alpha-product-caption">


                        <span>
                            ALPHA
                        </span>


                        <strong>
                            VMAX
                        </strong>


                    </div>


                </div>


            </div>


        </div>

    </section>

    `;

}


/* ==========================================================
   OVERVIEW
   ========================================================== */

function alphaOverview(){

    return `

    <section
        class="section alpha-overview-section"
        id="alpha-overview">

        <div class="container">


            <div class="section-center reveal">


                <span class="label">
                    ALPHA VMAX
                </span>


                <h2 class="section-title">

                    Vitalidade.
                    <span>
                        Energia. Performance.
                    </span>

                </h2>


                <p class="lead">

                    O Alpha Vmax é apresentado como um
                    complemento para uma rotina masculina
                    orientada para bem-estar, disciplina,
                    energia e vitalidade.

                </p>


            </div>


            <div class="alpha-overview-grid">


                ${alphaOverviewCard(
                    "01",
                    "Vitalidade",
                    "Uma proposta orientada para integrar uma rotina masculina de bem-estar.",
                    "✦"
                )}


                ${alphaOverviewCard(
                    "02",
                    "Energia",
                    "A comunicação do produto associa a fórmula a energia e disposição.",
                    "⚡"
                )}


                ${alphaOverviewCard(
                    "03",
                    "Botânicos",
                    "Cordyceps, bagas de Goji, Ganoderma e grainhas de uva.",
                    "◇"
                )}


                ${alphaOverviewCard(
                    "04",
                    "Performance",
                    "Uma proposta associada a uma rotina activa e disciplinada.",
                    "◉"
                )}


            </div>


            <div class="alpha-overview-note reveal">


                <div class="alpha-overview-note-icon">
                    ◎
                </div>


                <div>


                    <strong>
                        Uma proposta de rotina, não apenas de produto.
                    </strong>


                    <p>

                        O conceito Alpha Vmax combina a fórmula
                        apresentada com uma visão de disciplina,
                        consistência, actividade física e hábitos
                        de bem-estar.

                    </p>


                </div>


            </div>


        </div>

    </section>

    `;

}


function alphaOverviewCard(number,title,text,icon){

    return `

    <article class="alpha-overview-card reveal">


        <span class="alpha-card-number">
            ${number}
        </span>


        <div class="alpha-card-icon">
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

function alphaComposition(){

    return `

    <section
        class="section alpha-composition"
        id="alpha-composition">

        <div class="container">


            <div class="alpha-section-heading reveal">


                <div>


                    <span class="label">
                        COMPOSIÇÃO
                    </span>


                    <h2 class="section-title">

                        Uma composição
                        <span>
                            de inspiração botânica.
                        </span>

                    </h2>


                </div>


                <p class="lead">

                    A apresentação do produto destaca
                    quatro matérias-primas principais,
                    associadas no material a energia,
                    vitalidade, circulação e bem-estar.

                </p>


            </div>


            <div class="alpha-composition-grid">


                ${ingredient(
                    "01",
                    "Cordyceps",
                    "Ingrediente botânico apresentado no material do produto como associado à energia e vitalidade.",
                    "⚡"
                )}


                ${ingredient(
                    "02",
                    "Bagas de Goji",
                    "Ingrediente vegetal apresentado como parte da composição botânica do Alpha Vmax.",
                    "◉"
                )}


                ${ingredient(
                    "03",
                    "Ganoderma",
                    "Cogumelo utilizado tradicionalmente em preparações orientadas para bem-estar.",
                    "◇"
                )}


                ${ingredient(
                    "04",
                    "Grainhas de Uva",
                    "Ingrediente vegetal apresentado no material em associação com circulação e bem-estar cardiovascular.",
                    "✦"
                )}


            </div>


            <div class="alpha-information">


                <button
                    class="alpha-details-toggle"
                    type="button"
                    aria-expanded="false">

                    <span>
                        Ver detalhes da composição
                    </span>


                    <span class="alpha-details-icon">
                        +
                    </span>

                </button>


                <div class="alpha-details-content">


                    <div class="alpha-details-grid">


                        <article class="alpha-detail-card">


                            <span class="label">
                                01 — CORDYCEPS
                            </span>


                            <h3>
                                Energia e vitalidade
                            </h3>


                            <p>

                                O Cordyceps é apresentado
                                no material de comunicação
                                do Alpha Vmax como uma das
                                matérias-primas orgânicas
                                da fórmula.

                            </p>


                            <div class="alpha-detail-list">


                                ${detailItem(
                                    "Matéria-prima de origem botânica"
                                )}


                                ${detailItem(
                                    "Associado à energia no material do produto"
                                )}


                                ${detailItem(
                                    "Integra a composição Alpha Vmax"
                                )}


                            </div>


                        </article>


                        <article class="alpha-detail-card">


                            <span class="label">
                                02 — BAGAS DE GOJI
                            </span>


                            <h3>
                                Botânico seleccionado
                            </h3>


                            <p>

                                As bagas de Goji aparecem entre
                                as matérias-primas orgânicas
                                apresentadas para o Alpha Vmax.

                            </p>


                            <div class="alpha-detail-list">


                                ${detailItem(
                                    "Ingrediente vegetal"
                                )}


                                ${detailItem(
                                    "Parte da composição botânica"
                                )}


                                ${detailItem(
                                    "Associado à vitalidade no material apresentado"
                                )}


                            </div>


                        </article>


                        <article class="alpha-detail-card">


                            <span class="label">
                                03 — GANODERMA
                            </span>


                            <h3>
                                Cogumelo tradicional
                            </h3>


                            <p>

                                O Ganoderma é apresentado como
                                uma das matérias-primas orgânicas
                                utilizadas na formulação.

                            </p>


                            <div class="alpha-detail-list">


                                ${detailItem(
                                    "Ingrediente de origem natural"
                                )}


                                ${detailItem(
                                    "Tradicionalmente utilizado em produtos de bem-estar"
                                )}


                                ${detailItem(
                                    "Integra a fórmula Alpha Vmax"
                                )}


                            </div>


                        </article>


                        <article class="alpha-detail-card">


                            <span class="label">
                                04 — GRAINHAS DE UVA
                            </span>


                            <h3>
                                Circulação e bem-estar
                            </h3>


                            <p>

                                As grainhas de uva são destacadas
                                no material do produto como uma das
                                matérias-primas orgânicas.

                            </p>


                            <div class="alpha-detail-list">


                                ${detailItem(
                                    "Ingrediente de origem vegetal"
                                )}


                                ${detailItem(
                                    "Associado à circulação no material apresentado"
                                )}


                                ${detailItem(
                                    "Relacionado com protecção cardiovascular na apresentação"
                                )}


                            </div>


                        </article>


                        <article
                            class="alpha-detail-card
                                   alpha-detail-card-wide">


                            <span class="label">
                                INFORMAÇÃO IMPORTANTE
                            </span>


                            <h3>
                                Comunicação responsável
                            </h3>


                            <p>

                                As características apresentadas nesta
                                página baseiam-se no material de
                                apresentação disponibilizado para o
                                Alpha Vmax.

                            </p>


                            <p>

                                Estas informações não constituem
                                diagnóstico, tratamento ou garantia
                                de resultados médicos.

                            </p>


                        </article>


                    </div>


                </div>


            </div>


        </div>

    </section>

    `;

}


function ingredient(number,title,text,icon){

    return `

    <article class="alpha-ingredient-card reveal">


        <div class="alpha-ingredient-top">


            <span>
                ${number}
            </span>


            <i>
                ${icon}
            </i>


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
   BENEFITS
   ========================================================== */

function alphaBenefits(){

    return `

    <section
        class="section alpha-benefits"
        id="alpha-benefits">

        <div class="container">


            <div class="section-center reveal">


                <span class="label">
                    DESTAQUES
                </span>


                <h2 class="section-title">

                    O que acompanha
                    <span>
                        a proposta Alpha Vmax.
                    </span>

                </h2>


                <p class="lead">

                    Características apresentadas para
                    uma rotina masculina orientada para
                    vitalidade, energia e performance.

                </p>


            </div>


            <div class="alpha-benefit-grid">


                ${benefit(
                    "01",
                    "Vitalidade masculina",
                    "O material posiciona o produto dentro de uma proposta de vitalidade e bem-estar.",
                    "✦"
                )}


                ${benefit(
                    "02",
                    "Energia e disposição",
                    "A comunicação associa a composição a energia e disposição.",
                    "⚡"
                )}


                ${benefit(
                    "03",
                    "Rotina de bem-estar",
                    "Pensado para acompanhar hábitos consistentes e uma rotina activa.",
                    "◇"
                )}


                ${benefit(
                    "04",
                    "Estilo de vida activo",
                    "Integra-se numa abordagem que valoriza movimento e disciplina.",
                    "◉"
                )}


                ${benefit(
                    "05",
                    "Performance",
                    "Uma proposta orientada para uma visão contemporânea de performance pessoal.",
                    "◆"
                )}


                ${benefit(
                    "06",
                    "Longevidade",
                    "O conceito Alpha apresenta uma visão de evolução e consistência a longo prazo.",
                    "∞"
                )}


            </div>


            <div class="alpha-information">


                <button
                    class="alpha-details-toggle"
                    type="button"
                    aria-expanded="false">

                    <span>
                        Ver informações funcionais
                    </span>


                    <span class="alpha-details-icon">
                        +
                    </span>


                </button>


                <div class="alpha-details-content">


                    <div class="alpha-details-grid">


                        <article class="alpha-detail-card">


                            <span class="label">
                                VITALIDADE
                            </span>


                            <h3>
                                Rotina masculina
                            </h3>


                            <p>

                                O material promocional do Alpha Vmax
                                posiciona o produto dentro de uma
                                proposta de vitalidade e bem-estar
                                masculino.

                            </p>


                        </article>


                        <article class="alpha-detail-card">


                            <span class="label">
                                PERFORMANCE
                            </span>


                            <h3>
                                Energia e disciplina
                            </h3>


                            <p>

                                A proposta da linha combina alimentação,
                                hábitos consistentes, actividade física
                                e desenvolvimento pessoal.

                            </p>


                        </article>


                        <article
                            class="alpha-detail-card
                                   alpha-detail-card-wide">


                            <span class="label">
                                SAÚDE E BEM-ESTAR
                            </span>


                            <h3>
                                Comunicação responsável
                            </h3>


                            <p>

                                Alegações relativas a hormonas,
                                fertilidade, circulação, função renal
                                ou condições cardiovasculares devem
                                ser confirmadas através da documentação
                                oficial e de um profissional de saúde.

                            </p>


                        </article>


                    </div>


                </div>


            </div>


        </div>

    </section>

    `;

}


function benefit(number,title,text,icon){

    return `

    <article class="alpha-benefit-card reveal">


        <div class="alpha-benefit-top">


            <span>
                ${number}
            </span>


            <i>
                ${icon}
            </i>


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
   PRODUCT DETAIL
   ========================================================== */

function alphaProductDetail(){

    return `

    <section
        class="section alpha-product-section"
        id="alpha-product">

        <div class="container">


            <div class="alpha-product-detail-grid">


                <!-- ==================================================
                     IMAGEM DO PRODUTO
                     ================================================== -->

                <div class="alpha-product-detail-visual reveal-left">


                    <div class="alpha-product-detail-frame">


                        <div
                            class="alpha-detail-aura"
                            aria-hidden="true">
                        </div>


                        <div
                            class="alpha-detail-ring alpha-detail-ring-1"
                            aria-hidden="true">
                        </div>


                        <div
                            class="alpha-detail-ring alpha-detail-ring-2"
                            aria-hidden="true">
                        </div>


                        <div
                            class="alpha-detail-grid-decoration"
                            aria-hidden="true">
                        </div>


                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Alpha Vmax"
                            class="alpha-product-detail-image"
                            loading="lazy"
                        >


                        <div class="alpha-detail-caption">


                            <span>
                                ALPHA
                            </span>


                            <strong>
                                VMAX
                            </strong>


                        </div>


                    </div>


                </div>


                <!-- ==================================================
                     INFORMAÇÃO DO PRODUTO
                     ================================================== -->

                <div class="alpha-product-detail-copy reveal-right">


                    <span class="label">
                        O PRODUTO
                    </span>


                    <h2 class="section-title">

                        Uma fórmula de inspiração
                        <span>
                            botânica.
                        </span>

                    </h2>


                    <p class="lead">

                        O Alpha Vmax é apresentado como um
                        complemento de bem-estar masculino,
                        reunindo quatro matérias-primas de
                        origem botânica numa proposta de
                        vitalidade, energia e performance.

                    </p>


                    <div class="alpha-product-specs">


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


                    <div class="alpha-product-highlight">


                        <span class="alpha-product-highlight-icon">
                            ✦
                        </span>


                        <div>


                            <strong>
                                Uma abordagem orientada para a rotina.
                            </strong>


                            <p>

                                O conceito Alpha Vmax procura
                                integrar produto, disciplina,
                                actividade e hábitos de bem-estar
                                numa experiência coerente.

                            </p>


                        </div>


                    </div>


                </div>


            </div>


        </div>

    </section>

    `;

}


function productSpec(number,title,text){

    return `

    <div class="alpha-product-spec">


        <span class="alpha-product-spec-number">
            ${number}
        </span>


        <div>


            <strong>
                ${title}
            </strong>


            <span>
                ${text}
            </span>


        </div>


    </div>

    `;

}


/* ==========================================================
   INGREDIENTS / RAW MATERIALS
   ========================================================== */

function alphaIngredients(){

    return `

    <section
        class="section alpha-ingredients"
        id="alpha-ingredients">

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

                    Uma combinação de matérias-primas
                    apresentada para acompanhar uma
                    proposta de bem-estar premium.

                </p>


            </div>


            <div class="alpha-ingredients-grid">


                <article class="alpha-ingredient-feature alpha-ingredient-feature-large reveal">


                    <span class="alpha-feature-number">
                        01
                    </span>


                    <div class="alpha-feature-symbol">
                        C
                    </div>


                    <span class="label">
                        CORDYCEPS
                    </span>


                    <h3>
                        Energia e vitalidade
                    </h3>


                    <p>

                        Apresentado no material do produto
                        como ingrediente associado à energia
                        e vitalidade.

                    </p>


                </article>


                <article class="alpha-ingredient-feature reveal">


                    <span class="alpha-feature-number">
                        02
                    </span>


                    <div class="alpha-feature-symbol">
                        G
                    </div>


                    <span class="label">
                        BAGAS DE GOJI
                    </span>


                    <h3>
                        Botânico seleccionado
                    </h3>


                    <p>

                        Uma matéria-prima vegetal integrada
                        na composição botânica apresentada.

                    </p>


                </article>


                <article class="alpha-ingredient-feature reveal">


                    <span class="alpha-feature-number">
                        03
                    </span>


                    <div class="alpha-feature-symbol">
                        G
                    </div>


                    <span class="label">
                        GANODERMA
                    </span>


                    <h3>
                        Cogumelo tradicional
                    </h3>


                    <p>

                        Cogumelo tradicionalmente associado
                        a preparações orientadas para bem-estar.

                    </p>


                </article>


                <article class="alpha-ingredient-feature alpha-ingredient-feature-wide reveal">


                    <span class="alpha-feature-number">
                        04
                    </span>


                    <div class="alpha-feature-symbol">
                        V
                    </div>


                    <span class="label">
                        GRAINHAS DE UVA
                    </span>


                    <h3>
                        Circulação e bem-estar
                    </h3>


                    <p>

                        Ingrediente vegetal destacado no material
                        em associação com circulação e bem-estar
                        cardiovascular.

                    </p>


                </article>


            </div>


            <div class="alpha-ingredient-note reveal">


                <span>
                    ALPHAVMAX
                </span>


                <p>

                    A apresentação do produto identifica
                    a fórmula como uma mistura botânica
                    em pó, reforçando a identidade natural
                    da linha.

                </p>


            </div>


        </div>

    </section>

    `;

}


/* ==========================================================
   USAGE
   ========================================================== */

function alphaUsage(){

    return `

    <section
        class="section alpha-usage"
        id="alpha-usage">

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

                    A utilização deve respeitar a embalagem
                    e as orientações oficiais do produto.
                    Pessoas com doenças, que utilizem medicamentos
                    ou que tenham dúvidas sobre a utilização de
                    suplementos devem procurar orientação de
                    um profissional de saúde.

                </p>


            </div>


        </div>

    </section>

    `;

}


function usageStep(number,title,text){

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

function alphaPerformance(){

    return `

    <section
        class="section alpha-performance"
        id="alpha-performance">

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

                    O conceito Alpha Vmax combina
                    disciplina, vitalidade, hábitos saudáveis
                    e desenvolvimento pessoal.

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

                    Mais do que uma fórmula, o conceito
                    Alpha representa uma mentalidade baseada
                    em disciplina, consistência, confiança,
                    actividade física, alimentação equilibrada
                    e evolução contínua.

                </p>


            </div>


        </div>

    </section>

    `;

}


function performanceCard(letter,title,text){

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

function alphaFaq(){

    return `

    <section
        class="section alpha-faq"
        id="alpha-faq">

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


                ${question(
                    "01",
                    "O que é o Alpha Vmax?",
                    "O Alpha Vmax é apresentado como um produto de inspiração botânica destinado a integrar uma rotina masculina orientada para vitalidade, energia, desempenho e bem-estar."
                )}


                ${question(
                    "02",
                    "Quais são os principais ingredientes?",
                    "O material apresentado destaca Cordyceps, bagas de Goji, Ganoderma e grainhas de uva como matérias-primas orgânicas."
                )}


                ${question(
                    "03",
                    "Como é apresentado o modo de utilização?",
                    "O material fornecido indica 1 saqueta por dia na primeira caixa, 1 saqueta a cada 2 dias na segunda e 1 saqueta a cada 3 dias na terceira. Deve ser sempre confirmada a indicação da embalagem oficial."
                )}


                ${question(
                    "04",
                    "O Alpha Vmax substitui uma alimentação saudável?",
                    "Não. Um suplemento não deve substituir uma alimentação equilibrada, actividade física adequada, sono e outros hábitos de saúde."
                )}


                ${question(
                    "05",
                    "O Alpha Vmax é um medicamento?",
                    "A página apresenta o Alpha Vmax como produto de bem-estar e não como medicamento. Alegações relacionadas com doenças ou tratamentos devem ser confirmadas através de documentação oficial e de um profissional de saúde."
                )}


                ${question(
                    "06",
                    "O produto pode ser utilizado por qualquer pessoa?",
                    "A utilização deve seguir as indicações oficiais do produto. Pessoas com condições de saúde, que utilizem medicamentos ou que tenham dúvidas sobre suplementos devem consultar um profissional de saúde antes da utilização."
                )}


                ${question(
                    "07",
                    "O Alpha Vmax garante resultados relacionados com testosterona ou fertilidade?",
                    "Não devem ser apresentadas garantias de resultados médicos. Algumas dessas alegações aparecem no material promocional fornecido, mas devem ser tratadas como alegações do material e não como garantia clínica."
                )}


                ${question(
                    "08",
                    "Onde posso obter mais informações?",
                    "Pode falar directamente com a AD Lifestyle através do WhatsApp para receber informações sobre disponibilidade, produto e aquisição."
                )}


            </div>


        </div>

    </section>

    `;

}


function question(number,questionText,answerText){

    const id =
        `alpha-faq-${number}`;


    return `

    <article class="alpha-faq-item">


        <button
            class="alpha-faq-question"
            type="button"
            aria-expanded="false"
            aria-controls="${id}">


            <span class="alpha-faq-number">
                ${number}
            </span>


            <span class="alpha-faq-text">
                ${questionText}
            </span>


            <span class="alpha-faq-icon">
                +
            </span>


        </button>


        <div
            class="alpha-faq-answer"
            id="${id}"
            role="region">


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

function alphaDisclaimer(){

    return `

    <section class="alpha-disclaimer">


        <div class="container">


            <div class="alpha-disclaimer-box reveal">


                <div class="alpha-disclaimer-icon">
                    i
                </div>


                <div>


                    <span class="label">
                        INFORMAÇÃO IMPORTANTE
                    </span>


                    <h3>
                        Comunicação responsável sobre o Alpha Vmax
                    </h3>


                    <p>

                        As características, propriedades e alegações
                        apresentadas nesta página foram organizadas
                        a partir do material disponibilizado para o
                        Alpha Vmax.

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

function alphaCta(){

    return `

    <section
        class="section alpha-cta"
        id="alpha-contact">

        <div class="container">


            <div class="alpha-cta-box reveal">


                <div>


                    <span class="label alpha-label-light">
                        ALPHA VMAX
                    </span>


                    <h2>

                        Eleve a sua rotina
                        <span>
                            para outro nível.
                        </span>

                    </h2>


                    <p>

                        Descubra uma proposta premium que
                        combina botânicos seleccionados,
                        vitalidade, disciplina e lifestyle.

                    </p>


                </div>


                <div class="alpha-cta-actions">


                    <button
                        class="btn btn-primary alpha-btn-primary"
                        id="alphaWhats"
                        type="button">

                        Falar no WhatsApp

                    </button>


                    <button
                        class="btn btn-glass alpha-btn-dark"
                        id="backHome"
                        type="button">

                        Voltar à AD Lifestyle

                    </button>


                </div>


            </div>


        </div>

    </section>

    `;

}


/* ==========================================================
   DETAIL ITEM
   ========================================================== */

function detailItem(text){

    return `

    <div class="alpha-detail-item">


        <span class="alpha-detail-check">
            ✓
        </span>


        <span>
            ${text}
        </span>


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


    if(!root){

        return;

    }


    /* ======================================================
       ANIMATIONS
       ====================================================== */

    try{

        stagger(
            root.querySelectorAll(
                ".alpha-overview-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".alpha-ingredient-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".alpha-benefit-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".alpha-performance-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".alpha-usage-step"
            )
        );


    }catch(error){

        console.warn(
            "Alpha Vmax animations:",
            error
        );

    }


    /* ======================================================
       RIPPLE
       ====================================================== */

    try{

        root
            .querySelectorAll(
                ".btn, " +
                ".alpha-details-toggle, " +
                ".alpha-faq-question"
            )
            .forEach(
                button => {

                    ripple(button);

                }
            );


    }catch(error){

        console.warn(
            "Alpha Vmax ripple:",
            error
        );

    }


    /* ======================================================
       COMPOSITION BUTTON
       ====================================================== */

    const compositionButton =
        root.querySelector(
            "#alphaComposition"
        );


    if(compositionButton){

        compositionButton.addEventListener(
            "click",
            () => {

                const target =
                    root.querySelector(
                        "#alpha-composition"
                    );


                if(target){

                    target.scrollIntoView({

                        behavior:"smooth",

                        block:"start"

                    });

                }

            }
        );

    }


    /* ======================================================
       EXPANDABLE INFORMATION
       ====================================================== */

    root
        .querySelectorAll(
            ".alpha-details-toggle"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const container =
                            button.closest(
                                ".alpha-information"
                            );


                        if(!container){

                            return;

                        }


                        const isOpen =
                            container.classList.contains(
                                "active"
                            );


                        container.classList.toggle(
                            "active",
                            !isOpen
                        );


                        button.setAttribute(
                            "aria-expanded",
                            String(!isOpen)
                        );

                    }
                );

            }
        );


    /* ======================================================
       FAQ
       ====================================================== */

    root
        .querySelectorAll(
            ".alpha-faq-question"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const item =
                            button.closest(
                                ".alpha-faq-item"
                            );


                        if(!item){

                            return;

                        }


                        const isOpen =
                            item.classList.contains(
                                "active"
                            );


                        root
                            .querySelectorAll(
                                ".alpha-faq-item"
                            )
                            .forEach(
                                otherItem => {

                                    if(
                                        otherItem !== item
                                    ){

                                        otherItem.classList.remove(
                                            "active"
                                        );


                                        otherItem
                                            .querySelector(
                                                ".alpha-faq-question"
                                            )
                                            ?.setAttribute(
                                                "aria-expanded",
                                                "false"
                                            );

                                    }

                                }
                            );


                        item.classList.toggle(
                            "active",
                            !isOpen
                        );


                        button.setAttribute(
                            "aria-expanded",
                            String(!isOpen)
                        );

                    }
                );

            }
        );


    /* ======================================================
       HOME
       ====================================================== */

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


    /* ======================================================
       BUY
       ====================================================== */

    root
        .querySelector(
            "#buyAlpha"
        )
        ?.addEventListener(
            "click",
            openWhats
        );


    /* ======================================================
       CTA WHATSAPP
       ====================================================== */

    root
        .querySelector(
            "#alphaWhats"
        )
        ?.addEventListener(
            "click",
            openWhats
        );

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhats(){

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
