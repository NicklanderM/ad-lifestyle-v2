/* ==========================================================
   AD LIFESTYLE V2
   PRODUCTS PAGE
   Premium Product Showcase
   Editorial / Immersive / Elegant
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple } from "../js/animations.js";

/* ==========================================================
   DATA
   ========================================================== */

const PRODUCTS = [

    {
        id: "angel",
        category: "CUIDADO FEMININO",
        name: "Angel Moon",
        image: "./assets/products/angel.png",
        description:
            "Uma experiência de cuidado feminino pensada para conforto, confiança e bem-estar.",
        tags: [
            "Conforto",
            "Premium",
            "Feminino"
        ]
    },

    {
        id: "ezeno",
        category: "SAÚDE ORAL",
        name: "EZENO",
        image: "./assets/products/ezeno.png",
        description:
            "Uma solução de higiene oral concebida para integrar qualidade e cuidado na rotina diária.",
        tags: [
            "Saúde",
            "Oral",
            "Daily"
        ]
    },

    {
        id: "zenbru",
        category: "CAFÉ FUNCIONAL",
        name: "Zenbru",
        image: "./assets/products/zenbru.png",
        description:
            "Uma experiência de café pensada para acompanhar energia, sabor e equilíbrio no quotidiano.",
        tags: [
            "Café",
            "Energia",
            "Lifestyle"
        ]
    },

    {
        id: "alpha",
        category: "PERFORMANCE",
        name: "Alpha Vmax",
        image: "./assets/products/alpha.png",
        description:
            "Uma solução orientada para homens que valorizam vitalidade, confiança e performance.",
        tags: [
            "Performance",
            "Homem",
            "Elite"
        ]
    },

    {
        id: "alphameta",
        category: "NUTRIÇÃO",
        name: "AlphaMeta",
        image: "./assets/products/alphameta.png",
        description:
            "Uma proposta de nutrição baseada em cereais Oryza para acompanhar diferentes momentos do dia.",
        tags: [
            "Nutrição",
            "Oryza",
            "Premium"
        ]
    },

    {
        id: "minoseed",
        category: "BELEZA & BEM-ESTAR",
        name: "Minoseed",
        image: "./assets/products/minoseed.png",
        description:
            "Uma solução orientada para beleza, cuidado pessoal e bem-estar no dia a dia.",
        tags: [
            "Beleza",
            "Cuidado",
            "Lifestyle"
        ]
    },

    {
        id: "evador",
        category: "CUIDADOS PREMIUM",
        name: "Evador",
        image: "./assets/products/evador.png",
        description:
            "Uma experiência premium de cuidado pessoal marcada por elegância e sofisticação.",
        tags: [
            "Elegância",
            "Premium",
            "Daily"
        ]
    },

    {
        id: "alphaspin-ultra",
        category: "SMART LIVING",
        name: "AlphaSpin Ultra",
        image: "./assets/products/alphaspin-ultra.png",
        description:
            "Tecnologia, inovação e uma abordagem contemporânea ao universo do smart living.",
        tags: [
            "Smart",
            "Tecnologia",
            "Inovação"
        ]
    },

    {
        id: "ismarts3",
        category: "SMART LIVING",
        name: "iSMARTS3",
        image: "./assets/products/ismarts3.png",
        description:
            "Uma experiência de smart living criada para integrar inovação e conforto ao quotidiano.",
        tags: [
            "Smart",
            "Lifestyle",
            "Inovação"
        ]
    }

];

/* ==========================================================
   STATE
   ========================================================== */

let currentSlide = 0;
let slideTimer = null;
let isAnimating = false;

/* ==========================================================
   MAIN
   ========================================================== */

