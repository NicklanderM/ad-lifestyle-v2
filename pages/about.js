/* ==========================================================
   AD LIFESTYLE — ABOUT.JS
   Premium Institutional About Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";

export function loadAbout(){

     applyTheme("default");

    const app = document.getElementById("app");

app.innerHTML = `
    <div class="about-page">

        ${hero()}
        ${whoWeAre()}
        ${ceo()}
        ${visionMissionValues()}
        ${journey()}
        ${partners()}
        ${principles()}
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

<section class="hero page about-hero">

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

                Uma organização orientada para o desenvolvimento
                humano, bem-estar, educação empreendedora,
                liderança e construção de novas possibilidades.

            </p>

            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    data-action="journey">

                    ${icon("arrow-down")}

                    Conheça a nossa história

                </button>

                <button
                    class="btn btn-glass"
                    data-action="contact">

                    ${icon("message")}

                    Fale connosco

                </button>

            </div>

        </div>

        <div class="hero-visual">

            <div class="hero-product about-leader-visual">

                <div class="product-glow"></div>

                <img
                    src="assets/images/abdoulahi.png"
                    alt="Abdoulahi Doucoure — CEO da AD Lifestyle">

                <div class="hero-leader-caption">

                    <span>

                        CEO & Founder

                    </span>

                    <strong>

                        Abdoulahi Doucoure

                    </strong>

                </div>

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

        <div class="split about-introduction">

            <div class="split-content reveal-left">

                <span class="label">

                    Quem Somos

                </span>

                <h2 class="section-title">

                    Mais do que uma marca,
                    uma visão de futuro.

                </h2>

                <p class="text mt-3">

                    A AD Lifestyle nasceu com o propósito de
                    aproximar pessoas de conhecimento, novas
                    possibilidades de crescimento e caminhos
                    de desenvolvimento pessoal e profissional.

                </p>

                <p class="text mt-3">

                    A nossa actividade integra bem-estar,
                    desenvolvimento pessoal, educação
                    empreendedora, liderança, networking,
                    comunicação e apresentação de produtos
                    e soluções disponibilizados pelos nossos
                    parceiros.

                </p>

                <p class="text mt-3">

                    Acreditamos que uma transformação sustentável
                    começa quando uma pessoa decide aprender,
                    evoluir e agir.

                </p>

            </div>

            <div class="split-image reveal-right">

                <div class="bento about-bento">

                    <div class="card about-bento-main">

                        <div class="service-icon">

                            ${icon("organization")}

                        </div>

                        <span class="label mt-3">

                            Organização

                        </span>

                        <h3 class="mt-2">

                            Uma estrutura pensada
                            para crescer.

                        </h3>

                        <p class="text mt-2">

                            Processos, comunicação e relacionamento
                            orientados para uma construção sólida
                            e sustentável.

                        </p>

                    </div>

                    <div class="card">

                        <div class="service-icon">

                            ${icon("globe")}

                        </div>

                        <h4 class="mt-2">

                            Visão Internacional

                        </h4>

                        <p class="text mt-1">

                            Preparação para novos horizontes.

                        </p>

                    </div>

                    <div class="card">

                        <div class="service-icon">

                            ${icon("graduation")}

                        </div>

                        <h4 class="mt-2">

                            Academy 21

                        </h4>

                        <p class="text mt-1">

                            Educação, liderança e evolução.

                        </p>

                    </div>

                    <div class="card">

                        <div class="service-icon">

                            ${icon("wellness")}

                        </div>

                        <h4 class="mt-2">

                            Bem-estar

                        </h4>

                        <p class="text mt-1">

                            Saúde, prevenção e longevidade.

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

                A pessoa por detrás da visão

            </h2>

            <p class="text-lg">

                Uma visão ganha força quando existe liderança
                preparada para a transformar em movimento.

            </p>

        </div>

        <div class="split mt-5">

            <div class="split-image reveal-left">

                <div class="ceo-profile">

                    <div class="ceo-photo">

                        <img
                            src="assets/images/abdoulahi.png"
                            alt="Abdoulahi Doucoure">

                    </div>

                    <div class="ceo-profile-info">

                        <span class="badge badge-gold">

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
                    construção da nossa visão, identidade e
                    direcção estratégica.

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

                    ${feature(
                        "eye",
                        "Visão orientada para o futuro",
                        "Pensar para além do presente."
                    )}

                    ${feature(
                        "users",
                        "Desenvolvimento de pessoas",
                        "Crescer através das pessoas."
                    )}

                    ${feature(
                        "award",
                        "Liderança pelo exemplo",
                        "Praticar aquilo que defendemos."
                    )}

                    ${feature(
                        "chart",
                        "Crescimento sustentável",
                        "Construir com consistência."
                    )}

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

                Três pilares que orientam as nossas decisões,
                relações e ambição.

            </p>

        </div>

        <div class="grid grid-3 mt-5">

            ${principleCard(
                "eye",
                "A Nossa Visão",
                "Futuro",
                `
                Tornar a AD Lifestyle uma referência em
                desenvolvimento humano, empreendedorismo,
                bem-estar e construção de oportunidades,
                começando em Angola e evoluindo para uma
                presença cada vez mais ampla.
                `
            )}

            ${principleCard(
                "target",
                "A Nossa Missão",
                "Acção",
                `
                Criar um ecossistema de aprendizagem,
                relacionamento e oportunidades onde
                pessoas possam desenvolver competências,
                descobrir novas possibilidades e avançar
                na construção dos seus objectivos.
                `
            )}

            ${principleCard(
                "gem",
                "Os Nossos Valores",
                "Princípios",
                `
                Integridade, respeito, aprendizagem contínua,
                responsabilidade, liderança, disciplina,
                colaboração, inovação e excelência.
                `
            )}

        </div>

    </div>

</section>

`;

}

function principleCard(iconType,title,subtitle,text){

return `

<div class="card reveal principle-card">

    <div class="principle-card-header">

        <div class="service-icon">

            ${icon(iconType)}

        </div>

        <span class="principle-index">

            ${subtitle}

        </span>

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

                Um ano de construção.

                <br>

                O próximo capítulo começa agora.

            </h2>

            <p class="text-lg">

                Cada etapa representa uma decisão,
                uma aprendizagem e um passo em frente.

            </p>

        </div>

        <div class="timeline premium-timeline mt-5">

            ${journeyItem(
                "01",
                "O início",
                "O nascimento da AD Lifestyle e a definição da nossa identidade, propósito e direcção."
            )}

            ${journeyItem(
                "02",
                "Construção",
                "Desenvolvimento da presença digital, comunicação, relacionamento e estrutura de actividade."
            )}

            ${journeyItem(
                "03",
                "Expansão",
                "Aproximação a pessoas, comunidades e parceiros com interesses alinhados com a nossa visão."
            )}

            ${journeyItem(
                "04",
                "O próximo capítulo",
                "Profissionalizar, consolidar e preparar a organização para novas possibilidades de crescimento."
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

        <span>

            ${number}

        </span>

    </div>

    <div class="timeline-content">

        <span class="label">

            ETAPA ${number}

        </span>

        <h3 class="mt-1">

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
   PARCEIROS / ECOSSISTEMA
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

                Uma visão construída
                através de conexões.

            </h2>

            <p class="text-lg">

                Trabalhamos para desenvolver conhecimento,
                relacionamento e preparação através de
                diferentes componentes do nosso ecossistema.

            </p>

        </div>

        <div class="grid grid-2 mt-5">

            <div class="card reveal partner-card">

                <div class="partner-card-top">

                    <div class="partner-logo">

                        <img
                            src="assets/images/bzzworld.png"
                            alt="BZZWORLD">

                    </div>

                    <span class="badge">

                        Parceiro Internacional

                    </span>

                </div>

                <h2 class="mt-3">

                    BZZWORLD

                </h2>

                <p class="text mt-2">

                    A BZZWORLD representa a componente
                    internacional ligada a produtos,
                    saúde, bem-estar e lifestyle que
                    integra a nossa visão de futuro.

                </p>

                <div class="icon-list compact mt-4">

                    ${feature(
                        "globe",
                        "Parceiro internacional",
                        "Presença e visão global."
                    )}

                    ${feature(
                        "wellness",
                        "Produtos Premium",
                        "Saúde, bem-estar e lifestyle."
                    )}

                </div>

                <div class="mt-4">

                    <span class="text">

                        A AD Lifestyle posiciona-se actualmente
                        numa fase de preparação e desenvolvimento,
                        acompanhando a evolução da oportunidade
                        internacional.

                    </span>

                </div>

            </div>


            <div class="card reveal partner-card">

                <div class="partner-card-top">

                    <div class="partner-logo">

                        <img
                            src="assets/images/a21.png"
                            alt="Academy Twenty One">

                    </div>

                    <span class="badge">

                        Desenvolvimento

                    </span>

                </div>

                <h2 class="mt-3">

                    Academy Twenty One

                </h2>

                <p class="text mt-2">

                    A Academy Twenty One representa uma
                    componente de formação, liderança,
                    desenvolvimento pessoal e educação
                    empreendedora.

                </p>

                <div class="icon-list compact mt-4">

                    ${feature(
                        "graduation",
                        "Formação",
                        "Aprendizagem contínua."
                    )}

                    ${feature(
                        "award",
                        "Liderança",
                        "Desenvolvimento de pessoas."
                    )}

                </div>

                <div class="mt-4">

                    <span class="text">

                        O conhecimento e a formação são elementos
                        fundamentais na construção da nossa
                        preparação para o futuro.

                    </span>

                </div>

            </div>

        </div>

        <div class="glass-panel mt-5 reveal">

            <div class="section-center">

                <span class="badge badge-gold">

                    Posicionamento estratégico

                </span>

                <p class="text-lg mt-3">

                    A AD Lifestyle actua actualmente como uma
                    organização independente de preparação,
                    educação e desenvolvimento humano,
                    posicionando-se para integrar futuramente
                    a expansão oficial da BZZWORLD em Angola.

                </p>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   PORQUE ESTAMOS A CONSTRUIR ISTO?
   ========================================================== */

