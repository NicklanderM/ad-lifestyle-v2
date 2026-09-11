/* ==========================================================
   AD LIFESTYLE — ABOUT.JS
   Premium About Us Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";

export function loadAbout(){

    applyTheme("angel");

    const app = document.getElementById("app");

    app.innerHTML = `
        ${hero()}
        ${whoWeAre()}
        ${ceo()}
        ${visionMissionValues()}
        ${journey()}
        ${partners()}
        ${principles()}
        ${cta()}
    `;

    initialiseAbout();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero page">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content">

            <span class="badge">

                Sobre a AD Lifestyle

            </span>

            <h1 class="hero-title">

                Uma visão.
                Um propósito.
                Um futuro.

            </h1>

            <p class="hero-sub">

                Somos uma organização orientada para o
                desenvolvimento humano, bem-estar,
                empreendedorismo e construção de novas
                possibilidades através da educação,
                liderança e inovação.

            </p>

            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    data-action="journey">

                    Conheça a nossa história

                </button>

                <button
                    class="btn btn-glass"
                    data-action="contact">

                    Fale connosco

                </button>

            </div>

        </div>

        <div class="hero-visual">

            <div class="hero-product">

                <div class="product-glow"></div>

                <img
                    src="assets/logo/logo.png"
                    alt="AD Lifestyle">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   QUEM SOMOS
   ========================================================== */

