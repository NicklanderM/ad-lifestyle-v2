/* ==========================================================
   AD LIFESTYLE V2
   MINOSEED.JS
   Premium MinoSeed Product Page
   Modelo estrutural: iSMART S3
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIG
   ========================================================== */

const PRODUCT_IMAGE =
    "./assets/products/minoseed.png";

const WHATSAPP_NUMBER =
    "244924964666";


/* ==========================================================
   LOAD
   ========================================================== */

export function loadMinoseed(){

    applyTheme("minoseed");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-minoseed"
            data-product-page="minoseed">

            ${hero()}

            ${overview()}

            ${composition()}

            ${benefits()}

            ${productDetail()}

            ${routine()}

            ${experience()}

            ${faq()}

            ${information()}

            ${cta()}

        </div>

    `;

    initialiseMinoseed();
}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section class="hero minoseed-hero">

        <div class="minoseed-hero-atmosphere">

            <div class="minoseed-orb minoseed-orb-1"></div>

            <div class="minoseed-orb minoseed-orb-2"></div>

            <div class="minoseed-orbit minoseed-orbit-1"></div>

            <div class="minoseed-orbit minoseed-orbit-2"></div>

        </div>


        <div class="container minoseed-hero-grid">

            <div class="minoseed-hero-copy reveal">

                <span class="minoseed-eyebrow">
                    MINOSEED · BEAUTY & CARE
                </span>

                <h1>
                    Mino
                    <span>Seed.</span>
                </h1>

                <p class="minoseed-hero-description">
                    Um sabonete de inspiração botânica, apresentado
                    para uma rotina de limpeza, cuidado e bem-estar
                    da pele, com destaque para ginseng e outros
                    ingredientes de origem vegetal.
                </p>


                <div class="minoseed-hero-pills">

                    <span class="minoseed-hero-pill">
                        Ginseng
                    </span>

                    <span class="minoseed-hero-pill">
                        Óleo de Coco
                    </span>

                    <span class="minoseed-hero-pill">
                        Tea Tree
                    </span>

                    <span class="minoseed-hero-pill">
                        Sophora flavescens
                    </span>

                </div>


                <div class="minoseed-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyMinoseed">

                        Comprar MinoSeed

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="minoseedComposition"
                        data-scroll="#minoseed-composition">

                        Conhecer a composição

                    </button>

                </div>

            </div>


            <div class="minoseed-hero-product reveal-right">

                <div class="minoseed-product-aura"></div>

                <div class="minoseed-product-ring"></div>


                <div class="minoseed-product-grid">

                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="MinoSeed"
                        loading="eager"
                        decoding="async"
                        class="minoseed-product-image"
                    >

                </div>


                <div class="minoseed-product-caption">

                    <strong>
                        MINOSEED
                    </strong>

                    <span>
                        BEAUTY & CARE SOLUTION
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
        id="minoseed-overview"
        class="section minoseed-overview-section">

        <div class="container">

            <div class="section-center minoseed-section-heading reveal">

                <span class="label">
                    VISÃO GERAL
                </span>

                <h2 class="section-title">
                    Conheça o conceito
                    <span>MinoSeed.</span>
                </h2>

                <p class="lead">
                    O MinoSeed é um produto de cuidado pessoal
                    com foco em limpeza da pele, cuidado diário e ingredientes
                    de origem vegetal, destacando especialmente as raízes de ginseng.
                </p>

            </div>


            <div class="minoseed-overview-grid">

                ${overviewCard(
                    "01",
                    "Limpeza profunda",
                    "A limpeza dos poros, resíduos e excesso de oleosidade."
                )}

                ${overviewCard(
                    "02",
                    "Origem vegetal",
                    "O produto está dentro de uma proposta baseada em ingredientes de origem vegetal."
                )}

                ${overviewCard(
                    "03",
                    "Ginseng",
                    "As raízes de ginseng ocupam uma posição central na identidade e apresentação do MinoSeed."
                )}

                ${overviewCard(
                    "04",
                    "Beauty & Care",
                    "A proposta combina higiene, conforto, cuidado pessoal e uma identidade de beleza premium."
                )}

            </div>


            <div class="minoseed-overview-note reveal">

                <strong>
                    Cuidado diário com uma identidade botânica.
                </strong>

                <p>
                    As características e benefícios apresentados nesta página
                    reproduzem a informação exlusivamente do produto conforme a documentação oficial.
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
        "02":"◇",
        "03":"✿",
        "04":"∞"
    };

    return `

    <article class="minoseed-overview-card reveal">

        <span class="minoseed-card-number">
            ${number}
        </span>


        <div
            class="minoseed-card-icon"
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
   COMPOSITION
   ========================================================== */

function composition(){

    return `

    <section
        id="minoseed-composition"
        class="section minoseed-composition">

        <div class="container">

            <div class="minoseed-section-heading reveal">

                <span class="eyebrow">
                    COMPOSIÇÃO
                </span>

                <h2>
                    Ingredientes de origem
                    <span>vegetal.</span>
                </h2>

                <p>
                    A apresentação do produto destaca quatro componentes
                    associados à identidade Beauty & Care do MinoSeed.
                </p>

            </div>


            <div class="minoseed-composition-grid">

                ${compositionCard(
                    "01",
                    "C",
                    "Óleo de Coco",
                    "Ingrediente vegetal, como parte da proposta suave e hidratante do produto."
                )}

                ${compositionCard(
                    "02",
                    "T",
                    "Óleo da Árvore do Chá",
                    "Componente vegetal destacado entre os ingredientes apresentados para o MinoSeed."
                )}

                ${compositionCard(
                    "03",
                    "G",
                    "Ginseng",
                    "Um dos principais ingredientes destacados na identidade e comunicação do produto."
                )}

                ${compositionCard(
                    "04",
                    "S",
                    "Sophora flavescens",
                    "Componente vegetal."
                )}

            </div>


            <div class="minoseed-more-wrap">

                <button
                    type="button"
                    class="minoseed-more-toggle"
                    data-more-toggle="composition"
                    data-open-label="Ver toda a composição"
                    data-close-label="Ocultar composição"
                    aria-expanded="false"
                    aria-controls="minoseed-composition-more">

                    <span>
                        Ver toda a composição
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>


                <div
                    id="minoseed-composition-more"
                    class="minoseed-more-panel"
                    data-more-panel="composition"
                    aria-hidden="true">

                    <div class="minoseed-detail-grid">

                        ${detailCard(
                            "01 — LIMPEZA",
                            "Limpeza dos poros",
                            "Uma espuma molecular associada a uma penetração mais fácil nos poros e à remoção de resíduos.",
                            [
                                "Limpeza profunda",
                                "Remoção de sujidade",
                                "Redução do excesso de oleosidade"
                            ]
                        )}

                        ${detailCard(
                            "02 — GINSENG",
                            "Raiz de ginseng",
                            "As raízes de ginseng como um dos elementos centrais da proposta MinoSeed.",
                            [
                                "Ingrediente de origem vegetal",
                                "Elemento central da fórmula apresentada",
                                "Associado ao cuidado da pele"
                            ]
                        )}

                        ${detailCard(
                            "03 — CONFORTO",
                            "Suavidade e hidratação",
                            "Suave, hidratante e respeitador da pele.",
                            [
                                "Cuidado diário",
                                "Sensação de suavidade",
                                "Proposta de conforto cutâneo"
                            ]
                        )}

                        ${detailCard(
                            "04 — PUREZA",
                            "Cuidado natural",
                            "Uma abordagem de cuidado pessoal baseada em ingredientes de origem vegetal.",
                            [
                                "Base vegetal",
                                "Foco no cuidado da pele",
                                "Identidade Beauty & Wellness"
                            ]
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
    text
){

    return `

    <article class="minoseed-composition-card reveal">

        <span class="minoseed-composition-number">
            ${number}
        </span>


        <div
            class="minoseed-composition-symbol"
            aria-hidden="true">

            ${symbol}

        </div>


        <span class="minoseed-composition-label">
            INGREDIENTE
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
            minoseed-detail-card
            ${wide ? "minoseed-detail-card-wide" : ""}
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
                    <div class="minoseed-detail-list">

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

    <div class="minoseed-detail-item">

        <span
            class="minoseed-check"
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

    <section class="section minoseed-benefits">

        <div class="container">

            <div class="minoseed-benefits-grid">

                <div class="minoseed-benefits-visual reveal-left">

                    <div class="minoseed-benefits-frame">

                        <div class="minoseed-benefits-aura"></div>

                        <div class="minoseed-benefits-ring"></div>


                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="MinoSeed"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                </div>


                <div class="minoseed-benefits-copy reveal-right">

                    <span class="label">
                        CARACTERÍSTICAS
                    </span>


                    <h2 class="section-title">

                        Limpeza.
                        Nutrição.
                        <span>Cuidado.</span>

                    </h2>


                    <p class="lead">
                        O MinoSeed é um produto
                        de cuidado pessoal destinado a acompanhar
                        uma rotina de higiene e cuidado da pele.
                    </p>


                    <div class="minoseed-benefit-checks">

                        ${benefitCheck(
                            "Ajuda a limpar profundamente a pele"
                        )}

                        ${benefitCheck(
                            "Cuidado orientado para o excesso de oleosidade"
                        )}

                        ${benefitCheck(
                            "Proposta de limpeza dos poros"
                        )}

                        ${benefitCheck(
                            "Sensação de suavidade e conforto"
                        )}

                        ${benefitCheck(
                            "Ingredientes de origem vegetal"
                        )}

                        ${benefitCheck(
                            "Integração numa rotina de cuidado pessoal"
                        )}

                    </div>


                    <div class="minoseed-more-wrap">

                        <button
                            type="button"
                            class="minoseed-more-toggle"
                            data-more-toggle="benefits"
                            data-open-label="Ver informações funcionais"
                            data-close-label="Ocultar informações"
                            aria-expanded="false"
                            aria-controls="minoseed-benefits-more">

                            <span>
                                Ver informações funcionais
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="minoseed-benefits-more"
                            class="minoseed-more-panel"
                            data-more-panel="benefits"
                            aria-hidden="true">

                            <div class="minoseed-detail-grid">

                                ${detailCard(
                                    "LIMPEZA",
                                    "Pele limpa",
                                    "Remoção de resíduos, oleosidade e sujidade dos poros."
                                )}

                                ${detailCard(
                                    "GINSENG",
                                    "Ingrediente central",
                                    "O material apresenta as raízes de ginseng como elemento importante na identidade do produto."
                                )}

                                ${detailCard(
                                    "PELE",
                                    "Adequação e tolerância",
                                    "Adequado para vários tipos de pele. A tolerância individual pode variar.",
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

    <div class="minoseed-benefit-check">

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
        id="minoseed-product"
        class="section minoseed-product-section">

        <div class="container">

            <div class="minoseed-section-heading reveal">

                <span class="eyebrow">
                    O PRODUTO
                </span>

                <h2>
                    MinoSeed.
                    <span>Beauty & Care Solution.</span>
                </h2>

                <p>
                    O produto é apresentado através de uma combinação
                    entre limpeza, ingredientes de origem vegetal
                    e uma identidade orientada para cuidado pessoal.
                </p>

            </div>


            <article class="minoseed-product-card reveal">


                <div class="minoseed-product-card-visual">

                    <div class="minoseed-detail-aura"></div>

                    <div class="minoseed-detail-ring"></div>


                    <div class="minoseed-product-detail-grid">

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="MinoSeed"
                            loading="lazy"
                            decoding="async"
                            class="minoseed-product-detail-image"
                        >

                    </div>


                    <span class="minoseed-detail-caption">
                        MINOSEED · BEAUTY & CARE
                    </span>

                </div>


                <div class="minoseed-product-card-copy">

                    <span class="label">
                        MINOSEED CARE SOLUTION
                    </span>


                    <h3>

                        Limpeza.
                        <span>Cuidado diário.</span>

                    </h3>


                    <p>
                        Uma proposta de cuidado pessoal destinada
                        a integrar a rotina de higiene e limpeza
                        da pele, com destaque para ingredientes
                        de origem vegetal.
                    </p>


                    <div class="minoseed-product-spec-list">

                        ${productSpec(
                            "Categoria",
                            "Beauty & Care"
                        )}

                        ${productSpec(
                            "Ingrediente",
                            "Ginseng"
                        )}

                        ${productSpec(
                            "Proposta",
                            "Limpeza e cuidado"
                        )}

                        ${productSpec(
                            "Base",
                            "Ingredientes vegetais"
                        )}

                    </div>


                    <div class="minoseed-more-wrap">

                        <button
                            type="button"
                            class="minoseed-more-toggle"
                            data-more-toggle="product"
                            data-open-label="Ver mais características"
                            data-close-label="Ocultar características"
                            aria-expanded="false"
                            aria-controls="minoseed-product-more">

                            <span>
                                Ver mais características
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="minoseed-product-more"
                            class="minoseed-more-panel"
                            data-more-panel="product"
                            aria-hidden="true">

                            <div class="minoseed-detail-list">

                                ${detailItem(
                                    "Produto apresentado para rotina de higiene e cuidado da pele."
                                )}

                                ${detailItem(
                                    "Composição baseada em ingredientes de origem vegetal."
                                )}

                                ${detailItem(
                                    "O Ginseng como ingrediente central."
                                )}

                                ${detailItem(
                                    "A utilização deve seguir as instruções oficiais da embalagem."
                                )}

                            </div>

                        </div>

                    </div>


                    <button
                        type="button"
                        class="btn btn-primary minoseed-card-buy"
                        data-buy="product">

                        Adquirir MinoSeed

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

    <div class="minoseed-product-spec">

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

    <section class="section minoseed-routine">

        <div class="container-sm">

            <div class="minoseed-section-heading reveal">

                <span class="eyebrow">
                    ROTINA DE CUIDADO
                </span>

                <h2>
                    Uma rotina simples
                    e <span>consistente.</span>
                </h2>

                <p>
                    Uma rotina de cuidado começa com limpeza,
                    consistência e atenção às necessidades
                    individuais da pele.
                </p>

            </div>


            <div class="minoseed-routine-list">

                ${routineStep(
                    "01",
                    "Molhe",
                    "Humedeça a pele e prepare-a para a limpeza."
                )}

                ${routineStep(
                    "02",
                    "Aplique",
                    "Utilize o MinoSeed de acordo com as indicações oficiais do produto."
                )}


                <div
                    class="minoseed-more-panel"
                    data-more-panel="routine"
                    aria-hidden="true"
                    id="minoseed-routine-more">

                    ${routineStep(
                        "03",
                        "Limpe",
                        "Faça uma limpeza suave, especialmente nas zonas onde existe maior acumulação de oleosidade e sujidade."
                    )}

                    ${routineStep(
                        "04",
                        "Enxague",
                        "Remova cuidadosamente o produto e finalize a sua rotina de higiene."
                    )}

                </div>

            </div>


            <button
                type="button"
                class="minoseed-more-toggle"
                data-more-toggle="routine"
                data-open-label="Ver mais passos"
                data-close-label="Ocultar passos"
                aria-expanded="false"
                aria-controls="minoseed-routine-more">

                <span>
                    Ver mais passos
                </span>

                <i aria-hidden="true">
                    +
                </i>

            </button>


            <div class="minoseed-routine-note reveal">

                <span class="label">
                    NOTA IMPORTANTE
                </span>

                <p>
                    A utilização deve seguir as orientações oficiais
                    da embalagem. Evite utilizar o produto em pele lesionada
                    e interrompa a utilização caso surja irritação persistente
                    ou desconforto.
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

    <article class="minoseed-routine-step reveal">

        <div class="minoseed-routine-number">
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

    <section class="section minoseed-experience">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    BEAUTY LIFESTYLE
                </span>

                <h2 class="section-title">
                    Uma experiência de
                    <span>cuidado consciente.</span>
                </h2>

                <p class="lead">
                    O conceito MinoSeed combina limpeza,
                    ingredientes de origem vegetal e uma
                    abordagem de cuidado pessoal orientada
                    para conforto e bem-estar.
                </p>

            </div>


            <div class="minoseed-experience-grid">

                ${experienceCard(
                    "🌿",
                    "Naturalidade",
                    "Ingredientes de origem vegetal ocupam um papel central na apresentação do produto."
                )}

                ${experienceCard(
                    "✦",
                    "Limpeza",
                    "Uma proposta de limpeza profunda da pele e dos poros."
                )}

                ${experienceCard(
                    "💧",
                    "Hidratação",
                    "O material promocional caracteriza o produto como suave e hidratante."
                )}

                ${experienceCard(
                    "✿",
                    "Ginseng",
                    "As raízes de ginseng são um dos elementos de destaque da identidade MinoSeed."
                )}

                ${experienceCard(
                    "◇",
                    "Revitalização",
                    "A apresentação utiliza uma linguagem associada a revitalização e aparência cuidada."
                )}

                ${experienceCard(
                    "∞",
                    "Beauty Care",
                    "Uma proposta premium integrada na categoria de cuidado pessoal."
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

    <article class="minoseed-experience-card reveal">

        <div class="minoseed-experience-icon">
            ${icon}
        </div>

        <span class="minoseed-experience-number">
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
            "O que é o MinoSeed?",
            "O MinoSeed é um sabonete de cuidado da pele da linha Smart Lab Beauty, com destaque para raízes de ginseng e outros ingredientes de origem vegetal."
        ],

        [
            "Quais são os componentes destacados?",
            "Óleo de coco, óleo da árvore do chá, ginseng e Sophora flavescens."
        ],

        [
            "O MinoSeed ajuda na limpeza dos poros?",
            "Sim, na limpeza profunda dos poros, remoção de sujidade e excesso de oleosidade."
        ],

        [
            "O MinoSeed é adequado para todos os tipos de pele?",
            "Sim, é adequado para vários tipos de pele. A tolerância pode variar de pessoa para pessoa."
        ],

        [
            "O MinoSeed é hidratante?",
            "Sim, é suave e hidratante, orientado para o cuidado da pele."
        ],

        [
            "O produto irrita os olhos?",
            "Não, não irrita os olhos. Ainda assim, deve-se evitar o contacto directo com os olhos durante a utilização."
        ],

        [
            "O MinoSeed pode ser utilizado por bebés?",
            "Para bebés e crianças pequenas, recomenda-se confirmar a adequação e as instruções do produto junto de um profissional de saúde."
        ],

        [
            "O MinoSeed trata acne ou outras condições da pele?",
            "Sim, dá um tratamento a acne, oleosidade, irritação, comichão e odores corporais. Essas associações não devem ser interpretadas como garantia de tratamento ou cura."
        ],

        [
            "Como devo utilizar o MinoSeed?",
            "A utilização deve seguir as instruções oficiais da embalagem e a tolerância individual da pele."
        ],

        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre disponibilidade e aquisição."
        ]

    ];


    return `

    <section
        id="minoseed-faq"
        class="section minoseed-faq-section">

        <div class="container-sm">

            <div class="minoseed-section-heading reveal">

                <span class="eyebrow">
                    PERGUNTAS FREQUENTES
                </span>

                <h2>
                    Tudo sobre o
                    <span>MinoSeed.</span>
                </h2>

                <p>
                    As respostas abrem individualmente para
                    manter a leitura organizada.
                </p>

            </div>


            <div class="minoseed-faq-list">

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
        `minoseed-faq-answer-${number}`;

    return `

    <article class="minoseed-faq-item">

        <button
            type="button"
            class="minoseed-faq-question"
            aria-expanded="false"
            aria-controls="${answerId}">

            <span class="minoseed-faq-number">
                ${number}
            </span>

            <span class="minoseed-faq-text">
                ${questionText}
            </span>

            <span
                class="minoseed-faq-plus"
                aria-hidden="true">

                +

            </span>

        </button>


        <div
            id="${answerId}"
            class="minoseed-faq-answer"
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

    <section class="section minoseed-information-section">

        <div class="container">

            <div class="minoseed-information-box reveal">

                <div class="minoseed-information-icon">
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
                        As informações desta página foram organizadas a partir
                        do material disponibilizado para o MinoSeed. 
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

    <section class="section minoseed-cta-section">

        <div class="container">

            <div class="minoseed-cta-box reveal">

                <span class="minoseed-label-light">
                    MINOSEED CARE SOLUTION
                </span>

                <h2>
                    Dê à sua pele
                    <span>um cuidado especial.</span>
                </h2>

                <p>
                    Descubra uma proposta de cuidado que combina
                    limpeza, ingredientes de origem vegetal e
                    a identidade premium do MinoSeed.
                </p>

                <div class="minoseed-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="minoseedWhats">

                        Falar no WhatsApp

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="backHome">

                        Voltar à AD Lifestyle

                    </button>

                </div>


                <p class="minoseed-cta-disclaimer">
                    Informação apresentada para fins informativos.
                    Não constitui diagnóstico, aconselhamento médico
                    ou garantia de resultados.
                </p>

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseMinoseed(){

    const root =
        document.querySelector(
            ".page-minoseed"
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
            "MinoSeed: ripple não inicializado.",
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
                .minoseed-overview-grid .reveal,
                .minoseed-composition-grid .reveal,
                .minoseed-benefits-grid .reveal,
                .minoseed-experience-grid .reveal,
                .minoseed-routine-list .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "MinoSeed: stagger não inicializado.",
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
                    ".minoseed-faq-question"
                );

            if(!button){
                return;
            }

            const item =
                button.closest(
                    ".minoseed-faq-item"
                );

            if(!item){
                return;
            }

            const answer =
                item.querySelector(
                    ".minoseed-faq-answer"
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
                    ".minoseed-faq-item.active"
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
                            ".minoseed-product-grid, " +
                            ".minoseed-product-card-visual, " +
                            ".minoseed-benefits-frame"
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
                    "#buyMinoseed, #minoseedWhats, [data-buy]"
                );

            if(!button){
                return;
            }

            let message =
                "Olá AD Lifestyle! Tenho interesse no MinoSeed e gostaria de receber mais informações sobre o produto.";


            const type =
                button.getAttribute(
                    "data-buy"
                );


            if(type === "product"){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o MinoSeed.";

            }


            if(
                button.id === "buyMinoseed"
            ){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o MinoSeed.";

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
                    ".minoseed-faq-item.active .minoseed-faq-answer"
                )
                .forEach(answer=>{

                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                });


            root
                .querySelectorAll(
                    ".minoseed-more-panel.active"
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
            ".minoseed-faq-question"
        );

    const answer =
        item.querySelector(
            ".minoseed-faq-answer"
        );

    const plus =
        item.querySelector(
            ".minoseed-faq-plus"
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
            ".minoseed-faq-plus"
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