function principles(){

return `

<section class="section-sm">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">

                A nossa construção

            </span>

            <h2 class="section-title">

                Porque estamos a construir isto?

            </h2>

            <p class="text-lg">

                Porque uma grande visão precisa de uma
                estrutura preparada para a sustentar.

            </p>

        </div>

        <div class="grid grid-4 mt-5">

            ${strategicCard(
                "organization",
                "Organização",
                "Processos profissionais desde o primeiro dia."
            )}

            ${strategicCard(
                "sparkles",
                "Imagem Premium",
                "Uma identidade visual consistente, elegante e preparada para representar a nossa visão."
            )}

            ${strategicCard(
                "users",
                "Equipa preparada",
                "Conhecimento, liderança e desenvolvimento através da Academy Twenty One."
            )}

            ${strategicCard(
                "chart",
                "Escalabilidade",
                "Uma estrutura pensada para crescer e acompanhar novas oportunidades."
            )}

        </div>

    </div>

</section>

`;

}

function strategicCard(iconType,title,text){

return `

<div class="card reveal strategic-card">

    <div class="service-icon">

        ${icon(iconType)}

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
   CTA
   ========================================================== */

function cta(){

return `

<section class="section">

    <div class="container">

        <div class="showcase">

            <div class="showcase-bg"></div>

            <div class="showcase-content section-center">

                <span class="badge badge-gold">

                    O próximo capítulo

                </span>

                <h2 class="section-title mt-2">

                    Estamos a construir
                    uma referência nacional.

                </h2>

                <p class="text-lg">

                    Uma visão começa com uma ideia.
                    Uma organização transforma essa ideia
                    em movimento.

                </p>

                <div class="hero-actions center mt-4">

                    <button
                        class="btn btn-primary"
                        data-action="contact">

                        ${icon("whatsapp")}

                        Falar no WhatsApp

                    </button>

                    <button
                        class="btn btn-outline"
                        data-action="products">

                        ${icon("box")}

                        Explorar Produtos

                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   FEATURE
   ========================================================== */

function feature(iconType,title,text){

return `

<div class="icon-item">

    <div class="icon-circle">

        ${icon(iconType)}

    </div>

    <div>

        <strong>

            ${title}

        </strong>

        <p class="text">

            ${text}

        </p>

    </div>

</div>

`;

}

/* ==========================================================
   ÍCONES SVG
   ========================================================== */

function icon(type){

    const icons = {

        "arrow-down": `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4v13m0 0 5-5m-5 5-5-5"/>
            </svg>
        `,

        message: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3v3l4-3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"/>
            </svg>
        `,

        whatsapp: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.1 1.6 5.8L.1 24l6.5-1.7a11.9 11.9 0 0 0 5.5 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.1-3.6-8.3ZM12.2 21.6h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.3a9.7 9.7 0 1 1 8.3 4.6Z"/>
            </svg>
        `,

        organization: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <path d="M8 8h8M8 12h8M8 16h5"/>
            </svg>
        `,

        globe: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9"/>
                <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>
            </svg>
        `,

        graduation: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m3 9 9-5 9 5-9 5-9-5Z"/>
                <path d="M7 11v5c2 2 8 2 10 0v-5M21 9v6"/>
            </svg>
        `,

        wellness: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21S4 16 4 9a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 7-8 12-8 12Z"/>
                <path d="M12 7v7M8.5 10.5h7"/>
            </svg>
        `,

        eye: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/>
                <circle cx="12" cy="12" r="2.5"/>
            </svg>
        `,

        target: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="12" cy="12" r="1"/>
            </svg>
        `,

        gem: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 3 6 0 6 0 3 5-9 13L3 8l3-5Z"/>
                <path d="m3 8 18 0M9 3l3 5 3-5M9 8l3 13 3-13"/>
            </svg>
        `,

        users: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="9" cy="8" r="3"/>
                <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5"/>
                <path d="M16 11c2.5.2 4 1.6 4 4M16 5a3 3 0 0 1 0 6"/>
            </svg>
        `,

        award: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="5"/>
                <path d="m9 12-1 9 4-2 4 2-1-9"/>
            </svg>
        `,

        chart: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 19V5M4 19h17"/>
                <path d="m7 15 4-4 3 2 6-7"/>
            </svg>
        `,

        sparkles: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>
            </svg>
        `,

        box: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/>
                <path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>
            </svg>
        `

    };

    return icons[type] || "";

}

/* ==========================================================
   INTERACTIVIDADE
   ========================================================== */

function initialiseAbout(){

    initialiseJourney();

    initialiseContact();

    initialiseHome();

    initialiseProducts();

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

    /*
       Mantido para compatibilidade com a arquitectura
       existente do projecto.
    */

}

/* ==========================================================
   PRODUTOS
   ========================================================== */

function initialiseProducts(){

    document
        .querySelector('[data-action="products"]')
        ?.addEventListener("click",()=>{

            if(window.AD?.navigate){

                window.AD.navigate("/products");

                return;

            }

            window.location.hash = "#/products";

        });

}
