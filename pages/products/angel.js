```js
/* ==========================================================
   AD LIFESTYLE V2
   ANGEL.JS
   Premium Product Page — Angel Moon
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";


/* ==========================================================
   LOAD ANGEL PAGE
   ========================================================== */

export function loadAngel(){

    applyTheme("angel");

    const app = document.getElementById("app");

    if(!app) return;

    app.innerHTML = `

        ${hero()}

        ${technology()}

        ${benefits()}

        ${composition()}

        ${variants()}

        ${faq()}

        ${cta()}

    `;

    initialiseAngel();

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero angel-hero">

    <div class="container">

        <div class="hero-grid">

            <div class="hero-content reveal">

                <span class="label">
                    Angel Moon Collection
                </span>

                <h1 class="hero-title">
                    Conforto,
                    <span>Elegância</span>
                    & Bem-estar
                </h1>

                <p class="lead">

                    Uma experiência de conforto e protecção
                    durante o período menstrual, combinando
                    absorção, suavidade, respirabilidade
                    e tecnologia.

                </p>

                <div class="hero-actions">

                    <button
                        class="btn btn-primary"
                        id="buyAngel"
                        type="button">

                        Comprar agora

                    </button>

                    <button
                        class="btn btn-secondary"
                        id="benefitsBtn"
                        type="button">

                        Ver benefícios

                    </button>

                </div>

                <div class="hero-meta">

                    <span>
                        ✓ Super absorvente
                    </span>

                    <span>
                        ✓ Permeável ao ar
                    </span>

                    <span>
                        ✓ Fino e flexível
                    </span>

                </div>

            </div>


            <div class="hero-visual reveal">

                <div class="angel-product-card">

                    <div class="product-image-wrapper">

                        <img
                            src="./assets/products/angel.png"
                            alt="Angel Moon"
                            class="product-main-image"
                            loading="eager"
                        >

                    </div>

                    <div class="product-image-caption">

                        <span class="label">
                            Angel Moon
                        </span>

                        <strong>
                            Tecnologia e conforto
                        </strong>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   TECHNOLOGY
   ========================================================== */

function technology(){

return `

<section class="section angel-technology">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Tecnologia
            </span>

            <h2 class="section-title">
                Tecnologia de 7 camadas
            </h2>

            <p class="lead">

                Estrutura concebida para combinar
                absorção, conforto, ventilação
                e protecção durante a utilização.

            </p>

        </div>


        <div class="grid grid-3 mt-6">

            ${technologyCard(
                "01",
                "Contacto suave",
                "Camada em contacto com a pele, concebida para proporcionar suavidade e conforto."
            )}

            ${technologyCard(
                "02",
                "Distribuição",
                "Ajuda a distribuir o fluxo pela estrutura do produto."
            )}

            ${technologyCard(
                "03",
                "Super absorção",
                "Camada de absorção concebida para reter os líquidos."
            )}

            ${technologyCard(
                "04",
                "Núcleo absorvente",
                "Estrutura central orientada para a retenção e absorção."
            )}

            ${technologyCard(
                "05",
                "Camada protectora",
                "Contribui para manter o conteúdo absorvido no interior."
            )}

            ${technologyCard(
                "06",
                "Respirabilidade",
                "Estrutura permeável ao ar para favorecer uma maior sensação de frescura."
            )}

            ${technologyCard(
                "07",
                "Base protectora",
                "Camada exterior destinada a proporcionar segurança durante a utilização."
            )}

        </div>


        <div class="angel-more-information mt-5">

            <button
                class="angel-details-toggle"
                type="button"
                aria-expanded="false">

                <span>
                    Ver detalhes da tecnologia
                </span>

                <span class="angel-details-icon">
                    +
                </span>

            </button>


            <div class="angel-details-content">

                <div class="angel-details-grid">

                    <article class="angel-detail-card">

                        <span class="label">
                            Negative Ion Core
                        </span>

                        <h3>
                            Banda tecnológica
                        </h3>

                        <p class="text mt-2">

                            A documentação de apresentação
                            fornecida para o Angel Moon descreve
                            uma banda tecnológica denominada
                            Negative Ion Core.

                        </p>

                        <div class="icon-list mt-3">

                            ${comp("Nano Silver")}
                            ${comp("Iões negativos")}
                            ${comp("Biomagnetismo")}
                            ${comp("Infravermelho longínquo")}

                        </div>

                    </article>


                    <article class="angel-detail-card">

                        <span class="label">
                            SmartCore
                        </span>

                        <h3>
                            Estrutura inteligente
                        </h3>

                        <p class="text mt-2">

                            O material fornecido apresenta
                            a tecnologia SmartCore como uma
                            característica adicional da
                            construção do produto.

                        </p>

                        <div class="angel-detail-list mt-3">

                            ${detailItem("Estrutura fina")}
                            ${detailItem("Estrutura flexível")}
                            ${detailItem("Ventilação óptima")}
                            ${detailItem("Elevada absorção")}

                        </div>

                    </article>


                    <article class="angel-detail-card angel-detail-card-wide">

                        <span class="label">
                            Informação técnica
                        </span>

                        <h3>
                            Características comunicadas
                        </h3>

                        <p class="text mt-2">

                            As informações disponibilizadas para
                            o produto incluem referências a
                            propriedades antibacterianas,
                            desodorizantes, absorventes,
                            higiénicas e de ventilação.

                        </p>

                        <p class="text mt-2">

                            Alegações relacionadas com efeitos
                            terapêuticos ou alterações fisiológicas
                            devem ser consideradas apenas quando
                            suportadas pela documentação técnica,
                            certificações e evidência oficial
                            disponibilizadas pelo fabricante.

                        </p>

                    </article>

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

