/* ==========================================================
   AD LIFESTYLE V2
   HOME.JS
   Immersive Home Experience
   ========================================================== */

import { applyTheme } from "../js/theme.js";

const WHATSAPP_NUMBER = "244924964666";

const PRODUCTS = [
    {
        id: "angel",
        name: "Angel Moon",
        category: "WELLNESS",
        universe: "Bem-estar",
        eyebrow: "Cuidado feminino",
        description:
            "Uma experiência de cuidado feminino pensada para conforto, confiança e bem-estar.",
        image: "./assets/products/angel.png",
        accent: "#c98fa6",
        accentSoft: "#f3dce5",
        accentDark: "#6d3e50",
        index: "01"
    },
    {
        id: "ezeno",
        name: "EZENO",
        category: "WELLNESS",
        universe: "Saúde oral",
        eyebrow: "Rotina diária",
        description:
            "Uma proposta de higiene oral integrada numa rotina de cuidado simples e consistente.",
        image: "./assets/products/ezeno.png",
        accent: "#6b9f90",
        accentSoft: "#d9ebe4",
        accentDark: "#315d51",
        index: "02"
    },
    {
        id: "zenbru",
        name: "Zenbru",
        category: "LIFESTYLE",
        universe: "Café funcional",
        eyebrow: "Ritmo & experiência",
        description:
            "Uma experiência de café criada para acompanhar o seu ritmo e os seus momentos.",
        image: "./assets/products/zenbru.png",
        accent: "#ad8055",
        accentSoft: "#eadbc9",
        accentDark: "#5b4028",
        index: "03"
    },
    {
        id: "alpha",
        name: "Alpha Vmax",
        category: "PERFORMANCE",
        universe: "Performance",
        eyebrow: "Energia & movimento",
        description:
            "Uma proposta orientada para quem procura evolução, movimento e consistência.",
        image: "./assets/products/alpha.png",
        accent: "#9b7a49",
        accentSoft: "#eadfc9",
        accentDark: "#514126",
        index: "04"
    },
    {
        id: "alphameta",
        name: "AlphaMeta",
        category: "WELLNESS",
        universe: "Nutrição",
        eyebrow: "Equilíbrio diário",
        description:
            "Nutrição e rotina numa experiência pensada para integrar diferentes momentos do dia.",
        image: "./assets/products/alphameta.png",
        accent: "#b39a61",
        accentSoft: "#ede6d2",
        accentDark: "#5d4d2e",
        index: "05"
    },
    {
        id: "minoseed",
        name: "Minoseed",
        category: "LIFESTYLE",
        universe: "Beleza & bem-estar",
        eyebrow: "Cuidado pessoal",
        description:
            "Uma experiência de cuidado pessoal inspirada numa visão mais completa de bem-estar.",
        image: "./assets/products/minoseed.png",
        accent: "#9b6d84",
        accentSoft: "#ecdde5",
        accentDark: "#583b4a",
        index: "06"
    },
    {
        id: "evador",
        name: "Evador",
        category: "LIFESTYLE",
        universe: "Cuidados premium",
        eyebrow: "Elegância quotidiana",
        description:
            "Cuidado e apresentação reunidos numa experiência premium para o quotidiano.",
        image: "./assets/products/evador.png",
        accent: "#9f896d",
        accentSoft: "#e9dfd2",
        accentDark: "#554635",
        index: "07"
    },
    {
        id: "alphaspin-ultra",
        name: "AlphaSpin Ultra",
        category: "SMART LIVING",
        universe: "Tecnologia",
        eyebrow: "Inovação",
        description:
            "Tecnologia e inovação aplicadas a uma experiência de utilização moderna e inteligente.",
        image: "./assets/products/alphaspin-ultra.png",
        accent: "#7798a9",
        accentSoft: "#dce9ee",
        accentDark: "#385765",
        index: "08"
    },
    {
        id: "ismarts3",
        name: "iSMARTS3",
        category: "SMART LIVING",
        universe: "Smart Living",
        eyebrow: "Casa & futuro",
        description:
            "Uma visão mais inteligente do quotidiano, onde tecnologia e experiência se encontram.",
        image: "./assets/products/ismarts3.png",
        accent: "#738c98",
        accentSoft: "#dce6ea",
        accentDark: "#344c56",
        index: "09"
    }
];

