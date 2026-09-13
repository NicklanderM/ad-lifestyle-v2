/* ==========================================================
   AD LIFESTYLE V2
   EZENO.JS
   Premium Oral Care Product Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD EZENO
   ========================================================== */

export function loadEzeno(){

    applyTheme("ezeno");

    const app = document.getElementById("app");

    if(!app) return;


    app.innerHTML = `

        <div
            class="page-ezeno"
            data-product-page="ezeno">

            ${hero()}

            ${oralCare()}

            ${ingredients()}

            ${benefits()}

            ${technology()}

            ${certifications()}

            ${howToUse()}

            ${experience()}

            ${faq()}

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

    <div class="aurora">

        <div class="blob blob-1"></div>

        <div class="blob blob-2"></div>

        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">


        <div class="hero-content reveal">


            <span class="badge">
                EZENO · Premium Oral Care
            </span>


            <h1 class="hero-title">

                EZENO
                <span>Herbal</span>

            </h1>


            <p class="hero-sub">

                Dentífrico à base de ginseng,
                apresentado como uma solução de cuidado
                oral orientada para limpeza profunda,
                frescura, cuidado das gengivas e higiene
                oral diária.

            </p>


            <div class="hero-actions">


                <button
                    class="btn btn-primary"
                    id="buyEzeno"
                    type="button">

                    Comprar Agora

                </button>


                <button
                    class="btn btn-glass"
                    id="ezenoIngredients"
                    type="button">

                    Ver Ingredientes

                </button>


            </div>


            <div class="ezeno-hero-highlights">


                <span>
                    ✓ Panax Ginseng
                </span>


                <span>
                    ✓ Árvore do Chá
                </span>


                <span>
                    ✓ Sem Flúor
                </span>


                <span>
                    ✓ Cuidado Oral
                </span>


            </div>


            <p class="ezeno-disclaimer">

                Algumas características e números apresentados
                nesta página correspondem ao material promocional
                fornecido para o produto e não constituem garantia
                de resultados clínicos.

            </p>


        </div>


        <div class="hero-visual reveal-right">


            <div class="hero-product floating">


                <div class="product-glow"></div>


                <div class="ezeno-gold-ring"></div>


                <img
                    class="parallax"
                    data-speed="30"
                    src="./assets/products/ezeno.png"
                    alt="EZENO Herbal Toothpaste"
                    loading="eager"
                >


            </div>


        </div>


    </div>

</section>

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


        <div class="section-center reveal">


            <span class="label">
                Cuidado Oral
            </span>


            <h2 class="section-title">

                Mais do que um dentífrico

            </h2>


            <p class="lead">

                A apresentação do EZENO destaca
                uma combinação de limpeza, frescura,
                cuidado das gengivas e protecção oral
                como parte da rotina diária.

            </p>


        </div>


        <div class="grid grid-4 mt-6">


            ${careCard(
                "🦷",
                "Limpeza Profunda",
                "A comunicação destaca uma limpeza profunda da superfície dentária e dos resíduos."
            )}


            ${careCard(
                "🌿",
                "Ginseng",
                "O Panax Ginseng é apresentado como ingrediente central do dentífrico."
            )}


            ${careCard(
                "🌱",
                "Árvore do Chá",
                "O óleo da árvore do chá é destacado na comunicação relacionada com o hálito."
            )}


            ${careCard(
                "✨",
                "Hálito Fresco",
                "O produto é apresentado com uma proposta de frescura oral prolongada."
            )}


        </div>


        <div class="ezeno-information mt-6">


            <button
                class="ezeno-details-toggle"
                type="button"
                aria-expanded="false">


                <span>
                    Ver detalhes do produto
                </span>


                <span class="ezeno-details-icon">
                    +
                </span>


            </button>


            <div class="ezeno-details-content">


                <div class="ezeno-details-grid">


                    <article class="ezeno-detail-card">


                        <span class="label">
                            01 — Gengivas
                        </span>


                        <h3>
                            Cuidado periodontal
                        </h3>


                        <p class="text mt-2">

                            O material promocional associa
                            o produto ao cuidado das gengivas,
                            periodonto e higiene da cavidade oral.

                        </p>


                        <div class="ezeno-detail-list mt-3">

                            ${detailItem(
                                "Cuidado das gengivas"
                            )}

                            ${detailItem(
                                "Higiene periodontal"
                            )}

                            ${detailItem(
                                "Rotina diária de escovagem"
                            )}

                        </div>


                    </article>


                    <article class="ezeno-detail-card">


                        <span class="label">
                            02 — Frescura
                        </span>


                        <h3>
                            Hálito mais fresco
                        </h3>


                        <p class="text mt-2">

                            A apresentação destaca o óleo
                            da árvore do chá e uma proposta
                            de frescura prolongada.

                        </p>


                        <div class="ezeno-detail-list mt-3">

                            ${detailItem(
                                "Sensação refrescante"
                            )}

                            ${detailItem(
                                "Cuidado do hálito"
                            )}

                            ${detailItem(
                                "Experiência prolongada"
                            )}

                        </div>


                    </article>


                    <article class="ezeno-detail-card">


                        <span class="label">
                            03 — Limpeza
                        </span>


                        <h3>
                            Manchas e placa
                        </h3>


                        <p class="text mt-2">

                            O material do produto descreve
                            uma acção de limpeza associada
                            à remoção de manchas persistentes
                            e resíduos da superfície dentária.

                        </p>


                        <div class="ezeno-detail-list mt-3">

                            ${detailItem(
                                "Limpeza da superfície dentária"
                            )}

                            ${detailItem(
                                "Remoção de manchas"
                            )}

                            ${detailItem(
                                "Cuidado da placa dentária"
                            )}

                        </div>


                    </article>


                    <article class="ezeno-detail-card">


                        <span class="label">
                            04 — Composição
                        </span>


                        <h3>
                            Fórmula apresentada
                        </h3>


                        <p class="text mt-2">

                            A documentação fornecida destaca
                            o extracto de Panax Ginseng,
                            óleo da árvore do chá e sílica,
                            além de características específicas
                            de formulação.

                        </p>


                        <div class="ezeno-detail-list mt-3">

                            ${detailItem(
                                "Panax Ginseng"
                            )}

                            ${detailItem(
                                "Óleo da árvore do chá"
                            )}

                            ${detailItem(
                                "Sílica"
                            )}

                        </div>


                    </article>


                    <article
                        class="ezeno-detail-card
                               ezeno-detail-card-wide">


                        <span class="label">
                            Informação importante
                        </span>


                        <h3>
                            Comunicação responsável
                        </h3>


                        <p class="text mt-2">

                            O material promocional contém
                            afirmações sobre protecção contra
                            bactérias e cáries, melhoria do
                            periodonto, reparação das gengivas
                            e duração da frescura.

                        </p>


                        <p class="text mt-2">

                            Essas afirmações são apresentadas
                            nesta página como características
                            declaradas no material do produto,
                            e não como garantias de tratamento
                            ou resultado clínico.

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

<article
    class="card service-card ezeno-care-card reveal">


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
   INGREDIENTS
   ========================================================== */

function ingredients(){

return `

<section
    id="ezeno-ingredients"
    class="section ezeno-ingredients">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Ingredientes & Fórmula
            </span>


            <h2 class="section-title">

                A fórmula por trás do EZENO

            </h2>


            <p class="lead">

                A apresentação disponibilizada destaca
                ingredientes específicos associados à
                identidade herbal e ao conceito de cuidado oral.

            </p>


        </div>


        <div class="bento mt-6">


            <div class="bento-card span-7 reveal">


                <span class="label">
                    01
                </span>


                <h3>
                    Panax Ginseng
                </h3>


                <p class="text mt-2">

                    O extracto de Panax Ginseng é apresentado
                    como um dos principais componentes
                    do dentífrico EZENO.

                </p>


                <div class="ezeno-bento-symbol">
                    G
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

                    Destacado no material promocional
                    em associação com o cuidado do hálito
                    e partículas odoríferas.

                </p>


                <div class="ezeno-bento-symbol">
                    T
                </div>


            </div>


            <div class="bento-card span-5 reveal delay-2">


                <span class="label">
                    03
                </span>


                <h3>
                    Sílica
                </h3>


                <p class="text mt-2">

                    Apresentada no material como elemento
                    associado à limpeza das manchas
                    persistentes da superfície dentária.

                </p>


                <div class="ezeno-bento-symbol">
                    S
                </div>


            </div>


            <div class="bento-card span-7 reveal delay-3">


                <span class="label">
                    04
                </span>


                <h3>
                    Ginseng & Saponinas
                </h3>


                <p class="text mt-2">

                    A apresentação destaca a presença
                    de cerca de 30 tipos de saponinas
                    e ginsenósidos no extracto de ginseng.

                </p>


                <div class="ezeno-bento-symbol">
                    30
                </div>


            </div>


            <div class="bento-card span-12 reveal delay-4">


                <span class="label">
                    FORMULAÇÃO
                </span>


                <h3>
                    Sem Flúor · Sem Triclosano · Sem Álcool
                </h3>


                <p class="text mt-2">

                    O material promocional fornecido também
                    apresenta referências a uma formulação
                    sem flúor, sem triclosano, sem álcool,
                    sem esteróides, sem metais pesados
                    e sem certos contaminantes.

                </p>


            </div>


        </div>

    </div>

</section>

`;

}


/* ==========================================================
   BENEFITS
   ========================================================== */

function benefits(){

return `

<section class="section-sm ezeno-benefits">

    <div class="container">


        <div class="split">


            <div class="split-image reveal-left">


                <div class="ezeno-benefit-image">


                    <div class="ezeno-image-glow"></div>


                    <img
                        src="./assets/products/ezeno.png"
                        alt="EZENO"
                        loading="lazy"
                    >


                </div>


            </div>


            <div class="split-content reveal-right">


                <span class="label">
                    Benefícios
                </span>


                <h2 class="section-title">

                    Limpeza.
                    Frescura.
                    Cuidado.

                </h2>


                <p class="text mt-3">

                    O material de apresentação do EZENO
                    posiciona o produto como uma solução
                    de higiene oral de utilização diária.

                </p>


                <div class="icon-list mt-4">


                    ${check(
                        "Limpeza em profundidade"
                    )}


                    ${check(
                        "Cuidado diário das gengivas"
                    )}


                    ${check(
                        "Sensação de hálito fresco"
                    )}


                    ${check(
                        "Cuidado da placa e da superfície dentária"
                    )}


                    ${check(
                        "Fórmula de inspiração herbal"
                    )}


                    ${check(
                        "Escovagem orientada para uma rotina consistente"
                    )}


                </div>


                <div class="ezeno-benefit-note mt-5">


                    <span class="label">
                        Apresentação do produto
                    </span>


                    <p class="text mt-2">

                        O material promocional refere
                        protecção prolongada, cuidado
                        periodontal e redução de bactérias.
                        Esses resultados devem ser entendidos
                        como alegações da apresentação.

                    </p>


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
   TECHNOLOGY
   ========================================================== */

function technology(){

return `

<section class="section ezeno-technology">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Tecnologia & Protecção
            </span>


            <h2 class="section-title">

                Uma abordagem completa
                à higiene oral

            </h2>


            <p class="lead">

                A comunicação do EZENO combina
                ingredientes herbais, limpeza,
                frescura e características específicas
                de formulação.

            </p>


        </div>


        <div class="grid grid-3 mt-6">


            ${feature(
                "🦷",
                "Cuidado Periodontal",
                "O material promocional associa o produto ao cuidado das gengivas e do periodonto."
            )}


            ${feature(
                "🛡️",
                "Protecção",
                "A apresentação refere protecção prolongada contra cáries e bactérias."
            )}


            ${feature(
                "✨",
                "Frescura",
                "A comunicação destaca uma experiência de hálito fresco e duradouro."
            )}


            ${feature(
                "🌿",
                "Ginseng",
                "O extracto de Panax Ginseng ocupa uma posição central na identidade do produto."
            )}


            ${feature(
                "🫧",
                "Espuma",
                "A apresentação destaca uma textura e espuma de alta densidade."
            )}


            ${feature(
                "💎",
                "Experiência Premium",
                "Uma proposta de higiene oral apresentada com posicionamento premium."
            )}


        </div>


        <div class="ezeno-protection-bento mt-6">


            <div class="ezeno-protection-card reveal">


                <span class="protection-number">
                    99,9%
                </span>


                <h3>
                    Protecção declarada
                </h3>


                <p class="text mt-2">

                    Percentagem apresentada
                    no material promocional
                    relativamente à protecção
                    contra bactérias.

                </p>


            </div>


            <div class="ezeno-protection-card reveal delay-1">


                <span class="protection-number">
                    24H
                </span>


                <h3>
                    Frescura declarada
                </h3>


                <p class="text mt-2">

                    Duração indicada na
                    apresentação promocional
                    relativamente à frescura oral.

                </p>


            </div>


            <div class="ezeno-protection-card reveal delay-2">


                <span class="protection-number">
                    2×
                </span>


                <h3>
                    Utilização diária
                </h3>


                <p class="text mt-2">

                    O material recomenda escovar
                    cuidadosamente pelo menos
                    duas vezes por dia.

                </p>


            </div>


        </div>


    </div>

</section>

`;

}


function feature(icon, title, text){

return `

<div class="card service-card ezeno-feature-card reveal">


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
   CERTIFICATIONS
   ========================================================== */

function certifications(){

return `

<section class="section-sm ezeno-certifications">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                Certificações
            </span>


            <h2 class="section-title">

                Qualidade e conformidade

            </h2>


            <p class="lead">

                O material fornecido apresenta referências
                a patentes, relatórios clínicos, inspecções
                e determinadas características de formulação.

            </p>


        </div>


        <div class="ezeno-certification-grid mt-6">


            ${certificate(
                "01",
                "Patentes concedidas",
                "Referência apresentada no material promocional fornecido."
            )}


            ${certificate(
                "02",
                "Relatórios clínicos",
                "O material faz referência a relatórios clínicos aprovados."
            )}


            ${certificate(
                "03",
                "Inspecção",
                "A apresentação inclui referência a inspecção aprovada."
            )}


            ${certificate(
                "04",
                "Sem flúor",
                "Característica declarada na documentação promocional fornecida."
            )}


            ${certificate(
                "05",
                "Sem triclosano",
                "Característica declarada na apresentação do produto."
            )}


            ${certificate(
                "06",
                "Sem metais pesados",
                "Característica indicada no material promocional fornecido."
            )}


        </div>


        <div class="ezeno-certification-note mt-5">


            <span class="label">
                Verificação
            </span>


            <p class="text mt-2">

                Números, entidades certificadoras,
                validade, âmbito e autenticidade
                de qualquer certificação ou patente
                devem ser confirmados na documentação
                oficial correspondente.

            </p>


        </div>


    </div>

</section>

`;

}


function certificate(code, title, text){

return `

<article class="ezeno-certificate reveal">


    <div class="ezeno-certificate-number">
        ${code}
    </div>


    <div>


        <h3>
            ${title}
        </h3>


        <p class="text mt-2">
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

<section class="section-sm ezeno-routine">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Utilização
            </span>


            <h2 class="section-title">

                Uma rotina simples
                de higiene oral

            </h2>


            <p class="lead">

                O material do produto recomenda uma
                escovagem cuidadosa pelo menos duas
                vezes por dia.

            </p>


        </div>


        <div class="timeline mt-6">


            ${step(
                "1",
                "Preparar",
                "Humedeça a escova e coloque uma quantidade adequada de EZENO."
            )}


            ${step(
                "2",
                "Escovar",
                "Escove cuidadosamente os dentes e a linha das gengivas."
            )}


            ${step(
                "3",
                "Limpar",
                "Dedique atenção à superfície dentária e às zonas de difícil acesso."
            )}


            ${step(
                "4",
                "Repetir",
                "Utilize pelo menos duas vezes por dia, de acordo com a orientação apresentada."
            )}


        </div>


        <div class="ezeno-routine-note mt-5">


            <span class="label">
                Nota importante
            </span>


            <p class="text mt-2">

                As instruções específicas da embalagem
                oficial devem prevalecer. Uma boa higiene
                oral também inclui acompanhamento regular
                por profissionais de saúde oral.

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

<section class="section ezeno-experience">

    <div class="container">


        <div class="section-center reveal">


            <span class="label">
                EZENO Lifestyle
            </span>


            <h2 class="section-title">

                Um sorriso cuidado
                começa na rotina

            </h2>


            <p class="lead">

                Uma abordagem de higiene oral que
                combina cuidado, frescura, ingredientes
                destacados pela marca e uma experiência
                premium de escovagem.

            </p>


        </div>


        <div class="grid grid-3 mt-6">


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
                "✨",
                "Frescura",
                "Uma experiência orientada para um hálito fresco e agradável."
            )}


            ${experienceCard(
                "🛡️",
                "Protecção",
                "O material destaca uma proposta de protecção oral prolongada."
            )}


            ${experienceCard(
                "💎",
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


function experienceCard(icon, title, text){

return `

<article class="card service-card ezeno-experience-card reveal">


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

<section class="section-sm ezeno-faq">

    <div class="container-sm">


        <div class="section-center reveal">


            <span class="label">
                Perguntas Frequentes
            </span>


            <h2 class="section-title">
                Tudo sobre o EZENO
            </h2>


        </div>


        <div class="faq mt-5">


            ${question(
                "O que é o EZENO?",
                "O EZENO é apresentado como um dentífrico de base herbal, com destaque para o extracto de Panax Ginseng e uma proposta de higiene oral diária."
            )}


            ${question(
                "Qual é o principal ingrediente?",
                "O material fornecido destaca o extracto de Panax Ginseng, associado a cerca de 30 tipos de saponinas e ginsenósidos na apresentação comercial."
            )}


            ${question(
                "O EZENO contém flúor?",
                "O material promocional fornecido apresenta o EZENO como uma fórmula sem flúor. A composição oficial deve ser sempre confirmada no rótulo e documentação do produto."
            )}


            ${question(
                "O EZENO contém triclosano?",
                "A apresentação do produto indica “sem triclosano”. A composição oficial deve ser confirmada na embalagem correspondente."
            )}


            ${question(
                "O EZENO ajuda a manter o hálito fresco?",
                "Sim, essa é uma das características destacadas no material promocional, incluindo referência ao óleo da árvore do chá e a uma frescura prolongada."
            )}


            ${question(
                "Com que frequência devo escovar?",
                "O material fornecido recomenda escovar cuidadosamente pelo menos duas vezes por dia."
            )}


            ${question(
                "O EZENO protege contra cáries e bactérias?",
                "A apresentação promocional afirma protecção contra cáries e bactérias. Esses números e efeitos devem ser entendidos como alegações da apresentação do produto e não como garantia clínica."
            )}


            ${question(
                "O EZENO repara as gengivas?",
                "O material promocional apresenta uma afirmação de reparação das gengivas em determinado período. Essa afirmação não deve ser interpretada como garantia de tratamento ou resultado para uma condição periodontal."
            )}


            ${question(
                "O EZENO substitui uma consulta de dentista?",
                "Não. Um dentífrico faz parte da higiene oral diária, mas não substitui avaliação, diagnóstico ou tratamento realizado por um dentista."
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

<section class="section ezeno-cta">

    <div class="container">


        <div class="showcase">


            <div class="showcase-content section-center">


                <span class="badge">
                    EZENO
                </span>


                <h2 class="section-title mt-3">

                    Mais do que um dentífrico.
                    Uma rotina de cuidado.

                </h2>


                <p class="lead">

                    Descubra o EZENO e conheça uma
                    proposta de higiene oral inspirada
                    no ginseng, na frescura e no cuidado diário.

                </p>


                <div class="hero-actions center mt-4">


                    <button
                        class="btn btn-primary"
                        id="ezenoWhats"
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


                <p class="ezeno-cta-disclaimer mt-4">

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

<div class="ezeno-detail-item">


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

function initialiseEzeno(){


    try{

        stagger(".ezeno-care-card");

        stagger(".ezeno-detail-card");

        stagger(".ezeno-feature-card");

        stagger(".ezeno-experience-card");

        stagger(".ezeno-certificate");

    }catch(error){

        console.warn(
            "EZENO animations:",
            error
        );

    }


    try{

        document
            .querySelectorAll(
                ".page-ezeno .btn"
            )
            .forEach(button => {

                ripple(button);

            });

    }catch(error){

        console.warn(
            "EZENO ripple:",
            error
        );

    }


    /*
     * Ingredients button
     */

    document
        .getElementById("ezenoIngredients")
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById("ezeno-ingredients")
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
            ".page-ezeno .ezeno-details-toggle"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".ezeno-information"
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
            ".page-ezeno .faq-question"
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
                            ".page-ezeno .faq-item"
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
        .getElementById("buyEzeno")
        ?.addEventListener(
            "click",
            openWhats
        );


    /*
     * WhatsApp
     */

    document
        .getElementById("ezenoWhats")
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
        "Olá AD Lifestyle! Tenho interesse no EZENO e gostaria de receber mais informações sobre o produto.";


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
