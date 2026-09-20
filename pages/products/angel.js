/* ==========================================================
   AD LIFESTYLE V2
   ANGEL.JS
   Premium Angel Moon Product Page
   Modelo estrutural: EVADOR / iSMART S3
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIG
   ========================================================== */

const PRODUCT_IMAGE =
    "./assets/products/angel.png";

const WHATSAPP_NUMBER =
    "244924964666";


const ANGEL_CERTIFICATIONS = [

    {
        image:
            "./assets/products/certifications/angel-cert-01.png",

        title:
            "Documento / Certificação 01",

        type:
            "DOCUMENTAÇÃO OFICIAL"
    },

    {
        image:
            "./assets/products/certifications/angel-cert-02.png",

        title:
            "Documento / Certificação 02",

        type:
            "DOCUMENTAÇÃO OFICIAL"
    },

    {
        image:
            "./assets/products/certifications/angel-cert-03.png",

        title:
            "Documento / Certificação 03",

        type:
            "DOCUMENTAÇÃO OFICIAL"
    },

    {
        image:
            "./assets/products/certifications/angel-cert-04.png",

        title:
            "Documento / Certificação 04",

        type:
            "DOCUMENTAÇÃO OFICIAL"
    }

];


const ANGEL_VARIANTS = [

    {
        image:
            "./assets/products/angel1.png",

        name:
            "Angel Moon Dia",

        tag:
            "24 cm",

        text:
            "Formato concebido para utilização durante o dia."
    },

    {
        image:
            "./assets/products/angel2.png",

        name:
            "Angel Moon Noite",

        tag:
            "29 cm",

        text:
            "Formato mais longo concebido para utilização nocturna."
    },

    {
        image:
            "./assets/products/angel3.png",

        name:
            "Angel Moon Panty Liner",

        tag:
            "18 cm",

        text:
            "Formato ligeiro para protecção diária."
    }

];


/* ==========================================================
   LOAD
   ========================================================== */

