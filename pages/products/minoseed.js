/* ==========================================================
   AD LIFESTYLE V2
   MINOSEED.JS
   Premium MinoSeed Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD PAGE
   ========================================================== */

export function loadMinoseed(){

    applyTheme("minoseed");

    const app = document.getElementById("app");

    if(!app) return;


    app.innerHTML = `

        <div
            class="page-minoseed"
            data-product-page="minoseed">

            ${hero()}

            ${care()}

            ${benefits()}

            ${ingredients()}

            ${routine()}

            ${experience()}

            ${faq()}

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

    <div class="aurora">

        <div class="blob blob-1"></div>

        <div class="blob blob-2"></div>

        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">


        <div class="hero-content reveal">


            <span class="badge">
                MinoSeed · Beauty & Care
            </span>


            <h1 class="hero-title">

                Mino
                <span>Seed</span>

            </h1>


            <p class="hero-sub">

                Um sabonete de inspiração botânica,
                apresentado para uma rotina de limpeza,
                cuidado e bem-estar da pele, com destaque
                para raízes de ginseng e outros ingredientes
                de origem vegetal.

            </p>


            <div class="hero-actions">


                <button
                    class="btn btn-primary"
                    id="buyMinoseed"
                    type="button">

                    Comprar Agora

                </button>


                <button
                    class="btn btn-glass"
                    id="minoseedComposition"
                    type="button">

                    Ver Composição

                </button>


            </div>


            <div class="minoseed-hero-highlights">


                <span>
                    ✓ Ginseng
                </span>


                <span>
                    ✓ Óleo de Coco
                </span>


                <span>
                    ✓ Tea Tree
                </span>


                <span>
                    ✓ Sophora flavescens
                </span>


            </div>


            <p class="minoseed-disclaimer">

                As informações desta página baseiam-se no
                material promocional fornecido para o produto.
                Não constituem diagnóstico ou aconselhamento médico.

            </p>


        </div>


        <div class="hero-visual reveal-right">


            <div class="hero-product floating">


                <div class="product-glow"></div>


                <div class="minoseed-gold-ring"></div>


                <img
                    class="parallax"
                    data-speed="40"
                    src="./assets/products/minoseed.png"
                    alt="MinoSeed"
                    loading="eager"
                >


            </div>


        </div>


    </div>

</section>

`;

}


/* ==========================================================
   CARE
   ========================================================== */

