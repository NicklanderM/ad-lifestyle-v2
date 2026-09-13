/* ==========================================================
   AD LIFESTYLE V2
   EVADOR.JS
   Premium Evador Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD EVADOR
   ========================================================== */

export function loadEvador(){

    applyTheme("evador");

    const app = document.getElementById("app");

    if(!app) return;


    app.innerHTML = `

        <div
            class="page-evador"
            data-product-page="evador">

            ${hero()}

            ${fragrance()}

            ${identity()}

            ${benefits()}

            ${composition()}

            ${routine()}

            ${experience()}

            ${faq()}

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

    <div class="aurora">

        <div class="blob blob-1"></div>

        <div class="blob blob-2"></div>

        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">


        <div class="hero-content reveal">


            <span class="badge">
                Evador · Beyond Fragrance
            </span>


            <h1 class="hero-title">

                EVA
                <span>DOR</span>

            </h1>


            <p class="hero-sub">

                O futuro do perfume.
                Além da fragrância.

                Uma experiência refinada que combina
                beleza, conforto, atenção, confiança
                e uma identidade olfactiva personalizada.

            </p>


            <div class="hero-actions">


                <button
                    class="btn btn-primary"
                    id="buyEvador"
                    type="button">

                    Comprar Agora

                </button>


                <button
                    class="btn btn-glass"
                    id="evadorDiscover"
                    type="button">

                    Descobrir Evador

                </button>


            </div>


            <div class="evador-hero-highlights">


                <span>
                    ✓ Luxuoso
                </span>


                <span>
                    ✓ Refinado
                </span>


                <span>
                    ✓ Elegante
                </span>


                <span>
                    ✓ Único
                </span>


            </div>


            <p class="evador-disclaimer">

                As descrições desta página baseiam-se
                no material promocional disponibilizado
                para o produto.

            </p>


        </div>


        <div class="hero-visual reveal-right">


            <div class="hero-product floating">


                <div class="product-glow"></div>


                <div class="evador-gold-ring"></div>


                <img
                    class="parallax"
                    data-speed="40"
                    src="./assets/products/evador.png"
                    alt="Evador"
                    loading="eager"
                >


            </div>


        </div>


    </div>

</section>

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


        <div class="section-center reveal">


            <span class="label">
                Além da Fragrância
            </span>


            <h2 class="section-title">

                O futuro do perfume

            </h2>


            <p class="lead">

                O Evador apresenta uma proposta que vai
                além de simplesmente perfumar. A comunicação
                do produto destaca uma experiência pensada
                para frescura, conforto e expressão pessoal.

            </p>


        </div>


        <div class="grid grid-4 mt-6">


            ${fragranceCard(
                "✦",
                "Fragrância",
                "Uma experiência olfactiva premium concebida para acompanhar o quotidiano."
            )}


            ${fragranceCard(
                "◉",
                "Conforto",
                "A proposta destaca frescura e uma sensação prolongada de conforto."
            )}


            ${fragranceCard(
                "◇",
                "Elegância",
                "Uma identidade sofisticada para quem valoriza presença e refinamento."
            )}


            ${fragranceCard(
                "∞",
                "Exclusividade",
                "A comunicação do produto destaca uma experiência pessoal e diferenciada."
            )}


        </div>


        <div class="evador-information mt-6">


            <button
                class="evador-details-toggle"
                type="button"
                aria-expanded="false">


                <span>
                    Ver mais sobre a fragrância
                </span>


                <span class="evador-details-icon">
                    +
                </span>


            </button>


            <div class="evador-details-content">


                <div class="evador-details-grid">


                    <article class="evador-detail-card">


                        <span class="label">
                            01 — Fragrância
                        </span>


                        <h3>
                            Uma assinatura pessoal
                        </h3>


                        <p class="text mt-2">

                            Segundo a apresentação do produto,
                            a fragrância mistura-se subtilmente
                            com o aroma natural de cada pessoa,
                            contribuindo para uma experiência
                            olfactiva individualizada.

                        </p>


                        <div class="evador-detail-list mt-3">

                            ${detailItem(
                                "Experiência olfactiva personalizada"
                            )}


                            ${detailItem(
                                "Interacção com o aroma natural"
                            )}


                            ${detailItem(
                                "Identidade diferenciada"
                            )}

                        </div>


                    </article>


                    <article class="evador-detail-card">


                        <span class="label">
                            02 — Qualidade
                        </span>


                        <h3>
                            Uma abordagem refinada
                        </h3>


                        <p class="text mt-2">

                            A comunicação do Evador posiciona
                            a fragrância dentro de uma proposta
                            de qualidade, sofisticação e atenção
                            aos detalhes.

                        </p>


                        <div class="evador-detail-list mt-3">

                            ${detailItem(
                                "Posicionamento premium"
                            )}


                            ${detailItem(
                                "Perfume refinado"
                            )}


                            ${detailItem(
                                "Experiência elegante"
                            )}

                        </div>


                    </article>


                    <article class="evador-detail-card">


                        <span class="label">
                            03 — Frescura
                        </span>


                        <h3>
                            Conforto prolongado
                        </h3>


                        <p class="text mt-2">

                            O material promocional destaca
                            frescura e duração do aroma como
                            elementos da experiência Evador.

                        </p>


                        <div class="evador-detail-list mt-3">

                            ${detailItem(
                                "Sensação de frescura"
                            )}


                            ${detailItem(
                                "Aroma duradouro"
                            )}


                            ${detailItem(
                                "Conforto ao longo do dia"
                            )}

                        </div>


                    </article>


                    <article class="evador-detail-card">


                        <span class="label">
                            04 — Identidade
                        </span>


                        <h3>
                            O perfume de cada pessoa
                        </h3>


                        <p class="text mt-2">

                            A proposta apresentada é que a mesma
                            fragrância possa adquirir uma expressão
                            diferente conforme o aroma natural
                            de quem a utiliza.

                        </p>


                        <div class="evador-detail-list mt-3">

                            ${detailItem(
                                "Expressão individual"
                            )}


                            ${detailItem(
                                "Presença pessoal"
                            )}


                            ${detailItem(
                                "Assinatura olfactiva"
                            )}

                        </div>


                    </article>


                    <article
                        class="evador-detail-card
                               evador-detail-card-wide">


                        <span class="label">
                            Conceito
                        </span>


                        <h3>
                            Além da fragrância
                        </h3>


                        <p class="text mt-2">

                            O conceito Evador une fragrância,
                            identidade, conforto, estética e
                            presença pessoal para criar uma
                            experiência de cuidado mais completa.

                        </p>


                    </article>


                </div>

            </div>


        </div>


    </div>

</section>

`;

}


