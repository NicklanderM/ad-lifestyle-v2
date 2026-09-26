/* ==========================================================
   AD LIFESTYLE V2
   EZENO.JS
   Premium EZENO Oral Care Product Page
   Modelo estrutural: iSMART S3
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   CONFIG
   ========================================================== */

const PRODUCT_IMAGE =
    "./assets/products/ezeno.png";

const WHATSAPP_NUMBER =
    "244924964666";


/* ==========================================================
   LOAD
   ========================================================== */

export function loadEzeno(){

    applyTheme("ezeno");

    const app =
        document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `

        <div
            class="page-ezeno"
            data-product-page="ezeno">

            ${hero()}

            ${overview()}

            ${oralCare()}

            ${ingredients()}

            ${benefits()}

            ${productDetail()}

            ${technology()}

            ${certifications()}

            ${howToUse()}

            ${experience()}

            ${faq()}

            ${information()}

            ${cta()}

        </div>

    `;

    initialiseEzeno();
}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return `

    <section class="hero ezeno-hero">

        <div class="ezeno-hero-atmosphere">

            <div class="ezeno-orb ezeno-orb-1"></div>

            <div class="ezeno-orb ezeno-orb-2"></div>

            <div class="ezeno-orbit ezeno-orbit-1"></div>

            <div class="ezeno-orbit ezeno-orbit-2"></div>

        </div>


        <div class="container ezeno-hero-grid">

            <div class="ezeno-hero-copy reveal">

                <span class="ezeno-eyebrow">
                    EZENO · PREMIUM ORAL CARE
                </span>


                <h1>
                    EZENO
                    <span>Herbal.</span>
                </h1>


                <p class="ezeno-hero-description">
                    Dentífrico de inspiração herbal, 
                    é uma solução de cuidado oral orientada
                    para limpeza, frescura, higiene diária
                    e cuidado das gengivas.
                </p>


                <div class="ezeno-hero-pills">

                    <span class="ezeno-hero-pill">
                        Panax Ginseng
                    </span>

                    <span class="ezeno-hero-pill">
                        Árvore do Chá
                    </span>

                    <span class="ezeno-hero-pill">
                        Sem Flúor
                    </span>

                    <span class="ezeno-hero-pill">
                        Cuidado Oral
                    </span>

                </div>


                <div class="ezeno-hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="buyEzeno">

                        Comprar EZENO

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="ezenoIngredients"
                        data-scroll="#ezeno-ingredients">

                        Conhecer ingredientes

                    </button>

                </div>

            </div>


            <div class="ezeno-hero-product reveal-right">

                <div class="ezeno-product-aura"></div>

                <div class="ezeno-product-ring"></div>


                <div class="ezeno-product-grid">

                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="EZENO Herbal Toothpaste"
                        loading="eager"
                        decoding="async"
                        class="ezeno-product-image"
                    >

                </div>


                <div class="ezeno-product-caption">

                    <strong>
                        EZENO
                    </strong>

                    <span>
                        PREMIUM ORAL CARE
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
        id="ezeno-overview"
        class="section ezeno-overview-section">

        <div class="container">

            <div class="section-center ezeno-section-heading reveal">

                <span class="label">
                    VISÃO GERAL
                </span>


                <h2 class="section-title">

                    Conheça o conceito
                    <span>EZENO.</span>

                </h2>


                <p class="lead">
                    O EZENO é apresentado como um dentífrico
                    de inspiração herbal, com destaque para
                    limpeza profunda, frescura, cuidado das
                    gengivas e ingredientes associados ao
                    conceito de higiene oral diária.
                </p>

            </div>


            <div class="ezeno-overview-grid">

                ${overviewCard(
                    "01",
                    "Limpeza profunda",
                    "Em destaque a limpeza da superfície dentária, resíduos, placa e manchas."
                )}

                ${overviewCard(
                    "02",
                    "Ginseng",
                    "O extracto de Panax Ginseng é um dos componentes centrais."
                )}

                ${overviewCard(
                    "03",
                    "Frescura",
                    "Uma proposta de hálito fresco e experiência refrescante."
                )}

                ${overviewCard(
                    "04",
                    "Cuidado oral",
                    "A identidade do EZENO está orientada para uma rotina diária de higiene da boca."
                )}

            </div>


            <div class="ezeno-overview-note reveal">

                <strong>
                    Uma proposta herbal para a rotina de higiene oral.
                </strong>


                <p>
                    As características, percentagens, tempos e outras especificações
                    desta página reproduzem o enquadramento da documentação 
                    oficial do produto em questão.
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
        "02":"✿",
        "03":"✦",
        "04":"◇"
    };

    return `

    <article class="ezeno-overview-card reveal">

        <span class="ezeno-card-number">
            ${number}
        </span>


        <div
            class="ezeno-card-icon"
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
   ORAL CARE
   ========================================================== */