const HERO_SLIDES = [
    {
        type: "brand",
        category: "AD LIFESTYLE",
        eyebrow: "Uma experiência para descobrir",
        title: "A sua vida.",
        titleAccent: "A sua experiência.",
        description:
            "Um ecossistema onde Wellness, Lifestyle, Performance e Smart Living se encontram.",
        image: "./assets/logo/logo.png",
        accent: "#b8924a",
        accentSoft: "#efe5cf",
        accentDark: "#4d3a1f",
        index: "00"
    },
    {
        type: "product",
        productId: "angel",
        eyebrow: "WELLNESS · CUIDADO FEMININO",
        title: "Comece pelo",
        titleAccent: "cuidado.",
        description:
            "Conforto, confiança e bem-estar numa experiência pensada para a mulher.",
        accent: "#c98fa6",
        accentSoft: "#f3dce5",
        accentDark: "#6d3e50",
        index: "01"
    },
    {
        type: "product",
        productId: "ezeno",
        eyebrow: "WELLNESS · SAÚDE ORAL",
        title: "Cuidar também é",
        titleAccent: "rotina.",
        description:
            "Pequenos gestos podem transformar a experiência diária de cuidado.",
        accent: "#6b9f90",
        accentSoft: "#d9ebe4",
        accentDark: "#315d51",
        index: "02"
    },
    {
        type: "product",
        productId: "zenbru",
        eyebrow: "LIFESTYLE · CAFÉ FUNCIONAL",
        title: "Encontre o seu",
        titleAccent: "ritmo.",
        description:
            "Sabor, experiência e lifestyle para acompanhar os seus momentos.",
        accent: "#ad8055",
        accentSoft: "#eadbc9",
        accentDark: "#5b4028",
        index: "03"
    },
    {
        type: "product",
        productId: "alpha",
        eyebrow: "PERFORMANCE · MOVIMENTO",
        title: "Continue em",
        titleAccent: "evolução.",
        description:
            "Uma experiência orientada para movimento, disciplina e progresso.",
        accent: "#9b7a49",
        accentSoft: "#eadfc9",
        accentDark: "#514126",
        index: "04"
    },
    {
        type: "product",
        productId: "alphameta",
        eyebrow: "WELLNESS · NUTRIÇÃO",
        title: "O equilíbrio começa",
        titleAccent: "por dentro.",
        description:
            "Nutrição integrada numa abordagem contemporânea ao bem-estar.",
        accent: "#b39a61",
        accentSoft: "#ede6d2",
        accentDark: "#5d4d2e",
        index: "05"
    },
    {
        type: "product",
        productId: "minoseed",
        eyebrow: "LIFESTYLE · BELEZA",
        title: "Cuidado que se",
        titleAccent: "vive.",
        description:
            "Beleza, cuidado pessoal e bem-estar numa mesma experiência.",
        accent: "#9b6d84",
        accentSoft: "#ecdde5",
        accentDark: "#583b4a",
        index: "06"
    },
    {
        type: "product",
        productId: "evador",
        eyebrow: "LIFESTYLE · CUIDADOS PREMIUM",
        title: "Eleve o seu",
        titleAccent: "quotidiano.",
        description:
            "Elegância e cuidado numa proposta criada para o dia a dia.",
        accent: "#9f896d",
        accentSoft: "#e9dfd2",
        accentDark: "#554635",
        index: "07"
    },
    {
        type: "product",
        productId: "alphaspin-ultra",
        eyebrow: "SMART LIVING · TECNOLOGIA",
        title: "O futuro já está",
        titleAccent: "aqui.",
        description:
            "Tecnologia e inovação para uma nova forma de viver o quotidiano.",
        accent: "#7798a9",
        accentSoft: "#dce9ee",
        accentDark: "#385765",
        index: "08"
    },
    {
        type: "product",
        productId: "ismarts3",
        eyebrow: "SMART LIVING · INOVAÇÃO",
        title: "Pense mais",
        titleAccent: "inteligentemente.",
        description:
            "Uma visão moderna do quotidiano através de soluções inteligentes.",
        accent: "#738c98",
        accentSoft: "#dce6ea",
        accentDark: "#344c56",
        index: "09"
    }
];

