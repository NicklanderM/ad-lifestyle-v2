/* ==========================================================
   AD LIFESTYLE V2
   ALPHASPIN-ULTRA.JS
   Premium AlphaSpin Ultra Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD PAGE
   ========================================================== */

export function loadAlphaSpinUltra(){

    applyTheme("alphaspin-ultra");

    const app = document.getElementById("app");

    if(!app) return;


    app.innerHTML = `

        <div
            class="page-alphaspin-ultra"
            data-product-page="alphaspin-ultra">

            ${hero()}

            ${technology()}

            ${benefits()}

            ${experience()}

            ${frequency()}

            ${routine()}

            ${certifications()}

            ${faq()}

            ${cta()}

        </div>

    `;


    initialiseAlphaSpinUltra();

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero alphaspin-ultra-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>

        <div class="blob blob-2"></div>

        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">


        <div class="hero-content reveal">


            <span class="badge">
                AlphaSpin Ultra · Smart Living
            </span>


            <h1 class="hero-title">

                AlphaSpin
                <span>Ultra</span>

            </h1>


            <p class="hero-sub">

                Uma proposta de tecnologia energética e
                harmonização apresentada para integrar
                o quotidiano, o bem-estar e uma visão
                futurista de Smart Living.

            </p>


            <div class="hero-actions">


                <button
                    class="btn btn-primary"
                    id="buyAlphaSpinUltra"
                    type="button">

                    Comprar Agora

                </button>


                <button
                    class="btn btn-glass"
                    id="alphaSpinTechnology"
                    type="button">

                    Descobrir Tecnologia

                </button>


            </div>


            <div class="alphaspin-hero-highlights">

                <span>
                    ✓ Smart Living
                </span>

                <span>
                    ✓ Tecnologia energética
                </span>

                <span>
                    ✓ Campo magnético
                </span>

                <span>
                    ✓ Experiência Ultra
                </span>

            </div>


            <p class="alphaspin-disclaimer">

                As descrições desta página baseiam-se no
                material promocional fornecido. Não constituem
                diagnóstico, tratamento ou garantia de efeitos
                médicos ou terapêuticos.

            </p>


        </div>


        <div class="hero-visual reveal-right">


            <div class="hero-product floating">

                <div class="product-glow"></div>

                <div class="alphaspin-ultra-ring"></div>


                <img
                    class="parallax"
                    data-speed="40"
                    src="./assets/products/alphaspin-ultra.png"
                    alt="AlphaSpin Ultra"
                    loading="eager"
                >


            </div>


        </div>


    </div>

</section>

`;

}


/* ==========================================================
   TECHNOLOGY
   ========================================================== */

function technology(){

return `

<section
    id="alphaspin-technology"
    class="section alphaspin-technology">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Tecnologia Energética
            </span>


            <h2 class="section-title">

                Uma proposta de
                harmonização tecnológica

            </h2>


            <p class="lead">

                O material de apresentação descreve o AlphaSpin Ultra
                como um dispositivo orientado para harmonização de
                frequências e para uma experiência de bem-estar
                associada à tecnologia energética.

            </p>


        </div>


        <div class="grid grid-4 mt-6">


            ${technologyCard(
                "◉",
                "Tecnologia Rotativa",
                "A apresentação descreve uma tecnologia energética rotativa associada ao funcionamento do dispositivo."
            )}


            ${technologyCard(
                "✦",
                "Revestimento Óptico",
                "O material destaca um revestimento óptico violeta-dourado como parte do conceito tecnológico."
            )}


            ${technologyCard(
                "∞",
                "Harmonização",
                "A comunicação do produto utiliza o conceito de harmonização de frequências."
            )}


            ${technologyCard(
                "≈",
                "Estruturação",
                "O material promocional afirma que a tecnologia pode ser aplicada à estruturação de líquidos e gases."
            )}


        </div>


        <div class="alphaspin-information mt-6">


            <button
                class="alphaspin-details-toggle"
                type="button"
                aria-expanded="false">


                <span>
                    Ver detalhes da tecnologia
                </span>


                <span class="alphaspin-details-icon">
                    +
                </span>


            </button>


            <div class="alphaspin-details-content">


                <div class="alphaspin-details-grid">


                    <article class="alphaspin-detail-card">


                        <span class="label">
                            01 — Energia
                        </span>


                        <h3>
                            Frequência e ressonância
                        </h3>


                        <p class="text mt-2">

                            O material promocional descreve
                            a produção de uma frequência
                            rotativa de ressonância magnética
                            como parte do conceito AlphaSpin Ultra.

                        </p>


                        <div class="alphaspin-detail-list mt-3">

                            ${detailItem(
                                "Tecnologia energética apresentada"
                            )}

                            ${detailItem(
                                "Conceito de rotação e ressonância"
                            )}

                            ${detailItem(
                                "Parte da identidade tecnológica Ultra"
                            )}

                        </div>


                    </article>


                    <article class="alphaspin-detail-card">


                        <span class="label">
                            02 — Campo
                        </span>


                        <h3>
                            Harmonização de frequências
                        </h3>


                        <p class="text mt-2">

                            A apresentação utiliza o conceito
                            de harmonização do campo electromagnético
                            e da frequência do ambiente.

                        </p>


                        <div class="alphaspin-detail-list mt-3">

                            ${detailItem(
                                "Campo electromagnético"
                            )}

                            ${detailItem(
                                "Conceito de sincronização"
                            )}

                            ${detailItem(
                                "Abordagem Smart Living"
                            )}

                        </div>


                    </article>


                    <article class="alphaspin-detail-card">


                        <span class="label">
                            03 — Natureza
                        </span>


                        <h3>
                            Corpo e ambiente
                        </h3>


                        <p class="text mt-2">

                            O material descreve uma proposta
                            de sincronização entre tecnologia,
                            natureza e campo humano.

                        </p>


                        <div class="alphaspin-detail-list mt-3">

                            ${detailItem(
                                "Visão corpo–ambiente"
                            )}

                            ${detailItem(
                                "Conceito de equilíbrio energético"
                            )}

                            ${detailItem(
                                "Filosofia holística"
                            )}

                        </div>


                    </article>


                    <article class="alphaspin-detail-card">


                        <span class="label">
                            04 — Ambiente
                        </span>


                        <h3>
                            Smart Living
                        </h3>


                        <p class="text mt-2">

                            A comunicação apresenta o dispositivo
                            como uma solução para acompanhar
                            diferentes ambientes do quotidiano.

                        </p>


                        <div class="alphaspin-detail-list mt-3">

                            ${detailItem(
                                "Casa"
                            )}

                            ${detailItem(
                                "Tecnologia quotidiana"
                            )}

                            ${detailItem(
                                "Experiência familiar"
                            )}

                        </div>


                    </article>


                    <article
                        class="alphaspin-detail-card
                               alphaspin-detail-card-wide">


                        <span class="label">
                            Informação importante
                        </span>


                        <h3>
                            Comunicação responsável
                        </h3>


                        <p class="text mt-2">

                            Algumas afirmações promocionais
                            associam o AlphaSpin Ultra a prevenção
                            ou tratamento de doenças, neutralização
                            de radiações, circulação sanguínea,
                            regeneração celular e outros efeitos
                            de saúde.

                        </p>


                        <p class="text mt-2">

                            Essas afirmações são apresentadas aqui
                            apenas como conteúdo promocional do
                            material fornecido e não como garantias
                            clínicas ou médicas.

                        </p>


                    </article>


                </div>


            </div>


        </div>


    </div>

</section>

`;

}


function technologyCard(icon, title, text){

return `

<article class="card service-card alphaspin-technology-card reveal">


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

<section class="section-sm alphaspin-benefits">

    <div class="container">


        <div class="split">


            <div class="split-image reveal-left">


                <div class="alphaspin-benefit-image">


                    <div class="alphaspin-image-glow"></div>


                    <img
                        src="./assets/products/alphaspin-ultra.png"
                        alt="AlphaSpin Ultra"
                        loading="lazy"
                    >


                </div>


            </div>


            <div class="split-content reveal-right">


                <span class="label">
                    Proposta Ultra
                </span>


                <h2 class="section-title">

                    Harmonia.
                    Tecnologia.
                    Lifestyle.

                </h2>


                <p class="text mt-3">

                    O AlphaSpin Ultra é apresentado dentro
                    de uma proposta de bem-estar holístico,
                    tecnologia energética e Smart Living.

                </p>


                <div class="icon-list mt-4">


                    ${check(
                        "Conceito de harmonização de frequências"
                    )}


                    ${check(
                        "Tecnologia energética rotativa"
                    )}


                    ${check(
                        "Proposta orientada para Smart Living"
                    )}


                    ${check(
                        "Experiência pensada para ambientes quotidianos"
                    )}


                    ${check(
                        "Conceito de equilíbrio corpo–ambiente"
                    )}


                    ${check(
                        "Design tecnológico e premium"
                    )}


                </div>


                <div class="alphaspin-information mt-5">


                    <button
                        class="alphaspin-details-toggle"
                        type="button"
                        aria-expanded="false">


                        <span>
                            Ver informações funcionais
                        </span>


                        <span class="alphaspin-details-icon">
                            +
                        </span>


                    </button>


                    <div class="alphaspin-details-content">


                        <div class="alphaspin-details-grid">


                            <article class="alphaspin-detail-card">


                                <span class="label">
                                    Harmonia
                                </span>


                                <h3>
                                    Ambiente equilibrado
                                </h3>


                                <p class="text mt-2">

                                    O material promocional
                                    descreve o AlphaSpin Ultra
                                    como ferramenta para criar
                                    um ambiente harmonioso.

                                </p>


                            </article>


                            <article class="alphaspin-detail-card">


                                <span class="label">
                                    Família
                                </span>


                                <h3>
                                    Experiência colectiva
                                </h3>


                                <p class="text mt-2">

                                    A comunicação do produto
                                    apresenta uma utilização
                                    orientada para toda a família.

                                </p>


                            </article>


                            <article
                                class="alphaspin-detail-card
                                       alphaspin-detail-card-wide">


                                <span class="label">
                                    Saúde
                                </span>


                                <h3>
                                    Sem promessas clínicas
                                </h3>


                                <p class="text mt-2">

                                    Afirmações relativas a doenças,
                                    radiação, trombose, cancro,
                                    doenças neurológicas ou outras
                                    condições de saúde devem ser
                                    confirmadas em documentação
                                    oficial e junto de profissionais
                                    de saúde.

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

<section class="section alphaspin-experience">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Smart Experience
            </span>


            <h2 class="section-title">

                Uma nova perspectiva
                sobre o Smart Living

            </h2>


            <p class="lead">

                Tecnologia, ambiente e experiência
                combinados num conceito futurista
                inspirado na visão AlphaSpin Ultra.

            </p>


        </div>


        <div class="grid grid-3 mt-6">


            ${feature(
                "⚙️",
                "Tecnologia",
                "Uma proposta associada a tecnologia energética, rotação e ressonância."
            )}


            ${feature(
                "✦",
                "Experiência",
                "Uma experiência orientada para conforto, ambiente e Lifestyle."
            )}


            ${feature(
                "🏠",
                "Smart Home",
                "Pensado no contexto de espaços e ambientes do quotidiano."
            )}


            ${feature(
                "∞",
                "Longevidade",
                "A comunicação do produto associa a experiência a uma visão de vida longa e saudável."
            )}


            ${feature(
                "◌",
                "Harmonia",
                "Conceito centrado na harmonização de frequências e ambiente."
            )}


            ${feature(
                "🌍",
                "Inovação",
                "Parte de uma visão internacional de tecnologia e Smart Living."
            )}


        </div>


    </div>

</section>

`;

}


function feature(icon, title, text){

return `

<div class="card service-card alphaspin-feature-card reveal">


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
   FREQUENCY
   ========================================================== */

function frequency(){

return `

<section class="section alphaspin-frequency">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Ondas Alfa
            </span>


            <h2 class="section-title">

                Vibrações naturais
                e frequência

            </h2>


            <p class="lead">

                O material promocional descreve uma faixa
                de frequência entre 7,5 Hz e 12,5 Hz,
                apresentando-a como próxima da frequência
                natural da Terra.

            </p>


        </div>


        <div class="alphaspin-frequency-grid mt-6">


            <article class="alphaspin-frequency-card reveal">


                <div class="frequency-number">
                    7.5
                </div>


                <div class="frequency-unit">
                    Hz
                </div>


                <h3>
                    Frequência inferior
                </h3>


                <p class="text">
                    Limite inferior da faixa indicada
                    no material promocional.
                </p>


            </article>


            <article class="alphaspin-frequency-card reveal delay-1">


                <div class="frequency-number">
                    12.5
                </div>


                <div class="frequency-unit">
                    Hz
                </div>


                <h3>
                    Frequência superior
                </h3>


                <p class="text">
                    Limite superior da faixa indicada
                    na apresentação do produto.
                </p>


            </article>


            <article
                class="alphaspin-frequency-card
                       alphaspin-frequency-card-wide
                       reveal delay-2">


                <span class="label">
                    Ressonância de Schumann
                </span>


                <h3>
                    7,82 Hz
                </h3>


                <p class="text mt-2">

                    A apresentação associa a frequência de
                    7,82 Hz à chamada Ressonância de Schumann.
                    Esta referência é aqui apresentada como
                    parte do material promocional do produto.

                </p>


            </article>


        </div>


        <div class="alphaspin-frequency-benefits mt-6">


            ${frequencyBenefit(
                "♡",
                "Bem-estar",
                "O material associa as ondas alfa a uma proposta de equilíbrio e bem-estar."
            )}


            ${frequencyBenefit(
                "◈",
                "Restauração",
                "A apresentação utiliza o conceito de restauração celular dentro da sua comunicação."
            )}


            ${frequencyBenefit(
                "≈",
                "Longevidade",
                "A comunicação do produto associa a frequência a uma visão de saúde e longevidade."
            )}


        </div>


    </div>

</section>

`;

}


function frequencyBenefit(icon, title, text){

return `

<article class="alphaspin-frequency-benefit reveal">


    <div class="frequency-benefit-icon">
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
   ROUTINE
   ========================================================== */

function routine(){

return `

<section class="section-sm alphaspin-routine">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Smart Lifestyle
            </span>


            <h2 class="section-title">

                Integre a experiência
                no quotidiano

            </h2>


            <p class="lead">

                Conheça o produto, consulte a documentação
                oficial e utilize-o de acordo com as
                orientações disponibilizadas.

            </p>


        </div>


        <div class="timeline mt-6">


            ${step(
                "1",
                "Conheça",
                "Conheça o AlphaSpin Ultra e leia as informações e especificações oficiais."
            )}


            ${step(
                "2",
                "Instale",
                "Integre o produto no espaço de acordo com as orientações oficiais."
            )}


            ${step(
                "3",
                "Explore",
                "Observe a proposta Smart Living e a experiência de utilização no quotidiano."
            )}


            ${step(
                "4",
                "Lifestyle",
                "Combine tecnologia, conforto, ambiente e hábitos equilibrados numa rotina consciente."
            )}


        </div>


        <div class="alphaspin-routine-note mt-5">


            <span class="label">
                Nota importante
            </span>


            <p class="text mt-2">

                A utilização do dispositivo deve seguir
                exclusivamente as instruções e especificações
                oficiais do fabricante. Não substitui cuidados
                médicos, tratamentos ou recomendações de saúde.

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
   CERTIFICATIONS
   ========================================================== */

function certifications(){

return `

<section class="section alphaspin-certifications">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Certificações
            </span>


            <h2 class="section-title">

                Tecnologia apresentada
                com certificações internacionais

            </h2>


            <p class="lead">

                O material disponibilizado refere
                certificação alemã e diversas certificações
                internacionais.

            </p>


        </div>


        <div class="alphaspin-certification-grid mt-6">


            ${certificate(
                "DE",
                "Certificação alemã",
                "Referência apresentada no material promocional fornecido."
            )}


            ${certificate(
                "INT",
                "Certificações internacionais",
                "A apresentação menciona várias certificações internacionais."
            )}


            ${certificate(
                "ULTRA",
                "Identidade AlphaSpin",
                "Elemento de apresentação associado à linha AlphaSpin Ultra."
            )}


        </div>


        <div class="alphaspin-certification-note mt-5">


            <span class="label">
                Verificação
            </span>


            <p class="text mt-2">

                A entidade certificadora, número, âmbito,
                validade e documentação de cada certificação
                devem ser confirmados directamente nos
                documentos oficiais correspondentes.

            </p>


        </div>


    </div>

</section>

`;

}


function certificate(code, title, text){

return `

<article class="alphaspin-certificate reveal">


    <div class="alphaspin-certificate-mark">
        ${code}
    </div>


    <div class="alphaspin-certificate-content">


        <span class="label">
            ${title}
        </span>


        <p class="text mt-2">
            ${text}
        </p>


    </div>


</article>

`;

}


/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

return `

<section class="section-sm alphaspin-faq">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Perguntas Frequentes
            </span>


            <h2 class="section-title">
                Tudo sobre o AlphaSpin Ultra
            </h2>


        </div>


        <div class="faq mt-5">


            ${question(
                "O que é o AlphaSpin Ultra?",
                "É um produto apresentado pela comunicação da marca como uma ferramenta de bem-estar e harmonização de frequências integrada na linha Smart Lab Living."
            )}


            ${question(
                "Qual é a proposta tecnológica?",
                "O material promocional descreve tecnologia energética rotativa, ressonância magnética, harmonização de frequências e revestimento óptico violeta-dourado."
            )}


            ${question(
                "Que frequência é indicada?",
                "As capturas fornecidas indicam uma faixa de 7,5 Hz a 12,5 Hz e fazem referência à frequência de 7,82 Hz da Ressonância de Schumann."
            )}


            ${question(
                "O AlphaSpin Ultra substitui cuidados médicos?",
                "Não. O dispositivo não deve ser apresentado como substituto de consulta médica, diagnóstico, tratamento ou acompanhamento profissional."
            )}


            ${question(
                "O produto pode ser utilizado por toda a família?",
                "O material promocional apresenta o produto como destinado a toda a família. A adequação para crianças, gestantes, idosos ou pessoas com condições de saúde específicas deve ser confirmada com o fabricante e, quando aplicável, com um profissional de saúde."
            )}


            ${question(
                "O AlphaSpin Ultra cura doenças?",
                "O material promocional fornecido contém afirmações sobre doenças como cancro, trombose e doenças neurodegenerativas. Essas afirmações não são apresentadas nesta página como garantias de cura ou como tratamentos médicos comprovados."
            )}


            ${question(
                "O AlphaSpin Ultra elimina radiação electromagnética?",
                "A comunicação promocional utiliza expressões como harmonização e neutralização de frequências. A página não apresenta isso como uma garantia científica de eliminação ou neutralização de radiação."
            )}


            ${question(
                "Como devo utilizar o AlphaSpin Ultra?",
                "Devem ser seguidas as instruções e especificações oficiais fornecidas pelo fabricante para instalação e utilização."
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

<section class="section alphaspin-cta">

    <div class="container">


        <div class="showcase">


            <div class="showcase-content section-center">


                <span class="badge">
                    AlphaSpin Ultra
                </span>


                <h2 class="section-title mt-3">

                    Entre na experiência
                    Smart Living

                </h2>


                <p class="lead">

                    Conheça uma abordagem futurista que
                    combina tecnologia, ambiente, experiência
                    e a identidade premium do AlphaSpin Ultra.

                </p>


                <div class="hero-actions center mt-4">


                    <button
                        class="btn btn-primary"
                        id="alphaSpinWhats"
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


                <p class="alphaspin-cta-disclaimer mt-4">

                    Informação apresentada para fins informativos.
                    Não constitui aconselhamento médico,
                    diagnóstico, tratamento ou garantia de resultados.

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

<div class="alphaspin-detail-item">


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

function initialiseAlphaSpinUltra(){


    try{

        stagger(".alphaspin-technology-card");

        stagger(".alphaspin-feature-card");

        stagger(".alphaspin-detail-card");

        stagger(".alphaspin-frequency-card");

        stagger(".alphaspin-frequency-benefit");

        stagger(".alphaspin-certificate");

    }catch(error){

        console.warn(
            "AlphaSpin Ultra animations:",
            error
        );

    }


    try{

        document
            .querySelectorAll(".page-alphaspin-ultra .btn")
            .forEach(button => {

                ripple(button);

            });

    }catch(error){

        console.warn(
            "AlphaSpin Ultra ripple:",
            error
        );

    }


    /*
     * Technology button
     */

    document
        .getElementById("alphaSpinTechnology")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("alphaspin-technology")
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
            ".page-alphaspin-ultra .alphaspin-details-toggle"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".alphaspin-information"
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
            ".page-alphaspin-ultra .faq-question"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const item =
                        button.closest(".faq-item");


                    if(!item) return;


                    const isOpen =
                        item.classList.contains(
                            "active"
                        );


                    document
                        .querySelectorAll(
                            ".page-alphaspin-ultra .faq-item"
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
        .getElementById("buyAlphaSpinUltra")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * WhatsApp
     */

    document
        .getElementById("alphaSpinWhats")
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
        "Olá AD Lifestyle! Tenho interesse no AlphaSpin Ultra e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
