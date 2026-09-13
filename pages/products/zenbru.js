/* ==========================================================
   AD LIFESTYLE V2
   ZENBRU.JS
   Premium Functional Coffee Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD ZENBRU PAGE
   ========================================================== */

export function loadZenbru(){

    applyTheme("zenbru");

    const app = document.getElementById("app");

    if(!app) return;

    app.innerHTML = `
        ${hero()}
        ${ingredients()}
        ${benefits()}
        ${experience()}
        ${howToPrepare()}
        ${faq()}
        ${cta()}
    `;

    initialiseZenbru();

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero zenbru-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Functional Coffee Collection
            </span>


            <h1 class="hero-title">
                Zenbru
                Premium
                Coffee
            </h1>


            <p class="hero-sub">

                Um café funcional de perfil premium,
                desenvolvido para combinar café Robusta,
                ginseng e gengibre numa experiência
                aromática diferenciada.

            </p>


            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    id="buyZenbru"
                    type="button">

                    Comprar Agora

                </button>


                <button
                    class="btn btn-glass"
                    id="coffeeBtn"
                    type="button">

                    Ver Composição

                </button>

            </div>


            <div class="zenbru-hero-highlights">

                <span>
                    ✓ Café Robusta
                </span>

                <span>
                    ✓ Ginseng
                </span>

                <span>
                    ✓ Gengibre
                </span>

                <span>
                    ✓ Baixo índice glicémico*
                </span>

            </div>


            <p class="zenbru-disclaimer">

                *Característica comunicada na documentação
                apresentada para o produto.

            </p>

        </div>


        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>

                <img
                    class="parallax"
                    data-speed="35"
                    src="./assets/products/zenbru.png"
                    alt="Zenbru Premium Coffee"
                    loading="eager"
                >

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   INGREDIENTS
   ========================================================== */

function ingredients(){

return `

<section
    id="coffee"
    class="section zenbru-ingredients">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Composição Premium
            </span>


            <h2 class="section-title">

                Ingredientes seleccionados
                para uma experiência diferenciada

            </h2>


            <p class="lead">

                O Zenbru combina ingredientes e
                características seleccionadas para
                criar um perfil de sabor e utilização
                distinto.

            </p>

        </div>


        <div class="grid grid-3 mt-6">


            ${ingredient(
                "☕",
                "Café Robusta",
                "Grãos de origem Brasil e Vietname, apresentados como a base do perfil de café Zenbru."
            )}


            ${ingredient(
                "🌿",
                "Ginseng",
                "Extracto de ginseng coreano apresentado como um dos componentes funcionais da fórmula."
            )}


            ${ingredient(
                "🫚",
                "Gengibre",
                "Ingrediente vegetal tradicionalmente utilizado em bebidas e preparações alimentares."
            )}

        </div>


        <div class="zenbru-more-information mt-5">

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
                            01 — Café Robusta
                        </span>


                        <h3>
                            Brasil & Vietname
                        </h3>


                        <p class="text mt-2">

                            A informação apresentada para o
                            produto identifica café Robusta
                            proveniente do Brasil e do Vietname.

                        </p>


                        <div class="zenbru-detail-list mt-3">

                            ${detailItem(
                                "Brasil — aproximadamente 100 a 800 m de altitude"
                            )}

                            ${detailItem(
                                "Brasil — solo argiloso e forte retenção de água"
                            )}

                            ${detailItem(
                                "Vietname — aproximadamente 600 a 1000 m de altitude"
                            )}

                            ${detailItem(
                                "Vietname — solos vulcânicos ricos em minerais"
                            )}

                        </div>

                    </article>


                    <article class="zenbru-detail-card">

                        <span class="label">
                            02 — Ginseng
                        </span>


                        <h3>
                            Extracto de Ginseng
                        </h3>


                        <p class="text mt-2">

                            A apresentação do produto refere
                            ginseng coreano de qualidade superior
                            e indica um teor de ginsenosidos
                            igual ou superior a 7%.

                        </p>


                        <div class="zenbru-detail-list mt-3">

                            ${detailItem(
                                "Ginseng coreano"
                            )}

                            ${detailItem(
                                "Ginsenosidos ≥ 7%"
                            )}

                            ${detailItem(
                                "Protecção celular — alegação apresentada"
                            )}

                            ${detailItem(
                                "Acção antioxidante — alegação apresentada"
                            )}

                        </div>

                    </article>


                    <article class="zenbru-detail-card">

                        <span class="label">
                            03 — Gengibre
                        </span>


                        <h3>
                            Gengibre
                        </h3>


                        <p class="text mt-2">

                            O material apresentado identifica
                            o gengibre como um dos ingredientes
                            funcionais da composição.

                        </p>


                        <div class="zenbru-detail-list mt-3">

                            ${detailItem(
                                "Curcumina — característica comunicada"
                            )}

                            ${detailItem(
                                "Gingerol — característica comunicada"
                            )}

                            ${detailItem(
                                "Propriedades antioxidantes — alegação apresentada"
                            )}

                            ${detailItem(
                                "Propriedades antibacterianas — alegação apresentada"
                            )}

                        </div>

                    </article>


                    <article class="zenbru-detail-card zenbru-detail-card-wide">

                        <span class="label">
                            Informação adicional
                        </span>


                        <h3>
                            Características comunicadas
                        </h3>


                        <p class="text mt-2">

                            A documentação de apresentação
                            fornecida para o Zenbru inclui
                            referências ao ácido clorogénico,
                            actividade antioxidante e outras
                            propriedades associadas aos seus
                            ingredientes.

                        </p>


                        <p class="text mt-2">

                            Estas referências são apresentadas
                            como informação do produto e não
                            devem ser interpretadas como
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


function ingredient(icon, title, text){

return `

<article class="card service-card zenbru-ingredient-card reveal">

    <div class="service-icon">
        ${icon}
    </div>


    <h3>
        ${title}
    </h3>


    <p class="text mt-2">
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

<section class="section-sm zenbru-benefits">

    <div class="container">

        <div class="split">


            <div class="split-image reveal-left">

                <div class="zenbru-benefit-image">

                    <img
                        src="./assets/products/zenbru.png"
                        alt="Zenbru Premium Coffee"
                        loading="lazy"
                    >

                </div>

            </div>


            <div class="split-content reveal-right">

                <span class="label">
                    Destaques
                </span>


                <h2 class="section-title">
                    Muito mais do que uma chávena de café
                </h2>


                <p class="text mt-3">

                    Uma combinação pensada para quem
                    valoriza sabor, composição e uma
                    experiência premium.

                </p>


                <div class="icon-list mt-4">

                    ${check(
                        "Perfil de café Robusta"
                    )}

                    ${check(
                        "Ginseng coreano"
                    )}

                    ${check(
                        "Gengibre"
                    )}

                    ${check(
                        "Aroma e sabor diferenciados"
                    )}

                    ${check(
                        "Baixo índice glicémico — característica comunicada"
                    )}

                    ${check(
                        "Ideal para integrar uma rotina de café"
                    )}

                </div>


                <div class="zenbru-more-information mt-5">

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
                                    Ginseng
                                </span>


                                <h3>
                                    Características apresentadas
                                </h3>


                                <div class="zenbru-detail-list mt-3">

                                    ${detailItem(
                                        "Regeneração celular — alegação apresentada"
                                    )}

                                    ${detailItem(
                                        "Neutralização de radicais livres — alegação apresentada"
                                    )}

                                    ${detailItem(
                                        "Apoio à protecção celular — alegação apresentada"
                                    )}

                                    ${detailItem(
                                        "Retardamento do envelhecimento — alegação apresentada"
                                    )}

                                </div>

                            </article>


                            <article class="zenbru-detail-card">

                                <span class="label">
                                    Gengibre
                                </span>


                                <h3>
                                    Características apresentadas
                                </h3>


                                <div class="zenbru-detail-list mt-3">

                                    ${detailItem(
                                        "Curcumina"
                                    )}

                                    ${detailItem(
                                        "Gingerol"
                                    )}

                                    ${detailItem(
                                        "Acção antioxidante — alegação apresentada"
                                    )}

                                    ${detailItem(
                                        "Acção antibacteriana — alegação apresentada"
                                    )}

                                </div>

                            </article>


                            <article class="zenbru-detail-card zenbru-detail-card-wide">

                                <span class="label">
                                    Índice glicémico
                                </span>


                                <h3>
                                    Baixo índice glicémico
                                </h3>


                                <p class="text mt-2">

                                    Uma das imagens fornecidas
                                    apresenta o Zenbru com a indicação
                                    “Índice Glicémico Baixo” e referência
                                    a certificação por Temasek Polytechnic.

                                </p>


                                <p class="text mt-2">

                                    Esta informação deve ser utilizada
                                    conforme a documentação oficial
                                    correspondente ao produto.

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

<div class="icon-item">

    <div class="icon-circle">
        ✓
    </div>

    <div>
        ${text}
    </div>

</div>

`;

}


/* ==========================================================
   EXPERIENCE
   ========================================================== */

function experience(){

return `

<section class="section zenbru-experience">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Experiência Zenbru
            </span>


            <h2 class="section-title">

                Um ritual pensado
                para o seu dia

            </h2>


            <p class="lead">

                Sabor, aroma e uma composição
                diferenciada numa experiência
                premium.

            </p>

        </div>


        <div class="bento mt-6">


            <div class="bento-card span-7 reveal">

                <span class="label">
                    Café
                </span>


                <h3>
                    Perfil Robusta
                </h3>


                <p class="text mt-2">

                    Uma base de café seleccionada
                    a partir de grãos Robusta associados
                    ao Brasil e ao Vietname.

                </p>

            </div>


            <div class="bento-card span-5 reveal delay-1">

                <span class="label">
                    Botânicos
                </span>


                <h3>
                    Ginseng + Gengibre
                </h3>


                <p class="text mt-2">

                    Dois ingredientes vegetais que
                    complementam o perfil funcional
                    apresentado para a bebida.

                </p>

            </div>


            <div class="bento-card span-12 reveal delay-2">

                <span class="label">
                    AD Lifestyle
                </span>


                <h3>
                    Filosofia Zenbru
                </h3>


                <p class="text mt-2">

                    Uma proposta que combina
                    qualidade, experiência, estilo de vida
                    e uma abordagem de bem-estar.

                </p>

            </div>


        </div>

    </div>

</section>

`;

}


/* ==========================================================
   HOW TO PREPARE
   ========================================================== */

function howToPrepare(){

return `

<section class="section-sm zenbru-preparation">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Preparação
            </span>


            <h2 class="section-title">
                Simples de preparar
            </h2>


            <p class="lead">

                Um processo simples para transformar
                a sua chávena num momento Zenbru.

            </p>

        </div>


        <div class="timeline mt-6">


            ${step(
                "1",
                "Aquecer",
                "Prepare aproximadamente 180–200 ml de água quente."
            )}


            ${step(
                "2",
                "Adicionar",
                "Adicione a quantidade recomendada de Zenbru à chávena."
            )}


            ${step(
                "3",
                "Misturar",
                "Mexa cuidadosamente até obter uma mistura homogénea."
            )}


            ${step(
                "4",
                "Desfrutar",
                "Aprecie o aroma, o sabor e a experiência Zenbru."
            )}


        </div>


        <div class="zenbru-preparation-note mt-5">

            <span class="label">
                Nota
            </span>


            <p class="text mt-2">

                Para preparar correctamente o produto,
                siga sempre as instruções presentes na
                respectiva embalagem.

            </p>

        </div>

    </div>

</section>

`;

}


function step(number, title, text){

return `

<div class="timeline-item reveal">

    <div class="timeline-dot">
        ${number}
    </div>


    <div class="timeline-content">

        <h3>
            ${title}
        </h3>


        <p class="text mt-1">
            ${text}
        </p>

    </div>

</div>

`;

}


/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

return `

<section class="section-sm zenbru-faq">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Perguntas Frequentes
            </span>


            <h2 class="section-title">
                Tudo sobre o Zenbru
            </h2>

        </div>


        <div class="faq mt-5">


            ${question(
                "O que é o Zenbru?",
                "O Zenbru é apresentado como um café funcional premium que combina café Robusta, ginseng e gengibre."
            )}


            ${question(
                "Quais são os principais ingredientes?",
                "A informação fornecida identifica café Robusta, extracto de ginseng coreano e gengibre como componentes principais."
            )}


            ${question(
                "De onde vem o café Robusta?",
                "A apresentação fornecida indica origens no Brasil e no Vietname, incluindo diferentes condições de altitude e solo."
            )}


            ${question(
                "O Zenbru tem ginseng?",
                "Sim. A documentação fornecida apresenta extracto de ginseng coreano e indica um teor de ginsenosidos igual ou superior a 7%."
            )}


            ${question(
                "O Zenbru contém gengibre?",
                "Sim. O gengibre é apresentado como um dos componentes do produto, com referência a curcumina e gingerol."
            )}


            ${question(
                "O Zenbru possui baixo índice glicémico?",
                "Uma das imagens fornecidas apresenta o produto com a indicação de baixo índice glicémico e referência a certificação por Temasek Polytechnic. Consulte a documentação oficial para confirmação."
            )}


            ${question(
                "Pode substituir tratamento ou orientação médica?",
                "Não. As características funcionais apresentadas não devem ser interpretadas como diagnóstico, tratamento ou garantia de resultados médicos. Questões de saúde devem ser avaliadas por um profissional de saúde."
            )}

        </div>

    </div>

</section>

`;

}


function question(questionText, answerText){

return `

<div class="faq-item">

    <button
        class="faq-question"
        type="button"
        aria-expanded="false">

        <span>
            ${questionText}
        </span>


        <span>
            +
        </span>

    </button>


    <div class="faq-answer">

        <p>
            ${answerText}
        </p>

    </div>

</div>

`;

}


/* ==========================================================
   CTA
   ========================================================== */

function cta(){

return `

<section class="section zenbru-cta">

    <div class="container">

        <div class="showcase">

            <div class="showcase-content section-center">

                <span class="badge">
                    Zenbru Coffee
                </span>


                <h2 class="section-title mt-3">

                    Transforme cada chávena
                    num momento especial

                </h2>


                <p class="lead">

                    Descubra uma experiência de café
                    que combina Robusta, ginseng,
                    gengibre e um perfil premium.

                </p>


                <div class="hero-actions center mt-4">

                    <button
                        class="btn btn-primary"
                        id="zenbruWhats"
                        type="button">

                        Falar no WhatsApp

                    </button>


                    <button
                        class="btn btn-glass"
                        id="backHome"
                        type="button">

                        Voltar ao Início

                    </button>

                </div>

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

    <span class="icon-circle">
        ✓
    </span>

    <span>
        ${text}
    </span>

</div>

`;

}


/* ==========================================================
   INITIALISE ZENBRU
   ========================================================== */

function initialiseZenbru(){

    /*
     * Card animations
     */

    try{

        stagger(".service-card");

        stagger(".zenbru-detail-card");

    }catch(error){

        console.warn(
            "Zenbru animations:",
            error
        );

    }


    /*
     * Ripple effects
     */

    try{

        document
            .querySelectorAll(".btn")
            .forEach(button => {

                ripple(button);

            });

    }catch(error){

        console.warn(
            "Zenbru ripple:",
            error
        );

    }


    /*
     * Composition button
     */

    document
        .getElementById("coffeeBtn")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("coffee")
                    ?.scrollIntoView({
                        behavior:"smooth",
                        block:"start"
                    });

            }
        );


    /*
     * Back home
     */

    document
        .getElementById("backHome")
        ?.addEventListener(
            "click",
            () => {

                navigate("/");

            }
        );


    /*
     * Buy Zenbru
     */

    document
        .getElementById("buyZenbru")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * WhatsApp CTA
     */

    document
        .getElementById("zenbruWhats")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * Expandable information
     */

    document
        .querySelectorAll(
            ".zenbru-details-toggle"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".zenbru-more-information"
                        );

                    if(!container) return;


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

        });


    /*
     * FAQ accordion
     */

    document
        .querySelectorAll(
            ".zenbru-faq .faq-question"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const item =
                        button.closest(
                            ".faq-item"
                        );

                    if(!item) return;


                    const isOpen =
                        item.classList.contains(
                            "active"
                        );


                    /*
                     * Fechar os restantes
                     */

                    document
                        .querySelectorAll(
                            ".zenbru-faq .faq-item"
                        )
                        .forEach(otherItem => {

                            if(otherItem !== item){

                                otherItem.classList.remove(
                                    "active"
                                );

                                const otherButton =
                                    otherItem.querySelector(
                                        ".faq-question"
                                    );

                                if(otherButton){

                                    otherButton.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    );

                                }

                            }

                        });


                    /*
                     * Abrir/fechar actual
                     */

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

        });

}


/* ==========================================================
   OPEN WHATSAPP
   ========================================================== */

function openWhats(){

    const phone =
        "244924964666";


    const message =
        "Olá AD Lifestyle! Tenho interesse no Zenbru Premium Coffee e gostaria de saber mais informações.";


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}