const MEMORIES = [
    {
        image: "./assets/images/h1.png",
        label: "Momentos",
        title: "Experiências que ficam."
    },
    {
        image: "./assets/images/h2.png",
        label: "Encontros",
        title: "Pessoas, ideias e conexões."
    },
    {
        image: "./assets/images/h3.png",
        label: "Comunidade",
        title: "Uma rede em movimento."
    },
    {
        image: "./assets/images/h4.png",
        label: "Evolução",
        title: "Sempre a caminhar para a frente."
    }
];

let heroIndex = 0;
let heroTimer = null;

let memoryIndex = 0;
let memoryTimer = null;

let heroPointerFrame = null;
let heroPointerX = 0;
let heroPointerY = 0;

export function loadHome() {
    applyTheme("default");

    const app = document.getElementById("app");

    if (!app) {
        console.error("AD Lifestyle: elemento #app não encontrado.");
        return;
    }

    app.innerHTML = `
        <main class="home-page">

            ${heroSection()}
            ${signalStrip()}
            ${manifestoSection()}
            ${worldsSection()}
            ${universesSection()}
            ${productsSection()}
            ${eventSection()}
            ${memoriesSection()}
            ${testimonialSection()}
            ${finalCta()}

        </main>
    `;

    initialiseHome();
}


/* ==========================================================
   HERO
   ========================================================== */

function heroSection() {
    return `
        <section class="home-hero" id="homeHero">

            <div class="home-hero-background" aria-hidden="true">
                <div class="home-hero-glow home-hero-glow-a"></div>
                <div class="home-hero-glow home-hero-glow-b"></div>
                <div class="home-hero-grid"></div>
            </div>

            <div class="home-hero-inner">

                <div class="home-hero-copy">

                    <div class="home-hero-index">
                        <span id="heroCurrentIndex">00</span>
                        <span class="home-hero-index-line"></span>
                        <span>09</span>
                    </div>

                    <p class="home-hero-eyebrow" id="heroEyebrow">
                        AD LIFESTYLE
                    </p>

                    <h1 class="home-hero-title">
                        <span id="heroTitle">A sua vida.</span>
                        <span class="home-hero-title-accent" id="heroTitleAccent">
                            A sua experiência.
                        </span>
                    </h1>

                    <p class="home-hero-description" id="heroDescription">
                        Um ecossistema onde Wellness, Lifestyle, Performance e Smart Living se encontram.
                    </p>

                    <div class="home-hero-actions">
                        <button class="home-button home-button-primary" id="heroPrimaryButton">
                            Descobrir a experiência
                        </button>

                        <button class="home-button home-button-ghost" id="heroSecondaryButton">
                            Explorar produtos
                        </button>
                    </div>

                </div>


                <div class="home-hero-stage">

                    <div class="home-hero-stage-noise"></div>

                    <div class="home-hero-halo"></div>

                    <div class="home-hero-product-backdrop"></div>

                    <div class="home-hero-product-shadow"></div>

                    <div class="home-hero-product-wrap" id="heroProductWrap">
                        <img
                            id="heroProductImage"
                            src="./assets/logo/logo.png"
                            alt="AD Lifestyle"
                        >
                    </div>

                    <div class="home-hero-product-number" id="heroProductNumber">
                        00
                    </div>

                    <div class="home-hero-product-category" id="heroProductCategory">
                        AD LIFESTYLE
                    </div>

                </div>

            </div>


            <div class="home-hero-controls">

                <button
                    class="home-hero-arrow"
                    id="heroPrev"
                    aria-label="Slide anterior"
                >
                    <span>←</span>
                </button>

                <div class="home-hero-progress">
                    <span id="heroProgressBar"></span>
                </div>

                <button
                    class="home-hero-arrow"
                    id="heroNext"
                    aria-label="Próximo slide"
                >
                    <span>→</span>
                </button>

            </div>


            <div class="home-hero-bottom">
                <span>AD LIFESTYLE</span>
                <span>DISCOVER · EXPERIENCE · EVOLVE</span>
            </div>

        </section>
    `;
}


/* ==========================================================
   SIGNAL STRIP
   ========================================================== */

function signalStrip() {
    return `
        <section class="home-signal-strip" aria-label="Universos AD Lifestyle">
            <div class="home-signal-track">
                <span>WELLNESS</span>
                <i></i>
                <span>LIFESTYLE</span>
                <i></i>
                <span>SMART LIVING</span>
                <i></i>
                <span>PERFORMANCE</span>
                <i></i>
                <span>WELLNESS</span>
                <i></i>
                <span>LIFESTYLE</span>
                <i></i>
                <span>SMART LIVING</span>
                <i></i>
                <span>PERFORMANCE</span>
            </div>
        </section>
    `;
}