export function loadAngel(){

    applyTheme("angel");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-angel"
            data-product-page="angel">

            ${hero()}

            ${overview()}

            ${technology()}

            ${identity()}

            ${benefits()}

            ${productDetail()}

            ${routine()}

            ${experience()}

            ${variants()}

            ${certifications()}

            ${faq()}

            ${information()}

            ${cta()}

        </div>

    `;

    initialiseAngel();
}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section class="hero angel-hero">

        <div class="angel-hero-atmosphere">

            <div class="angel-orb angel-orb-1"></div>
            <div class="angel-orb angel-orb-2"></div>

            <div class="angel-orbit angel-orbit-1"></div>
            <div class="angel-orbit angel-orbit-2"></div>

        </div>


        <div class="container angel-hero-grid">

            <div class="angel-hero-copy reveal">

                <span class="angel-eyebrow">
                    ANGEL MOON · INTIMATE CARE
                </span>


                <h1>
                    ANGEL
                    <span>MOON.</span>
                </h1>


                <p class="angel-hero-description">

                    Conforto, protecção e tecnologia reunidos
                    numa experiência de cuidado íntimo concebida
                    para acompanhar diferentes momentos do dia.

                </p>


                <div class="angel-hero-pills">

                    <span class="angel-hero-pill">
                        Fino
                    </span>

                    <span class="angel-hero-pill">
                        Flexível
                    </span>

                    <span class="angel-hero-pill">
                        Super absorvente
                    </span>

                    <span class="angel-hero-pill">
                        Respirável
                    </span>

                </div>


                <div class="angel-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyAngel">

                        Adquirir Angel Moon

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="angelDiscover"
                        data-scroll="#angel-technology">

                        Descobrir Angel Moon

                    </button>

                </div>

            </div>


            <div class="angel-hero-product reveal-right">

                <div class="angel-product-aura"></div>

                <div class="angel-product-ring"></div>


                <div class="angel-product-grid">

                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="Angel Moon"
                        loading="eager"
                        decoding="async"
                        class="angel-product-image"
                    >

                </div>


                <div class="angel-product-caption">

                    <strong>
                        ANGEL MOON
                    </strong>

                    <span>
                        INTIMATE CARE
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
        id="angel-overview"
        class="section angel-overview-section">

        <div class="container">

            <div class="section-center angel-section-heading reveal">

                <span class="label">
                    VISÃO GERAL
                </span>

                <h2 class="section-title">
                    Conheça o conceito
                    <span>Angel Moon.</span>
                </h2>

                <p class="lead">

                    Angel Moon é apresentado como uma proposta
                    de cuidado íntimo que combina conforto,
                    protecção, absorção, respirabilidade e tecnologia
                    numa construção pensada para utilização diária.

                </p>

            </div>


            <div class="angel-overview-grid">

                ${overviewCard(
                    "01",
                    "Conforto",
                    "Construção fina e flexível concebida para acompanhar os movimentos."
                )}

                ${overviewCard(
                    "02",
                    "Absorção",
                    "Estrutura apresentada para absorção e retenção de líquidos."
                )}

                ${overviewCard(
                    "03",
                    "Respirabilidade",
                    "Base apresentada como permeável ao ar."
                )}

                ${overviewCard(
                    "04",
                    "Tecnologia",
                    "Elementos tecnológicos apresentados para a linha Angel Moon."
                )}

            </div>


            <div class="angel-overview-note reveal">

                <strong>
                    Cuidado íntimo com tecnologia integrada.
                </strong>

                <p>
                    As características apresentadas nesta página
                    reproduzem a informação promocional e técnica
                    disponibilizada para o produto.
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

        "01":"♡",
        "02":"◉",
        "03":"≈",
        "04":"✦"

    };


    return `

    <article class="angel-overview-card reveal">

        <span class="angel-card-number">
            ${number}
        </span>


        <div
            class="angel-card-icon"
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
        id="angel-technology"
        class="section angel-technology">

        <div class="container">

            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    TECNOLOGIA ANGEL MOON
                </span>

                <h2>
                    Uma estrutura pensada
                    <span>em camadas.</span>
                </h2>

                <p>
                    A construção Angel Moon reúne diferentes elementos
                    numa arquitectura orientada para absorção, protecção,
                    conforto e tecnologia.
                </p>

            </div>


            <div class="angel-technology-grid">


                <div class="angel-technology-visual reveal-left">

                    <div class="angel-tech-aura"></div>

                    <div class="angel-tech-ring"></div>


                    <div class="angel-tech-image-frame">

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Angel Moon"
                            loading="lazy"
                            decoding="async"
                            class="angel-tech-product-image"
                        >

                    </div>


                    <div class="angel-tech-caption">

                        <strong>
                            ANGEL MOON
                        </strong>

                        <span>
                            SMART INTIMATE TECHNOLOGY
                        </span>

                    </div>

                </div>


                <div class="angel-technology-copy reveal-right">

                    ${technologyCard(
                        "01",
                        "Construção multicamada",
                        "Uma arquitectura apresentada através de sete camadas."
                    )}

                    ${technologyCard(
                        "02",
                        "Negative Ion Core",
                        "Elemento tecnológico apresentado na comunicação da linha."
                    )}

                    ${technologyCard(
                        "03",
                        "Nano Silver",
                        "Tecnologia apresentada como parte da construção do produto."
                    )}

                    ${technologyCard(
                        "04",
                        "Conforto e respirabilidade",
                        "Estrutura fina, flexível e apresentada como permeável ao ar."
                    )}


                    <div class="angel-more-wrap">

                        <button
                            type="button"
                            class="angel-more-toggle"
                            data-more-toggle="technology"
                            data-open-label="Ver mais sobre a tecnologia"
                            data-close-label="Ocultar detalhes"
                            aria-expanded="false"
                            aria-controls="angel-technology-more">

                            <span>
                                Ver mais sobre a tecnologia
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="angel-technology-more"
                            class="angel-more-panel"
                            data-more-panel="technology"
                            aria-hidden="true">

                            <div class="angel-layer-grid">

                                ${layerCard(
                                    "01",
                                    "Superfície de contacto",
                                    "Camada superior de contacto."
                                )}

                                ${layerCard(
                                    "02",
                                    "Distribuição",
                                    "Encaminhamento do líquido."
                                )}

                                ${layerCard(
                                    "03",
                                    "Núcleo absorvente",
                                    "Área destinada à absorção e retenção."
                                )}

                                ${layerCard(
                                    "04",
                                    "Negative Ion Core",
                                    "Elemento tecnológico comunicado."
                                )}

                                ${layerCard(
                                    "05",
                                    "Nano Silver",
                                    "Elemento tecnológico apresentado."
                                )}

                                ${layerCard(
                                    "06",
                                    "Protecção",
                                    "Camada de protecção da estrutura."
                                )}

                                ${layerCard(
                                    "07",
                                    "Base respirável",
                                    "Camada inferior apresentada como permeável ao ar."
                                )}

                            </div>


                            <div class="angel-technology-note">

                                <strong>
                                    Outras tecnologias apresentadas
                                </strong>

                                <p>
                                    A comunicação promocional também menciona
                                    biomagnetismo, infravermelho longínquo,
                                    propriedades antibacterianas e desodorizantes.
                                    Estas alegações devem ser confirmadas através
                                    da documentação oficial.
                                </p>

                            </div>

                        </div>

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

    return `

    <article class="angel-technology-card reveal">

        <span class="angel-technology-number">
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


function layerCard(
    number,
    title,
    text
){

    return `

    <article class="angel-layer-card">

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

    </article>

    `;
}


/* ==========================================================
   IDENTITY
   ========================================================== */

function identity(){

    return `

    <section class="section angel-identity">

        <div class="container">

            <div class="angel-identity-grid">

                <div class="angel-identity-visual reveal-left">

                    <div class="angel-identity-frame">

                        <div class="angel-identity-aura"></div>

                        <div class="angel-identity-ring"></div>


                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Angel Moon"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                </div>


                <div class="angel-identity-copy reveal-right">

                    <span class="label">
                        IDENTIDADE
                    </span>


                    <h2 class="section-title">

                        Leveza.
                        Protecção.
                        <span>Cuidado.</span>

                    </h2>


                    <p class="lead">

                        Angel Moon é apresentado como uma experiência
                        de cuidado íntimo em que conforto, discrição
                        e tecnologia fazem parte da mesma proposta.

                    </p>


                    <div class="angel-benefit-checks">

                        ${benefitCheck("Fino")}
                        ${benefitCheck("Flexível")}
                        ${benefitCheck("Super absorvente")}
                        ${benefitCheck("Respirável")}
                        ${benefitCheck("Discreto")}
                        ${benefitCheck("Versátil")}

                    </div>


                    <div class="angel-identity-note">

                        <span class="label">
                            ANGEL MOON
                        </span>

                        <strong>
                            Conforto que acompanha.
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

    <div class="angel-benefit-check">

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

    <section class="section angel-benefits">

        <div class="container">

            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    A EXPERIÊNCIA
                </span>

                <h2>
                    O essencial em
                    <span>equilíbrio.</span>
                </h2>

                <p>
                    A proposta Angel Moon procura equilibrar
                    absorção, conforto, respirabilidade e discrição.
                </p>

            </div>


            <div class="angel-benefits-grid">

                ${benefitCard(
                    "COM",
                    "Conforto",
                    "Construção fina e flexível pensada para utilização diária."
                )}

                ${benefitCard(
                    "ABS",
                    "Absorção",
                    "Estrutura apresentada para retenção de líquidos."
                )}

                ${benefitCard(
                    "AIR",
                    "Respirabilidade",
                    "Base apresentada como permeável ao ar."
                )}

                ${benefitCard(
                    "TEC",
                    "Tecnologia",
                    "Elementos tecnológicos integrados na construção."
                )}

            </div>


            <div class="angel-benefits-note reveal">

                <span class="label">
                    ANGEL MOON
                </span>

                <h3>
                    Tecnologia integrada no cuidado íntimo.
                </h3>

                <p>
                    A comunicação promocional fornecida menciona
                    Negative Ion Core, Nano Silver, biomagnetismo,
                    infravermelho longínquo e propriedades
                    antibacterianas e desodorizantes.
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

    <article class="angel-benefit-card reveal">

        <div class="angel-benefit-code">
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
        id="angel-product"
        class="section angel-product-section">

        <div class="container">

            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    O PRODUTO
                </span>

                <h2>
                    Angel Moon.
                    <span>Concebido para acompanhar.</span>
                </h2>

                <p>
                    A linha é apresentada através de uma construção
                    multicamada e diferentes formatos de utilização.
                </p>

            </div>


            <article class="angel-product-card reveal">

                <div class="angel-product-card-visual">

                    <div class="angel-detail-aura"></div>

                    <div class="angel-detail-ring"></div>


                    <div class="angel-product-detail-grid">

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Angel Moon"
                            loading="lazy"
                            decoding="async"
                            class="angel-product-detail-image"
                        >

                    </div>


                    <span class="angel-detail-caption">
                        ANGEL MOON · INTIMATE CARE
                    </span>

                </div>


                <div class="angel-product-card-copy">

                    <span class="label">
                        ANGEL MOON
                    </span>


                    <h3>
                        Cuidado íntimo.
                        <span>Tecnologia integrada.</span>
                    </h3>


                    <p>
                        Uma construção apresentada para combinar
                        absorção, conforto, respirabilidade e diferentes
                        formatos de utilização.
                    </p>


                    <div class="angel-product-spec-list">

                        ${productSpec(
                            "Estrutura",
                            "7 camadas"
                        )}

                        ${productSpec(
                            "Tecnologia",
                            "Negative Ion Core"
                        )}

                        ${productSpec(
                            "Material",
                            "Nano Silver"
                        )}

                        ${productSpec(
                            "Linha",
                            "Dia · Noite · Panty Liner"
                        )}

                    </div>


                    <div class="angel-more-wrap">

                        <button
                            type="button"
                            class="angel-more-toggle"
                            data-more-toggle="product"
                            data-open-label="Ver mais características"
                            data-close-label="Ocultar características"
                            aria-expanded="false"
                            aria-controls="angel-product-more">

                            <span>
                                Ver mais características
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="angel-product-more"
                            class="angel-more-panel"
                            data-more-panel="product"
                            aria-hidden="true">

                            <div class="angel-detail-list">

                                ${detailItem("Fino e flexível.")}

                                ${detailItem("Super absorvente.")}

                                ${detailItem("Ventilação apresentada como óptima.")}

                                ${detailItem("Tecnologia Negative Ion Core.")}

                                ${detailItem("Nano Silver.")}

                                ${detailItem("Biomagnetismo e infravermelho longínquo mencionados na comunicação promocional.")}

                                ${detailItem("Propriedades antibacterianas e desodorizantes mencionadas na apresentação do produto.")}

                            </div>

                        </div>

                    </div>


                    <button
                        type="button"
                        class="btn btn-primary angel-card-buy"
                        data-buy="product">

                        Adquirir Angel Moon

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

    <div class="angel-product-spec">

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

    <div class="angel-detail-item">

        <span
            class="angel-check"
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
   ROUTINE
   ========================================================== */

function routine(){

    return `

    <section class="section angel-routine">

        <div class="container-sm">

            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    LINHA ANGEL MOON
                </span>

                <h2>
                    Escolha o formato
                    <span>certo.</span>
                </h2>

                <p>
                    A linha foi apresentada em diferentes formatos
                    para diferentes momentos de utilização.
                </p>

            </div>


            <div class="angel-routine-list">

                ${routineStep(
                    "01",
                    "Dia",
                    "Angel Moon Dia · 24 cm · protecção diária."
                )}

                ${routineStep(
                    "02",
                    "Noite",
                    "Angel Moon Noite · 29 cm · protecção nocturna."
                )}


                <div
                    class="angel-more-panel"
                    data-more-panel="routine"
                    aria-hidden="true"
                    id="angel-routine-more">

                    ${routineStep(
                        "03",
                        "Panty Liner",
                        "Angel Moon Panty Liner · 18 cm · protecção ligeira."
                    )}

                    ${routineStep(
                        "04",
                        "Escolha pessoal",
                        "A escolha deve acompanhar a necessidade e o momento de utilização."
                    )}

                </div>

            </div>


            <button
                type="button"
                class="angel-more-toggle"
                data-more-toggle="routine"
                data-open-label="Ver todos os formatos"
                data-close-label="Ocultar formatos"
                aria-expanded="false"
                aria-controls="angel-routine-more">

                <span>
                    Ver todos os formatos
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

    <article class="angel-routine-step reveal">

        <div class="angel-routine-number">
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

    <section class="section angel-experience">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    ANGEL MOON LIFESTYLE
                </span>

                <h2 class="section-title">
                    Confortável.
                    Discreto.
                    <span>Confiante.</span>
                </h2>

                <p class="lead">
                    Uma proposta de cuidado íntimo pensada para integrar
                    protecção, leveza e tecnologia no quotidiano.
                </p>

            </div>


            <div class="angel-experience-grid">

                ${experienceCard(
                    "♡",
                    "Conforto",
                    "Construção fina e flexível."
                )}

                ${experienceCard(
                    "◉",
                    "Protecção",
                    "Estrutura orientada para absorção."
                )}

                ${experienceCard(
                    "≈",
                    "Respirabilidade",
                    "Base apresentada como permeável ao ar."
                )}

                ${experienceCard(
                    "✦",
                    "Tecnologia",
                    "Elementos tecnológicos integrados."
                )}

                ${experienceCard(
                    "◇",
                    "Discrição",
                    "Uma proposta centrada numa experiência discreta."
                )}

                ${experienceCard(
                    "∞",
                    "Versatilidade",
                    "Diferentes formatos para diferentes momentos."
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

    <article class="angel-experience-card reveal">

        <div class="angel-experience-icon">
            ${icon}
        </div>

        <span class="angel-experience-number">
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
   VARIANTS
   ========================================================== */

function variants(){

    return `

    <section
        id="angel-variants"
        class="section angel-variants">

        <div class="container">

            <div class="section-center angel-section-heading reveal">

                <span class="label">
                    FORMATOS
                </span>

                <h2 class="section-title">
                    Uma linha.
                    <span>Três formatos.</span>
                </h2>

                <p class="lead">
                    Diferentes opções para diferentes momentos
                    de utilização.
                </p>

            </div>


            <div class="angel-variants-grid">

                ${ANGEL_VARIANTS
                    .map(
                        variant => `
                            <article class="angel-variant-card reveal">

                                <div class="angel-variant-image">

                                    <img
                                        src="${variant.image}"
                                        alt="${variant.name}"
                                        loading="lazy"
                                        decoding="async"
                                    >

                                </div>


                                <div class="angel-variant-content">

                                    <span class="angel-variant-tag">
                                        ${variant.tag}
                                    </span>

                                    <h3>
                                        ${variant.name}
                                    </h3>

                                    <p>
                                        ${variant.text}
                                    </p>

                                </div>

                            </article>
                        `
                    )
                    .join("")
                }

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

    <section
        id="angel-certifications"
        class="section angel-certifications">

        <div class="container">

            <div class="section-center angel-section-heading reveal">

                <span class="label">
                    CERTIFICAÇÕES
                </span>

                <h2 class="section-title">
                    Documentação
                    <span>Angel Moon.</span>
                </h2>

                <p class="lead">
                    Área preparada para receber as imagens das
                    certificações, relatórios e documentos oficiais.
                </p>

            </div>


            <div class="angel-certifications-grid">

                ${ANGEL_CERTIFICATIONS
                    .map(
                        cert => `

                            <article
                                class="angel-certification-card reveal">

                                <div class="angel-certification-image-wrap">

                                    <img
                                        src="${cert.image}"
                                        alt="${cert.title}"
                                        loading="lazy"
                                        decoding="async"
                                        data-cert-image
                                    >

                                    <div
                                        class="angel-certification-placeholder"
                                        data-cert-placeholder>

                                        <strong>
                                            ${cert.title}
                                        </strong>

                                        <span>
                                            Imagem ainda não disponível
                                        </span>

                                    </div>

                                </div>


                                <div class="angel-certification-content">

                                    <span class="angel-certification-type">
                                        ${cert.type}
                                    </span>

                                    <h3>
                                        ${cert.title}
                                    </h3>

                                    <a
                                        href="${cert.image}"
                                        target="_blank"
                                        rel="noopener"
                                        class="angel-certification-link"
                                        data-cert-link>

                                        Abrir documento

                                    </a>

                                </div>

                            </article>

                        `
                    )
                    .join("")
                }

            </div>

        </div>

    </section>

    `;
}


/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

    const questions = [

        [
            "O que é o Angel Moon?",
            "Angel Moon é uma linha de cuidado íntimo apresentada com foco em conforto, absorção, respirabilidade e tecnologia."
        ],

        [
            "Quais são os formatos disponíveis?",
            "A linha apresentada nesta página inclui Angel Moon Dia, Angel Moon Noite e Angel Moon Panty Liner."
        ],

        [
            "O que são as sete camadas?",
            "A apresentação do produto descreve uma estrutura composta por sete camadas."
        ],

        [
            "O que significa Negative Ion Core?",
            "É uma designação tecnológica apresentada na comunicação do produto. As características associadas devem ser confirmadas através da documentação oficial."
        ],

        [
            "O produto menciona Nano Silver?",
            "Sim. Nano Silver é apresentado como um dos elementos tecnológicos da construção do Angel Moon."
        ],

        [
            "O Angel Moon é respirável?",
            "A apresentação do produto descreve a base como permeável ao ar."
        ],

        [
            "Que outras tecnologias são mencionadas?",
            "A comunicação promocional fornecida menciona ainda biomagnetismo, infravermelho longínquo, propriedades antibacterianas e desodorizantes."
        ],

        [
            "Estas propriedades estão oficialmente certificadas?",
            "A confirmação deve ser feita através dos documentos, certificações e informações oficiais correspondentes."
        ],

        [
            "O Angel Moon substitui tratamento médico?",
            "Não. Um produto de cuidado íntimo não substitui diagnóstico, aconselhamento ou tratamento médico."
        ]

    ];


    return `

    <section
        id="angel-faq"
        class="section angel-faq-section">

        <div class="container-sm">

            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    PERGUNTAS FREQUENTES
                </span>

                <h2>
                    Tudo sobre o
                    <span>Angel Moon.</span>
                </h2>

                <p>
                    Consulte apenas a informação necessária,
                    abrindo cada resposta individualmente.
                </p>

            </div>


            <div class="angel-faq-list">

                ${questions
                    .map(
                        ([questionText, answerText], index) =>
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
        `angel-faq-answer-${number}`;


    return `

    <article class="angel-faq-item">

        <button
            type="button"
            class="angel-faq-question"
            aria-expanded="false"
            aria-controls="${answerId}">

            <span class="angel-faq-number">
                ${number}
            </span>

            <span class="angel-faq-text">
                ${questionText}
            </span>

            <span
                class="angel-faq-plus"
                aria-hidden="true">

                +

            </span>

        </button>


        <div
            id="${answerId}"
            class="angel-faq-answer"
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

    <section class="section angel-information-section">

        <div class="container">

            <div class="angel-information-box reveal">

                <div class="angel-information-icon">
                    i
                </div>

                <div>

                    <span class="label">
                        COMUNICAÇÃO RESPONSÁVEL
                    </span>

                    <h2>
                        Informação organizada.
                        <span>Documentação em primeiro lugar.</span>
                    </h2>

                    <p>
                        As informações desta página foram organizadas
                        a partir do material disponibilizado para o Angel Moon.
                        Características específicas, composição, tecnologias
                        e alegações associadas devem ser confirmadas através
                        da documentação oficial.
                    </p>

                    <p>
                        As certificações e documentos oficiais serão apresentados
                        na área própria assim que as imagens finais forem integradas.
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

    <section class="section angel-cta-section">

        <div class="container">

            <div class="angel-cta-box reveal">

                <span class="angel-label-light">
                    ANGEL MOON
                </span>

                <h2>
                    Conforto.
                    <span>Protecção.</span>
                    Tecnologia.
                </h2>

                <p>
                    Descubra a linha Angel Moon e obtenha
                    informações sobre formatos, disponibilidade
                    e documentação.
                </p>


                <div class="angel-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="angelWhats">

                        Falar no WhatsApp

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="backHome">

                        Voltar à AD Lifestyle

                    </button>

                </div>


                <p class="angel-cta-disclaimer">
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

function initialiseAngel(){

    const root =
        document.querySelector(
            ".page-angel"
        );

    if(!root){
        return;
    }


    try{

        root
            .querySelectorAll(".btn")
            .forEach(button => ripple(button));

    }catch(error){

        console.warn(
            "Angel Moon: ripple não inicializado.",
            error
        );

    }


    try{

        stagger(
            root.querySelectorAll(
                `
                .angel-overview-grid .reveal,
                .angel-benefits-grid .reveal,
                .angel-experience-grid .reveal,
                .angel-routine-list .reveal,
                .angel-variants-grid .reveal,
                .angel-certifications-grid .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "Angel Moon: stagger não inicializado.",
            error
        );

    }


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


    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    ".angel-faq-question"
                );

            if(!button){
                return;
            }

            const item =
                button.closest(
                    ".angel-faq-item"
                );

            const answer =
                item?.querySelector(
                    ".angel-faq-answer"
                );

            if(!item || !answer){
                return;
            }


            const isOpen =
                item.classList.contains(
                    "active"
                );


            root
                .querySelectorAll(
                    ".angel-faq-item.active"
                )
                .forEach(otherItem=>{

                    if(otherItem !== item){

                        closeFaqItem(
                            otherItem
                        );

                    }

                });


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


    root
        .querySelectorAll(
            "[data-cert-image]"
        )
        .forEach(image=>{

            image.addEventListener(
                "load",
                function(){

                    const card =
                        image.closest(
                            ".angel-certification-card"
                        );

                    const placeholder =
                        card?.querySelector(
                            "[data-cert-placeholder]"
                        );

                    if(placeholder){

                        placeholder.style.display =
                            "none";

                    }

                },
                {
                    once:true
                }
            );


            image.addEventListener(
                "error",
                function(){

                    const card =
                        image.closest(
                            ".angel-certification-card"
                        );

                    const placeholder =
                        card?.querySelector(
                            "[data-cert-placeholder]"
                        );

                    const link =
                        card?.querySelector(
                            "[data-cert-link]"
                        );


                    if(card){

                        card.classList.add(
                            "image-error"
                        );

                    }


                    if(placeholder){

                        placeholder.style.display =
                            "flex";

                    }


                    if(link){

                        link.classList.add(
                            "is-disabled"
                        );

                        link.setAttribute(
                            "aria-disabled",
                            "true"
                        );

                    }

                },
                {
                    once:true
                }
            );

        });


    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "#buyAngel, #angelWhats, [data-buy]"
                );

            if(!button){
                return;
            }


            let message =
                "Olá AD Lifestyle! Tenho interesse no Angel Moon e gostaria de receber mais informações.";


            if(
                button.id === "buyAngel" ||
                button.getAttribute("data-buy") === "product"
            ){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o Angel Moon.";

            }


            openWhatsApp(message);

        }
    );


    const backHome =
        root.querySelector(
            "#backHome"
        );

    if(backHome){

        backHome.addEventListener(
            "click",
            ()=>navigate("/")
        );

    }


    window.addEventListener(
        "resize",
        function(){

            root
                .querySelectorAll(
                    ".angel-faq-item.active .angel-faq-answer"
                )
                .forEach(answer=>{

                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                });


            root
                .querySelectorAll(
                    ".angel-more-panel.active"
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
            ".angel-faq-question"
        );

    const answer =
        item.querySelector(
            ".angel-faq-answer"
        );

    const plus =
        item.querySelector(
            ".angel-faq-plus"
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
            ".angel-faq-plus"
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

