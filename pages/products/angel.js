/* ==========================================================
   AD LIFESTYLE V2
   ANGEL.JS
   Premium Product Page
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

export function loadAngel(){

    applyTheme("angel");

    const app=document.getElementById("app");

    app.innerHTML=`

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

return`

<section class="hero page angel-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="badge">
                Angel Moon Collection
            </span>

            <h1 class="hero-title">
                Conforto,
                Elegância &
                Bem-estar
            </h1>

            <p class="hero-sub">
                Absorvente feminino premium com tecnologia
                Negative Ion Core, desenvolvido para proporcionar
                conforto superior, elevada respirabilidade e
                uma experiência íntima diferenciada.
            </p>

            <div class="hero-actions">

                <button class="btn btn-primary" id="buyAngel">
                    Comprar Agora
                </button>

                <button class="btn btn-glass" id="benefitsBtn">
                    Ver Benefícios
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
   TECHNOLOGY
   ========================================================== */

function technology(){

return`

<section class="section">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Tecnologia
            </span>

            <h2 class="section-title">
                Estrutura Inteligente
                em 7 Camadas
            </h2>

            <p class="lead">
                A estrutura Angel Moon combina diferentes
                camadas concebidas para proporcionar absorção,
                conforto, ventilação e protecção durante a utilização.
            </p>

        </div>

        <div class="timeline mt-6">

            ${layer(
                "1",
                "Película respirável",
                "Permite circulação de ar e contribui para uma utilização mais confortável."
            )}

            ${layer(
                "2",
                "Superfície de contacto suave",
                "Desenvolvida para proporcionar um contacto delicado e confortável com a pele."
            )}

            ${layer(
                "3",
                "Negative Ion Core",
                "Núcleo tecnológico associado à banda de iões negativos, Nano Silver, biomagnetismo e infravermelho longínquo."
            )}

            ${layer(
                "4",
                "SAP Ultra Absorvente",
                "Núcleo concebido para absorver e reter líquidos de forma eficiente."
            )}

            ${layer(
                "5",
                "Camada Antibacteriana",
                "Camada integrada na estrutura do produto, associada a uma experiência de utilização mais higiénica."
            )}

            ${layer(
                "6",
                "Camada de distribuição",
                "Ajuda a distribuir o líquido pela superfície absorvente, favorecendo uma utilização uniforme."
            )}

            ${layer(
                "7",
                "Base Impermeável",
                "Ajuda a proteger contra fugas, mantendo a flexibilidade e o conforto do penso."
            )}

        </div>

    </div>

</section>

`;

}