function benefits(){

return `

<section
    id="benefits"
    class="section-sm">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Benefícios
            </span>

            <h2 class="section-title">
                Conforto pensado para si
            </h2>

            <p class="lead">

                Uma combinação de conforto, absorção,
                respirabilidade e tecnologia para uma
                experiência de utilização diferenciada.

            </p>

        </div>


        <div class="grid grid-3 mt-6">

            ${benefit(
                "🌸",
                "Conforto superior",
                "Contacto suave e confortável com a pele."
            )}

            ${benefit(
                "💧",
                "Super absorvente",
                "Estrutura concebida para elevada capacidade de absorção."
            )}

            ${benefit(
                "🌿",
                "Respirável",
                "Estrutura permeável ao ar para maior sensação de frescura."
            )}

            ${benefit(
                "🛡️",
                "Tecnologia antibacteriana",
                "Característica integrada na estrutura apresentada do produto."
            )}

            ${benefit(
                "✨",
                "Controlo de odores",
                "Propriedade desodorizante comunicada para o Angel Moon."
            )}

            ${benefit(
                "💜",
                "Fino e flexível",
                "Pensado para acompanhar os movimentos com discrição."
            )}

        </div>


        <div class="angel-more-information mt-5">

            <button
                class="angel-details-toggle"
                type="button"
                aria-expanded="false">

                <span>
                    Ver detalhes das propriedades
                </span>

                <span class="angel-details-icon">
                    +
                </span>

            </button>


            <div class="angel-details-content">

                <div class="angel-details-grid">

                    <article class="angel-detail-card">

                        <span class="label">
                            Propriedades
                        </span>

                        <h3>
                            As 7 propriedades apresentadas
                        </h3>

                        <div class="angel-detail-list mt-3">

                            ${detailItem("Flexível")}
                            ${detailItem("Fino")}
                            ${detailItem("Super absorvente")}
                            ${detailItem("Ventilação óptima")}
                            ${detailItem("Higiénico")}
                            ${detailItem("Saudável")}
                            ${detailItem("Estilosa")}

                        </div>

                    </article>


                    <article class="angel-detail-card">

                        <span class="label">
                            Banda tecnológica
                        </span>

                        <h3>
                            Funções comunicadas
                        </h3>

                        <div class="angel-detail-list mt-3">

                            ${detailItem("Nano Silver")}
                            ${detailItem("Iões negativos")}
                            ${detailItem("Biomagnetismo")}
                            ${detailItem("Infravermelho longínquo")}

                        </div>

                    </article>


                    <article class="angel-detail-card angel-detail-card-wide">

                        <span class="label">
                            Informação adicional
                        </span>

                        <h3>
                            Alegações e aplicações apresentadas
                        </h3>

                        <p class="text mt-2">

                            O material fornecido para o produto
                            apresenta ainda referências a benefícios
                            relacionados com o bem-estar íntimo,
                            conforto menstrual, controlo de odores
                            e outras aplicações.

                        </p>

                        <p class="text mt-2">

                            Estas informações não são apresentadas
                            nesta página como diagnóstico, tratamento
                            ou garantia de resultados médicos.

                        </p>

                    </article>

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

function composition(){

return `

<section class="section angel-composition">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Composição
            </span>

            <h2 class="section-title">
                Estrutura desenvolvida para o conforto
            </h2>

            <p class="lead">

                Conheça os principais elementos
                apresentados na composição do Angel Moon.

            </p>

        </div>


        <div class="angel-composition-grid mt-6">

            <div class="angel-composition-visual reveal">

                <div class="angel-composition-image">

                    <img
                        src="./assets/products/angel.png"
                        alt="Estrutura e produto Angel Moon"
                        loading="lazy"
                    >

                </div>

            </div>


            <div class="angel-composition-content reveal">

                <div class="angel-composition-items">

                    ${compositionItem(
                        "01",
                        "Superfície suave",
                        "Contacto concebido para uma sensação confortável sobre a pele."
                    )}

                    ${compositionItem(
                        "02",
                        "Negative Ion Core",
                        "Banda tecnológica apresentada como parte diferenciadora do produto."
                    )}

                    ${compositionItem(
                        "03",
                        "SAP ultra absorvente",
                        "Material absorvente destinado à retenção de líquidos."
                    )}

                    ${compositionItem(
                        "04",
                        "Filme respirável",
                        "Camada concebida para favorecer a permeabilidade ao ar."
                    )}

                    ${compositionItem(
                        "05",
                        "Camada antibacteriana",
                        "Característica apresentada na informação disponibilizada para o produto."
                    )}

                    ${compositionItem(
                        "06",
                        "Base impermeável",
                        "Camada exterior destinada a ajudar a prevenir fugas."

                    )}

                </div>

            </div>

        </div>


        <div class="angel-composition-specs mt-6">

            <div class="section-center">

                <span class="label">
                    Características principais
                </span>

                <h3 class="section-title">
                    O essencial, sem excessos
                </h3>

            </div>


            <div class="grid grid-3 mt-5">

                ${specCard(
                    "💧",
                    "Super absorvente"
                )}

                ${specCard(
                    "🌿",
                    "Permeável ao ar"
                )}

                ${specCard(
                    "✨",
                    "Efeito desodorizante"
                )}

                ${specCard(
                    "🛡️",
                    "Efeito antibacteriano"
                )}

                ${specCard(
                    "〰️",
                    "Flexível"
                )}

                ${specCard(
                    "◌",
                    "Fina"
                )}

            </div>


            <div class="angel-more-information mt-5">

                <button
                    class="angel-details-toggle"
                    type="button"
                    aria-expanded="false">

                    <span>
                        Ver todas as especificações
                    </span>

                    <span class="angel-details-icon">
                        +
                    </span>

                </button>


                <div class="angel-details-content">

                    <div class="angel-spec-list">

                        ${detailItem("Tecnologia SmartCore")}
                        ${detailItem("Higiénico")}
                        ${detailItem("Saudável")}
                        ${detailItem("Estilosa")}
                        ${detailItem("Ventilação óptima")}
                        ${detailItem("Super absorção")}
                        ${detailItem("Estrutura fina")}
                        ${detailItem("Estrutura flexível")}

                    </div>

                </div>

            </div>

        </div>


        ${certification()}


        <div class="angel-properties mt-6">

            <div class="section-center reveal">

                <span class="label">
                    7 propriedades
                </span>

                <h3 class="section-title">
                    O que distingue o Angel Moon
                </h3>

            </div>


            <div class="grid grid-4 mt-5">

                ${propertyCard(
                    "01",
                    "Flexível"
                )}

                ${propertyCard(
                    "02",
                    "Fino"
                )}

                ${propertyCard(
                    "03",
                    "Super absorvente"
                )}

                ${propertyCard(
                    "04",
                    "Ventilação óptima"
                )}

                ${propertyCard(
                    "05",
                    "Higiénico"
                )}

                ${propertyCard(
                    "06",
                    "Saudável"
                )}

                ${propertyCard(
                    "07",
                    "Estilosa"
                )}

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   CERTIFICATION
   ========================================================== */

function certification(){

return `

<div class="angel-certification mt-6">

    <div class="section-center reveal">

        <span class="label">
            Certificação & padrões
        </span>

        <h3 class="section-title">
            Documentação e conformidade
        </h3>

        <p class="lead">

            Consulte a documentação apresentada para
            o produto e confirme sempre a informação
            oficial disponibilizada pelo fabricante.

        </p>

    </div>


    <div class="angel-certification-grid mt-5">

        ${certificate(
            "./assets/products/certifications/angel-cert-01.png",
            "Documento técnico Angel Moon"
        )}

        ${certificate(
            "./assets/products/certifications/angel-cert-02.png",
            "Padrões sanitários Angel Moon"
        )}

        ${certificate(
            "./assets/products/certifications/angel-cert-03.png",
            "Informação técnica Angel Moon"
        )}

        ${certificate(
            "./assets/products/certifications/angel-cert-04.png",
            "Documentação adicional Angel Moon"
        )}

    </div>

</div>

`;

}


/* ==========================================================
   VARIANTS
   ========================================================== */

function variants(){

return `

<section class="section-sm angel-variants">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Colecção
            </span>

            <h2 class="section-title">
                Escolha o formato ideal
            </h2>

            <p class="lead">

                Diferentes formatos para diferentes
                momentos e necessidades de utilização.

            </p>

        </div>


        <div class="grid grid-3 mt-6">

            ${variant(
                "./assets/products/angel1.png",
                "Dia",
                "24 cm",
                "Protecção diária"
            )}

            ${variant(
                "./assets/products/angel2.png",
                "Noite",
                "29 cm",
                "Protecção nocturna"
            )}

            ${variant(
                "./assets/products/angel3.png",
                "Panty Liner",
                "18 cm",
                "Protecção ligeira"
            )}

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

return `

<section class="section angel-faq">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Perguntas frequentes
            </span>

            <h2 class="section-title">
                Informação essencial
            </h2>

            <p class="lead">

                Algumas respostas para facilitar
                a sua decisão.

            </p>

        </div>


        <div class="angel-faq-list mt-6">

            ${faqItem(
                "O que é o Angel Moon?",
                "O Angel Moon é um penso higiénico apresentado com foco em conforto, absorção, respirabilidade e tecnologia."
            )}

            ${faqItem(
                "Quais são os principais benefícios?",
                "Entre as principais características comunicadas estão o conforto, a elevada absorção, a respirabilidade, o controlo de odores, a flexibilidade e a finura."
            )}

            ${faqItem(
                "Quais são os formatos disponíveis?",
                "A colecção apresentada inclui o formato Dia de 24 cm, Noite de 29 cm e Panty Liner de 18 cm."
            )}

            ${faqItem(
                "O Angel Moon é respirável?",
                "Sim. A informação disponibilizada para o produto apresenta a estrutura como permeável ao ar."
            )}

            ${faqItem(
                "O produto possui tecnologia adicional?",
                "Sim. A documentação de apresentação menciona Negative Ion Core, Nano Silver, iões negativos, biomagnetismo e infravermelho longínquo."
            )}

            ${faqItem(
                "O Angel Moon substitui tratamento médico?",
                "Não. O produto não deve ser apresentado nesta página como substituto de diagnóstico ou tratamento médico. Para questões de saúde, deve procurar orientação de um profissional de saúde."
            )}

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   CTA
   ========================================================== */

function cta(){

return `

<section class="section angel-cta">

    <div class="container">

        <div class="angel-cta-box reveal">

            <div class="angel-cta-content">

                <span class="label">
                    Angel Moon
                </span>

                <h2>
                    Descubra uma nova experiência
                    de conforto.
                </h2>

                <p class="text">

                    Conheça os formatos disponíveis
                    e fale connosco para saber mais
                    sobre o Angel Moon.

                </p>

            </div>


            <div class="angel-cta-actions">

                <button
                    class="btn btn-primary"
                    id="angelWhatsApp"
                    type="button">

                    Falar pelo WhatsApp

                </button>

                <button
                    class="btn btn-secondary"
                    id="backHome"
                    type="button">

                    Voltar ao início

                </button>

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   TECHNOLOGY CARD
   ========================================================== */

function technologyCard(number, title, text){

return `

<article class="card angel-technology-card reveal">

    <span class="angel-card-number">
        ${number}
    </span>

    <div class="angel-card-content">

        <h3>
            ${title}
        </h3>

        <p class="text mt-2">
            ${text}
        </p>

    </div>

</article>

`;

}


/* ==========================================================
   BENEFIT CARD
   ========================================================== */

function benefit(icon, title, text){

return `

<article class="card angel-benefit-card reveal">

    <div class="angel-benefit-icon">
        ${icon}
    </div>

    <h3>
        ${title}
    </h3>

    <p class="text mt-2">
        ${text}
    </p>

</article>

`;

}


/* ==========================================================
   COMPOSITION ITEM
   ========================================================== */

function compositionItem(number, title, text){

return `

<article class="angel-composition-item">

    <div class="angel-composition-number">
        ${number}
    </div>

    <div>

        <h3>
            ${title}
        </h3>

        <p class="text mt-1">
            ${text}
        </p>

    </div>

</article>

`;

}


/* ==========================================================
   SPEC CARD
   ========================================================== */

function specCard(icon, title){

return `

<article class="card angel-spec-card reveal">

    <span class="angel-spec-icon">
        ${icon}
    </span>

    <strong>
        ${title}
    </strong>

</article>

`;

}


/* ==========================================================
   PROPERTY CARD
   ========================================================== */

function propertyCard(number, title){

return `

<article class="angel-property-card reveal">

    <span class="angel-property-number">
        ${number}
    </span>

    <strong>
        ${title}
    </strong>

</article>

`;

}


/* ==========================================================
   VARIANT CARD
   ========================================================== */

function variant(image, title, size, subtitle){

return `

<article class="card product-card angel-variant-card reveal">

    <div class="product-card-image">

        <img
            src="${image}"
            alt="Angel Moon ${title} ${size}"
            loading="lazy"
        >

    </div>

    <div class="product-card-content">

        <span class="label">
            Angel Moon
        </span>

        <h3>
            ${title}
        </h3>

        <strong class="angel-variant-size">
            ${size}
        </strong>

        <p class="text mt-2">
            ${subtitle}
        </p>

    </div>

</article>

`;

}


/* ==========================================================
   FAQ ITEM
   ========================================================== */

function faqItem(question, answer){

return `

<article class="angel-faq-item">

    <button
        class="angel-faq-question"
        type="button"
        aria-expanded="false">

        <span>
            ${question}
        </span>

        <span class="angel-faq-icon">
            +
        </span>

    </button>


    <div class="angel-faq-answer">

        <div>

            <p class="text">
                ${answer}
            </p>

        </div>

    </div>

</article>

`;

}


/* ==========================================================
   CERTIFICATE
   ========================================================== */

function certificate(image, title){

return `

<article class="angel-certification-card">

    <div class="angel-certification-image">

        <img
            src="${image}"
            alt="${title}"
            loading="lazy"
            onerror="this.parentElement.classList.add('missing');"
        >

        <div class="angel-certification-missing">

            <span>
                Documentação
            </span>

            <small>
                Imagem não disponível
            </small>

        </div>

    </div>

    <div class="angel-certification-caption">

        <strong>
            ${title}
        </strong>

    </div>

</article>

`;

}


/* ==========================================================
   COMPONENT LIST ITEM
   ========================================================== */

function comp(text){

return `

<div class="icon-list-item">

    <span class="icon-circle">
        ✓
    </span>

    <span>
        ${text}
    </span>

</div>

`;

}


/* ==========================================================
   DETAIL ITEM
   ========================================================== */

function detailItem(text){

return `

<div class="angel-detail-item">

    <span class="icon-circle">
        ✓
    </span>

    <span>
        ${text}
    </span>

</div>

`;

}


/* ==========================================================
   INITIALISE ANGEL
   ========================================================== */

function initialiseAngel(){

    /*
     * Animations
     */

    try{

        stagger(
            ".angel-technology-card",
            80
        );

        stagger(
            ".angel-benefit-card",
            80
        );

        stagger(
            ".angel-spec-card",
            70
        );

        stagger(
            ".angel-property-card",
            70
        );

        stagger(
            ".angel-variant-card",
            90
        );

    }catch(error){

        console.warn(
            "Angel Moon animations:",
            error
        );

    }


    /*
     * Ripple effects
     */

    try{

        document
            .querySelectorAll(".btn")
            .forEach(button => {

                ripple(button);

            });

    }catch(error){

        console.warn(
            "Angel Moon ripple:",
            error
        );

    }


    /*
     * Scroll to benefits
     */

    const benefitsButton =
        document.getElementById("benefitsBtn");

    if(benefitsButton){

        benefitsButton.addEventListener(
            "click",
            () => {

                const target =
                    document.getElementById("benefits");

                if(target){

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /*
     * Buy Angel
     */

    const buyButton =
        document.getElementById("buyAngel");

    if(buyButton){

        buyButton.addEventListener(
            "click",
            openWhats
        );

    }


    /*
     * WhatsApp CTA
     */

    const whatsButton =
        document.getElementById("angelWhatsApp");

    if(whatsButton){

        whatsButton.addEventListener(
            "click",
            openWhats
        );

    }


    /*
     * Back home
     */

    const backHome =
        document.getElementById("backHome");

    if(backHome){

        backHome.addEventListener(
            "click",
            () => {

                navigate("/");

            }
        );

    }


    /*
     * Expandable information
     */

    document
        .querySelectorAll(".angel-details-toggle")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const container =
                        button.closest(
                            ".angel-more-information"
                        );

                    if(!container) return;


                    const isOpen =
                        container.classList.contains(
                            "active"
                        );


                    container.classList.toggle(
                        "active",
                        !isOpen
                    );


                    button.setAttribute(
                        "aria-expanded",
                        String(!isOpen)
                    );

                }
            );

        });


    /*
     * FAQ accordion
     */

    document
        .querySelectorAll(".angel-faq-question")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const item =
                        button.closest(
                            ".angel-faq-item"
                        );

                    if(!item) return;


                    const isOpen =
                        item.classList.contains(
                            "active"
                        );


                    /*
                     * Fechar todos os outros
                     */

                    document
                        .querySelectorAll(
                            ".angel-faq-item"
                        )
                        .forEach(otherItem => {

                            if(
                                otherItem !== item
                            ){

                                otherItem.classList.remove(
                                    "active"
                                );

                                const otherButton =
                                    otherItem.querySelector(
                                        ".angel-faq-question"
                                    );

                                if(otherButton){

                                    otherButton.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    );

                                }

                            }

                        });


                    /*
                     * Alternar actual
                     */

                    item.classList.toggle(
                        "active",
                        !isOpen
                    );


                    button.setAttribute(
                        "aria-expanded",
                        String(!isOpen)
                    );

                }
            );

        });

}


/* ==========================================================
   OPEN WHATSAPP
   ========================================================== */

function openWhats(){

    const phone =
        "244924964666";


    const message =
        encodeURIComponent(
            "Olá! Tenho interesse no Angel Moon e gostaria de saber mais informações sobre os formatos disponíveis."
        );


    const url =
        `https://wa.me/${phone}?text=${message}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
```