function whoWeAre(){

return `

<section class="section">

    <div class="container">

        <div class="split">

            <div class="split-content reveal-left">

                <span class="label">

                    Quem Somos

                </span>

                <h2 class="section-title">

                    Mais do que uma marca,
                    uma visão de futuro.

                </h2>

                <p class="text mt-3">

                    A AD Lifestyle é uma organização que nasceu
                    com o propósito de aproximar pessoas de
                    novas possibilidades de crescimento,
                    aprendizagem e desenvolvimento.

                </p>

                <p class="text mt-3">

                    A nossa actividade integra áreas ligadas
                    ao bem-estar, desenvolvimento pessoal,
                    educação empreendedora, liderança,
                    networking e apresentação de produtos e
                    soluções disponibilizados pelos nossos
                    parceiros.

                </p>

                <p class="text mt-3">

                    Acreditamos que uma transformação
                    sustentável começa quando uma pessoa
                    decide aprender, evoluir e agir. Por isso,
                    procuramos criar um ambiente onde conhecimento,
                    relacionamento e oportunidade caminham lado
                    a lado.

                </p>

            </div>

            <div class="split-image reveal-right">

                <div class="glass-panel">

                    <div class="section-center">

                        <span class="badge badge-gold">

                            1 Ano de Actividade

                        </span>

                        <h2 class="display mt-3">

                            1+

                        </h2>

                        <p class="text-lg">

                            Ano de aprendizagem,
                            construção e evolução.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   CEO
   ========================================================== */

function ceo(){

return `

<section class="section-sm">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">

                Liderança

            </span>

            <h2 class="section-title">

                A nossa liderança

            </h2>

            <p class="text-lg">

                Uma visão começa com pessoas dispostas
                a transformá-la em realidade.

            </p>

        </div>

        <div class="split mt-5">

            <div class="split-image reveal-left">

                <div class="card ceo-card">

                    <div class="avatar ceo-avatar">

                        <img
                            src="assets/images/abdoulahi.png"
                            alt="Abdoulahi Doucoure — CEO da AD Lifestyle">

                    </div>

                    <span class="badge badge-gold mt-3">

                        CEO & Founder

                    </span>

                    <h3 class="mt-2">

                        Abdoulahi Doucoure

                    </h3>

                    <p class="text">

                        Chief Executive Officer
                        da AD Lifestyle

                    </p>

                </div>

            </div>

            <div class="split-content reveal-right">

                <span class="label">

                    Abdoulahi Doucoure

                </span>

                <h2 class="section-title">

                    Liderar é transformar
                    visão em movimento.

                </h2>

                <p class="text mt-3">

                    Abdoulahi Doucoure é o CEO da AD Lifestyle
                    e uma das principais forças por detrás da
                    construção da nossa visão e identidade.

                </p>

                <p class="text mt-3">

                    A sua liderança assenta numa perspectiva
                    de crescimento contínuo, valorização das
                    pessoas, aprendizagem e criação de
                    oportunidades.

                </p>

                <p class="text mt-3">

                    Sob a sua orientação, a AD Lifestyle procura
                    construir uma presença sólida, profissional
                    e preparada para acompanhar a evolução
                    das novas formas de empreendedorismo,
                    comunicação e desenvolvimento humano.

                </p>

                <div class="icon-list mt-4">

                    ${feature("Visão orientada para o futuro")}

                    ${feature("Desenvolvimento de pessoas")}

                    ${feature("Liderança pelo exemplo")}

                    ${feature("Crescimento sustentável")}

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   VISÃO / MISSÃO / VALORES
   ========================================================== */

function visionMissionValues(){

return `

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">

                O que nos orienta

            </span>

            <h2 class="section-title">

                Visão, Missão & Valores

            </h2>

            <p class="text-lg">

                Princípios que definem a forma como pensamos,
                trabalhamos e construímos o nosso futuro.

            </p>

        </div>

        <div class="grid grid-3 mt-5">

            ${principleCard(
                "◈",
                "A Nossa Visão",
                `
                Tornar a AD Lifestyle uma referência em
                desenvolvimento humano, empreendedorismo,
                bem-estar e construção de oportunidades,
                começando em Angola e evoluindo para uma
                presença cada vez mais ampla.

                Queremos contribuir para uma geração de
                pessoas mais preparadas, conscientes,
                conectadas e capazes de transformar
                conhecimento em acção.
                `
            )}

            ${principleCard(
                "◆",
                "A Nossa Missão",
                `
                Criar um ecossistema de aprendizagem,
                relacionamento e oportunidades onde
                pessoas possam desenvolver competências,
                descobrir novas possibilidades e avançar
                na construção dos seus objectivos.

                Fazemo-lo através de conteúdos, experiências,
                eventos, produtos, formação, networking e
                parcerias estratégicas.
                `
            )}

            ${principleCard(
                "✦",
                "Os Nossos Valores",
                `
                Integridade nas relações.
                Respeito pelas pessoas.
                Aprendizagem contínua.
                Responsabilidade.
                Liderança.
                Disciplina.
                Colaboração.
                Inovação.
                Excelência.

                Acreditamos que resultados duradouros
                começam com princípios sólidos.
                `
            )}

        </div>

    </div>

</section>

`;

}

function principleCard(icon,title,text){

return `

<div class="card reveal">

    <div class="service-icon">

        ${icon}

    </div>

    <h3 class="mt-3">

        ${title}

    </h3>

    <p class="text mt-2">

        ${text}

    </p>

</div>

`;

}

/* ==========================================================
   A NOSSA JORNADA
   ========================================================== */

function journey(){

return `

<section class="section-sm" id="journey">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">

                A Nossa Jornada

            </span>

            <h2 class="section-title">

                Um ano de construção

            </h2>

        </div>

        <div class="timeline mt-5">

            ${journeyItem(
                "01",
                "O início",
                "O nascimento da AD Lifestyle e a definição da nossa identidade, propósito e direcção."
            )}

            ${journeyItem(
                "02",
                "Construção",
                "Desenvolvimento da nossa presença digital, comunicação, relacionamento e estrutura de actividade."
            )}

            ${journeyItem(
                "03",
                "Expansão",
                "Aproximação a pessoas, comunidades e parceiros com interesses alinhados com a nossa visão."
            )}

            ${journeyItem(
                "04",
                "O próximo capítulo",
                "Continuar a crescer, profissionalizar a nossa presença e criar cada vez mais valor para a nossa comunidade."
            )}

        </div>

    </div>

</section>

`;

}

function journeyItem(number,title,text){

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
   PARCEIROS
   ========================================================== */

function partners(){

return `

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">

                Ecossistema & Parcerias

            </span>

            <h2 class="section-title">

                Parceiros que fazem parte
                da nossa visão

            </h2>

            <p class="text-lg">

                A AD Lifestyle desenvolve a sua actividade
                em ligação com entidades que partilham
                diferentes dimensões da nossa visão.

            </p>

        </div>

        <div class="grid grid-2 mt-5">

            <div class="card reveal partner-card">

                <div class="partner-logo">

                    <img
                        src="assets/partners/bzzworld.png"
                        alt="BZZWorld">

                </div>

                <span class="badge mt-3">

                    Parceiro de Produtos

                </span>

                <h2 class="mt-3">

                    BZZWorld

                </h2>

                <p class="text mt-2">

                    A BZZWorld é uma empresa internacional
                    com actividade ligada a produtos e
                    soluções nas áreas de saúde, bem-estar
                    e estilo de vida, integrando investigação,
                    produção, vendas e serviços numa estrutura
                    global.

                </p>

                <p class="text mt-2">

                    Na nossa actividade, a BZZWorld representa
                    a componente de produtos e soluções que
                    apresentamos à nossa comunidade.

                </p>

                <a
                    href="https://www.bzzworld.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline mt-4">

                    Saber mais

                </a>

            </div>

            <div class="card reveal partner-card">

                <div class="partner-logo">

                    <img
                        src="assets/partners/a21.png"
                        alt="Academy Twenty One">

                </div>

                <span class="badge mt-3">

                    Parceiro de Desenvolvimento

                </span>

                <h2 class="mt-3">

                    Academy Twenty One

                </h2>

                <p class="text mt-2">

                    A Academy Twenty One é um sistema
                    internacional de suporte especializado
                    em desenvolvimento pessoal, liderança,
                    formação e na indústria de Network
                    Marketing.

                </p>

                <p class="text mt-2">

                    A sua componente de formação e
                    desenvolvimento complementa a nossa
                    visão de aprendizagem contínua,
                    liderança e crescimento pessoal.

                </p>

                <a
                    href="https://www.academytwentyone.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline mt-4">

                    Saber mais

                </a>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   PRINCÍPIOS
   ========================================================== */

function principles(){

return `

<section class="section-sm">

    <div class="container">

        <div class="glass-panel reveal">

            <div class="section-center">

                <span class="badge badge-gold">

                    O nosso compromisso

                </span>

                <h2 class="section-title mt-3">

                    Crescer sem perder
                    aquilo em que acreditamos.

                </h2>

                <p class="text-lg mt-3">

                    Para nós, crescimento não significa apenas
                    números. Significa pessoas mais preparadas,
                    relações mais fortes, conhecimento partilhado
                    e capacidade de transformar ideias em acções.

                </p>

                <p class="text mt-3">

                    Queremos construir uma organização que seja
                    reconhecida pela sua profissionalidade,
                    credibilidade, consistência e pela forma como
                    trata as pessoas que fazem parte da sua jornada.

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

<section class="section">

    <div class="container">

        <div class="glass-panel section-center">

            <span class="badge badge-gold">

                O próximo capítulo começa agora

            </span>

            <h2 class="section-title mt-3">

                Faça parte da nossa jornada

            </h2>

            <p class="text-lg">

                Se procura conhecimento, desenvolvimento,
                novas conexões ou simplesmente quer conhecer
                melhor o que fazemos, estamos disponíveis
                para conversar.

            </p>

            <div class="hero-actions center mt-4">

                <button
                    class="btn btn-primary"
                    data-action="contact">

                    Falar connosco

                </button>

                <button
                    class="btn btn-outline"
                    data-action="home">

                    Voltar ao início

                </button>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   FEATURE
   ========================================================== */

function feature(text){

return `

<div class="icon-item">

    <div class="icon-circle">

        ✓

    </div>

    <div>

        <strong>${text}</strong>

    </div>

</div>

`;

}

/* ==========================================================
   INTERACTIVIDADE
   ========================================================== */

function initialiseAbout(){

    initialiseJourney();

    initialiseContact();

    initialiseHome();

}

/* ==========================================================
   JORNADA
   ========================================================== */

function initialiseJourney(){

    document
        .querySelector('[data-action="journey"]')
        ?.addEventListener("click",()=>{

            document
                .getElementById("journey")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

}

/* ==========================================================
   CONTACTO
   ========================================================== */

function initialiseContact(){

    document
        .querySelectorAll('[data-action="contact"]')
        .forEach(button=>{

            button.addEventListener("click",()=>{

                const message = encodeURIComponent(
                    "Olá AD Lifestyle! Gostaria de conhecer melhor a AD Lifestyle e os seus projectos."
                );

                window.open(
                    `https://wa.me/244924964666?text=${message}`,
                    "_blank"
                );

            });

        });

}

/* ==========================================================
   HOME
   ========================================================== */

function initialiseHome(){

    document
        .querySelector('[data-action="home"]')
        ?.addEventListener("click",()=>{

            window.AD?.navigate("/");

        });

}