function layer(number,title,desc){

return`

<div class="timeline-item reveal">

    <div class="timeline-dot">
        ${number}
    </div>

    <div class="timeline-content">

        <h3>${title}</h3>

        <p class="text mt-1">
            ${desc}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   BENEFITS
   ========================================================== */

function benefits(){

return`

<section id="benefits" class="section-sm">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Benefícios & Características
            </span>

            <h2 class="section-title">
                Muito além da absorção
            </h2>

            <p class="lead">
                Conheça as principais características,
                propriedades e alegações associadas ao
                Angel Moon.
            </p>

        </div>


        <!-- ==================================================
             CONFORTO
             ================================================== -->

        <div class="section-center mt-6 reveal">

            <span class="label">
                Conforto diário
            </span>

        </div>

        <div class="grid grid-3 mt-4">

            ${benefit(
                "🌸",
                "Conforto prolongado",
                "Superfície desenvolvida para proporcionar uma sensação suave e confortável durante a utilização."
            )}

            ${benefit(
                "☁️",
                "Contacto suave",
                "A estrutura foi concebida para proporcionar um contacto delicado com a pele."
            )}

            ${benefit(
                "🌿",
                "Respirabilidade",
                "A estrutura respirável favorece a circulação de ar e ajuda a reduzir a sensação de humidade."
            )}

            ${benefit(
                "💧",
                "Gestão da humidade",
                "A tecnologia absorvente foi concebida para ajudar a manter a superfície mais seca durante a utilização."
            )}

            ${benefit(
                "✨",
                "Sensação de frescura",
                "A tecnologia Negative Ion Core está associada a uma experiência de utilização mais fresca e confortável."
            )}

            ${benefit(
                "🌺",
                "Controlo de odores",
                "O produto apresenta uma propriedade desodorizante associada à sua tecnologia."
            )}

        </div>


        <!-- ==================================================
             TECNOLOGIA
             ================================================== -->

        <div class="section-center mt-6 reveal">

            <span class="label">
                Negative Ion Core
            </span>

        </div>

        <div class="grid grid-3 mt-4">

            ${benefit(
                "⚡",
                "Iões negativos",
                "Tecnologia integrada na banda central do produto."
            )}

            ${benefit(
                "🛡️",
                "Nano Silver",
                "Tecnologia incorporada na estrutura Negative Ion Core."
            )}

            ${benefit(
                "🧲",
                "Biomagnetismo",
                "Componente tecnológico indicado na estrutura do produto."
            )}

            ${benefit(
                "☀️",
                "Infravermelho longínquo",
                "Tecnologia indicada como parte integrante da banda tecnológica."
            )}

            ${benefit(
                "🦠",
                "Propriedade antibacteriana",
                "O produto é apresentado com características antibacterianas."
            )}

            ${benefit(
                "🌱",
                "Tecnologia integrada",
                "Combinação de diferentes elementos tecnológicos numa única estrutura."
            )}

        </div>


        <!-- ==================================================
             CARACTERÍSTICAS ESPECÍFICAS
             ================================================== -->

        <div class="section-center mt-6 reveal">

            <span class="label">
                Características do produto
            </span>

        </div>

        <div class="grid grid-3 mt-4">

            ${benefit(
                "💨",
                "Super absorção",
                "Estrutura desenvolvida para elevada capacidade de absorção."
            )}

            ${benefit(
                "🌬️",
                "Ventilação",
                "Favorece a circulação de ar na estrutura do penso."
            )}

            ${benefit(
                "🧼",
                "Higiénico",
                "Concebido para utilização íntima com foco no conforto e higiene."
            )}

            ${benefit(
                "👗",
                "Fino e flexível",
                "Estrutura fina e flexível para facilitar a adaptação ao corpo."
            )}

            ${benefit(
                "🌸",
                "Odorização",
                "A tecnologia é apresentada com efeito desodorizante."
            )}

            ${benefit(
                "💜",
                "Uso confortável",
                "Pensado para utilização prolongada com foco no conforto."
            )}

        </div>


        <!-- ==================================================
             ALEGAÇÕES DO PRODUTO
             ================================================== -->

        <div class="section-center mt-6 reveal">

            <span class="label">
                Informações do fabricante
            </span>

            <h3 class="section-title">
                Outras características comunicadas
            </h3>

            <p class="text mt-2">
                As informações abaixo correspondem às características
                e alegações fornecidas para o produto e devem ser
                interpretadas de acordo com a documentação técnica
                e certificações oficiais disponíveis.
            </p>

        </div>

        <div class="grid grid-3 mt-4">

            ${benefit(
                "🌿",
                "Conforto íntimo",
                "Apresentado como uma solução orientada para conforto e bem-estar durante a utilização."
            )}

            ${benefit(
                "💧",
                "Humidade",
                "Apresentado com capacidade de ajudar na gestão da humidade vaginal."
            )}

            ${benefit(
                "🌸",
                "Desconforto menstrual",
                "O fabricante associa o produto ao conforto durante o período menstrual."
            )}

            ${benefit(
                "🛡️",
                "Infecções",
                "O fabricante apresenta propriedades associadas ao combate de microrganismos; estas alegações devem ser confirmadas através de documentação técnica."
            )}

            ${benefit(
                "⚕️",
                "Bem-estar feminino",
                "O produto é apresentado pelo fabricante com diversas alegações relacionadas com o bem-estar íntimo feminino."
            )}

            ${benefit(
                "👨",
                "Utilização masculina",
                "Segundo a informação fornecida, o produto também é apresentado para determinadas utilizações masculinas."
            )}

        </div>

    </div>

</section>

`;

}

function benefit(icon,title,text){

return`

<div class="card service-card reveal">

    <div class="service-icon">
        ${icon}
    </div>

    <h3>${title}</h3>

    <p class="text mt-2">
        ${text}
    </p>

</div>

`;

}

/* ==========================================================
   COMPOSITION + SPECIFICATIONS + CERTIFICATIONS
   ========================================================== */

function composition(){

return`

<section class="section">

    <div class="container">

        <div class="split">

            <div class="split-content reveal-left">

                <span class="label">
                    Composição
                </span>

                <h2 class="section-title">
                    Materiais seleccionados
                    com rigor
                </h2>

                <p class="text">
                    O Angel Moon combina diferentes materiais
                    e tecnologias numa estrutura desenvolvida
                    para proporcionar conforto, absorção,
                    ventilação e uma experiência de utilização
                    diferenciada.
                </p>

                <div class="icon-list mt-4">

                    ${comp("Algodão / superfície suave")}

                    ${comp("Negative Ion Core")}

                    ${comp("Nano Silver")}

                    ${comp("SAP Ultra Absorvente")}

                    ${comp("Filme Respirável")}

                    ${comp("Camada Antibacteriana")}

                    ${comp("Base Impermeável")}

                </div>

            </div>

            <div class="split-image reveal-right">

                <img
                    src="./assets/products/angel.png"
                    alt="Angel Moon">

            </div>

        </div>


        <!-- ==================================================
             NORMAS E PROPRIEDADES
             ================================================== -->

        <div class="angel-specifications mt-6">

            <div class="section-center reveal">

                <span class="label">
                    Especificações
                </span>

                <h2 class="section-title">
                    Normas e propriedades
                </h2>

                <p class="lead">
                    Principais características apresentadas
                    na documentação e materiais informativos
                    do Angel Moon.
                </p>

            </div>


            <div class="grid grid-3 mt-5">

                ${specification(
                    "21 Academy",
                    "Marca / estrutura de distribuição"
                )}

                ${specification(
                    "Efeito desodorizante",
                    "Tecnologia apresentada com função de controlo de odores."
                )}

                ${specification(
                    "Efeito antibacteriano",
                    "Característica apresentada na documentação do produto."
                )}

                ${specification(
                    "Permeável ao ar",
                    "Estrutura concebida para favorecer a ventilação."
                )}

                ${specification(
                    "Super absorvente",
                    "Estrutura de elevada capacidade de absorção."
                )}

                ${specification(
                    "Confortável",
                    "Desenvolvido para proporcionar uma experiência confortável."
                )}

                ${specification(
                    "Tecnologia SmartCore",
                    "Estrutura tecnológica integrada no produto."
                )}

                ${specification(
                    "Flexível",
                    "Estrutura concebida para acompanhar os movimentos."
                )}

                ${specification(
                    "Fina",
                    "Formato fino para maior discrição durante a utilização."
                )}

            </div>

        </div>


        <!-- ==================================================
             NEGATIVE ION CORE
             ================================================== -->

        <div class="angel-ion-panel mt-6 reveal">

            <div class="angel-ion-content">

                <span class="label">
                    Negative Ion Core
                </span>

                <h2 class="section-title">
                    Tecnologia de iões negativos
                </h2>

                <p class="text mt-2">
                    A banda tecnológica do Angel Moon é apresentada
                    com uma combinação de Nano Silver, iões negativos,
                    biomagnetismo e infravermelho longínquo.
                </p>

                <div class="icon-list mt-4">

                    ${comp("Nano Silver")}

                    ${comp("Iões negativos")}

                    ${comp("Biomagnetismo")}

                    ${comp("Infravermelho longínquo")}

                    ${comp("Efeito desodorizante")}

                    ${comp("Propriedade antibacteriana")}

                </div>

            </div>

        </div>


        <!-- ==================================================
             CERTIFICATIONS
             ================================================== -->

        <div class="angel-certifications mt-6">

            <div class="section-center reveal">

                <span class="label">
                    Certificações
                </span>

                <h2 class="section-title">
                    Certificações e documentação
                </h2>

                <p class="lead">
                    Área reservada para apresentação das
                    certificações, normas e documentos oficiais
                    associados ao Angel Moon.
                </p>

            </div>


            <div class="angel-certifications-grid mt-5">

                ${certification(
                    "Certificação 01",
                    "./assets/products/certifications/angel-cert-01.png",
                    "Certificação oficial do produto"
                )}

                ${certification(
                    "Certificação 02",
                    "./assets/products/certifications/angel-cert-02.png",
                    "Norma ou certificação aplicável"
                )}

                ${certification(
                    "Certificação 03",
                    "./assets/products/certifications/angel-cert-03.png",
                    "Documento técnico / certificação"
                )}

                ${certification(
                    "Certificação 04",
                    "./assets/products/certifications/angel-cert-04.png",
                    "Certificação adicional"
                )}

            </div>

        </div>


        <!-- ==================================================
             PROPRIEDADES DO ANGEL MOON
             ================================================== -->

        <div class="angel-properties mt-6">

            <div class="section-center reveal">

                <span class="label">
                    As 7 propriedades
                </span>

                <h2 class="section-title">
                    A tecnologia Angel Moon
                </h2>

            </div>

            <div class="grid grid-3 mt-5">

                ${property("01","Flexível")}

                ${property("02","Fina")}

                ${property("03","Super absorvente")}

                ${property("04","Ventilação óptima")}

                ${property("05","Higiénico")}

                ${property("06","Saudável")}

                ${property("07","Estilosa")}

            </div>

        </div>

    </div>

</section>

`;

}

function comp(text){

return`

<div class="icon-item">

    <div class="icon-circle">✓</div>

    <div>
        <strong>${text}</strong>
    </div>

</div>

`;

}

function specification(title,text){

return`

<div class="card service-card reveal">

    <div class="service-icon">
        ✓
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

function property(number,text){

return`

<div class="card service-card reveal">

    <div class="service-icon">
        ${number}
    </div>

    <h3>
        ${text}
    </h3>

</div>

`;

}

function certification(title,image,description){

return`

<article class="angel-certification-card reveal">

    <div class="angel-certification-image">

        <img
            src="${image}"
            alt="${title}"
            loading="lazy"
            onerror="this.parentElement.classList.add('missing');">

        <div class="angel-certification-placeholder">

            <span>
                Imagem da certificação
            </span>

        </div>

    </div>

    <div class="angel-certification-info">

        <span class="label">
            Certificação
        </span>

        <h3>
            ${title}
        </h3>

        <p class="text mt-1">
            ${description}
        </p>

    </div>

</article>

`;

}

/* ==========================================================
   VARIANTS
   ========================================================== */

function variants(){

return`

<section class="section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Colecção
            </span>

            <h2 class="section-title">
                Escolha o ideal para si
            </h2>

        </div>

        <div class="grid grid-3 mt-6">

            ${variant("Dia","24 cm","Uso diário","./assets/products/angel1.png")}

            ${variant("Noite","29 cm","Maior cobertura","./assets/products/angel2.png")}

            ${variant("Panty Liner","18 cm","Protecção diária","./assets/products/angel3.png")}

        </div>

    </div>

</section>

`;

}

function variant(name,size,desc,image){

return`

<div class="card product-card reveal">

    <div class="product-image">

        <div class="orb"></div>

        <img
            src="${image}"
            alt="${name}">

    </div>

    <span class="product-category">
        ${size}
    </span>

    <h3>${name}</h3>

    <p class="text mt-1">
        ${desc}
    </p>

</div>

`;

}

/* ==========================================================
   FAQ
   ========================================================== */

function faq(){

return`

<section class="section-sm">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Perguntas Frequentes
            </span>

            <h2 class="section-title">
                Tudo o que precisa de saber
            </h2>

        </div>

        <div class="faq mt-5">

            ${question(
                "O que é o Negative Ion Core?",
                "É o núcleo tecnológico presente no Angel Moon, associado a uma banda que combina elementos como Nano Silver, iões negativos, biomagnetismo e infravermelho longínquo."
            )}

            ${question(
                "Quantas camadas possui o Angel Moon?",
                "A informação fornecida para esta versão do produto indica uma estrutura composta por 7 camadas."
            )}

            ${question(
                "Quais são as principais propriedades do Angel Moon?",
                "Entre as propriedades apresentadas estão flexibilidade, estrutura fina, elevada absorção, ventilação, higiene, conforto e tecnologia SmartCore."
            )}

            ${question(
                "O Angel Moon é respirável?",
                "Sim. A estrutura é apresentada como permeável ao ar, favorecendo a ventilação durante a utilização."
            )}

            ${question(
                "O Angel Moon possui efeito desodorizante?",
                "Segundo a documentação fornecida para o produto, o Angel Moon apresenta uma propriedade desodorizante associada à sua tecnologia."
            )}

            ${question(
                "O produto possui certificações?",
                "Esta página possui uma área específica para apresentar as certificações e documentos oficiais do produto. As imagens devem ser inseridas apenas quando a documentação correspondente estiver disponível."
            )}

            ${question(
                "As propriedades terapêuticas são comprovadas clinicamente?",
                "As alegações relacionadas com efeitos terapêuticos devem ser avaliadas de acordo com a documentação técnica, certificações e evidência clínica oficialmente disponibilizadas pelo fabricante ou pelas entidades competentes."
            )}

        </div>

    </div>

</section>

`;

}

function question(q,a){

return`

<div class="faq-item">

    <button class="faq-question">

        ${q}

        <span>+</span>

    </button>

    <div class="faq-answer">

        <p>${a}</p>

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
                    Angel Moon
                </span>

                <h2 class="section-title mt-3">
                    Descubra uma nova experiência
                    de cuidado íntimo
                </h2>

                <p class="lead">
                    Fale connosco e descubra qual versão do
                    Angel Moon é mais adequada para si.
                </p>

                <div class="hero-actions center mt-4">

                    <button class="btn btn-primary" id="angelWhats">
                        WhatsApp
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

function initialiseAngel(){

    stagger(".service-card");

    document
        .querySelectorAll(".btn")
        .forEach(ripple);

    document
        .getElementById("benefitsBtn")
        ?.addEventListener("click",()=>{

            document
                .getElementById("benefits")
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
        .getElementById("buyAngel")
        ?.addEventListener("click",openWhats);

    document
        .getElementById("angelWhats")
        ?.addEventListener("click",openWhats);

}

function openWhats(){

    const message=
        "Olá AD Lifestyle! Gostaria de adquirir o Angel Moon.";

    window.open(
        `https://wa.me/244000000000?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}