/* ==========================================================
   MANIFESTO
   ========================================================== */

function manifestoSection() {
    return `
        <section class="home-manifesto home-reveal">

            <div class="home-manifesto-small">
                <span>01</span>
                <span>MANIFESTO</span>
            </div>

            <div class="home-manifesto-content">

                <p class="home-manifesto-kicker">
                    Na AD Lifestyle
                </p>

                <h2>
                    Viver melhor
                    <span>é também descobrir melhor.</span>
                </h2>

                <p class="home-manifesto-text">
                    Não queremos apenas apresentar produtos.
                    Criamos uma experiência que aproxima pessoas,
                    ideias, inovação, bem-estar e novas possibilidades.
                </p>

            </div>

        </section>
    `;
}


/* ==========================================================
   WORLDS
   ========================================================== */

function worldsSection() {
    return `
        <section class="home-worlds home-reveal">

            <div class="home-section-heading">
                <div>
                    <span class="home-section-index">02</span>
                    <span class="home-section-label">ECOSSISTEMA</span>
                </div>

                <h2>
                    Duas forças.
                    <span>Uma visão.</span>
                </h2>
            </div>


            <div class="home-world-grid">

                <article class="home-world-card home-world-bzz">

                    <div class="home-world-image">
                        <img
                            src="./assets/images/bzzworld.png"
                            alt="BZZWORLD"
                        >
                    </div>

                    <div class="home-world-overlay"></div>

                    <div class="home-world-content">

                        <span class="home-world-number">01</span>

                        <div>
                            <span class="home-world-eyebrow">
                                WELLNESS · BUSINESS
                            </span>

                            <h3>BZZWORLD</h3>

                            <p>
                                Uma visão internacional de bem-estar,
                                produtos e oportunidade.
                            </p>

                            <a
                                href="https://www.bzzworld.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="home-world-link"
                            >
                                Conhecer a BZZWORLD
                                <span>↗</span>
                            </a>
                        </div>

                    </div>

                </article>


                <article class="home-world-card home-world-a21">

                    <div class="home-world-image">
                        <img
                            src="./assets/images/a21.png"
                            alt="Academy Twenty One"
                        >
                    </div>

                    <div class="home-world-overlay"></div>

                    <div class="home-world-content">

                        <span class="home-world-number">02</span>

                        <div>
                            <span class="home-world-eyebrow">
                                EDUCAÇÃO · EVOLUÇÃO
                            </span>

                            <h3>ACADEMY TWENTY ONE</h3>

                            <p>
                                Conhecimento, liderança e desenvolvimento
                                para quem quer evoluir continuamente.
                            </p>

                            <a
                                href="https://www.academytwentyone.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="home-world-link"
                            >
                                Conhecer a Academy 21
                                <span>↗</span>
                            </a>
                        </div>

                    </div>

                </article>

            </div>

        </section>
    `;
}


/* ==========================================================
   UNIVERSES
   ========================================================== */

function universesSection() {
    return `
        <section class="home-universes home-reveal">

            <div class="home-section-heading home-section-heading-centered">

                <div>
                    <span class="home-section-index">03</span>
                    <span class="home-section-label">UNIVERSOS</span>
                </div>

                <h2>
                    Diferentes necessidades.
                    <span>Uma experiência integrada.</span>
                </h2>

            </div>


            <div class="home-universe-list">

                <article class="home-universe-row">
                    <div class="home-universe-number">01</div>

                    <div class="home-universe-main">
                        <span>01</span>
                        <h3>WELLNESS</h3>
                    </div>

                    <div class="home-universe-copy">
                        <strong>Bem-estar</strong>
                        <p>
                            Cuidado, autocuidado, nutrição e lifestyle.
                        </p>
                    </div>

                    <div class="home-universe-arrow">↗</div>
                </article>


                <article class="home-universe-row">
                    <div class="home-universe-number">02</div>

                    <div class="home-universe-main">
                        <span>02</span>
                        <h3>LIFESTYLE</h3>
                    </div>

                    <div class="home-universe-copy">
                        <strong>Experiência</strong>
                        <p>
                            Sabor, conforto, beleza e experiências premium.
                        </p>
                    </div>

                    <div class="home-universe-arrow">↗</div>
                </article>


                <article class="home-universe-row">
                    <div class="home-universe-number">03</div>

                    <div class="home-universe-main">
                        <span>03</span>
                        <h3>SMART LIVING</h3>
                    </div>

                    <div class="home-universe-copy">
                        <strong>Inteligência</strong>
                        <p>
                            Tecnologia, inovação e soluções para o quotidiano.
                        </p>
                    </div>

                    <div class="home-universe-arrow">↗</div>
                </article>


                <article class="home-universe-row">
                    <div class="home-universe-number">04</div>

                    <div class="home-universe-main">
                        <span>04</span>
                        <h3>PERFORMANCE</h3>
                    </div>

                    <div class="home-universe-copy">
                        <strong>Evolução</strong>
                        <p>
                            Movimento, consistência e mentalidade de progresso.
                        </p>
                    </div>

                    <div class="home-universe-arrow">↗</div>
                </article>

            </div>

        </section>
    `;
}


