/* ==========================================================
   AD LIFESTYLE V2
   ZENBRU.JS
   Premium Functional Coffee Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD ZENBRU
   ========================================================== */

export function loadZenbru(){

    applyTheme("zenbru");

    const app = document.getElementById("app");

    if(!app) return;


    app.innerHTML = `

        <div
            class="page-zenbru"
            data-product-page="zenbru">

            ${hero()}

            ${composition()}

            ${benefits()}

            ${origins()}

            ${experience()}

            ${howToPrepare()}

            ${faq()}

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

<section class="hero zenbru-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>

        <div class="blob blob-2"></div>

        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">


        <div class="hero-content reveal">


            <span class="badge">
                Zenbru · Functional Coffee
            </span>


            <h1 class="hero-title">

                Zenbru
                <span>Premium Coffee</span>

            </h1>


            <p class="hero-sub">

                Uma experiência de café funcional que
                combina café Robusta, ginseng coreano
                e gengibre numa proposta premium de
                sabor, aroma e lifestyle.

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
                    id="zenbruCompositionBtn"
                    type="button">

                    Ver Composição

                </button>


            </div>


            <div class="zenbru-hero-highlights">


                <span>
                    ✓ Café Robusta
                </span>


                <span>
                    ✓ Ginseng Coreano
                </span>


                <span>
                    ✓ Gengibre
                </span>


                <span>
                    ✓ Perfil Premium
                </span>


            </div>


            <p class="zenbru-disclaimer">

                Características funcionais e nutricionais
                apresentadas com base no material promocional
                disponibilizado para o produto.

            </p>


        </div>


        <div class="hero-visual reveal-right">


            <div class="hero-product floating">


                <div class="product-glow"></div>


                <div class="zenbru-gold-ring"></div>


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
   COMPOSITION
   ========================================================== */

function composition(){

return `

<section
    id="zenbru-composition"
    class="section zenbru-composition">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Composição Premium
            </span>


            <h2 class="section-title">

                Três elementos.
                Uma experiência Zenbru.

            </h2>


            <p class="lead">

                O material de apresentação do produto
                destaca café Robusta, ginseng coreano
                e gengibre como elementos principais
                da composição.

            </p>


        </div>


        <div class="grid grid-3 mt-6">


            ${ingredient(
                "☕",
                "Café Robusta",
                "A base da bebida, com referências de origem ao Brasil e ao Vietname."
            )}


            ${ingredient(
                "🌿",
                "Ginseng Coreano",
                "Extracto de ginseng apresentado na comunicação do produto como ingrediente funcional."
            )}


            ${ingredient(
                "🫚",
                "Gengibre",
                "Ingrediente vegetal utilizado para complementar o perfil funcional e aromático."
            )}


        </div>


        <div class="zenbru-information mt-6">


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

                            A documentação fornecida identifica
                            grãos de café Robusta associados
                            ao Brasil e ao Vietname.

                        </p>


                        <div class="zenbru-detail-list mt-3">

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
                            02 — Ginseng
                        </span>


                        <h3>
                            Ginseng Coreano
                        </h3>


                        <p class="text mt-2">

                            A apresentação fornecida refere
                            ginseng coreano e indica um teor
                            de ginsenosidos igual ou superior a 7%.

                        </p>


                        <div class="zenbru-detail-list mt-3">

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
                            03 — Gengibre
                        </span>


                        <h3>
                            Gengibre
                        </h3>


                        <p class="text mt-2">

                            O gengibre integra a composição
                            apresentada e está associado
                            no material a compostos como
                            gingerol e curcumina.

                        </p>


                        <div class="zenbru-detail-list mt-3">

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
                            Informação adicional
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


function ingredient(icon, title, text){

return `

<article
    class="card service-card zenbru-ingredient-card reveal">


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


                    <div class="zenbru-image-glow"></div>


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

                    Sabor.
                    Energia.
                    Experiência.

                </h2>


                <p class="text mt-3">

                    Uma combinação concebida para
                    acompanhar uma rotina de café
                    com uma identidade funcional
                    e premium.

                </p>


                <div class="icon-list mt-4">


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


                <div class="zenbru-information mt-5">


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
                                    Características comunicadas
                                </h3>


                                <div class="zenbru-detail-list mt-3">


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
                                    Gengibre
                                </span>


                                <h3>
                                    Compostos destacados
                                </h3>


                                <div class="zenbru-detail-list mt-3">


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
                                    Índice glicémico
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
   ORIGINS
   ========================================================== */

function origins(){

return `

<section class="section zenbru-origins">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Origem & Qualidade
            </span>


            <h2 class="section-title">

                Do grão à experiência

            </h2>


            <p class="lead">

                O café Robusta apresentado no material
                possui referências geográficas específicas
                e diferentes características de cultivo.

            </p>


        </div>


        <div class="bento mt-6">


            <div class="bento-card span-6 reveal">


                <span class="label">
                    Brasil
                </span>


                <h3>
                    Café Robusta
                </h3>


                <p class="text mt-2">

                    A apresentação refere altitudes
                    aproximadas entre 100 e 800 metros,
                    além de solos argilosos com forte
                    retenção de água.

                </p>


                <div class="zenbru-origin-symbol">
                    BR
                </div>


            </div>


            <div class="bento-card span-6 reveal delay-1">


                <span class="label">
                    Vietname
                </span>


                <h3>
                    Café Robusta
                </h3>


                <p class="text mt-2">

                    O material refere altitudes
                    aproximadas entre 600 e 1000 metros
                    e solos vulcânicos ricos em minerais.

                </p>


                <div class="zenbru-origin-symbol">
                    VN
                </div>


            </div>


            <div class="bento-card span-12 reveal delay-2">


                <span class="label">
                    ZENBRU
                </span>


                <h3>
                    Uma identidade construída em torno do café
                </h3>


                <p class="text mt-2">

                    A combinação de café Robusta, ginseng
                    coreano e gengibre procura oferecer
                    uma experiência distinta dentro da
                    categoria de café funcional.

                </p>


            </div>


        </div>


    </div>

</section>

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
                Zenbru Lifestyle
            </span>


            <h2 class="section-title">

                Uma nova forma
                de viver o café

            </h2>


            <p class="lead">

                O Zenbru combina a familiaridade
                de uma chávena de café com uma
                composição diferenciada e um
                posicionamento funcional.

            </p>


        </div>


        <div class="grid grid-3 mt-6">


            ${experienceCard(
                "☕",
                "Café",
                "Uma base Robusta com referências de origem ao Brasil e ao Vietname."
            )}


            ${experienceCard(
                "🌿",
                "Ginseng",
                "Extracto de ginseng coreano destacado na composição."
            )}


            ${experienceCard(
                "🫚",
                "Gengibre",
                "Ingrediente vegetal que complementa a identidade funcional da bebida."
            )}


            ${experienceCard(
                "⚡",
                "Energia",
                "Uma experiência pensada para acompanhar momentos activos do dia."
            )}


            ${experienceCard(
                "✨",
                "Premium",
                "Apresentação e posicionamento orientados para uma experiência diferenciada."
            )}


            ${experienceCard(
                "🌍",
                "Lifestyle",
                "Uma bebida integrada numa visão moderna de bem-estar e estilo de vida."
            )}


        </div>


    </div>

</section>

`;

}


function experienceCard(icon, title, text){

return `

<article
    class="card service-card zenbru-experience-card reveal">


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

                O ritual Zenbru

            </h2>


            <p class="lead">

                Prepare a sua bebida seguindo
                as instruções oficiais da embalagem.

            </p>


        </div>


        <div class="timeline mt-6">


            ${step(
                "1",
                "Prepare",
                "Prepare água e uma chávena limpa para a bebida."
            )}


            ${step(
                "2",
                "Adicione",
                "Adicione a quantidade recomendada de Zenbru, de acordo com as instruções oficiais."
            )}


            ${step(
                "3",
                "Misture",
                "Misture cuidadosamente até obter uma preparação homogénea."
            )}


            ${step(
                "4",
                "Desfrute",
                "Aprecie o aroma, o sabor e a experiência Zenbru."
            )}


        </div>


        <div class="zenbru-preparation-note mt-5">


            <span class="label">
                Nota importante
            </span>


            <p class="text mt-2">

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
                "O Zenbru é apresentado como um café funcional premium que combina café Robusta, ginseng coreano e gengibre."
            )}


            ${question(
                "Quais são os principais ingredientes?",
                "A apresentação fornecida identifica café Robusta, extracto de ginseng coreano e gengibre."
            )}


            ${question(
                "De onde vem o café Robusta?",
                "O material disponibilizado faz referência ao Brasil e ao Vietname como origens dos grãos Robusta apresentados."
            )}


            ${question(
                "O Zenbru contém ginseng?",
                "Sim. A documentação fornecida destaca extracto de ginseng coreano e refere um teor de ginsenosidos igual ou superior a 7%."
            )}


            ${question(
                "O Zenbru contém gengibre?",
                "Sim. O gengibre integra a composição apresentada, com referências a gingerol e curcumina."
            )}


            ${question(
                "O Zenbru é apresentado como tendo baixo índice glicémico?",
                "Sim. Uma das apresentações fornecidas indica baixo índice glicémico e faz referência a certificação por Temasek Polytechnic."
            )}


            ${question(
                "Como devo preparar o Zenbru?",
                "A preparação deve seguir a quantidade e as instruções apresentadas na embalagem oficial do produto."
            )}


            ${question(
                "O Zenbru é um medicamento?",
                "Não deve ser apresentado como medicamento. As características funcionais e nutricionais divulgadas não substituem diagnóstico, tratamento ou aconselhamento de um profissional de saúde."
            )}


            ${question(
                "O Zenbru garante benefícios médicos?",
                "Não. As propriedades e benefícios referidos no material promocional devem ser entendidos como informações de apresentação do produto e não como garantias clínicas."
            )}


            ${question(
                "Onde posso obter mais informações?",
                "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre disponibilidade e aquisição."
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
                    Zenbru Premium Coffee
                </span>


                <h2 class="section-title mt-3">

                    Mais do que café.
                    Uma experiência.

                </h2>


                <p class="lead">

                    Descubra uma combinação de café Robusta,
                    ginseng e gengibre criada para uma
                    experiência premium.

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


                <p class="zenbru-cta-disclaimer mt-4">

                    Informação apresentada com base no
                    material disponibilizado para o produto.

                </p>


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
   INITIALISE
   ========================================================== */

function initialiseZenbru(){


    try{

        stagger(".zenbru-ingredient-card");

        stagger(".zenbru-detail-card");

        stagger(".zenbru-experience-card");

    }catch(error){

        console.warn(
            "Zenbru animations:",
            error
        );

    }


    try{

        document
            .querySelectorAll(
                ".page-zenbru .btn"
            )
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
     * Composition
     */

    document
        .getElementById("zenbruCompositionBtn")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("zenbru-composition")
                    ?.scrollIntoView({

                        behavior:"smooth",
                        block:"start"

                    });

            }
        );


    /*
     * Expandable information
     */

    document
        .querySelectorAll(
            ".page-zenbru .zenbru-details-toggle"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".zenbru-information"
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
            ".page-zenbru .faq-question"
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


                    document
                        .querySelectorAll(
                            ".page-zenbru .faq-item"
                        )
                        .forEach(other => {

                            if(other !== item){

                                other.classList.remove(
                                    "active"
                                );


                                other
                                    .querySelector(
                                        ".faq-question"
                                    )
                                    ?.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    );

                            }

                        });


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


    /*
     * Home
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
     * Buy
     */

    document
        .getElementById("buyZenbru")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * WhatsApp
     */

    document
        .getElementById("zenbruWhats")
        ?.addEventListener(
            "click",
            openWhats
        );

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhats(){

    const phone =
        "244924964666";


    const message =
        "Olá AD Lifestyle! Tenho interesse no Zenbru Premium Coffee e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
