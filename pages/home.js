/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Premium Institutional Landing Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { stagger, ripple } from "../js/animations.js";

/* ==========================================================
   LOAD HOME
   ========================================================== */

export function loadHome(){

    applyTheme("default");

    const app = document.getElementById("app");

    if(!app) return;

    app.innerHTML = `

        <div class="page-home">

            ${hero()}

            ${brandIntroduction()}

            ${pillars()}

            ${featuredProducts()}

            ${ecosystem()}

            ${event()}

            ${socialPresence()}

            ${finalCTA()}

        </div>

    `;

    initialiseHome();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero home-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="label">
                AD Lifestyle
            </span>

            <span class="home-eyebrow">
                WELLNESS · TECHNOLOGY · PERSONAL GROWTH
            </span>

            <h1 class="hero-title">
                Uma nova forma
                <span>de viver melhor.</span>
            </h1>

            <p class="hero-sub">
                Descubra um ecossistema que aproxima bem-estar,
                inovação, desenvolvimento pessoal e oportunidades
                de uma experiência de Lifestyle mais consciente.
            </p>

            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    id="exploreProducts">

                    Explorar Produtos

                </button>

                <button
                    class="btn btn-glass"
                    id="aboutButton">

                    Conhecer a AD Lifestyle

                </button>

            </div>

            <div class="home-hero-highlights">

                <div>

                    <strong>
                        Wellness
                    </strong>

                    <span>
                        Bem-estar e autocuidado
                    </span>

                </div>

                <div>

                    <strong>
                        Smart Living
                    </strong>

                    <span>
                        Tecnologia integrada no quotidiano
                    </span>

                </div>

                <div>

                    <strong>
                        Academy 21
                    </strong>

                    <span>
                        Educação e desenvolvimento
                    </span>

                </div>

            </div>

        </div>

        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>

                <div class="home-hero-orbit"></div>

                <img
                    class="parallax"
                    data-speed="35"
                    src="./assets/products/angel.png"
                    alt="AD Lifestyle">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   BRAND INTRODUCTION
   ========================================================== */

function brandIntroduction(){

return `

<section
    id="about"
    class="section home-about">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Quem Somos
            </span>

            <h2 class="section-title">
                Mais do que uma marca.
                <span>Um ecossistema.</span>
            </h2>

            <p class="lead">
                A AD Lifestyle reúne uma visão de bem-estar,
                inovação, aprendizagem contínua e desenvolvimento
                pessoal, aproximando pessoas de produtos,
                experiências e oportunidades.
            </p>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-7 reveal">

                <span class="label">
                    A nossa visão
                </span>

                <h3>
                    Elevar pessoas através
                    de conhecimento, experiência
                    e inovação.
                </h3>

                <p class="text mt-2">
                    A AD Lifestyle foi pensada para criar uma ponte
                    entre soluções de bem-estar, tecnologias de
                    Lifestyle e uma cultura de aprendizagem e evolução.
                </p>

            </div>

            <div class="bento-card span-5 reveal delay-1">

                <span class="label">
                    Powered by
                </span>

                <h3>
                    Academy Twenty One
                </h3>

                <p class="text mt-2">
                    Desenvolvimento pessoal, liderança,
                    educação empreendedora e aprendizagem contínua
                    fazem parte da visão do nosso ecossistema.
                </p>

            </div>

            <div class="bento-card span-4 reveal delay-1">

                <div class="metric">

                    <div class="metric-number">
                        01
                    </div>

                    <div class="metric-label">
                        Visão integrada
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">
                        02
                    </div>

                    <div class="metric-label">
                        Bem-estar + tecnologia
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-3">

                <div class="metric">

                    <div class="metric-number">
                        03
                    </div>

                    <div class="metric-label">
                        Conhecimento + oportunidade
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   PILLARS
   ========================================================== */

function pillars(){

return `

<section class="section-sm home-pillars">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                O que nos move
            </span>

            <h2 class="section-title">
                Quatro dimensões.
                <span>Uma experiência.</span>
            </h2>

        </div>

        <div class="grid grid-4 mt-6">

            ${pillar(
                "01",
                "Bem-estar",
                "Soluções e experiências orientadas para uma rotina de maior conforto e equilíbrio."
            )}

            ${pillar(
                "02",
                "Inovação",
                "Produtos e conceitos que aproximam tecnologia e Lifestyle."
            )}

            ${pillar(
                "03",
                "Desenvolvimento",
                "Conhecimento, liderança, comunicação e crescimento pessoal."
            )}

            ${pillar(
                "04",
                "Oportunidade",
                "Uma visão empreendedora ligada à aprendizagem e construção de novas possibilidades."
            )}

        </div>

    </div>

</section>

`;

}

function pillar(number,title,text){

return `

<div class="card service-card reveal">

    <div class="service-icon">
        ${number}
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
   FEATURED PRODUCTS
   ========================================================== */

function featuredProducts(){

return `

<section
    id="products"
    class="section home-products">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Colecção em destaque
            </span>

            <h2 class="section-title">
                Descubra os nossos
                <span>universos de produto.</span>
            </h2>

            <p class="lead">
                Uma selecção de soluções que representam diferentes
                dimensões do universo AD Lifestyle.
            </p>

        </div>

        <div class="grid grid-2 mt-6">

            ${productCard(
                "angel",
                "Cuidado Feminino",
                "Angel Moon",
                "./assets/products/angel.png",
                "Conforto, cuidado e uma experiência pensada para o universo feminino."
            )}

            ${productCard(
                "ezeno",
                "Saúde Oral",
                "EZENO",
                "./assets/products/ezeno.png",
                "Uma proposta de cuidado oral integrada numa rotina de higiene e autocuidado."
            )}

            ${productCard(
                "zenbru",
                "Café & Lifestyle",
                "Zenbru",
                "./assets/products/zenbru.png",
                "Café Robusta combinado com ginseng e gengibre numa experiência de sabor distinta."
            )}

            ${productCard(
                "ismarts3",
                "Smart Living",
                "iSMART S3",
                "./assets/products/ismarts3.png",
                "Um sistema de sono apresentado através de um cobertor inteligente e uma almofada Gravidade Zero."
            )}

        </div>

        <div class="section-center mt-6 reveal">

            <p class="text">
                A colecção AD Lifestyle inclui outras soluções
                e experiências para diferentes necessidades e interesses.
            </p>

            <button
                class="btn btn-primary mt-3"
                id="viewAllProducts">

                Ver todos os produtos

            </button>

        </div>

    </div>

</section>

`;

}

function productCard(
    route,
    category,
    title,
    image,
    description
){

return `

<article
    class="card product-card reveal"
    data-product="${route}">

    <div class="product-image">

        <div class="orb"></div>

        <img
            src="${image}"
            alt="${title}"
            loading="lazy">

    </div>

    <div class="product-info">

        <span class="product-category">
            ${category}
        </span>

        <h3>
            ${title}
        </h3>

        <p class="text mt-1">
            ${description}
        </p>

        <span class="product-link">
            Explorar produto →
        </span>

    </div>

</article>

`;

}

/* ==========================================================
   ECOSYSTEM
   ========================================================== */

function ecosystem(){

return `

<section class="section home-ecosystem">

    <div class="container">

        <div class="showcase">

            <div class="showcase-content">

                <div class="split">

                    <div class="split-image reveal-left">

                        <div class="home-ecosystem-visual">

                            <div class="home-ecosystem-number">
                                21
                            </div>

                            <span>
                                ACADEMY TWENTY ONE
                            </span>

                            <small>
                                Conhecimento · Liderança · Desenvolvimento
                            </small>

                        </div>

                    </div>

                    <div class="split-content reveal-right">

                        <span class="label">
                            Academy Twenty One
                        </span>

                        <h2 class="section-title">
                            O produto é apenas
                            <span>uma parte da jornada.</span>
                        </h2>

                        <p class="text-lg">
                            A AD Lifestyle também integra uma dimensão
                            educacional e empreendedora, aproximando
                            pessoas de conhecimento, liderança,
                            comunicação, networking e desenvolvimento pessoal.
                        </p>

                        <div class="icon-list mt-4">

                            ${iconItem(
                                "01",
                                "Desenvolvimento pessoal",
                                "Aprendizagem contínua e evolução individual."
                            )}

                            ${iconItem(
                                "02",
                                "Educação empreendedora",
                                "Conhecimento orientado para novas possibilidades."
                            )}

                            ${iconItem(
                                "03",
                                "Liderança & networking",
                                "Construção de relações e desenvolvimento de competências."
                            )}

                            ${iconItem(
                                "04",
                                "Visão internacional",
                                "Uma perspectiva ligada a oportunidades e conexão global."
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

function iconItem(number,title,text){

return `

<div class="icon-item">

    <div class="icon-circle">
        ${number}
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
   EVENT
   ========================================================== */

function event(){

return `

<section class="section home-event">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Próximo evento
            </span>

            <h2 class="section-title">
                Conhecimento,
                experiência e <span>oportunidade.</span>
            </h2>

            <p class="lead">
                Fique por dentro das próximas experiências AD Lifestyle
                e Academy Twenty One.
            </p>

        </div>

        <div class="showcase mt-6">

            <div class="showcase-content">

                <div class="split">

                    <div class="split-image reveal-left">

                        <img
                            src="./assets/hotel/fly.png"
                            alt="Fly Hotel"
                            loading="lazy">

                    </div>

                    <div class="split-content reveal-right">

                        <span class="label">
                            20 Setembro 2026
                        </span>

                        <h2 class="section-title">
                            Grande Apresentação
                            de Dupla Oportunidade
                        </h2>

                        <p class="text-lg">
                            Uma experiência que reúne saúde,
                            bem-estar, longevidade, aprendizagem
                            e negócios internacionais.
                        </p>

                        <div class="icon-list mt-4">

                            ${iconItem(
                                "📅",
                                "Domingo · 20 de Setembro de 2026",
                                "Data do evento."
                            )}

                            ${iconItem(
                                "🕒",
                                "15h00",
                                "Início do encontro."
                            )}

                            ${iconItem(
                                "📍",
                                "Fly Hotel · Luanda",
                                "Zona do antigo Aeroporto Doméstico."
                            )}

                            ${iconItem(
                                "🎟️",
                                "2.500 Kz",
                                "Ingresso individual."
                            )}

                        </div>

                        <div class="mt-4">

                            <button
                                class="btn btn-primary"
                                id="openEvent">

                                Ver evento completo

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   SOCIAL PRESENCE
   ========================================================== */

function socialPresence(){

return `

<section class="section-sm home-social">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                AD Lifestyle Digital
            </span>

            <h2 class="section-title">
                Acompanhe a nossa
                <span>evolução.</span>
            </h2>

            <p class="lead">
                Produtos, eventos, conhecimento, Lifestyle e novidades
                directamente nos nossos canais digitais.
            </p>

        </div>

        <div class="grid grid-3 mt-6">

            ${socialChannel(
                "Instagram",
                "@adlifestyle.ao",
                "Conteúdo visual, produtos, experiências e novidades.",
                "Instagram"
            )}

            ${socialChannel(
                "Facebook",
                "AD Lifestyle",
                "Actualizações, eventos e conteúdos da comunidade.",
                "Facebook"
            )}

            ${socialChannel(
                "TikTok",
                "@adbdlifestyle",
                "Conteúdo dinâmico, educação e Lifestyle.",
                "TikTok"
            )}

        </div>

    </div>

</section>

`;

}

function socialChannel(
    platform,
    handle,
    description,
    label
){

return `

<div class="card service-card reveal">

    <div class="service-icon">
        ${label.charAt(0)}
    </div>

    <span class="product-category">
        ${platform}
    </span>

    <h3>
        ${handle}
    </h3>

    <p class="text mt-2">
        ${description}
    </p>

</div>

`;

}

/* ==========================================================
   FINAL CTA
   ========================================================== */

function finalCTA(){

return `

<section class="section home-final-cta">

    <div class="container">

        <div class="showcase">

            <div class="showcase-content section-center">

                <span class="badge">
                    AD Lifestyle
                </span>

                <h2 class="section-title mt-3">
                    O próximo passo
                    começa com uma descoberta.
                </h2>

                <p class="lead">
                    Explore os produtos, descubra as nossas experiências
                    e entre em contacto com a AD Lifestyle.
                </p>

                <div class="hero-actions center mt-4">

                    <button
                        class="btn btn-primary"
                        id="finalProducts">

                        Explorar Produtos

                    </button>

                    <button
                        class="btn btn-glass"
                        id="whatsappCTA">

                        Falar no WhatsApp

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

function initialiseHome(){

    const root = document.querySelector(".page-home");

    if(!root) return;

    /* ------------------------------------------------------
       ANIMATIONS
       ------------------------------------------------------ */

    stagger(".page-home .product-card");
    stagger(".page-home .service-card");

    root
        .querySelectorAll(".btn")
        .forEach(button=>{

            ripple(button);

        });

    /* ------------------------------------------------------
       HERO — PRODUCTS
       ------------------------------------------------------ */

    root
        .querySelector("#exploreProducts")
        ?.addEventListener("click",()=>{

            root
                .querySelector("#products")
                ?.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

        });

    /* ------------------------------------------------------
       HERO — ABOUT
       ------------------------------------------------------ */

    root
        .querySelector("#aboutButton")
        ?.addEventListener("click",()=>{

            root
                .querySelector("#about")
                ?.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

        });

    /* ------------------------------------------------------
       PRODUCT CARDS
       ------------------------------------------------------ */

    root
        .querySelectorAll("[data-product]")
        .forEach(card=>{

            card.addEventListener("click",()=>{

                const route =
                    card.dataset.product;

                if(!route) return;

                navigate("/" + route);

            });

        });

    /* ------------------------------------------------------
       VIEW ALL PRODUCTS
       ------------------------------------------------------ */

    root
        .querySelector("#viewAllProducts")
        ?.addEventListener("click",()=>{

            navigate("/products");

        });

    /* ------------------------------------------------------
       EVENT
       ------------------------------------------------------ */

    root
        .querySelector("#openEvent")
        ?.addEventListener("click",()=>{

            navigate("/events");

        });

    /* ------------------------------------------------------
       FINAL PRODUCTS CTA
       ------------------------------------------------------ */

    root
        .querySelector("#finalProducts")
        ?.addEventListener("click",()=>{

            root
                .querySelector("#products")
                ?.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

        });

    /* ------------------------------------------------------
       WHATSAPP
       ------------------------------------------------------ */

    root
        .querySelector("#whatsappCTA")
        ?.addEventListener("click",()=>{

            const message =
                "Olá AD Lifestyle! Gostaria de conhecer melhor os produtos e soluções disponíveis.";

            window.open(
                `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
                "_blank"
            );

        });

}
