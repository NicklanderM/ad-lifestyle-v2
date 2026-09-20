import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

const WHATSAPP_NUMBER = "244924964666";
const PRODUCT_IMAGE = "./assets/products/angel.png";

const CERTIFICATIONS = [
    {
        image: "./assets/products/certifications/angel-cert-01.png",
        title: "Documento / Certificação 01",
        type: "DOCUMENTAÇÃO OFICIAL"
    },
    {
        image: "./assets/products/certifications/angel-cert-02.png",
        title: "Documento / Certificação 02",
        type: "DOCUMENTAÇÃO OFICIAL"
    },
    {
        image: "./assets/products/certifications/angel-cert-03.png",
        title: "Documento / Certificação 03",
        type: "DOCUMENTAÇÃO OFICIAL"
    },
    {
        image: "./assets/products/certifications/angel-cert-04.png",
        title: "Documento / Certificação 04",
        type: "DOCUMENTAÇÃO OFICIAL"
    }
];

const VARIANTS = [
    {
        image: "./assets/products/angel1.png",
        name: "Angel Moon Dia",
        tag: "24 cm",
        text: "Formato pensado para utilização durante o dia."
    },
    {
        image: "./assets/products/angel2.png",
        name: "Angel Moon Noite",
        tag: "29 cm",
        text: "Formato mais longo para utilização nocturna."
    },
    {
        image: "./assets/products/angel3.png",
        name: "Angel Moon Panty Liner",
        tag: "18 cm",
        text: "Formato ligeiro para protecção diária."
    }
];

const ICONS = {
    comfort: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 20s7-4.35 7-10A4 4 0 0 0 12 7 4 4 0 0 0 5 10c0 5.65 7 10 7 10Z"
                stroke="currentColor" stroke-width="1.7"/>
            <path d="M8.5 11.5h7"
                stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round"/>
        </svg>
    `,

    absorb: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3s6 6.4 6 11a6 6 0 1 1-12 0c0-4.6 6-11 6-11Z"
                stroke="currentColor" stroke-width="1.7"/>
            <path d="M9 15.5c.7.9 1.7 1.4 3 1.4"
                stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round"/>
        </svg>
    `,

    air: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 8h11a3 3 0 1 0-3-3"
                stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round"/>
            <path d="M3 12h14a3 3 0 1 1-3 3"
                stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round"/>
            <path d="M3 16h7"
                stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round"/>
        </svg>
    `,

    tech: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="5" y="5" width="14" height="14" rx="3"
                stroke="currentColor" stroke-width="1.7"/>
            <path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3"
                stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round"/>
        </svg>
    `,

    arrow: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m9 6 6 6-6 6"
                stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
    `,

    chevron: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 9 6 6 6-6"
                stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m5 12 4 4L19 6"
                stroke="currentColor" stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
    `
};

export function loadAngel() {

    applyTheme("angel");

    const app = document.getElementById("app");

    if (!app) return;

    app.innerHTML = `
        <main class="page-angel">

            ${angelHero()}
            ${angelOverview()}
            ${angelTechnology()}
            ${angelBenefits()}
            ${angelProduct()}
            ${angelComposition()}
            ${angelCertifications()}
            ${angelVariants()}
            ${angelFaq()}
            ${angelInformation()}
            ${angelCta()}

        </main>
    `;

    initialiseAngel();
}

function iconMarkup(icon = "check") {
    return ICONS[icon] || ICONS.check;
}

/* ==========================================================
   HERO
   ========================================================== */

