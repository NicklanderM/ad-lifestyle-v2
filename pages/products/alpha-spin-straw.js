/* ==========================================================
   AD LIFESTYLE V2
   ALPHA SPIN STRAW
   Premium Smart Living Product Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";
const PRODUCT_IMAGE = "./images/products/straw.png";

/* ==========================================================
   LOAD
   ========================================================== */

export function loadAlphaSpinStraw(){

    applyTheme("product");

    const app = document.getElementById("app");

    if(!app){
        return;
    }

    app.innerHTML = `
        <div
            class="page-alpha-spin-straw"
            data-product-page="alpha-spin-straw">

            ${strawHero()}
            ${strawOverview()}
            ${strawExperience()}
            ${strawBenefits()}
            ${strawTechnology()}
            ${strawUse()}
            ${strawClaims()}
            ${strawFaq()}
            ${strawDisclaimer()}
            ${strawCta()}

        </div>
    `;

    initialiseAlphaSpinStraw();
}

/* ==========================================================
   HERO
   ========================================================== */

function strawHero(){

    return `
    <section class="hero straw-hero" id="straw-top">

        <div class="straw-hero-atmosphere" aria-hidden="true">
            <span class="straw-orb straw-orb-1"></span>
            <span class="straw-orb straw-orb-2"></span>
            <span class="straw-orb straw-orb-3"></span>
            <span class="straw-orbit straw-orbit-1"></span>
            <span class="straw-orbit straw-orbit-2"></span>
        </div>

        <div class="container hero-grid">

            <div class="hero-content reveal">

                <span class="badge straw-badge">
                    SMART LIVING
                </span>

                <span class="straw-eyebrow">
                    ALPHA SPIN · WELLNESS TECHNOLOGY
                </span>

                <h1 class="hero-title">
                    Transforme a forma
                    <span>como bebe.</span>
                </h1>

                <p class="hero-sub">
                    Alpha Spin Straw é apresentado como um canudo de vidro
                    desenvolvido para acompanhar água e outras bebidas dentro
                    de uma proposta de bebida estruturada e de elevada pureza.
                </p>

                <div class="straw-hero-pills">
                    <span>Vidro</span>
                    <span>Pureza</span>
                    <span>Água estruturada</span>
                    <span>Smart Living</span>
                </div>

                <div class="hero-actions">

                    <button
                        type="button"
                        class="btn btn-primary straw-btn-primary"
                        id="buyAlphaSpinStraw">
                        Pedir informações
                    </button>

                    <button
                        type="button"
                        class="btn btn-glass straw-btn-glass"
                        id="discoverAlphaSpinStraw">
                        Descobrir o produto
                    </button>

                </div>

                <div class="straw-hero-meta">

                    <div>
                        <strong>65%</strong>
                        <span>verde na identidade visual</span>
                    </div>

                    <div>
                        <strong>Vidro</strong>
                        <span>elemento central do produto</span>
                    </div>

                    <div>
                        <strong>Premium</strong>
                        <span>conceito Alpha Spin</span>
                    </div>

                </div>

            </div>

            <div class="hero-visual reveal-right">

                <div class="straw-hero-product floating">

                    <div class="straw-product-aura" aria-hidden="true"></div>

                    <div class="straw-product-ring straw-product-ring-1"></div>

                    <div class="straw-product-ring straw-product-ring-2"></div>

                    <div class="straw-product-grid" aria-hidden="true"></div>

                    <img
                        class="parallax"
                        data-speed="18"
                        src="${PRODUCT_IMAGE}"
                        alt="Alpha Spin Straw — canudo de vidro">

                    <div class="straw-product-caption">
                        <span>ALPHA SPIN</span>
                        <strong>STRAW</strong>
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

function strawOverview(){

    return `
    <section
        class="section straw-overview-section"
        id="alpha-spin-straw-overview">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    ALPHA SPIN STRAW
                </span>

                <h2 class="section-title">
                    Um acessório.
                    <span>Uma nova experiência de bebida.</span>
                </h2>

                <p class="lead">
                    A proposta do Alpha Spin Straw centra-se num canudo de vidro
                    associado à ideia de água e bebidas estruturadas, com uma
                    apresentação premium e minimalista.
                </p>

            </div>

            <div class="straw-overview-grid">

                ${strawOverviewCard(
                    "01",
                    "Vidro",
                    "Construção em vidro, valorizando transparência, limpeza visual e uma experiência de utilização premium."
                )}

                ${strawOverviewCard(
                    "02",
                    "Bebidas",
                    "Concebido para acompanhar água e outras bebidas no quotidiano, dentro da proposta de utilização do produto."
                )}

                ${strawOverviewCard(
                    "03",
                    "Estrutura",
                    "O posicionamento do produto está ligado ao conceito de bebida estruturada apresentado no material promocional."
                )}

                ${strawOverviewCard(
                    "04",
                    "Smart Living",
                    "Integra-se no universo Alpha Spin como um elemento de rotina, bem-estar e tecnologia aplicada ao quotidiano."
                )}

            </div>

            <div class="straw-note reveal">

                <div class="straw-note-icon">
                    ◎
                </div>

                <div>

                    <strong>
                        Uma proposta centrada na experiência.
                    </strong>

                    <p>
                        As descrições científicas e alegações de saúde devem ser
                        consideradas de acordo com documentação oficial do produto.
                    </p>

                </div>

            </div>

        </div>

    </section>
    `;
}

function strawOverviewCard(number,title,text){

    return `
        <article class="straw-overview-card reveal">

            <span class="straw-card-number">
                ${number}
            </span>

            <div class="straw-card-icon" aria-hidden="true">
                ${
                    number === "01"
                        ? "◇"
                        : number === "02"
                            ? "○"
                            : number === "03"
                                ? "⌁"
                                : "✦"
                }
            </div>

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
   EXPERIENCE
   ========================================================== */

function strawExperience(){

    return `
    <section class="section straw-dark-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label straw-label-light">
                    A EXPERIÊNCIA
                </span>

                <h2 class="section-title">
                    Leve o seu ritual de bebida
                    <span>para outro nível.</span>
                </h2>

                <p class="lead">
                    O Alpha Spin Straw foi apresentado dentro de uma proposta
                    que une contacto com o vidro, pureza da experiência e o
                    conceito de estrutura da bebida.
                </p>

            </div>

            <div class="straw-experience-grid">

                <article class="straw-experience-card reveal">

                    <div class="straw-experience-top">
                        <span>01</span>
                        <i>◇</i>
                    </div>

                    <h3>
                        Contacto com o vidro
                    </h3>

                    <p>
                        Uma solução apresentada com foco numa experiência de
                        utilização limpa, simples e visualmente transparente.
                    </p>

                </article>

                <article class="straw-experience-card reveal">

                    <div class="straw-experience-top">
                        <span>02</span>
                        <i>◎</i>
                    </div>

                    <h3>
                        Água e outras bebidas
                    </h3>

                    <p>
                        O produto é pensado para acompanhar diferentes momentos
                        de consumo no quotidiano.
                    </p>

                </article>

                <article class="straw-experience-card reveal">

                    <div class="straw-experience-top">
                        <span>03</span>
                        <i>⌁</i>
                    </div>

                    <h3>
                        Conceito de estrutura
                    </h3>

                    <p>
                        A comunicação do produto associa o canudo à ideia de
                        água ou bebida estruturada.
                    </p>

                </article>

            </div>

        </div>

    </section>
    `;
}

/* ==========================================================
   BENEFITS
   ========================================================== */

function strawBenefits(){

    return `
    <section class="section straw-benefits-section">

        <div class="container">

            <div class="straw-section-heading reveal">

                <div>

                    <span class="label">
                        BENEFÍCIOS APRESENTADOS
                    </span>

                    <h2 class="section-title">
                        O que é associado
                        <span>ao Alpha Spin Straw.</span>
                    </h2>

                </div>

                <p class="lead">
                    Abaixo estão as alegações fornecidas para o produto.
                    São apresentadas como alegações promocionais e não como
                    resultados clínicos comprovados nesta página.
                </p>

            </div>

            <div class="straw-benefit-grid">

                ${strawBenefit(
                    "01",
                    "Enxaquecas",
                    "A informação fornecida associa o produto à melhoria de crises de enxaqueca. Esta alegação requer confirmação documental antes de ser comunicada como efeito terapêutico."
                )}

                ${strawBenefit(
                    "02",
                    "Circulação e funções cerebrais",
                    "O material fornecido associa o produto à circulação sanguínea, memória e oxigenação cerebral. Estas afirmações devem ser tratadas como alegações promocionais a confirmar."
                )}

                ${strawBenefit(
                    "03",
                    "Energia e vitalidade",
                    "A comunicação do produto refere aumento de energia e vitalidade. A forma adequada de comunicar este ponto depende da documentação oficial disponível."
                )}

                <div
                    class="straw-more-panel"
                    id="straw-benefits-more"
                    data-more-panel="benefits">

                    ${strawBenefit(
                        "04",
                        "Trombose",
                        "A informação fornecida menciona prevenção de trombose. Por se tratar de uma alegação médica, não deve ser apresentada como facto clínico sem evidência e autorização adequada."
                    )}

                    ${strawBenefit(
                        "05",
                        "Crises dolorosas em pessoas com drepanocitose",
                        "O material fornecido menciona eliminação de crises dolorosas em pessoas com drepanocitose. Esta alegação deve ser validada antes de qualquer utilização comercial."
                    )}

                    ${strawBenefit(
                        "06",
                        "Acidose metabólica",
                        "A descrição fornecida associa o produto à eliminação da acidose metabólica e à cura de doenças. Esta formulação é uma alegação promocional e não é apresentada nesta página como facto médico."
                    )}

                </div>

            </div>

            <button
                type="button"
                class="straw-more-toggle"
                data-more-toggle="benefits"
                aria-expanded="false"
                aria-controls="straw-benefits-more">

                <span>
                    Ver mais alegações
                </span>

                <i aria-hidden="true">
                    +
                </i>

            </button>

        </div>

    </section>
    `;
}

function strawBenefit(number,title,text){

    return `
        <article class="straw-benefit-card reveal">

            <div class="straw-benefit-head">

                <span>
                    ${number}
                </span>

                <i>
                    ✓
                </i>

            </div>

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
   TECHNOLOGY
   ========================================================== */

function strawTechnology(){

    return `
    <section class="section straw-technology-section">

        <div class="container">

            <div class="straw-tech-grid">

                <div class="straw-tech-visual reveal-left">

                    <div class="straw-tech-panel">

                        <div
                            class="straw-tech-lines"
                            aria-hidden="true">

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>

                        <div class="straw-tech-core">

                            <span>
                                ALPHA SPIN
                            </span>

                            <strong>
                                STRAW
                            </strong>

                            <small>
                                GLASS · SMART LIVING
                            </small>

                        </div>

                    </div>

                </div>

                <div class="straw-tech-copy reveal-right">

                    <span class="label">
                        IDENTIDADE
                    </span>

                    <h2 class="section-title">
                        Verde profundo.
                        <span>Dourado preciso.</span>
                    </h2>

                    <p class="lead">
                        A identidade visual foi construída para transmitir
                        natureza, tecnologia, profundidade e acabamento premium.
                    </p>

                    <div class="straw-palette">

                        ${palette(
                            "#07543F",
                            "Verde esmeralda profundo",
                            "Cor principal"
                        )}

                        ${palette(
                            "#0D3F32",
                            "Verde floresta",
                            "Sombras e profundidade"
                        )}

                        ${palette(
                            "#146B50",
                            "Verde médio",
                            "Detalhes"
                        )}

                        ${palette(
                            "#C6A04D",
                            "Dourado / latão",
                            "Acentos premium"
                        )}

                        ${palette(
                            "#151515",
                            "Preto carvão",
                            "Contraste"
                        )}

                        ${palette(
                            "#BFC3C1",
                            "Prata metálico",
                            "Componentes"
                        )}

                        ${palette(
                            "#F7F7F5",
                            "Branco",
                            "Neutros"
                        )}

                    </div>

                </div>

            </div>

        </div>

    </section>
    `;
}

function palette(hex,name,role){

    return `
        <div class="straw-palette-row">

            <span
                class="straw-swatch"
                style="--swatch:${hex}"
                aria-hidden="true">
            </span>

            <div>

                <strong>
                    ${name}
                </strong>

                <span>
                    ${hex} · ${role}
                </span>

            </div>

        </div>
    `;
}

/* ==========================================================
   USE
   ========================================================== */

function strawUse(){

    return `
    <section class="section straw-use-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">
                    ROTINA
                </span>

                <h2 class="section-title">
                    Uma utilização
                    <span>simples e elegante.</span>
                </h2>

                <p class="lead">
                    A página apresenta a utilização de forma intencionalmente
                    simples, deixando instruções técnicas específicas para a
                    documentação oficial do produto.
                </p>

            </div>

            <div class="straw-use-grid">

                ${useStep(
                    "01",
                    "Prepare a bebida",
                    "Coloque a água ou outra bebida que pretende consumir no recipiente adequado."
                )}

                ${useStep(
                    "02",
                    "Utilize o Alpha Spin Straw",
                    "Utilize o canudo de vidro como acessório de consumo, de acordo com as instruções oficiais."
                )}

                ${useStep(
                    "03",
                    "Integre na rotina",
                    "Leve a experiência para casa, para o trabalho ou para os seus momentos de bem-estar."
                )}

            </div>

            <div
                class="straw-more-panel"
                id="straw-use-more"
                data-more-panel="use">

                <div class="straw-use-note reveal">

                    <strong>
                        Cuidados de utilização
                    </strong>

                    <p>
                        Não foram fornecidas, no material utilizado para esta
                        página, especificações completas sobre limpeza,
                        temperatura, impacto ou manutenção do vidro. Essas
                        instruções devem seguir a documentação oficial.
                    </p>

                </div>

            </div>

            <button
                type="button"
                class="straw-more-toggle straw-more-toggle-light"
                data-more-toggle="use"
                aria-expanded="false"
                aria-controls="straw-use-more">

                <span>
                    Ver cuidados e detalhes
                </span>

                <i aria-hidden="true">
                    +
                </i>

            </button>

        </div>

    </section>
    `;
}

function useStep(number,title,text){

    return `
        <article class="straw-use-step reveal">

            <div class="straw-use-number">
                ${number}
            </div>

            <div>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${text}
                </p>

            </div>

        </article>
    `;
}

/* ==========================================================
   CLAIMS
   ========================================================== */

function strawClaims(){

    return `
    <section class="section straw-claims-section">

        <div class="container">

            <div class="straw-claims-box reveal">

                <div class="straw-claims-icon">
                    !
                </div>

                <div>

                    <span class="label">
                        COMUNICAÇÃO RESPONSÁVEL
                    </span>

                    <h2>
                        O que está confirmado
                        <span>e o que precisa de validação.</span>
                    </h2>

                    <p>
                        As informações recebidas para esta página incluem
                        alegações sobre água estruturada, remoção de impurezas,
                        micróbios e tóxicos, circulação, enxaquecas, trombose,
                        drepanocitose, acidose metabólica e cura de doenças.
                    </p>

                    <p>
                        Nesta versão, essas afirmações são mantidas como
                        <strong>
                            alegações promocionais a confirmar
                        </strong>,
                        evitando transformá-las em garantias médicas.
                    </p>

                </div>

            </div>

        </div>

    </section>
    `;
}

/* ==========================================================
   FAQ
   ========================================================== */

function strawFaq(){

    return `
    <section
        class="section straw-faq-section"
        id="straw-faq">

        <div class="container-sm">

            <div class="section-center reveal">

                <span class="label">
                    PERGUNTAS FREQUENTES
                </span>

                <h2 class="section-title">
                    Antes de escolher o
                    <span>Alpha Spin Straw.</span>
                </h2>

                <p class="lead">
                    Respostas claras para as dúvidas mais relevantes sobre
                    conceito, utilização e alegações do produto.
                </p>

            </div>

            <div class="straw-faq-list">

                ${strawQuestion(
                    "01",
                    "O que é o Alpha Spin Straw?",
                    "É apresentado como um canudo de vidro associado ao conceito Alpha Spin e à proposta de consumir água e outras bebidas numa experiência de bebida estruturada."
                )}

                ${strawQuestion(
                    "02",
                    "É feito de vidro?",
                    "Sim. A descrição fornecida identifica o Alpha Spin Straw como um canudo de vidro."
                )}

                ${strawQuestion(
                    "03",
                    "Para que bebidas pode ser utilizado?",
                    "A informação fornecida refere água e qualquer bebida. Para recomendações específicas sobre temperatura, limpeza e compatibilidade, devem ser seguidas as instruções oficiais."
                )}

                <div
                    class="straw-more-panel"
                    id="straw-faq-more"
                    data-more-panel="faq">

                    ${strawQuestion(
                        "04",
                        "O produto remove micróbios, tóxicos e impurezas?",
                        "Essa afirmação faz parte da descrição promocional recebida. Não deve ser apresentada como garantia técnica ou sanitária sem documentação oficial que a sustente."
                    )}

                    ${strawQuestion(
                        "05",
                        "Pode tratar enxaquecas ou outras doenças?",
                        "As informações fornecidas incluem alegações terapêuticas. Nesta página elas não são apresentadas como tratamento médico nem como garantia de cura."
                    )}

                    ${strawQuestion(
                        "06",
                        "O Alpha Spin Straw substitui cuidados médicos?",
                        "Não. Um acessório de consumo não deve ser apresentado nesta página como substituto de diagnóstico, medicamentos ou acompanhamento profissional."
                    )}

                </div>

            </div>

            <button
                type="button"
                class="straw-more-toggle straw-more-toggle-faq"
                data-more-toggle="faq"
                aria-expanded="false"
                aria-controls="straw-faq-more">

                <span>
                    Ver mais perguntas
                </span>

                <i aria-hidden="true">
                    +
                </i>

            </button>

        </div>

    </section>
    `;
}

function strawQuestion(number,question,answer){

    const id = `straw-faq-${number}`;

    return `
        <article class="straw-faq-item">

            <button
                type="button"
                class="straw-faq-question"
                aria-expanded="false"
                aria-controls="${id}-answer">

                <span class="straw-faq-number">
                    ${number}
                </span>

                <span class="straw-faq-text">
                    ${question}
                </span>

                <span
                    class="straw-faq-plus"
                    aria-hidden="true">
                    +
                </span>

            </button>

            <div
                class="straw-faq-answer"
                id="${id}-answer"
                role="region">

                <p>
                    ${answer}
                </p>

            </div>

        </article>
    `;
}

/* ==========================================================
   DISCLAIMER
   ========================================================== */

function strawDisclaimer(){

    return `
    <section class="straw-disclaimer">

        <div class="container">

            <div class="straw-disclaimer-box reveal">

                <span class="straw-disclaimer-mark">
                    i
                </span>

                <div>

                    <strong>
                        Nota importante
                    </strong>

                    <p>
                        O conteúdo desta página foi organizado a partir das
                        informações fornecidas para o Alpha Spin Straw. As
                        alegações terapêuticas, sanitárias ou científicas
                        devem ser confirmadas através de documentação oficial
                        antes de serem usadas como publicidade ou promessa
                        de resultado.
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

function strawCta(){

    return `
    <section class="section straw-cta-section">

        <div class="container">

            <div class="straw-cta-box reveal">

                <div>

                    <span class="label straw-label-light">
                        ALPHA SPIN STRAW
                    </span>

                    <h2>
                        Descubra uma nova
                        <span>forma de beber.</span>
                    </h2>

                    <p>
                        Fale com a AD Lifestyle para conhecer o produto,
                        disponibilidade e condições de aquisição.
                    </p>

                </div>

                <div class="straw-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary straw-btn-primary"
                        data-buy-straw>
                        Pedir pelo WhatsApp
                    </button>

                    <button
                        type="button"
                        class="btn btn-glass straw-btn-dark"
                        data-back-home>
                        Voltar à AD Lifestyle
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

function initialiseAlphaSpinStraw(){

    const root =
        document.querySelector(
            ".page-alpha-spin-straw"
        );

    if(!root){
        return;
    }

    try{

        ripple(root);

    }catch(error){

        console.warn(
            "Alpha Spin Straw: ripple não inicializado.",
            error
        );

    }

    try{

        stagger(
            root.querySelectorAll(
                ".straw-overview-grid .reveal," +
                ".straw-benefit-grid .reveal," +
                ".straw-use-grid .reveal"
            )
        );

    }catch(error){

        console.warn(
            "Alpha Spin Straw: stagger não inicializado.",
            error
        );

    }

    /* ======================================================
       DISCOVER
       ====================================================== */

    const discover =
        root.querySelector(
            "#discoverAlphaSpinStraw"
        );

    if(discover){

        discover.addEventListener(
            "click",
            function(){

                const target =
                    root.querySelector(
                        "#alpha-spin-straw-overview"
                    );

                if(target){

                    target.scrollIntoView({
                        behavior:"smooth",
                        block:"start"
                    });

                }

            }
        );

    }

    /* ======================================================
       EVENT DELEGATION
       ====================================================== */

    root.addEventListener(
        "click",
        function(event){

            /* ---------------------------
               SCROLL
               --------------------------- */

            const scrollTrigger =
                event.target.closest(
                    "[data-scroll]"
                );

            if(scrollTrigger){

                const selector =
                    scrollTrigger.getAttribute(
                        "data-scroll"
                    );

                const target =
                    root.querySelector(selector) ||
                    document.querySelector(selector);

                if(target){

                    target.scrollIntoView({
                        behavior:"smooth",
                        block:"start"
                    });

                }

                return;
            }

            /* ---------------------------
               WHATSAPP
               --------------------------- */

            const buyButton =
                event.target.closest(
                    "[data-buy-straw], #buyAlphaSpinStraw"
                );

            if(buyButton){

                openWhatsApp(
                    "Olá! Gostaria de obter informações sobre o Alpha Spin Straw."
                );

                return;
            }

            /* ---------------------------
               HOME
               --------------------------- */

            const backButton =
                event.target.closest(
                    "[data-back-home]"
                );

            if(backButton){

                navigate("/");

                return;
            }

            /* ---------------------------
               MORE
               --------------------------- */

            const moreButton =
                event.target.closest(
                    "[data-more-toggle]"
                );

            if(moreButton){

                toggleMore(
                    root,
                    moreButton
                );

                return;
            }

            /* ---------------------------
               FAQ
               --------------------------- */

            const faqButton =
                event.target.closest(
                    ".straw-faq-question"
                );

            if(faqButton){

                toggleFaq(
                    root,
                    faqButton
                );

            }

        }
    );

    /* ======================================================
       RESIZE FAQ
       ====================================================== */

    window.addEventListener(
        "resize",
        function(){

            root
                .querySelectorAll(
                    ".straw-faq-item.active .straw-faq-answer"
                )
                .forEach(
                    function(answer){

                        answer.style.maxHeight =
                            `${answer.scrollHeight}px`;

                    }
                );

        }
    );

}

/* ==========================================================
   MORE TOGGLE
   ========================================================== */

function toggleMore(root,button){

    const key =
        button.getAttribute(
            "data-more-toggle"
        );

    const panel =
        root.querySelector(
            `[data-more-panel="${key}"]`
        );

    if(!panel){
        return;
    }

    const isOpen =
        button.getAttribute(
            "aria-expanded"
        ) === "true";

    const nextState = !isOpen;

    button.setAttribute(
        "aria-expanded",
        String(nextState)
    );

    button.classList.toggle(
        "is-open",
        nextState
    );

    panel.classList.toggle(
        "is-open",
        nextState
    );

    const label =
        button.querySelector("span");

    if(label){

        label.textContent =
            nextState
                ? getCloseLabel(key)
                : getOpenLabel(key);

    }

}

/* ==========================================================
   FAQ
   ========================================================== */

function toggleFaq(root,button){

    const item =
        button.closest(
            ".straw-faq-item"
        );

    if(!item){
        return;
    }

    const answer =
        item.querySelector(
            ".straw-faq-answer"
        );

    if(!answer){
        return;
    }

    const wasOpen =
        item.classList.contains(
            "active"
        );

    root
        .querySelectorAll(
            ".straw-faq-item.active"
        )
        .forEach(
            function(openItem){

                if(openItem !== item){

                    closeFaqItem(
                        openItem
                    );

                }

            }
        );

    if(wasOpen){

        closeFaqItem(item);

        return;
    }

    item.classList.add(
        "active"
    );

    button.setAttribute(
        "aria-expanded",
        "true"
    );

    answer.style.maxHeight =
        `${answer.scrollHeight}px`;
}

/* ==========================================================
   CLOSE FAQ
   ========================================================== */

function closeFaqItem(item){

    const button =
        item.querySelector(
            ".straw-faq-question"
        );

    const answer =
        item.querySelector(
            ".straw-faq-answer"
        );

    item.classList.remove(
        "active"
    );

    if(button){

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    if(answer){

        answer.style.maxHeight =
            "0px";

    }

}

/* ==========================================================
   LABELS
   ========================================================== */

function getOpenLabel(key){

    const labels = {

        benefits:
            "Ver mais alegações",

        use:
            "Ver cuidados e detalhes",

        faq:
            "Ver mais perguntas"

    };

    return (
        labels[key] ||
        "Ver mais"
    );
}

function getCloseLabel(key){

    const labels = {

        benefits:
            "Ocultar alegações",

        use:
            "Ocultar cuidados",

        faq:
            "Ocultar perguntas"

    };

    return (
        labels[key] ||
        "Ocultar"
    );
}

/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(message){

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