function care(){

return `

<section
    id="minoseed-care"
    class="section minoseed-care">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Beauty & Care
            </span>


            <h2 class="section-title">

                Limpeza profunda.
                Nutrição.
                Cuidado.

            </h2>


            <p class="lead">

                A apresentação do MinoSeed destaca
                uma proposta de limpeza profunda dos poros,
                cuidado da pele e utilização de ingredientes
                de origem vegetal.

            </p>


        </div>


        <div class="grid grid-4 mt-6">


            ${careCard(
                "✦",
                "Limpeza Profunda",
                "O material promocional destaca a limpeza de poros, excesso de oleosidade e resíduos de sujidade."
            )}


            ${careCard(
                "🌿",
                "Origem Vegetal",
                "O produto é apresentado como um sabão natural à base de plantas."
            )}


            ${careCard(
                "💧",
                "Cuidado da Pele",
                "A comunicação destaca uma proposta suave, hidratante e respeitadora da pele."
            )}


            ${careCard(
                "🌱",
                "Ginseng",
                "As raízes de ginseng ocupam uma posição central na identidade e apresentação do produto."
            )}


        </div>


        <div class="minoseed-information mt-6">


            <button
                class="minoseed-details-toggle"
                type="button"
                aria-expanded="false">


                <span>
                    Ver detalhes do cuidado
                </span>


                <span class="minoseed-details-icon">
                    +
                </span>


            </button>


            <div class="minoseed-details-content">


                <div class="minoseed-details-grid">


                    <article class="minoseed-detail-card">


                        <span class="label">
                            01 — Limpeza
                        </span>


                        <h3>
                            Limpeza dos poros
                        </h3>


                        <p class="text mt-2">

                            A apresentação fornecida descreve
                            uma espuma molecular mais pequena
                            associada a uma penetração mais fácil
                            nos poros e à remoção de resíduos.

                        </p>


                        <div class="minoseed-detail-list mt-3">

                            ${detailItem(
                                "Limpeza profunda"
                            )}

                            ${detailItem(
                                "Remoção de sujidade"
                            )}

                            ${detailItem(
                                "Redução do excesso de oleosidade"
                            )}

                        </div>


                    </article>


                    <article class="minoseed-detail-card">


                        <span class="label">
                            02 — Ginseng
                        </span>


                        <h3>
                            Raiz de ginseng
                        </h3>


                        <p class="text mt-2">

                            O material do produto destaca
                            as raízes de ginseng como um dos
                            elementos centrais da proposta MinoSeed.

                        </p>


                        <div class="minoseed-detail-list mt-3">

                            ${detailItem(
                                "Ingrediente de origem vegetal"
                            )}

                            ${detailItem(
                                "Elemento central da fórmula apresentada"
                            )}

                            ${detailItem(
                                "Associado ao cuidado da pele"
                            )}

                        </div>


                    </article>


                    <article class="minoseed-detail-card">


                        <span class="label">
                            03 — Conforto
                        </span>


                        <h3>
                            Suavidade e hidratação
                        </h3>


                        <p class="text mt-2">

                            A apresentação comercial descreve
                            o MinoSeed como suave, hidratante
                            e respeitador da pele.

                        </p>


                        <div class="minoseed-detail-list mt-3">

                            ${detailItem(
                                "Cuidado diário"
                            )}

                            ${detailItem(
                                "Sensação de suavidade"
                            )}

                            ${detailItem(
                                "Proposta de conforto cutâneo"
                            )}

                        </div>


                    </article>


                    <article class="minoseed-detail-card">


                        <span class="label">
                            04 — Pureza
                        </span>


                        <h3>
                            Cuidado natural
                        </h3>


                        <p class="text mt-2">

                            O material apresenta o produto
                            dentro de uma abordagem de cuidado
                            pessoal baseada em ingredientes
                            de origem vegetal.

                        </p>


                        <div class="minoseed-detail-list mt-3">

                            ${detailItem(
                                "Base vegetal"
                            )}

                            ${detailItem(
                                "Foco no cuidado da pele"
                            )}

                            ${detailItem(
                                "Identidade Beauty & Wellness"
                            )}

                        </div>


                    </article>


                    <article
                        class="minoseed-detail-card
                               minoseed-detail-card-wide">


                        <span class="label">
                            Informação importante
                        </span>


                        <h3>
                            Comunicação responsável
                        </h3>


                        <p class="text mt-2">

                            Algumas peças promocionais associam
                            ingredientes do MinoSeed a propriedades
                            antibacterianas, anti-inflamatórias,
                            antioxidantes ou de rejuvenescimento.

                        </p>


                        <p class="text mt-2">

                            Essas descrições devem ser entendidas
                            como informação do material promocional
                            e não como garantia de tratamento,
                            prevenção ou cura de condições médicas.

                        </p>


                    </article>


                </div>

            </div>


        </div>


    </div>

</section>

`;

}


