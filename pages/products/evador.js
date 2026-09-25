/* ==========================================================
   AD LIFESTYLE V2
   EVADOR.JS
   Premium Evador Product Page
   Modelo estrutural: iSMART S3
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIG
   ========================================================== */

const PRODUCT_IMAGE =
    "./assets/products/evador.png";

const WHATSAPP_NUMBER =
    "244924964666";


/* ==========================================================
   LOAD
   ========================================================== */

export function loadEvador(){

    applyTheme("evador");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-evador"
            data-product-page="evador">

            ${hero()}

            ${overview()}

            ${fragrance()}

            ${identity()}

            ${benefits()}

            ${productDetail()}

            ${routine()}

            ${experience()}

            ${faq()}

            ${information()}

            ${cta()}

        </div>

    `;

    initialiseEvador();
}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section class="hero evador-hero">

        <div class="evador-hero-atmosphere">

            <div class="evador-orb evador-orb-1"></div>

            <div class="evador-orb evador-orb-2"></div>

            <div class="evador-orbit evador-orbit-1"></div>

            <div class="evador-orbit evador-orbit-2"></div>

        </div>


        <div class="container evador-hero-grid">

            <div class="evador-hero-copy reveal">

                <span class="evador-eyebrow">
                    EVADOR · BEYOND FRAGRANCE
                </span>

                <h1>
                    EVA
                    <span>DOR.</span>
                </h1>

                <p class="evador-hero-description">
                    O futuro do perfume. Além da fragrância.
                    Uma experiência refinada que combina beleza,
                    conforto, atenção, confiança e uma identidade
                    olfactiva personalizada.
                </p>


                <div class="evador-hero-pills">

                    <span class="evador-hero-pill">
                        Luxuoso
                    </span>

                    <span class="evador-hero-pill">
                        Refinado
                    </span>

                    <span class="evador-hero-pill">
                        Elegante
                    </span>

                    <span class="evador-hero-pill">
                        Único
                    </span>

                </div>


                <div class="evador-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyEvador">

                        Comprar o Evador

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="evadorDiscover"
                        data-scroll="#evador-fragrance">

                        Descobrir Evador

                    </button>

                </div>

            </div>


            <div class="evador-hero-product reveal-right">

                <div class="evador-product-aura"></div>

                <div class="evador-product-ring"></div>


                <div class="evador-product-grid">

                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="Evador"
                        loading="eager"
                        decoding="async"
                        class="evador-product-image"
                    >

                </div>


                <div class="evador-product-caption">

                    <strong>
                        EVADOR
                    </strong>

                    <span>
                        BEYOND FRAGRANCE
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
        id="evador-overview"
        class="section evador-overview-section">

        <div class="container">

            <div class="section-center evador-section-heading reveal">

                <span class="label">
                    VISÃO GERAL
                </span>

                <h2 class="section-title">
                    Conheça o conceito
                    <span>Evador.</span>
                </h2>

                <p class="lead">
                    O Evador é uma experiência de perfumaria
                    que procura ir além do aroma, valorizando frescura, conforto,
                    elegância, presença pessoal e uma identidade olfactiva própria.
                </p>

            </div>


            <div class="evador-overview-grid">

                ${overviewCard(
                    "01",
                    "Fragrância",
                    "Uma experiência olfactiva premium concebida para acompanhar o quotidiano."
                )}

                ${overviewCard(
                    "02",
                    "Conforto",
                    "A proposta destaca frescura e uma sensação prolongada de conforto."
                )}

                ${overviewCard(
                    "03",
                    "Identidade",
                    "A comunicação posiciona a fragrância como parte da expressão pessoal."
                )}

                ${overviewCard(
                    "04",
                    "Exclusividade",
                    "A experiência é apresentada como pessoal, diferenciada e sofisticada."
                )}

            </div>


            <div class="evador-overview-note reveal">

                <strong>
                    O futuro do perfume. Além da fragrância.
                </strong>

                <p>
                    As características apresentadas nesta página, referem-se tal como a 
                    documentação oficial do produto.
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
        "01":"✦",
        "02":"◉",
        "03":"◇",
        "04":"∞"
    };

    return `

    <article class="evador-overview-card reveal">

        <span class="evador-card-number">
            ${number}
        </span>


        <div
            class="evador-card-icon"
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
   FRAGRANCE
   ========================================================== */

function fragrance(){

    return `

    <section
        id="evador-fragrance"
        class="section evador-fragrance">

        <div class="container">

            <div class="evador-section-heading reveal">

                <span class="eyebrow">
                    ALÉM DA FRAGRÂNCIA
                </span>

                <h2>
                    O futuro do
                    <span>perfume.</span>
                </h2>

                <p>
                    O Evador apresenta uma proposta que vai além de simplesmente
                    perfumar. A comunicação do produto destaca uma experiência
                    pensada para frescura, conforto e expressão pessoal.
                </p>

            </div>


            <div class="evador-fragrance-grid">

                ${fragranceCard(
                    "01",
                    "Fragrância",
                    "Uma experiência olfactiva premium concebida para acompanhar o quotidiano.",
                    "✦"
                )}

                ${fragranceCard(
                    "02",
                    "Conforto",
                    "A proposta destaca frescura e uma sensação prolongada de conforto.",
                    "◉"
                )}

                ${fragranceCard(
                    "03",
                    "Elegância",
                    "Uma identidade sofisticada para quem valoriza presença e refinamento.",
                    "◇"
                )}

                ${fragranceCard(
                    "04",
                    "Exclusividade",
                    "A comunicação do produto destaca uma experiência pessoal e diferenciada.",
                    "∞"
                )}

            </div>


            <div class="evador-more-wrap">

                <button
                    type="button"
                    class="evador-more-toggle"
                    data-more-toggle="fragrance"
                    data-open-label="Ver mais sobre a fragrância"
                    data-close-label="Ocultar detalhes"
                    aria-expanded="false"
                    aria-controls="evador-fragrance-more">

                    <span>
                        Ver mais sobre a fragrância
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>


                <div
                    id="evador-fragrance-more"
                    class="evador-more-panel"
                    data-more-panel="fragrance"
                    aria-hidden="true">

                    <div class="evador-detail-grid">

                        ${detailCard(
                            "01 — FRAGRÂNCIA",
                            "Uma assinatura pessoal",
                            "A fragrância mistura-se subtilmente com o aroma natural de cada pessoa, contribuindo para uma experiência olfactiva individualizada.",
                            [
                                "Experiência olfactiva personalizada",
                                "Interacção com o aroma natural",
                                "Identidade diferenciada"
                            ]
                        )}

                        ${detailCard(
                            "02 — QUALIDADE",
                            "Uma abordagem refinada",
                            "A comunicação do Evador posiciona a fragrância dentro de uma proposta de qualidade, sofisticação e atenção aos detalhes.",
                            [
                                "Posicionamento premium",
                                "Perfume refinado",
                                "Experiência elegante"
                            ]
                        )}

                        ${detailCard(
                            "03 — FRESCURA",
                            "Conforto prolongado",
                            "Frescura e duração do aroma como elementos da experiência Evador.",
                            [
                                "Sensação de frescura",
                                "Aroma duradouro",
                                "Conforto ao longo do dia"
                            ]
                        )}

                        ${detailCard(
                            "04 — IDENTIDADE",
                            "O perfume de cada pessoa",
                            "A fragrância pode adquirir uma expressão diferente conforme o aroma natural de quem a utiliza.",
                            [
                                "Expressão individual",
                                "Presença pessoal",
                                "Assinatura olfactiva"
                            ]
                        )}

                        ${detailCard(
                            "CONCEITO",
                            "Além da fragrância",
                            "O conceito Evador une fragrância, identidade, conforto, estética e presença pessoal para criar uma experiência de cuidado mais completa.",
                            [],
                            true
                        )}

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function fragranceCard(
    number,
    title,
    text,
    symbol
){

    return `

    <article class="evador-fragrance-card reveal">

        <span class="evador-fragrance-number">
            ${number}
        </span>


        <div
            class="evador-fragrance-symbol"
            aria-hidden="true">

            ${symbol}

        </div>


        <span class="evador-fragrance-label">
            EXPERIÊNCIA
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
   DETAIL HELPERS
   ========================================================== */

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
            evador-detail-card
            ${wide ? "evador-detail-card-wide" : ""}
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
                    <div class="evador-detail-list">

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

    <div class="evador-detail-item">

        <span
            class="evador-check"
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
   IDENTITY
   ========================================================== */

function identity(){

    return `

    <section class="section evador-identity">

        <div class="container">

            <div class="evador-identity-grid">

                <div class="evador-identity-visual reveal-left">

                    <div class="evador-identity-frame">

                        <div class="evador-identity-aura"></div>

                        <div class="evador-identity-ring"></div>


                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Evador"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                </div>


                <div class="evador-identity-copy reveal-right">

                    <span class="label">
                        IDENTIDADE
                    </span>


                    <h2 class="section-title">

                        Beleza.
                        Presença.
                        <span>Confiança.</span>

                    </h2>


                    <p class="lead">
                        Mais do que uma fragrância, o Evador é apresentado
                        como uma extensão da identidade pessoal de quem o utiliza.
                    </p>


                    <div class="evador-benefit-checks">

                        ${benefitCheck("Luxuoso")}

                        ${benefitCheck("Refinado")}

                        ${benefitCheck("Elegante")}

                        ${benefitCheck("Confortável")}

                        ${benefitCheck("Confiante")}

                        ${benefitCheck("Único")}

                    </div>


                    <div class="evador-identity-note">

                        <span class="label">
                            EVADOR
                        </span>

                        <strong>
                            Além da fragrância.
                        </strong>

                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function benefitCheck(text){

    return `

    <div class="evador-benefit-check">

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
   BENEFITS
   ========================================================== */

function benefits(){

    return `

    <section class="section evador-benefits">

        <div class="container">

            <div class="evador-section-heading reveal">

                <span class="eyebrow">
                    A EXPERIÊNCIA
                </span>

                <h2>
                    Uma presença que
                    <span>deixa impressão.</span>
                </h2>

                <p>
                    A proposta Evador combina frescura, aroma duradouro,
                    conforto e uma expressão pessoal diferenciada.
                </p>

            </div>


            <div class="evador-benefits-grid">

                ${benefitCard(
                    "LUX",
                    "Luxuoso",
                    "Uma estética premium pensada para transmitir exclusividade."
                )}

                ${benefitCard(
                    "REF",
                    "Refinado",
                    "Uma abordagem de perfumaria orientada para sofisticação e detalhe."
                )}

                ${benefitCard(
                    "UNI",
                    "Único",
                    "A comunicação destaca uma expressão diferente em cada pessoa."
                )}

                ${benefitCard(
                    "EVA",
                    "Identidade",
                    "A fragrância é apresentada como parte da expressão pessoal."
                )}

            </div>


            <div class="evador-benefits-note reveal">

                <span class="label">
                    EVADOR
                </span>

                <h3>
                    A fragrância encontra a identidade.
                </h3>

                <p>
                    Segundo a apresentação comercial, a fragrância pode assumir
                    uma expressão distinta em cada pessoa devido à sua interacção
                    com o aroma natural da pele.
                </p>

            </div>

        </div>

    </section>

    `;
}


function benefitCard(
    code,
    title,
    text
){

    return `

    <article class="evador-benefit-card reveal">

        <div class="evador-benefit-code">
            ${code}
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

function productDetail(){

    return `

    <section
        id="evador-product"
        class="section evador-product-section">

        <div class="container">

            <div class="evador-section-heading reveal">

                <span class="eyebrow">
                    O PRODUTO
                </span>

                <h2>
                    Evador.
                    <span>Além da fragrância.</span>
                </h2>

                <p>
                    O produto é apresentado através de uma identidade premium,
                    uma proposta olfactiva diferenciada e uma linguagem centrada
                    em presença pessoal.
                </p>

            </div>


            <article class="evador-product-card reveal">


                <div class="evador-product-card-visual">

                    <div class="evador-detail-aura"></div>

                    <div class="evador-detail-ring"></div>


                    <div class="evador-product-detail-grid">

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Evador"
                            loading="lazy"
                            decoding="async"
                            class="evador-product-detail-image"
                        >

                    </div>


                    <span class="evador-detail-caption">
                        EVADOR · BEYOND FRAGRANCE
                    </span>

                </div>


                <div class="evador-product-card-copy">

                    <span class="label">
                        EVADOR
                    </span>


                    <h3>
                        Fragrância.
                        <span>Assinatura pessoal.</span>
                    </h3>


                    <p>
                        Uma experiência olfactiva apresentada para acompanhar
                        a identidade, o estilo e a presença de quem a utiliza.
                    </p>


                    <div class="evador-product-spec-list">

                        ${productSpec(
                            "Categoria",
                            "Beauty & Fragrance"
                        )}

                        ${productSpec(
                            "Proposta",
                            "Além da fragrância"
                        )}

                        ${productSpec(
                            "Experiência",
                            "Identidade olfactiva"
                        )}

                        ${productSpec(
                            "Posicionamento",
                            "Premium"
                        )}

                    </div>


                    <div class="evador-more-wrap">

                        <button
                            type="button"
                            class="evador-more-toggle"
                            data-more-toggle="product"
                            data-open-label="Ver mais características"
                            data-close-label="Ocultar características"
                            aria-expanded="false"
                            aria-controls="evador-product-more">

                            <span>
                                Ver mais características
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="evador-product-more"
                            class="evador-more-panel"
                            data-more-panel="product"
                            aria-hidden="true">

                            <div class="evador-detail-list">

                                ${detailItem(
                                    "Experiência olfactiva com posicionamento premium."
                                )}

                                ${detailItem(
                                    "Conceito de assinatura pessoal."
                                )}

                                ${detailItem(
                                    "Aroma apresentado como diferenciado conforme o utilizador."
                                )}

                                ${detailItem(
                                    "A utilização deve seguir as orientações oficiais do produto."
                                )}

                            </div>

                        </div>

                    </div>


                    <button
                        type="button"
                        class="btn btn-primary evador-card-buy"
                        data-buy="product">

                        Adquirir Evador

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

    <div class="evador-product-spec">

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
   ROUTINE
   ========================================================== */

function routine(){

    return `

    <section class="section evador-routine">

        <div class="container-sm">

            <div class="evador-section-heading reveal">

                <span class="eyebrow">
                    RITUAL EVADOR
                </span>

                <h2>
                    Transforme a fragrância
                    numa <span>assinatura.</span>
                </h2>

                <p>
                    O perfume ganha significado quando se transforma
                    numa parte consistente da identidade pessoal.
                </p>

            </div>


            <div class="evador-routine-list">

                ${routineStep(
                    "01",
                    "Escolha",
                    "Conheça a fragrância e descubra a experiência olfactiva do Evador."
                )}

                ${routineStep(
                    "02",
                    "Aplique",
                    "Utilize a fragrância de acordo com as orientações oficiais do produto."
                )}


                <div
                    class="evador-more-panel"
                    data-more-panel="routine"
                    aria-hidden="true"
                    id="evador-routine-more">

                    ${routineStep(
                        "03",
                        "Personalize",
                        "Permita que a fragrância se integre naturalmente na sua presença pessoal."
                    )}

                    ${routineStep(
                        "04",
                        "Expresse",
                        "Faça do perfume uma extensão da sua identidade, estilo e confiança."
                    )}

                </div>

            </div>


            <button
                type="button"
                class="evador-more-toggle"
                data-more-toggle="routine"
                data-open-label="Ver mais passos"
                data-close-label="Ocultar passos"
                aria-expanded="false"
                aria-controls="evador-routine-more">

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

    <article class="evador-routine-step reveal">

        <div class="evador-routine-number">
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
   EXPERIENCE
   ========================================================== */

function experience(){

    return `

    <section class="section evador-experience">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    EVADOR LIFESTYLE
                </span>

                <h2 class="section-title">
                    Luxuoso.
                    Refinado.
                    <span>Inconfundível.</span>
                </h2>

                <p class="lead">
                    Uma experiência concebida para quem procura mais
                    do que uma fragrância: procura presença.
                </p>

            </div>


            <div class="evador-experience-grid">

                ${experienceCard(
                    "✦",
                    "Luxuoso",
                    "Uma estética premium pensada para transmitir exclusividade."
                )}

                ${experienceCard(
                    "◇",
                    "Refinado",
                    "Detalhes e posicionamento que valorizam a sofisticação."
                )}

                ${experienceCard(
                    "◉",
                    "Elegante",
                    "Uma expressão de cuidado e bom gosto."
                )}

                ${experienceCard(
                    "∞",
                    "Confiante",
                    "Uma presença olfactiva associada a personalidade."
                )}

                ${experienceCard(
                    "◆",
                    "Confortável",
                    "Uma experiência que procura acompanhar o dia com frescura."
                )}

                ${experienceCard(
                    "★",
                    "Único",
                    "A proposta destaca uma expressão diferente em cada pessoa."
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

    <article class="evador-experience-card reveal">

        <div class="evador-experience-icon">
            ${icon}
        </div>

        <span class="evador-experience-number">
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
   FAQ
   ========================================================== */

function faq(){

    const questions = [

        [
            "O que é o Evador?",
            "O Evador é uma fragrância apresentada pela BZZWORLD dentro de uma proposta de beleza, conforto, cuidado pessoal e identidade."
        ],

        [
            "O que significa “Além da fragrância”?",
            "É o conceito utilizado para posicionar o Evador como uma experiência que vai além do aroma, valorizando identidade, frescura, conforto, elegância e presença pessoal."
        ],

        [
            "A fragrância é igual em todas as pessoas?",
            "Não. A fragrância mistura-se com o aroma natural de cada pessoa, podendo assumir uma expressão diferente em diferentes utilizadores."
        ],

        [
            "O Evador tem aroma duradouro?",
            "A apresentação do produto destaca frescura e duração prolongadas do aroma."
        ],

        [
            "O Evador é luxuoso?",
            "O posicionamento do produto é apresentado como premium, refinado e elegante, com foco numa experiência sofisticada."
        ],

        [
            "Como devo utilizar o Evador?",
            "A utilização deve seguir as orientações oficiais disponibilizadas para a fragrância e a embalagem do produto."
        ],

        [
            "O Evador substitui os cuidados pessoais?",
            "Não. Uma fragrância complementa o cuidado pessoal, mas não substitui higiene, cuidados da pele ou outros hábitos adequados."
        ],

        [
            "O que torna o Evador diferente?",
            "A sua proposta de valor está centrada no conceito de identidade olfactiva individual, frescura, conforto e uma apresentação premium."
        ],

        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre disponibilidade e aquisição."
        ]

    ];


    return `

    <section
        id="evador-faq"
        class="section evador-faq-section">

        <div class="container-sm">

            <div class="evador-section-heading reveal">

                <span class="eyebrow">
                    PERGUNTAS FREQUENTES
                </span>

                <h2>
                    Tudo sobre o
                    <span>Evador.</span>
                </h2>

                <p>
                    As respostas abrem individualmente para manter
                    a leitura organizada e facilitar a consulta.
                </p>

            </div>


            <div class="evador-faq-list">

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
        `evador-faq-answer-${number}`;

    return `

    <article class="evador-faq-item">

        <button
            type="button"
            class="evador-faq-question"
            aria-expanded="false"
            aria-controls="${answerId}">

            <span class="evador-faq-number">
                ${number}
            </span>

            <span class="evador-faq-text">
                ${questionText}
            </span>

            <span
                class="evador-faq-plus"
                aria-hidden="true">

                +

            </span>

        </button>


        <div
            id="${answerId}"
            class="evador-faq-answer"
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

    <section class="section evador-information-section">

        <div class="container">

            <div class="evador-information-box reveal">

                <div class="evador-information-icon">
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
                        a partir do material disponibilizado para o Evador.
                        Características específicas, duração, composição
                        e outras especificações devem ser confirmadas
                        através da documentação oficial do produto.
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

    <section class="section evador-cta-section">

        <div class="container">

            <div class="evador-cta-box reveal">

                <span class="evador-label-light">
                    EVADOR
                </span>

                <h2>
                    Além da fragrância.
                    <span>A sua assinatura.</span>
                </h2>

                <p>
                    Descubra uma experiência luxuosa, refinada
                    e elegante, criada para acompanhar a sua identidade.
                </p>


                <div class="evador-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="evadorWhats">

                        Falar no WhatsApp

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="backHome">

                        Voltar à AD Lifestyle

                    </button>

                </div>


                <p class="evador-cta-disclaimer">
                    Informação apresentada com base no material
                    disponibilizado para o produto.
                </p>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseEvador(){

    const root =
        document.querySelector(
            ".page-evador"
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
            "Evador: ripple não inicializado.",
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
                .evador-overview-grid .reveal,
                .evador-fragrance-grid .reveal,
                .evador-benefits-grid .reveal,
                .evador-experience-grid .reveal,
                .evador-routine-list .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "Evador: stagger não inicializado.",
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
       FAQ — APENAS UMA ABERTA
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    ".evador-faq-question"
                );

            if(!button){
                return;
            }


            const item =
                button.closest(
                    ".evador-faq-item"
                );

            if(!item){
                return;
            }


            const answer =
                item.querySelector(
                    ".evador-faq-answer"
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
                    ".evador-faq-item.active"
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
       IMAGE FALLBACK
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
                            ".evador-product-grid, " +
                            ".evador-product-card-visual, " +
                            ".evador-benefits-frame, " +
                            ".evador-identity-frame"
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
       BUY BUTTONS
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "#buyEvador, #evadorWhats, [data-buy]"
                );

            if(!button){
                return;
            }


            let message =
                "Olá AD Lifestyle! Tenho interesse no Evador e gostaria de receber mais informações sobre o produto.";


            const type =
                button.getAttribute(
                    "data-buy"
                );


            if(type === "product"){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o Evador.";

            }


            if(
                button.id === "buyEvador"
            ){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o Evador.";

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
                    ".evador-faq-item.active .evador-faq-answer"
                )
                .forEach(answer=>{

                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                });


            root
                .querySelectorAll(
                    ".evador-more-panel.active"
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
            ".evador-faq-question"
        );

    const answer =
        item.querySelector(
            ".evador-faq-answer"
        );

    const plus =
        item.querySelector(
            ".evador-faq-plus"
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
            ".evador-faq-plus"
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
