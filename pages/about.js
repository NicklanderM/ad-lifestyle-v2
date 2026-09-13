/* ==========================================================
   AD LIFESTYLE V2
   ABOUT.JS
   Premium Institutional Brand Experience
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple, stagger } from "../js/animations.js";

/* ==========================================================
   LOAD
   ========================================================== */

export function loadAbout(){

    applyTheme("default");

    const app =
        document.getElementById("app");

    if(!app){

        console.error(
            "AD Lifestyle About: elemento #app não encontrado."
        );

        return;

    }

    app.innerHTML = `

        <div class="about-page">

            ${hero()}

            ${manifesto()}

            ${whoWeAre()}

            ${ecosystem()}

            ${leadership()}

            ${visionMissionValues()}

            ${journey()}

            ${principles()}

            ${future()}

            ${cta()}

        </div>

    `;

    initialiseAbout();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero about-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>


    <div class="about-hero-grid container">

        <div class="about-hero-copy reveal">

            <span class="label">
                AD Lifestyle · Our Story
            </span>


            <span class="about-eyebrow">
                PEOPLE · WELLNESS · KNOWLEDGE · OPPORTUNITY
            </span>


            <h1 class="hero-title">

                Uma visão
                <span>transformada em movimento.</span>

            </h1>


            <p class="hero-sub">

                A AD Lifestyle nasceu para criar pontes entre
                pessoas, soluções de bem-estar, conhecimento,
                desenvolvimento pessoal e novas possibilidades
                de evolução.

            </p>


            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    data-action="story">

                    Descobrir a nossa história

                </button>


                <button
                    class="btn btn-glass"
                    data-action="contact">

                    Falar connosco

                </button>

            </div>


            <div class="about-hero-signature">

                <span>
                    AD LIFESTYLE
                </span>

                <div></div>

                <small>
                    Creating Bridges
                </small>

            </div>

        </div>


        <div class="about-hero-visual reveal-right">

            <div class="about-hero-stage">

                <div class="about-stage-grid"></div>


                <div class="about-orbit orbit-1"></div>

                <div class="about-orbit orbit-2"></div>

                <div class="about-orbit orbit-3"></div>


                <div class="about-brand-disc">

                    <span class="about-brand-mark">
                        AD
                    </span>

                    <strong>
                        LIFESTYLE
                    </strong>

                    <small>
                        CREATING BRIDGES
                    </small>

                </div>


                <div class="about-floating-node node-wellness">

                    <span></span>

                    WELLNESS

                </div>


                <div class="about-floating-node node-academy">

                    <span></span>

                    ACADEMY 21

                </div>


                <div class="about-floating-node node-events">

                    <span></span>

                    EVENTS

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   MANIFESTO
   ========================================================== */

function manifesto(){

return `

<section class="section about-manifesto">

    <div class="container">

        <div class="about-manifesto-inner reveal">

            <span class="label">
                Manifesto
            </span>


            <h2>

                Não queremos apenas
                <strong>vender.</strong>

                <br>

                Queremos
                <strong>conectar.</strong>

            </h2>


            <p>

                Conectar pessoas a soluções.
                Pessoas a conhecimento.
                Pessoas a comunidades.
                E pessoas a possibilidades
                que talvez ainda não conheçam.

            </p>


            <div class="about-manifesto-line"></div>


            <span class="about-manifesto-signature">
                AD LIFESTYLE
            </span>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   WHO WE ARE
   ========================================================== */

function whoWeAre(){

return `

<section
    id="story"
    class="section about-who">

    <div class="container">

        <div class="split about-introduction">

            <div class="split-content reveal-left">

                <span class="label">
                    Quem Somos
                </span>


                <h2 class="section-title">

                    Uma organização
                    criada para
                    <span>criar pontes.</span>

                </h2>


                <p class="text mt-3">

                    A AD Lifestyle é uma organização orientada
                    para aproximar pessoas de soluções de
                    bem-estar, conhecimento, desenvolvimento
                    pessoal e novas possibilidades de evolução.

                </p>


                <p class="text mt-3">

                    A nossa actividade integra dois grandes
                    universos complementares: a componente
                    de Wellness, através dos produtos e soluções
                    BZZWORLD, e a componente de Evolution,
                    desenvolvida em ligação com a Academy Twenty One.

                </p>


                <p class="text mt-3">

                    Mais do que apresentar produtos ou informação,
                    queremos construir relações, experiências,
                    conhecimento e uma estrutura preparada
                    para crescer.

                </p>


                <div class="about-keywords">

                    <span>
                        Wellness
                    </span>

                    <span>
                        Technology
                    </span>

                    <span>
                        Development
                    </span>

                    <span>
                        Opportunity
                    </span>

                </div>

            </div>


            <div class="split-image reveal-right">

                <div class="about-visual-card">

                    <div class="about-visual-number">
                        01
                    </div>


                    <div class="about-visual-center">

                        <span>
                            AD
                        </span>

                        <strong>
                            LIFESTYLE
                        </strong>

                        <small>
                            PEOPLE · IDEAS · FUTURE
                        </small>

                    </div>


                    <div class="about-visual-line line-a"></div>

                    <div class="about-visual-line line-b"></div>

                    <div class="about-visual-line line-c"></div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   ECOSYSTEM
   ========================================================== */

function ecosystem(){

return `

<section class="section about-ecosystem">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                O nosso ecossistema
            </span>


            <h2 class="section-title">

                Dois universos.
                <span>Uma direcção.</span>

            </h2>


            <p class="lead">

                A força da AD Lifestyle está na combinação
                entre bem-estar e evolução.

            </p>

        </div>


        <div class="about-ecosystem-grid mt-6">


            <article
                class="about-ecosystem-card ecosystem-wellness reveal">

                <div class="ecosystem-index">
                    01
                </div>


                <div class="ecosystem-icon">
                    ◌
                </div>


                <span>
                    BZZWORLD
                </span>


                <h3>
                    Wellness
                </h3>


                <p>
                    Produtos, experiências e soluções associadas
                    ao universo de saúde, bem-estar e Lifestyle.
                </p>


                <div class="ecosystem-tags">

                    <span>
                        Produtos
                    </span>

                    <span>
                        Wellness
                    </span>

                    <span>
                        Lifestyle
                    </span>

                </div>

            </article>


            <div class="about-ecosystem-connector reveal">

                <span>
                    +
                </span>

                <div></div>

            </div>


            <article
                class="about-ecosystem-card ecosystem-academy reveal">

                <div class="ecosystem-index">
                    02
                </div>


                <div class="ecosystem-icon">
                    21
                </div>


                <span>
                    ACADEMY TWENTY ONE
                </span>


                <h3>
                    Evolution
                </h3>


                <p>
                    Educação, liderança, comunicação,
                    desenvolvimento pessoal e empreendedorismo.
                </p>


                <div class="ecosystem-tags">

                    <span>
                        Educação
                    </span>

                    <span>
                        Liderança
                    </span>

                    <span>
                        Networking
                    </span>

                </div>

            </article>

        </div>


        <div class="about-ecosystem-statement reveal">

            <strong>
                AD Lifestyle
            </strong>


            <span>
                O ponto onde Wellness encontra Evolution.
            </span>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   LEADERSHIP
   ========================================================== */

function leadership(){

return `

<section class="section about-leadership">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Liderança
            </span>


            <h2 class="section-title">

                Uma visão precisa
                <span>de alguém que a lidere.</span>

            </h2>

        </div>


        <div class="about-leader-layout mt-6">


            <div class="about-leader-profile reveal-left">

                <div class="about-leader-photo">

                    <img
                        src="assets/images/abdoulahi.png"
                        alt="Abdoulahi Doucoure">

                </div>


                <div class="about-leader-card">

                    <span>
                        CEO & FOUNDER
                    </span>


                    <h3>
                        Abdoulahi Doucoure
                    </h3>


                    <small>
                        AD Lifestyle
                    </small>

                </div>

            </div>


            <div class="about-leader-content reveal-right">

                <span class="label">
                    Founder
                </span>


                <h2 class="section-title">

                    Liderar é transformar
                    <span>uma ideia em movimento.</span>

                </h2>


                <p class="text-lg">

                    Abdoulahi Doucoure está ligado à construção
                    da visão estratégica da AD Lifestyle e ao
                    desenvolvimento da organização como uma
                    estrutura orientada para crescimento,
                    relacionamento e criação de oportunidades.

                </p>


                <p class="text mt-3">

                    A liderança assenta numa perspectiva de
                    aprendizagem contínua, valorização das pessoas,
                    profissionalismo e construção de uma visão
                    preparada para o futuro.

                </p>


                <div class="about-leader-principles">

                    ${leaderPoint(
                        "01",
                        "Visão",
                        "Pensar para além do presente."
                    )}


                    ${leaderPoint(
                        "02",
                        "Pessoas",
                        "Colocar desenvolvimento humano no centro."
                    )}


                    ${leaderPoint(
                        "03",
                        "Consistência",
                        "Construir com disciplina e continuidade."
                    )}


                    ${leaderPoint(
                        "04",
                        "Futuro",
                        "Preparar hoje a organização de amanhã."
                    )}

                </div>

            </div>

        </div>

    </div>

</section>

`;

}


function leaderPoint(
    number,
    title,
    text
){

return `

<div class="about-leader-point">

    <span>
        ${number}
    </span>

    <div>

        <strong>
            ${title}
        </strong>

        <p>
            ${text}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   VISION / MISSION / VALUES
   ========================================================== */

function visionMissionValues(){

return `

<section class="section about-principles">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                O que nos orienta
            </span>


            <h2 class="section-title">

                Visão.
                Missão.
                <span>Valores.</span>

            </h2>

        </div>


        <div class="about-principles-grid mt-6">


            ${principle(
                "01",
                "Visão",
                "Futuro",
                "Construir uma referência em bem-estar, desenvolvimento humano, educação empreendedora e criação de novas possibilidades."
            )}


            ${principle(
                "02",
                "Missão",
                "Acção",
                "Criar pontes entre pessoas, soluções, conhecimento e comunidades através de uma experiência profissional e sustentável."
            )}


            ${principle(
                "03",
                "Valores",
                "Princípios",
                "Integridade, respeito, disciplina, responsabilidade, aprendizagem contínua, colaboração, liderança, inovação e excelência."
            )}

        </div>

    </div>

</section>

`;

}


function principle(
    number,
    title,
    subtitle,
    text
){

return `

<article class="about-principle-card reveal">

    <div class="about-principle-top">

        <span>
            ${number}
        </span>

        <small>
            ${subtitle}
        </small>

    </div>


    <h3>
        ${title}
    </h3>


    <p>
        ${text}
    </p>


    <div class="about-principle-line"></div>

</article>

`;

}

/* ==========================================================
   JOURNEY
   ========================================================== */

function journey(){

return `

<section
    id="journey"
    class="section about-journey">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                A nossa jornada
            </span>


            <h2 class="section-title">

                Não estamos apenas
                a começar.
                <span>Estamos a construir.</span>

            </h2>


            <p class="lead">

                Cada etapa representa uma decisão,
                uma aprendizagem e uma nova responsabilidade.

            </p>

        </div>


        <div class="about-journey-track mt-6">

            <div class="about-journey-line"></div>


            ${journeyItem(
                "01",
                "Fundação",
                "Definição da identidade, propósito e direcção da AD Lifestyle."
            )}


            ${journeyItem(
                "02",
                "Estrutura",
                "Construção da presença digital, comunicação e organização."
            )}


            ${journeyItem(
                "03",
                "Ecossistema",
                "Integração dos universos BZZWORLD e Academy Twenty One."
            )}


            ${journeyItem(
                "04",
                "Experiência",
                "Desenvolvimento de produtos, campanhas, eventos e relacionamento."
            )}


            ${journeyItem(
                "05",
                "Expansão",
                "Preparação para uma presença mais ampla e novas possibilidades."
            )}

        </div>

    </div>

</section>

`;

}


function journeyItem(
    number,
    title,
    text
){

return `

<div class="about-journey-item reveal">

    <div class="about-journey-marker">
        ${number}
    </div>


    <div class="about-journey-content">

        <span>
            ETAPA ${number}
        </span>


        <h3>
            ${title}
        </h3>


        <p>
            ${text}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   PRINCIPLES
   ========================================================== */

function principles(){

return `

<section class="section-sm about-foundation">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                A nossa fundação
            </span>


            <h2 class="section-title">

                O que nunca
                <span>queremos perder.</span>

            </h2>

        </div>


        <div class="grid grid-4 mt-6">


            ${foundation(
                "01",
                "Integridade",
                "Construímos relações baseadas em confiança, clareza e responsabilidade."
            )}


            ${foundation(
                "02",
                "Aprendizagem",
                "Continuamos a aprender porque o futuro exige preparação."
            )}


            ${foundation(
                "03",
                "Excelência",
                "Cada detalhe importa quando queremos criar uma referência."
            )}


            ${foundation(
                "04",
                "Pessoas",
                "Nenhuma visão é maior do que as pessoas que a fazem avançar."
            )}

        </div>

    </div>

</section>

`;

}


function foundation(
    number,
    title,
    text
){

return `

<article class="about-foundation-card reveal">

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
   FUTURE
   ========================================================== */

function future(){

return `

<section class="section about-future">

    <div class="container">

        <div class="about-future-panel">

            <div class="about-future-grid"></div>


            <div class="about-future-copy reveal">

                <span class="label">
                    O próximo capítulo
                </span>


                <h2>

                    Hoje construímos
                    <strong>
                        a organização
                    </strong>

                    que queremos ver
                    <strong>
                        amanhã.
                    </strong>

                </h2>


                <p>

                    A nossa ambição é consolidar a AD Lifestyle
                    como uma referência em Angola, criar uma
                    experiência digital cada vez mais forte,
                    desenvolver a comunidade e preparar a
                    organização para novas oportunidades.

                </p>


                <div class="about-future-tags">

                    <span>
                        Angola
                    </span>

                    <span>
                        Internacional
                    </span>

                    <span>
                        Wellness
                    </span>

                    <span>
                        Academy
                    </span>

                    <span>
                        Innovation
                    </span>

                </div>

            </div>


            <div class="about-future-visual reveal-right">

                <div class="future-circle">

                    <span>
                        AD
                    </span>


                    <small>
                        2026 →
                    </small>

                </div>

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

<section class="section about-final">

    <div class="container">

        <div class="about-final-panel">

            <div class="about-final-orbit"></div>


            <div class="about-final-content reveal">

                <span>
                    AD LIFESTYLE
                </span>


                <h2>

                    A visão está lançada.
                    <strong>
                        Agora começa o movimento.
                    </strong>

                </h2>


                <p>

                    Conheça os nossos produtos,
                    acompanhe os nossos eventos,
                    descubra o nosso ecossistema
                    e faça parte da próxima etapa.

                </p>


                <div class="hero-actions center">

                    <button
                        class="btn btn-primary"
                        data-action="products">

                        Explorar Produtos

                    </button>


                    <button
                        class="btn btn-glass"
                        data-action="contact">

                        Falar Connosco

                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseAbout(){

    const root =
        document.querySelector(
            ".about-page"
        );


    if(!root) return;


    stagger(
        ".about-page .about-ecosystem-card"
    );


    stagger(
        ".about-page .about-foundation-card"
    );


    root
        .querySelectorAll(".btn")
        .forEach(button=>{

            ripple(button);

        });


    /* ------------------------------------------------------
       STORY
       ------------------------------------------------------ */

    root
        .querySelector(
            '[data-action="story"]'
        )
        ?.addEventListener(
            "click",
            ()=>{

                root
                    .querySelector(
                        "#story"
                    )
                    ?.scrollIntoView({

                        behavior:"smooth",

                        block:"start"

                    });

            }
        );


    /* ------------------------------------------------------
       JOURNEY
       ------------------------------------------------------ */

    root
        .querySelector(
            '[data-action="journey"]'
        )
        ?.addEventListener(
            "click",
            ()=>{

                root
                    .querySelector(
                        "#journey"
                    )
                    ?.scrollIntoView({

                        behavior:"smooth",

                        block:"start"

                    });

            }
        );


    /* ------------------------------------------------------
       CONTACT
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            '[data-action="contact"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const message =
                        "Olá AD Lifestyle! Gostaria de conhecer melhor a organização e os seus projectos.";


                    window.open(

                        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,

                        "_blank",

                        "noopener,noreferrer"

                    );

                }
            );

        });


    /* ------------------------------------------------------
       PRODUCTS
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            '[data-action="products"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    navigate(
                        "/products"
                    );

                }
            );

        });


    /* ------------------------------------------------------
       REVEAL
       ------------------------------------------------------ */

    initialiseReveal();

}


/* ==========================================================
   REVEAL
   ========================================================== */

function initialiseReveal(){

    const elements =
        document.querySelectorAll(
            ".about-page .reveal"
        );


    if(
        typeof IntersectionObserver ===
        "undefined"
    ){

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(

            entries=>{

                entries.forEach(
                    entry=>{

                        if(
                            entry.isIntersecting
                        ){

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold:.10
            }

        );


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}
