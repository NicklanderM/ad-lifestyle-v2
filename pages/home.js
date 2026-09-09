/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Luxury Wellness Landing Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { stagger, ripple } from "../js/animations.js";

export function loadHome(){

    applyTheme("default");

    const app=document.getElementById("app");

    app.innerHTML=`

        ${hero()}

        ${about()}

        ${products()}

        ${services()}

        ${event()}

        ${testimonials()}

        ${instagram()}

        ${cta()}

    `;

    initialiseHome();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return`

<section class="hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="label">
                Luxury Wellness
            </span>

            <h1 class="hero-title">
                Eleve o seu
                Bem-estar
            </h1>

            <p class="hero-sub">
                Descubra uma experiência exclusiva de saúde,
                bem-estar, longevidade, medicina holística
                e negócios internacionais com a AD Lifestyle.
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

                    Quem Somos

                </button>

            </div>

        </div>

        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>

                <img
                    class="parallax"
                    data-speed="35"
                    src="./assets/products/angel.png"
                    alt="Angel Moon">


            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   ABOUT
   ========================================================== */

function about(){

return`

<section id="about" class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Quem Somos
            </span>

            <h2 class="section-title">
                Mais do que produtos.
                Um verdadeiro estilo de vida.
            </h2>

            <p class="lead">
                A AD Lifestyle nasce com a missão de elevar
                a qualidade de vida através da saúde preventiva,
                medicina holística, bem-estar, longevidade
                e desenvolvimento humano.
            </p>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-7 reveal">

                <span class="label">Missão</span>

                <h3>
                    Transformar vidas através do conhecimento
                    e do bem-estar.
                </h3>

                <p class="text mt-2">
                    Acreditamos que pessoas saudáveis,
                    conscientes e financeiramente livres
                    constroem famílias mais fortes e uma
                    sociedade melhor.
                </p>

            </div>

            <div class="bento-card span-5 reveal delay-1">

                <span class="label">Academy 21</span>

                <h3>
                    Liderança & Negócios Internacionais
                </h3>

            </div>

            <div class="bento-card span-4 reveal delay-1">

                <div class="metric">

                    <div
                        class="metric-number"
                        data-counter="12000">

                        0

                    </div>

                    <div class="metric-label">
                        Pessoas impactadas
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">
                        4
                    </div>

                    <div class="metric-label">
                        Linhas de produtos
                    </div>

                </div>

            </div>

            <div class="bento-card span-4 reveal delay-3">

                <div class="metric">

                    <div class="metric-number">
                        21
                    </div>

                    <div class="metric-label">
                        Academy Twenty One
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   PRODUCTS
   ========================================================== */

function products(){

return`

<section id="products" class="section-sm">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Produtos Premium
            </span>

            <h2 class="section-title">
                Escolha o seu universo de bem-estar
            </h2>

        </div>

        <div class="grid grid-2 mt-6">

            ${productCard(
                "angel",
                "Cuidado Feminino",
                "Angel Moon",
                "./assets/products/angel.png"
            )}

            ${productCard(
                "ezeno",
                "Saúde Oral",
                "EZENO",
                "./assets/products/ezeno.png"
            )}

            ${productCard(
                "zenbru",
                "Café Funcional",
                "Zenbru",
                "./assets/products/zenbru.png"
            )}

            ${productCard(
                "alpha",
                "Performance",
                "Alpha Vmax",
                "./assets/products/alpha.png"
            )}

            ${productCard(
                "alphameta",
                "Nutrição",
                "AlphaMeta",
                "./assets/products/alphameta.png"
            )}

            ${productCard(
                "minoseed",
                "Beleza & Bem-estar",
                "Minoseed",
                "./assets/products/minoseed.png"
            )}

            ${productCard(
                "evador",
                "Beleza",
                "Evador",
                "./assets/products/evador.png"
            )}

            ${productCard(
                "alphaspin-ultra",
                "Smart Living",
                "AlphaSpin Ultra",
                "./assets/products/alphaspin-ultra.png"
            )}

            ${productCard(
                "ismarts3",
                "Smart Living",
                "iSMARTS3",
                "./assets/products/ismarts3.png"
            )}

        </div>

    </div>

</section>

`;

}

function productCard(route,category,title,image){

return`

<div
    class="card product-card reveal"
    data-product="${route}">

    <div class="product-image">

        <div class="orb"></div>

        <img
            src="${image}"
            alt="${title}">

    </div>

    <div class="product-info">

        <span class="product-category">
            ${category}
        </span>

        <h3>${title}</h3>

        <p class="text mt-1">
            Descubra a composição,
            benefícios e experiência completa.
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   SERVICES
   ========================================================== */

function services(){

return`

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Serviços
            </span>

            <h2 class="section-title">
                Muito além da venda de produtos
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${service(
                "🩺",
                "Consultoria em Bem-estar",
                "Acompanhamento personalizado para escolhas mais saudáveis."
            )}

            ${service(
                "🌿",
                "Medicina Holística",
                "Produtos seleccionados para promover equilíbrio e qualidade de vida."
            )}

            ${service(
                "🎓",
                "Academy 21",
                "Formação em liderança, comunicação, empreendedorismo e negócios internacionais."
            )}

        </div>

    </div>

</section>

`;

}

function service(icon,title,desc){

return`

<div class="card service-card reveal">

    <div class="service-icon">
        ${icon}
    </div>

    <h3>${title}</h3>

    <p class="text mt-2">
        ${desc}
    </p>

</div>

`;

}

/* ==========================================================
   EVENT
   ========================================================== */

function event(){

return`

<section class="section">

    <div class="container">

        <div class="showcase">

            <div class="showcase-content">

                <div class="split">

                    <div class="split-image reveal-left">

                        <img
                            src="./assets/hotel/fly.png"
                            alt="Fly Hotel">

                    </div>

                    <div class="split-content reveal-right">

                        <span class="label">
                            Grande Evento
                        </span>

                        <h2 class="section-title">
                            Grande Apresentação
                            de Dupla Oportunidade
                        </h2>

                        <p class="text-lg">
                            Saúde • Bem-estar • Longevidade •
                            Negócios Internacionais
                        </p>

                        <div class="icon-list mt-4">

                            <div class="icon-item">

                                <div class="icon-circle">📅</div>

                                <div>
                                    <strong>08 de Agosto de 2026</strong><br>
                                    Sábado
                                </div>

                            </div>

                            <div class="icon-item">

                                <div class="icon-circle">📍</div>

                                <div>
                                    <strong>Fly Hotel</strong><br>
                                    Antigo Aeroporto Doméstico · Luanda
                                </div>

                            </div>

                            <div class="icon-item">

                                <div class="icon-circle">🕒</div>

                                <div>
                                    <strong>15h00</strong><br>
                                    Início pontualmente
                                </div>

                            </div>

                            <div class="icon-item">

                                <div class="icon-circle">🎟️</div>

                                <div>
                                    <strong>2.500 Kz</strong><br>
                                    Ingresso individual
                                </div>

                            </div>

                        </div>

                        <div class="mt-4">

                            <button
                                class="btn btn-primary"
                                id="reserveEvent">

                                Reservar Lugar

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
   TESTIMONIALS
   ========================================================== */

function testimonials(){

return`

<section class="section-sm">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Comunidade AD Lifestyle
            </span>

            <h2 class="section-title">
                Histórias que inspiram confiança
            </h2>

        </div>

        <div class="testimonial-grid mt-6">

            ${testimonial(
                "Angel Moon proporcionou-me uma experiência completamente diferente. Conforto e qualidade que realmente se sentem.",
                "Maria Fernandes"
            )}

            ${testimonial(
                "A AD Lifestyle fez-me descobrir uma nova forma de cuidar da minha saúde através da medicina holística.",
                "Ana Miguel"
            )}

            ${testimonial(
                "O Zenbru tornou-se parte da minha rotina diária e hoje sinto muito mais energia durante o trabalho.",
                "João Baptista"
            )}

            ${testimonial(
                "Não encontrei apenas produtos. Encontrei uma comunidade preocupada com o desenvolvimento humano.",
                "Helena Silva"
            )}

        </div>

    </div>

</section>

`;

}

function testimonial(text,name){

return`

<div class="card testimonial reveal">

    <div class="quote-mark">“</div>

    <p class="text">
        ${text}
    </p>

    <div class="person">

        <div class="avatar">

            <img
                src="./assets/images/avatar.png"
                alt="${name}">

        </div>

        <div>

            <strong>${name}</strong>

            <div class="text-sm">
                Cliente AD Lifestyle
            </div>

        </div>

    </div>

</div>

`;

}

/* ==========================================================
   INSTAGRAM
   ========================================================== */

function instagram(){

return`

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Redes Sociais
            </span>

            <h2 class="section-title">
                @adlifestyle.ao
            </h2>

            <p class="text">
                Acompanhe eventos, dicas de saúde e novidades.
            </p>

        </div>

        <div class="social-grid mt-5">

            ${social("./assets/images/insta1.jpg")}

            ${social("./assets/images/insta2.jpg")}

            ${social("./assets/images/insta3.jpg")}

            ${social("./assets/images/insta4.jpg")}

        </div>

    </div>

</section>

`;

}

function social(image){

return`

<div class="social-card reveal">

    <img
        src="${image}"
        alt="Instagram">

    <div class="social-overlay">
        Ver publicação
    </div>

</div>

`;

}

/* ==========================================================
   CTA
   ========================================================== */

function cta(){

return`

<section class="section">

    <div class="container">

        <div class="showcase">

            <div class="showcase-content section-center">

                <span class="badge">
                    AD Lifestyle
                </span>

                <h2 class="section-title mt-3">
                    A sua transformação começa hoje.
                </h2>

                <p class="lead">
                    Junte-se à comunidade que está a transformar vidas através da saúde,
                    bem-estar, longevidade e oportunidades internacionais.
                </p>

                <div class="hero-actions center mt-4">

                    <button
                        class="btn btn-primary"
                        id="whatsappCTA">

                        Falar no WhatsApp

                    </button>

                    <button
                        class="btn btn-glass"
                        id="productsCTA">

                        Ver Produtos

                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   EVENTOS DA HOME
   ========================================================== */

function initialiseHome(){

    stagger(".product-card");

    document
        .querySelectorAll(".btn")
        .forEach(ripple);

    document
        .getElementById("exploreProducts")
        ?.addEventListener("click",()=>{

            document
                .getElementById("products")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document
        .getElementById("aboutButton")
        ?.addEventListener("click",()=>{

            document
                .getElementById("about")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document
        .querySelectorAll("[data-product]")
        .forEach(card=>{

            card.addEventListener("click",()=>{

                navigate("/"+card.dataset.product);

            });

        });

    document
        .getElementById("productsCTA")
        ?.addEventListener("click",()=>{

            document
                .getElementById("products")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document
        .getElementById("whatsappCTA")
        ?.addEventListener("click",()=>{

            window.open(
                "https://wa.me/244924964666?text=Olá%20AD%20Lifestyle",
                "_blank"
            );

        });

    document
        .getElementById("reserveEvent")
        ?.addEventListener("click",()=>{

            navigate("/events");

        });

}