/* ==========================================================
   PRODUCTS
   ========================================================== */

function productsSection() {
    const featured = [
        PRODUCTS.find((item) => item.id === "angel"),
        PRODUCTS.find((item) => item.id === "ezeno"),
        PRODUCTS.find((item) => item.id === "zenbru"),
        PRODUCTS.find((item) => item.id === "ismarts3")
    ];

    return `
        <section class="home-products home-reveal">

            <div class="home-section-heading">

                <div>
                    <span class="home-section-index">04</span>
                    <span class="home-section-label">SELECÇÃO</span>
                </div>

                <h2>
                    Produtos que
                    <span>fazem parte da experiência.</span>
                </h2>

            </div>


            <div class="home-product-grid">

                ${featured
                    .map(
                        (product, index) => `
                            <article
                                class="home-product-card home-product-card-${index + 1}"
                                data-product-id="${product.id}"
                                style="
                                    --product-accent:${product.accent};
                                    --product-soft:${product.accentSoft};
                                    --product-dark:${product.accentDark};
                                "
                            >

                                <div class="home-product-card-background"></div>

                                <div class="home-product-card-top">
                                    <span>${product.index}</span>
                                    <span>${product.category}</span>
                                </div>

                                <div class="home-product-card-image">
                                    <img
                                        src="${product.image}"
                                        alt="${product.name}"
                                    >
                                </div>

                                <div class="home-product-card-content">

                                    <span>${product.eyebrow}</span>

                                    <h3>${product.name}</h3>

                                    <p>
                                        ${product.description}
                                    </p>

                                    <button
                                        class="home-product-card-link"
                                        data-product="${product.id}"
                                    >
                                        Ver produto
                                        <span>→</span>
                                    </button>

                                </div>

                            </article>
                        `
                    )
                    .join("")}

            </div>


            <div class="home-products-footer">

                <p>
                    Explore a colecção completa e descubra todos os universos
                    da AD Lifestyle.
                </p>

                <button
                    class="home-outline-button"
                    id="allProducts"
                >
                    Explorar todos os produtos
                    <span>↗</span>
                </button>

            </div>

        </section>
    `;
}


/* ==========================================================
   EVENT
   ========================================================== */

function eventSection() {
    return `
        <section class="home-event-section home-reveal">

            <div class="home-section-heading">

                <div>
                    <span class="home-section-index">05</span>
                    <span class="home-section-label">PRÓXIMO EVENTO</span>
                </div>

                <h2>
                    Um encontro para
                    <span>descobrir novas possibilidades.</span>
                </h2>

            </div>


            <article class="home-event-card">

                <div class="home-event-image">
                    <img
                        src="./assets/images/independente.png"
                        alt="Grande Evento AD Lifestyle"
                    >

                    <div class="home-event-image-caption">
                        <span>AD LIFESTYLE</span>
                        <strong>LIVE EXPERIENCE</strong>
                    </div>
                </div>


                <div class="home-event-content">

                    <span class="home-event-kicker">
                        GRANDE EVENTO
                    </span>

                    <div class="home-event-date-block">

                        <span class="home-event-day">
                            04–05
                        </span>

                        <div class="home-event-date-meta">
                            <strong>OUTUBRO</strong>
                            <span>2026</span>
                        </div>

                    </div>


                    <div class="home-event-divider"></div>


                    <div class="home-event-location">

                        <span>LOCAL</span>

                        <strong>
                            Anfiteatro da
                            <br>
                            Universidade Independente
                        </strong>

                        <p>
                            Luanda · Angola
                        </p>

                    </div>


                    <div class="home-event-tags">
                        <span>Wellness</span>
                        <span>Negócios</span>
                        <span>Educação</span>
                    </div>


                    <button
                        class="home-event-button"
                        id="eventButton"
                    >
                        Saber mais sobre o evento
                        <span>↗</span>
                    </button>

                </div>

            </article>

        </section>
    `;
}


