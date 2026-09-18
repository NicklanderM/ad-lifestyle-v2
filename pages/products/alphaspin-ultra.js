/* ==========================================================
   AD LIFESTYLE V2
   ALPHASPIN ULTRA.JS
   Premium AlphaSpin Ultra Product Page
   Modelo estrutural: iSMART S3
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIG
   ========================================================== */

const PRODUCT_IMAGE =
    "./assets/products/alphaspin-ultra.png";

const WHATSAPP_NUMBER =
    "244924964666";


/* ==========================================================
   LOAD
   ========================================================== */

export function loadAlphaSpinUltra(){

    applyTheme("alphaspin-ultra");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-alphaspin-ultra"
            data-product-page="alphaspin-ultra">

            ${hero()}

            ${overview()}

            ${technology()}

            ${benefits()}

            ${productDetail()}

            ${frequency()}

            ${experience()}

            ${routine()}

            ${certifications()}

            ${faq()}

            ${information()}

            ${cta()}

        </div>

    `;

    initialiseAlphaSpinUltra();
}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section class="hero alphaspin-ultra-hero">

        <div class="alphaspin-hero-atmosphere">

            <div class="alphaspin-orb alphaspin-orb-1"></div>

            <div class="alphaspin-orb alphaspin-orb-2"></div>

            <div class="alphaspin-orbit alphaspin-orbit-1"></div>

            <div class="alphaspin-orbit alphaspin-orbit-2"></div>

        </div>

        <div class="container alphaspin-hero-grid">

            <div class="alphaspin-hero-copy reveal">

                <span class="alphaspin-eyebrow">
                    ALPHASPIN ULTRA · SMART LIVING
                </span>

                <h1>
                    AlphaSpin
                    <span>Ultra.</span>
                </h1>

                <p class="alphaspin-hero-description">
                    Uma proposta de tecnologia energética e harmonização,
                    apresentada para integrar o quotidiano, o bem-estar
                    e uma visão futurista de Smart Living.
                </p>

                <div class="alphaspin-hero-pills">

                    <span class="alphaspin-hero-pill">
                        Tecnologia energética
                    </span>

                    <span class="alphaspin-hero-pill">
                        Campo magnético
                    </span>

                    <span class="alphaspin-hero-pill">
                        Harmonização
                    </span>

                    <span class="alphaspin-hero-pill">
                        Smart Living
                    </span>

                </div>

                <div class="alphaspin-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyAlphaSpinUltra">

                        Comprar o AlphaSpin

                    </button>

                    <button
                        type="button"
                        class="btn btn-glass"
                        id="alphaSpinTechnology"
                        data-scroll="#alphaspin-technology">

                        Conhecer a tecnologia

                    </button>

                </div>

            </div>


            <div class="alphaspin-hero-product reveal-right">

                <div class="alphaspin-product-aura"></div>

                <div class="alphaspin-product-ring"></div>

                <div class="alphaspin-product-grid">

                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="AlphaSpin Ultra"
                        loading="eager"
                        decoding="async"
                        class="alphaspin-product-image"
                    >

                </div>

                <div class="alphaspin-product-caption">

                    <strong>
                        ALPHASPIN ULTRA
                    </strong>

                    <span>
                        SMART LIVING TECHNOLOGY
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
        id="alphaspin-overview"
        class="section alphaspin-overview-section">

        <div class="container">

            <div class="section-center alphaspin-section-heading reveal">

                <span class="label">
                    VISÃO GERAL
                </span>

                <h2 class="section-title">
                    Conheça o conceito
                    <span>AlphaSpin Ultra.</span>
                </h2>

                <p class="lead">
                    O AlphaSpin Ultra é apresentado no material promocional
                    como uma proposta de tecnologia energética, harmonização
                    de frequências e Smart Living, orientada para uma experiência
                    integrada entre ambiente, tecnologia e quotidiano.
                </p>

            </div>


            <div class="alphaspin-overview-grid">

                ${overviewCard(
                    "01",
                    "Tecnologia energética",
                    "O produto é apresentado através de uma abordagem energética associada a rotação, frequência e ressonância."
                )}

                ${overviewCard(
                    "02",
                    "Harmonização",
                    "A comunicação utiliza o conceito de harmonização de frequências e do campo electromagnético."
                )}

                ${overviewCard(
                    "03",
                    "Smart Living",
                    "A proposta enquadra o dispositivo em diferentes ambientes e experiências do quotidiano."
                )}

                ${overviewCard(
                    "04",
                    "Visão Ultra",
                    "O design e a comunicação do produto combinam tecnologia, ambiente, experiência e uma identidade premium."
                )}

            </div>


            <div class="alphaspin-overview-note reveal">

                <strong>
                    Uma experiência tecnológica orientada para o ambiente.
                </strong>

                <p>
                    As características, frequências, certificações e efeitos descritos
                    na documentação comercial devem ser interpretados de acordo com
                    a informação oficial correspondente.
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
        "01":"◉",
        "02":"∞",
        "03":"⌁",
        "04":"✦"
    };

    return `

    <article class="alphaspin-overview-card reveal">

        <span class="alphaspin-card-number">
            ${number}
        </span>

        <div
            class="alphaspin-card-icon"
            aria-hidden="true">

            ${symbols[number] || "✦"}

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
   TECHNOLOGY
   ========================================================== */

function technology(){

    return `

    <section
        id="alphaspin-technology"
        class="section alphaspin-technology">

        <div class="container">

            <div class="alphaspin-section-heading alphaspin-heading-dark reveal">

                <span class="eyebrow">
                    TECNOLOGIA
                </span>

                <h2>
                    Uma proposta de
                    <span>harmonização tecnológica.</span>
                </h2>

                <p>
                    O material de apresentação descreve o AlphaSpin Ultra
                    como um dispositivo associado a tecnologia energética,
                    frequência, rotação, ressonância e harmonização.
                </p>

            </div>


            <div class="alphaspin-technology-grid">

                ${technologyCard(
                    "01",
                    "Tecnologia rotativa",
                    "A apresentação descreve uma tecnologia energética rotativa associada ao funcionamento do dispositivo."
                )}

                ${technologyCard(
                    "02",
                    "Revestimento óptico",
                    "O material destaca um revestimento óptico violeta-dourado como parte do conceito tecnológico."
                )}

                ${technologyCard(
                    "03",
                    "Harmonização",
                    "A comunicação do produto utiliza o conceito de harmonização de frequências."
                )}

                ${technologyCard(
                    "04",
                    "Estruturação",
                    "O material promocional afirma que a tecnologia pode ser aplicada à estruturação de líquidos e gases."
                )}

            </div>


            <div class="alphaspin-more-wrap">

                <button
                    type="button"
                    class="alphaspin-more-toggle"
                    data-more-toggle="technology"
                    data-open-label="Ver detalhes da tecnologia"
                    data-close-label="Ocultar detalhes"
                    aria-expanded="false"
                    aria-controls="alphaspin-technology-more">

                    <span>
                        Ver detalhes da tecnologia
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>


                <div
                    id="alphaspin-technology-more"
                    class="alphaspin-more-panel"
                    data-more-panel="technology"
                    aria-hidden="true">

                    <div class="alphaspin-detail-grid">

                        ${detailCard(
                            "01 — ENERGIA",
                            "Frequência e ressonância",
                            "O material promocional descreve a produção de uma frequência rotativa de ressonância magnética como parte do conceito AlphaSpin Ultra.",
                            [
                                "Tecnologia energética apresentada",
                                "Conceito de rotação e ressonância",
                                "Parte da identidade tecnológica Ultra"
                            ]
                        )}

                        ${detailCard(
                            "02 — CAMPO",
                            "Harmonização de frequências",
                            "A apresentação utiliza o conceito de harmonização do campo electromagnético e da frequência do ambiente.",
                            [
                                "Campo electromagnético",
                                "Conceito de sincronização",
                                "Abordagem Smart Living"
                            ]
                        )}

                        ${detailCard(
                            "03 — NATUREZA",
                            "Corpo e ambiente",
                            "O material descreve uma proposta de sincronização entre tecnologia, natureza e campo humano.",
                            [
                                "Visão corpo–ambiente",
                                "Conceito de equilíbrio energético",
                                "Filosofia holística"
                            ]
                        )}

                        ${detailCard(
                            "04 — AMBIENTE",
                            "Smart Living",
                            "A comunicação apresenta o dispositivo como uma solução para acompanhar diferentes ambientes do quotidiano.",
                            [
                                "Casa",
                                "Tecnologia quotidiana",
                                "Experiência familiar"
                            ]
                        )}

                        ${detailCard(
                            "INFORMAÇÃO",
                            "Comunicação responsável",
                            "Algumas afirmações promocionais associam o AlphaSpin Ultra a prevenção ou tratamento de doenças, neutralização de radiações, circulação sanguínea, regeneração celular e outros efeitos de saúde.",
                            [
                                "Conteúdo promocional",
                                "Não constitui garantia clínica",
                                "Confirmar documentação oficial"
                            ],
                            true
                        )}

                    </div>

                </div>

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

    const symbols = {
        "01":"◉",
        "02":"✦",
        "03":"∞",
        "04":"≈"
    };

    return `

    <article class="alphaspin-technology-card reveal">

        <span class="alphaspin-technology-number">
            ${number}
        </span>

        <div
            class="alphaspin-technology-symbol"
            aria-hidden="true">

            ${symbols[number] || "✦"}

        </div>

        <span class="alphaspin-technology-label">
            TECNOLOGIA
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
    text,
    items = [],
    wide = false
){

    return `

    <article
        class="
            alphaspin-detail-card
            ${wide ? "alphaspin-detail-card-wide" : ""}
        ">

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
                    <div class="alphaspin-detail-list">

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


/* ==========================================================
   BENEFITS
   ========================================================== */

function benefits(){

    return `

    <section class="section alphaspin-benefits">

        <div class="container">

            <div class="alphaspin-benefits-grid">

                <div class="alphaspin-benefits-visual reveal-left">

                    <div class="alphaspin-benefits-frame">

                        <div class="alphaspin-benefits-aura"></div>

                        <div class="alphaspin-benefits-ring"></div>

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="AlphaSpin Ultra"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                </div>


                <div class="alphaspin-benefits-copy reveal-right">

                    <span class="label">
                        PROPOSTA ULTRA
                    </span>

                    <h2 class="section-title">
                        Harmonia.
                        Tecnologia.
                        <span>Lifestyle.</span>
                    </h2>

                    <p class="lead">
                        O AlphaSpin Ultra é apresentado dentro de uma proposta
                        de bem-estar holístico, tecnologia energética e Smart Living.
                    </p>


                    <div class="alphaspin-benefit-checks">

                        ${benefitCheck(
                            "Conceito de harmonização de frequências"
                        )}

                        ${benefitCheck(
                            "Tecnologia energética rotativa"
                        )}

                        ${benefitCheck(
                            "Proposta orientada para Smart Living"
                        )}

                        ${benefitCheck(
                            "Experiência pensada para ambientes quotidianos"
                        )}

                        ${benefitCheck(
                            "Conceito de equilíbrio corpo–ambiente"
                        )}

                        ${benefitCheck(
                            "Design tecnológico e premium"
                        )}

                    </div>


                    <div class="alphaspin-more-wrap">

                        <button
                            type="button"
                            class="alphaspin-more-toggle"
                            data-more-toggle="benefits"
                            data-open-label="Ver informações funcionais"
                            data-close-label="Ocultar informações"
                            aria-expanded="false"
                            aria-controls="alphaspin-benefits-more">

                            <span>
                                Ver informações funcionais
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="alphaspin-benefits-more"
                            class="alphaspin-more-panel"
                            data-more-panel="benefits"
                            aria-hidden="true">

                            <div class="alphaspin-detail-grid">

                                ${detailCard(
                                    "HARMONIA",
                                    "Ambiente equilibrado",
                                    "O material promocional descreve o AlphaSpin Ultra como ferramenta para criar um ambiente harmonioso."
                                )}

                                ${detailCard(
                                    "FAMÍLIA",
                                    "Experiência colectiva",
                                    "A comunicação do produto apresenta uma utilização orientada para toda a família."
                                )}

                                ${detailCard(
                                    "SAÚDE",
                                    "Sem promessas clínicas",
                                    "Afirmações relativas a doenças, radiação, trombose, cancro, doenças neurológicas ou outras condições de saúde devem ser confirmadas em documentação oficial e junto de profissionais de saúde.",
                                    [],
                                    true
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

    <div class="alphaspin-benefit-check">

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
        id="alphaspin-product"
        class="section alphaspin-product-section">

        <div class="container">

            <div class="alphaspin-section-heading reveal">

                <span class="eyebrow">
                    O PRODUTO
                </span>

                <h2>
                    AlphaSpin Ultra.
                    <span>Uma identidade tecnológica.</span>
                </h2>

                <p>
                    O dispositivo é apresentado através de um design premium,
                    uma linguagem tecnológica futurista e uma proposta orientada
                    para ambientes do quotidiano.
                </p>

            </div>


            <article class="alphaspin-product-card reveal">


                <div class="alphaspin-product-card-visual">

                    <div class="alphaspin-detail-aura"></div>

                    <div class="alphaspin-detail-ring"></div>

                    <div class="alphaspin-product-detail-grid">

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="AlphaSpin Ultra"
                            loading="lazy"
                            decoding="async"
                            class="alphaspin-product-detail-image"
                        >

                    </div>

                    <span class="alphaspin-detail-caption">
                        ALPHASPIN ULTRA · SMART TECHNOLOGY
                    </span>

                </div>


                <div class="alphaspin-product-card-copy">

                    <span class="label">
                        ALPHASPIN ULTRA
                    </span>

                    <h3>
                        Tecnologia.
                        <span>Experiência Ultra.</span>
                    </h3>

                    <p>
                        O AlphaSpin Ultra é apresentado como uma proposta
                        tecnológica para acompanhar ambientes e experiências
                        do quotidiano dentro do conceito Smart Living.
                    </p>


                    <div class="alphaspin-product-spec-list">

                        ${productSpec(
                            "Tecnologia",
                            "Rotação e ressonância"
                        )}

                        ${productSpec(
                            "Conceito",
                            "Harmonização"
                        )}

                        ${productSpec(
                            "Revestimento",
                            "Óptico violeta-dourado"
                        )}

                        ${productSpec(
                            "Experiência",
                            "Smart Living"
                        )}

                    </div>


                    <div class="alphaspin-more-wrap">

                        <button
                            type="button"
                            class="alphaspin-more-toggle"
                            data-more-toggle="product"
                            data-open-label="Ver mais características"
                            data-close-label="Ocultar características"
                            aria-expanded="false"
                            aria-controls="alphaspin-product-more">

                            <span>
                                Ver mais características
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="alphaspin-product-more"
                            class="alphaspin-more-panel"
                            data-more-panel="product"
                            aria-hidden="true">

                            <div class="alphaspin-detail-list">

                                ${detailItem(
                                    "Tecnologia energética apresentada no material promocional."
                                )}

                                ${detailItem(
                                    "Conceito de frequência rotativa e ressonância."
                                )}

                                ${detailItem(
                                    "Comunicação associada a ambientes domésticos e quotidianos."
                                )}

                                ${detailItem(
                                    "Utilização deve seguir exclusivamente as instruções oficiais do fabricante."
                                )}

                            </div>

                        </div>

                    </div>


                    <button
                        type="button"
                        class="btn btn-primary alphaspin-card-buy"
                        data-buy="product">

                        Adquirir AlphaSpin Ultra

                    </button>

                </div>

            </article>

        </div>

    </section>

    `;
}


function productSpec(
    label,
    value
){

    return `

    <div class="alphaspin-product-spec">

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
   FREQUENCY
   ========================================================== */

function frequency(){

    return `

    <section class="section alphaspin-frequency">

        <div class="container">

            <div class="alphaspin-section-heading reveal">

                <span class="eyebrow">
                    ONDAS ALFA
                </span>

                <h2>
                    Vibrações naturais
                    <span>e frequência.</span>
                </h2>

                <p>
                    O material promocional descreve uma faixa de frequência
                    entre 7,5 Hz e 12,5 Hz, apresentando-a como próxima
                    da frequência natural da Terra.
                </p>

            </div>


            <div class="alphaspin-frequency-grid">

                ${frequencyCard(
                    "7.5",
                    "Hz",
                    "Frequência inferior",
                    "Limite inferior da faixa indicada no material promocional."
                )}

                ${frequencyCard(
                    "12.5",
                    "Hz",
                    "Frequência superior",
                    "Limite superior da faixa indicada na apresentação do produto."
                )}

                <article class="alphaspin-frequency-card alphaspin-frequency-card-wide reveal">

                    <span class="label">
                        RESSONÂNCIA DE SCHUMANN
                    </span>

                    <div class="alphaspin-frequency-highlight">
                        7,82
                        <small>Hz</small>
                    </div>

                    <h3>
                        Referência de frequência
                    </h3>

                    <p>
                        A apresentação associa a frequência de 7,82 Hz
                        à chamada Ressonância de Schumann. Esta referência
                        é aqui apresentada como parte do material promocional.
                    </p>

                </article>

            </div>


            <div class="alphaspin-more-wrap">

                <button
                    type="button"
                    class="alphaspin-more-toggle"
                    data-more-toggle="frequency"
                    data-open-label="Ver contexto da frequência"
                    data-close-label="Ocultar contexto"
                    aria-expanded="false"
                    aria-controls="alphaspin-frequency-more">

                    <span>
                        Ver contexto da frequência
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>


                <div
                    id="alphaspin-frequency-more"
                    class="alphaspin-more-panel"
                    data-more-panel="frequency"
                    aria-hidden="true">

                    <div class="alphaspin-frequency-benefits">

                        ${frequencyBenefit(
                            "♡",
                            "Bem-estar",
                            "O material associa as ondas alfa a uma proposta de equilíbrio e bem-estar."
                        )}

                        ${frequencyBenefit(
                            "◈",
                            "Restauração",
                            "A apresentação utiliza o conceito de restauração celular dentro da sua comunicação."
                        )}

                        ${frequencyBenefit(
                            "≈",
                            "Longevidade",
                            "A comunicação do produto associa a frequência a uma visão de saúde e longevidade."
                        )}

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function frequencyCard(
    number,
    unit,
    title,
    text
){

    return `

    <article class="alphaspin-frequency-card reveal">

        <div class="alphaspin-frequency-number">
            ${number}
        </div>

        <div class="alphaspin-frequency-unit">
            ${unit}
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


function frequencyBenefit(
    icon,
    title,
    text
){

    return `

    <article class="alphaspin-frequency-benefit reveal">

        <div class="alphaspin-frequency-benefit-icon">
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
   EXPERIENCE
   ========================================================== */

function experience(){

    return `

    <section class="section alphaspin-experience">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    SMART EXPERIENCE
                </span>

                <h2 class="section-title">
                    Uma nova perspectiva
                    <span>sobre o Smart Living.</span>
                </h2>

                <p class="lead">
                    Tecnologia, ambiente e experiência combinados num conceito
                    futurista inspirado na visão AlphaSpin Ultra.
                </p>

            </div>


            <div class="alphaspin-experience-grid">

                ${experienceCard(
                    "⚙",
                    "Tecnologia",
                    "Uma proposta associada a tecnologia energética, rotação e ressonância."
                )}

                ${experienceCard(
                    "✦",
                    "Experiência",
                    "Uma experiência orientada para conforto, ambiente e Lifestyle."
                )}

                ${experienceCard(
                    "⌂",
                    "Smart Home",
                    "Pensado no contexto de espaços e ambientes do quotidiano."
                )}

                ${experienceCard(
                    "∞",
                    "Longevidade",
                    "A comunicação do produto associa a experiência a uma visão de vida longa e saudável."
                )}

                ${experienceCard(
                    "◌",
                    "Harmonia",
                    "Conceito centrado na harmonização de frequências e ambiente."
                )}

                ${experienceCard(
                    "◇",
                    "Inovação",
                    "Parte de uma visão internacional de tecnologia e Smart Living."
                )}

            </div>

        </div>

    </section>

    `;
}


function experienceCard(
    icon,
    title,
    text
){

    return `

    <article class="alphaspin-experience-card reveal">

        <div class="alphaspin-experience-icon">
            ${icon}
        </div>

        <span class="alphaspin-experience-number">
            CONCEITO
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
   ROUTINE
   ========================================================== */

function routine(){

    return `

    <section class="section alphaspin-routine">

        <div class="container-sm">

            <div class="alphaspin-section-heading reveal">

                <span class="eyebrow">
                    SMART LIFESTYLE
                </span>

                <h2>
                    Integre a experiência
                    <span>no quotidiano.</span>
                </h2>

                <p>
                    Conheça o produto, consulte a documentação oficial
                    e utilize-o de acordo com as orientações disponibilizadas.
                </p>

            </div>


            <div class="alphaspin-routine-list">

                ${routineStep(
                    "01",
                    "Conheça",
                    "Conheça o AlphaSpin Ultra e leia as informações e especificações oficiais."
                )}

                ${routineStep(
                    "02",
                    "Instale",
                    "Integre o produto no espaço de acordo com as orientações oficiais."
                )}

                <div
                    class="alphaspin-more-panel"
                    data-more-panel="routine"
                    aria-hidden="true"
                    id="alphaspin-routine-more">

                    ${routineStep(
                        "03",
                        "Explore",
                        "Observe a proposta Smart Living e a experiência de utilização no quotidiano."
                    )}

                    ${routineStep(
                        "04",
                        "Lifestyle",
                        "Combine tecnologia, conforto, ambiente e hábitos equilibrados numa rotina consciente."
                    )}

                </div>

            </div>


            <button
                type="button"
                class="alphaspin-more-toggle"
                data-more-toggle="routine"
                data-open-label="Ver mais passos"
                data-close-label="Ocultar passos"
                aria-expanded="false"
                aria-controls="alphaspin-routine-more">

                <span>
                    Ver mais passos
                </span>

                <i aria-hidden="true">
                    +
                </i>

            </button>


            <div class="alphaspin-routine-note reveal">

                <span class="label">
                    NOTA IMPORTANTE
                </span>

                <p>
                    A utilização do dispositivo deve seguir exclusivamente
                    as instruções e especificações oficiais do fabricante.
                    Não substitui cuidados médicos, tratamentos ou recomendações
                    de saúde.
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

    <article class="alphaspin-routine-step reveal">

        <div class="alphaspin-routine-number">
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

    <section class="section alphaspin-certifications">

        <div class="container">

            <div class="alphaspin-section-heading reveal">

                <span class="eyebrow">
                    DOCUMENTAÇÃO
                </span>

                <h2>
                    Tecnologia apresentada
                    <span>com certificações.</span>
                </h2>

                <p>
                    O material disponibilizado refere certificação alemã
                    e diversas certificações internacionais.
                </p>

            </div>


            <div class="alphaspin-certification-grid">

                ${certificateCard(
                    "DE",
                    "Certificação alemã",
                    "Referência apresentada no material promocional fornecido."
                )}

                ${certificateCard(
                    "INT",
                    "Certificações internacionais",
                    "A apresentação menciona várias certificações internacionais."
                )}

                ${certificateCard(
                    "ULTRA",
                    "Identidade AlphaSpin",
                    "Elemento de apresentação associado à linha AlphaSpin Ultra."
                )}

            </div>


            <div class="alphaspin-certification-note reveal">

                <span class="label">
                    VERIFICAÇÃO
                </span>

                <p>
                    A entidade certificadora, número, âmbito, validade
                    e documentação de cada certificação devem ser confirmados
                    directamente nos documentos oficiais correspondentes.
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

    <article class="alphaspin-certificate reveal">

        <div class="alphaspin-certificate-mark">
            ${code}
        </div>

        <div class="alphaspin-certificate-content">

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
   FAQ
   ========================================================== */

function faq(){

    const questions = [

        [
            "O que é o AlphaSpin Ultra?",
            "É um produto apresentado pela comunicação da marca como uma ferramenta de bem-estar e harmonização de frequências integrada na linha Smart Lab Living."
        ],

        [
            "Qual é a proposta tecnológica?",
            "O material promocional descreve tecnologia energética rotativa, ressonância magnética, harmonização de frequências e revestimento óptico violeta-dourado."
        ],

        [
            "Que frequência é indicada?",
            "As informações fornecidas indicam uma faixa de 7,5 Hz a 12,5 Hz e fazem referência à frequência de 7,82 Hz da Ressonância de Schumann."
        ],

        [
            "O AlphaSpin Ultra substitui cuidados médicos?",
            "Não. O dispositivo não deve ser apresentado como substituto de consulta médica, diagnóstico, tratamento ou acompanhamento profissional."
        ],

        [
            "O produto pode ser utilizado por toda a família?",
            "O material promocional apresenta o produto como destinado a toda a família. A adequação para crianças, gestantes, idosos ou pessoas com condições de saúde específicas deve ser confirmada com o fabricante e, quando aplicável, com um profissional de saúde."
        ],

        [
            "O AlphaSpin Ultra cura doenças?",
            "O material promocional fornecido contém afirmações sobre doenças como cancro, trombose e doenças neurodegenerativas. Essas afirmações não são apresentadas nesta página como garantias de cura ou como tratamentos médicos comprovados."
        ],

        [
            "O AlphaSpin Ultra elimina radiação electromagnética?",
            "A comunicação promocional utiliza expressões como harmonização e neutralização de frequências. A página não apresenta isso como uma garantia científica de eliminação ou neutralização de radiação."
        ],

        [
            "Como devo utilizar o AlphaSpin Ultra?",
            "Devem ser seguidas as instruções e especificações oficiais fornecidas pelo fabricante para instalação e utilização."
        ],

        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre disponibilidade e aquisição."
        ]

    ];

    return `

    <section
        id="alphaspin-faq"
        class="section alphaspin-faq-section">

        <div class="container-sm">

            <div class="alphaspin-section-heading reveal">

                <span class="eyebrow">
                    PERGUNTAS FREQUENTES
                </span>

                <h2>
                    Tudo sobre o
                    <span>AlphaSpin Ultra.</span>
                </h2>

                <p>
                    As respostas abrem individualmente para manter
                    a página organizada e facilitar a leitura.
                </p>

            </div>


            <div class="alphaspin-faq-list">

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
        `alphaspin-faq-answer-${number}`;

    return `

    <article class="alphaspin-faq-item">

        <button
            type="button"
            class="alphaspin-faq-question"
            aria-expanded="false"
            aria-controls="${answerId}">

            <span class="alphaspin-faq-number">
                ${number}
            </span>

            <span class="alphaspin-faq-text">
                ${questionText}
            </span>

            <span
                class="alphaspin-faq-plus"
                aria-hidden="true">

                +

            </span>

        </button>


        <div
            id="${answerId}"
            class="alphaspin-faq-answer"
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

    <section class="section alphaspin-information-section">

        <div class="container">

            <div class="alphaspin-information-box reveal">

                <div class="alphaspin-information-icon">
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
                        As informações desta página foram organizadas
                        a partir do material disponibilizado para o
                        AlphaSpin Ultra. Alegações terapêuticas,
                        científicas, sanitárias ou certificações específicas
                        devem ser confirmadas através da documentação oficial
                        antes de serem usadas como garantias ou promessas.
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

    <section class="section alphaspin-cta-section">

        <div class="container">

            <div class="alphaspin-cta-box reveal">

                <span class="alphaspin-label-light">
                    ALPHASPIN ULTRA
                </span>

                <h2>
                    Entre na experiência
                    <span>Smart Living.</span>
                </h2>

                <p>
                    Conheça uma abordagem futurista que combina tecnologia,
                    ambiente, experiência e a identidade premium do
                    AlphaSpin Ultra.
                </p>

                <div class="alphaspin-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="alphaSpinWhats">

                        Falar no WhatsApp

                    </button>

                    <button
                        type="button"
                        class="btn btn-glass"
                        id="backHome">

                        Voltar à AD Lifestyle

                    </button>

                </div>

                <p class="alphaspin-cta-disclaimer">
                    Informação apresentada para fins informativos.
                    Não constitui aconselhamento médico, diagnóstico,
                    tratamento ou garantia de resultados.
                </p>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   HELPERS
   ========================================================== */

function detailItem(text){

    return `

    <div class="alphaspin-detail-item">

        <span
            class="alphaspin-check"
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
   INITIALISE
   ========================================================== */

function initialiseAlphaSpinUltra(){

    const root =
        document.querySelector(
            ".page-alphaspin-ultra"
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
            .forEach(button => ripple(button));

    }catch(error){

        console.warn(
            "AlphaSpin Ultra: ripple não inicializado.",
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
                .alphaspin-overview-grid .reveal,
                .alphaspin-technology-grid .reveal,
                .alphaspin-benefits-grid .reveal,
                .alphaspin-experience-grid .reveal,
                .alphaspin-frequency-grid .reveal,
                .alphaspin-frequency-benefits .reveal,
                .alphaspin-certification-grid .reveal,
                .alphaspin-routine-list .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "AlphaSpin Ultra: stagger não inicializado.",
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
                        ? button.dataset.closeLabel || "Ocultar"
                        : button.dataset.openLabel || "Ver mais";

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
                    ".alphaspin-faq-question"
                );

            if(!button){
                return;
            }

            const item =
                button.closest(
                    ".alphaspin-faq-item"
                );

            if(!item){
                return;
            }

            const answer =
                item.querySelector(
                    ".alphaspin-faq-answer"
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
                    ".alphaspin-faq-item.active"
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
            "img"
        )
        .forEach(image=>{

            image.addEventListener(
                "error",
                function(){

                    const parent =
                        image.closest(
                            ".alphaspin-product-grid, " +
                            ".alphaspin-product-card-visual, " +
                            ".alphaspin-benefits-frame"
                        );

                    if(parent){

                        parent.classList.add(
                            "image-error"
                        );

                    }

                },
                {
                    once:true
                }
            );

        });


    /* ------------------------------------------------------
       BUY
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "#buyAlphaSpinUltra, #alphaSpinWhats, [data-buy]"
                );

            if(!button){
                return;
            }

            const type =
                button.getAttribute(
                    "data-buy"
                );

            let message =
                "Olá AD Lifestyle! Tenho interesse no AlphaSpin Ultra e gostaria de receber mais informações sobre o produto.";

            if(type === "product"){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o AlphaSpin Ultra.";

            }

            if(button.id === "buyAlphaSpinUltra"){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o AlphaSpin Ultra.";

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
                    ".alphaspin-faq-item.active .alphaspin-faq-answer"
                )
                .forEach(answer=>{

                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                });


            root
                .querySelectorAll(
                    ".alphaspin-more-panel.active"
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
            ".alphaspin-faq-question"
        );

    const answer =
        item.querySelector(
            ".alphaspin-faq-answer"
        );

    const plus =
        item.querySelector(
            ".alphaspin-faq-plus"
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


function openFaqPlus(item){

    const plus =
        item.querySelector(
            ".alphaspin-faq-plus"
        );

    if(plus){

        plus.textContent =
            "−";

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
