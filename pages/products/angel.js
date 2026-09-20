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

            ${benefits()}

            ${productDetail()}

            ${composition()}

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

    <section
        class="hero angel-hero"
        id="angel-top">

        <div
            class="angel-hero-atmosphere"
            aria-hidden="true">

            <div class="angel-orb angel-orb-1"></div>

            <div class="angel-orb angel-orb-2"></div>

            <div class="angel-orb angel-orb-3"></div>

            <div class="angel-orbit angel-orbit-1"></div>

            <div class="angel-orbit angel-orbit-2"></div>

        </div>


        <div class="container angel-hero-grid">


            <!-- ==================================================
                 HERO COPY
                 ================================================== -->

            <div class="angel-hero-copy reveal">


                <span class="angel-eyebrow">
                    ANGEL MOON · PREMIUM CARE
                </span>


                <h1>

                    Conforto.
                    <span>
                        Protecção.
                    </span>
                    Bem-estar.

                </h1>


                <p class="angel-hero-description">

                    Uma experiência de cuidado menstrual concebida
                    para combinar conforto, absorção, respirabilidade
                    e tecnologia numa estrutura fina e flexível.

                </p>


                <div class="angel-hero-pills">

                    <span class="angel-hero-pill">
                        Super absorvente
                    </span>

                    <span class="angel-hero-pill">
                        Permeável ao ar
                    </span>

                    <span class="angel-hero-pill">
                        Fino e flexível
                    </span>

                    <span class="angel-hero-pill">
                        SmartCore
                    </span>

                </div>


                <div class="angel-hero-actions">


                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyAngel">

                        Comprar Angel Moon

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="angelDiscover"
                        data-scroll="#angel-benefits">

                        Descobrir benefícios

                    </button>


                </div>


                <div class="angel-hero-meta">


                    <div>

                        <strong>
                            7 camadas
                        </strong>

                        <span>
                            Estrutura tecnológica
                        </span>

                    </div>


                    <div>

                        <strong>
                            Super absorção
                        </strong>

                        <span>
                            Retenção de líquidos
                        </span>

                    </div>


                    <div>

                        <strong>
                            Respirável
                        </strong>

                        <span>
                            Estrutura permeável ao ar
                        </span>

                    </div>


                </div>


            </div>


            <!-- ==================================================
                 HERO PRODUCT
                 ================================================== -->

            <div class="angel-hero-product reveal-right">


                <div
                    class="angel-product-aura"
                    aria-hidden="true">
                </div>


                <div
                    class="angel-product-ring angel-product-ring-1"
                    aria-hidden="true">
                </div>


                <div
                    class="angel-product-ring angel-product-ring-2"
                    aria-hidden="true">
                </div>


                <div
                    class="angel-product-grid"
                    aria-hidden="true">
                </div>


                <img
                    src="${PRODUCT_IMAGE}"
                    alt="Angel Moon"
                    class="angel-product-image"
                    loading="eager"
                    decoding="async"
                >


                <div class="angel-product-caption">

                    <strong>
                        ANGEL MOON
                    </strong>

                    <span>
                        COMFORT · CARE · TECHNOLOGY
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
                    ANGEL MOON
                </span>


                <h2 class="section-title">

                    Conforto.
                    <span>
                        Protecção. Tecnologia.
                    </span>

                </h2>


                <p class="lead">

                    O Angel Moon é apresentado como uma solução
                    de cuidado menstrual que combina absorção,
                    conforto, respirabilidade e uma construção
                    tecnológica pensada para a utilização diária.

                </p>

            </div>


            <div class="angel-overview-grid">


                ${overviewCard(
                    "01",
                    "Conforto",
                    "Estrutura fina e flexível concebida para proporcionar uma utilização confortável."
                )}


                ${overviewCard(
                    "02",
                    "Absorção",
                    "Estrutura apresentada como super absorvente para retenção de líquidos."
                )}


                ${overviewCard(
                    "03",
                    "Respirabilidade",
                    "Camada apresentada como permeável ao ar para favorecer uma sensação de frescura."
                )}


                ${overviewCard(
                    "04",
                    "Tecnologia",
                    "Construção associada às tecnologias SmartCore e Negative Ion Core."
                )}


            </div>


            <div class="angel-overview-note reveal">

                <div class="angel-overview-note-icon">
                    ✦
                </div>

                <div>

                    <strong>
                        Uma experiência centrada no conforto.
                    </strong>

                    <p>

                        O conceito Angel Moon reúne características
                        de absorção, flexibilidade, respirabilidade
                        e tecnologia numa única estrutura.

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
    text
){

    const symbols = {

        "01":"♡",

        "02":"◉",

        "03":"⌁",

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
                    TECNOLOGIA
                </span>


                <h2>

                    Uma estrutura de
                    <span>
                        7 camadas.
                    </span>

                </h2>


                <p>

                    A estrutura apresentada para o Angel Moon
                    combina diferentes camadas destinadas a
                    contacto, distribuição, absorção, protecção
                    e respirabilidade.

                </p>

            </div>


            <div class="angel-technology-grid">


                ${technologyCard(
                    "01",
                    "Contacto suave",
                    "Camada em contacto com a pele, apresentada para proporcionar suavidade e conforto."
                )}


                ${technologyCard(
                    "02",
                    "Distribuição",
                    "Camada destinada a favorecer a distribuição do fluxo pela estrutura."
                )}


                ${technologyCard(
                    "03",
                    "Super absorção",
                    "Camada orientada para a absorção e retenção de líquidos."
                )}


                ${technologyCard(
                    "04",
                    "Núcleo absorvente",
                    "Estrutura central associada à retenção e absorção."
                )}


                ${technologyCard(
                    "05",
                    "Protecção",
                    "Camada destinada a ajudar a manter o conteúdo absorvido no interior."
                )}


                ${technologyCard(
                    "06",
                    "Respirabilidade",
                    "Estrutura apresentada como permeável ao ar."
                )}


                ${technologyCard(
                    "07",
                    "Base protectora",
                    "Camada exterior destinada a contribuir para a protecção durante a utilização."
                )}


            </div>


            <div class="angel-more-wrap">


                <button
                    type="button"
                    class="angel-more-toggle"
                    data-more-toggle="technology"
                    data-open-label="Ver detalhes da tecnologia"
                    data-close-label="Ocultar detalhes"
                    aria-expanded="false"
                    aria-controls="angel-technology-more">

                    <span>
                        Ver detalhes da tecnologia
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


                    <div class="angel-detail-grid">


                        ${detailCard(
                            "NEGATIVE ION CORE",
                            "Banda tecnológica",
                            "A documentação de apresentação fornecida para o Angel Moon descreve uma banda denominada Negative Ion Core.",
                            [
                                "Nano Silver",
                                "Iões negativos",
                                "Biomagnetismo",
                                "Infravermelho longínquo"
                            ]
                        )}


                        ${detailCard(
                            "SMARTCORE",
                            "Estrutura inteligente",
                            "O material disponibilizado apresenta a tecnologia SmartCore como uma característica adicional da construção.",
                            [
                                "Estrutura fina",
                                "Estrutura flexível",
                                "Ventilação",
                                "Absorção"
                            ]
                        )}


                        ${detailCard(
                            "INFORMAÇÃO TÉCNICA",
                            "Características comunicadas",
                            "As propriedades e alegações específicas devem ser consideradas em conjunto com a documentação técnica oficial e as certificações do fabricante.",
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


function technologyCard(
    number,
    title,
    text
){

    const symbols = {

        "01":"◇",
        "02":"⌁",
        "03":"◉",
        "04":"◎",
        "05":"◆",
        "06":"○",
        "07":"✦"

    };


    return `

    <article class="angel-technology-card reveal">


        <div class="angel-technology-top">

            <span>
                ${number}
            </span>

            <i aria-hidden="true">
                ${symbols[number] || "✦"}
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

function benefits(){

    return `

    <section
        id="angel-benefits"
        class="section angel-benefits-section">

        <div class="container">


            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    A EXPERIÊNCIA
                </span>


                <h2>

                    Conforto pensado
                    <span>
                        para o dia a dia.
                    </span>

                </h2>


                <p>

                    Uma combinação de características
                    orientadas para conforto, absorção,
                    respirabilidade e flexibilidade.

                </p>

            </div>


            <div class="angel-benefit-grid">


                ${benefitCard(
                    "01",
                    "Conforto",
                    "Contacto suave e estrutura concebida para uma utilização confortável.",
                    "♡"
                )}


                ${benefitCard(
                    "02",
                    "Super absorvente",
                    "Estrutura apresentada com elevada capacidade de absorção.",
                    "◉"
                )}


                ${benefitCard(
                    "03",
                    "Respirável",
                    "Estrutura permeável ao ar para favorecer uma sensação de frescura.",
                    "⌁"
                )}


                ${benefitCard(
                    "04",
                    "Tecnologia",
                    "Construção associada às tecnologias SmartCore e Negative Ion Core.",
                    "✦"
                )}


                ${benefitCard(
                    "05",
                    "Fino e flexível",
                    "Uma estrutura desenvolvida para acompanhar os movimentos com discrição.",
                    "◇"
                )}


                ${benefitCard(
                    "06",
                    "Controlo de odores",
                    "Propriedade desodorizante comunicada para o produto.",
                    "◆"
                )}


            </div>


            <div class="angel-more-wrap">


                <button
                    type="button"
                    class="angel-more-toggle"
                    data-more-toggle="benefits"
                    data-open-label="Ver todas as propriedades"
                    data-close-label="Ocultar propriedades"
                    aria-expanded="false"
                    aria-controls="angel-benefits-more">

                    <span>
                        Ver todas as propriedades
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>


                <div
                    id="angel-benefits-more"
                    class="angel-more-panel"
                    data-more-panel="benefits"
                    aria-hidden="true">


                    <div class="angel-detail-grid">


                        ${detailCard(
                            "PROPRIEDADES",
                            "Características apresentadas",
                            "O material promocional disponibilizado apresenta as seguintes características.",
                            [
                                "Flexível",
                                "Fino",
                                "Super absorvente",
                                "Ventilação",
                                "Higiénico",
                                "Efeito desodorizante",
                                "Estrutura tecnológica"
                            ]
                        )}


                        ${detailCard(
                            "BANDA TECNOLÓGICA",
                            "Negative Ion Core",
                            "A documentação de apresentação menciona uma banda tecnológica com diferentes componentes.",
                            [
                                "Nano Silver",
                                "Iões negativos",
                                "Biomagnetismo",
                                "Infravermelho longínquo"
                            ]
                        )}


                        ${detailCard(
                            "COMUNICAÇÃO RESPONSÁVEL",
                            "Sobre alegações específicas",
                            "Qualquer alegação relacionada com efeitos terapêuticos, alterações fisiológicas ou benefícios clínicos deve ser confirmada através de documentação técnica e evidência oficial.",
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


function benefitCard(
    number,
    title,
    text,
    icon
){

    return `

    <article class="angel-benefit-card reveal">


        <div class="angel-benefit-top">

            <span>
                ${number}
            </span>

            <i aria-hidden="true">
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
                    <span>
                        Conforto e tecnologia.
                    </span>

                </h2>


                <p>

                    Uma estrutura fina e flexível apresentada
                    para combinar absorção, conforto e
                    respirabilidade.

                </p>

            </div>


            <article class="angel-product-card reveal">


                <!-- ==================================================
                     PRODUCT VISUAL
                     ================================================== -->

                <div class="angel-product-card-visual">


                    <div
                        class="angel-detail-aura"
                        aria-hidden="true">
                    </div>


                    <div
                        class="angel-detail-ring angel-detail-ring-1"
                        aria-hidden="true">
                    </div>


                    <div
                        class="angel-detail-ring angel-detail-ring-2"
                        aria-hidden="true">
                    </div>


                    <div
                        class="angel-detail-grid-decoration"
                        aria-hidden="true">
                    </div>


                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="Angel Moon"
                        class="angel-product-detail-image"
                        loading="lazy"
                        decoding="async"
                    >


                    <span class="angel-detail-caption">

                        ANGEL MOON · COLLECTION

                    </span>


                </div>


                <!-- ==================================================
                     PRODUCT COPY
                     ================================================== -->

                <div class="angel-product-card-copy">


                    <span class="label">
                        ANGEL MOON
                    </span>


                    <h3>

                        Conforto.
                        <span>
                            Protecção e tecnologia.
                        </span>

                    </h3>


                    <p>

                        O Angel Moon é apresentado como um penso
                        higiénico com estrutura fina e flexível,
                        absorção, respirabilidade e características
                        tecnológicas.

                    </p>


                    <div class="angel-product-spec-list">


                        ${productSpec(
                            "Estrutura",
                            "7 camadas"
                        )}


                        ${productSpec(
                            "Absorção",
                            "Super absorvente"
                        )}


                        ${productSpec(
                            "Respirabilidade",
                            "Permeável ao ar"
                        )}


                        ${productSpec(
                            "Tecnologia",
                            "SmartCore & Negative Ion Core"
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


                                ${detailItem(
                                    "Estrutura fina e flexível"
                                )}


                                ${detailItem(
                                    "Super absorção"
                                )}


                                ${detailItem(
                                    "Estrutura permeável ao ar"
                                )}


                                ${detailItem(
                                    "Tecnologia SmartCore"
                                )}


                                ${detailItem(
                                    "Negative Ion Core"
                                )}


                                ${detailItem(
                                    "Características desodorizantes comunicadas"
                                )}


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


/* ==========================================================
   COMPOSITION
   ========================================================== */

function composition(){

    return `

    <section
        id="angel-composition"
        class="section angel-composition">

        <div class="container">


            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    COMPOSIÇÃO
                </span>


                <h2>

                    Estrutura desenvolvida
                    <span>
                        para o conforto.
                    </span>

                </h2>


                <p>

                    Conheça os principais elementos e
                    características apresentados na composição
                    e tecnologia do Angel Moon.

                </p>

            </div>


            <div class="angel-composition-grid">


                ${compositionItem(
                    "01",
                    "Superfície suave",
                    "Contacto apresentado para proporcionar uma sensação confortável sobre a pele."
                )}


                ${compositionItem(
                    "02",
                    "Negative Ion Core",
                    "Banda tecnológica apresentada como parte diferenciadora do produto."
                )}


                ${compositionItem(
                    "03",
                    "SAP ultra absorvente",
                    "Material absorvente destinado à retenção de líquidos."
                )}


                ${compositionItem(
                    "04",
                    "Filme respirável",
                    "Camada apresentada como permeável ao ar."
                )}


                ${compositionItem(
                    "05",
                    "Camada protectora",
                    "Estrutura destinada a contribuir para a protecção durante a utilização."
                )}


                ${compositionItem(
                    "06",
                    "Base impermeável",
                    "Camada exterior destinada a ajudar a prevenir fugas."
                )}


            </div>


            <div class="angel-composition-highlight reveal">


                <span class="label">
                    O ESSENCIAL
                </span>


                <h3>
                    Tecnologia integrada numa estrutura fina.
                </h3>


                <p>

                    A proposta do Angel Moon combina diferentes
                    elementos numa construção orientada para
                    absorção, conforto e utilização diária.

                </p>


            </div>


        </div>

    </section>

    `;

}


function compositionItem(
    number,
    title,
    text
){

    return `

    <article class="angel-composition-item reveal">


        <div class="angel-composition-number">
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
   VARIANTS
   ========================================================== */

function variants(){

    return `

    <section
        id="angel-variants"
        class="section angel-variants">

        <div class="container">


            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    ANGEL MOON COLLECTION
                </span>


                <h2>

                    Escolha o formato
                    <span>
                        adequado.
                    </span>

                </h2>


                <p>

                    Diferentes formatos apresentados para
                    diferentes momentos de utilização.

                </p>

            </div>


            <div class="angel-variant-grid">


                ${variant(
                    "./assets/products/angel1.png",
                    "Dia",
                    "24 cm",
                    "Protecção diária"
                )}


                ${variant(
                    "./assets/products/angel2.png",
                    "Noite",
                    "29 cm",
                    "Protecção nocturna"
                )}


                ${variant(
                    "./assets/products/angel3.png",
                    "Panty Liner",
                    "18 cm",
                    "Protecção ligeira"
                )}


            </div>


        </div>

    </section>

    `;

}


function variant(
    image,
    title,
    size,
    subtitle
){

    return `

    <article class="angel-variant-card reveal">


        <div class="angel-variant-image">


            <img
                src="${image}"
                alt="Angel Moon ${title} ${size}"
                loading="lazy"
                decoding="async"
            >


        </div>


        <div class="angel-variant-content">


            <span class="label">
                ANGEL MOON
            </span>


            <h3>
                ${title}
            </h3>


            <strong>
                ${size}
            </strong>


            <p>
                ${subtitle}
            </p>


        </div>


    </article>

    `;

}


/* ==========================================================
   CERTIFICATIONS
   PREPARADA PARA RECEBER AS IMAGENS REAIS
   ========================================================== */

function certifications(){

    return `

    <section
        id="angel-certifications"
        class="section angel-certifications">

        <div class="container">


            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    CERTIFICAÇÕES & DOCUMENTAÇÃO
                </span>


                <h2>

                    Qualidade que merece
                    <span>
                        documentação.
                    </span>

                </h2>


                <p>

                    Esta área está preparada para receber
                    as imagens das certificações, documentos
                    técnicos, padrões e outros comprovativos
                    oficiais associados ao Angel Moon.

                </p>

            </div>


            <div class="angel-certification-grid">


                ${certificate(
                    "./assets/products/certifications/angel-cert-01.png",
                    "Certificação Angel Moon",
                    "Documento oficial"
                )}


                ${certificate(
                    "./assets/products/certifications/angel-cert-02.png",
                    "Padrões de qualidade",
                    "Documentação técnica"
                )}


                ${certificate(
                    "./assets/products/certifications/angel-cert-03.png",
                    "Conformidade",
                    "Certificação / conformidade"
                )}


                ${certificate(
                    "./assets/products/certifications/angel-cert-04.png",
                    "Documentação adicional",
                    "Informação oficial"
                )}


            </div>


            <div class="angel-certification-note reveal">


                <div class="angel-certification-note-icon">
                    ✓
                </div>


                <div>

                    <span class="label">
                        DOCUMENTAÇÃO OFICIAL
                    </span>


                    <strong>
                        As imagens poderão ser substituídas
                        directamente pelos documentos reais.
                    </strong>


                    <p>

                        Os ficheiros devem ser colocados em
                        <strong>
                            assets/products/certifications/
                        </strong>
                        mantendo os nomes definidos neste ficheiro,
                        ou os caminhos poderão ser actualizados
                        posteriormente.

                    </p>

                </div>


            </div>


        </div>

    </section>

    `;

}


/* ==========================================================
   CERTIFICATION CARD
   ========================================================== */

function certificate(
    image,
    title,
    subtitle
){

    return `

    <article class="angel-certification-card reveal">


        <div class="angel-certification-image">


            <img
                src="${image}"
                alt="${title}"
                loading="lazy"
                decoding="async"
            >


            <div class="angel-certification-missing">

                <span>
                    Documentação
                </span>

                <small>
                    Imagem não disponível
                </small>

            </div>


        </div>


        <div class="angel-certification-caption">


            <span>
                ${subtitle}
            </span>


            <strong>
                ${title}
            </strong>


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
            "O que é o Angel Moon?",
            "O Angel Moon é apresentado como um penso higiénico com foco em conforto, absorção, respirabilidade e tecnologia."
        ],

        [
            "Quais são as principais características?",
            "Entre as características comunicadas estão a estrutura fina e flexível, super absorção, permeabilidade ao ar e tecnologias SmartCore e Negative Ion Core."
        ],

        [
            "Quais são os formatos disponíveis?",
            "A colecção apresentada inclui o formato Dia de 24 cm, Noite de 29 cm e Panty Liner de 18 cm."
        ],

        [
            "O Angel Moon é respirável?",
            "A informação disponibilizada para o produto apresenta a sua estrutura como permeável ao ar."
        ],

        [
            "O que é o Negative Ion Core?",
            "É a designação utilizada no material de apresentação para uma banda tecnológica que inclui referências a Nano Silver, iões negativos, biomagnetismo e infravermelho longínquo."
        ],

        [
            "O Angel Moon possui tecnologia SmartCore?",
            "Sim. A documentação de apresentação fornecida para o produto menciona a tecnologia SmartCore como parte da sua construção."
        ],

        [
            "O Angel Moon substitui tratamento médico?",
            "Não. O produto não deve ser apresentado como substituto de diagnóstico ou tratamento médico. Questões de saúde devem ser avaliadas por um profissional de saúde."
        ],

        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre disponibilidade, formatos e aquisição."
        ]

    ];


    return `

    <section
        id="angel-faq"
        class="section angel-faq">

        <div class="container-sm">


            <div class="angel-section-heading reveal">

                <span class="eyebrow">
                    PERGUNTAS FREQUENTES
                </span>


                <h2>

                    Tudo sobre
                    <span>
                        Angel Moon.
                    </span>

                </h2>


                <p>

                    Consulte as respostas às principais
                    questões sobre o produto.

                </p>

            </div>


            <div class="angel-faq-list">


                ${questions
                    .map(
                        ([question,answer],index) =>
                            faqItem(
                                String(index + 1).padStart(2,"0"),
                                question,
                                answer
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
    question,
    answer
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
                ${question}
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
                ${answer}
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
        class="section angel-information-section">

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
                        Informação, documentação
                        e transparência.
                    </h2>


                    <p>

                        As características e propriedades apresentadas
                        nesta página foram organizadas a partir do
                        material disponibilizado para o Angel Moon.

                    </p>


                    <p>

                        Alegações relacionadas com efeitos terapêuticos,
                        alterações fisiológicas ou benefícios clínicos
                        devem ser confirmadas através da documentação
                        técnica, certificações e evidência oficial
                        disponibilizadas pelo fabricante.

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
        id="angel-contact"
        class="section angel-cta-section">

        <div class="container">


            <div class="angel-cta-box reveal">


                <div>

                    <span class="angel-label-light">
                        ANGEL MOON
                    </span>


                    <h2>

                        Conforto pensado.
                        <span>
                            Tecnologia integrada.
                        </span>

                    </h2>


                    <p>

                        Conheça os formatos disponíveis
                        e fale connosco para saber mais
                        sobre o Angel Moon.

                    </p>


                </div>


                <div class="angel-cta-actions">


                    <button
                        type="button"
                        class="btn btn-primary"
                        id="angelWhatsApp">

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
            angel-detail-card
            ${wide ? "angel-detail-card-wide" : ""}
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

                    <div class="angel-detail-list">

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

    <div class="angel-detail-item">


        <span
            class="angel-detail-check"
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

function initialiseAngel(){

    const root =
        document.querySelector(
            ".page-angel"
        );


    if(!root){
        return;
    }


    /* ======================================================
       RIPPLE
       ====================================================== */

    try{

        root
            .querySelectorAll(
                ".btn, " +
                ".angel-more-toggle, " +
                ".angel-faq-question"
            )
            .forEach(
                button => ripple(button)
            );

    }catch(error){

        console.warn(
            "Angel Moon: ripple não inicializado.",
            error
        );

    }


    /* ======================================================
       STAGGER
       ====================================================== */

    try{

        stagger(
            root.querySelectorAll(
                `
                .angel-overview-grid .reveal,
                .angel-technology-grid .reveal,
                .angel-benefit-grid .reveal,
                .angel-composition-grid .reveal,
                .angel-variant-grid .reveal,
                .angel-certification-grid .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "Angel Moon: stagger não inicializado.",
            error
        );

    }


    /* ======================================================
       SCROLL
       ====================================================== */

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


    /* ======================================================
       MORE / DETAILS
       ====================================================== */

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
                        ? button.dataset.closeLabel || "Ocultar"
                        : button.dataset.openLabel || "Ver mais";

            }

        }
    );


    /* ======================================================
       FAQ — UMA ABERTA DE CADA VEZ
       ====================================================== */

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


            if(!item){
                return;
            }


            const answer =
                item.querySelector(
                    ".angel-faq-answer"
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
                    ".angel-faq-item.active"
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

                closeFaqItem(
                    item
                );

            }else{

                openFaqItem(
                    item,
                    button,
                    answer
                );

                openFaqPlus(
                    item
                );

            }

        }
    );


    /* ======================================================
       IMAGE FALLBACK
       ====================================================== */

    root
        .querySelectorAll(
            "img"
        )
        .forEach(
            image => {

                image.addEventListener(
                    "error",
                    function(){

                        const parent =
                            image.closest(
                                `
                                .angel-product-grid,
                                .angel-product-card-visual,
                                .angel-product-detail-frame,
                                .angel-variant-image,
                                .angel-certification-image
                                `
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

            }
        );


    /* ======================================================
       BUY BUTTONS
       ====================================================== */

    root.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "#buyAngel, #angelWhatsApp, [data-buy]"
                );


            if(!button){
                return;
            }


            let message =
                "Olá AD Lifestyle! Tenho interesse no Angel Moon e gostaria de receber mais informações sobre os formatos disponíveis.";


            const type =
                button.getAttribute(
                    "data-buy"
                );


            if(type === "product"){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o Angel Moon.";

            }


            if(
                button.id === "buyAngel"
            ){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o Angel Moon.";

            }


            openWhatsApp(
                message
            );

        }
    );


    /* ======================================================
       HOME
       ====================================================== */

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


    /* ======================================================
       RESIZE
       ====================================================== */

    window.addEventListener(
        "resize",
        function(){

            root
                .querySelectorAll(
                    ".angel-faq-item.active .angel-faq-answer"
                )
                .forEach(
                    answer => {

                        answer.style.maxHeight =
                            `${answer.scrollHeight}px`;

                    }
                );


            root
                .querySelectorAll(
                    ".angel-more-panel.active"
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


function closeFaqItem(
    item
){

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


function openFaqPlus(
    item
){

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

function openWhatsApp(
    message
){

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