function angelHero() {

    return `
        <section class="angel-hero" id="angel-top">

            <div class="angel-hero-atmosphere" aria-hidden="true">
                <span class="angel-orb angel-orb-one"></span>
                <span class="angel-orb angel-orb-two"></span>
                <span class="angel-orb angel-orb-three"></span>
            </div>

            <div class="angel-container angel-hero-grid">

                <div class="angel-hero-copy" data-animate>

                    <span class="eyebrow angel-eyebrow">
                        ANGEL MOON · CUIDADO ÍNTIMO
                    </span>

                    <h1 class="angel-hero-title">
                        Conforto que
                        <span>acompanha.</span>
                    </h1>

                    <p class="angel-hero-description">
                        Uma proposta de cuidado íntimo que combina
                        conforto, protecção, absorção e tecnologia
                        numa construção pensada para o uso diário.
                    </p>

                    <div class="angel-hero-actions">

                        <a
                            class="btn btn-primary"
                            href="#angel-technology"
                            data-ripple
                        >
                            Descobrir Angel Moon
                            ${iconMarkup("arrow")}
                        </a>

                        <button
                            class="btn btn-glass"
                            type="button"
                            data-whatsapp
                            data-ripple
                        >
                            Pedir informações
                        </button>

                    </div>

                    <div class="angel-hero-signature">
                        <span></span>
                        ANGEL MOON · INTIMATE CARE
                    </div>

                </div>

                <div class="angel-hero-product" data-animate>

                    <div class="angel-hero-product-aura" aria-hidden="true"></div>
                    <div class="angel-hero-product-rings" aria-hidden="true"></div>
                    <div class="angel-hero-product-grid" aria-hidden="true"></div>

                    <div class="angel-hero-product-frame">

                        <span class="angel-product-badge">
                            ANGEL MOON
                        </span>

                        <img
                            class="angel-hero-product-image"
                            src="${PRODUCT_IMAGE}"
                            alt="Angel Moon"
                            loading="eager"
                        >

                        <div class="angel-image-fallback">
                            <div>
                                <strong>Imagem do produto</strong>
                                <span>${PRODUCT_IMAGE}</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   OVERVIEW
   ========================================================== */

function angelOverview() {

    const highlights = [
        [
            "comfort",
            "Conforto",
            "Construção fina e flexível."
        ],
        [
            "absorb",
            "Absorção",
            "Estrutura orientada para retenção de líquidos."
        ],
        [
            "air",
            "Respirabilidade",
            "Base apresentada como permeável ao ar."
        ]
    ];

    return `
        <section class="angel-section angel-overview" id="angel-overview">

            <div class="angel-container">

                <div class="angel-section-heading is-centered" data-animate>

                    <span class="label">
                        A essência Angel Moon
                    </span>

                    <h2 class="section-title">
                        Pensado para o seu
                        <span>ritmo.</span>
                    </h2>

                    <p class="lead">
                        O Angel Moon reúne características concebidas
                        para proporcionar uma experiência equilibrada
                        entre conforto, protecção e leveza.
                    </p>

                </div>

                <div class="angel-overview-grid">

                    ${highlights.map(
                        ([icon, title, text], index) => `
                            <article
                                class="angel-overview-card"
                                data-animate
                                data-delay="${index * 70}"
                            >

                                <div class="angel-overview-icon">
                                    ${iconMarkup(icon)}
                                </div>

                                <div>
                                    <h3>${title}</h3>
                                    <p>${text}</p>
                                </div>

                            </article>
                        `
                    ).join("")}

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   TECHNOLOGY
   ========================================================== */

function angelTechnology() {

    const layers = [
        [
            "01",
            "Superfície",
            "Camada de contacto."
        ],
        [
            "02",
            "Distribuição",
            "Encaminhamento da humidade."
        ],
        [
            "03",
            "Absorção",
            "Núcleo destinado à retenção."
        ],
        [
            "04",
            "Negative Ion Core",
            "Tecnologia apresentada para a linha."
        ],
        [
            "05",
            "Nano Silver",
            "Elemento tecnológico comunicado."
        ],
        [
            "06",
            "Protecção",
            "Barreira na estrutura."
        ],
        [
            "07",
            "Base respirável",
            "Camada inferior permeável ao ar."
        ]
    ];

    return `
        <section
            class="angel-section angel-technology"
            id="angel-technology"
        >

            <div class="angel-container">

                <div
                    class="angel-section-heading is-centered"
                    data-animate
                >

                    <span class="label">
                        Estrutura Angel Moon
                    </span>

                    <h2 class="section-title">
                        Tecnologia que
                        <span>se integra.</span>
                    </h2>

                    <p class="lead">
                        Uma construção multicamada que reúne os elementos
                        apresentados para a linha Angel Moon.
                    </p>

                </div>

                <div class="angel-technology-layout">

                    <div class="angel-technology-visual" data-animate>

                        <div class="angel-tech-image-aura"></div>

                        <img
                            src="${PRODUCT_IMAGE}"
                            alt="Angel Moon — detalhe do produto"
                            class="angel-technology-image"
                            loading="lazy"
                        >

                    </div>

                    <div class="angel-technology-copy">

                        <div class="angel-technology-highlights">

                            <div class="angel-tech-highlight">
                                <strong>Estrutura</strong>
                                <span>Multi-camadas</span>
                            </div>

                            <div class="angel-tech-highlight">
                                <strong>Core</strong>
                                <span>Negative Ion Core</span>
                            </div>

                            <div class="angel-tech-highlight">
                                <strong>Base</strong>
                                <span>Respirável</span>
                            </div>

                        </div>

                        <button
                            class="angel-more-toggle"
                            type="button"
                            data-angel-more="technology"
                            aria-expanded="false"
                            aria-controls="angel-more-technology"
                            data-ripple
                        >
                            Ver estrutura completa
                            ${iconMarkup("chevron")}
                        </button>

                        <div
                            class="angel-more-panel"
                            id="angel-more-technology"
                            aria-hidden="true"
                        >
                            <div>

                                <div class="angel-layer-list">

                                    ${layers.map(
                                        ([number, title, text]) => `
                                            <div class="angel-layer-item">

                                                <span>${number}</span>

                                                <div>
                                                    <strong>${title}</strong>
                                                    <small>${text}</small>
                                                </div>

                                            </div>
                                        `
                                    ).join("")}

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
   BENEFITS
   ========================================================== */

function angelBenefits() {

    const benefits = [
        [
            "01",
            "Conforto",
            "Formato fino e flexível pensado para acompanhar os movimentos."
        ],
        [
            "02",
            "Absorção",
            "Construção orientada para absorção e retenção."
        ],
        [
            "03",
            "Respirabilidade",
            "Estrutura inferior apresentada como permeável ao ar."
        ],
        [
            "04",
            "Discrição",
            "Construção concebida para utilização discreta."
        ],
        [
            "05",
            "Versatilidade",
            "Disponível em diferentes formatos de utilização."
        ],
        [
            "06",
            "Tecnologia",
            "Integra elementos tecnológicos comunicados para a linha."
        ]
    ];

    return `
        <section class="angel-section angel-benefits" id="angel-benefits">

            <div class="angel-container">

                <div class="angel-section-heading is-centered" data-animate>

                    <span class="label">
                        Principais características
                    </span>

                    <h2 class="section-title">
                        O essencial,
                        <span>bem definido.</span>
                    </h2>

                    <p class="lead">
                        Tudo o que importa, apresentado de forma simples,
                        sem sobrecarregar a leitura.
                    </p>

                </div>

                <div class="angel-benefits-grid">

                    ${benefits.map(
                        ([number, title, text], index) => `
                            <article
                                class="angel-benefit-card"
                                data-animate
                                data-delay="${index * 55}"
                            >

                                <span class="angel-benefit-index">
                                    ${number}
                                </span>

                                <h3>${title}</h3>

                                <p>${text}</p>

                            </article>
                        `
                    ).join("")}

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   PRODUCT DETAIL
   ========================================================== */

function angelProduct() {

    return `
        <section class="angel-section angel-product-detail" id="angel-product">

            <div class="angel-container angel-product-detail-grid">

                <div class="angel-product-detail-visual" data-animate>

                    <div class="angel-product-detail-halo"></div>

                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="Angel Moon"
                        class="angel-product-detail-image"
                        loading="lazy"
                    >

                    <div class="angel-image-fallback">
                        <div>
                            <strong>Imagem do produto</strong>
                            <span>${PRODUCT_IMAGE}</span>
                        </div>
                    </div>

                </div>

                <div class="angel-product-detail-copy" data-animate>

                    <span class="eyebrow">
                        DETALHE DO PRODUTO
                    </span>

                    <h2>
                        Uma experiência construída
                        para o <span>quotidiano.</span>
                    </h2>

                    <p>
                        O Angel Moon apresenta uma construção fina,
                        flexível e multicamada, com diferentes formatos
                        para acompanhar diferentes momentos de utilização.
                    </p>

                    <div class="angel-spec-grid">

                        <div class="angel-spec">
                            <span>Construção</span>
                            <strong>Fina e flexível</strong>
                        </div>

                        <div class="angel-spec">
                            <span>Estrutura</span>
                            <strong>Multi-camadas</strong>
                        </div>

                        <div class="angel-spec">
                            <span>Tecnologia</span>
                            <strong>Negative Ion Core</strong>
                        </div>

                        <div class="angel-spec">
                            <span>Opções</span>
                            <strong>Dia · Noite · Panty Liner</strong>
                        </div>

                    </div>

                    <div class="angel-more-wrap">

                        <button
                            class="angel-more-toggle"
                            type="button"
                            data-angel-more="details"
                            aria-expanded="false"
                            aria-controls="angel-more-details"
                            data-ripple
                        >
                            Ver mais detalhes
                            ${iconMarkup("chevron")}
                        </button>

                        <div
                            class="angel-more-panel"
                            id="angel-more-details"
                            aria-hidden="true"
                        >
                            <div>

                                <div class="angel-more-content">

                                    <ul>
                                        <li>Super absorvente</li>
                                        <li>Fino e flexível</li>
                                        <li>Ventilação apresentada como óptima</li>
                                        <li>Estrutura orientada para conforto</li>
                                        <li>Formatos para diferentes utilizações</li>
                                        <li>Elementos tecnológicos comunicados para a linha</li>
                                    </ul>

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
   COMPOSITION
   ========================================================== */

function angelComposition() {

    const items = [
        ["A", "Camada superior", "Contacto e gestão inicial da humidade."],
        ["B", "Distribuição", "Encaminhamento do líquido."],
        ["C", "Núcleo absorvente", "Área destinada à retenção."],
        ["D", "Tecnologia", "Negative Ion Core e Nano Silver, conforme a informação comunicada."],
        ["E", "Protecção", "Barreira na construção."],
        ["F", "Base", "Estrutura inferior apresentada como respirável."]
    ];

    return `
        <section class="angel-section angel-composition" id="angel-composition">

            <div class="angel-container">

                <div class="angel-section-heading is-centered" data-animate>

                    <span class="label">
                        Composição
                    </span>

                    <h2 class="section-title">
                        Tudo no lugar
                        <span>certo.</span>
                    </h2>

                    <p class="lead">
                        A construção pode ser consultada por partes,
                        mantendo o primeiro contacto com a página limpo.
                    </p>

                </div>

                <div class="angel-composition-grid">

                    ${items.map(
                        ([letter, title, text], index) => `
                            <article
                                class="angel-composition-card"
                                data-animate
                                data-delay="${index * 50}"
                            >

                                <span class="angel-composition-mark">
                                    ${letter}
                                </span>

                                <div>
                                    <h3>${title}</h3>
                                    <p>${text}</p>
                                </div>

                            </article>
                        `
                    ).join("")}

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   CERTIFICATIONS
   ========================================================== */

function angelCertifications() {

    return `
        <section
            class="angel-section angel-certifications"
            id="angel-certifications"
        >

            <div class="angel-container">

                <div
                    class="angel-section-heading is-centered"
                    data-animate
                >

                    <span class="label">
                        Certificações
                    </span>

                    <h2 class="section-title">
                        A documentação
                        <span>fala por si.</span>
                    </h2>

                    <p class="lead">
                        Área preparada para receber as imagens das
                        certificações e documentos oficiais do produto.
                    </p>

                </div>

                <div class="angel-certifications-grid">

                    ${CERTIFICATIONS.map(
                        (cert, index) => `
                            <article
                                class="angel-certification-card"
                                data-animate
                                data-delay="${index * 70}"
                            >

                                <div class="angel-certification-image-wrap">

                                    <img
                                        class="angel-certification-image"
                                        src="${cert.image}"
                                        alt="${cert.title}"
                                        loading="lazy"
                                        data-cert-image
                                    >

                                    <div
                                        class="angel-certification-placeholder"
                                        data-cert-placeholder
                                    >
                                        <div>
                                            <strong>${cert.title}</strong>
                                            <span>Imagem ainda não disponível</span>
                                        </div>
                                    </div>

                                </div>

                                <div class="angel-certification-content">

                                    <span class="angel-certification-type">
                                        ${cert.type}
                                    </span>

                                    <h3>${cert.title}</h3>

                                    <a
                                        href="${cert.image}"
                                        target="_blank"
                                        rel="noopener"
                                        class="angel-certification-link"
                                        data-cert-link
                                    >
                                        Abrir documento
                                        ${iconMarkup("arrow")}
                                    </a>

                                </div>

                            </article>
                        `
                    ).join("")}

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   VARIANTS
   ========================================================== */

function angelVariants() {

    return `
        <section class="angel-section angel-variants" id="angel-variants">

            <div class="angel-container">

                <div class="angel-section-heading is-centered" data-animate>

                    <span class="label">
                        Linha Angel Moon
                    </span>

                    <h2 class="section-title">
                        Um formato para
                        <span>cada momento.</span>
                    </h2>

                    <p class="lead">
                        Três apresentações dentro da linha Angel Moon.
                    </p>

                </div>

                <div class="angel-variants-grid">

                    ${VARIANTS.map(
                        (variant, index) => `
                            <article
                                class="angel-variant-card"
                                data-animate
                                data-delay="${index * 70}"
                            >

                                <div class="angel-variant-image-wrap">

                                    <img
                                        src="${variant.image}"
                                        alt="${variant.name}"
                                        class="angel-variant-image"
                                        loading="lazy"
                                    >

                                    <div class="angel-image-fallback">
                                        <div>
                                            <strong>${variant.name}</strong>
                                            <span>${variant.image}</span>
                                        </div>
                                    </div>

                                </div>

                                <div class="angel-variant-content">

                                    <span class="angel-variant-tag">
                                        ${variant.tag}
                                    </span>

                                    <h3>${variant.name}</h3>

                                    <p>${variant.text}</p>

                                </div>

                            </article>
                        `
                    ).join("")}

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   FAQ
   ========================================================== */

function angelFaq() {

    const faq = [
        [
            "Quais são os formatos disponíveis?",
            "A linha apresentada nesta página inclui Angel Moon Dia, Angel Moon Noite e Angel Moon Panty Liner."
        ],
        [
            "O que significa Negative Ion Core?",
            "É uma designação tecnológica apresentada na comunicação do produto. As especificações e alegações associadas devem ser confirmadas através da documentação oficial."
        ],
        [
            "A página já está preparada para certificações?",
            "Sim. Os cartões de documentação estão preparados para receber as imagens oficiais."
        ],
        [
            "O Angel Moon substitui cuidados médicos?",
            "Não. O produto não substitui diagnóstico, aconselhamento ou tratamento médico."
        ],
        [
            "As propriedades relacionadas com saúde estão verificadas?",
            "As características técnicas e alegações relacionadas com saúde devem ser confirmadas através da documentação oficial e do enquadramento aplicável."
        ]
    ];

    return `
        <section class="angel-section angel-faq" id="angel-faq">

            <div class="angel-container">

                <div class="angel-section-heading is-centered" data-animate>

                    <span class="label">
                        Perguntas frequentes
                    </span>

                    <h2 class="section-title">
                        Informação clara,
                        <span>sem excesso.</span>
                    </h2>

                </div>

                <div class="angel-faq-list">

                    ${faq.map(
                        ([question, answer], index) => `
                            <article
                                class="angel-faq-item"
                                data-faq-item
                                data-animate
                                data-delay="${index * 45}"
                            >

                                <button
                                    class="angel-faq-question"
                                    type="button"
                                    aria-expanded="false"
                                    aria-controls="angel-faq-answer-${index}"
                                    data-faq-toggle
                                    data-ripple
                                >

                                    <span>${question}</span>
                                    ${iconMarkup("chevron")}

                                </button>

                                <div
                                    class="angel-faq-answer"
                                    id="angel-faq-answer-${index}"
                                    aria-hidden="true"
                                >
                                    <div>

                                        <div class="angel-faq-answer-content">
                                            ${answer}
                                        </div>

                                    </div>
                                </div>

                            </article>
                        `
                    ).join("")}

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   INFORMATION
   ========================================================== */

function angelInformation() {

    return `
        <section class="angel-section angel-information" id="angel-information">

            <div class="angel-container">

                <div class="angel-information-box" data-animate>

                    <div class="angel-information-icon">
                        ${iconMarkup("check")}
                    </div>

                    <div>

                        <span class="label">
                            Informação
                        </span>

                        <h3>
                            Comunicação responsável
                        </h3>

                        <p>
                            Esta página organiza as características e tecnologias
                            comunicadas para o Angel Moon de forma comercial e informativa.
                        </p>

                        <p>
                            As alegações técnicas ou relacionadas com saúde devem
                            ser confirmadas na documentação oficial do fabricante.
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

function angelCta() {

    return `
        <section class="angel-cta" id="angel-contact">

            <div class="angel-container angel-cta-inner" data-animate>

                <span class="eyebrow">
                    ANGEL MOON
                </span>

                <h2>
                    Descubra a experiência Angel Moon.
                </h2>

                <p>
                    Obtenha informações sobre os formatos,
                    disponibilidade e documentação do produto.
                </p>

                <div class="angel-cta-actions">

                    <button
                        class="btn btn-primary"
                        type="button"
                        data-whatsapp
                        data-ripple
                    >
                        Falar pelo WhatsApp
                        ${iconMarkup("arrow")}
                    </button>

                    <button
                        class="btn btn-glass"
                        type="button"
                        data-home
                        data-ripple
                    >
                        Voltar ao início
                    </button>

                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   INITIALISATION
   ========================================================== */

function initialiseAngel() {

    initialiseReveal();
    initialiseMorePanels();
    initialiseFaq();
    initialiseWhatsApp();
    initialiseCertificationImages();
    initialiseHomeButton();
    initialiseRipples();

    requestAnimationFrame(() => {

        try {
            stagger?.(
                ".page-angel [data-animate]",
                65
            );
        } catch {
            /* animação opcional */
        }

    });
}

/* ==========================================================
   REVEAL
   ========================================================== */

function initialiseReveal() {

    const elements =
        document.querySelectorAll(
            ".page-angel [data-animate]"
        );

    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {

        elements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    const delay =
                        Number(
                            entry.target.dataset.delay || 0
                        );

                    setTimeout(() => {

                        entry.target.classList.add(
                            "is-visible"
                        );

                    }, delay);

                    obs.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px"
            }
        );

    elements.forEach((element) => {
        observer.observe(element);
    });
}

/* ==========================================================
   VER MAIS
   ========================================================== */

function initialiseMorePanels() {

    document
        .querySelectorAll(
            ".page-angel [data-angel-more]"
        )
        .forEach((button) => {

            button.addEventListener("click", () => {

                const panelId =
                    button.getAttribute(
                        "aria-controls"
                    );

                const panel =
                    document.getElementById(panelId);

                if (!panel) return;

                const open =
                    button.getAttribute(
                        "aria-expanded"
                    ) !== "true";

                button.setAttribute(
                    "aria-expanded",
                    String(open)
                );

                panel.setAttribute(
                    "aria-hidden",
                    String(!open)
                );

                panel.classList.toggle(
                    "is-open",
                    open
                );

            });

        });
}

/* ==========================================================
   FAQ
   ========================================================== */

function initialiseFaq() {

    document
        .querySelectorAll(
            ".page-angel [data-faq-toggle]"
        )
        .forEach((button) => {

            button.addEventListener("click", () => {

                const item =
                    button.closest(
                        "[data-faq-item]"
                    );

                const answerId =
                    button.getAttribute(
                        "aria-controls"
                    );

                const answer =
                    document.getElementById(answerId);

                if (!item || !answer) return;

                const open =
                    button.getAttribute(
                        "aria-expanded"
                    ) !== "true";

                document
                    .querySelectorAll(
                        ".page-angel [data-faq-item]"
                    )
                    .forEach((other) => {

                        const otherButton =
                            other.querySelector(
                                "[data-faq-toggle]"
                            );

                        const otherAnswer =
                            other.querySelector(
                                ".angel-faq-answer"
                            );

                        if (
                            !otherButton ||
                            !otherAnswer ||
                            other === item
                        ) {
                            return;
                        }

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        otherAnswer.setAttribute(
                            "aria-hidden",
                            "true"
                        );

                        otherAnswer.classList.remove(
                            "is-open"
                        );

                        other.classList.remove(
                            "is-open"
                        );
                    });

                button.setAttribute(
                    "aria-expanded",
                    String(open)
                );

                answer.setAttribute(
                    "aria-hidden",
                    String(!open)
                );

                answer.classList.toggle(
                    "is-open",
                    open
                );

                item.classList.toggle(
                    "is-open",
                    open
                );

            });

        });
}

/* ==========================================================
   WHATSAPP
   ========================================================== */

function initialiseWhatsApp() {

    document
        .querySelectorAll(
            ".page-angel [data-whatsapp]"
        )
        .forEach((button) => {

            button.addEventListener("click", () => {

                const message =
                    encodeURIComponent(
                        "Olá, gostaria de obter informações sobre o Angel Moon."
                    );

                const url =
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );

            });

        });
}

/* ==========================================================
   CERTIFICATIONS
   ========================================================== */

function initialiseCertificationImages() {

    document
        .querySelectorAll(
            ".page-angel [data-cert-image]"
        )
        .forEach((image) => {

            const card =
                image.closest(
                    ".angel-certification-card"
                );

            const placeholder =
                card?.querySelector(
                    "[data-cert-placeholder]"
                );

            const link =
                card?.querySelector(
                    "[data-cert-link]"
                );

            if (!card || !placeholder || !link) {
                return;
            }

            const ready = () => {

                card.classList.add(
                    "has-image"
                );

                placeholder.classList.remove(
                    "is-visible"
                );

                link.classList.remove(
                    "is-disabled"
                );

                link.removeAttribute(
                    "aria-disabled"
                );
            };

            const missing = () => {

                card.classList.remove(
                    "has-image"
                );

                placeholder.classList.add(
                    "is-visible"
                );

                link.classList.add(
                    "is-disabled"
                );

                link.setAttribute(
                    "aria-disabled",
                    "true"
                );
            };

            image.addEventListener(
                "load",
                ready,
                { once: true }
            );

            image.addEventListener(
                "error",
                missing,
                { once: true }
            );

            if (image.complete) {

                image.naturalWidth > 0
                    ? ready()
                    : missing();
            }

        });
}

/* ==========================================================
   HOME
   ========================================================== */

function initialiseHomeButton() {

    document
        .querySelectorAll(
            ".page-angel [data-home]"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => navigate("/")
            );

        });
}

/* ==========================================================
   RIPPLE
   ========================================================== */

function initialiseRipples() {

    document
        .querySelectorAll(
            ".page-angel [data-ripple]"
        )
        .forEach((element) => {

            try {
                ripple?.(element);
            } catch {
                /* opcional */
            }

        });
}
