/* ==========================================================
   AD LIFESTYLE V2
   PRODUCTS.JS
   Premium Product Universe
   Editorial / Immersive / Luxury
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple, stagger } from "../js/animations.js";

/* ==========================================================
   ESTADO
   ========================================================== */

let currentSlide = 0;
let slideTimer = null;
let isAnimating = false;
let keyboardBound = false;

const SLIDE_DURATION = 6500;

/* ==========================================================
   WHATSAPP
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";

/* ==========================================================
   PRODUTOS
   ========================================================== */

const PRODUCTS = [

    {
        id: "angel",
        name: "Angel Moon",
        category: "CUIDADO FEMININO",
        universe: "WELLNESS",
        label: "Cuidado feminino",
        image: "./assets/products/angel.png",
        description:
            "Uma experiência de cuidado feminino pensada para conforto, confiança e bem-estar.",
        tags: [
            "Conforto",
            "Premium",
            "Feminino"
        ],
        tone: "#8B5CF6",
        atmosphere: "#E9D5FF"
    },

    {
        id: "ezeno",
        name: "EZENO",
        category: "SAÚDE ORAL",
        universe: "WELLNESS",
        label: "Saúde oral",
        image: "./assets/products/ezeno.png",
        description:
            "Uma solução de higiene oral concebida para integrar qualidade e cuidado na rotina diária.",
        tags: [
            "Saúde",
            "Oral",
            "Daily"
        ],
        tone: "#D8A62A",
        atmosphere: "#FFF3D5"
    },

    {
        id: "zenbru",
        name: "Zenbru",
        category: "CAFÉ FUNCIONAL",
        universe: "LIFESTYLE",
        label: "Café & lifestyle",
        image: "./assets/products/zenbru.png",
        description:
            "Uma experiência de café pensada para acompanhar energia, sabor e equilíbrio no quotidiano.",
        tags: [
            "Café",
            "Energia",
            "Lifestyle"
        ],
        tone: "#F7C51E",
        atmosphere: "#FFE7B2"
    },

    {
        id: "alpha",
        name: "Alpha Vmax",
        category: "PERFORMANCE",
        universe: "PERFORMANCE",
        label: "Performance",
        image: "./assets/products/alpha.png",
        description:
            "Uma solução orientada para homens que valorizam vitalidade, confiança e performance.",
        tags: [
            "Performance",
            "Homem",
            "Elite"
        ],
        tone: "#D8A74D",
        atmosphere: "#D8E6FF"
    },

    {
        id: "alphameta",
        name: "AlphaMeta",
        category: "NUTRIÇÃO",
        universe: "WELLNESS",
        label: "Nutrição",
        image: "./assets/products/alphameta.png",
        description:
            "Uma proposta de nutrição baseada em cereais Oryza para acompanhar diferentes momentos do dia.",
        tags: [
            "Nutrição",
            "Oryza",
            "Premium"
        ],
        tone: "#FCC20C",
        atmosphere: "#FFE0C2"
    },

    {
        id: "minoseed",
        name: "Minoseed",
        category: "BELEZA & BEM-ESTAR",
        universe: "WELLNESS",
        label: "Beleza & bem-estar",
        image: "./assets/products/minoseed.png",
        description:
            "Uma solução orientada para beleza, cuidado pessoal e bem-estar no dia a dia.",
        tags: [
            "Beleza",
            "Cuidado",
            "Lifestyle"
        ],
        tone: "#D8A62A",
        atmosphere: "#FFF3D5"
    },

    {
        id: "evador",
        name: "Evador",
        category: "CUIDADOS PREMIUM",
        universe: "LIFESTYLE",
        label: "Cuidados premium",
        image: "./assets/products/evador.png",
        description:
            "Uma experiência premium de cuidado pessoal marcada por elegância e sofisticação.",
        tags: [
            "Elegância",
            "Premium",
            "Daily"
        ],
        tone: "#D4AF37",
        atmosphere: "#EEE7D7"
    },

    {
        id: "alphaspin-ultra",
        name: "AlphaSpin Ultra",
        category: "SMART LIVING",
        universe: "SMART LIVING",
        label: "Tecnologia",
        image: "./assets/products/alphaspin-ultra.png",
        description:
            "Tecnologia, inovação e uma abordagem contemporânea ao universo do smart living.",
        tags: [
            "Smart",
            "Tecnologia",
            "Inovação"
        ],
        tone: "#A57BCF",
        atmosphere: "#E9D9F7"
    },

    {
        id: "alpha-spin-straw",
        name: "Alpha Spin Straw",
        category: "SMART LIVING",
        universe: "SMART LIVING",
        label: "Água & experiência",
        image: "./assets/products/straw.png",
        description:
            "Um canudo de vidro integrado ao universo Alpha Spin, apresentado como uma experiência premium para água e outras bebidas.",
        tags: [
            "Vidro",
            "Smart",
            "Água"
        ],
        tone: "#C6A04D",
        atmosphere: "#DDEBE4"
    },

    {
        id: "ismarts3",
        name: "iSMART S3",
        category: "SMART LIVING",
        universe: "SMART LIVING",
        label: "Smart living",
        image: "./assets/products/ismarts3.png",
        description:
            "Uma experiência de smart living criada para integrar inovação, tecnologia e conforto ao quotidiano.",
        tags: [
            "Smart",
            "Lifestyle",
            "Inovação"
        ],
        tone: "#39D353",
        atmosphere: "#DCEBFA"
    }

];

/* ==========================================================
   HERO STORIES
   ========================================================== */