function oralCare(){

    return `

    <section
        id="ezeno-care"
        class="section ezeno-care">

        <div class="container">

            <div class="ezeno-section-heading reveal">

                <span class="eyebrow">
                    CUIDADO ORAL
                </span>


                <h2>
                    Mais do que um
                    <span>dentífrico.</span>
                </h2>


                <p>
                    A apresentação do EZENO destaca uma combinação
                    de limpeza, frescura, cuidado das gengivas e
                    características específicas de formulação.
                </p>

            </div>


            <div class="ezeno-care-grid">

                ${careCard(
                    "01",
                    "Limpeza Profunda",
                    "Limpeza da superfície dentária e remoção de resíduos.",
                    "🦷"
                )}

                ${careCard(
                    "02",
                    "Ginseng",
                    "O Panax Ginseng ocupa uma posição central na apresentação do dentífrico.",
                    "🌿"
                )}

                ${careCard(
                    "03",
                    "Árvore do Chá",
                    "O óleo da árvore do chá é destacado no contexto da frescura oral.",
                    "🌱"
                )}

                ${careCard(
                    "04",
                    "Hálito Fresco",
                    "O produto é uma proposta de frescura oral prolongada.",
                    "✦"
                )}

            </div>


            <div class="ezeno-more-wrap">

                <button
                    type="button"
                    class="ezeno-more-toggle"
                    data-more-toggle="care"
                    data-open-label="Ver detalhes do produto"
                    data-close-label="Ocultar detalhes"
                    aria-expanded="false"
                    aria-controls="ezeno-care-more">

                    <span>
                        Ver detalhes do produto
                    </span>

                    <i aria-hidden="true">
                        +
                    </i>

                </button>


                <div
                    id="ezeno-care-more"
                    class="ezeno-more-panel"
                    data-more-panel="care"
                    aria-hidden="true">

                    <div class="ezeno-detail-grid">

                        ${detailCard(
                            "01 — GENGIVAS",
                            "Cuidado periodontal",
                            "O cuidado das gengivas, periodonto e higiene da cavidade oral.",
                            [
                                "Cuidado das gengivas",
                                "Higiene periodontal",
                                "Rotina diária de escovagem"
                            ]
                        )}

                        ${detailCard(
                            "02 — FRESCURA",
                            "Hálito mais fresco",
                            "Proporcionado pelo óleo da árvore do chá e uma proposta de frescura prolongada.",
                            [
                                "Sensação refrescante",
                                "Cuidado do hálito",
                                "Experiência prolongada"
                            ]
                        )}

                        ${detailCard(
                            "03 — LIMPEZA",
                            "Manchas e placa",
                            "Uma acção de limpeza associada a manchas persistentes e resíduos da superfície dentária.",
                            [
                                "Limpeza da superfície dentária",
                                "Remoção de manchas",
                                "Cuidado da placa dentária"
                            ]
                        )}

                        ${detailCard(
                            "04 — FORMULAÇÃO",
                            "Fórmula apresentada",
                            "Destaca extracto de Panax Ginseng, óleo da árvore do chá e sílica.",
                            [
                                "Panax Ginseng",
                                "Óleo da árvore do chá",
                                "Sílica"
                            ]
                        )}


                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}


function careCard(
    number,
    title,
    text,
    icon
){

    return `

    <article class="ezeno-care-card reveal">

        <span class="ezeno-care-number">
            ${number}
        </span>


        <div
            class="ezeno-care-icon"
            aria-hidden="true">

            ${icon}

        </div>


        <span class="ezeno-care-label">
            CUIDADO ORAL
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
   GENERIC DETAIL CARD
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
            ezeno-detail-card
            ${wide ? "ezeno-detail-card-wide" : ""}
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
                    <div class="ezeno-detail-list">

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

    <div class="ezeno-detail-item">

        <span
            class="ezeno-check"
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
   INGREDIENTS
   ========================================================== */

function ingredients(){

    return `

    <section
        id="ezeno-ingredients"
        class="section ezeno-ingredients">

        <div class="container">

            <div class="ezeno-section-heading reveal">

                <span class="eyebrow">
                    INGREDIENTES & FÓRMULA
                </span>


                <h2>
                    A fórmula por trás
                    <span>do EZENO.</span>
                </h2>


                <p>
                    A apresentação destaca ingredientes
                    específicos associados à identidade herbal e ao
                    conceito de cuidado oral.
                </p>

            </div>


            <div class="ezeno-ingredients-grid">

                ${ingredientCard(
                    "01",
                    "G",
                    "Panax Ginseng",
                    "O extracto de Panax Ginseng é um dos principais componentes do dentífrico EZENO."
                )}

                ${ingredientCard(
                    "02",
                    "T",
                    "Óleo da Árvore do Chá",
                    "Associado ao cuidado do hálito e partículas odoríferas."
                )}

                ${ingredientCard(
                    "03",
                    "S",
                    "Sílica",
                    "Elemento associado à limpeza das manchas persistentes da superfície dentária."
                )}

                ${ingredientCard(
                    "04",
                    "30",
                    "Saponinas & Ginsenósidos",
                    "Cerca de 30 tipos de saponinas e ginsenósidos no extracto de ginseng."
                )}

            </div>


            <div class="ezeno-formulation-card reveal">

                <span class="label">
                    FORMULAÇÃO
                </span>


                <h3>
                    Sem Flúor · Sem Triclosano · Sem Álcool
                </h3>


                <p>
                    O material promocional fornecido também apresenta referências
                    a uma formulação sem flúor, sem triclosano, sem álcool,
                    sem esteróides, sem metais pesados e sem determinados
                    contaminantes.
                </p>


                <div class="ezeno-formulation-tags">

                    <span>
                        Sem Flúor
                    </span>

                    <span>
                        Sem Triclosano
                    </span>

                    <span>
                        Sem Álcool
                    </span>

                    <span>
                        Sem Metais Pesados
                    </span>

                </div>

            </div>

        </div>

    </section>

    `;
}


function ingredientCard(
    number,
    symbol,
    title,
    text
){

    return `

    <article class="ezeno-ingredient-card reveal">

        <span class="ezeno-ingredient-number">
            ${number}
        </span>


        <div
            class="ezeno-ingredient-symbol"
            aria-hidden="true">

            ${symbol}

        </div>


        <span class="ezeno-ingredient-label">
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
   BENEFITS
   ========================================================== */

function benefits(){

    return `

    <section class="section ezeno-benefits">

        <div class="container">

            <div class="ezeno-benefits-grid">

                <div class="ezeno-benefits-visual reveal-left">

                    <div class="ezeno-benefits-frame">

                        <div class="ezeno-benefits-aura"></div>

                        <div class="ezeno-benefits-ring"></div>


                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="EZENO Herbal Toothpaste"
                            loading="lazy"
                            decoding="async"
                        >

                    </div>

                </div>


                <div class="ezeno-benefits-copy reveal-right">

                    <span class="label">
                        BENEFÍCIOS
                    </span>


                    <h2 class="section-title">

                        Limpeza.
                        Frescura.
                        <span>Cuidado.</span>

                    </h2>


                    <p class="lead">
                        O EZENO posiciona-se como
                        o produto solução de higiene oral
                        de utilização diária.
                    </p>


                    <div class="ezeno-benefit-checks">

                        ${benefitCheck(
                            "Limpeza em profundidade"
                        )}

                        ${benefitCheck(
                            "Cuidado diário das gengivas"
                        )}

                        ${benefitCheck(
                            "Sensação de hálito fresco"
                        )}

                        ${benefitCheck(
                            "Cuidado da placa e da superfície dentária"
                        )}

                        ${benefitCheck(
                            "Fórmula de inspiração herbal"
                        )}

                        ${benefitCheck(
                            "Rotina consistente de escovagem"
                        )}

                    </div>


                    <div class="ezeno-more-wrap">

                        <button
                            type="button"
                            class="ezeno-more-toggle"
                            data-more-toggle="benefits"
                            data-open-label="Ver informações funcionais"
                            data-close-label="Ocultar informações"
                            aria-expanded="false"
                            aria-controls="ezeno-benefits-more">

                            <span>
                                Ver informações funcionais
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="ezeno-benefits-more"
                            class="ezeno-more-panel"
                            data-more-panel="benefits"
                            aria-hidden="true">

                            <div class="ezeno-detail-grid">

                                ${detailCard(
                                    "LIMPEZA",
                                    "Superfície dentária",
                                    "Uma proposta de limpeza relacionada com resíduos, manchas e placa dentária."
                                )}

                                ${detailCard(
                                    "GENGIVAS",
                                    "Cuidado periodontal",
                                    "Com uma rotina de higiene e cuidado das gengivas."
                                )}

                                ${detailCard(
                                    "FRESCURA",
                                    "Experiência refrescante",
                                    "O óleo da árvore do chá é directamente associado à experiência de frescura oral.",
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

    <div class="ezeno-benefit-check">

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
        id="ezeno-product"
        class="section ezeno-product-section">

        <div class="container">

            <div class="ezeno-section-heading reveal">

                <span class="eyebrow">
                    O PRODUTO
                </span>


                <h2>
                    EZENO.
                    <span>Premium Oral Care.</span>
                </h2>


                <p>
                    O produto é apresentado através de uma identidade
                    herbal, uma proposta de higiene oral diária e
                    características específicas de formulação.
                </p>

            </div>


            <article class="ezeno-product-card reveal">


                <div class="ezeno-product-card-visual">

                    <div class="ezeno-detail-aura"></div>

                    <div class="ezeno-detail-ring"></div>


                    <div class="ezeno-product-detail-grid">

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="EZENO Herbal Toothpaste"
                            loading="lazy"
                            decoding="async"
                            class="ezeno-product-detail-image"
                        >

                    </div>


                    <span class="ezeno-detail-caption">
                        EZENO · HERBAL ORAL CARE
                    </span>

                </div>


                <div class="ezeno-product-card-copy">

                    <span class="label">
                        EZENO HERBAL
                    </span>


                    <h3>

                        Cuidado oral.
                        <span>Todos os dias.</span>

                    </h3>


                    <p>
                        Uma proposta de higiene oral apresentada
                        com destaque para ginseng, frescura,
                        limpeza e cuidado da cavidade oral.
                    </p>


                    <div class="ezeno-product-spec-list">

                        ${productSpec(
                            "Categoria",
                            "Premium Oral Care"
                        )}

                        ${productSpec(
                            "Ingrediente",
                            "Panax Ginseng"
                        )}

                        ${productSpec(
                            "Destaque",
                            "Frescura oral"
                        )}

                        ${productSpec(
                            "Formulação",
                            "Sem Flúor"
                        )}

                    </div>


                    <div class="ezeno-more-wrap">

                        <button
                            type="button"
                            class="ezeno-more-toggle"
                            data-more-toggle="product"
                            data-open-label="Ver mais características"
                            data-close-label="Ocultar características"
                            aria-expanded="false"
                            aria-controls="ezeno-product-more">

                            <span>
                                Ver mais características
                            </span>

                            <i aria-hidden="true">
                                +
                            </i>

                        </button>


                        <div
                            id="ezeno-product-more"
                            class="ezeno-more-panel"
                            data-more-panel="product"
                            aria-hidden="true">

                            <div class="ezeno-detail-list">

                                ${detailItem(
                                    "Apresentado para uma rotina diária de higiene oral."
                                )}

                                ${detailItem(
                                    "Extracto de Panax Ginseng destacado na formulação apresentada."
                                )}

                                ${detailItem(
                                    "Óleo da árvore do chá e sílica também são destacados no material."
                                )}

                                ${detailItem(
                                    "A utilização deve seguir as instruções oficiais da embalagem."
                                )}

                            </div>

                        </div>

                    </div>


                    <button
                        type="button"
                        class="btn btn-primary ezeno-card-buy"
                        data-buy="product">

                        Adquirir EZENO

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

    <div class="ezeno-product-spec">

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
   TECHNOLOGY
   ========================================================== */

function technology(){

    return `

    <section class="section ezeno-technology">

        <div class="container">

            <div class="ezeno-section-heading ezeno-heading-dark reveal">

                <span class="eyebrow">
                    TECNOLOGIA & PROTECÇÃO
                </span>


                <h2>
                    Uma abordagem completa
                    <span>à higiene oral.</span>
                </h2>


                <p>
                    A comunicação do EZENO combina ingredientes herbais,
                    limpeza, frescura e características específicas
                    de formulação.
                </p>

            </div>


            <div class="ezeno-technology-grid">

                ${technologyCard(
                    "01",
                    "Cuidado periodontal",
                    "Associado ao cuidado das gengivas e do periodonto.",
                    "🦷"
                )}

                ${technologyCard(
                    "02",
                    "Protecção",
                    "Uma proposta de protecção prolongada contra cáries e bactérias.",
                    "◉"
                )}

                ${technologyCard(
                    "03",
                    "Frescura",
                    "Uma experiência de hálito fresco e duradouro.",
                    "✦"
                )}

                ${technologyCard(
                    "04",
                    "Ginseng",
                    "O extracto de Panax Ginseng ocupa uma posição central na identidade do produto.",
                    "🌿"
                )}

                ${technologyCard(
                    "05",
                    "Espuma",
                    "Uma textura e espuma de alta densidade.",
                    "◌"
                )}

                ${technologyCard(
                    "06",
                    "Experiência Premium",
                    "Uma proposta de higiene oral com posicionamento premium.",
                    "◇"
                )}

            </div>


            <div class="ezeno-technology-feature reveal">

                <div class="ezeno-technology-number">
                    99,9%
                </div>


                <div>

                    <span>
                        DESTAQUE DO MATERIAL PROMOCIONAL
                    </span>


                    <p>
                        Percentagem apresentada no material relativamente
                        à protecção contra bactérias.
                    </p>

                </div>

            </div>


            <div class="ezeno-technology-stats">

                ${technologyStat(
                    "24H",
                    "Frescura declarada"
                )}

                ${technologyStat(
                    "2×",
                    "Escovagem diária"
                )}

                ${technologyStat(
                    "30",
                    "Saponinas e ginsenósidos destacados"
                )}

            </div>

        </div>

    </section>

    `;
}


function technologyCard(
    number,
    title,
    text,
    icon
){

    return `

    <article class="ezeno-technology-card reveal">

        <span>
            ${number}
        </span>


        <div class="ezeno-technology-icon">
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


function technologyStat(
    value,
    label
){

    return `

    <article class="ezeno-technology-stat reveal">

        <strong>
            ${value}
        </strong>

        <span>
            ${label}
        </span>

    </article>

    `;
}


/* ==========================================================
   CERTIFICATIONS
   ========================================================== */

function certifications(){

    return `

    <section class="section ezeno-certifications">

        <div class="container">

            <div class="ezeno-section-heading reveal">

                <span class="eyebrow">
                    DOCUMENTAÇÃO
                </span>


                <h2>
                    Qualidade,
                    <span>testes e conformidade.</span>
                </h2>


                <p>
                    O material fornecido apresenta referências
                    a patentes, relatórios clínicos, inspecções
                    e determinadas características de formulação.
                </p>

            </div>


            <div class="ezeno-certification-grid">

                ${certificateCard(
                    "01",
                    "Patentes concedidas",
                    "Referência apresentada no material promocional fornecido."
                )}

                ${certificateCard(
                    "02",
                    "Relatórios clínicos",
                    "O material faz referência a relatórios clínicos aprovados."
                )}

                ${certificateCard(
                    "03",
                    "Inspecção",
                    "A apresentação inclui referência a inspecção aprovada."
                )}

                ${certificateCard(
                    "04",
                    "Sem Flúor",
                    "Característica declarada na documentação promocional fornecida."
                )}

                ${certificateCard(
                    "05",
                    "Sem Triclosano",
                    "Característica declarada na apresentação do produto."
                )}

                ${certificateCard(
                    "06",
                    "Sem Metais Pesados",
                    "Característica indicada no material promocional fornecido."
                )}

            </div>


            <div class="ezeno-certification-note reveal">

                <span class="label">
                    VERIFICAÇÃO
                </span>


                <p>
                    Números, entidades certificadoras, validade,
                    âmbito e autenticidade de qualquer certificação,
                    patente ou relatório devem ser confirmados
                    na documentação oficial correspondente.
                </p>

            </div>

        </div>

    </section>

    `;
}


function certificateCard(
    number,
    title,
    text
){

    return `

    <article class="ezeno-certificate reveal">

        <div class="ezeno-certificate-number">
            ${number}
        </div>


        <div>

            <span class="ezeno-certificate-label">
                DOCUMENTAÇÃO
            </span>


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
   HOW TO USE
   ========================================================== */

function howToUse(){

    return `

    <section class="section ezeno-routine">

        <div class="container-sm">

            <div class="ezeno-section-heading reveal">

                <span class="eyebrow">
                    UTILIZAÇÃO
                </span>


                <h2>
                    Uma rotina simples
                    de <span>higiene oral.</span>
                </h2>


                <p>
                    É recomendada uma escovagem
                    cuidadosa pelo menos duas vezes por dia.
                </p>

            </div>


            <div class="ezeno-routine-list">

                ${routineStep(
                    "01",
                    "Preparar",
                    "Humedeça a escova e coloque uma quantidade adequada de EZENO."
                )}


                ${routineStep(
                    "02",
                    "Escovar",
                    "Escove cuidadosamente os dentes e a linha das gengivas."
                )}


                <div
                    class="ezeno-more-panel"
                    data-more-panel="routine"
                    aria-hidden="true"
                    id="ezeno-routine-more">

                    ${routineStep(
                        "03",
                        "Limpar",
                        "Dedique atenção à superfície dentária e às zonas de difícil acesso."
                    )}


                    ${routineStep(
                        "04",
                        "Repetir",
                        "Utilize pelo menos duas vezes por dia, de acordo com a orientação apresentada."
                    )}

                </div>

            </div>


            <button
                type="button"
                class="ezeno-more-toggle"
                data-more-toggle="routine"
                data-open-label="Ver mais passos"
                data-close-label="Ocultar passos"
                aria-expanded="false"
                aria-controls="ezeno-routine-more">

                <span>
                    Ver mais passos
                </span>

                <i aria-hidden="true">
                    +
                </i>

            </button>


            <div class="ezeno-routine-note reveal">

                <span class="label">
                    NOTA IMPORTANTE
                </span>


                <p>
                    As instruções específicas da embalagem oficial devem prevalecer.
                    Uma boa higiene oral também inclui acompanhamento regular
                    por profissionais de saúde oral.
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

    <article class="ezeno-routine-step reveal">

        <div class="ezeno-routine-number">
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

    <section class="section ezeno-experience">

        <div class="container">

            <div class="section-center ezeno-section-heading reveal">

                <span class="label">
                    EZENO LIFESTYLE
                </span>


                <h2 class="section-title">

                    Um sorriso cuidado
                    começa na <span>rotina.</span>

                </h2>


                <p class="lead">
                    Uma abordagem de higiene oral que combina cuidado,
                    frescura, ingredientes destacados pela marca
                    e uma experiência premium de escovagem.
                </p>

            </div>


            <div class="ezeno-experience-grid">

                ${experienceCard(
                    "🌿",
                    "Herbal",
                    "Identidade construída em torno do ginseng e de ingredientes de origem vegetal."
                )}

                ${experienceCard(
                    "🦷",
                    "Oral Care",
                    "Foco na higiene diária dos dentes, gengivas e boca."
                )}

                ${experienceCard(
                    "✦",
                    "Frescura",
                    "Uma experiência orientada para um hálito fresco e agradável."
                )}

                ${experienceCard(
                    "◉",
                    "Protecção",
                    "O material destaca uma proposta de protecção oral prolongada."
                )}

                ${experienceCard(
                    "◇",
                    "Premium",
                    "Uma apresentação sofisticada para uma rotina de higiene oral."
                )}

                ${experienceCard(
                    "🌱",
                    "Natureza",
                    "Uma proposta visual e conceptual ligada a ingredientes botânicos."
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

    <article class="ezeno-experience-card reveal">

        <div class="ezeno-experience-icon">
            ${icon}
        </div>


        <span class="ezeno-experience-number">
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
            "O que é o EZENO?",
            "O EZENO é um dentífrico de base herbal, com destaque para o extracto de Panax Ginseng e uma proposta de higiene oral diária."
        ],

        [
            "Qual é o principal ingrediente?",
            "O extracto de Panax Ginseng, associado a cerca de 30 tipos de saponinas e ginsenósidos na apresentação comercial."
        ],

        [
            "O EZENO contém flúor?",
            "O EZENO tem em sua composição uma fórmula sem flúor."
        ],

        [
            "O EZENO contém triclosano?",
            "Não. “sem triclosano."
        ],

        [
            "O EZENO ajuda a manter o hálito fresco?",
            "Sim, essa é uma das características destacadas, incluindo referência ao óleo da árvore do chá e a uma frescura prolongada."
        ],

        [
            "Com que frequência devo escovar?",
            "Pelo menos duas vezes por dia."
        ],

        [
            "O EZENO protege contra cáries e bactérias?",
            "Sim. A protecção contra cáries e bactérias."
        ],

        [
            "O EZENO repara as gengivas?",
            "Sim,garante a reparação das gengivas em determinado período, entretanto, não deve ser interpretada como garantia de tratamento ou resultado para uma condição periodontal."
        ],

        [
            "O EZENO substitui uma consulta de dentista?",
            "Não. Um dentífrico faz parte da higiene oral diária, mas não substitui avaliação, diagnóstico ou tratamento realizado por um dentista."
        ],

        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre disponibilidade e aquisição."
        ]

    ];


    return `

    <section
        id="ezeno-faq"
        class="section ezeno-faq-section">

        <div class="container-sm">

            <div class="ezeno-section-heading reveal">

                <span class="eyebrow">
                    PERGUNTAS FREQUENTES
                </span>


                <h2>
                    Tudo sobre o
                    <span>EZENO.</span>
                </h2>


                <p>
                    As respostas abrem individualmente para manter
                    a leitura organizada e facilitar a consulta.
                </p>

            </div>


            <div class="ezeno-faq-list">

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
        `ezeno-faq-answer-${number}`;

    return `

    <article class="ezeno-faq-item">

        <button
            type="button"
            class="ezeno-faq-question"
            aria-expanded="false"
            aria-controls="${answerId}">

            <span class="ezeno-faq-number">
                ${number}
            </span>


            <span class="ezeno-faq-text">
                ${questionText}
            </span>


            <span
                class="ezeno-faq-plus"
                aria-hidden="true">

                +

            </span>

        </button>


        <div
            id="${answerId}"
            class="ezeno-faq-answer"
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

    <section class="section ezeno-information-section">

        <div class="container">

            <div class="ezeno-information-box reveal">

                <div class="ezeno-information-icon">
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
                        a partir do material disponibilizado para o EZENO.
                        Percentagens, tempos, certificações, benefícios
                        e outras alegações específicas devem ser confirmados
                        através da documentação oficial antes de serem
                        utilizados como garantias ou promessas clínicas.
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

    <section class="section ezeno-cta-section">

        <div class="container">

            <div class="ezeno-cta-box reveal">

                <span class="ezeno-label-light">
                    EZENO HERBAL
                </span>


                <h2>
                    Mais do que um dentífrico.
                    <span>Uma rotina de cuidado.</span>
                </h2>


                <p>
                    Descubra uma proposta de higiene oral inspirada
                    no ginseng, na frescura e no cuidado diário.
                </p>


                <div class="ezeno-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="ezenoWhats">

                        Falar no WhatsApp

                    </button>


                    <button
                        type="button"
                        class="btn btn-glass"
                        id="backHome">

                        Voltar à AD Lifestyle

                    </button>

                </div>


                <p class="ezeno-cta-disclaimer">
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

function initialiseEzeno(){

    const root =
        document.querySelector(
            ".page-ezeno"
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
            "EZENO: ripple não inicializado.",
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
                .ezeno-overview-grid .reveal,
                .ezeno-care-grid .reveal,
                .ezeno-ingredients-grid .reveal,
                .ezeno-benefits-grid .reveal,
                .ezeno-technology-grid .reveal,
                .ezeno-certification-grid .reveal,
                .ezeno-experience-grid .reveal,
                .ezeno-routine-list .reveal
                `
            )
        );

    }catch(error){

        console.warn(
            "EZENO: stagger não inicializado.",
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
                    ".ezeno-faq-question"
                );

            if(!button){
                return;
            }


            const item =
                button.closest(
                    ".ezeno-faq-item"
                );

            if(!item){
                return;
            }


            const answer =
                item.querySelector(
                    ".ezeno-faq-answer"
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
                    ".ezeno-faq-item.active"
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
                            ".ezeno-product-grid, " +
                            ".ezeno-product-card-visual, " +
                            ".ezeno-benefits-frame"
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
                    "#buyEzeno, #ezenoWhats, [data-buy]"
                );

            if(!button){
                return;
            }


            let message =
                "Olá AD Lifestyle! Tenho interesse no EZENO e gostaria de receber mais informações sobre o produto.";


            const type =
                button.getAttribute(
                    "data-buy"
                );


            if(type === "product"){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o EZENO.";

            }


            if(
                button.id === "buyEzeno"
            ){

                message =
                    "Olá AD Lifestyle! Gostaria de adquirir o EZENO.";

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
                    ".ezeno-faq-item.active .ezeno-faq-answer"
                )
                .forEach(answer=>{

                    answer.style.maxHeight =
                        `${answer.scrollHeight}px`;

                });


            root
                .querySelectorAll(
                    ".ezeno-more-panel.active"
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
            ".ezeno-faq-question"
        );

    const answer =
        item.querySelector(
            ".ezeno-faq-answer"
        );

    const plus =
        item.querySelector(
            ".ezeno-faq-plus"
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
            ".ezeno-faq-plus"
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
