/* ==========================================================
   AD LIFESTYLE V2
   ALPHAMETA.JS
   Premium AlphaMeta Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD ALPHAMETA PAGE
   ========================================================== */

export function loadAlphaMeta(){

    applyTheme("alphameta");

    const app = document.getElementById("app");

    if(!app) return;


    app.innerHTML = `

        <div
            class="page-alphameta"
            data-product-page="alphameta">

            ${hero()}

            ${composition()}

            ${benefits()}

            ${ingredients()}

            ${routine()}

            ${certifications()}

            ${performance()}

            ${faq()}

            ${cta()}

        </div>

    `;


    initialiseAlphaMeta();

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero alphameta-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>

        <div class="blob blob-2"></div>

        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">


        <div class="hero-content reveal">

            <span class="badge">
                AlphaMeta · Nutrição Celular
            </span>


            <h1 class="hero-title">

                Alpha
                <span>Meta</span>

            </h1>


            <p class="hero-sub">

                Uma proposta nutricional de inspiração
                botânica e cereal, apresentada para integrar
                uma rotina orientada para equilíbrio,
                vitalidade, energia e bem-estar.

            </p>


            <div class="hero-actions">


                <button
                    class="btn btn-primary"
                    id="buyAlphaMeta"
                    type="button">

                    Comprar Agora

                </button>


                <button
                    class="btn btn-glass"
                    id="alphaMetaComposition"
                    type="button">

                    Ver Composição

                </button>


            </div>


            <div class="alphameta-hero-highlights">

                <span>
                    ✓ Organic Oryza
                </span>

                <span>
                    ✓ Nutrição Celular
                </span>

                <span>
                    ✓ Fórmula em pó
                </span>

                <span>
                    ✓ 25 saquetas

                </span>

            </div>


            <p class="alphameta-disclaimer">

                As informações desta página têm finalidade
                informativa e baseiam-se no material de apresentação
                fornecido para o AlphaMeta. Não constituem diagnóstico,
                tratamento ou garantia de resultados médicos.

            </p>

        </div>


        <div class="hero-visual reveal-right">

            <div class="hero-product floating">


                <div class="product-glow"></div>


                <div class="alphameta-gold-ring"></div>


                <img
                    class="parallax"
                    data-speed="40"
                    src="./assets/products/alphameta.png"
                    alt="AlphaMeta"
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
    id="alphameta-composition"
    class="section alphameta-composition">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Nutrição Celular
            </span>


            <h2 class="section-title">

                Uma fórmula de
                inspiração nutricional

            </h2>


            <p class="lead">

                O material de apresentação do AlphaMeta
                destaca o arroz integral orgânico e uma
                proposta de nutrição celular associada
                a tecnologia e processamento especializado.

            </p>


        </div>


        <div class="grid grid-4 mt-6">


            ${ingredient(
                "🌾",
                "Arroz Integral Orgânico",
                "Ingrediente central destacado no material de apresentação do AlphaMeta."
            )}


            ${ingredient(
                "🧬",
                "Nutrição Celular",
                "Conceito utilizado na comunicação do produto para representar a sua proposta nutricional."
            )}


            ${ingredient(
                "⚙️",
                "Nanotecnologia",
                "A apresentação do produto associa a sua produção a tecnologia de processamento avançada."
            )}


            ${ingredient(
                "🌿",
                "Sem Produtos Químicos e Tóxicos",
                "Característica apresentada no material promocional fornecido para o produto."
            )}


        </div>


        <div class="alphameta-information mt-6">


            <button
                class="alphameta-details-toggle"
                type="button"
                aria-expanded="false">

                <span>
                    Ver detalhes da composição
                </span>

                <span class="alphameta-details-icon">
                    +
                </span>

            </button>


            <div class="alphameta-details-content">


                <div class="alphameta-details-grid">


                    <article class="alphameta-detail-card">

                        <span class="label">
                            01 — Organic Oryza
                        </span>


                        <h3>
                            Base cereal
                        </h3>


                        <p class="text mt-2">

                            A apresentação comercial identifica
                            o produto como Organic Oryza Cereal Drink,
                            destacando o arroz integral orgânico
                            como elemento central.

                        </p>


                        <div class="alphameta-detail-list mt-3">

                            ${detailItem(
                                "Ingrediente de origem vegetal"
                            )}

                            ${detailItem(
                                "Base cereal apresentada no produto"
                            )}

                            ${detailItem(
                                "Integra a identidade nutricional AlphaMeta"
                            )}

                        </div>


                    </article>


                    <article class="alphameta-detail-card">

                        <span class="label">
                            02 — Nutrição Celular
                        </span>


                        <h3>
                            Conceito AlphaMeta
                        </h3>


                        <p class="text mt-2">

                            A expressão “Nutrição Celular”
                            é utilizada na comunicação fornecida
                            para representar o posicionamento
                            nutricional do AlphaMeta.

                        </p>


                        <div class="alphameta-detail-list mt-3">

                            ${detailItem(
                                "Posicionamento nutricional"
                            )}

                            ${detailItem(
                                "Foco conceptual nas células"
                            )}

                            ${detailItem(
                                "Integra a comunicação oficial apresentada"
                            )}

                        </div>


                    </article>


                    <article class="alphameta-detail-card">

                        <span class="label">
                            03 — Tecnologia
                        </span>


                        <h3>
                            Processamento avançado
                        </h3>


                        <p class="text mt-2">

                            O material apresentado associa
                            o AlphaMeta à utilização de
                            nanotecnologia no seu processo
                            de desenvolvimento.

                        </p>


                        <div class="alphameta-detail-list mt-3">

                            ${detailItem(
                                "Tecnologia apresentada pela marca"
                            )}

                            ${detailItem(
                                "Abordagem de processamento especializado"
                            )}

                            ${detailItem(
                                "Posicionamento tecnológico premium"
                            )}

                        </div>


                    </article>


                    <article class="alphameta-detail-card">

                        <span class="label">
                            04 — Naturalidade
                        </span>


                        <h3>
                            Origem e proposta
                        </h3>


                        <p class="text mt-2">

                            A apresentação do AlphaMeta
                            destaca uma proposta associada
                            a ingredientes de origem vegetal
                            e nutrição consciente.

                        </p>


                        <div class="alphameta-detail-list mt-3">

                            ${detailItem(
                                "Ingrediente vegetal"
                            )}

                            ${detailItem(
                                "Identidade ligada ao cereal"
                            )}

                            ${detailItem(
                                "Proposta nutricional premium"
                            )}

                        </div>


                    </article>


                    <article
                        class="alphameta-detail-card
                               alphameta-detail-card-wide">

                        <span class="label">
                            Informação importante
                        </span>


                        <h3>
                            Comunicação responsável
                        </h3>


                        <p class="text mt-2">

                            Algumas apresentações promocionais
                            do AlphaMeta atribuem ao produto
                            efeitos relacionados com imunidade,
                            metabolismo, envelhecimento,
                            doenças e outras condições de saúde.

                        </p>


                        <p class="text mt-2">

                            Nesta página, essas afirmações não são
                            apresentadas como resultados clínicos
                            comprovados ou garantidos. Para questões
                            de saúde, tratamento ou utilização,
                            deve ser consultado um profissional de saúde.

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

<article class="card service-card alphameta-ingredient-card reveal">


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

<section class="section-sm alphameta-benefits">

    <div class="container">


        <div class="split">


            <div class="split-image reveal-left">


                <div class="alphameta-benefit-image">

                    <div class="alphameta-image-glow"></div>


                    <img
                        src="./assets/products/alphameta.png"
                        alt="AlphaMeta"
                        loading="lazy"
                    >

                </div>


            </div>


            <div class="split-content reveal-right">


                <span class="label">
                    Destaques
                </span>


                <h2 class="section-title">

                    Nutrição.
                    Equilíbrio.
                    Vitalidade.

                </h2>


                <p class="text mt-3">

                    O AlphaMeta é apresentado como
                    uma solução nutricional integrada
                    numa filosofia de bem-estar,
                    consistência e longevidade.

                </p>


                <div class="icon-list mt-4">


                    ${check(
                        "Nutrição orientada para uma rotina equilibrada"
                    )}


                    ${check(
                        "Proposta baseada em ingredientes de origem vegetal"
                    )}


                    ${check(
                        "Foco conceptual na nutrição celular"
                    )}


                    ${check(
                        "Energia e vitalidade no dia-a-dia"
                    )}


                    ${check(
                        "Integração numa rotina activa"
                    )}


                    ${check(
                        "Parte da filosofia de longevidade AD Lifestyle"
                    )}


                </div>


                <div class="alphameta-information mt-5">


                    <button
                        class="alphameta-details-toggle"
                        type="button"
                        aria-expanded="false">

                        <span>
                            Ver informações funcionais
                        </span>

                        <span class="alphameta-details-icon">
                            +
                        </span>

                    </button>


                    <div class="alphameta-details-content">


                        <div class="alphameta-details-grid">


                            <article class="alphameta-detail-card">

                                <span class="label">
                                    Vitalidade
                                </span>


                                <h3>
                                    Rotina activa
                                </h3>


                                <p class="text mt-2">

                                    O material promocional associa
                                    o AlphaMeta a energia, vitalidade
                                    e construção de uma rotina activa.

                                </p>

                            </article>


                            <article class="alphameta-detail-card">

                                <span class="label">
                                    Metabolismo
                                </span>


                                <h3>
                                    Conceito celular
                                </h3>


                                <p class="text mt-2">

                                    A apresentação do produto utiliza
                                    conceitos relacionados com metabolismo,
                                    restauração, regeneração e protecção celular.

                                </p>

                            </article>


                            <article class="alphameta-detail-card">

                                <span class="label">
                                    Imunidade
                                </span>


                                <h3>
                                    Defesa do organismo
                                </h3>


                                <p class="text mt-2">

                                    O material fornecido associa o produto
                                    a uma proposta de suporte à imunidade.
                                    Esta associação não deve ser interpretada
                                    como garantia de efeito clínico.

                                </p>

                            </article>


                            <article
                                class="alphameta-detail-card
                                       alphameta-detail-card-wide">

                                <span class="label">
                                    Saúde
                                </span>


                                <h3>
                                    Sem promessas médicas
                                </h3>


                                <p class="text mt-2">

                                    Afirmações relativas a doenças,
                                    gravidez, bebés, tratamentos,
                                    cura ou prevenção devem ser avaliadas
                                    através da documentação oficial
                                    e de profissionais de saúde.

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

<section class="section alphameta-ingredients">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Conceito Nutricional
            </span>


            <h2 class="section-title">

                A essência do AlphaMeta

            </h2>


            <p class="lead">

                Uma identidade construída em torno
                do cereal, da tecnologia nutricional
                e de uma visão moderna de bem-estar.

            </p>


        </div>


        <div class="bento mt-6">


            <div class="bento-card span-7 reveal">


                <span class="label">
                    01
                </span>


                <h3>
                    Organic Oryza
                </h3>


                <p class="text mt-2">

                    O arroz integral orgânico é um dos
                    principais elementos destacados
                    na apresentação do AlphaMeta.

                </p>


                <div class="alphameta-bento-symbol">
                    O
                </div>


            </div>


            <div class="bento-card span-5 reveal delay-1">


                <span class="label">
                    02
                </span>


                <h3>
                    Nutrição Celular
                </h3>


                <p class="text mt-2">

                    O conceito central utilizado
                    na identidade e apresentação do produto.

                </p>


                <div class="alphameta-bento-symbol">
                    N
                </div>


            </div>


            <div class="bento-card span-5 reveal delay-2">


                <span class="label">
                    03
                </span>


                <h3>
                    Tecnologia
                </h3>


                <p class="text mt-2">

                    O material fornecido destaca
                    a utilização de nanotecnologia
                    na proposta do produto.

                </p>


                <div class="alphameta-bento-symbol">
                    T
                </div>


            </div>


            <div class="bento-card span-7 reveal delay-3">


                <span class="label">
                    04
                </span>


                <h3>
                    Naturalidade
                </h3>


                <p class="text mt-2">

                    Cereal, natureza e nutrição
                    formam parte importante da
                    identidade visual do AlphaMeta.

                </p>


                <div class="alphameta-bento-symbol">
                    A
                </div>


            </div>


            <div class="bento-card span-12 reveal delay-4">


                <span class="label">
                    ALPHAMETA
                </span>


                <h3>
                    Organic Oryza Cereal Drink
                </h3>


                <p class="text mt-2">

                    A própria embalagem apresenta
                    o AlphaMeta como Organic Oryza
                    Cereal Drink, reforçando a sua
                    identidade de bebida nutricional
                    à base de cereal.

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

<section class="section-sm alphameta-routine">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Consumo Recomendado
            </span>


            <h2 class="section-title">

                Uma rotina simples
                e consistente

            </h2>


            <p class="lead">

                O material de apresentação do produto
                indica uma utilização estruturada,
                devendo sempre ser confirmada a orientação
                presente na embalagem oficial.

            </p>


        </div>


        <div class="timeline mt-6">


            ${step(
                "1",
                "Preparação",
                "Verter 1 saqueta em 300 ml a 1 litro de água, conforme as indicações apresentadas."
            )}


            ${step(
                "2",
                "Rotina intensiva",
                "O material fornecido indica 3 utilizações por dia antes das refeições durante pelo menos 3 meses."
            )}


            ${step(
                "3",
                "Manutenção",
                "A apresentação indica 1 a 2 utilizações por dia para manutenção."
            )}


            ${step(
                "4",
                "Orientação",
                "Confirme sempre as instruções, composição e recomendações da embalagem oficial do produto."
            )}


        </div>


        <div class="alphameta-routine-note mt-5">


            <span class="label">
                Informação importante
            </span>


            <p class="text mt-2">

                As instruções acima reproduzem o material
                promocional fornecido. Antes da utilização,
                deve ser consultada a embalagem oficial,
                especialmente no caso de crianças, gravidez,
                amamentação, doenças ou utilização de medicamentos.

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

<section class="section alphameta-certifications">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Certificações
            </span>


            <h2 class="section-title">

                Apresentação e certificações

            </h2>


            <p class="lead">

                O material disponibilizado inclui referências
                visuais a certificações da União Europeia
                e certificação Halal.

            </p>


        </div>


        <div class="alphameta-certification-grid mt-6">


            ${certificate(
                "CERTIFICATE",
                "Certificação",
                "Documento apresentado no material fornecido."
            )}


            ${certificate(
                "ANNEX",
                "Anexo",
                "Documento complementar apresentado no material."
            )}


            ${certificate(
                "HALAL",
                "Certificação Halal",
                "A apresentação inclui referência a certificação Halal."
            )}


        </div>


        <div class="alphameta-certification-note mt-5">


            <span class="label">
                Nota
            </span>


            <p class="text mt-2">

                A existência, validade, entidade certificadora,
                âmbito e datas de qualquer certificação devem ser
                confirmados directamente na documentação oficial
                correspondente.

            </p>


        </div>


    </div>

</section>

`;

}


function certificate(code, title, text){

return `

<article class="alphameta-certificate reveal">


    <div class="alphameta-certificate-mark">
        ${code}
    </div>


    <div class="alphameta-certificate-content">


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
   PERFORMANCE
   ========================================================== */

function performance(){

return `

<section class="section alphameta-performance">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Filosofia AlphaMeta
            </span>


            <h2 class="section-title">

                Nutrição.
                Tecnologia.
                Consistência.

            </h2>


            <p class="lead">

                O conceito AlphaMeta combina uma
                identidade nutricional baseada em cereal
                com uma apresentação tecnológica e premium.

            </p>


        </div>


        <div class="bento mt-6">


            <div class="bento-card span-4 reveal">


                <div class="metric">

                    <div class="metric-number">
                        N
                    </div>


                    <div class="metric-label">
                        Nutrição
                    </div>

                </div>


            </div>


            <div class="bento-card span-4 reveal delay-1">


                <div class="metric">

                    <div class="metric-number">
                        T
                    </div>


                    <div class="metric-label">
                        Tecnologia
                    </div>

                </div>


            </div>


            <div class="bento-card span-4 reveal delay-2">


                <div class="metric">

                    <div class="metric-number">
                        E
                    </div>


                    <div class="metric-label">
                        Equilíbrio
                    </div>

                </div>


            </div>


            <div class="bento-card span-12 reveal delay-3">


                <span class="label">
                    AD Lifestyle
                </span>


                <h3>
                    A filosofia AlphaMeta
                </h3>


                <p class="text mt-2">

                    Mais do que uma bebida nutricional,
                    o conceito AlphaMeta é apresentado
                    dentro de uma filosofia de hábitos,
                    equilíbrio, consistência, disciplina
                    e qualidade de vida.

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

<section class="section-sm alphameta-faq">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Perguntas Frequentes
            </span>


            <h2 class="section-title">
                Tudo sobre o AlphaMeta
            </h2>


        </div>


        <div class="faq mt-5">


            ${question(
                "O que é o AlphaMeta?",
                "O AlphaMeta é apresentado como Organic Oryza Cereal Drink, integrado na proposta de nutrição celular e bem-estar da AD Lifestyle."
            )}


            ${question(
                "Qual é o principal ingrediente destacado?",
                "O material fornecido destaca o arroz integral orgânico como uma das principais bases da apresentação do produto."
            )}


            ${question(
                "Quantas saquetas contém uma caixa?",
                "Segundo a informação fornecida, uma caixa contém 25 pacotinhos ou saquetas."
            )}


            ${question(
                "Como é apresentado o consumo recomendado?",
                "O material fornecido indica 1 saqueta em 300 ml a 1 litro de água, 3 vezes por dia antes das refeições durante pelo menos 3 meses, e 1 a 2 vezes por dia para manutenção. A indicação da embalagem oficial deve prevalecer."
            )}


            ${question(
                "O AlphaMeta substitui uma alimentação equilibrada?",
                "Não. O produto não deve ser apresentado como substituto de uma alimentação variada e equilibrada."
            )}


            ${question(
                "O AlphaMeta é um medicamento?",
                "Nesta página o AlphaMeta é apresentado como produto nutricional e de bem-estar. Não deve ser apresentado como medicamento nem como tratamento de doenças."
            )}


            ${question(
                "O AlphaMeta pode curar doenças?",
                "Algumas apresentações promocionais fazem afirmações sobre diabetes, hipertensão, cancro, miomas e outras condições. Essas afirmações não são apresentadas nesta página como garantias clínicas ou tratamentos comprovados."
            )}


            ${question(
                "Pode ser utilizado por gestantes ou bebés?",
                "Essa indicação aparece no material promocional fornecido, mas não deve ser tratada como recomendação universal. Gravidez, amamentação e utilização por crianças exigem orientação de um profissional de saúde."
            )}


            ${question(
                "O que significam as referências a certificações?",
                "As capturas fornecidas apresentam referências visuais a certificações da União Europeia e Halal. A validade, âmbito e entidade certificadora devem ser confirmados na documentação oficial."
            )}


            ${question(
                "Onde posso obter mais informações?",
                "Pode contactar directamente a AD Lifestyle através do WhatsApp para informações sobre disponibilidade, apresentação e aquisição."
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

<section class="section alphameta-cta">

    <div class="container">


        <div class="showcase">


            <div class="showcase-content section-center">


                <span class="badge">
                    AlphaMeta
                </span>


                <h2 class="section-title mt-3">

                    Faça da nutrição
                    parte da sua rotina

                </h2>


                <p class="lead">

                    Descubra uma proposta nutricional
                    premium inspirada no arroz integral
                    orgânico e na filosofia de bem-estar
                    da AD Lifestyle.

                </p>


                <div class="hero-actions center mt-4">


                    <button
                        class="btn btn-primary"
                        id="alphaMetaWhats"
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


                <p class="alphameta-cta-disclaimer mt-4">

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

<div class="alphameta-detail-item">


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

function initialiseAlphaMeta(){


    try{

        stagger(".alphameta-ingredient-card");

        stagger(".alphameta-detail-card");

        stagger(".alphameta-certificate");

    }catch(error){

        console.warn(
            "AlphaMeta animations:",
            error
        );

    }


    try{

        document
            .querySelectorAll(".page-alphameta .btn")
            .forEach(button => {

                ripple(button);

            });

    }catch(error){

        console.warn(
            "AlphaMeta ripple:",
            error
        );

    }


    /*
     * Composition
     */

    document
        .getElementById("alphaMetaComposition")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("alphameta-composition")
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
            ".page-alphameta .alphameta-details-toggle"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".alphameta-information"
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
            ".page-alphameta .faq-question"
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
                            ".page-alphameta .faq-item"
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
        .getElementById("buyAlphaMeta")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * WhatsApp
     */

    document
        .getElementById("alphaMetaWhats")
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
        "Olá AD Lifestyle! Tenho interesse no AlphaMeta e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