const HERO_STORIES = {

    angel: {
        eyebrow: "WELLNESS",
        kicker: "CUIDADO · CONFORTO · CONFIANÇA",
        title: "Comece pelo",
        accent: "cuidado.",
        copy:
            "Uma experiência criada para transformar pequenos momentos de cuidado em parte do seu lifestyle."
    },

    ezeno: {
        eyebrow: "WELLNESS",
        kicker: "PUREZA · ROTINA · CUIDADO",
        title: "O cuidado",
        accent: "começa todos os dias.",
        copy:
            "Uma abordagem contemporânea à higiene oral, pensada para acompanhar a rotina com elegância."
    },

    zenbru: {
        eyebrow: "LIFESTYLE",
        kicker: "SABOR · RITUAL · ENERGIA",
        title: "Crie o seu",
        accent: "próprio ritmo.",
        copy:
            "Uma experiência de café pensada para acompanhar momentos, hábitos e o ritmo de cada dia."
    },

    alpha: {
        eyebrow: "PERFORMANCE",
        kicker: "VITALIDADE · CONFIANÇA · PERFORMANCE",
        title: "Eleve o seu",
        accent: "potencial.",
        copy:
            "Uma proposta orientada para quem valoriza performance, presença e confiança."
    },

    alphameta: {
        eyebrow: "WELLNESS",
        kicker: "NUTRIÇÃO · EQUILÍBRIO · ROTINA",
        title: "Nutrição com",
        accent: "uma nova perspectiva.",
        copy:
            "Uma proposta que aproxima nutrição, conveniência e uma experiência contemporânea."
    },

    minoseed: {
        eyebrow: "WELLNESS",
        kicker: "BELEZA · CUIDADO · LIFESTYLE",
        title: "Cuide de si",
        accent: "todos os dias.",
        copy:
            "Uma experiência orientada para beleza, cuidado pessoal e bem-estar."
    },

    evador: {
        eyebrow: "PREMIUM CARE",
        kicker: "ELEGÂNCIA · CUIDADO · PRESENÇA",
        title: "O detalhe",
        accent: "faz a diferença.",
        copy:
            "Uma abordagem premium ao cuidado pessoal, marcada por elegância e sofisticação."
    },

    "alphaspin-ultra": {
        eyebrow: "SMART LIVING",
        kicker: "TECNOLOGIA · INOVAÇÃO · EXPERIÊNCIA",
        title: "A inovação",
        accent: "entrou no quotidiano.",
        copy:
            "Tecnologia e design unem-se numa experiência pensada para o lifestyle contemporâneo."
    },

    "alpha-spin-straw": {
        eyebrow: "SMART LIVING",
        kicker: "VIDRO · ÁGUA · EXPERIÊNCIA",
        title: "Mude a forma",
        accent: "como bebe.",
        copy:
            "Um novo olhar sobre a experiência de beber, dentro do universo Alpha Spin."
    },

    ismarts3: {
        eyebrow: "SMART LIVING",
        kicker: "TECNOLOGIA · CONFORTO · INOVAÇÃO",
        title: "O futuro",
        accent: "já entrou em casa.",
        copy:
            "Uma experiência de smart living criada para aproximar tecnologia, inovação e conforto."
    }

};

/* ==========================================================
   ICONS
   ========================================================== */

const ICONS = {

    arrow: `
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path d="M5 12h13"></path>
            <path d="M13 6l6 6-6 6"></path>
        </svg>
    `,

    prev: `
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path d="M19 12H5"></path>
            <path d="M11 6l-6 6 6 6"></path>
        </svg>
    `,

    next: `
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M13 6l6 6-6 6"></path>
        </svg>
    `,

    search: `
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true">
            <circle
                cx="11"
                cy="11"
                r="7">
            </circle>
            <path d="m16.5 16.5 4 4"></path>
        </svg>
    `,

    plus: `
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path d="M12 5v14"></path>
            <path d="M5 12h14"></path>
        </svg>
    `

};

/* ==========================================================
   LOAD
   ========================================================== */

export function loadProducts(){

    applyTheme("default");

    const app =
        document.getElementById("app");

    if(!app){

        console.error(
            "AD LIFESTYLE: elemento #app não encontrado."
        );

        return;
    }

    currentSlide = 0;
    isAnimating = false;

    stopSlideshow();

    app.innerHTML = `

        <main class="products-page">

            ${renderHero()}

            ${renderIntroduction()}

            ${renderCategories()}

            ${renderCatalogue()}

            ${renderFeatured()}

            ${renderPhilosophy()}

            ${renderCTA()}

        </main>

    `;

    initialiseProducts();

}

/* ==========================================================
   HERO
   ========================================================== */