function careCard(icon, title, text){

return `

<article class="card service-card minoseed-care-card reveal">


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

<section class="section-sm minoseed-benefits">

    <div class="container">


        <div class="split">


            <div class="split-image reveal-left">


                <div class="minoseed-benefit-image">


                    <div class="minoseed-image-glow"></div>


                    <img
                        src="./assets/products/minoseed.png"
                        alt="MinoSeed"
                        loading="lazy"
                    >


                </div>


            </div>


            <div class="split-content reveal-right">


                <span class="label">
                    Características
                </span>


                <h2 class="section-title">

                    Limpeza.
                    Nutrição.
                    Revitalização.

                </h2>


                <p class="text mt-3">

                    O MinoSeed é apresentado como um
                    produto de cuidado pessoal destinado
                    a acompanhar uma rotina de higiene
                    e cuidado da pele.

                </p>


                <div class="icon-list mt-4">


                    ${check(
                        "Ajuda a limpar profundamente a pele"
                    )}


                    ${check(
                        "Cuidado orientado para o excesso de oleosidade"
                    )}


                    ${check(
                        "Proposta de limpeza dos poros"
                    )}


                    ${check(
                        "Sensação de suavidade e conforto"
                    )}


                    ${check(
                        "Ingredientes de origem vegetal"
                    )}


                    ${check(
                        "Integração numa rotina de cuidado pessoal"
                    )}


                </div>


                <div class="minoseed-information mt-5">


                    <button
                        class="minoseed-details-toggle"
                        type="button"
                        aria-expanded="false">


                        <span>
                            Ver informações funcionais
                        </span>


                        <span class="minoseed-details-icon">
                            +
                        </span>


                    </button>


                    <div class="minoseed-details-content">


                        <div class="minoseed-details-grid">


                            <article class="minoseed-detail-card">


                                <span class="label">
                                    Limpeza
                                </span>


                                <h3>
                                    Pele limpa
                                </h3>


                                <p class="text mt-2">

                                    A apresentação destaca
                                    a remoção de resíduos,
                                    oleosidade e sujidade
                                    dos poros.

                                </p>


                            </article>


                            <article class="minoseed-detail-card">


                                <span class="label">
                                    Ginseng
                                </span>


                                <h3>
                                    Ingrediente central
                                </h3>


                                <p class="text mt-2">

                                    O material apresenta as
                                    raízes de ginseng como
                                    elemento importante
                                    na identidade do produto.

                                </p>


                            </article>


                            <article
                                class="minoseed-detail-card
                                       minoseed-detail-card-wide">


                                <span class="label">
                                    Pele
                                </span>


                                <h3>
                                    Adequação e tolerância
                                </h3>


                                <p class="text mt-2">

                                    O material promocional descreve
                                    o produto como adequado para
                                    vários tipos de pele e afirma
                                    que não irrita os olhos.
                                    A tolerância individual pode variar.

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
   INGREDIENTS
   ========================================================== */

function ingredients(){

return `

<section
    id="minoseed-composition"
    class="section minoseed-ingredients">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Componentes
            </span>


            <h2 class="section-title">

                A composição do MinoSeed

            </h2>


            <p class="lead">

                A apresentação do produto destaca
                quatro componentes de origem vegetal,
                associados à identidade Beauty & Care
                do MinoSeed.

            </p>


        </div>


        <div class="bento mt-6">


            <div class="bento-card span-7 reveal">


                <span class="label">
                    01
                </span>


                <h3>
                    Óleo de Coco
                </h3>


                <p class="text mt-2">

                    Ingrediente vegetal apresentado
                    como parte da proposta suave
                    e hidratante do produto.

                </p>


                <div class="minoseed-bento-symbol">
                    C
                </div>


            </div>


            <div class="bento-card span-5 reveal delay-1">


                <span class="label">
                    02
                </span>


                <h3>
                    Óleo da Árvore do Chá
                </h3>


                <p class="text mt-2">

                    Componente vegetal destacado
                    entre os ingredientes do MinoSeed.

                </p>


                <div class="minoseed-bento-symbol">
                    T
                </div>


            </div>


            <div class="bento-card span-5 reveal delay-2">


                <span class="label">
                    03
                </span>


                <h3>
                    Ginseng
                </h3>


                <p class="text mt-2">

                    Um dos principais ingredientes
                    destacados na identidade do produto.

                </p>


                <div class="minoseed-bento-symbol">
                    G
                </div>


            </div>


            <div class="bento-card span-7 reveal delay-3">


                <span class="label">
                    04
                </span>


                <h3>
                    Sophora flavescens
                </h3>


                <p class="text mt-2">

                    Componente vegetal incluído na
                    lista de componentes apresentada
                    no material promocional.

                </p>


                <div class="minoseed-bento-symbol">
                    S
                </div>


            </div>


            <div class="bento-card span-12 reveal delay-4">


                <span class="label">
                    MINO SEED CARE SOLUTION
                </span>


                <h3>
                    Suave · Hidratante · Respeitador da Pele
                </h3>


                <p class="text mt-2">

                    A identidade do produto combina
                    ingredientes de origem vegetal com
                    uma proposta de limpeza, cuidado
                    e conforto para a pele.

                </p>


            </div>


        </div>

    </div>

</section>

`;

}


/* ==========================================================
   ROUTINE
   ========================================================== */

function routine(){

return `

<section class="section-sm minoseed-routine">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Rotina de Cuidado
            </span>


            <h2 class="section-title">

                Cuide da sua pele
                todos os dias

            </h2>


            <p class="lead">

                Uma rotina de cuidado começa com limpeza,
                consistência e atenção às necessidades
                individuais da pele.

            </p>


        </div>


        <div class="timeline mt-6">


            ${step(
                "1",
                "Molhe",
                "Humedeça a pele e prepare-a para a limpeza."
            )}


            ${step(
                "2",
                "Aplique",
                "Utilize o MinoSeed de acordo com as indicações oficiais do produto."
            )}


            ${step(
                "3",
                "Limpe",
                "Faça uma limpeza suave, especialmente nas zonas onde existe maior acumulação de oleosidade e sujidade."
            )}


            ${step(
                "4",
                "Enxague",
                "Remova cuidadosamente o produto e finalize a sua rotina de higiene."
            )}


        </div>


        <div class="minoseed-routine-note mt-5">


            <span class="label">
                Nota importante
            </span>


            <p class="text mt-2">

                A utilização deve seguir as orientações
                oficiais da embalagem. Evite utilizar o produto
                em pele lesionada e interrompa a utilização caso
                surja irritação persistente ou desconforto.

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
   EXPERIENCE
   ========================================================== */

function experience(){

return `

<section class="section minoseed-experience">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Beauty Lifestyle
            </span>


            <h2 class="section-title">

                Uma experiência de
                cuidado mais consciente

            </h2>


            <p class="lead">

                O conceito MinoSeed combina limpeza,
                ingredientes de origem vegetal e uma
                abordagem de cuidado pessoal orientada
                para conforto e bem-estar.

            </p>


        </div>


        <div class="grid grid-3 mt-6">


            ${feature(
                "🌿",
                "Naturalidade",
                "Ingredientes de origem vegetal ocupam um papel central na apresentação do produto."
            )}


            ${feature(
                "🫧",
                "Limpeza",
                "Uma proposta de limpeza profunda da pele e dos poros."
            )}


            ${feature(
                "💧",
                "Hidratação",
                "O material promocional caracteriza o produto como suave e hidratante."
            )}


            ${feature(
                "🌱",
                "Ginseng",
                "As raízes de ginseng são um dos elementos de destaque da identidade MinoSeed."
            )}


            ${feature(
                "✨",
                "Revitalização",
                "A apresentação utiliza uma linguagem associada a revitalização e aparência cuidada."
            )}


            ${feature(
                "💎",
                "Beauty Care",
                "Uma proposta premium integrada na categoria de cuidado pessoal."
            )}


        </div>


    </div>

</section>

`;

}


function feature(icon, title, text){

return `

<div class="card service-card minoseed-feature-card reveal">


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
   FAQ
   ========================================================== */

function faq(){

return `

<section class="section-sm minoseed-faq">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Perguntas Frequentes
            </span>


            <h2 class="section-title">
                Tudo sobre o MinoSeed
            </h2>


        </div>


        <div class="faq mt-5">


            ${question(
                "O que é o MinoSeed?",
                "O MinoSeed é apresentado como um sabonete de cuidado da pele da linha Smart Lab Beauty, com destaque para raízes de ginseng e outros ingredientes de origem vegetal."
            )}


            ${question(
                "Quais são os componentes destacados?",
                "O material fornecido destaca óleo de coco, óleo da árvore do chá, ginseng e Sophora flavescens."
            )}


            ${question(
                "O MinoSeed ajuda na limpeza dos poros?",
                "A apresentação promocional destaca limpeza profunda dos poros, remoção de sujidade e excesso de oleosidade."
            )}


            ${question(
                "O MinoSeed é adequado para todos os tipos de pele?",
                "O material promocional apresenta o produto como adequado para todos os tipos de pele. A tolerância pode variar de pessoa para pessoa."
            )}


            ${question(
                "O MinoSeed é hidratante?",
                "O material fornecido descreve o produto como suave e hidratante, orientado para o cuidado da pele."
            )}


            ${question(
                "O produto irrita os olhos?",
                "O material promocional afirma que o produto não irrita os olhos. Ainda assim, deve-se evitar o contacto directo com os olhos durante a utilização."
            )}


            ${question(
                "O MinoSeed pode ser utilizado por bebés?",
                "Essa indicação aparece no material promocional fornecido. Para bebés e crianças pequenas, recomenda-se confirmar a adequação e as instruções do produto junto de um profissional de saúde."
            )}


            ${question(
                "O MinoSeed trata acne ou outras condições da pele?",
                "O material promocional associa o produto a acne, oleosidade, irritação, comichão e odores corporais. Essas associações não devem ser interpretadas como garantia de tratamento ou cura."
            )}


            ${question(
                "Como devo utilizar o MinoSeed?",
                "A utilização deve seguir as instruções oficiais da embalagem e a tolerância individual da pele."
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

<section class="section minoseed-cta">

    <div class="container">


        <div class="showcase">


            <div class="showcase-content section-center">


                <span class="badge">
                    MinoSeed Care Solution
                </span>


                <h2 class="section-title mt-3">

                    Dê à sua pele
                    um cuidado especial

                </h2>


                <p class="lead">

                    Descubra uma proposta de cuidado
                    que combina limpeza, ingredientes
                    de origem vegetal e a identidade
                    premium do MinoSeed.

                </p>


                <div class="hero-actions center mt-4">


                    <button
                        class="btn btn-primary"
                        id="minoseedWhats"
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


                <p class="minoseed-cta-disclaimer mt-4">

                    Informação apresentada para fins informativos.
                    Não constitui diagnóstico, aconselhamento
                    médico ou garantia de resultados.

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

<div class="minoseed-detail-item">


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

function initialiseMinoseed(){


    try{

        stagger(".minoseed-care-card");

        stagger(".minoseed-detail-card");

        stagger(".minoseed-feature-card");

    }catch(error){

        console.warn(
            "MinoSeed animations:",
            error
        );

    }


    try{

        document
            .querySelectorAll(".page-minoseed .btn")
            .forEach(button => {

                ripple(button);

            });

    }catch(error){

        console.warn(
            "MinoSeed ripple:",
            error
        );

    }


    /*
     * Composition button
     */

    document
        .getElementById("minoseedComposition")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("minoseed-composition")
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
            ".page-minoseed .minoseed-details-toggle"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".minoseed-information"
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
            ".page-minoseed .faq-question"
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
                            ".page-minoseed .faq-item"
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
        .getElementById("buyMinoseed")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * WhatsApp
     */

    document
        .getElementById("minoseedWhats")
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
        "Olá AD Lifestyle! Tenho interesse no MinoSeed e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