export function loadProducts(){

    applyTheme("default");

    const app = document.getElementById("app");

    if(!app){

        console.error(
            "AD LIFESTYLE: #app não encontrado."
        );

        return;
    }

    app.innerHTML = `
        <main class="products-page">

            ${renderHero()}

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

    const product = PRODUCTS[0];

    return `

        <section
            class="products-hero"
            id="products-top"
        >

            <div class="products-hero-background"></div>

            <div class="products-hero-glow"></div>

            <div class="products-container">

                <div class="products-hero-top">

                    <div class="products-hero-brand">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle"
                        >

                        <span>
                            AD LIFESTYLE
                        </span>

                    </div>

                    <div class="products-hero-index">
                        COLLECTION / 2026
                    </div>

                </div>

                <div class="products-hero-main">

                    <div class="products-hero-content">

                        <div class="products-eyebrow">
                            O UNIVERSO DE PRODUTOS
                        </div>

                        <div
                            class="products-slide-number"
                            id="productsSlideNumber"
                        >
                            01 / 09
                        </div>

                        <h1 id="productsHeroTitle">
                            ${product.name}
                        </h1>

                        <div
                            class="products-hero-category"
                            id="productsHeroCategory"
                        >
                            ${product.category}
                        </div>

                        <p id="productsHeroDescription">
                            ${product.description}
                        </p>

                        <div
                            class="products-hero-tags"
                            id="productsHeroTags"
                        >
                            ${renderHeroTags(product)}
                        </div>

                        <div class="products-hero-actions">

                            <button
                                class="products-button products-button-gold"
                                id="productsDiscover"
                            >

                                <span>
                                    Descobrir produto
                                </span>

                                ${icons.arrow}

                            </button>

                            <button
                                class="products-button products-button-outline"
                                id="productsCatalogue"
                            >
                                Explorar catálogo
                            </button>

                        </div>

                    </div>

                    <div class="products-hero-product">

                        <div class="products-hero-product-orbit"></div>

                        <div
                            class="products-hero-product-image"
                            id="productsHeroImage"
                        >

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >

                        </div>

                        <div class="products-hero-product-shadow"></div>

                        <div class="products-hero-label">

                            <span>
                                FEATURED
                            </span>

                            <strong>
                                ${product.name}
                            </strong>

                        </div>

                    </div>

                </div>

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
                            ${icons.prev}
                        </button>

                        <button
                            type="button"
                            id="productsNext"
                            aria-label="Próximo produto"
                        >
                            ${icons.next}
                        </button>

                    </div>

                    <div
                        class="products-slide-name"
                        id="productsSlideName"
                    >
                        ${product.category}
                    </div>

                </div>

                <div class="products-thumbs">

                    ${PRODUCTS.map(
                        (item, index) => `
                            <button
                                type="button"
                                class="products-thumb ${
                                    index === 0
                                        ? "active"
                                        : ""
                                }"
                                data-slide="${index}"
                                aria-label="Ver ${item.name}"
                            >

                                <img
                                    src="${item.image}"
                                    alt="${item.name}"
                                >

                                <span>
                                    0${index + 1}
                                </span>

                            </button>
                        `
                    ).join("")}

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
   CATEGORIES
   ========================================================== */

function renderCategories(){

    return `

        <section class="products-categories">

            <div class="products-container">

                <div class="products-section-heading">

                    <div>

                        <div class="products-eyebrow">
                            CATEGORIAS
                        </div>

                        <h2>
                            Um universo.
                            <span>Várias possibilidades.</span>
                        </h2>

                    </div>

                    <p>
                        Descubra diferentes áreas do catálogo
                        e encontre soluções que podem fazer parte
                        do seu estilo de vida.
                    </p>

                </div>

                <div class="products-category-grid">

                    ${categoryCard(
                        "01",
                        "Wellness",
                        "Cuidados e bem-estar"
                    )}

                    ${categoryCard(
                        "02",
                        "Nutrition",
                        "Nutrição e energia"
                    )}

                    ${categoryCard(
                        "03",
                        "Performance",
                        "Vitalidade e performance"
                    )}

                    ${categoryCard(
                        "04",
                        "Beauty",
                        "Beleza e cuidados"
                    )}

                    ${categoryCard(
                        "05",
                        "Smart Living",
                        "Inovação no quotidiano"
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

        <article class="products-category-card">

            <span class="products-category-number">
                ${number}
            </span>

            <div class="products-category-copy">

                <h3>
                    ${title}
                </h3>

                <p>
                    ${description}
                </p>

            </div>

            <span class="products-category-arrow">
                ${icons.arrow}
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

                <div class="products-section-heading products-section-heading-centred">

                    <div>

                        <div class="products-eyebrow">
                            CATÁLOGO COMPLETO
                        </div>

                        <h2>
                            Produtos escolhidos
                            <span>para diferentes jornadas.</span>
                        </h2>

                    </div>

                    <p>
                        Explore o catálogo completo da AD Lifestyle.
                        Cada produto possui uma identidade própria
                        e uma experiência dedicada.
                    </p>

                </div>

                <div class="products-grid">

                    ${PRODUCTS.map(
                        productCard
                    ).join("")}

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   PRODUCT CARD
   ========================================================== */

function productCard(product, index){

    return `

        <article
            class="products-card"
            data-product="${product.id}"
            data-index="${index}"
        >

            <div class="products-card-image">

                <span class="products-card-number">
                    ${String(index + 1).padStart(2,"0")}
                </span>

                <div class="products-card-glow"></div>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="products-card-category">
                    ${product.category}
                </span>

            </div>

            <div class="products-card-content">

                <span class="products-card-label">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="products-card-tags">

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
                    class="products-card-button"
                    data-product-action="${product.id}"
                >

                    <span>
                        Descobrir
                    </span>

                    ${icons.arrow}

                </button>

            </div>

        </article>

    `;

}

/* ==========================================================
   FEATURED
   ========================================================== */

function renderFeatured(){

    return `

        <section class="products-featured">

            <div class="products-container">

                <div class="products-featured-box">

                    <div class="products-featured-image">

                        <img
                            src="./assets/products/zenbru.png"
                            alt="Zenbru"
                            loading="lazy"
                        >

                    </div>

                    <div class="products-featured-content">

                        <div class="products-eyebrow">
                            AD LIFESTYLE EXPERIENCE
                        </div>

                        <h2>
                            Cada produto
                            <span>tem uma história.</span>
                        </h2>

                        <p>
                            O nosso catálogo não foi pensado para
                            ser apenas uma lista de produtos.
                            Cada solução possui uma identidade,
                            uma função e uma experiência própria.
                        </p>

                        <p>
                            Entre diferentes universos de wellness,
                            nutrição, performance, beleza e smart
                            living, procuramos apresentar possibilidades
                            para diferentes estilos de vida.
                        </p>

                        <button
                            type="button"
                            class="products-button products-button-dark"
                            id="productsFeaturedButton"
                        >
                            <span>
                                Ver todos os produtos
                            </span>

                            ${icons.arrow}
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

        <section class="products-philosophy">

            <div class="products-container">

                <div class="products-philosophy-heading">

                    <div class="products-eyebrow">
                        FILOSOFIA AD LIFESTYLE
                    </div>

                    <h2>
                        Muito além de produtos.
                        <span>Uma experiência.</span>
                    </h2>

                </div>

                <div class="products-philosophy-grid">

                    <article>

                        <span>
                            01
                        </span>

                        <h3>
                            Wellness
                        </h3>

                        <p>
                            Soluções e experiências orientadas
                            para cuidado, bem-estar e lifestyle.
                        </p>

                    </article>

                    <article>

                        <span>
                            02
                        </span>

                        <h3>
                            Conhecimento
                        </h3>

                        <p>
                            Uma visão que aproxima produtos
                            de aprendizagem e desenvolvimento.
                        </p>

                    </article>

                    <article>

                        <span>
                            03
                        </span>

                        <h3>
                            Inovação
                        </h3>

                        <p>
                            Uma perspectiva contemporânea
                            para viver, aprender e evoluir.
                        </p>

                    </article>

                    <article>

                        <span>
                            04
                        </span>

                        <h3>
                            Pessoas
                        </h3>

                        <p>
                            Tudo começa e termina na experiência
                            humana que queremos criar.
                        </p>

                    </article>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   CTA
   ========================================================== */

function renderCTA(){

    return `

        <section class="products-cta">

            <div class="products-container">

                <div class="products-cta-box">

                    <div class="products-cta-logo">

                        <img
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle"
                        >

                    </div>

                    <div class="products-cta-content">

                        <div class="products-eyebrow">
                            AD LIFESTYLE
                        </div>

                        <h2>
                            Encontre a solução
                            <span>certa para si.</span>
                        </h2>

                        <p>
                            Explore o catálogo, descubra cada produto
                            ou fale directamente connosco para obter
                            orientação.
                        </p>

                    </div>

                    <div class="products-cta-actions">

                        <button
                            type="button"
                            class="products-button products-button-gold"
                            id="productsCTAWhats"
                        >
                            <span>
                                Falar no WhatsApp
                            </span>

                            ${icons.arrow}
                        </button>

                        <button
                            type="button"
                            class="products-button products-button-outline"
                            id="productsCTAHome"
                        >
                            <span>
                                Voltar ao início
                            </span>
                        </button>

                    </div>

                </div>

            </div>

        </section>

    `;

}

/* ==========================================================
   ICONS
   ========================================================== */

const icons = {

    arrow: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13"></path>
            <path d="M13 6l6 6-6 6"></path>
        </svg>
    `,

    prev: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5"></path>
            <path d="M11 6l-6 6 6 6"></path>
        </svg>
    `,

    next: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M13 6l6 6-6 6"></path>
        </svg>
    `

};

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseProducts(){

    /* ------------------------------------------------------
       Buttons
       ------------------------------------------------------ */

    document
        .querySelectorAll(
            ".products-page .products-button"
        )
        .forEach(button => {

            if(typeof ripple === "function"){
                ripple(button);
            }

        });

    /* ------------------------------------------------------
       Hero controls
       ------------------------------------------------------ */

    document
        .getElementById("productsPrev")
        ?.addEventListener(
            "click",
            () => {
                changeSlide(
                    currentSlide - 1
                );
            }
        );

    document
        .getElementById("productsNext")
        ?.addEventListener(
            "click",
            () => {
                changeSlide(
                    currentSlide + 1
                );
            }
        );

    /* ------------------------------------------------------
       Thumbnails
       ------------------------------------------------------ */

    document
        .querySelectorAll(
            ".products-thumb"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.slide
                        );

                    changeSlide(index);

                }
            );

        });

    /* ------------------------------------------------------
       Hero discovery
       ------------------------------------------------------ */

    document
        .getElementById("productsDiscover")
        ?.addEventListener(
            "click",
            () => {

                const product =
                    PRODUCTS[currentSlide];

                openProduct(
                    product.id
                );

            }
        );

    /* ------------------------------------------------------
       Catalogue buttons
       ------------------------------------------------------ */

    document
        .getElementById("productsCatalogue")
        ?.addEventListener(
            "click",
            scrollToCatalogue
        );

    document
        .querySelectorAll(
            ".products-card-button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openProduct(
                        button.dataset.productAction
                    );

                }
            );

        });

    document
        .querySelectorAll(
            ".products-card"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    openProduct(
                        card.dataset.product
                    );

                }
            );

        });

    /* ------------------------------------------------------
       Featured
       ------------------------------------------------------ */

    document
        .getElementById("productsFeaturedButton")
        ?.addEventListener(
            "click",
            scrollToCatalogue
        );

    /* ------------------------------------------------------
       CTA
       ------------------------------------------------------ */

    document
        .getElementById("productsCTAWhats")
        ?.addEventListener(
            "click",
            openWhatsApp
        );

    document
        .getElementById("productsCTAHome")
        ?.addEventListener(
            "click",
            () => navigate("/")
        );

    /* ------------------------------------------------------
       Keyboard navigation
       ------------------------------------------------------ */

    document.addEventListener(
        "keydown",
        handleKeyboard
    );

    /* ------------------------------------------------------
       Auto slideshow
       ------------------------------------------------------ */

    startSlideshow();

    const hero =
        document.querySelector(
            ".products-hero"
        );

    if(hero){

        hero.addEventListener(
            "mouseenter",
            pauseSlideshow
        );

        hero.addEventListener(
            "mouseleave",
            startSlideshow
        );

    }

    /* ------------------------------------------------------
       Touch swipe
       ------------------------------------------------------ */

    initialiseSwipe();

    /* ------------------------------------------------------
       Initial reveals
       ------------------------------------------------------ */

    initialiseReveal();

}

/* ==========================================================
   CHANGE SLIDE
   ========================================================== */

function changeSlide(index){

    if(isAnimating){
        return;
    }

    isAnimating = true;

    const total =
        PRODUCTS.length;

    if(index < 0){
        index = total - 1;
    }

    if(index >= total){
        index = 0;
    }

    currentSlide = index;

    const product =
        PRODUCTS[currentSlide];

    const imageWrap =
        document.getElementById(
            "productsHeroImage"
        );

    const oldImage =
        imageWrap?.querySelector("img");

    if(imageWrap){

        imageWrap.classList.add(
            "is-changing"
        );

        setTimeout(
            () => {

                if(oldImage){
                    oldImage.remove();
                }

                const img =
                    document.createElement(
                        "img"
                    );

                img.src =
                    product.image;

                img.alt =
                    product.name;

                img.loading =
                    "eager";

                imageWrap.appendChild(img);

            },
            180
        );

        setTimeout(
            () => {

                imageWrap.classList.remove(
                    "is-changing"
                );

                isAnimating = false;

            },
            580
        );

    }else{
        isAnimating = false;
    }

    updateHeroText(
        product
    );

    updateThumbnails();

    resetProgress();

}

/* ==========================================================
   UPDATE HERO TEXT
   ========================================================== */

function updateHeroText(product){

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

    if(title){

        title.classList.remove(
            "is-text-changing"
        );

        void title.offsetWidth;

        title.textContent =
            product.name;

        title.classList.add(
            "is-text-changing"
        );

    }

    if(category){
        category.textContent =
            product.category;
    }

    if(description){
        description.textContent =
            product.description;
    }

    if(tags){
        tags.innerHTML =
            renderHeroTags(product);
    }

    if(number){

        number.textContent =
            `${String(currentSlide + 1).padStart(2,"0")} / ${String(PRODUCTS.length).padStart(2,"0")}`;

    }

    if(slideName){
        slideName.textContent =
            product.category;
    }

}

/* ==========================================================
   THUMBNAILS
   ========================================================== */

function updateThumbnails(){

    document
        .querySelectorAll(
            ".products-thumb"
        )
        .forEach(
            (button, index) => {

                button.classList.toggle(
                    "active",
                    index === currentSlide
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
        "productsProgress 6s linear forwards";

}

/* ==========================================================
   SLIDESHOW
   ========================================================== */

function startSlideshow(){

    clearInterval(
        slideTimer
    );

    resetProgress();

    slideTimer =
        setInterval(
            () => {

                changeSlide(
                    currentSlide + 1
                );

            },
            6000
        );

}

function pauseSlideshow(){

    clearInterval(
        slideTimer
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
        `/products/${id}`
    );

}

/* ==========================================================
   CATALOGUE SCROLL
   ========================================================== */

function scrollToCatalogue(){

    const target =
        document.getElementById(
            "catalogue"
        );

    if(!target){
        return;
    }

    target.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

}

/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(){

    const message =
        "Olá AD Lifestyle! Gostaria de receber orientação sobre os produtos.";

    window.open(
        `https://wa.me/244924964666?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}

/* ==========================================================
   KEYBOARD
   ========================================================== */

function handleKeyboard(event){

    const tag =
        document.activeElement?.tagName;

    if(
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT"
    ){
        return;
    }

    if(event.key === "ArrowRight"){

        changeSlide(
            currentSlide + 1
        );

    }

    if(event.key === "ArrowLeft"){

        changeSlide(
            currentSlide - 1
        );

    }

}

/* ==========================================================
   TOUCH
   ========================================================== */

function initialiseSwipe(){

    const hero =
        document.querySelector(
            ".products-hero"
        );

    if(!hero){
        return;
    }

    let startX = 0;

    hero.addEventListener(
        "touchstart",
        event => {

            startX =
                event.changedTouches[0].clientX;

        },
        {
            passive:true
        }
    );

    hero.addEventListener(
        "touchend",
        event => {

            const endX =
                event.changedTouches[0].clientX;

            const distance =
                endX - startX;

            if(
                Math.abs(distance) < 50
            ){
                return;
            }

            if(distance < 0){

                changeSlide(
                    currentSlide + 1
                );

            }else{

                changeSlide(
                    currentSlide - 1
                );

            }

        },
        {
            passive:true
        }
    );

}

/* ==========================================================
   REVEAL
   ========================================================== */

function initialiseReveal(){

    const elements =
        document.querySelectorAll(
            `
            .products-category-card,
            .products-card,
            .products-featured-box,
            .products-philosophy-heading,
            .products-philosophy-grid,
            .products-cta-box
            `
        );

    if(
        !("IntersectionObserver" in window)
    ){

        elements.forEach(
            element =>
                element.classList.add(
                    "products-visible"
                )
        );

        return;
    }

    const observer =
        new IntersectionObserver(
            entries => {

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
                threshold:.1,
                rootMargin:
                    "0px 0px -35px"
            }
        );

    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}