function renderHero(){

    const product =
        PRODUCTS[currentSlide];

    const story =
        HERO_STORIES[product.id];

    return `

        <section
            class="products-hero"
            id="products-top"
            data-theme="${product.id}"
        >

            <div
                class="products-hero-background"
                style="
                    --hero-tone:${product.tone};
                    --hero-atmosphere:${product.atmosphere};
                "
            ></div>

            <div
                class="products-hero-glow"
                style="
                    --hero-tone:${product.tone};
                "
            ></div>

            <div
                class="products-container
                       products-hero-container"
            >

                <!-- =========================================
                     TOP
                     ========================================= -->

                <div class="products-hero-top">

                    <div class="products-hero-brand">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle"
                        >

                        <div>

                            <strong>
                                AD LIFESTYLE
                            </strong>

                            <span>
                                PRODUCT UNIVERSE
                            </span>

                        </div>

                    </div>

                    <div class="products-hero-index">

                        <span>
                            COLLECTION
                        </span>

                        <strong>
                            2026
                        </strong>

                    </div>

                </div>

                <!-- =========================================
                     MAIN
                     ========================================= -->

                <div class="products-hero-main">

                    <div class="products-hero-content">

                        <div class="products-eyebrow">
                            ${story.eyebrow}
                        </div>

                        <div
                            class="products-slide-number"
                            id="productsSlideNumber"
                        >
                            ${formatSlideNumber(currentSlide)}
                        </div>

                        <div
                            class="products-hero-kicker"
                            id="productsHeroKicker"
                        >
                            ${story.kicker}
                        </div>

                        <h1 id="productsHeroTitle">

                            ${story.title}

                            <span>
                                ${story.accent}
                            </span>

                        </h1>

                        <div
                            class="products-hero-category"
                            id="productsHeroCategory"
                        >
                            ${product.category}
                        </div>

                        <p
                            id="productsHeroDescription"
                        >
                            ${story.copy}
                        </p>

                        <div
                            class="products-hero-tags"
                            id="productsHeroTags"
                        >
                            ${renderHeroTags(product)}
                        </div>

                        <div class="products-hero-actions">

                            <button
                                type="button"
                                class="
                                    products-button
                                    products-button-gold
                                "
                                id="productsDiscover"
                            >

                                <span>
                                    Descobrir produto
                                </span>

                                ${ICONS.arrow}

                            </button>

                            <button
                                type="button"
                                class="
                                    products-button
                                    products-button-outline
                                "
                                id="productsCatalogue"
                            >
                                Explorar catálogo
                            </button>

                        </div>

                        <div
                            class="products-hero-meta"
                            id="productsHeroMeta"
                        >

                            <div>

                                <strong>
                                    ${product.universe}
                                </strong>

                                <span>
                                    Universo
                                </span>

                            </div>

                            <div>

                                <strong>
                                    ${String(
                                        currentSlide + 1
                                    ).padStart(2,"0")}
                                </strong>

                                <span>
                                    Posição
                                </span>

                            </div>

                            <div>

                                <strong>
                                    ${PRODUCTS.length}
                                </strong>

                                <span>
                                    Produtos
                                </span>

                            </div>

                        </div>

                    </div>

                    <!-- =====================================
                         PRODUCT VISUAL
                         ===================================== -->

                    <div class="products-hero-product">

                        <div
                            class="
                                products-hero-product-orbit
                            "
                            aria-hidden="true"
                        ></div>

                        <div
                            class="
                                products-hero-product-image
                            "
                            id="productsHeroImage"
                        >

                            <div
                                class="
                                    products-hero-image-glow
                                "
                                aria-hidden="true"
                            ></div>

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                loading="eager"
                            >

                        </div>

                        <div
                            class="
                                products-hero-product-shadow
                            "
                            aria-hidden="true"
                        ></div>

                        <div class="products-hero-label">

                            <span>
                                FEATURED PRODUCT
                            </span>

                            <strong
                                id="productsHeroLabel"
                            >
                                ${product.name}
                            </strong>

                        </div>

                    </div>

                </div>

                <!-- =========================================
                     CONTROLS
                     ========================================= -->

                <div class="products-hero-controls">

                    <div class="products-slide-progress">

                        <span
                            id="productsProgress"
                        ></span>

                    </div>

                    <div class="products-slide-controls">

                        <button
                            type="button"
                            id="productsPrev"
                            aria-label="Produto anterior"
                        >
                            ${ICONS.prev}
                        </button>

                        <button
                            type="button"
                            id="productsNext"
                            aria-label="Próximo produto"
                        >
                            ${ICONS.next}
                        </button>

                    </div>

                    <div
                        class="products-slide-name"
                        id="productsSlideName"
                    >
                        ${product.name}
                    </div>

                </div>

                <!-- =========================================
                     THUMBNAILS
                     ========================================= -->

                <div
                    class="products-thumbs"
                    aria-label="
                        Produtos em destaque
                    "
                >

                    ${PRODUCTS
                        .map(
                            (item,index) => `

                                <button
                                    type="button"
                                    class="
                                        products-thumb
                                        ${
                                            index ===
                                            currentSlide
                                                ? "active"
                                                : ""
                                        }
                                    "
                                    data-slide="${index}"
                                    aria-label="
                                        Ver ${item.name}
                                    "
                                    aria-pressed="
                                        ${
                                            index ===
                                            currentSlide
                                                ? "true"
                                                : "false"
                                        }
                                    "
                                >

                                    <img
                                        src="${item.image}"
                                        alt=""
                                        loading="lazy"
                                    >

                                    <span>
                                        ${String(
                                            index + 1
                                        ).padStart(2,"0")}
                                    </span>

                                </button>

                            `
                        )
                        .join("")}

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   HERO TAGS
   ========================================================== */

function renderHeroTags(product){

    return product.tags
        .map(
            tag => `
                <span>
                    ${tag}
                </span>
            `
        )
        .join("");

}

/* ==========================================================
   HERO SLIDE NUMBER
   ========================================================== */

function formatSlideNumber(index){

    return `
        ${String(index + 1).padStart(2,"0")}
        /
        ${String(PRODUCTS.length).padStart(2,"0")}
    `;

}

/* ==========================================================
   INTRO
   ========================================================== */

function renderIntroduction(){

    return `

        <section
            class="products-introduction"
            id="products-introduction"
        >

            <div class="products-container">

                <div
                    class="
                        products-introduction-inner
                        products-reveal
                    "
                >

                    <div>

                        <div class="products-eyebrow">
                            AD LIFESTYLE
                        </div>

                        <h2>
                            Mais do que um catálogo.
                            <span>
                                Um universo de experiências.
                            </span>
                        </h2>

                    </div>

                    <div>

                        <p>
                            Wellness, lifestyle, performance,
                            beleza, nutrição e smart living
                            encontram-se numa única experiência.
                        </p>

                        <p>
                            Explore cada produto individualmente
                            e descubra aquilo que melhor se
                            enquadra no seu momento.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   CATEGORIES
   ========================================================== */

function renderCategories(){

    return `

        <section
            class="products-categories"
            id="products-categories"
        >

            <div class="products-container">

                <div
                    class="
                        products-section-heading
                        products-reveal
                    "
                >

                    <div>

                        <div class="products-eyebrow">
                            UNIVERSOS
                        </div>

                        <h2>
                            Diferentes mundos.
                            <span>
                                A mesma visão.
                            </span>
                        </h2>

                    </div>

                    <p>
                        Navegue pelos universos que
                        compõem o catálogo AD Lifestyle.
                    </p>

                </div>

                <div class="products-category-grid">

                    ${categoryCard(
                        "01",
                        "WELLNESS",
                        "Cuidado, equilíbrio e bem-estar."
                    )}

                    ${categoryCard(
                        "02",
                        "NUTRITION",
                        "Nutrição, energia e rotina."
                    )}

                    ${categoryCard(
                        "03",
                        "PERFORMANCE",
                        "Vitalidade, confiança e performance."
                    )}

                    ${categoryCard(
                        "04",
                        "BEAUTY",
                        "Beleza e cuidado pessoal."
                    )}

                    ${categoryCard(
                        "05",
                        "SMART LIVING",
                        "Tecnologia aplicada ao quotidiano."
                    )}

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   CATEGORY CARD
   ========================================================== */

function categoryCard(
    number,
    title,
    description
){

    return `

        <article
            class="products-category-card"
            data-category-card="${title}"
        >

            <span
                class="
                    products-category-number
                "
            >
                ${number}
            </span>

            <div
                class="
                    products-category-copy
                "
            >

                <span>
                    0${number}
                </span>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${description}
                </p>

            </div>

            <span
                class="
                    products-category-arrow
                "
            >
                ${ICONS.arrow}
            </span>

        </article>

    `;

}

/* ==========================================================
   CATALOGUE
   ========================================================== */

function renderCatalogue(){

    return `

        <section
            class="products-catalogue"
            id="catalogue"
        >

            <div class="products-container">

                <div
                    class="
                        products-section-heading
                        products-reveal
                    "
                >

                    <div>

                        <div class="products-eyebrow">
                            CATALOGUE
                        </div>

                        <h2>
                            Explore toda a
                            <span>
                                collection.
                            </span>
                        </h2>

                    </div>

                    <p>
                        Pesquise, filtre e descubra
                        cada produto da AD Lifestyle.
                    </p>

                </div>

                <div
                    class="products-catalogue-tools
                           products-reveal"
                >

                    <div class="products-search">

                        ${ICONS.search}

                        <input
                            type="search"
                            id="productsSearch"
                            placeholder="
                                Pesquisar produto...
                            "
                            autocomplete="off"
                            aria-label="
                                Pesquisar produto
                            "
                        >

                        <button
                            type="button"
                            id="productsClearSearch"
                            aria-label="
                                Limpar pesquisa
                            "
                        >
                            ×
                        </button>

                    </div>

                    <div
                        class="
                            products-category-filters
                        "
                        id="productsCategoryFilters"
                    >

                        ${filterButton(
                            "all",
                            "Todos",
                            true
                        )}

                        ${filterButton(
                            "CUIDADO FEMININO",
                            "Feminino"
                        )}

                        ${filterButton(
                            "SAÚDE ORAL",
                            "Saúde Oral"
                        )}

                        ${filterButton(
                            "CAFÉ FUNCIONAL",
                            "Café"
                        )}

                        ${filterButton(
                            "PERFORMANCE",
                            "Performance"
                        )}

                        ${filterButton(
                            "NUTRIÇÃO",
                            "Nutrição"
                        )}

                        ${filterButton(
                            "BELEZA & BEM-ESTAR",
                            "Beleza"
                        )}

                        ${filterButton(
                            "CUIDADOS PREMIUM",
                            "Cuidados"
                        )}

                        ${filterButton(
                            "SMART LIVING",
                            "Smart Living"
                        )}

                    </div>

                </div>

                <div
                    class="products-results-bar
                           products-reveal"
                >

                    <div
                        class="products-results-info"
                        id="productsResultsInfo"
                    >
                        <span>
                            ${PRODUCTS.length}
                            produtos
                        </span>
                    </div>

                    <button
                        type="button"
                        id="productsResetFilters"
                        class="
                            products-results-reset
                        "
                    >
                        Limpar filtros
                    </button>

                </div>

                <div
                    class="products-grid"
                    id="productsGrid"
                >

                    ${PRODUCTS
                        .map(
                            (
                                product,
                                index
                            ) =>
                                productCard(
                                    product,
                                    index
                                )
                        )
                        .join("")}

                </div>

                <div
                    class="products-empty"
                    id="productsEmpty"
                >

                    <div class="
                        products-empty-icon
                    ">
                        ${ICONS.search}
                    </div>

                    <strong>
                        Nenhum produto encontrado.
                    </strong>

                    <p>
                        Experimente outro termo ou
                        altere o filtro seleccionado.
                    </p>

                    <button
                        type="button"
                        class="
                            products-button
                            products-button-outline
                        "
                        id="productsEmptyReset"
                    >
                        Limpar filtros
                    </button>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   FILTER BUTTON
   ========================================================== */

function filterButton(
    value,
    label,
    active = false
){

    return `

        <button
            type="button"
            class="
                products-filter
                ${active ? "active" : ""}
            "
            data-category="${value}"
            aria-pressed="
                ${active ? "true" : "false"}
            "
        >
            ${label}
        </button>

    `;

}

/* ==========================================================
   PRODUCT CARD
   ========================================================== */

function productCard(
    product,
    index
){

    return `

        <article
            class="products-card"
            data-product="${product.id}"
            data-category="${product.category}"
            data-universe="${product.universe}"
            data-name="${product.name.toLowerCase()}"
            data-description="${product.description.toLowerCase()}"
            data-tags="${product.tags.join(" ").toLowerCase()}"
            style="
                --card-tone:${product.tone};
                --card-atmosphere:${product.atmosphere};
            "
        >

            <div class="products-card-image">

                <span
                    class="
                        products-card-number
                    "
                >
                    ${String(
                        index + 1
                    ).padStart(2,"0")}
                </span>

                <div
                    class="
                        products-card-glow
                    "
                    aria-hidden="true"
                ></div>

                <div
                    class="
                        products-card-frame
                    "
                    aria-hidden="true"
                ></div>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span
                    class="
                        products-card-category
                    "
                >
                    ${product.category}
                </span>

            </div>

            <div class="products-card-content">

                <div
                    class="
                        products-card-topline
                    "
                >

                    <span>
                        ${product.universe}
                    </span>

                    <span>
                        ${String(
                            index + 1
                        ).padStart(2,"0")}
                    </span>

                </div>

                <span
                    class="
                        products-card-label
                    "
                >
                    ${product.label}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="
                    products-card-tags
                ">

                    ${product.tags
                        .map(
                            tag => `
                                <span>
                                    ${tag}
                                </span>
                            `
                        )
                        .join("")}

                </div>

                <button
                    type="button"
                    class="
                        products-card-button
                    "
                    data-product-action="
                        ${product.id}
                    "
                    aria-label="
                        Descobrir ${product.name}
                    "
                >

                    <span>
                        Explorar produto
                    </span>

                    ${ICONS.arrow}

                </button>

            </div>

        </article>

    `;

}

/* ==========================================================
   FEATURED / STRAW
   ========================================================== */

function renderFeatured(){

    return `

        <section
            class="products-featured"
            id="products-featured"
        >

            <div class="products-container">

                <div class="
                    products-featured-box
                    products-reveal
                ">

                    <div
                        class="
                            products-featured-image
                        "
                    >

                        <div
                            class="
                                products-featured-orbit
                            "
                            aria-hidden="true"
                        ></div>

                        <img
                            src="./assets/products/straw.png"
                            alt="Alpha Spin Straw"
                            loading="lazy"
                        >

                    </div>

                    <div
                        class="
                            products-featured-content
                        "
                    >

                        <div class="products-eyebrow">
                            NEW · SMART LIVING
                        </div>

                        <span
                            class="
                                products-featured-label
                            "
                        >
                            ALPHA SPIN STRAW
                        </span>

                        <h2>
                            A experiência
                            <span>
                                começa num detalhe.
                            </span>
                        </h2>

                        <p>
                            O novo Alpha Spin Straw junta-se
                            ao universo AD Lifestyle como
                            uma proposta de smart living
                            centrada na experiência de beber.
                        </p>

                        <div
                            class="
                                products-featured-tags
                            "
                        >

                            <span>
                                VIDRO
                            </span>

                            <span>
                                SMART LIVING
                            </span>

                            <span>
                                ALPHA SPIN
                            </span>

                        </div>

                        <button
                            type="button"
                            class="
                                products-button
                                products-button-dark
                            "
                            data-product-action="
                                alpha-spin-straw
                            "
                        >

                            <span>
                                Descobrir Alpha Spin Straw
                            </span>

                            ${ICONS.arrow}

                        </button>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   PHILOSOPHY
   ========================================================== */

function renderPhilosophy(){

    return `

        <section class="
            products-philosophy
        ">

            <div class="products-container">

                <div
                    class="
                        products-philosophy-heading
                        products-reveal
                    "
                >

                    <div class="products-eyebrow">
                        FILOSOFIA
                    </div>

                    <h2>
                        Produtos que fazem parte
                        <span>
                            de uma visão maior.
                        </span>
                    </h2>

                </div>

                <div
                    class="
                        products-philosophy-grid
                    "
                >

                    ${philosophyCard(
                        "01",
                        "Wellness",
                        "Cuidado e bem-estar como parte do estilo de vida."
                    )}

                    ${philosophyCard(
                        "02",
                        "Lifestyle",
                        "Produtos pensados para acompanhar diferentes momentos."
                    )}

                    ${philosophyCard(
                        "03",
                        "Inovação",
                        "Novas experiências para um quotidiano em evolução."
                    )}

                    ${philosophyCard(
                        "04",
                        "Experiência",
                        "Cada produto possui uma identidade própria."
                    )}

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   PHILOSOPHY CARD
   ========================================================== */

function philosophyCard(
    number,
    title,
    text
){

    return `

        <article class="
            products-philosophy-card
            products-reveal
        ">

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
   CTA
   ========================================================== */

function renderCTA(){

    return `

        <section
            class="products-cta"
            id="products-cta"
        >

            <div class="products-container">

                <div
                    class="
                        products-cta-box
                        products-reveal
                    "
                >

                    <div class="
                        products-cta-logo
                    ">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle"
                        >

                    </div>

                    <div
                        class="
                            products-cta-content
                        "
                    >

                        <div class="products-eyebrow">
                            AD LIFESTYLE
                        </div>

                        <h2>
                            Descubra o seu
                            <span>
                                próximo universo.
                            </span>
                        </h2>

                        <p>
                            Explore os produtos, conheça cada
                            universo ou fale connosco para
                            encontrar a experiência certa para si.
                        </p>

                    </div>

                    <div
                        class="
                            products-cta-actions
                        "
                    >

                        <button
                            type="button"
                            class="
                                products-button
                                products-button-gold
                            "
                            id="productsCTAWhats"
                        >

                            <span>
                                Falar no WhatsApp
                            </span>

                            ${ICONS.arrow}

                        </button>

                        <button
                            type="button"
                            class="
                                products-button
                                products-button-outline
                            "
                            id="productsCTAHome"
                        >
                            Voltar ao início
                        </button>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseProducts(){

    const root =
        document.querySelector(
            ".products-page"
        );

    if(!root){
        return;
    }

    /* ------------------------------------------------------
       RIPPLE
       ------------------------------------------------------ */

    try{

        root
            .querySelectorAll(
                ".products-button," +
                ".products-filter," +
                ".products-thumb," +
                ".products-card-button," +
                ".products-category-card"
            )
            .forEach(
                element => {

                    if(
                        typeof ripple ===
                        "function"
                    ){

                        ripple(element);

                    }

                }
            );

    }catch(error){

        console.warn(
            "AD LIFESTYLE PRODUCTS: ripple não inicializado.",
            error
        );

    }

    /* ------------------------------------------------------
       STAGGER
       ------------------------------------------------------ */

    try{

        const staggerItems =
            root.querySelectorAll(
                `
                .products-category-card,
                .products-card,
                .products-philosophy-card
                `
            );

        if(
            typeof stagger ===
            "function"
        ){

            stagger(
                staggerItems
            );

        }

    }catch(error){

        console.warn(
            "AD LIFESTYLE PRODUCTS: stagger não inicializado.",
            error
        );

    }

    /* ------------------------------------------------------
       HERO
       ------------------------------------------------------ */

    root
        .querySelector(
            "#productsPrev"
        )
        ?.addEventListener(
            "click",
            function(){

                pauseSlideshow();

                changeSlide(
                    currentSlide - 1
                );

                startSlideshow();

            }
        );

    root
        .querySelector(
            "#productsNext"
        )
        ?.addEventListener(
            "click",
            function(){

                pauseSlideshow();

                changeSlide(
                    currentSlide + 1
                );

                startSlideshow();

            }
        );

    /* ------------------------------------------------------
       THUMBNAILS
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            ".products-thumb"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function(){

                        pauseSlideshow();

                        changeSlide(
                            Number(
                                button.dataset.slide
                            )
                        );

                        startSlideshow();

                    }
                );

            }
        );

    /* ------------------------------------------------------
       DISCOVER HERO
       ------------------------------------------------------ */

    root
        .querySelector(
            "#productsDiscover"
        )
        ?.addEventListener(
            "click",
            function(){

                openProduct(
                    PRODUCTS[
                        currentSlide
                    ].id
                );

            }
        );

    /* ------------------------------------------------------
       CATALOGUE
       ------------------------------------------------------ */

    root
        .querySelector(
            "#productsCatalogue"
        )
        ?.addEventListener(
            "click",
            scrollToCatalogue
        );

    /* ------------------------------------------------------
       PRODUCT CARDS
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            "[data-product-action]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function(event){

                        event.stopPropagation();

                        openProduct(
                            button.dataset
                                .productAction
                        );

                    }
                );

            }
        );

    /* ------------------------------------------------------
       PRODUCT CARD CLICK
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            ".products-card"
        )
        .forEach(
            card => {

                card.addEventListener(
                    "click",
                    function(){

                        openProduct(
                            card.dataset.product
                        );

                    }
                );

            }
        );

    /* ------------------------------------------------------
       SEARCH
       ------------------------------------------------------ */

    const search =
        root.querySelector(
            "#productsSearch"
        );

    search?.addEventListener(
        "input",
        applyProductFilters
    );

    /* ------------------------------------------------------
       CLEAR SEARCH
       ------------------------------------------------------ */

    root
        .querySelector(
            "#productsClearSearch"
        )
        ?.addEventListener(
            "click",
            function(){

                if(search){
                    search.value = "";
                }

                applyProductFilters();

                search?.focus();

            }
        );

    /* ------------------------------------------------------
       FILTERS
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            ".products-filter"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function(){

                        root
                            .querySelectorAll(
                                ".products-filter"
                            )
                            .forEach(
                                filter => {

                                    filter.classList.remove(
                                        "active"
                                    );

                                    filter.setAttribute(
                                        "aria-pressed",
                                        "false"
                                    );

                                }
                            );

                        button.classList.add(
                            "active"
                        );

                        button.setAttribute(
                            "aria-pressed",
                            "true"
                        );

                        applyProductFilters();

                    }
                );

            }
        );

    /* ------------------------------------------------------
       RESET
       ------------------------------------------------------ */

    root
        .querySelector(
            "#productsResetFilters"
        )
        ?.addEventListener(
            "click",
            resetProductFilters
        );

    root
        .querySelector(
            "#productsEmptyReset"
        )
        ?.addEventListener(
            "click",
            resetProductFilters
        );

    /* ------------------------------------------------------
       CATEGORY CARDS
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            "[data-category-card]"
        )
        .forEach(
            card => {

                card.addEventListener(
                    "click",
                    function(){

                        const label =
                            card.dataset.categoryCard;

                        mapCategoryToFilter(
                            label
                        );

                    }
                );

            }
        );

    /* ------------------------------------------------------
       FEATURED STRAW
       ------------------------------------------------------ */

    /* handled through
       [data-product-action]
    */

    /* ------------------------------------------------------
       WHATSAPP
       ------------------------------------------------------ */

    root
        .querySelector(
            "#productsCTAWhats"
        )
        ?.addEventListener(
            "click",
            openWhatsApp
        );

    /* ------------------------------------------------------
       HOME
       ------------------------------------------------------ */

    root
        .querySelector(
            "#productsCTAHome"
        )
        ?.addEventListener(
            "click",
            function(){

                navigate("/");

            }
        );

    /* ------------------------------------------------------
       KEYBOARD
       ------------------------------------------------------ */

    bindKeyboard();

    /* ------------------------------------------------------
       SWIPE
       ------------------------------------------------------ */

    initialiseSwipe(root);

    /* ------------------------------------------------------
       AUTO SLIDESHOW
       ------------------------------------------------------ */

    initialiseHeroHover(root);

    startSlideshow();

    /* ------------------------------------------------------
       REVEAL
       ------------------------------------------------------ */

    initialiseReveal(root);

    /* ------------------------------------------------------
       FILTERS INITIAL
       ------------------------------------------------------ */

    applyProductFilters();

}

/* ==========================================================
   CHANGE SLIDE
   ========================================================== */

function changeSlide(index){

    if(isAnimating){
        return;
    }

    const total =
        PRODUCTS.length;

    if(index < 0){
        index = total - 1;
    }

    if(index >= total){
        index = 0;
    }

    currentSlide =
        index;

    const product =
        PRODUCTS[
            currentSlide
        ];

    const story =
        HERO_STORIES[
            product.id
        ];

    const imageWrap =
        document.getElementById(
            "productsHeroImage"
        );

    const hero =
        document.querySelector(
            ".products-hero"
        );

    isAnimating = true;

    /* ------------------------------------------------------
       HERO STATE
       ------------------------------------------------------ */

    if(hero){

        hero.dataset.theme =
            product.id;

        hero.style.setProperty(
            "--hero-tone",
            product.tone
        );

        hero.style.setProperty(
            "--hero-atmosphere",
            product.atmosphere
        );

    }

    /* ------------------------------------------------------
       IMAGE
       ------------------------------------------------------ */

    if(imageWrap){

        imageWrap.classList.add(
            "is-changing"
        );

        setTimeout(
            function(){

                imageWrap.innerHTML = `

                    <div
                        class="
                            products-hero-image-glow
                        "
                        aria-hidden="true"
                    ></div>

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="eager"
                    >

                `;

            },
            180
        );

    }

    /* ------------------------------------------------------
       TEXT
       ------------------------------------------------------ */

    updateHero(
        product,
        story
    );

    /* ------------------------------------------------------
       THUMBS
       ------------------------------------------------------ */

    updateThumbnails();

    /* ------------------------------------------------------
       PROGRESS
       ------------------------------------------------------ */

    resetProgress();

    /* ------------------------------------------------------
       END ANIMATION
       ------------------------------------------------------ */

    setTimeout(
        function(){

            if(imageWrap){

                imageWrap.classList.remove(
                    "is-changing"
                );

            }

            isAnimating = false;

        },
        560
    );

}

/* ==========================================================
   UPDATE HERO
   ========================================================== */

function updateHero(
    product,
    story
){

    const title =
        document.getElementById(
            "productsHeroTitle"
        );

    const category =
        document.getElementById(
            "productsHeroCategory"
        );

    const description =
        document.getElementById(
            "productsHeroDescription"
        );

    const tags =
        document.getElementById(
            "productsHeroTags"
        );

    const number =
        document.getElementById(
            "productsSlideNumber"
        );

    const slideName =
        document.getElementById(
            "productsSlideName"
        );

    const label =
        document.getElementById(
            "productsHeroLabel"
        );

    const kicker =
        document.getElementById(
            "productsHeroKicker"
        );

    const meta =
        document.getElementById(
            "productsHeroMeta"
        );

    /* ------------------------------------------------------
       TITLE
       ------------------------------------------------------ */

    if(title){

        title.classList.remove(
            "is-text-changing"
        );

        void title.offsetWidth;

        title.innerHTML = `

            ${story.title}

            <span>
                ${story.accent}
            </span>

        `;

        title.classList.add(
            "is-text-changing"
        );

    }

    /* ------------------------------------------------------
       CATEGORY
       ------------------------------------------------------ */

    if(category){

        category.textContent =
            product.category;

    }

    /* ------------------------------------------------------
       COPY
       ------------------------------------------------------ */

    if(description){

        description.textContent =
            story.copy;

    }

    /* ------------------------------------------------------
       KICKER
       ------------------------------------------------------ */

    if(kicker){

        kicker.textContent =
            story.kicker;

    }

    /* ------------------------------------------------------
       TAGS
       ------------------------------------------------------ */

    if(tags){

        tags.innerHTML =
            renderHeroTags(
                product
            );

    }

    /* ------------------------------------------------------
       SLIDE NUMBER
       ------------------------------------------------------ */

    if(number){

        number.textContent =
            formatSlideNumber(
                currentSlide
            );

    }

    /* ------------------------------------------------------
       SLIDE NAME
       ------------------------------------------------------ */

    if(slideName){

        slideName.textContent =
            product.name;

    }

    /* ------------------------------------------------------
       LABEL
       ------------------------------------------------------ */

    if(label){

        label.textContent =
            product.name;

    }

    /* ------------------------------------------------------
       META
       ------------------------------------------------------ */

    if(meta){

        meta.innerHTML = `

            <div>

                <strong>
                    ${product.universe}
                </strong>

                <span>
                    Universo
                </span>

            </div>

            <div>

                <strong>
                    ${String(
                        currentSlide + 1
                    ).padStart(2,"0")}
                </strong>

                <span>
                    Posição
                </span>

            </div>

            <div>

                <strong>
                    ${PRODUCTS.length}
                </strong>

                <span>
                    Produtos
                </span>

            </div>

        `;

    }

}

/* ==========================================================
   UPDATE THUMBNAILS
   ========================================================== */

function updateThumbnails(){

    document
        .querySelectorAll(
            ".products-thumb"
        )
        .forEach(
            (button,index) => {

                const active =
                    index ===
                    currentSlide;

                button.classList.toggle(
                    "active",
                    active
                );

                button.setAttribute(
                    "aria-pressed",
                    active
                        ? "true"
                        : "false"
                );

            }
        );

}

/* ==========================================================
   PROGRESS
   ========================================================== */

function resetProgress(){

    const progress =
        document.getElementById(
            "productsProgress"
        );

    if(!progress){
        return;
    }

    progress.style.animation =
        "none";

    void progress.offsetWidth;

    progress.style.animation =
        `productsProgress ${SLIDE_DURATION / 1000}s linear forwards`;

}

/* ==========================================================
   SLIDESHOW
   ========================================================== */

function startSlideshow(){

    stopSlideshow();

    resetProgress();

    slideTimer =
        setInterval(
            function(){

                changeSlide(
                    currentSlide + 1
                );

            },
            SLIDE_DURATION
        );

}

function stopSlideshow(){

    if(slideTimer){

        clearInterval(
            slideTimer
        );

        slideTimer =
            null;

    }

}

function pauseSlideshow(){

    stopSlideshow();

}

/* ==========================================================
   HERO HOVER
   ========================================================== */

function initialiseHeroHover(root){

    const hero =
        root.querySelector(
            ".products-hero"
        );

    if(!hero){
        return;
    }

    hero.addEventListener(
        "mouseenter",
        pauseSlideshow
    );

    hero.addEventListener(
        "mouseleave",
        startSlideshow
    );

}

/* ==========================================================
   OPEN PRODUCT
   ========================================================== */

function openProduct(id){

    if(!id){
        return;
    }

    navigate(
        "/" + id
    );

}

/* ==========================================================
   SCROLL CATALOGUE
   ========================================================== */

function scrollToCatalogue(){

    const catalogue =
        document.getElementById(
            "catalogue"
        );

    if(!catalogue){
        return;
    }

    catalogue.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}

/* ==========================================================
   FILTERS
   ========================================================== */

function applyProductFilters(){

    const root =
        document.querySelector(
            ".products-page"
        );

    if(!root){
        return;
    }

    const input =
        root.querySelector(
            "#productsSearch"
        );

    const searchTerm =
        input
            ? input.value
                .trim()
                .toLowerCase()
            : "";

    const activeFilter =
        root.querySelector(
            ".products-filter.active"
        );

    const selectedCategory =
        activeFilter
            ? activeFilter.dataset.category
            : "all";

    const cards =
        root.querySelectorAll(
            ".products-card"
        );

    let visibleCount = 0;

    cards.forEach(
        card => {

            const name =
                card.dataset.name || "";

            const category =
                (
                    card.dataset.category ||
                    ""
                ).toLowerCase();

            const universe =
                (
                    card.dataset.universe ||
                    ""
                ).toLowerCase();

            const description =
                card.dataset.description ||
                "";

            const tags =
                card.dataset.tags ||
                "";

            const searchableText =
                [
                    name,
                    category,
                    universe,
                    description,
                    tags
                ]
                    .join(" ")
                    .toLowerCase();

            const matchesSearch =
                !searchTerm ||
                searchableText.includes(
                    searchTerm
                );

            const matchesCategory =
                selectedCategory ===
                    "all" ||
                category ===
                    selectedCategory.toLowerCase();

            const visible =
                matchesSearch &&
                matchesCategory;

            card.classList.toggle(
                "product-hidden",
                !visible
            );

            if(visible){

                visibleCount++;

            }

        }
    );

    updateResultsCount(
        visibleCount
    );

    updateEmptyState(
        visibleCount === 0
    );

}

/* ==========================================================
   RESULT COUNT
   ========================================================== */

function updateResultsCount(
    count
){

    const info =
        document.getElementById(
            "productsResultsInfo"
        );

    if(!info){
        return;
    }

    const label =
        count === 1
            ? "produto"
            : "produtos";

    info.innerHTML = `

        <span>
            ${count} ${label}
        </span>

    `;

}

/* ==========================================================
   EMPTY
   ========================================================== */

function updateEmptyState(
    empty
){

    const element =
        document.getElementById(
            "productsEmpty"
        );

    if(!element){
        return;
    }

    element.classList.toggle(
        "visible",
        empty
    );

}

/* ==========================================================
   RESET
   ========================================================== */

function resetProductFilters(){

    const root =
        document.querySelector(
            ".products-page"
        );

    if(!root){
        return;
    }

    const input =
        root.querySelector(
            "#productsSearch"
        );

    if(input){

        input.value = "";

    }

    root
        .querySelectorAll(
            ".products-filter"
        )
        .forEach(
            button => {

                const active =
                    button.dataset.category ===
                    "all";

                button.classList.toggle(
                    "active",
                    active
                );

                button.setAttribute(
                    "aria-pressed",
                    active
                        ? "true"
                        : "false"
                );

            }
        );

    applyProductFilters();

}

/* ==========================================================
   MAP CATEGORY
   ========================================================== */

function mapCategoryToFilter(
    label
){

    const map = {

        WELLNESS:
            "all",

        NUTRITION:
            "NUTRIÇÃO",

        PERFORMANCE:
            "PERFORMANCE",

        BEAUTY:
            "BELEZA & BEM-ESTAR",

        "SMART LIVING":
            "SMART LIVING"

    };

    const target =
        map[label];

    if(!target){
        return;
    }

    const filter =
        document.querySelector(
            `.products-filter[data-category="${target}"]`
        );

    if(filter){

        filter.click();

        scrollToCatalogue();

    }

}

/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(){

    const message =
        "Olá AD Lifestyle! Gostaria de receber informações sobre os produtos disponíveis.";

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}

/* ==========================================================
   KEYBOARD
   ========================================================== */

function bindKeyboard(){

    if(keyboardBound){
        return;
    }

    keyboardBound = true;

    document.addEventListener(
        "keydown",
        function(event){

            if(
                !document.querySelector(
                    ".products-page"
                )
            ){
                return;
            }

            const activeTag =
                document.activeElement
                    ?.tagName;

            if(
                activeTag === "INPUT" ||
                activeTag === "TEXTAREA" ||
                activeTag === "SELECT"
            ){
                return;
            }

            if(
                event.key ===
                "ArrowRight"
            ){

                pauseSlideshow();

                changeSlide(
                    currentSlide + 1
                );

                startSlideshow();

            }

            if(
                event.key ===
                "ArrowLeft"
            ){

                pauseSlideshow();

                changeSlide(
                    currentSlide - 1
                );

                startSlideshow();

            }

        }
    );

}

/* ==========================================================
   SWIPE
   ========================================================== */

function initialiseSwipe(
    root
){

    const hero =
        root.querySelector(
            ".products-hero"
        );

    if(!hero){
        return;
    }

    let startX = 0;
    let startY = 0;

    hero.addEventListener(
        "touchstart",
        function(event){

            const touch =
                event.changedTouches[0];

            startX =
                touch.clientX;

            startY =
                touch.clientY;

        },
        {
            passive:true
        }
    );

    hero.addEventListener(
        "touchend",
        function(event){

            const touch =
                event.changedTouches[0];

            const distanceX =
                touch.clientX -
                startX;

            const distanceY =
                touch.clientY -
                startY;

            if(
                Math.abs(distanceX) <
                55
            ){
                return;
            }

            if(
                Math.abs(distanceY) >
                Math.abs(distanceX)
            ){
                return;
            }

            pauseSlideshow();

            if(distanceX < 0){

                changeSlide(
                    currentSlide + 1
                );

            }else{

                changeSlide(
                    currentSlide - 1
                );

            }

            startSlideshow();

        },
        {
            passive:true
        }
    );

}

/* ==========================================================
   REVEAL
   ========================================================== */

function initialiseReveal(
    root
){

    const elements =
        root.querySelectorAll(
            `
            .products-reveal,
            .products-card,
            .products-category-card,
            .products-philosophy-card
            `
        );

    if(
        !("IntersectionObserver" in window)
    ){

        elements.forEach(
            element => {

                element.classList.add(
                    "products-visible"
                );

            }
        );

        return;
    }

    const observer =
        new IntersectionObserver(
            function(entries){

                entries.forEach(
                    entry => {

                        if(
                            !entry.isIntersecting
                        ){
                            return;
                        }

                        entry.target.classList.add(
                            "products-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:.08,
                rootMargin:
                    "0px 0px -35px"
            }
        );

    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}
