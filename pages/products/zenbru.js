/* ==========================================================
   AD LIFESTYLE V2
   ZENBRU.JS
   Premium Functional Coffee Product Page
   Standardised Product Architecture — AlphaMeta / iSMART S3
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIG
   ========================================================== */

const PRODUCT_IMAGE =
    "./assets/products/zenbru.png";

const WHATSAPP_NUMBER =
    "244924964666";


/* ==========================================================
   LOAD
   ========================================================== */

export function loadZenbru(){

    applyTheme("zenbru");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-zenbru"
            data-product-page="zenbru">

            ${hero()}

            ${overview()}

            ${composition()}

            ${benefits()}

            ${productDetail()}

            ${ingredients()}

            ${routine()}

            ${experience()}

            ${faq()}

            ${information()}

            ${cta()}

        </div>

    `;

    initialiseZenbru();

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section
        class="hero zenbru-hero"
        id="zenbru-top">

        <div
            class="zenbru-hero-atmosphere"
            aria-hidden="true">

            <div class="zenbru-orb zenbru-orb-1"></div>
            <div class="zenbru-orb zenbru-orb-2"></div>

            <div class="zenbru-orbit zenbru-orbit-1"></div>
            <div class="zenbru-orbit zenbru-orbit-2"></div>

        </div>


        <div class="container zenbru-hero-grid">


            <!-- ==================================================
                 CONTENT
                 ================================================== -->

            <div class="zenbru-hero-copy reveal">

                <span class="zenbru-eyebrow">
                    ZENBRU · FUNCTIONAL COFFEE
                </span>


                <h1>
                    Zenbru
                    <span>Premium Coffee.</span>
                </h1>


                <p class="zenbru-hero-description">

                    Uma experiência de café funcional que
                    combina café Robusta, ginseng coreano
                    e gengibre numa proposta premium de
                    sabor, aroma e lifestyle.

                </p>


                <div class="zenbru-hero-pills">

                    <span class="zenbru-hero-pill">
                        Café Robusta
                    </span>

                    <span class="zenbru-hero-pill">
                        Ginseng Coreano
                    </span>

                    <span class="zenbru-hero-pill">
                        Gengibre
                    </span>

                </div>


                <div class="zenbru-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyZenbru">

                        Comprar agora

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="zenbruComposition"
                        data-scroll="#zenbru-composition">

                        Ver composição

                    </button>

                </div>


                <div class="zenbru-hero-meta">

                    <div>

                        <strong>
                            Robusta
                        </strong>

                        <span>
                            Base da bebida
                        </span>

                    </div>


                    <div>

                        <strong>
                            Ginseng
                        </strong>

                        <span>
                            Ingrediente funcional
                        </span>

                    </div>


                    <div>

                        <strong>
                            Gengibre
                        </strong>

                        <span>
                            Ingrediente vegetal
                        </span>

                    </div>

                </div>

            </div>


            <!-- ==================================================
                 PRODUCT
                 ================================================== -->

            <div class="zenbru-hero-product reveal-right">

                <div class="zenbru-product-aura"></div>

                <div class="zenbru-product-ring zenbru-product-ring-1"></div>
                <div class="zenbru-product-ring zenbru-product-ring-2"></div>

                <div class="zenbru-product-grid"></div>


                <img
                    src="${PRODUCT_IMAGE}"
                    alt="Zenbru Premium Coffee"
                    class="zenbru-hero-product-image"
                    loading="eager"
                    decoding="async"
                >


                <div class="zenbru-product-caption">

                    <span>
                        ZENBRU
                    </span>

                    <strong>
                        PREMIUM COFFEE
                    </strong>

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
        class="section zenbru-overview"
        id="zenbru-overview">

        <div class="container">


            <div class="zenbru-section-heading reveal">

                <div>

                    <span class="label">
                        ZENBRU
                    </span>


                    <h2>
                        Três elementos.
                        <span>Uma experiência.</span>
                    </h2>

                </div>

            </div>


            <div class="zenbru-overview-grid">

                ${overviewCard(
                    "01",
                    "Café Robusta",
                    "A base da bebida, com referências de origem ao Brasil e ao Vietname.",
                    "☕"
                )}

                ${overviewCard(
                    "02",
                    "Ginseng Coreano",
                    "Extracto de ginseng.",
                    "✦"
                )}

                ${overviewCard(
                    "03",
                    "Gengibre",
                    "Ingrediente vegetal que complementa o perfil do produto.",
                    "⌁"
                )}

                ${overviewCard(
                    "04",
                    "Experiência",
                    "Uma proposta de café funcional com posicionamento premium.",
                    "◇"
                )}

            </div>


            <div class="zenbru-note reveal">

                <span class="zenbru-note-icon">
                    ✓
                </span>

                <div>

                    <strong>
                        O essencial, à primeira vista.
                    </strong>

                    <p>
                        A página apresenta primeiro os pontos centrais
                        e reserva os detalhes adicionais para áreas expansíveis.
                    </p>

                </div>

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

    <article class="zenbru-overview-card reveal">

        <span class="zenbru-card-number">
            ${number}
        </span>

        <div class="zenbru-card-icon">
            ${icon}
        </div>

        <span class="zenbru-card-label">
            COMPONENTE
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
   COMPOSITION
   ========================================================== */

function composition(){

    return `

    <section
        class="section zenbru-composition"
        id="zenbru-composition">

        <div class="container">


            <div class="zenbru-section-heading reveal">

                <div>

                    <span class="label">
                        COMPOSIÇÃO
                    </span>

                    <h2>
                        O que está dentro
                        <span>do Zenbru.</span>
                    </h2>

                </div>

                <p>
                    Os três componentes principais permanecem em
                    evidência. As informações complementares ficam
                    disponíveis em “Ver mais”.
                </p>

            </div>


            <div class="zenbru-composition-grid">

                ${ingredientCard(
                    "01",
                    "Café Robusta",
                    "Base da bebida, com referências apresentadas ao Brasil e ao Vietname.",
                    "☕"
                )}

                ${ingredientCard(
                    "02",
                    "Ginseng Coreano",
                    "Extracto de ginseng coreano destacado na apresentação fornecida.",
                    "🌿"
                )}

                ${ingredientCard(
                    "03",
                    "Gengibre",
                    "Ingrediente vegetal associado no material a gingerol e curcumina.",
                    "⌁"
                )}

            </div>


            <div class="zenbru-more-wrap">

                <button
                    type="button"
                    class="zenbru-more-toggle"
                    data-more-toggle="composition"
                    data-open-label="Ver detalhes da composição"
                    data-close-label="Ocultar detalhes da composição"
                    aria-expanded="false"
                    aria-controls="zenbru-composition-more">

                    <span>
                        Ver detalhes da composição
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>


                <div
                    id="zenbru-composition-more"
                    class="zenbru-more-panel"
                    data-more-panel="composition"
                    aria-hidden="true">

                    <div class="zenbru-detail-grid">

                        ${detailCard(
                            "CAFÉ ROBUSTA",
                            "Brasil & Vietname",
                            "A documentação fornecida identifica o Brasil e o Vietname como referências geográficas para os grãos Robusta apresentados.",
                            [
                                "Brasil",
                                "Vietname",
                                "Perfis de altitude destacados",
                                "Características de solo comunicadas"
                            ]
                        )}

                        ${detailCard(
                            "GINSENG",
                            "Ginsenosidos ≥ 7%",
                            "A apresentação fornecida refere extracto de ginseng coreano e indica um teor de ginsenosidos igual ou superior a 7%.",
                            [
                                "Ginseng coreano",
                                "Ginsenosidos ≥ 7%",
                                "Componente funcional declarado",
                                "Perfil vegetal"
                            ]
                        )}

                        ${detailCard(
                            "GENGIBRE",
                            "Compostos destacados",
                            "O material associa o gengibre a referências como gingerol e curcumina.",
                            [
                                "Gingerol",
                                "Curcumina — característica comunicada",
                                "Ingrediente vegetal",
                                "Perfil aromático"
                            ]
                        )}

                        ${detailCard(
                            "INFORMAÇÃO ADICIONAL",
                            "Características comunicadas",
                            "Referências a ácido clorogénico, actividade antioxidante e outras propriedades associadas aos ingredientes.",
                            
                        )}

                    </div>

                </div>

            </div>


        </div>

    </section>

    `;

}


function ingredientCard(
    number,
    title,
    text,
    icon
){

    return `

    <article class="zenbru-composition-card reveal">

        <span class="zenbru-composition-number">
            ${number}
        </span>

        <div class="zenbru-composition-symbol">
            ${icon}
        </div>

        <span class="zenbru-composition-label">
            COMPONENTE PRINCIPAL
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
        class="section zenbru-benefits"
        id="zenbru-benefits">

        <div class="container">


            <div class="zenbru-benefits-grid">


                <!-- IMAGE -->

                <div class="zenbru-benefits-visual reveal-left">

                    <div class="zenbru-benefits-frame">

                        <div class="zenbru-benefits-aura"></div>
                        <div class="zenbru-benefits-ring"></div>

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Zenbru Premium Coffee"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                </div>


                <!-- CONTENT -->

                <div class="zenbru-benefits-copy reveal-right">

                    <span class="label">
                        DESTAQUES
                    </span>


                    <h2>
                        Sabor.
                        Energia.
                        <span>Experiência.</span>
                    </h2>


                    <p class="lead">
                        A comunicação do produto reúne café Robusta,
                        ginseng coreano e gengibre numa proposta
                        funcional e premium.
                    </p>


                    <div class="zenbru-benefit-checks">

                        ${benefitCheck("Café Robusta como base da bebida")}

                        ${benefitCheck("Ginseng coreano")}

                        ${benefitCheck("Gengibre")}

                        ${benefitCheck("Perfil aromático diferenciado")}

                        ${benefitCheck("Proposta funcional")}

                        ${benefitCheck("Experiência premium")}

                    </div>


                    <div class="zenbru-more-wrap">

                        <button
                            type="button"
                            class="zenbru-more-toggle"
                            data-more-toggle="benefits"
                            data-open-label="Ver informações funcionais"
                            data-close-label="Ocultar informações funcionais"
                            aria-expanded="false"
                            aria-controls="zenbru-benefits-more">

                            <span>
                                Ver informações funcionais
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="zenbru-benefits-more"
                            class="zenbru-more-panel"
                            data-more-panel="benefits"
                            aria-hidden="true">

                            <div class="zenbru-detail-grid">

                                ${detailCard(
                                    "GINSENG",
                                    "Características",
                                    " Protecção celular, actividade antioxidante, regeneração e envelhecimento.",
                                    [
                                        "Protecção celular",
                                        "Actividade antioxidante",
                                        "Regeneração celular",
                                        "Envelhecimento"
                                    ]
                                )}

                                ${detailCard(
                                    "GENGIBRE",
                                    "Compostos destacados",
                                    "Gingerol, curcumina e referências funcionais associadas ao ingrediente.",
                                    [
                                        "Gingerol",
                                        "Curcumina",
                                        "Actividade antioxidante",
                                        "Actividade antibacteriana"
                                    ]
                                )}

                                ${detailCard(
                                    "ÍNDICE GLICÉMICO",
                                    "Característica",
                                    "O Zenbru é um produto de baixo índice glicémico e, tem por sua vez, a certificação por Temasek Polytechnic.",
                                    [
                                        "Baixo índice glicémico",
                                        "Referência a Temasek Polytechnic",
                                    ]
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

    <div class="zenbru-benefit-check">

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
        class="section zenbru-product-section"
        id="zenbru-product">

        <div class="container">


            <div class="zenbru-product-detail-grid">


                <!-- IMAGE -->

                <div class="zenbru-product-detail-frame reveal-left">

                    <div class="zenbru-detail-aura"></div>
                    <div class="zenbru-detail-ring"></div>
                    <div class="zenbru-detail-decoration"></div>

                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="Zenbru Premium Coffee"
                        class="zenbru-product-detail-image"
                        loading="lazy"
                        decoding="async"
                    >

                    <span class="zenbru-detail-caption">
                        ZENBRU · PREMIUM COFFEE
                    </span>

                </div>


                <!-- CONTENT -->

                <div class="zenbru-product-detail-copy reveal-right">

                    <span class="label">
                        O PRODUTO
                    </span>


                    <h2>
                        Café Robusta,
                        <span>ginseng e gengibre.</span>
                    </h2>


                    <p class="lead">
                        O Zenbru é um café funcional
                        premium que reúne uma base de café Robusta
                        com ginseng coreano e gengibre.
                    </p>


                    <div class="zenbru-product-specs">

                        ${productSpec(
                            "01",
                            "Base",
                            "Café Robusta"
                        )}

                        ${productSpec(
                            "02",
                            "Origem comunicada",
                            "Brasil & Vietname"
                        )}

                        ${productSpec(
                            "03",
                            "Extracto",
                            "Ginseng coreano"
                        )}

                        ${productSpec(
                            "04",
                            "Ingrediente vegetal",
                            "Gengibre"
                        )}

                    </div>


                    <div class="zenbru-product-highlight">

                        <span>
                            ☕
                        </span>

                        <div>

                            <strong>
                                Uma composição simples de reconhecer.
                            </strong>

                            <p>
                                Café Robusta, ginseng coreano e gengibre
                                são os três elementos centrais apresentados
                                para o produto.
                            </p>

                        </div>

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

    <div class="zenbru-product-spec">

        <span class="zenbru-product-spec-number">
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
   INGREDIENTS / ORIGIN
   ========================================================== */

function ingredients(){

    return `

    <section
        class="section zenbru-ingredients"
        id="zenbru-ingredients">

        <div class="container">


            <div class="zenbru-section-heading reveal">

                <div>

                    <span class="label">
                        ORIGEM & PERFIL
                    </span>

                    <h2>
                        Da origem
                        <span>à experiência.</span>
                    </h2>

                </div>

                <p>
                    As referências de origem e características do café
                    ficam organizadas de forma simples, sem sobrecarregar
                    a apresentação principal.
                </p>

            </div>


            <div class="zenbru-ingredients-grid">

                ${originCard(
                    "BR",
                    "Brasil",
                    "Em altitudes aproximadas entre 100 e 800 metros e solos argilosos com forte retenção de água."
                )}

                ${originCard(
                    "VN",
                    "Vietname",
                    "Em altitudes aproximadas entre 600 e 1000 metros e solos vulcânicos ricos em minerais."
                )}

                ${originCard(
                    "ZB",
                    "Zenbru",
                    "A combinação de café Robusta, ginseng coreano e gengibre é apresentada como uma experiência distinta na categoria de café funcional."
                )}

            </div>


        </div>

    </section>

    `;

}


function originCard(
    code,
    title,
    text
){

    return `

    <article class="zenbru-origin-card reveal">

        <div class="zenbru-origin-code">
            ${code}
        </div>

        <span class="label">
            REFERÊNCIA
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
   ROUTINE / PREPARATION
   ========================================================== */

function routine(){

    return `

    <section
        class="section zenbru-routine"
        id="zenbru-routine">

        <div class="container-sm">


            <div class="zenbru-section-heading zenbru-section-heading-center reveal">

                <div>

                    <span class="label">
                        PREPARAÇÃO
                    </span>

                    <h2>
                        O ritual
                        <span>Zenbru.</span>
                    </h2>

                </div>

                <p>
                    A preparação deve seguir sempre a quantidade,
                    temperatura e modo indicados na embalagem oficial.
                </p>

            </div>


            <div class="zenbru-routine-grid">

                ${routineStep(
                    "01",
                    "Prepare",
                    "Prepare água e uma chávena limpa."
                )}

                ${routineStep(
                    "02",
                    "Adicione",
                    "Adicione a quantidade recomendada segundo as instruções oficiais."
                )}

                ${routineStep(
                    "03",
                    "Misture",
                    "Misture cuidadosamente até obter uma preparação homogénea."
                )}

                ${routineStep(
                    "04",
                    "Desfrute",
                    "Aprecie o aroma, o sabor e a experiência Zenbru."
                )}

            </div>


            <div class="zenbru-routine-note reveal">

                <span class="label">
                    NOTA IMPORTANTE
                </span>

                <p>
                    A embalagem oficial é a referência para a
                    preparação exacta do produto.
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

    <article class="zenbru-routine-step reveal">

        <span class="zenbru-routine-number">
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
   EXPERIENCE
   ========================================================== */

function experience(){

    return `

    <section
        class="section zenbru-experience"
        id="zenbru-experience">

        <div class="container">


            <div class="zenbru-section-heading reveal">

                <div>

                    <span class="label">
                        A EXPERIÊNCIA
                    </span>

                    <h2>
                        Mais do que uma chávena.
                        <span>Uma identidade.</span>
                    </h2>

                </div>

            </div>


            <div class="zenbru-experience-grid">

                ${experienceCard(
                    "01",
                    "Sabor",
                    "Uma base de café Robusta complementada por ginseng e gengibre."
                )}

                ${experienceCard(
                    "02",
                    "Aroma",
                    "Uma composição apresentada com identidade vegetal e aromática."
                )}

                ${experienceCard(
                    "03",
                    "Lifestyle",
                    "Uma proposta funcional integrada numa experiência premium de café."
                )}

            </div>


        </div>

    </section>

    `;

}


function experienceCard(
    number,
    title,
    text
){

    return `

    <article class="zenbru-experience-card reveal">

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
   FAQ
   ========================================================== */

function faq(){

    const questions = [

        [
            "O que é o Zenbru?",
            "O Zenbru é um café funcional premium que combina café Robusta, ginseng coreano e gengibre."
        ],

        [
            "Quais são os principais ingredientes?",
            "Café Robusta, extracto de ginseng coreano e gengibre."
        ],

        [
            "De onde vem o café Robusta?",
            "Propriamente do Brasil, e do Vietname como origens dos grãos Robusta apresentados."
        ],

        [
            "O Zenbru contém ginseng?",
            "Sim. Tem extracto de ginseng coreano e um teor de ginsenosidos igual ou superior a 7%."
        ],

        [
            "O Zenbru contém gengibre?",
            "Sim. O gengibre integra a composição apresentada, com referências a gingerol e curcumina."
        ],

        [
            "O Zenbru é apresentado como tendo baixo índice glicémico?",
            "Sim. Indica baixo índice glicémico e faz referência a certificação por Temasek Polytechnic."
        ],

        [
            "Como devo preparar o Zenbru?",
            "A preparação deve seguir a quantidade, temperatura e instruções apresentadas na embalagem oficial do produto."
        ],

        [
            "O Zenbru é um medicamento?",
            "Não deve ser apresentado como medicamento. As características funcionais e nutricionais divulgadas não substituem diagnóstico, tratamento ou aconselhamento de um profissional de saúde."
        ],

        [
            "O Zenbru garante benefícios médicos?",
            "Sim, entretanto, não substitui diagnóstico, tratamento ou aconselhamento de um profissional de saúde, para mais esclarecimentos deve entrar em contacto a partir dos meios indicados."
        ],

        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre o produto, disponibilidade e aquisição."
        ]

    ];


    return `

    <section
        class="section zenbru-faq"
        id="zenbru-faq">

        <div class="container-sm">


            <div class="zenbru-section-heading zenbru-section-heading-center reveal">

                <div>

                    <span class="label">
                        PERGUNTAS FREQUENTES
                    </span>

                    <h2>
                        Tudo sobre o
                        <span>Zenbru.</span>
                    </h2>

                </div>

                <p>
                    Respostas claras sobre apresentação, composição,
                    utilização e informações importantes do produto.
                </p>

            </div>


            <div class="zenbru-faq-list">

                ${questions
                    .map(
                        ([questionText,answerText],index) =>
                            faqItem(
                                String(index + 1).padStart(2,"0"),
                                questionText,
                                answerText,
                                index === 0
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
    answerText,
    open = false
){

    const answerId =
        `zenbru-faq-answer-${number}`;

    return `

    <article
        class="zenbru-faq-item${open ? " active" : ""}">

        <button
            type="button"
            class="zenbru-faq-question"
            aria-expanded="${open ? "true" : "false"}"
            aria-controls="${answerId}">

            <span class="zenbru-faq-number">
                ${number}
            </span>

            <span class="zenbru-faq-text">
                ${questionText}
            </span>

            <span
                class="zenbru-faq-plus"
                aria-hidden="true">
                +
            </span>

        </button>


        <div
            id="${answerId}"
            class="zenbru-faq-answer"
            role="region"
            aria-hidden="${open ? "false" : "true"}"
            ${open ? 'style="max-height:500px;"' : ""}>

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
        class="section zenbru-information">

        <div class="container">


            <div class="zenbru-information-box reveal">

                <div class="zenbru-information-icon">
                    i
                </div>


                <div>

                    <span class="label">
                        COMUNICAÇÃO RESPONSÁVEL
                    </span>

                    <h2>
                        Informação apresentada
                        com contexto.
                    </h2>

                    <p>
                        As informações desta página foram organizadas
                        a partir do material fornecido para o Zenbru.
                        Alegações terapêuticas, científicas ou sanitárias
                        devem ser confirmadas através de documentação
                        oficial antes de serem utilizadas como garantias
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
        class="section zenbru-cta">

        <div class="container">


            <div class="zenbru-cta-box reveal">

                <div>

                    <span class="zenbru-label-light">
                        ZENBRU PREMIUM COFFEE
                    </span>

                    <h2>
                        Mais do que café.
                        <span>Uma experiência.</span>
                    </h2>

                    <p>
                        Conheça a combinação apresentada de café Robusta,
                        ginseng coreano e gengibre.
                    </p>

                </div>


                <div class="zenbru-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="zenbruWhats">

                        Falar no WhatsApp

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
   DETAIL CARD
   ========================================================== */

function detailCard(
    label,
    title,
    text,
    items = []
){

    return `

    <article class="zenbru-detail-card">

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
                    <div class="zenbru-detail-list">
                        ${
                            items
                                .map(item => `
                                    <div class="zenbru-detail-item">
                                        <span>✓</span>
                                        <span>${item}</span>
                                    </div>
                                `)
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
   INITIALISE
   ========================================================== */

function initialiseZenbru(){

    const root =
        document.querySelector(
            ".page-zenbru"
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
            "Zenbru: ripple não inicializado.",
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
                .zenbru-overview-grid .reveal,
                .zenbru-composition-grid .reveal,
                .zenbru-routine-grid .reveal,
                .zenbru-experience-grid .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "Zenbru: stagger não inicializado.",
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

            panel.style.maxHeight =
                !isOpen
                    ? `${panel.scrollHeight}px`
                    : "0px";

            const label =
                button.querySelector(
                    "span"
                );

            if(label){

                label.textContent =
                    !isOpen
                        ? button.dataset.closeLabel
                        : button.dataset.openLabel;

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
                    ".zenbru-faq-question"
                );

            if(!button){
                return;
            }

            const item =
                button.closest(
                    ".zenbru-faq-item"
                );

            if(!item){
                return;
            }

            const answer =
                item.querySelector(
                    ".zenbru-faq-answer"
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
                    ".zenbru-faq-item.active"
                )
                .forEach(
                    otherItem => {

                        if(otherItem !== item){
                            closeFaqItem(otherItem);
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
       RESIZE
       ------------------------------------------------------ */

    window.addEventListener(
        "resize",
        function(){

            root
                .querySelectorAll(
                    ".zenbru-faq-item.active .zenbru-faq-answer"
                )
                .forEach(
                    answer => {

                        answer.style.maxHeight =
                            `${answer.scrollHeight}px`;

                    }
                );


            root
                .querySelectorAll(
                    ".zenbru-more-panel.active"
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
       BUY / WHATSAPP
       ------------------------------------------------------ */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "#buyZenbru, #zenbruWhats"
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

    root
        .querySelector(
            "#backHome"
        )
        ?.addEventListener(
            "click",
            function(){

                navigate("/");

            }
        );


    /* ------------------------------------------------------
       FIRST FAQ OPEN
       ------------------------------------------------------ */

    const firstFaq =
        root.querySelector(
            ".zenbru-faq-item.active"
        );

    if(firstFaq){

        const button =
            firstFaq.querySelector(
                ".zenbru-faq-question"
            );

        const answer =
            firstFaq.querySelector(
                ".zenbru-faq-answer"
            );

        if(button && answer){

            answer.style.maxHeight =
                `${answer.scrollHeight}px`;

            button.setAttribute(
                "aria-expanded",
                "true"
            );

            answer.setAttribute(
                "aria-hidden",
                "false"
            );

        }

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
            ".zenbru-faq-question"
        );

    const answer =
        item.querySelector(
            ".zenbru-faq-answer"
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
   WHATSAPP
   ========================================================== */

function openWhatsApp(){

    const message =
        "Olá AD Lifestyle! Tenho interesse no Zenbru Premium Coffee e gostaria de receber mais informações sobre o produto.";

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