/* ==========================================================
   MEMORIES
   ========================================================== */

function memoriesSection() {
    return `
        <section class="home-memories home-reveal">

            <div class="home-section-heading">

                <div>
                    <span class="home-section-index">06</span>
                    <span class="home-section-label">MEMÓRIAS</span>
                </div>

                <h2>
                    Experiências que
                    <span>continuam depois do encontro.</span>
                </h2>

            </div>


            <div class="home-memory-stage" id="homeMemoryStage">

                <div class="home-memory-image-wrap">
                    <img
                        id="homeMemoryImage"
                        src="./assets/images/h1.png"
                        alt="Memórias AD Lifestyle"
                    >
                </div>

                <div class="home-memory-content">

                    <span id="homeMemoryLabel">Momentos</span>

                    <h3 id="homeMemoryTitle">
                        Experiências que ficam.
                    </h3>

                    <div class="home-memory-controls">

                        <button
                            id="memoryPrev"
                            aria-label="Memória anterior"
                        >
                            ←
                        </button>

                        <div class="home-memory-progress">
                            <span id="memoryProgressBar"></span>
                        </div>

                        <button
                            id="memoryNext"
                            aria-label="Próxima memória"
                        >
                            →
                        </button>

                    </div>

                </div>

            </div>

        </section>
    `;
}


/* ==========================================================
   TESTIMONIAL
   ========================================================== */

function testimonialSection() {
    return `
        <section class="home-testimonial home-reveal">

            <div class="home-testimonial-image">
                <img
                    src="./assets/images/maria.png"
                    alt="Maria"
                    onerror="this.onerror=null;this.src='./assets/images/avatar.png';"
                >
            </div>

            <div class="home-testimonial-content">

                <span class="home-testimonial-label">
                    EXPERIÊNCIA REAL
                </span>

                <blockquote>
                    “Descobri que por trás dos produtos
                    existe uma visão muito maior sobre
                    desenvolvimento e evolução.”
                </blockquote>

                <div class="home-testimonial-author">
                    <strong>Maria</strong>
                    <span>Comunidade AD Lifestyle</span>
                </div>

            </div>

        </section>
    `;
}


/* ==========================================================
   FINAL CTA
   ========================================================== */

function finalCta() {
    return `
        <section class="home-final home-reveal">

            <div class="home-final-inner">

                <span class="home-final-label">
                    AD LIFESTYLE
                </span>

                <h2>
                    A próxima descoberta
                    <span>pode começar aqui.</span>
                </h2>

                <p>
                    Entre no nosso universo e descubra produtos,
                    experiências, conhecimento e novas possibilidades.
                </p>

                <div class="home-final-actions">

                    <button
                        class="home-button home-button-primary"
                        id="finalProducts"
                    >
                        Explorar produtos
                    </button>

                    <button
                        class="home-button home-button-ghost dark"
                        id="finalContact"
                    >
                        Falar connosco
                    </button>

                </div>

            </div>

        </section>
    `;
}


/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseHome() {
    setupHero();
    setupProducts();
    setupEvent();
    setupMemories();
    setupFinalButtons();
    setupRevealAnimations();
}


/* ==========================================================
   HERO LOGIC
   ========================================================== */

