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
                stroke="currentColor"
                stroke-width="1.7"/>
            <path d="M8.5 11.5h7"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"/>
        </svg>
    `,

    absorb: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3s6 6.4 6 11a6 6 0 1 1-12 0c0-4.6 6-11 6-11Z"
                stroke="currentColor"
                stroke-width="1.7"/>
            <path d="M9 15.5c.7.9 1.7 1.4 3 1.4"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"/>
        </svg>
    `,

    air: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 8h11a3 3 0 1 0-3-3"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"/>
            <path d="M3 12h14a3 3 0 1 1-3 3"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"/>
            <path d="M3 16h7"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"/>
        </svg>
    `,

    tech: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="5" y="5" width="14" height="14" rx="3"
                stroke="currentColor"
                stroke-width="1.7"/>
            <path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"/>
        </svg>
    `,

    arrow: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m9 6 6 6-6 6"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
    `,

    chevron: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 9 6 6 6-6"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m5 12 4 4L19 6"
                stroke="currentColor"
                stroke-width="1.8"
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

            ${angelIntro()}

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
                <span class="angel-hero-line angel-hero-line-one"></span>
                <span class="angel-hero-line angel-hero-line-two"></span>
            </div>

            <div class="angel-container angel-hero-grid">

                <div class="angel-hero-copy" data-animate="hero-copy">

                    <span class="eyebrow angel-eyebrow">
                        ANGEL MOON · CUIDADO ÍNTIMO
                    </span>

                    <h1 class="angel-hero-title">
                        Protecção que
                        <span>acompanha o seu dia.</span>
                    </h1>

                    <p class="angel-hero-description">
                        Uma proposta de cuidado íntimo que combina conforto,
                        absorção, respirabilidade e tecnologia numa construção
                        pensada para a utilização diária.
                    </p>

                    <div class="angel-hero-actions">

                        <a
                            class="btn btn-primary"
                            href="#angel-technology"
                            data-ripple
                        >
                            Conhecer o Angel Moon
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
                        <span class="angel-signature-line"></span>
                        <span>Conforto · Tecnologia · Cuidado</span>
                    </div>

                </div>

                <div class="angel-hero-product" data-animate="hero-product">

                    <div
                        class="angel-hero-product-aura"
                        aria-hidden="true"
                    ></div>

                    <div
                        class="angel-hero-product-rings"
                        aria-hidden="true"
                    ></div>

                    <div
                        class="angel-hero-product-grid"
                        aria-hidden="true"
                    ></div>

                    <div class="angel-hero-product-frame">

                        <div class="angel-product-badge">
                            ANGEL MOON
                        </div>

                        <img
                            class="angel-hero-product-image"
                            src="${PRODUCT_IMAGE}"
                            alt="Produto Angel Moon"
                            loading="eager"
                            onerror="
                                this.style.display='none';
                                this.nextElementSibling.classList.add('is-visible');
                            "
                        >

                        <div
                            class="angel-image-fallback"
                            aria-hidden="true"
                        >
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
   INTRO
   ========================================================== */

function angelIntro() {

    const items = [
        [
            "comfort",
            "Conforto",
            "Estrutura pensada para favorecer uma utilização confortável."
        ],
        [
            "absorb",
            "Absorção",
            "Construção orientada para retenção de líquidos."
        ],
        [
            "air",
            "Respirabilidade",
            "Estrutura permeável ao ar apresentada para o produto."
        ],
        [
            "tech",
            "Tecnologia",
            "Elementos tecnológicos apresentados para a linha Angel Moon."
        ]
    ];

    return `
        <section
            class="angel-section angel-intro"
            id="angel-overview"
        >

            <div class="angel-container">

                <div
                    class="angel-section-heading"
                    data-animate
                >

                    <span class="label">
                        A essência Angel Moon
                    </span>

                    <h2 class="section-title">
                        Feita para <span>sentir menos</span>
                        e viver mais.
                    </h2>

                    <p class="lead">
                        A experiência começa no essencial:
                        conforto, ajuste e uma construção que
                        procura integrar protecção e leveza.
                    </p>

                </div>

                <div class="angel-overview-grid">

                    ${items.map(([icon, title, text], index) => `
                        <article
                            class="angel-overview-card"
                            data-animate
                            data-delay="${index * 70}"
                        >

                            <div class="angel-overview-icon">
                                ${iconMarkup(icon)}
                            </div>

                            <h3>${title}</h3>

                            <p>${text}</p>

                        </article>
                    `).join("")}

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
            "Superfície de contacto",
            "Camada superior pensada para contacto confortável e gestão inicial da humidade."
        ],
        [
            "02",
            "Camada de distribuição",
            "Ajuda a encaminhar o líquido para a estrutura absorvente."
        ],
        [
            "03",
            "Núcleo absorvente",
            "Área central destinada à retenção de líquidos."
        ],
        [
            "04",
            "Negative Ion Core",
            "Elemento apresentado na comunicação da linha Angel Moon."
        ],
        [
            "05",
            "Nano Silver",
            "Tecnologia apresentada para a estrutura do produto."
        ],
        [
            "06",
            "Camada de protecção",
            "Barreira concebida para limitar a passagem de humidade para o exterior."
        ],
        [
            "07",
            "Base respirável",
            "Estrutura inferior orientada para equilíbrio entre protecção e permeabilidade ao ar."
        ]
    ];

    return `
        <section
            class="angel-section angel-technology"
            id="angel-technology"
        >

            <div class="angel-container">

                <div
                    class="angel-section-heading technology-heading"
                    data-animate
                >

                    <div>

                        <span class="label">
                            Arquitectura do produto
                        </span>

                        <h2 class="section-title">
                            Tecnologia <span>em camadas.</span>
                        </h2>

                    </div>

                    <p class="lead">
                        O Angel Moon é apresentado através de uma estrutura
                        multicamada, em que cada elemento desempenha uma
                        função dentro da construção do produto.
                    </p>

                </div>

                <div class="angel-layer-showcase">

                    <div
                        class="angel-layer-visual"
                        data-animate
                    >

                        <div
                            class="angel-layer-orbit"
                            aria-hidden="true"
                        ></div>

                        <div class="angel-layer-core">

                            <span>ANGEL</span>

                            <strong>MOON</strong>

                            <small>SMART CORE</small>

                        </div>

                    </div>

                    <div class="angel-technology-content">

                        <div class="angel-technology-grid">

                            ${layers.map(
                                ([number, title, text], index) => `
                                    <article
                                        class="angel-tech-card"
                                        data-animate
                                        data-delay="${index * 50}"
                                    >

                                        <span class="angel-tech-number">
                                            ${number}
                                        </span>

                                        <h3>${title}</h3>

                                        <p>${text}</p>

                                    </article>
                                `
                            ).join("")}

                        </div>

                        <div class="angel-more-wrap">

                            <button
                                class="angel-more-toggle"
                                type="button"
                                data-angel-more="technology"
                                aria-expanded="false"
                                aria-controls="angel-more-technology"
                                data-ripple
                            >
                                Ver mais sobre a tecnologia
                                ${iconMarkup("chevron")}
                            </button>

                            <div
                                class="angel-more-panel"
                                id="angel-more-technology"
                                aria-hidden="true"
                            >
                                <div>

                                    <div class="angel-more-content">

                                        <p>
                                            Algumas das tecnologias e propriedades
                                            aqui apresentadas correspondem à informação
                                            disponibilizada para a linha Angel Moon.
                                            As alegações técnicas ou relacionadas com
                                            saúde devem ser confrontadas com a documentação
                                            oficial, certificações e informação do fabricante.
                                        </p>

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
            "Estrutura orientada para absorção e retenção de líquidos."
        ],
        [
            "03",
            "Respirabilidade",
            "Camada inferior apresentada como permeável ao ar."
        ],
        [
            "04",
            "Higiene",
            "Elementos tecnológicos comunicados com foco na higiene do produto."
        ],
        [
            "05",
            "Discrição",
            "Construção concebida para uma utilização discreta no vestuário."
        ],
        [
            "06",
            "Versatilidade",
            "A linha inclui formatos para diferentes momentos de utilização."
        ]
    ];

    return `
        <section
            class="angel-section angel-benefits"
            id="angel-benefits"
        >

            <div class="angel-container">

                <div
                    class="angel-section-heading section-center"
                    data-animate
                >

                    <span class="label">
                        O que define a experiência
                    </span>

                    <h2 class="section-title">
                        Pensado para o <span>quotidiano.</span>
                    </h2>

                    <p class="lead">
                        Os principais atributos do produto são apresentados
                        de forma simples para que a informação importante
                        seja encontrada rapidamente.
                    </p>

                </div>

                <div class="angel-benefits-grid">

                    ${benefits.map(
                        ([index, title, text], i) => `
                            <article
                                class="angel-benefit-card"
                                data-animate
                                data-delay="${i * 55}"
                            >

                                <span class="angel-benefit-index">
                                    ${index}
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
        <section
            class="angel-section angel-product-detail"
            id="angel-product"
        >

            <div class="angel-container angel-product-detail-grid">

                <div
                    class="angel-product-detail-visual"
                    data-animate
                >

                    <div
                        class="angel-product-detail-halo"
                        aria-hidden="true"
                    ></div>

                    <img
                        class="angel-product-detail-image"
                        src="${PRODUCT_IMAGE}"
                        alt="Angel Moon"
                        loading="lazy"
                        onerror="
                            this.style.display='none';
                            this.nextElementSibling.classList.add('is-visible');
                        "
                    >

                    <div
                        class="angel-image-fallback"
                        aria-hidden="true"
                    >
                        <div>
                            <strong>Imagem do produto</strong>
                            <span>Substitua pelo ficheiro final de Angel Moon.</span>
                        </div>
                    </div>

                </div>

                <div
                    class="angel-product-detail-copy"
                    data-animate
                >

                    <span class="eyebrow">
                        Detalhe do produto
                    </span>

                    <h2>
                        Uma estrutura criada à volta do
                        <span>conforto.</span>
                    </h2>

                    <p>
                        Angel Moon apresenta-se numa construção fina
                        e flexível, com diferentes formatos de utilização
                        e uma combinação de camadas descritas para
                        absorção, protecção e respirabilidade.
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
                            <span>Formatos</span>
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
                                        <li>Ventilação apresentada como óptima</li>
                                        <li>Estrutura fina</li>
                                        <li>Estrutura flexível</li>
                                        <li>Opções para dia e noite</li>
                                        <li>Formato Panty Liner</li>
                                        <li>Elementos tecnológicos comunicados para a linha</li>
                                        <li>Informação sujeita à documentação oficial</li>
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

    const composition = [
        [
            "A",
            "Camada superior",
            "Contacto e gestão inicial da humidade."
        ],
        [
            "B",
            "Camada de distribuição",
            "Encaminhamento do líquido para o núcleo absorvente."
        ],
        [
            "C",
            "Núcleo absorvente",
            "Área destinada à retenção de líquidos."
        ],
        [
            "D",
            "Tecnologia",
            "Elementos como Negative Ion Core e Nano Silver, conforme a informação comunicada."
        ],
        [
            "E",
            "Camada de protecção",
            "Barreira de segurança na construção do produto."
        ],
        [
            "F",
            "Base respirável",
            "Estrutura inferior com permeabilidade ao ar apresentada para o produto."
        ]
    ];

    return `
        <section
            class="angel-section angel-composition"
            id="angel-composition"
        >

            <div class="angel-container">

                <div
                    class="angel-section-heading"
                    data-animate
                >

                    <span class="label">
                        Composição
                    </span>

                    <h2 class="section-title">
                        Cada camada tem
                        <span>um propósito.</span>
                    </h2>

                    <p class="lead">
                        A composição está organizada visualmente
                        para facilitar a leitura das principais partes
                        da construção do Angel Moon.
                    </p>

                </div>

                <div class="angel-composition-grid">

                    ${composition.map(
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
                    class="angel-certifications-intro"
                    data-animate
                >

                    <span class="label">
                        Certificações & documentação
                    </span>

                    <h2 class="section-title">
                        A prova deve estar nos
                        <span>documentos.</span>
                    </h2>

                    <p class="lead">
                        Esta área está preparada para receber as imagens
                        finais das certificações, relatórios e outros
                        documentos oficiais do Angel Moon.
                    </p>

                    <div class="angel-certifications-note">
                        Ficheiros:
                        <code>assets/products/certifications/</code>
                    </div>

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
                                            <span>
                                                Imagem ainda não disponível
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div class="angel-certification-content">

                                    <span class="angel-certification-type">
                                        ${cert.type}
                                    </span>

                                    <h3>${cert.title}</h3>

                                    <a
                                        class="angel-certification-link"
                                        href="${cert.image}"
                                        target="_blank"
                                        rel="noopener"
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
        <section
            class="angel-section angel-variants"
            id="angel-variants"
        >

            <div class="angel-container">

                <div
                    class="angel-section-heading section-center"
                    data-animate
                >

                    <span class="label">
                        Linha Angel Moon
                    </span>

                    <h2 class="section-title">
                        Escolha o <span>formato.</span>
                    </h2>

                    <p class="lead">
                        Três formatos para diferentes necessidades
                        de utilização.
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
                                        class="angel-variant-image"
                                        src="${variant.image}"
                                        alt="${variant.name}"
                                        loading="lazy"
                                        onerror="
                                            this.style.display='none';
                                            this.nextElementSibling.classList.add('is-visible');
                                        "
                                    >

                                    <div
                                        class="angel-image-fallback"
                                        aria-hidden="true"
                                    >
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
            "O Angel Moon substitui um tratamento médico?",
            "Não. Um produto de cuidado íntimo não substitui diagnóstico, aconselhamento ou tratamento médico. Em caso de sintomas persistentes, deve ser procurada orientação de um profissional de saúde."
        ],
        [
            "Quais são os formatos disponíveis?",
            "A linha apresentada nesta página inclui Angel Moon Dia, Angel Moon Noite e Angel Moon Panty Liner."
        ],
        [
            "O que significa Negative Ion Core?",
            "É a designação de uma tecnologia apresentada na comunicação do produto. A natureza, especificações e efeitos alegados devem ser confirmados através da documentação oficial."
        ],
        [
            "A área de certificações já está pronta?",
            "Sim. Os cartões estão preparados para receber imagens dos documentos oficiais. Basta colocar os ficheiros nos caminhos indicados e manter os nomes definidos no código."
        ],
        [
            "As propriedades relacionadas com saúde são garantidas?",
            "As propriedades técnicas e alegações relacionadas com saúde devem ser tratadas de acordo com a documentação oficial, certificações e enquadramento regulatório aplicável."
        ]
    ];

    return `
        <section
            class="angel-section angel-faq"
            id="angel-faq"
        >

            <div class="angel-container">

                <div
                    class="angel-section-heading section-center"
                    data-animate
                >

                    <span class="label">
                        Perguntas frequentes
                    </span>

                    <h2 class="section-title">
                        Informação sem
                        <span>ruído.</span>
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
        <section
            class="angel-section angel-information"
            id="angel-information"
        >

            <div class="angel-container">

                <div
                    class="angel-information-box"
                    data-animate
                >

                    <div class="angel-information-icon">
                        ${iconMarkup("check")}
                    </div>

                    <div>

                        <span class="label">
                            Informação do produto
                        </span>

                        <h3>
                            Comunicação responsável
                        </h3>

                        <p>
                            Esta página organiza as características e tecnologias
                            comunicadas para o Angel Moon de forma comercial e informativa.
                            As alegações técnicas, de saúde ou de desempenho devem ser
                            confirmadas na documentação oficial do fabricante.
                        </p>

                        <p>
                            As imagens das certificações e documentos serão apresentadas
                            nesta página assim que os respectivos ficheiros forem colocados
                            na pasta definida para o produto.
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
        <section
            class="angel-cta"
            id="angel-contact"
        >

            <div
                class="angel-container angel-cta-inner"
                data-animate
            >

                <span class="eyebrow">
                    ANGEL MOON
                </span>

                <h2>
                    Descubra a linha completa.
                </h2>

                <p>
                    Fale connosco para obter informações sobre formatos,
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
                70
            );
        } catch {
            /* efeito opcional */
        }

    });
}

/* ==========================================================
   SCROLL REVEAL
   ========================================================== */

function initialiseReveal() {

    const animated = document.querySelectorAll(
        ".page-angel [data-animate]"
    );

    if (!animated.length) return;

    if (!("IntersectionObserver" in window)) {

        animated.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                const delay = Number(
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

    animated.forEach((element) => {
        observer.observe(element);
    });
}

/* ==========================================================
   VER MAIS
   ========================================================== */

function initialiseMorePanels() {

    document
        .querySelectorAll(".page-angel [data-angel-more]")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const panelId =
                    button.getAttribute("aria-controls");

                const panel =
                    panelId
                        ? document.getElementById(panelId)
                        : null;

                if (!panel) return;

                const shouldOpen =
                    button.getAttribute("aria-expanded") !== "true";

                button.setAttribute(
                    "aria-expanded",
                    String(shouldOpen)
                );

                panel.setAttribute(
                    "aria-hidden",
                    String(!shouldOpen)
                );

                panel.classList.toggle(
                    "is-open",
                    shouldOpen
                );

            });

        });
}

/* ==========================================================
   FAQ
   ========================================================== */

function initialiseFaq() {

    document
        .querySelectorAll(".page-angel [data-faq-toggle]")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const item =
                    button.closest("[data-faq-item]");

                const answerId =
                    button.getAttribute("aria-controls");

                const answer =
                    answerId
                        ? document.getElementById(answerId)
                        : null;

                if (!item || !answer) return;

                const shouldOpen =
                    button.getAttribute("aria-expanded") !== "true";

                document
                    .querySelectorAll(
                        ".page-angel [data-faq-item]"
                    )
                    .forEach((otherItem) => {

                        const otherButton =
                            otherItem.querySelector(
                                "[data-faq-toggle]"
                            );

                        const otherAnswer =
                            otherItem.querySelector(
                                ".angel-faq-answer"
                            );

                        if (
                            !otherButton ||
                            !otherAnswer ||
                            otherItem === item
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

                        otherItem.classList.remove(
                            "is-open"
                        );

                    });

                button.setAttribute(
                    "aria-expanded",
                    String(shouldOpen)
                );

                answer.setAttribute(
                    "aria-hidden",
                    String(!shouldOpen)
                );

                answer.classList.toggle(
                    "is-open",
                    shouldOpen
                );

                item.classList.toggle(
                    "is-open",
                    shouldOpen
                );

            });

        });
}

/* ==========================================================
   WHATSAPP
   ========================================================== */

function initialiseWhatsApp() {

    document
        .querySelectorAll(".page-angel [data-whatsapp]")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const message = encodeURIComponent(
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

            const markReady = () => {

                card.classList.add(
                    "has-image"
                );

                placeholder.classList.remove(
                    "is-visible"
                );

                link.classList.remove(
                    "is-disabled"
                );

            };

            const markMissing = () => {

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
                markReady,
                { once: true }
            );

            image.addEventListener(
                "error",
                markMissing,
                { once: true }
            );

            if (image.complete) {

                if (image.naturalWidth > 0) {
                    markReady();
                } else {
                    markMissing();
                }

            }

        });
}

/* ==========================================================
   HOME
   ========================================================== */

function initialiseHomeButton() {

    document
        .querySelectorAll(".page-angel [data-home]")
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
        .querySelectorAll(".page-angel [data-ripple]")
        .forEach((element) => {

            try {
                ripple?.(element);
            } catch {
                /* efeito opcional */
            }

        });
}
