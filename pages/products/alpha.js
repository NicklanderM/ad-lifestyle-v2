/* ==========================================================
   AD LIFESTYLE V2
   ALPHA.JS
   Premium Alpha Vmax Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD ALPHA PAGE
   ========================================================== */

export function loadAlpha(){

    applyTheme("alpha");

    const app = document.getElementById("app");

    if(!app) return;

    app.innerHTML = `

        ${hero()}

        ${composition()}

        ${benefits()}

        ${ingredients()}

        ${usage()}

        ${performance()}

        ${faq()}

        ${cta()}

    `;

    initialiseAlpha();

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero alpha-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">


        <div class="hero-content reveal">

            <span class="badge">
                Alpha Vmax · Premium Performance
            </span>


            <h1 class="hero-title">

                Alpha
                <span>Vmax</span>

            </h1>


            <p class="hero-sub">

                Uma fórmula de inspiração botânica,
                concebida para integrar uma rotina
                masculina orientada para vitalidade,
                energia, desempenho e bem-estar.

            </p>


            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    id="buyAlpha"
                    type="button">

                    Comprar Agora

                </button>


                <button
                    class="btn btn-glass"
                    id="alphaComposition"
                    type="button">

                    Ver Composição

                </button>

            </div>


            <div class="alpha-hero-highlights">

                <span>
                    ✓ Cordyceps
                </span>

                <span>
                    ✓ Bagas de Goji
                </span>

                <span>
                    ✓ Ganoderma
                </span>

                <span>
                    ✓ Grainhas de Uva
                </span>

            </div>


            <p class="alpha-disclaimer">

                Produto apresentado como complemento
                de uma rotina de bem-estar. Não substitui
                acompanhamento médico ou hábitos saudáveis.

            </p>

        </div>


        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>


                <div class="alpha-gold-ring"></div>


                <img
                    class="parallax"
                    data-speed="40"
                    src="./assets/products/alpha.png"
                    alt="Alpha Vmax"
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
    id="alpha-composition"
    class="section alpha-composition">

    <div class="container">


        <div class="section-center reveal">

            <span class="label">
                Alpha Vmax
            </span>


            <h2 class="section-title">

                Uma composição
                de inspiração botânica

            </h2>


            <p class="lead">

                A apresentação do produto destaca
                quatro matérias-primas principais,
                associadas a energia, vitalidade,
                circulação e equilíbrio do organismo.

            </p>

        </div>


        <div class="grid grid-4 mt-6">


            ${ingredient(
                "⚡",
                "Cordyceps",
                "Ingrediente botânico apresentado no material do produto como associado à energia e vitalidade."
            )}


            ${ingredient(
                "🫐",
                "Bagas de Goji",
                "Ingrediente apresentado como parte da composição botânica do Alpha Vmax."
            )}


            ${ingredient(
                "🍄",
                "Ganoderma",
                "Cogumelo utilizado tradicionalmente em preparações orientadas para bem-estar."
            )}


            ${ingredient(
                "🍇",
                "Grainhas de Uva",
                "Ingrediente vegetal apresentado no material em associação com circulação e protecção cardiovascular."
            )}

        </div>


        <div class="alpha-information mt-6">

            <button
                class="alpha-details-toggle"
                type="button"
                aria-expanded="false">

                <span>
                    Ver detalhes da composição
                </span>

                <span class="alpha-details-icon">
                    +
                </span>

            </button>


            <div class="alpha-details-content">

                <div class="alpha-details-grid">


                    <article class="alpha-detail-card">

                        <span class="label">
                            01 — Cordyceps
                        </span>


                        <h3>
                            Energia e vitalidade
                        </h3>


                        <p class="text mt-2">

                            O Cordyceps é apresentado
                            no material de comunicação
                            do Alpha Vmax como uma das
                            matérias-primas orgânicas da fórmula.

                        </p>


                        <div class="alpha-detail-list mt-3">

                            ${detailItem(
                                "Matéria-prima de origem botânica"
                            )}

                            ${detailItem(
                                "Associado à energia no material do produto"
                            )}

                            ${detailItem(
                                "Integra a composição Alpha Vmax"
                            )}

                        </div>

                    </article>


                    <article class="alpha-detail-card">

                        <span class="label">
                            02 — Bagas de Goji
                        </span>


                        <h3>
                            Botânico seleccionado
                        </h3>


                        <p class="text mt-2">

                            As bagas de Goji aparecem
                            entre as matérias-primas orgânicas
                            apresentadas para o Alpha Vmax.

                        </p>


                        <div class="alpha-detail-list mt-3">

                            ${detailItem(
                                "Ingrediente vegetal"
                            )}

                            ${detailItem(
                                "Parte da composição botânica"
                            )}

                            ${detailItem(
                                "Associado à vitalidade no material apresentado"
                            )}

                        </div>

                    </article>


                    <article class="alpha-detail-card">

                        <span class="label">
                            03 — Ganoderma
                        </span>


                        <h3>
                            Cogumelo tradicional
                        </h3>


                        <p class="text mt-2">

                            O Ganoderma é apresentado
                            como uma das matérias-primas
                            orgânicas utilizadas na formulação.

                        </p>


                        <div class="alpha-detail-list mt-3">

                            ${detailItem(
                                "Ingrediente de origem natural"
                            )}

                            ${detailItem(
                                "Tradicionalmente utilizado em produtos de bem-estar"
                            )}

                            ${detailItem(
                                "Integra a fórmula Alpha Vmax"
                            )}

                        </div>

                    </article>


                    <article class="alpha-detail-card">

                        <span class="label">
                            04 — Grainhas de Uva
                        </span>


                        <h3>
                            Circulação e bem-estar
                        </h3>


                        <p class="text mt-2">

                            As grainhas de uva são destacadas
                            no material do produto como uma
                            das matérias-primas orgânicas.

                        </p>


                        <div class="alpha-detail-list mt-3">

                            ${detailItem(
                                "Ingrediente de origem vegetal"
                            )}

                            ${detailItem(
                                "Associado à circulação no material apresentado"
                            )}

                            ${detailItem(
                                "Relacionado com protecção cardiovascular na apresentação"
                            )}

                        </div>

                    </article>


                    <article
                        class="alpha-detail-card
                               alpha-detail-card-wide">

                        <span class="label">
                            Informação importante
                        </span>


                        <h3>
                            Comunicação responsável
                        </h3>


                        <p class="text mt-2">

                            As características apresentadas nesta
                            página baseiam-se no material de
                            apresentação disponibilizado para o
                            Alpha Vmax.

                        </p>


                        <p class="text mt-2">

                            Estas informações não constituem
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

<article class="card service-card alpha-ingredient-card reveal">

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

<section class="section-sm alpha-benefits">

    <div class="container">

        <div class="split">


            <div class="split-image reveal-left">

                <div class="alpha-benefit-image">

                    <div class="alpha-image-glow"></div>

                    <img
                        src="./assets/products/alpha.png"
                        alt="Alpha Vmax"
                        loading="lazy"
                    >

                </div>

            </div>


            <div class="split-content reveal-right">

                <span class="label">
                    Destaques
                </span>


                <h2 class="section-title">

                    Vitalidade.
                    Energia.
                    Performance.

                </h2>


                <p class="text mt-3">

                    O Alpha Vmax é apresentado como
                    um complemento para uma rotina
                    masculina orientada para bem-estar,
                    disciplina e vitalidade.

                </p>


                <div class="icon-list mt-4">

                    ${check(
                        "Vitalidade masculina"
                    )}

                    ${check(
                        "Energia e disposição"
                    )}

                    ${check(
                        "Rotina de bem-estar"
                    )}

                    ${check(
                        "Estilo de vida activo"
                    )}

                    ${check(
                        "Performance e disciplina"
                    )}

                    ${check(
                        "Abordagem de longevidade"
                    )}

                </div>


                <div class="alpha-information mt-5">

                    <button
                        class="alpha-details-toggle"
                        type="button"
                        aria-expanded="false">

                        <span>
                            Ver informações funcionais
                        </span>

                        <span class="alpha-details-icon">
                            +
                        </span>

                    </button>


                    <div class="alpha-details-content">

                        <div class="alpha-details-grid">


                            <article class="alpha-detail-card">

                                <span class="label">
                                    Vitalidade
                                </span>


                                <h3>
                                    Rotina masculina
                                </h3>


                                <p class="text mt-2">

                                    O material promocional do
                                    Alpha Vmax posiciona o produto
                                    dentro de uma proposta de
                                    vitalidade e bem-estar masculino.

                                </p>

                            </article>


                            <article class="alpha-detail-card">

                                <span class="label">
                                    Performance
                                </span>


                                <h3>
                                    Energia e disciplina
                                </h3>


                                <p class="text mt-2">

                                    A proposta da linha combina
                                    alimentação, hábitos consistentes,
                                    actividade física e desenvolvimento
                                    pessoal.

                                </p>

                            </article>


                            <article
                                class="alpha-detail-card
                                       alpha-detail-card-wide">

                                <span class="label">
                                    Saúde e bem-estar
                                </span>


                                <h3>
                                    Sem promessas médicas
                                </h3>


                                <p class="text mt-2">

                                    Alegações relativas a hormonas,
                                    fertilidade, circulação, função
                                    renal ou condições cardiovasculares
                                    devem ser confirmadas através da
                                    documentação oficial e de um
                                    profissional de saúde.

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

<section class="section alpha-ingredients">

    <div class="container">


        <div class="section-center reveal">

            <span class="label">
                Matérias-Primas Orgânicas
            </span>


            <h2 class="section-title">

                Quatro elementos
                numa fórmula diferenciada

            </h2>


            <p class="lead">

                Uma combinação de matérias-primas
                apresentada para acompanhar uma
                proposta premium de bem-estar.

            </p>

        </div>


        <div class="bento mt-6">


            <div class="bento-card span-7 reveal">

                <span class="label">
                    01
                </span>


                <h3>
                    Cordyceps
                </h3>


                <p class="text mt-2">

                    Apresentado no material do produto
                    como ingrediente associado à energia.

                </p>


                <div class="alpha-bento-symbol">
                    C
                </div>

            </div>


            <div class="bento-card span-5 reveal delay-1">

                <span class="label">
                    02
                </span>


                <h3>
                    Bagas de Goji
                </h3>


                <p class="text mt-2">

                    Uma matéria-prima vegetal integrada
                    na composição botânica apresentada.

                </p>


                <div class="alpha-bento-symbol">
                    G
                </div>

            </div>


            <div class="bento-card span-5 reveal delay-2">

                <span class="label">
                    03
                </span>


                <h3>
                    Ganoderma
                </h3>


                <p class="text mt-2">

                    Cogumelo tradicionalmente associado
                    a preparações orientadas para bem-estar.

                </p>


                <div class="alpha-bento-symbol">
                    G
                </div>

            </div>


            <div class="bento-card span-7 reveal delay-3">

                <span class="label">
                    04
                </span>


                <h3>
                    Grainhas de Uva
                </h3>


                <p class="text mt-2">

                    Ingrediente vegetal destacado no
                    material em associação com circulação
                    e bem-estar cardiovascular.

                </p>


                <div class="alpha-bento-symbol">
                    V
                </div>

            </div>


            <div class="bento-card span-12 reveal delay-4">

                <span class="label">
                    ALPHAVMAX
                </span>


                <h3>
                    Botanic Grape Fruit Berry Mix Powder
                </h3>


                <p class="text mt-2">

                    A própria apresentação do produto
                    identifica a fórmula como uma mistura
                    botânica em pó, reforçando a identidade
                    natural e premium da linha.

                </p>

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   USAGE
   ========================================================== */

function usage(){

return `

<section class="section-sm alpha-usage">

    <div class="container-sm">


        <div class="section-center reveal">

            <span class="label">
                Modo de Uso
            </span>


            <h2 class="section-title">

                Uma rotina progressiva

            </h2>


            <p class="lead">

                O material de apresentação disponibilizado
                indica uma utilização progressiva por caixas.

            </p>

        </div>


        <div class="timeline mt-6">


            ${step(
                "1",
                "Primeira caixa",
                "1 saqueta por dia, conforme o material de apresentação do produto."
            )}


            ${step(
                "2",
                "Segunda caixa",
                "1 saqueta a cada 2 dias, conforme o material apresentado."
            )}


            ${step(
                "3",
                "Terceira caixa",
                "1 saqueta a cada 3 dias, conforme o material apresentado."
            )}


            ${step(
                "4",
                "Orientação",
                "Confirme sempre a indicação presente na embalagem oficial antes da utilização."
            )}

        </div>


        <div class="alpha-usage-note mt-5">

            <span class="label">
                Nota importante
            </span>


            <p class="text mt-2">

                A utilização deve respeitar a embalagem
                e as orientações oficiais do produto.
                Pessoas com doenças, que utilizem medicamentos
                ou que tenham dúvidas sobre a utilização de
                suplementos devem procurar orientação de
                um profissional de saúde.

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
   PERFORMANCE
   ========================================================== */

function performance(){

return `

<section class="section alpha-performance">

    <div class="container">


        <div class="section-center reveal">

            <span class="label">
                Filosofia Alpha
            </span>


            <h2 class="section-title">

                Uma abordagem orientada
                para performance e longevidade

            </h2>


            <p class="lead">

                O conceito Alpha Vmax combina
                disciplina, vitalidade, hábitos saudáveis
                e desenvolvimento pessoal.

            </p>

        </div>


        <div class="bento mt-6">


            <div class="bento-card span-4 reveal">

                <div class="metric">

                    <div class="metric-number">
                        V
                    </div>

                    <div class="metric-label">
                        Vitalidade
                    </div>

                </div>

            </div>


            <div class="bento-card span-4 reveal delay-1">

                <div class="metric">

                    <div class="metric-number">
                        E
                    </div>

                    <div class="metric-label">
                        Energia
                    </div>

                </div>

            </div>


            <div class="bento-card span-4 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">
                        P
                    </div>

                    <div class="metric-label">
                        Performance
                    </div>

                </div>

            </div>


            <div class="bento-card span-12 reveal delay-3">

                <span class="label">
                    AD Lifestyle
                </span>


                <h3>
                    O conceito Alpha
                </h3>


                <p class="text mt-2">

                    Mais do que uma fórmula, o conceito
                    Alpha representa uma mentalidade baseada
                    em disciplina, consistência, confiança,
                    actividade física, alimentação equilibrada
                    e evolução contínua.

                </p>

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

return `

<section class="section-sm alpha-faq">

    <div class="container-sm">


        <div class="section-center reveal">

            <span class="label">
                Perguntas Frequentes
            </span>


            <h2 class="section-title">
                Tudo sobre o Alpha Vmax
            </h2>

        </div>


        <div class="faq mt-5">


            ${question(
                "O que é o Alpha Vmax?",
                "O Alpha Vmax é apresentado como um produto de inspiração botânica destinado a integrar uma rotina masculina orientada para vitalidade, energia, desempenho e bem-estar."
            )}


            ${question(
                "Quais são os principais ingredientes?",
                "O material apresentado destaca Cordyceps, bagas de Goji, Ganoderma e grainhas de uva como matérias-primas orgânicas."
            )}


            ${question(
                "Como é apresentado o modo de utilização?",
                "O material fornecido indica 1 saqueta por dia na primeira caixa, 1 saqueta a cada 2 dias na segunda e 1 saqueta a cada 3 dias na terceira. Deve ser sempre confirmada a indicação da embalagem oficial."
            )}


            ${question(
                "O Alpha Vmax substitui uma alimentação saudável?",
                "Não. Um suplemento não deve substituir uma alimentação equilibrada, actividade física adequada, sono e outros hábitos de saúde."
            )}


            ${question(
                "O Alpha Vmax é um medicamento?",
                "A página apresenta o Alpha Vmax como produto de bem-estar e não como medicamento. Alegações relacionadas com doenças ou tratamentos devem ser confirmadas através de documentação oficial e de um profissional de saúde."
            )}


            ${question(
                "O produto pode ser utilizado por qualquer pessoa?",
                "A utilização deve seguir as indicações oficiais do produto. Pessoas com condições de saúde, que utilizem medicamentos ou que tenham dúvidas sobre suplementos devem consultar um profissional de saúde antes da utilização."
            )}


            ${question(
                "O Alpha Vmax garante resultados relacionados com testosterona ou fertilidade?",
                "Não devem ser apresentadas garantias de resultados médicos. Algumas dessas alegações aparecem no material promocional fornecido, mas devem ser tratadas como alegações do material e não como garantia clínica."
            )}


            ${question(
                "Onde posso obter mais informações?",
                "Pode falar directamente com a AD Lifestyle através do WhatsApp para receber informações sobre disponibilidade, produto e aquisição."
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

<section class="section alpha-cta">

    <div class="container">


        <div class="showcase">


            <div class="showcase-content section-center">


                <span class="badge">
                    Alpha Vmax
                </span>


                <h2 class="section-title mt-3">

                    Eleve a sua rotina
                    para outro nível

                </h2>


                <p class="lead">

                    Descubra uma proposta premium
                    que combina botânicos seleccionados,
                    disciplina, vitalidade e lifestyle.

                </p>


                <div class="hero-actions center mt-4">


                    <button
                        class="btn btn-primary"
                        id="alphaWhats"
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


                <p class="alpha-cta-disclaimer mt-4">

                    Informação apresentada para fins
                    informativos. Não constitui aconselhamento
                    médico nem garantia de resultados.

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

<div class="alpha-detail-item">

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
   INITIALISE ALPHA
   ========================================================== */

function initialiseAlpha(){


    /*
     * Card animations
     */

    try{

        stagger(".service-card");

        stagger(".alpha-detail-card");

    }catch(error){

        console.warn(
            "Alpha animations:",
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
            "Alpha ripple:",
            error
        );

    }


    /*
     * Composition button
     */

    document
        .getElementById("alphaComposition")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("alpha-composition")
                    ?.scrollIntoView({

                        behavior: "smooth",
                        block: "start"

                    });

            }
        );


    /*
     * Expandable information
     */

    document
        .querySelectorAll(
            ".alpha-details-toggle"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".alpha-information"
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
            ".alpha-faq .faq-question"
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
                     * Close other questions
                     */

                    document
                        .querySelectorAll(
                            ".alpha-faq .faq-item"
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
                     * Toggle current question
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
     * Buy Alpha
     */

    document
        .getElementById("buyAlpha")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * WhatsApp CTA
     */

    document
        .getElementById("alphaWhats")
        ?.addEventListener(
            "click",
            openWhats
        );

}


/* ==========================================================
   OPEN WHATSAPP
   ========================================================== */

function openWhats(){

    const phone =
        "244924964666";


    const message =
        "Olá AD Lifestyle! Tenho interesse no Alpha Vmax e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