function fragranceCard(icon, title, text){

return `

<article class="card service-card evador-fragrance-card reveal">


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
   IDENTITY
   ========================================================== */

function identity(){

return `

<section class="section-sm evador-identity">

    <div class="container">


        <div class="split">


            <div class="split-image reveal-left">


                <div class="evador-benefit-image">


                    <div class="evador-image-glow"></div>


                    <img
                        src="./assets/products/evador.png"
                        alt="Evador"
                        loading="lazy"
                    >


                </div>


            </div>


            <div class="split-content reveal-right">


                <span class="label">
                    Identidade
                </span>


                <h2 class="section-title">

                    Beleza.
                    Presença.
                    Confiança.

                </h2>


                <p class="text mt-3">

                    Mais do que uma fragrância,
                    o Evador é apresentado como
                    uma extensão da identidade pessoal
                    de quem o utiliza.

                </p>


                <div class="icon-list mt-4">


                    ${check(
                        "Luxuoso"
                    )}


                    ${check(
                        "Refinado"
                    )}


                    ${check(
                        "Elegante"
                    )}


                    ${check(
                        "Confortável"
                    )}


                    ${check(
                        "Confiante"
                    )}


                    ${check(
                        "Único"
                    )}


                </div>


                <div class="evador-identity-quote mt-5">


                    <span class="label">
                        Evador
                    </span>


                    <blockquote>

                        “Além da fragrância.”

                    </blockquote>


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
   BENEFITS
   ========================================================== */

function benefits(){

return `

<section class="section evador-benefits">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                A Experiência
            </span>


            <h2 class="section-title">

                Uma presença que
                deixa impressão

            </h2>


            <p class="lead">

                A proposta Evador combina frescura,
                aroma duradouro, conforto e uma expressão
                pessoal diferenciada.

            </p>


        </div>


        <div class="bento mt-6">


            <div class="bento-card span-4 reveal">


                <div class="metric">

                    <div class="metric-number">
                        LUX
                    </div>


                    <div class="metric-label">
                        Luxuoso
                    </div>

                </div>


            </div>


            <div class="bento-card span-4 reveal delay-1">


                <div class="metric">

                    <div class="metric-number">
                        REF
                    </div>


                    <div class="metric-label">
                        Refinado
                    </div>

                </div>


            </div>


            <div class="bento-card span-4 reveal delay-2">


                <div class="metric">

                    <div class="metric-number">
                        UNI
                    </div>


                    <div class="metric-label">
                        Único
                    </div>

                </div>


            </div>


            <div class="bento-card span-12 reveal delay-3">


                <span class="label">
                    EVADOR
                </span>


                <h3>
                    A fragrância encontra a identidade
                </h3>


                <p class="text mt-2">

                    Segundo a apresentação comercial,
                    a fragrância pode assumir uma expressão
                    distinta em cada pessoa devido à sua
                    interacção com o aroma natural da pele.

                </p>


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
    id="evador-composition"
    class="section-sm evador-composition">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Conceito de Produto
            </span>


            <h2 class="section-title">

                Mais do que aroma

            </h2>


            <p class="lead">

                O conceito Evador é construído à volta
                de diferentes dimensões da experiência
                de perfumaria e cuidado pessoal.

            </p>


        </div>


        <div class="grid grid-3 mt-6">


            ${feature(
                "✦",
                "Fragrância",
                "Uma assinatura olfactiva concebida para acompanhar cada pessoa."
            )}


            ${feature(
                "◉",
                "Frescura",
                "O material promocional destaca uma sensação prolongada de frescura."
            )}


            ${feature(
                "◇",
                "Conforto",
                "Uma experiência pensada para acompanhar o utilizador no quotidiano."
            )}


            ${feature(
                "∞",
                "Identidade",
                "A fragrância é apresentada como parte da expressão pessoal."
            )}


            ${feature(
                "◆",
                "Elegância",
                "Uma abordagem refinada e sofisticada à perfumaria."
            )}


            ${feature(
                "★",
                "Confiança",
                "Uma presença olfactiva associada a segurança e personalidade."
            )}


        </div>


    </div>

</section>

`;

}


function feature(icon, title, text){

return `

<div class="card service-card evador-feature-card reveal">


    <div class="service-icon">
        ${icon}
    </div>


    <h3>
        ${title}
    </h3>


    <p class="text mt-2">
        ${text}
    </p>


</div>

`;

}


/* ==========================================================
   ROUTINE
   ========================================================== */

function routine(){

return `

<section class="section-sm evador-routine">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Ritual Evador
            </span>


            <h2 class="section-title">

                Transforme a fragrância
                numa assinatura

            </h2>


            <p class="lead">

                O perfume ganha significado quando
                se transforma numa parte consistente
                da identidade pessoal.

            </p>


        </div>


        <div class="timeline mt-6">


            ${step(
                "1",
                "Escolha",
                "Conheça a fragrância e descubra a experiência olfactiva do Evador."
            )}


            ${step(
                "2",
                "Aplique",
                "Utilize a fragrância de acordo com as orientações oficiais do produto."
            )}


            ${step(
                "3",
                "Personalize",
                "Permita que a fragrância se integre naturalmente na sua presença pessoal."
            )}


            ${step(
                "4",
                "Expresse",
                "Faça do perfume uma extensão da sua identidade, estilo e confiança."
            )}


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
   EXPERIENCE
   ========================================================== */

function experience(){

return `

<section class="section evador-experience">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Evador Lifestyle
            </span>


            <h2 class="section-title">

                Luxuoso.
                Refinado.
                Inconfundível.

            </h2>


            <p class="lead">

                Uma experiência concebida para quem
                procura mais do que uma fragrância:
                procura presença.

            </p>


        </div>


        <div class="grid grid-3 mt-6">


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


function experienceCard(icon, title, text){

return `

<article class="card service-card evador-experience-card reveal">


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
   FAQ
   ========================================================== */

function faq(){

return `

<section class="section-sm evador-faq">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Perguntas Frequentes
            </span>


            <h2 class="section-title">
                Tudo sobre o Evador
            </h2>


        </div>


        <div class="faq mt-5">


            ${question(
                "O que é o Evador?",
                "O Evador é uma fragrância apresentada pela BZZWORLD dentro de uma proposta de beleza, conforto, cuidado pessoal e identidade."
            )}


            ${question(
                "O que significa “Além da fragrância”?",
                "É o conceito utilizado para posicionar o Evador como uma experiência que vai além do aroma, valorizando identidade, frescura, conforto, elegância e presença pessoal."
            )}


            ${question(
                "A fragrância é igual em todas as pessoas?",
                "Segundo o material promocional fornecido, a fragrância mistura-se com o aroma natural de cada pessoa, podendo assumir uma expressão diferente em diferentes utilizadores."
            )}


            ${question(
                "O Evador tem aroma duradouro?",
                "A apresentação do produto destaca frescura e duração prolongadas do aroma."
            )}


            ${question(
                "O Evador é luxuoso?",
                "O posicionamento do produto é explicitamente premium, refinado e elegante, com foco numa experiência sofisticada."
            )}


            ${question(
                "Como devo utilizar o Evador?",
                "A utilização deve seguir as orientações oficiais disponibilizadas para a fragrância e a embalagem do produto."
            )}


            ${question(
                "O Evador substitui os cuidados pessoais?",
                "Não. Uma fragrância complementa o cuidado pessoal, mas não substitui higiene, cuidados da pele ou outros hábitos adequados."
            )}


            ${question(
                "O que torna o Evador diferente?",
                "A sua proposta de valor está centrada no conceito de identidade olfactiva individual, frescura, conforto e uma apresentação premium."
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

<section class="section evador-cta">

    <div class="container">


        <div class="showcase">


            <div class="showcase-content section-center">


                <span class="badge">
                    Evador
                </span>


                <h2 class="section-title mt-3">

                    Além da fragrância.
                    A sua assinatura.

                </h2>


                <p class="lead">

                    Descubra uma experiência luxuosa,
                    refinada e elegante, criada para
                    acompanhar a sua identidade.

                </p>


                <div class="hero-actions center mt-4">


                    <button
                        class="btn btn-primary"
                        id="evadorWhats"
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


                <p class="evador-cta-disclaimer mt-4">

                    Informação apresentada com base
                    no material disponibilizado para
                    o produto.

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

<div class="evador-detail-item">


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

function initialiseEvador(){


    try{

        stagger(".evador-fragrance-card");

        stagger(".evador-detail-card");

        stagger(".evador-feature-card");

        stagger(".evador-experience-card");

    }catch(error){

        console.warn(
            "Evador animations:",
            error
        );

    }


    try{

        document
            .querySelectorAll(
                ".page-evador .btn"
            )
            .forEach(button => {

                ripple(button);

            });

    }catch(error){

        console.warn(
            "Evador ripple:",
            error
        );

    }


    /*
     * Discover
     */

    document
        .getElementById("evadorDiscover")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("evador-fragrance")
                    ?.scrollIntoView({

                        behavior:"smooth",

                        block:"start"

                    });

            }
        );


    /*
     * Expandable sections
     */

    document
        .querySelectorAll(
            ".page-evador .evador-details-toggle"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".evador-information"
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
     * FAQ
     */

    document
        .querySelectorAll(
            ".page-evador .faq-question"
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
                            ".page-evador .faq-item"
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
        .getElementById("buyEvador")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * WhatsApp
     */

    document
        .getElementById("evadorWhats")
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
        "Olá AD Lifestyle! Tenho interesse no Evador e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