function setupHero() {
    updateHero(false);

    const hero = document.getElementById("homeHero");
    const prev = document.getElementById("heroPrev");
    const next = document.getElementById("heroNext");

    prev?.addEventListener("click", () => {
        changeHero(-1);
        restartHeroTimer();
    });

    next?.addEventListener("click", () => {
        changeHero(1);
        restartHeroTimer();
    });

    document
        .getElementById("heroPrimaryButton")
        ?.addEventListener("click", () => {
            const slide = HERO_SLIDES[heroIndex];

            if (slide.type === "product" && slide.productId) {
                navigateToProduct(slide.productId);
            } else {
                navigateToProducts();
            }
        });

    document
        .getElementById("heroSecondaryButton")
        ?.addEventListener("click", () => {
            navigateToProducts();
        });

    document.addEventListener("keydown", heroKeyboardHandler);

    let touchStartX = 0;

    hero?.addEventListener(
        "touchstart",
        (event) => {
            touchStartX = event.changedTouches[0].clientX;
        },
        { passive: true }
    );

    hero?.addEventListener(
        "touchend",
        (event) => {
            const touchEndX = event.changedTouches[0].clientX;
            const difference = touchStartX - touchEndX;

            if (Math.abs(difference) > 55) {
                changeHero(difference > 0 ? 1 : -1);
                restartHeroTimer();
            }
        },
        { passive: true }
    );

    hero?.addEventListener("pointermove", handleHeroPointer);

    hero?.addEventListener("pointerleave", () => {
        const page = document.querySelector(".home-page");

        if (!page) return;

        page.style.setProperty("--hero-pointer-x", "50%");
        page.style.setProperty("--hero-pointer-y", "50%");
    });

    restartHeroTimer();
}


function updateHero(animate = true) {
    const slide = HERO_SLIDES[heroIndex];
    const product =
        slide.productId &&
        PRODUCTS.find((item) => item.id === slide.productId);

    const page = document.querySelector(".home-page");

    const eyebrow = document.getElementById("heroEyebrow");
    const title = document.getElementById("heroTitle");
    const titleAccent = document.getElementById("heroTitleAccent");
    const description = document.getElementById("heroDescription");

    const image = document.getElementById("heroProductImage");
    const number = document.getElementById("heroProductNumber");
    const category = document.getElementById("heroProductCategory");

    const currentIndex = document.getElementById("heroCurrentIndex");
    const progress = document.getElementById("heroProgressBar");

    const stage = document.querySelector(".home-hero-stage");
    const wrap = document.getElementById("heroProductWrap");

    if (
        !page ||
        !eyebrow ||
        !title ||
        !titleAccent ||
        !description ||
        !image ||
        !number ||
        !category ||
        !currentIndex ||
        !progress ||
        !stage ||
        !wrap
    ) {
        return;
    }

    if (animate) {
        page.classList.remove("home-hero-changing");
        void page.offsetWidth;
        page.classList.add("home-hero-changing");
    }

    const accent = slide.accent;
    const accentSoft = slide.accentSoft;
    const accentDark = slide.accentDark;

    page.style.setProperty("--hero-accent", accent);
    page.style.setProperty("--hero-accent-soft", accentSoft);
    page.style.setProperty("--hero-accent-dark", accentDark);

    eyebrow.textContent = slide.eyebrow;
    title.textContent = slide.title;
    titleAccent.textContent = slide.titleAccent;
    description.textContent = slide.description;

    currentIndex.textContent = slide.index;
    number.textContent = slide.index;

    if (product) {
        image.src = product.image;
        image.alt = product.name;
        category.textContent = product.name;

        wrap.classList.add("is-product");

        stage.dataset.mode = "product";
    } else {
        image.src = slide.image;
        image.alt = "AD Lifestyle";
        category.textContent = "AD LIFESTYLE";

        wrap.classList.remove("is-product");

        stage.dataset.mode = "brand";
    }

    progress.style.width = "0%";

    requestAnimationFrame(() => {
        progress.style.transition = "none";
        progress.style.width = "100%";
        progress.style.transition = "width 6s linear";
    });
}


function changeHero(direction) {
    heroIndex =
        (heroIndex + direction + HERO_SLIDES.length) %
        HERO_SLIDES.length;

    updateHero(true);
}


function restartHeroTimer() {
    clearInterval(heroTimer);

    heroTimer = setInterval(() => {
        changeHero(1);
    }, 6000);
}


function heroKeyboardHandler(event) {
    if (event.key === "ArrowRight") {
        changeHero(1);
        restartHeroTimer();
    }

    if (event.key === "ArrowLeft") {
        changeHero(-1);
        restartHeroTimer();
    }
}


