/* ==========================================================
   AD LIFESTYLE V2
   ANGEL.JS
   Premium Product Page — Angel Moon
   Standardised Product Architecture
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";
const PRODUCT_IMAGE = "./assets/products/angel.png";


/* ==========================================================
   LOAD ANGEL PAGE
   ========================================================== */

export function loadAngel(){

    applyTheme("angel");

    const app = document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-angel"
            data-product-page="angel">

            ${angelHero()}

            ${angelOverview()}

            ${angelTechnology()}

            ${angelBenefits()}

            ${angelProductDetail()}

            ${angelComposition()}

            ${angelVariants()}

            ${angelFaq()}

            ${angelDisclaimer()}

            ${angelCta()}

        </div>

    `;

    initialiseAngel();

}


/* ==========================================================
   HERO
   ========================================================== */

function angelHero(){

    return `

    <section
        class="hero angel-hero"
        id="angel-top">

        <div
            class="angel-hero-atmosphere"
            aria-hidden="true">

            <span class="angel-orb angel-orb-1"></span>
            <span class="angel-orb angel-orb-2"></span>
            <span class="angel-orb angel-orb-3"></span>

            <span class="angel-orbit angel-orbit-1"></span>
            <span class="angel-orbit angel-orbit-2"></span>

        </div>


        <div class="container hero-grid">


            <!-- ==================================================
                 HERO CONTENT
                 ================================================== -->

            <div class="hero-content reveal">


                <span class="angel-eyebrow">
                    ANGEL MOON · COLLECTION
                </span>


                <h1 class="hero-title">

                    Conforto,
                    <span>
                        Elegância
                    </span>
                    & Bem-estar

                </h1>


                <p class="hero-sub">

                    Uma experiência de conforto e protecção
                    durante o período menstrual, combinando
                    absorção, suavidade, respirabilidade
                    e tecnologia.

                </p>


                <div class="angel-hero-pills">

                    <span>
                        Super absorvente
                    </span>

                    <span>
                        Permeável ao ar
                    </span>

                    <span>
                        Fino e flexível
                    </span>

                    <span>
                        Tecnologia
                    </span>

                </div>


                <div class="hero-actions">


                    <button
                        class="btn btn-primary angel-btn-primary"
                        id="buyAngel"
                        type="button">

                        Comprar agora

                    </button>


                    <button
                        class="btn btn-glass angel-btn-glass"
                        id="benefitsBtn"
                        type="button">

                        Ver benefícios

                    </button>


                </div>


                <!-- ==================================================
                     HERO META
                     ================================================== -->

                <div class="angel-hero-meta">


                    <div>

                        <strong>
                            Absorção
                        </strong>

                        <span>
                            Estrutura super absorvente
                        </span>

                    </div>


                    <div>

                        <strong>
                            Respirabilidade
                        </strong>

                        <span>
                            Estrutura permeável ao ar
                        </span>

                    </div>


                    <div>

                        <strong>
                            Flexibilidade
                        </strong>

                        <span>
                            Estrutura fina e flexível
                        </span>

                    </div>


                </div>


            </div>


            <!-- ==================================================
                 HERO PRODUCT
                 ================================================== -->

            <div class="hero-visual reveal-right">


                <div class="angel-hero-product floating">


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
                        class="parallax"
                        data-speed="28"
                        src="${PRODUCT_IMAGE}"
                        alt="Angel Moon"
                        loading="eager"
                    >


                    <div class="angel-product-caption">

                        <span>
                            ANGEL MOON
                        </span>

                        <strong>
                            COMFORT & CARE
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

function angelOverview(){

    return `

    <section
        class="section angel-overview-section"
        id="angel-overview">

        <div class="container">


            <div class="section-center reveal">


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

                    O Angel Moon é apresentado com foco em
                    conforto, absorção, respirabilidade e uma
                    construção tecnológica pensada para a
                    utilização durante o período menstrual.

                </p>


            </div>


            <div class="angel-overview-grid">


                ${angelOverviewCard(
                    "01",
                    "Conforto",
                    "Contacto suave e uma estrutura concebida para proporcionar maior conforto durante a utilização."
                )}


                ${angelOverviewCard(
                    "02",
                    "Absorção",
                    "Estrutura apresentada como super absorvente e orientada para a retenção de líquidos."
                )}


                ${angelOverviewCard(
                    "03",
                    "Respirabilidade",
                    "Camada apresentada como permeável ao ar, favorecendo uma sensação de frescura."
                )}


                ${angelOverviewCard(
                    "04",
                    "Tecnologia",
                    "Construção associada às tecnologias SmartCore e Negative Ion Core."
                )}


            </div>


            <div class="angel-overview-note reveal">


                <div class="angel-overview-note-icon">
                    ◎
                </div>


                <div>

                    <strong>
                        Uma abordagem centrada na experiência de utilização.
                    </strong>


                    <p>

                        O Angel Moon combina características
                        de absorção, conforto e respirabilidade
                        numa estrutura de utilização diária.

                    </p>

                </div>


            </div>


        </div>

    </section>

    `;

}


function angelOverviewCard(number,title,text){

    return `

    <article class="angel-overview-card reveal">


        <span class="angel-card-number">
            ${number}
        </span>


        <div class="angel-card-icon">

            ${
                number === "01"
                    ? "♡"
                    : number === "02"
                        ? "◉"
                        : number === "03"
                            ? "⌁"
                            : "✦"
            }

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

function angelTechnology(){

    return `

    <section
        class="section angel-technology"
        id="angel-technology">

        <div class="container">


            <div class="section-center reveal">


                <span class="label">
                    TECNOLOGIA
                </span>


                <h2 class="section-title">

                    Uma estrutura de
                    <span>
                        7 camadas.
                    </span>

                </h2>


                <p class="lead">

                    A estrutura apresentada combina diferentes
                    camadas destinadas a contacto suave,
                    distribuição, absorção, protecção e
                    respirabilidade.

                </p>


            </div>


            <div class="angel-technology-grid">


                ${technologyCard(
                    "01",
                    "Contacto suave",
                    "Camada em contacto com a pele, concebida para proporcionar suavidade e conforto."
                )}


                ${technologyCard(
                    "02",
                    "Distribuição",
                    "Ajuda a distribuir o fluxo pela estrutura do produto."
                )}


                ${technologyCard(
                    "03",
                    "Super absorção",
                    "Camada de absorção concebida para reter os líquidos."
                )}


                ${technologyCard(
                    "04",
                    "Núcleo absorvente",
                    "Estrutura central orientada para a retenção e absorção."
                )}


                ${technologyCard(
                    "05",
                    "Camada protectora",
                    "Contribui para manter o conteúdo absorvido no interior."
                )}


                ${technologyCard(
                    "06",
                    "Respirabilidade",
                    "Estrutura permeável ao ar para favorecer uma maior sensação de frescura."
                )}


                ${technologyCard(
                    "07",
                    "Base protectora",
                    "Camada exterior destinada a proporcionar segurança durante a utilização."
                )}


            </div>


            <div class="angel-more-information">


                <button
                    class="angel-details-toggle"
                    type="button"
                    aria-expanded="false">


                    <span>
                        Ver detalhes da tecnologia
                    </span>


                    <span class="angel-details-icon">
                        +
                    </span>


                </button>


                <div class="angel-details-content">


                    <div class="angel-details-grid">


                        <article class="angel-detail-card">


                            <span class="label">
                                NEGATIVE ION CORE
                            </span>


                            <h3>
                                Banda tecnológica
                            </h3>


                            <p>

                                A documentação de apresentação
                                fornecida para o Angel Moon descreve
                                uma banda tecnológica denominada
                                Negative Ion Core.

                            </p>


                            <div class="angel-detail-list">


                                ${detailItem(
                                    "Nano Silver"
                                )}


                                ${detailItem(
                                    "Iões negativos"
                                )}


                                ${detailItem(
                                    "Biomagnetismo"
                                )}


                                ${detailItem(
                                    "Infravermelho longínquo"
                                )}


                            </div>


                        </article>


                        <article class="angel-detail-card">


                            <span class="label">
                                SMARTCORE
                            </span>


                            <h3>
                                Estrutura inteligente
                            </h3>


                            <p>

                                O material fornecido apresenta
                                a tecnologia SmartCore como uma
                                característica adicional da
                                construção do produto.

                            </p>


                            <div class="angel-detail-list">


                                ${detailItem(
                                    "Estrutura fina"
                                )}


                                ${detailItem(
                                    "Estrutura flexível"
                                )}


                                ${detailItem(
                                    "Ventilação óptima"
                                )}


                                ${detailItem(
                                    "Elevada absorção"
                                )}


                            </div>


                        </article>


                        <article class="angel-detail-card angel-detail-card-wide">


                            <span class="label">
                                INFORMAÇÃO TÉCNICA
                            </span>


                            <h3>
                                Características comunicadas
                            </h3>


                            <p>

                                As informações disponibilizadas para
                                o produto incluem referências a
                                propriedades antibacterianas,
                                desodorizantes, absorventes,
                                higiénicas e de ventilação.

                            </p>


                            <p>

                                Alegações relacionadas com efeitos
                                terapêuticos ou alterações fisiológicas
                                devem ser consideradas apenas quando
                                suportadas pela documentação técnica,
                                certificações e evidência oficial
                                disponibilizadas pelo fabricante.

                            </p>


                        </article>


                    </div>


                </div>


            </div>


        </div>

    </section>

    `;

}


function technologyCard(number,title,text){

    return `

    <article class="angel-technology-card reveal">


        <div class="angel-technology-top">

            <span>
                ${number}
            </span>

            <i>
                ${number === "01" ? "◇" :
                    number === "02" ? "⌁" :
                    number === "03" ? "◉" :
                    number === "04" ? "◎" :
                    number === "05" ? "◆" :
                    number === "06" ? "○" :
                    "✦"}
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

function angelBenefits(){

    return `

    <section
        id="benefits"
        class="section angel-benefits-section">

        <div class="container">


            <div class="section-center reveal">


                <span class="label">
                    BENEFÍCIOS
                </span>


                <h2 class="section-title">

                    Conforto pensado
                    <span>
                        para a utilização diária.
                    </span>

                </h2>


                <p class="lead">

                    Uma combinação de conforto, absorção,
                    respirabilidade e características
                    tecnológicas comunicadas para o produto.

                </p>


            </div>


            <div class="angel-benefit-grid">


                ${benefit(
                    "01",
                    "Conforto superior",
                    "Contacto suave e confortável com a pele.",
                    "♡"
                )}


                ${benefit(
                    "02",
                    "Super absorvente",
                    "Estrutura concebida para elevada capacidade de absorção.",
                    "◉"
                )}


                ${benefit(
                    "03",
                    "Respirável",
                    "Estrutura permeável ao ar para maior sensação de frescura.",
                    "⌁"
                )}


                ${benefit(
                    "04",
                    "Tecnologia antibacteriana",
                    "Característica integrada na estrutura apresentada do produto.",
                    "◆"
                )}


                ${benefit(
                    "05",
                    "Controlo de odores",
                    "Propriedade desodorizante comunicada para o Angel Moon.",
                    "✦"
                )}


                ${benefit(
                    "06",
                    "Fino e flexível",
                    "Pensado para acompanhar os movimentos com discrição.",
                    "◇"
                )}


            </div>


            <div class="angel-more-information">


                <button
                    class="angel-details-toggle"
                    type="button"
                    aria-expanded="false">

                    <span>
                        Ver detalhes das propriedades
                    </span>


                    <span class="angel-details-icon">
                        +
                    </span>

                </button>


                <div class="angel-details-content">


                    <div class="angel-details-grid">


                        <article class="angel-detail-card">


                            <span class="label">
                                PROPRIEDADES
                            </span>


                            <h3>
                                As 7 propriedades apresentadas
                            </h3>


                            <div class="angel-detail-list">


                                ${detailItem("Flexível")}


                                ${detailItem("Fino")}


                                ${detailItem("Super absorvente")}


                                ${detailItem("Ventilação óptima")}


                                ${detailItem("Higiénico")}


                                ${detailItem("Saudável")}


                                ${detailItem("Estilosa")}


                            </div>


                        </article>


                        <article class="angel-detail-card">


                            <span class="label">
                                BANDA TECNOLÓGICA
                            </span>


                            <h3>
                                Funções comunicadas
                            </h3>


                            <div class="angel-detail-list">


                                ${detailItem("Nano Silver")}


                                ${detailItem("Iões negativos")}


                                ${detailItem("Biomagnetismo")}


                                ${detailItem("Infravermelho longínquo")}


                            </div>


                        </article>


                        <article class="angel-detail-card angel-detail-card-wide">


                            <span class="label">
                                INFORMAÇÃO ADICIONAL
                            </span>


                            <h3>
                                Alegações e aplicações apresentadas
                            </h3>


                            <p>

                                O material fornecido para o produto
                                apresenta ainda referências a benefícios
                                relacionados com o bem-estar íntimo,
                                conforto menstrual, controlo de odores
                                e outras aplicações.

                            </p>


                            <p>

                                Estas informações são apresentadas
                                como características comunicadas do
                                produto e não como diagnóstico,
                                tratamento ou garantia de resultados médicos.

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

    <article class="angel-benefit-card reveal">


        <div class="angel-benefit-top">

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
   IMAGEM À ESQUERDA + INFORMAÇÃO À DIREITA
   ========================================================== */

function angelProductDetail(){

    return `

    <section
        class="section angel-product-section"
        id="angel-product">

        <div class="container">


            <div class="angel-product-detail-grid">


                <!-- ==================================================
                     PRODUCT IMAGE
                     ================================================== -->

                <div class="angel-product-detail-visual reveal-left">


                    <div class="angel-product-detail-frame">


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
                        >


                        <div class="angel-detail-caption">

                            <span>
                                ANGEL MOON
                            </span>

                            <strong>
                                COLLECTION
                            </strong>

                        </div>


                    </div>


                </div>


                <!-- ==================================================
                     PRODUCT INFORMATION
                     ================================================== -->

                <div class="angel-product-detail-copy reveal-right">


                    <span class="label">
                        O PRODUTO
                    </span>


                    <h2 class="section-title">

                        Conforto,
                        <span>
                            protecção e tecnologia.
                        </span>

                    </h2>


                    <p class="lead">

                        O Angel Moon é apresentado como um penso
                        higiénico concebido para combinar uma
                        estrutura fina e flexível com absorção,
                        conforto e respirabilidade.

                    </p>


                    <div class="angel-product-specs">


                        ${productSpec(
                            "01",
                            "Estrutura",
                            "7 camadas"
                        )}


                        ${productSpec(
                            "02",
                            "Absorção",
                            "Super absorvente"
                        )}


                        ${productSpec(
                            "03",
                            "Respirabilidade",
                            "Permeável ao ar"
                        )}


                        ${productSpec(
                            "04",
                            "Tecnologia",
                            "SmartCore & Negative Ion Core"
                        )}


                    </div>


                    <div class="angel-product-highlight">


                        <span class="angel-product-highlight-icon">
                            ✦
                        </span>


                        <div>

                            <strong>
                                Uma estrutura pensada para o conforto.
                            </strong>


                            <p>

                                A proposta do Angel Moon combina
                                finura, flexibilidade, absorção
                                e características tecnológicas
                                numa única estrutura.

                            </p>

                        </div>


                    </div>


                </div>


            </div>


        </div>

    </section>

    `;

}


/* ==========================================================
   PRODUCT SPEC
   ========================================================== */

function productSpec(number,title,text){

    return `

    <div class="angel-product-spec">


        <span class="angel-product-spec-number">
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
   COMPOSITION
   ========================================================== */

function angelComposition(){

    return `

    <section
        class="section angel-composition"
        id="angel-composition">

        <div class="container">


            <div class="angel-section-heading reveal">


                <div>

                    <span class="label">
                        COMPOSIÇÃO
                    </span>


                    <h2 class="section-title">

                        Estrutura desenvolvida
                        <span>
                            para o conforto.
                        </span>

                    </h2>

                </div>


                <p class="lead">

                    Conheça alguns dos principais elementos
                    apresentados na composição e tecnologia
                    do Angel Moon.

                </p>


            </div>


            <div class="angel-composition-grid">


                ${compositionItem(
                    "01",
                    "Superfície suave",
                    "Contacto concebido para uma sensação confortável sobre a pele."
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
                    "Camada concebida para favorecer a permeabilidade ao ar."
                )}


                ${compositionItem(
                    "05",
                    "Camada antibacteriana",
                    "Característica apresentada na informação disponibilizada para o produto."
                )}


                ${compositionItem(
                    "06",
                    "Base impermeável",
                    "Camada exterior destinada a ajudar a prevenir fugas."
                )}


            </div>


            <div class="angel-composition-specs">


                <div class="section-center reveal">


                    <span class="label">
                        CARACTERÍSTICAS
                    </span>


                    <h3 class="section-title">
                        O essencial.
                    </h3>


                </div>


                <div class="angel-spec-grid">


                    ${specCard(
                        "01",
                        "Super absorvente",
                        "💧"
                    )}


                    ${specCard(
                        "02",
                        "Permeável ao ar",
                        "⌁"
                    )}


                    ${specCard(
                        "03",
                        "Efeito desodorizante",
                        "✦"
                    )}


                    ${specCard(
                        "04",
                        "Efeito antibacteriano",
                        "◆"
                    )}


                    ${specCard(
                        "05",
                        "Flexível",
                        "〰"
                    )}


                    ${specCard(
                        "06",
                        "Fino",
                        "◇"
                    )}


                </div>


                <div class="angel-more-information">


                    <button
                        class="angel-details-toggle"
                        type="button"
                        aria-expanded="false">

                        <span>
                            Ver todas as especificações
                        </span>


                        <span class="angel-details-icon">
                            +
                        </span>

                    </button>


                    <div class="angel-details-content">


                        <div class="angel-spec-detail-list">


                            ${detailItem(
                                "Tecnologia SmartCore"
                            )}


                            ${detailItem(
                                "Higiénico"
                            )}


                            ${detailItem(
                                "Saudável"
                            )}


                            ${detailItem(
                                "Estilosa"
                            )}


                            ${detailItem(
                                "Ventilação óptima"
                            )}


                            ${detailItem(
                                "Super absorção"
                            )}


                            ${detailItem(
                                "Estrutura fina"
                            )}


                            ${detailItem(
                                "Estrutura flexível"
                            )}


                        </div>


                    </div>


                </div>


            </div>


            ${certification()}


        </div>

    </section>

    `;

}


/* ==========================================================
   COMPOSITION ITEM
   ========================================================== */

function compositionItem(number,title,text){

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
   SPEC CARD
   ========================================================== */

function specCard(number,title,icon){

    return `

    <article class="angel-spec-card reveal">


        <span class="angel-spec-number">
            ${number}
        </span>


        <span class="angel-spec-icon">
            ${icon}
        </span>


        <strong>
            ${title}
        </strong>


    </article>

    `;

}


/* ==========================================================
   CERTIFICATION
   ========================================================== */

function certification(){

    return `

    <section
        class="angel-certification"
        aria-labelledby="angel-certification-title">


        <div class="section-center reveal">


            <span class="label">
                CERTIFICAÇÃO & PADRÕES
            </span>


            <h3
                class="section-title"
                id="angel-certification-title">

                Documentação e conformidade

            </h3>


            <p class="lead">

                Consulte a documentação apresentada para
                o produto e confirme sempre a informação
                oficial disponibilizada pelo fabricante.

            </p>


        </div>


        <div class="angel-certification-grid">


            ${certificate(
                "./assets/products/certifications/angel-cert-01.png",
                "Documento técnico Angel Moon"
            )}


            ${certificate(
                "./assets/products/certifications/angel-cert-02.png",
                "Padrões sanitários Angel Moon"
            )}


            ${certificate(
                "./assets/products/certifications/angel-cert-03.png",
                "Informação técnica Angel Moon"
            )}


            ${certificate(
                "./assets/products/certifications/angel-cert-04.png",
                "Documentação adicional Angel Moon"
            )}


        </div>


    </section>

    `;

}


/* ==========================================================
   CERTIFICATE CARD
   ========================================================== */

function certificate(image,title){

    return `

    <article class="angel-certification-card">


        <div class="angel-certification-image">


            <img
                src="${image}"
                alt="${title}"
                loading="lazy"
                onerror="
                    this.style.display='none';
                    this.parentElement.classList.add('missing');
                "
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

            <strong>
                ${title}
            </strong>

        </div>


    </article>

    `;

}


/* ==========================================================
   VARIANTS
   ========================================================== */

function angelVariants(){

    return `

    <section
        class="section angel-variants"
        id="angel-variants">

        <div class="container">


            <div class="section-center reveal">


                <span class="label">
                    ANGEL MOON COLLECTION
                </span>


                <h2 class="section-title">

                    Escolha o formato
                    <span>
                        adequado.
                    </span>

                </h2>


                <p class="lead">

                    Diferentes formatos para diferentes
                    momentos e necessidades de utilização.

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


/* ==========================================================
   VARIANT CARD
   ========================================================== */

function variant(image,title,size,subtitle){

    return `

    <article class="angel-variant-card reveal">


        <div class="angel-variant-image">


            <img
                src="${image}"
                alt="Angel Moon ${title} ${size}"
                loading="lazy"
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
   FAQ
   ========================================================== */

function angelFaq(){

    return `

    <section
        class="section angel-faq"
        id="angel-faq">

        <div class="container-sm">


            <div class="section-center reveal">


                <span class="label">
                    PERGUNTAS FREQUENTES
                </span>


                <h2 class="section-title">

                    Tudo sobre
                    <span>
                        o Angel Moon.
                    </span>

                </h2>


                <p class="lead">

                    Respostas para algumas das dúvidas
                    mais relevantes sobre o produto.

                </p>


            </div>


            <div class="angel-faq-list">


                ${faqItem(
                    "01",
                    "O que é o Angel Moon?",
                    "O Angel Moon é um penso higiénico apresentado com foco em conforto, absorção, respirabilidade e tecnologia."
                )}


                ${faqItem(
                    "02",
                    "Quais são os principais benefícios?",
                    "Entre as principais características comunicadas estão o conforto, a elevada absorção, a respirabilidade, o controlo de odores, a flexibilidade e a finura."
                )}


                ${faqItem(
                    "03",
                    "Quais são os formatos disponíveis?",
                    "A colecção apresentada inclui o formato Dia de 24 cm, Noite de 29 cm e Panty Liner de 18 cm."
                )}


                ${faqItem(
                    "04",
                    "O Angel Moon é respirável?",
                    "Sim. A informação disponibilizada para o produto apresenta a estrutura como permeável ao ar."
                )}


                ${faqItem(
                    "05",
                    "O produto possui tecnologia adicional?",
                    "Sim. A documentação de apresentação menciona Negative Ion Core, Nano Silver, iões negativos, biomagnetismo e infravermelho longínquo."
                )}


                ${faqItem(
                    "06",
                    "O Angel Moon substitui tratamento médico?",
                    "Não. O produto não deve ser apresentado como substituto de diagnóstico ou tratamento médico. Para questões de saúde, deve procurar orientação de um profissional de saúde."
                )}


            </div>


        </div>

    </section>

    `;

}


/* ==========================================================
   FAQ ITEM
   ========================================================== */

function faqItem(number,question,answer){

    const answerId =
        `angel-faq-${number}`;

    return `

    <article class="angel-faq-item">


        <button
            class="angel-faq-question"
            type="button"
            aria-expanded="false"
            aria-controls="${answerId}">


            <span class="angel-faq-number">
                ${number}
            </span>


            <span class="angel-faq-text">
                ${question}
            </span>


            <span class="angel-faq-icon">
                +
            </span>


        </button>


        <div
            class="angel-faq-answer"
            id="${answerId}"
            role="region">


            <p>
                ${answer}
            </p>


        </div>


    </article>

    `;

}


/* ==========================================================
   DISCLAIMER / FINAL INFORMATION
   ========================================================== */

function angelDisclaimer(){

    return `

    <section class="angel-disclaimer">


        <div class="container">


            <div class="angel-disclaimer-box reveal">


                <div class="angel-disclaimer-icon">
                    i
                </div>


                <div>


                    <span class="label">
                        INFORMAÇÃO IMPORTANTE
                    </span>


                    <h3>
                        Comunicação responsável sobre o produto
                    </h3>


                    <p>

                        As características, propriedades e alegações
                        apresentadas nesta página foram organizadas
                        a partir do material disponibilizado para
                        o Angel Moon.

                    </p>


                    <p>

                        Informações relacionadas com efeitos
                        terapêuticos, alterações fisiológicas ou
                        benefícios clínicos devem ser confirmadas
                        através de documentação técnica, certificações
                        e evidência oficial do fabricante antes de
                        serem utilizadas como promessa de resultado.

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

function angelCta(){

    return `

    <section
        class="section angel-cta"
        id="angel-contact">

        <div class="container">


            <div class="angel-cta-box reveal">


                <div>


                    <span class="label angel-label-light">
                        ANGEL MOON
                    </span>


                    <h2>

                        Descubra uma nova
                        <span>
                            experiência de conforto.
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
                        class="btn btn-primary angel-btn-primary"
                        id="angelWhatsApp"
                        type="button">

                        Falar pelo WhatsApp

                    </button>


                    <button
                        class="btn btn-glass angel-btn-dark"
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

    <div class="angel-detail-item">


        <span class="angel-detail-check">
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
       STAGGER
       ====================================================== */

    try{

        stagger(
            root.querySelectorAll(
                ".angel-overview-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".angel-technology-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".angel-benefit-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".angel-spec-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".angel-variant-card"
            )
        );

    }catch(error){

        console.warn(
            "Angel Moon animations:",
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
                ".angel-details-toggle, " +
                ".angel-faq-question"
            )
            .forEach(
                button => {

                    ripple(button);

                }
            );

    }catch(error){

        console.warn(
            "Angel Moon ripple:",
            error
        );

    }


    /* ======================================================
       SCROLL TO BENEFITS
       ====================================================== */

    const benefitsButton =
        root.querySelector(
            "#benefitsBtn"
        );


    if(benefitsButton){

        benefitsButton.addEventListener(
            "click",
            () => {

                const target =
                    root.querySelector(
                        "#benefits"
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
       BUY
       ====================================================== */

    const buyButton =
        root.querySelector(
            "#buyAngel"
        );


    if(buyButton){

        buyButton.addEventListener(
            "click",
            openWhats
        );

    }


    /* ======================================================
       CTA WHATSAPP
       ====================================================== */

    const whatsButton =
        root.querySelector(
            "#angelWhatsApp"
        );


    if(whatsButton){

        whatsButton.addEventListener(
            "click",
            openWhats
        );

    }


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
            () => {

                navigate("/");

            }
        );

    }


    /* ======================================================
       EXPANDABLE DETAILS
       ====================================================== */

    root
        .querySelectorAll(
            ".angel-details-toggle"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const container =
                            button.closest(
                                ".angel-more-information"
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
            ".angel-faq-question"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const item =
                            button.closest(
                                ".angel-faq-item"
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
                                ".angel-faq-item"
                            )
                            .forEach(
                                otherItem => {

                                    if(
                                        otherItem !== item
                                    ){

                                        otherItem.classList.remove(
                                            "active"
                                        );


                                        const otherButton =
                                            otherItem.querySelector(
                                                ".angel-faq-question"
                                            );


                                        if(otherButton){

                                            otherButton.setAttribute(
                                                "aria-expanded",
                                                "false"
                                            );

                                        }

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

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhats(){

    const message =
        "Olá! Tenho interesse no Angel Moon e gostaria de saber mais informações sobre os formatos disponíveis.";


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
