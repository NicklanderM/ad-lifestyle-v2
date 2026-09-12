/* ==========================================================
   AD LIFESTYLE V2
   PRODUCTS.JS
   Premium Product Catalogue
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { stagger, ripple } from "../js/animations.js";

export function loadProducts(){

    applyTheme("default");

    const app=document.getElementById("app");

    app.innerHTML=`

        ${hero()}

        ${stats()}

        ${catalogue()}

        ${philosophy()}

        ${cta()}

    `;

    initialiseProducts();

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
                Catálogo Premium
            </span>

            <h1 class="hero-title">
                Todos os Produtos
                AD Lifestyle
            </h1>

            <p class="hero-sub">
                Explore a colecção completa de produtos BZZWORLD dedicados à
                saúde, bem-estar, longevidade, beleza, performance e Smart Living.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="catalogueButton">
                    Explorar Catálogo
                </button>

                <button class="btn btn-glass" id="whatsHero">
                    Consultoria
                </button>

            </div>

        </div>

        <div class="hero-visual reveal-right">

            <div class="hero-product floating">

                <div class="product-glow"></div>

                <img
                    class="parallax"
                    data-speed="25"
                    src="./assets/products/angel.png"
                    alt="AD Lifestyle Products">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   STATS
   ========================================================== */