function handleHeroPointer(event) {
    const hero = document.getElementById("homeHero");

    if (!hero) return;

    const rect = hero.getBoundingClientRect();

    heroPointerX =
        ((event.clientX - rect.left) / rect.width) * 100;

    heroPointerY =
        ((event.clientY - rect.top) / rect.height) * 100;

    if (heroPointerFrame) {
        cancelAnimationFrame(heroPointerFrame);
    }

    heroPointerFrame = requestAnimationFrame(() => {
        hero.style.setProperty(
            "--hero-pointer-x",
            `${heroPointerX}%`
        );

        hero.style.setProperty(
            "--hero-pointer-y",
            `${heroPointerY}%`
        );
    });
}


/* ==========================================================
   PRODUCT ROUTING
   ========================================================== */

function setupProducts() {
    document
        .getElementById("allProducts")
        ?.addEventListener("click", () => {
            navigateToProducts();
        });

    document
        .querySelectorAll(".home-product-card-link")
        .forEach((button) => {
            button.addEventListener("click", (event) => {
                event.stopPropagation();

                const id = button.dataset.product;

                if (id) {
                    navigateToProduct(id);
                }
            });
        });

    document
        .querySelectorAll(".home-product-card")
        .forEach((card) => {
            card.addEventListener("click", () => {
                const id = card.dataset.productId;

                if (id) {
                    navigateToProduct(id);
                }
            });
        });
}


function navigateToProducts() {
    window.dispatchEvent(
        new CustomEvent("ad:navigate", {
            detail: { path: "/products" }
        })
    );
}


function navigateToProduct(id) {
    window.dispatchEvent(
        new CustomEvent("ad:navigate", {
            detail: { path: `/${id}` }
        })
    );
}


/* ==========================================================
   EVENT
   ========================================================== */

function setupEvent() {
    document
        .getElementById("eventButton")
        ?.addEventListener("click", () => {
            window.dispatchEvent(
                new CustomEvent("ad:navigate", {
                    detail: { path: "/events" }
                })
            );
        });
}


/* ==========================================================
   MEMORIES
   ========================================================== */

function setupMemories() {
    updateMemory(false);

    document
        .getElementById("memoryPrev")
        ?.addEventListener("click", () => {
            memoryIndex =
                (memoryIndex - 1 + MEMORIES.length) %
                MEMORIES.length;

            updateMemory(true);
            restartMemoryTimer();
        });

    document
        .getElementById("memoryNext")
        ?.addEventListener("click", () => {
            memoryIndex =
                (memoryIndex + 1) % MEMORIES.length;

            updateMemory(true);
            restartMemoryTimer();
        });

    restartMemoryTimer();
}


function updateMemory(animate = true) {
    const item = MEMORIES[memoryIndex];

    const image = document.getElementById("homeMemoryImage");
    const label = document.getElementById("homeMemoryLabel");
    const title = document.getElementById("homeMemoryTitle");
    const progress = document.getElementById("memoryProgressBar");

    if (!image || !label || !title || !progress) {
        return;
    }

    if (animate) {
        image.classList.remove("is-changing");
        void image.offsetWidth;
        image.classList.add("is-changing");
    }

    image.src = item.image;
    image.alt = item.title;

    label.textContent = item.label;
    title.textContent = item.title;

    progress.style.width = "0%";

    requestAnimationFrame(() => {
        progress.style.transition = "none";
        progress.style.width = "100%";
        progress.style.transition = "width 5s linear";
    });
}


function restartMemoryTimer() {
    clearInterval(memoryTimer);

    memoryTimer = setInterval(() => {
        memoryIndex =
            (memoryIndex + 1) % MEMORIES.length;

        updateMemory(true);
    }, 5000);
}


/* ==========================================================
   FINAL BUTTONS
   ========================================================== */

function setupFinalButtons() {
    document
        .getElementById("finalProducts")
        ?.addEventListener("click", () => {
            navigateToProducts();
        });

    document
        .getElementById("finalContact")
        ?.addEventListener("click", () => {
            window.dispatchEvent(
                new CustomEvent("ad:navigate", {
                    detail: { path: "/contact" }
                })
            );
        });
}


/* ==========================================================
   SCROLL REVEAL
   ========================================================== */

function setupRevealAnimations() {
    const elements = document.querySelectorAll(".home-reveal");

    if (!elements.length) return;

    if (
        !("IntersectionObserver" in window)
    ) {
        elements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14
        }
    );

    elements.forEach((element) => observer.observe(element));
}
