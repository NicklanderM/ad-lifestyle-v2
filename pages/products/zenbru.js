/* ==========================================================
   AD LIFESTYLE V2
   ZENBRU.JS
   Premium Functional Coffee Product Page
   Standardised Structure — Alpha Spin Model
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";
const PRODUCT_IMAGE = "./assets/products/zenbru.png";


/* ==========================================================
   LOAD ZENBRU
   ========================================================== */

export function loadZenbru(){

    applyTheme("zenbru");

    const app = document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-zenbru"
            data-product-page="zenbru">

            ${zenbruHero()}

            ${zenbruOverview()}

            ${zenbruComposition()}

            ${zenbruExperience()}

            ${zenbruProductDetail()}

            ${zenbruPreparation()}

            ${zenbruBenefits()}

            ${zenbruOrigins()}

            ${zenbruFaq()}

            ${zenbruDisclaimer()}

            ${zenbruCta()}

        </div>

    `;

    initialiseZenbru();

}


/* ==========================================================
   HERO
   ========================================================== */

function zenbruHero(){

    return `

    <section
        class="hero zenbru-hero"
        id="zenbru-top">

        <div
            class="zenbru-hero-atmosphere"
            aria-hidden="true">

            <span class="zenbru-orb zenbru-orb-1"></span>

            <span class="zenbru-orb zenbru-orb-2"></span>

            <span class="zenbru-orb zenbru-orb-3"></span>

            <span class="zenbru-orbit zenbru-orbit-1"></span>

            <span class="zenbru-orbit zenbru-orbit-2"></span>

        </div>


        <div class="container hero-grid">


            <!-- ==================================================
                 HERO CONTENT
                 ================================================== -->

            <div class="hero-content reveal">


                <span class="zenbru-eyebrow">
                    ZENBRU · FUNCTIONAL COFFEE
                </span>


                <h1 class="hero-title">

                    Zenbru
                    <span>
                        Premium Coffee
                    </span>

                </h1>


                <p class="hero-sub">

                    Uma experiência de café funcional que
                    combina café Robusta, ginseng coreano
                    e gengibre numa proposta premium de
                    sabor, aroma e lifestyle.

                </p>


                <div class="zenbru-hero-pills">

                    <span>
                        Café Robusta
                    </span>

                    <span>
                        Ginseng Coreano
                    </span>

                    <span>
                        Gengibre
                    </span>

                    <span>
                        Perfil Premium
                    </span>

                </div>


                <div class="hero-actions">


                    <button
                        class="btn btn-primary zenbru-btn-primary"
                        id="buyZenbru"
                        type="button">

                        Comprar Agora

                    </button>


                    <button
                        class="btn btn-glass zenbru-btn-glass"
                        id="zenbruCompositionBtn"
                        type="button">

                        Ver Composição

                    </button>


                </div>


                <!-- ==================================================
                     HERO META
                     ================================================== -->

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
                            Perfil vegetal
                        </span>

                    </div>


                </div>


            </div>


            <!-- ==================================================
                 HERO PRODUCT
                 ================================================== -->

            <div class="hero-visual reveal-right">


                <div class="zenbru-hero-product floating">


                    <div
                        class="zenbru-product-aura"
                        aria-hidden="true">
                    </div>


                    <div
                        class="zenbru-product-ring zenbru-product-ring-1"
                        aria-hidden="true">
                    </div>


                    <div
                        class="zenbru-product-ring zenbru-product-ring-2"
                        aria-hidden="true">
                    </div>


                    <div
                        class="zenbru-product-grid"
                        aria-hidden="true">
                    </div>


                    <img
                        class="parallax"
                        data-speed="35"
                        src="${PRODUCT_IMAGE}"
                        alt="Zenbru Premium Coffee"
                        loading="eager"
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


        </div>

    </section>

    `;

}


/* ==========================================================
   OVERVIEW
   ========================================================== */

function zenbruOverview(){

    return `

    <section
        class="section zenbru-overview-section"
        id="zenbru-overview">

        <div class="container">


            <div class="section-center reveal">

                <span class="label">
                    ZENBRU
                </span>


                <h2 class="section-title">

                    Três elementos.
                    <span>
                        Uma experiência.
                    </span>

                </h2>


                <p class="lead">

                    O material de apresentação do produto destaca
                    café Robusta, ginseng coreano e gengibre como
                    elementos principais da composição.

                </p>

            </div>


            <div class="zenbru-overview-grid">


                ${zenbruOverviewCard(
                    "01",
                    "Café Robusta",
                    "A base da bebida, com referências de origem ao Brasil e ao Vietname."
                )}


                ${zenbruOverviewCard(
                    "02",
                    "Ginseng Coreano",
                    "Extracto de ginseng apresentado na comunicação do produto como ingrediente funcional."
                )}


                ${zenbruOverviewCard(
                    "03",
                    "Gengibre",
                    "Ingrediente vegetal utilizado para complementar o perfil funcional e aromático."
                )}


                ${zenbruOverviewCard(
                    "04",
                    "Lifestyle",
                    "Uma proposta orientada para uma experiência diferenciada de café no quotidiano."
                )}


            </div>


            <div class="zenbru-overview-note reveal">


                <div class="zenbru-overview-note-icon">
                    ◎
                </div>


                <div>

                    <strong>
                        Uma experiência pensada para a rotina.
                    </strong>


                    <p>
                        O Zenbru combina uma base de café com
                        ingredientes destacados na sua comunicação,
                        dentro de uma proposta funcional e premium.
                    </p>

                </div>


            </div>


        </div>

    </section>

    `;

}


function zenbruOverviewCard(number,title,text){

    return `

        <article class="zenbru-overview-card reveal">


            <span class="zenbru-card-number">
                ${number}
            </span>


            <div class="zenbru-card-icon">

                ${
                    number === "01"
                        ? "☕"
                        : number === "02"
                            ? "✦"
                            : number === "03"
                                ? "⌁"
                                : "◇"
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
   COMPOSITION
   ========================================================== */

function zenbruComposition(){

    return `

    <section
        id="zenbru-composition"
        class="section zenbru-composition">

        <div class="container">


            <div class="zenbru-section-heading reveal">


                <div>

                    <span class="label">
                        COMPOSIÇÃO
                    </span>


                    <h2 class="section-title">

                        O que está dentro
                        <span>
                            do Zenbru.
                        </span>

                    </h2>

                </div>


                <p class="lead">

                    A documentação fornecida identifica
                    três elementos principais na composição:
                    café Robusta, ginseng coreano e gengibre.

                </p>


            </div>


            <div class="zenbru-composition-grid">


                ${ingredient(
                    "☕",
                    "Café Robusta",
                    "A base da bebida, com referências de origem ao Brasil e ao Vietname."
                )}


                ${ingredient(
                    "🌿",
                    "Ginseng Coreano",
                    "Extracto de ginseng coreano destacado na comunicação do produto."
                )}


                ${ingredient(
                    "🫚",
                    "Gengibre",
                    "Ingrediente vegetal que complementa o perfil funcional e aromático."
                )}


            </div>


            <div class="zenbru-information">


                <button
                    class="zenbru-details-toggle"
                    type="button"
                    aria-expanded="false">

                    <span>
                        Ver detalhes da composição
                    </span>


                    <span class="zenbru-details-icon">
                        +
                    </span>

                </button>


                <div class="zenbru-details-content">


                    <div class="zenbru-details-grid">


                        <article class="zenbru-detail-card">


                            <span class="label">
                                01 — CAFÉ ROBUSTA
                            </span>


                            <h3>
                                Brasil & Vietname
                            </h3>


                            <p class="text mt-2">

                                A documentação fornecida identifica
                                grãos de café Robusta associados
                                ao Brasil e ao Vietname.

                            </p>


                            <div class="zenbru-detail-list">


                                ${detailItem(
                                    "Brasil"
                                )}


                                ${detailItem(
                                    "Vietname"
                                )}


                                ${detailItem(
                                    "Perfis de altitude distintos"
                                )}


                                ${detailItem(
                                    "Características de solo destacadas"
                                )}


                            </div>


                        </article>


                        <article class="zenbru-detail-card">


                            <span class="label">
                                02 — GINSENG
                            </span>


                            <h3>
                                Ginseng Coreano
                            </h3>


                            <p class="text mt-2">

                                A apresentação fornecida refere
                                ginseng coreano e indica um teor
                                de ginsenosidos igual ou superior a 7%.

                            </p>


                            <div class="zenbru-detail-list">


                                ${detailItem(
                                    "Ginseng coreano"
                                )}


                                ${detailItem(
                                    "Ginsenosidos ≥ 7%"
                                )}


                                ${detailItem(
                                    "Componente funcional declarado"
                                )}


                                ${detailItem(
                                    "Perfil vegetal"
                                )}


                            </div>


                        </article>


                        <article class="zenbru-detail-card">


                            <span class="label">
                                03 — GENGIBRE
                            </span>


                            <h3>
                                Gengibre
                            </h3>


                            <p class="text mt-2">

                                O gengibre integra a composição
                                apresentada e está associado no
                                material a compostos como gingerol
                                e curcumina.

                            </p>


                            <div class="zenbru-detail-list">


                                ${detailItem(
                                    "Gingerol"
                                )}


                                ${detailItem(
                                    "Curcumina — característica comunicada"
                                )}


                                ${detailItem(
                                    "Ingrediente vegetal"
                                )}


                                ${detailItem(
                                    "Perfil aromático"
                                )}


                            </div>


                        </article>


                        <article
                            class="zenbru-detail-card
                                   zenbru-detail-card-wide">


                            <span class="label">
                                INFORMAÇÃO ADICIONAL
                            </span>


                            <h3>
                                Características nutricionais comunicadas
                            </h3>


                            <p class="text mt-2">

                                O material fornecido também apresenta
                                referências a ácido clorogénico,
                                actividade antioxidante e outras
                                propriedades associadas aos ingredientes.

                            </p>


                            <p class="text mt-2">

                                Essas referências pertencem à
                                comunicação apresentada para o produto
                                e não devem ser interpretadas como
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


/* ==========================================================
   INGREDIENT
   ========================================================== */

function ingredient(icon,title,text){

    return `

    <article class="zenbru-ingredient-card reveal">


        <div class="zenbru-ingredient-icon">
            ${icon}
        </div>


        <span class="zenbru-ingredient-number">
            Componente
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

function zenbruExperience(){

    return `

    <section class="section zenbru-experience">


        <div class="container">


            <div class="section-center reveal">


                <span class="label">
                    A EXPERIÊNCIA
                </span>


                <h2 class="section-title">

                    Mais do que uma chávena.
                    <span>
                        Uma experiência Zenbru.
                    </span>

                </h2>


                <p class="lead">

                    O Zenbru combina a familiaridade de uma
                    chávena de café com uma composição
                    diferenciada e um posicionamento funcional.

                </p>


            </div>


            <div class="zenbru-experience-grid">


                ${experienceCard(
                    "01",
                    "Café",
                    "Uma base Robusta com referências de origem ao Brasil e ao Vietname.",
                    "☕"
                )}


                ${experienceCard(
                    "02",
                    "Ginseng",
                    "Extracto de ginseng coreano destacado na composição.",
                    "🌿"
                )}


                ${experienceCard(
                    "03",
                    "Gengibre",
                    "Ingrediente vegetal que complementa a identidade funcional da bebida.",
                    "🫚"
                )}


                ${experienceCard(
                    "04",
                    "Energia",
                    "Uma experiência pensada para acompanhar diferentes momentos do dia.",
                    "⚡"
                )}


                ${experienceCard(
                    "05",
                    "Premium",
                    "Apresentação e posicionamento orientados para uma experiência diferenciada.",
                    "✦"
                )}


                ${experienceCard(
                    "06",
                    "Lifestyle",
                    "Uma bebida integrada numa visão moderna de bem-estar e estilo de vida.",
                    "◇"
                )}


            </div>


        </div>


    </section>

    `;

}


function experienceCard(number,title,text,icon){

    return `

    <article class="zenbru-experience-card reveal">


        <div class="zenbru-experience-top">

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

function zenbruProductDetail(){

    return `

    <section class="section zenbru-product-section">


        <div class="container">


            <div class="zenbru-product-detail-grid">


                <!-- ==================================================
                     IMAGEM
                     ================================================== -->

                <div class="zenbru-product-detail-visual reveal-left">


                    <div class="zenbru-product-detail-frame">


                        <div
                            class="zenbru-detail-aura"
                            aria-hidden="true">
                        </div>


                        <div
                            class="zenbru-detail-ring zenbru-detail-ring-1"
                            aria-hidden="true">
                        </div>


                        <div
                            class="zenbru-detail-ring zenbru-detail-ring-2"
                            aria-hidden="true">
                        </div>


                        <div
                            class="zenbru-detail-grid"
                            aria-hidden="true">
                        </div>


                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Zenbru Premium Coffee"
                            class="zenbru-product-detail-image"
                            loading="lazy"
                        >


                        <div class="zenbru-detail-caption">


                            <span>
                                ZENBRU
                            </span>


                            <strong>
                                COFFEE
                            </strong>


                        </div>


                    </div>


                </div>


                <!-- ==================================================
                     CONTEÚDO
                     ================================================== -->

                <div class="zenbru-product-detail-copy reveal-right">


                    <span class="label">
                        O PRODUTO
                    </span>


                    <h2 class="section-title">

                        Café Robusta,
                        <span>
                            ginseng e gengibre.
                        </span>

                    </h2>


                    <p class="lead">

                        O Zenbru é apresentado como um café
                        funcional premium que reúne uma base
                        de café Robusta com ginseng coreano
                        e gengibre numa proposta diferenciada
                        de sabor e experiência.

                    </p>


                    <div class="zenbru-product-specs">


                        ${productSpec(
                            "01",
                            "Base",
                            "Café Robusta"
                        )}


                        ${productSpec(
                            "02",
                            "Origem",
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


                        <span class="zenbru-product-highlight-icon">
                            ☕
                        </span>


                        <div>

                            <strong>
                                Uma composição diferenciada.
                            </strong>


                            <p>

                                O produto reúne café, ginseng
                                e gengibre numa única proposta,
                                mantendo o foco na experiência
                                de café.

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
   PREPARATION
   ========================================================== */

function zenbruPreparation(){

    return `

    <section
        class="section zenbru-preparation"
        id="zenbru-preparation">


        <div class="container-sm">


            <div class="section-center reveal">


                <span class="label">
                    PREPARAÇÃO
                </span>


                <h2 class="section-title">

                    O ritual
                    <span>
                        Zenbru.
                    </span>

                </h2>


                <p class="lead">

                    Prepare a sua bebida seguindo
                    sempre as instruções oficiais
                    apresentadas na embalagem.

                </p>


            </div>


            <div class="zenbru-preparation-grid">


                ${preparationStep(
                    "01",
                    "Prepare",
                    "Prepare água e uma chávena limpa para a bebida."
                )}


                ${preparationStep(
                    "02",
                    "Adicione",
                    "Adicione a quantidade recomendada de Zenbru, de acordo com as instruções oficiais."
                )}


                ${preparationStep(
                    "03",
                    "Misture",
                    "Misture cuidadosamente até obter uma preparação homogénea."
                )}


                ${preparationStep(
                    "04",
                    "Desfrute",
                    "Aprecie o aroma, o sabor e a experiência Zenbru."
                )}


            </div>


            <div class="zenbru-preparation-note reveal">


                <span class="label">
                    NOTA IMPORTANTE
                </span>


                <p>

                    A quantidade, temperatura da água
                    e modo exacto de preparação devem
                    seguir sempre as indicações da
                    embalagem oficial.

                </p>


            </div>


        </div>


    </section>

    `;

}


function preparationStep(number,title,text){

    return `

    <article class="zenbru-preparation-step reveal">


        <span class="zenbru-preparation-number">
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
   BENEFITS
   ========================================================== */

function zenbruBenefits(){

    return `

    <section
        class="section zenbru-benefits"
        id="zenbru-benefits">


        <div class="container">


            <div class="zenbru-benefits-grid">


                <!-- ==================================================
                     IMAGE
                     ================================================== -->

                <div class="zenbru-benefits-visual reveal-left">


                    <div class="zenbru-benefits-frame">


                        <div
                            class="zenbru-benefits-glow"
                            aria-hidden="true">
                        </div>


                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Zenbru Premium Coffee"
                            loading="lazy"
                        >


                    </div>


                </div>


                <!-- ==================================================
                     CONTENT
                     ================================================== -->

                <div class="zenbru-benefits-copy reveal-right">


                    <span class="label">
                        DESTAQUES
                    </span>


                    <h2 class="section-title">

                        Sabor.
                        Energia.
                        <span>
                            Experiência.
                        </span>

                    </h2>


                    <p class="lead">

                        Uma combinação concebida para
                        acompanhar uma rotina de café
                        com uma identidade funcional
                        e premium.

                    </p>


                    <div class="zenbru-benefit-list">


                        ${check(
                            "Café Robusta como base da bebida"
                        )}


                        ${check(
                            "Ginseng coreano"
                        )}


                        ${check(
                            "Gengibre"
                        )}


                        ${check(
                            "Perfil aromático diferenciado"
                        )}


                        ${check(
                            "Proposta funcional"
                        )}


                        ${check(
                            "Experiência premium"
                        )}


                    </div>


                    <div class="zenbru-information">


                        <button
                            class="zenbru-details-toggle"
                            type="button"
                            aria-expanded="false">


                            <span>
                                Ver informações funcionais
                            </span>


                            <span class="zenbru-details-icon">
                                +
                            </span>


                        </button>


                        <div class="zenbru-details-content">


                            <div class="zenbru-details-grid">


                                <article class="zenbru-detail-card">


                                    <span class="label">
                                        GINSENG
                                    </span>


                                    <h3>
                                        Características comunicadas
                                    </h3>


                                    <div class="zenbru-detail-list">


                                        ${detailItem(
                                            "Protecção celular — alegação apresentada"
                                        )}


                                        ${detailItem(
                                            "Actividade antioxidante — alegação apresentada"
                                        )}


                                        ${detailItem(
                                            "Regeneração celular — alegação apresentada"
                                        )}


                                        ${detailItem(
                                            "Envelhecimento — referência promocional"
                                        )}


                                    </div>


                                </article>


                                <article class="zenbru-detail-card">


                                    <span class="label">
                                        GENGIBRE
                                    </span>


                                    <h3>
                                        Compostos destacados
                                    </h3>


                                    <div class="zenbru-detail-list">


                                        ${detailItem(
                                            "Gingerol"
                                        )}


                                        ${detailItem(
                                            "Curcumina"
                                        )}


                                        ${detailItem(
                                            "Actividade antioxidante — alegação apresentada"
                                        )}


                                        ${detailItem(
                                            "Actividade antibacteriana — alegação apresentada"
                                        )}


                                    </div>


                                </article>


                                <article
                                    class="zenbru-detail-card
                                           zenbru-detail-card-wide">


                                    <span class="label">
                                        ÍNDICE GLICÉMICO
                                    </span>


                                    <h3>
                                        Característica comunicada
                                    </h3>


                                    <p class="text mt-2">

                                        A documentação fornecida
                                        apresenta o Zenbru como
                                        produto de baixo índice glicémico,
                                        incluindo referência a certificação
                                        por Temasek Polytechnic.

                                    </p>


                                </article>


                            </div>


                        </div>


                    </div>


                </div>


            </div>


        </div>


    </section>

    `;

}


function check(text){

    return `

    <div class="zenbru-check-item">


        <span class="zenbru-check-icon">
            ✓
        </span>


        <span>
            ${text}
        </span>


    </div>

    `;

}


/* ==========================================================
   ORIGINS
   ========================================================== */

function zenbruOrigins(){

    return `

    <section
        class="section zenbru-origins"
        id="zenbru-origins">


        <div class="container">


            <div class="section-center reveal">


                <span class="label">
                    ORIGEM & QUALIDADE
                </span>


                <h2 class="section-title">

                    Do grão
                    <span>
                        à experiência.
                    </span>

                </h2>


                <p class="lead">

                    O café Robusta apresentado no material
                    possui referências geográficas específicas
                    e diferentes características de cultivo.

                </p>


            </div>


            <div class="zenbru-origin-grid">


                <article class="zenbru-origin-card reveal">


                    <div class="zenbru-origin-code">
                        BR
                    </div>


                    <span class="label">
                        BRASIL
                    </span>


                    <h3>
                        Café Robusta
                    </h3>


                    <p>

                        A apresentação refere altitudes
                        aproximadas entre 100 e 800 metros,
                        além de solos argilosos com forte
                        retenção de água.

                    </p>


                </article>


                <article class="zenbru-origin-card reveal">


                    <div class="zenbru-origin-code">
                        VN
                    </div>


                    <span class="label">
                        VIETNAME
                    </span>


                    <h3>
                        Café Robusta
                    </h3>


                    <p>

                        O material refere altitudes
                        aproximadas entre 600 e 1000 metros
                        e solos vulcânicos ricos em minerais.

                    </p>


                </article>


                <article
                    class="zenbru-origin-card
                           zenbru-origin-card-wide
                           reveal">


                    <span class="label">
                        ZENBRU
                    </span>


                    <h3>
                        Uma identidade construída em torno do café
                    </h3>


                    <p>

                        A combinação de café Robusta, ginseng
                        coreano e gengibre procura oferecer
                        uma experiência distinta dentro da
                        categoria de café funcional.

                    </p>


                </article>


            </div>


        </div>


    </section>

    `;

}


/* ==========================================================
   FAQ
   ========================================================== */

function zenbruFaq(){

    return `

    <section
        class="section zenbru-faq"
        id="zenbru-faq">


        <div class="container-sm">


            <div class="section-center reveal">


                <span class="label">
                    PERGUNTAS FREQUENTES
                </span>


                <h2 class="section-title">

                    Tudo sobre
                    <span>
                        o Zenbru.
                    </span>

                </h2>


                <p class="lead">

                    Respostas rápidas para as perguntas
                    mais relevantes sobre composição,
                    origem e utilização.

                </p>


            </div>


            <div class="zenbru-faq-list">


                ${question(
                    "01",
                    "O que é o Zenbru?",
                    "O Zenbru é apresentado como um café funcional premium que combina café Robusta, ginseng coreano e gengibre."
                )}


                ${question(
                    "02",
                    "Quais são os principais ingredientes?",
                    "A apresentação fornecida identifica café Robusta, extracto de ginseng coreano e gengibre."
                )}


                ${question(
                    "03",
                    "De onde vem o café Robusta?",
                    "O material disponibilizado faz referência ao Brasil e ao Vietname como origens dos grãos Robusta apresentados."
                )}


                ${question(
                    "04",
                    "O Zenbru contém ginseng?",
                    "Sim. A documentação fornecida destaca extracto de ginseng coreano e refere um teor de ginsenosidos igual ou superior a 7%."
                )}


                ${question(
                    "05",
                    "O Zenbru contém gengibre?",
                    "Sim. O gengibre integra a composição apresentada, com referências a gingerol e curcumina."
                )}


                ${question(
                    "06",
                    "O Zenbru é apresentado como tendo baixo índice glicémico?",
                    "Sim. Uma das apresentações fornecidas indica baixo índice glicémico e faz referência a certificação por Temasek Polytechnic."
                )}


                ${question(
                    "07",
                    "Como devo preparar o Zenbru?",
                    "A preparação deve seguir a quantidade e as instruções apresentadas na embalagem oficial do produto."
                )}


                ${question(
                    "08",
                    "O Zenbru é um medicamento?",
                    "Não deve ser apresentado como medicamento. As características funcionais e nutricionais divulgadas não substituem diagnóstico, tratamento ou aconselhamento de um profissional de saúde."
                )}


                ${question(
                    "09",
                    "O Zenbru garante benefícios médicos?",
                    "Não. As propriedades e benefícios referidos no material promocional devem ser entendidos como informações de apresentação do produto e não como garantias clínicas."
                )}


                ${question(
                    "10",
                    "Onde posso obter mais informações?",
                    "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre disponibilidade e aquisição."
                )}


            </div>


        </div>


    </section>

    `;

}


function question(number,questionText,answerText){

    const answerId =
        `zenbru-faq-${number}`;

    return `

    <article class="zenbru-faq-item">


        <button
            class="zenbru-faq-question"
            type="button"
            aria-expanded="false"
            aria-controls="${answerId}">


            <span class="zenbru-faq-number">
                ${number}
            </span>


            <span class="zenbru-faq-text">
                ${questionText}
            </span>


            <span class="zenbru-faq-plus">
                +
            </span>


        </button>


        <div
            class="zenbru-faq-answer"
            id="${answerId}"
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

function zenbruDisclaimer(){

    return `

    <section class="zenbru-disclaimer">


        <div class="container">


            <div class="zenbru-disclaimer-box reveal">


                <span class="zenbru-disclaimer-icon">
                    i
                </span>


                <div>


                    <strong>
                        Informação importante
                    </strong>


                    <p>

                        As características funcionais,
                        nutricionais e alegações apresentadas
                        nesta página foram organizadas com
                        base no material disponibilizado
                        para o produto.

                        Estas informações não devem ser
                        interpretadas como diagnóstico,
                        tratamento ou garantia de resultados
                        médicos.

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

function zenbruCta(){

    return `

    <section class="section zenbru-cta">


        <div class="container">


            <div class="zenbru-cta-box reveal">


                <div>


                    <span class="label zenbru-label-light">
                        ZENBRU PREMIUM COFFEE
                    </span>


                    <h2>

                        Mais do que café.
                        <span>
                            Uma experiência.
                        </span>

                    </h2>


                    <p>

                        Descubra uma combinação de café
                        Robusta, ginseng e gengibre criada
                        para uma experiência diferenciada.

                    </p>


                </div>


                <div class="zenbru-cta-actions">


                    <button
                        class="btn btn-primary zenbru-btn-primary"
                        id="zenbruWhats"
                        type="button">

                        Falar no WhatsApp

                    </button>


                    <button
                        class="btn btn-glass zenbru-btn-dark"
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

    <div class="zenbru-detail-item">


        <span class="zenbru-detail-check">
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

function initialiseZenbru(){

    const root =
        document.querySelector(
            ".page-zenbru"
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
                ".zenbru-overview-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".zenbru-detail-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".zenbru-experience-card"
            )
        );


        stagger(
            root.querySelectorAll(
                ".zenbru-preparation-step"
            )
        );

    }catch(error){

        console.warn(
            "Zenbru animations:",
            error
        );

    }


    /* ======================================================
       RIPPLE
       ====================================================== */

    try{

        root
            .querySelectorAll(
                ".btn, .zenbru-details-toggle, .zenbru-faq-question"
            )
            .forEach(
                button => {

                    ripple(button);

                }
            );

    }catch(error){

        console.warn(
            "Zenbru ripple:",
            error
        );

    }


    /* ======================================================
       COMPOSITION SCROLL
       ====================================================== */

    root
        .querySelector(
            "#zenbruCompositionBtn"
        )
        ?.addEventListener(
            "click",
            () => {

                root
                    .querySelector(
                        "#zenbru-composition"
                    )
                    ?.scrollIntoView({

                        behavior:"smooth",
                        block:"start"

                    });

            }
        );


    /* ======================================================
       EXPANDABLE INFORMATION
       ====================================================== */

    root
        .querySelectorAll(
            ".zenbru-details-toggle"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const container =
                            button.closest(
                                ".zenbru-information"
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
            ".zenbru-faq-question"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const item =
                            button.closest(
                                ".zenbru-faq-item"
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
                                ".zenbru-faq-item"
                            )
                            .forEach(
                                other => {

                                    if(other !== item){

                                        other.classList.remove(
                                            "active"
                                        );


                                        other
                                            .querySelector(
                                                ".zenbru-faq-question"
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
            "#buyZenbru"
        )
        ?.addEventListener(
            "click",
            openWhats
        );


    /* ======================================================
       WHATSAPP
       ====================================================== */

    root
        .querySelector(
            "#zenbruWhats"
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
        "Olá AD Lifestyle! Tenho interesse no Zenbru Premium Coffee e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