function stats(){

return`

<section class="section-sm">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Universo Premium
            </span>

            <h2 class="section-title">
                Um catálogo criado para elevar a qualidade de vida
            </h2>

        </div>

        <div class="bento mt-6">

            <div class="bento-card span-3 reveal">

                <div class="metric">

                    <div class="metric-number">9</div>

                    <div class="metric-label">
                        Produtos Premium
                    </div>

                </div>

            </div>

            <div class="bento-card span-3 reveal delay-1">

                <div class="metric">

                    <div class="metric-number">5</div>

                    <div class="metric-label">
                        Categorias
                    </div>

                </div>

            </div>

            <div class="bento-card span-3 reveal delay-2">

                <div class="metric">

                    <div class="metric-number">21</div>

                    <div class="metric-label">
                        Academy Twenty One
                    </div>

                </div>

            </div>

            <div class="bento-card span-3 reveal delay-3">

                <div class="metric">

                    <div class="metric-number">100%</div>

                    <div class="metric-label">
                        Qualidade Premium
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   CATALOGUE
   ========================================================== */

function catalogue(){

return`

<section id="catalogue" class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Catálogo Completo
            </span>

            <h2 class="section-title">
                Escolha o produto ideal para o seu objectivo
            </h2>

            <p class="lead">
                Cada solução foi cuidadosamente desenvolvida para responder
                a necessidades específicas do quotidiano.
            </p>

        </div>

        <div class="grid grid-2 mt-6">

            ${productCard(
                "angel",
                "Cuidado Feminino",
                "Angel Moon",
                "./assets/products/angel.png",
                "Protecção íntima, conforto diário e bem-estar feminino.",
                ["Conforto","Premium","Feminino"]
            )}

            ${productCard(
                "ezeno",
                "Saúde Oral",
                "EZENO",
                "./assets/products/ezeno.png",
                "Pasta dentífrica funcional para uma higiene oral completa.",
                ["Saúde","Oral","Natural"]
            )}

            ${productCard(
                "zenbru",
                "Café Funcional",
                "Zenbru",
                "./assets/products/zenbru.png",
                "Uma bebida funcional que alia sabor, energia e equilíbrio.",
                ["Energia","Café","Lifestyle"]
            )}

            ${productCard(
                "alpha",
                "Performance",
                "Alpha Vmax",
                "./assets/products/alpha.png",
                "Vitalidade, confiança e desempenho para homens activos.",
                ["Performance","Homem","Elite"]
            )}

            ${productCard(
                "alphameta",
                "Nutrição",
                "AlphaMeta",
                "./assets/products/alphameta.png",
                "Bebida premium de cereais bio Oryza para nutrição diária.",
                ["Nutrição","Oryza","Premium"]
            )}

            ${productCard(
                "minoseed",
                "Beleza & Bem-estar",
                "Minoseed",
                "./assets/products/minoseed.png",
                "Suporte nutricional para pele, cabelo e bem-estar.",
                ["Beleza","Pele","Cabelo"]
            )}

            ${productCard(
                "evador",
                "Cuidados Premium",
                "Evador",
                "./assets/products/evador.png",
                "Uma solução desenvolvida para elevar os cuidados pessoais.",
                ["Beleza","Elegância","Daily"]
            )}

            ${productCard(
                "alphaspin-ultra",
                "Smart Living",
                "AlphaSpin Ultra",
                "./assets/products/alphaspin-ultra.png",
                "Tecnologia e inovação ao serviço da saúde e do lifestyle.",
                ["Smart","Tecnologia","Inovação"]
            )}

            ${productCard(
                "ismarts3",
                "Smart Living",
                "iSMARTS3",
                "./assets/products/ismarts3.png",
                "Dispositivo inteligente para uma vida mais conectada.",
                ["Digital","Lifestyle","Smart"]
            )}

        </div>

    </div>

</section>

`;

}

function productCard(route,category,title,image,description,tags){

return`

<div class="card product-card reveal" data-product="${route}">

    <div class="product-image">

        <div class="orb"></div>

        <img src="${image}" alt="${title}">

    </div>

    <div class="product-info">

        <span class="product-category">
            ${category}
        </span>

        <h3>${title}</h3>

        <p class="text mt-2">
            ${description}
        </p>

        <div class="mt-3" style="display:flex;flex-wrap:wrap;gap:8px;">

            <span class="badge">${tags[0]}</span>
            <span class="badge">${tags[1]}</span>
            <span class="badge">${tags[2]}</span>

        </div>

        <div class="hero-actions mt-4">

            <button class="btn btn-primary w-full">
                Descobrir Produto
            </button>

        </div>

    </div>

</div>

`;

}

/* ==========================================================
   PHILOSOPHY
   ========================================================== */

function philosophy(){

return`

<section class="section">

    <div class="container">

        <div class="showcase">

            <div class="showcase-content">

                <div class="split">

                    <div class="split-image reveal-left">

                        <img
                            src="./assets/products/zenbru.png"
                            alt="AD Lifestyle">

                    </div>

                    <div class="split-content reveal-right">

                        <span class="label">
                            Filosofia AD Lifestyle
                        </span>

                        <h2 class="section-title">
                            Muito além de produtos.
                            Um estilo de vida.
                        </h2>

                        <p class="text-lg">
                            Acreditamos que a verdadeira transformação nasce da
                            combinação entre prevenção, nutrição, desenvolvimento
                            humano e inovação.
                        </p>

                        <div class="icon-list mt-4">

                            <div class="icon-item">
                                <div class="icon-circle">✓</div>
                                <div>Saúde Preventiva</div>
                            </div>

                            <div class="icon-item">
                                <div class="icon-circle">✓</div>
                                <div>Medicina Holística</div>
                            </div>

                            <div class="icon-item">
                                <div class="icon-circle">✓</div>
                                <div>Longevidade e Bem-estar</div>
                            </div>

                            <div class="icon-item">
                                <div class="icon-circle">✓</div>
                                <div>Academy Twenty One</div>
                            </div>

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
                    Encontre o produto ideal para si
                </h2>

                <p class="lead">
                    Receba aconselhamento personalizado e descubra qual a solução
                    mais adequada ao seu estilo de vida.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="productsWhats">
                        Falar no WhatsApp
                    </button>

                    <button class="btn btn-glass" id="backHome">
                        Voltar ao Início
                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   EVENTS
   ========================================================== */

function initialiseProducts(){

    stagger(".product-card");

    document
        .querySelectorAll(".btn")
        .forEach(ripple);

    document
        .querySelectorAll("[data-product]")
        .forEach(card=>{

            card.addEventListener("click",()=>{

                navigate("/"+card.dataset.product);

            });

        });

    document
        .getElementById("catalogueButton")
        ?.addEventListener("click",()=>{

            document
                .getElementById("catalogue")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

    document
        .getElementById("backHome")
        ?.addEventListener("click",()=>{

            navigate("/");

        });

    document
        .getElementById("whatsHero")
        ?.addEventListener("click",openWhats);

    document
        .getElementById("productsWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message=
        "Olá AD Lifestyle! Gostaria de receber consultoria sobre os produtos.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}
