
/* ==========================================================
   AD LIFESTYLE V2
   CONTACT.JS
   Premium Contact & Concierge Experience
   Master Pattern: EVENTS PAGE
   Editorial / Immersive / Luxury
   ----------------------------------------------------------
   Estrutura:
   - Hero
   - Contact Hub
   - Canais directos
   - Presença digital
   - Localização
   - Formulário WhatsApp
   - FAQ
   - CTA final
   ----------------------------------------------------------
   Assets:
   ./assets/logo/logo.png
   ./assets/images/a21.png
   ./assets/images/Contacto AD Lifestyle com Elegância.png
   ./assets/products/*.png
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple, stagger } from "../js/animations.js";

/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER =
    "244924964666";

const CONTACT_DATA = {

    whatsapp:
        "+244 924 964 666",

    email:
        "adbzzworlddistribuidor@gmail.com",

    location:
        "Prenda – Catambor",

    landmark:
        "Junto ao Arreiou",

    city:
        "Luanda · Angola",

    hours:
        "08h00 – 18h00",

    days:
        "Segunda a Sábado",

    latitude:
        -8.83525,

    longitude:
        13.22748

};

/* ==========================================================
   ASSETS
   ========================================================== */

const CONTACT_ASSETS = {

    logo:
        "./assets/logo/logo.png",

    academy:
        "./assets/images/a21.png",

    hero:
        "./assets/images/Contacto AD Lifestyle com Elegância.png",

    angel:
        "./assets/products/angel.png",

    ezeno:
        "./assets/products/ezeno.png",

    zenbru:
        "./assets/products/zenbru.png"

};

/* ==========================================================
   SOCIALS
   ========================================================== */

const SOCIALS = {

    instagram:
        "https://www.instagram.com/ad.ambassadoracademy21/",

    facebook:
        "https://web.facebook.com/ad.ambassadoracademy21/",

    tiktok:
        "https://www.tiktok.com/@adbdlifestyle",

    whatsapp:
        "https://wa.me/244924964666"

};

/* ==========================================================
   LOAD
   ========================================================== */

export function loadContact(){

    applyTheme("default");

    const app =
        document.getElementById(
            "app"
        );

    if(!app){

        console.error(
            "AD LIFESTYLE Contact: elemento #app não encontrado."
        );

        return;

    }

    app.innerHTML = `

        <main class="contact-page">

            ${renderHero()}

            ${renderContactHub()}

            ${renderDirectChannels()}

            ${renderDigitalPresence()}

            ${renderLocation()}

            ${renderMessageForm()}

            ${renderFAQ()}

            ${renderCTA()}

        </main>

    `;

    initialiseContact();

}

/* ==========================================================
   HERO
   ========================================================== */

function renderHero(){

    return `

<section
    class="
        contact-hero
    "
    id="contact-top"
>

    <div
        class="
            contact-hero-background
        "
        aria-hidden="true"
    ></div>

    <div
        class="
            contact-hero-glow
            glow-one
        "
        aria-hidden="true"
    ></div>

    <div
        class="
            contact-hero-glow
            glow-two
        "
        aria-hidden="true"
    ></div>

    <div
        class="
            contact-container
            contact-hero-container
        "
    >

        <div class="contact-hero-main">

            <div
                class="
                    contact-hero-content
                    contact-reveal
                "
            >

                <span class="contact-eyebrow">
                    Contacto · AD Lifestyle
                </span>

                <span class="contact-hero-kicker">
                    CONEXÃO · ATENÇÃO · EXPERIÊNCIA
                </span>

                <h1>

                    Estamos prontos

                    <span>
                        para falar consigo.
                    </span>

                </h1>

                <p>

                    Esclareça dúvidas, solicite informações
                    sobre produtos e serviços ou fale directamente
                    connosco através dos nossos canais.

                </p>

                <div class="contact-hero-actions">

                    <button
                        type="button"
                        class="
                            contact-button
                            contact-button-gold
                        "
                        data-action="whatsapp"
                    >

                        <span>
                            WhatsApp
                        </span>

                        ${icon("arrow-up-right")}

                    </button>

                    <button
                        type="button"
                        class="
                            contact-button
                            contact-button-outline
                        "
                        data-action="form"
                    >

                        <span>
                            Enviar mensagem
                        </span>

                        ${icon("arrow-right")}

                    </button>

                </div>

                <div
                    class="
                        contact-hero-meta
                        contact-reveal
                    "
                >

                    <div class="contact-meta-item">

                        <span
                            class="
                                contact-status-dot
                            "
                        ></span>

                        <div>

                            <strong>
                                Atendimento personalizado
                            </strong>

                            <small>
                                Contacto directo
                            </small>

                        </div>

                    </div>

                    <div class="contact-meta-item">

                        <strong>
                            ${CONTACT_DATA.hours}
                        </strong>

                        <small>
                            ${CONTACT_DATA.days}
                        </small>

                    </div>

                    <div class="contact-meta-item">

                        <strong>
                            ${CONTACT_DATA.city}
                        </strong>

                        <small>
                            ${CONTACT_DATA.location}
                        </small>

                    </div>

                </div>

            </div>

            <div
                class="
                    contact-hero-visual-area
                    contact-reveal-right
                "
            >

                <div class="contact-hero-visual">

                    <div class="contact-hero-frame"></div>

                    <div
                        class="
                            contact-hero-image-main
                        "
                    >

                        <img
                            src="${CONTACT_ASSETS.hero}"
                            alt="AD Lifestyle — Contacto"
                            loading="eager"
                            data-contact-image
                        >

                    </div>

                    <div
                        class="
                            contact-hero-floating
                            floating-one
                        "
                    >

                        <img
                            src="${CONTACT_ASSETS.angel}"
                            alt="Angel Moon"
                            loading="lazy"
                        >

                    </div>

                    <div
                        class="
                            contact-hero-floating
                            floating-two
                        "
                    >

                        <img
                            src="${CONTACT_ASSETS.ezeno}"
                            alt="EZENO"
                            loading="lazy"
                        >

                    </div>

                    <div
                        class="
                            contact-hero-floating
                            floating-three
                        "
                    >

                        <img
                            src="${CONTACT_ASSETS.academy}"
                            alt="Academy Twenty One"
                            loading="lazy"
                        >

                    </div>

                    <div
                        class="
                            contact-hero-visual-label
                        "
                    >

                        <span>
                            AD LIFESTYLE
                        </span>

                        <strong>
                            CONTACT CONCIERGE
                        </strong>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <div class="contact-hero-bottom">

        <button
            type="button"
            class="contact-hero-scroll"
            data-action="scroll-hub"
        >

            <span></span>

            Explorar contactos

        </button>

    </div>

</section>

`;

}

/* ==========================================================
   CONTACT HUB
   ========================================================== */

function renderContactHub(){

    return `

<section
    class="
        section
        contact-hub
    "
    id="contact-hub"
>

    <div class="contact-container">

        <div
            class="
                contact-section-heading
                contact-section-heading-center
                contact-reveal
            "
        >

            <div>

                <span class="contact-eyebrow">
                    CONTACT HUB
                </span>

                <h2>

                    Escolha como

                    <span>
                        quer falar connosco.
                    </span>

                </h2>

            </div>

            <p>

                Cada canal foi pensado para tornar
                o contacto simples, rápido e directo.

            </p>

        </div>

        <div class="contact-hub-grid">

            <article
                class="
                    contact-hub-main
                    contact-reveal
                "
            >

                <div class="contact-hub-top">

                    <span>
                        CANAL PRINCIPAL
                    </span>

                    <span
                        class="
                            contact-online
                        "
                    >

                        <i></i>

                        ONLINE

                    </span>

                </div>

                <div class="contact-hub-body">

                    <div class="contact-hub-icon">

                        ${icon("whatsapp")}

                    </div>

                    <span class="contact-card-label">
                        Atendimento directo
                    </span>

                    <h3>
                        WhatsApp
                    </h3>

                    <strong>
                        ${CONTACT_DATA.whatsapp}
                    </strong>

                    <p>

                        Para produtos, encomendas,
                        eventos, apresentações,
                        informações e dúvidas.

                    </p>

                    <button
                        type="button"
                        class="
                            contact-button
                            contact-button-gold
                        "
                        data-action="whatsapp"
                    >

                        <span>
                            Iniciar conversa
                        </span>

                        ${icon("arrow-up-right")}

                    </button>

                </div>

            </article>

            <div class="contact-hub-side">

                ${renderHubMini(
                    "email",
                    "E-mail",
                    CONTACT_DATA.email,
                    "Informações e pedidos",
                    "email"
                )}

                ${renderHubMini(
                    "location",
                    "Localização",
                    CONTACT_DATA.location,
                    CONTACT_DATA.landmark,
                    "maps"
                )}

                ${renderHubMini(
                    "clock",
                    "Horário",
                    CONTACT_DATA.hours,
                    CONTACT_DATA.days,
                    "clock"
                )}

            </div>

        </div>

    </div>

</section>

`;

}

function renderHubMini(
    iconType,
    title,
    value,
    description,
    action
){

    const interactive =
        action !== "clock";

    return `

<article
    class="
        contact-hub-mini
        contact-reveal
    "
    ${
        interactive
            ? `
                data-action="${action}"
                tabindex="0"
                role="button"
              `
            : ""
    }
>

    <div class="contact-hub-mini-icon">

        ${icon(iconType)}

    </div>

    <div class="contact-hub-mini-content">

        <span>
            ${description}
        </span>

        <h3>
            ${title}
        </h3>

        <strong>
            ${value}
        </strong>

    </div>

    ${
        interactive
            ? `
                <span
                    class="
                        contact-hub-mini-arrow
                    "
                >
                    ${icon("arrow-up-right")}
                </span>
              `
            : ""
    }

</article>

`;

}

/* ==========================================================
   DIRECT CHANNELS
   ========================================================== */

function renderDirectChannels(){

    return `

<section
    class="
        section
        contact-direct
    "
>

    <div class="contact-container">

        <div
            class="
                contact-section-heading
                contact-section-heading-center
                contact-reveal
            "
        >

            <div>

                <span class="contact-eyebrow">
                    CANAIS DIRECTOS
                </span>

                <h2>

                    Estamos presentes

                    <span>
                        onde a conversa acontece.
                    </span>

                </h2>

            </div>

        </div>

        <div class="contact-channel-grid">

            ${renderChannel(
                "whatsapp",
                "WhatsApp",
                CONTACT_DATA.whatsapp,
                "Resposta directa e acompanhamento.",
                "whatsapp"
            )}

            ${renderChannel(
                "email",
                "E-mail",
                CONTACT_DATA.email,
                "Pedidos, informações e assuntos institucionais.",
                "email"
            )}

            ${renderChannel(
                "location",
                "Visite-nos",
                CONTACT_DATA.location,
                `${CONTACT_DATA.landmark} · ${CONTACT_DATA.city}`,
                "maps"
            )}

        </div>

    </div>

</section>

`;

}

function renderChannel(
    type,
    title,
    value,
    description,
    action
){

    const interactive =
        action !== "maps";

    return `

<article
    class="
        contact-channel-card
        contact-reveal
    "
    ${
        interactive
            ? `
                data-action="${action}"
                role="button"
                tabindex="0"
              `
            : ""
    }
>

    <div class="contact-channel-icon">

        ${icon(type)}

    </div>

    <span class="contact-channel-label">
        CONTACTO
    </span>

    <h3>
        ${title}
    </h3>

    <strong>
        ${value}
    </strong>

    <p>
        ${description}
    </p>

    <span class="contact-channel-arrow">

        ${icon("arrow-right")}

    </span>

</article>

`;

}

/* ==========================================================
   DIGITAL PRESENCE
   ========================================================== */

function renderDigitalPresence(){

    return `

<section
    class="
        section
        contact-digital
    "
>

    <div class="contact-container">

        <div
            class="
                contact-digital-panel
                contact-reveal
            "
        >

            <div class="contact-digital-copy">

                <span class="contact-eyebrow">
                    AD LIFESTYLE DIGITAL
                </span>

                <h2>

                    Continue a conversa

                    <span>
                        fora daqui.
                    </span>

                </h2>

                <p>

                    Acompanhe produtos, eventos,
                    conteúdos, apresentações e
                    novidades nos nossos canais digitais.

                </p>

                <div class="contact-digital-status">

                    <i></i>

                    <strong>
                        Presença digital em evolução
                    </strong>

                </div>

            </div>

            <div class="contact-social-links">

                ${renderSocial(
                    "instagram",
                    "Instagram",
                    "@ad.ambassadoracademy21",
                    SOCIALS.instagram
                )}

                ${renderSocial(
                    "facebook",
                    "Facebook",
                    "AD Lifestyle",
                    SOCIALS.facebook
                )}

                ${renderSocial(
                    "tiktok",
                    "TikTok",
                    "@adbdlifestyle",
                    SOCIALS.tiktok
                )}

                ${renderSocial(
                    "whatsapp",
                    "WhatsApp",
                    CONTACT_DATA.whatsapp,
                    SOCIALS.whatsapp
                )}

            </div>

        </div>

    </div>

</section>

`;

}

function renderSocial(
    iconType,
    title,
    handle,
    url
){

    return `

<a
    class="
        contact-social-link
        contact-reveal
    "
    href="${url}"
    target="_blank"
    rel="noopener noreferrer"
>

    <span class="contact-social-icon">

        ${icon(iconType)}

    </span>

    <span class="contact-social-info">

        <strong>
            ${title}
        </strong>

        <small>
            ${handle}
        </small>

    </span>

    <span class="contact-social-arrow">

        ${icon("arrow-up-right")}

    </span>

</a>

`;

}

/* ==========================================================
   LOCATION
   ========================================================== */

function renderLocation(){

    return `

<section
    class="
        section
        contact-location
    "
    id="contact-location"
>

    <div class="contact-container">

        <div
            class="
                contact-location-header
                contact-reveal
            "
        >

            <div>

                <span class="contact-eyebrow">
                    LOCALIZAÇÃO
                </span>

                <h2>

                    Encontre a AD Lifestyle

                    <span>
                        em Luanda.
                    </span>

                </h2>

            </div>

            <span
                class="
                    contact-location-badge
                "
            >

                ${icon("location")}

                ${CONTACT_DATA.city}

            </span>

        </div>

        <div class="contact-location-grid">

            <div
                class="
                    contact-location-info
                    contact-reveal-left
                "
            >

                <div
                    class="
                        contact-location-heading
                    "
                >

                    <div
                        class="
                            contact-location-symbol
                        "
                    >
                        ${icon("location")}
                    </div>

                    <div>

                        <span>
                            ESTAMOS AQUI
                        </span>

                        <h3>
                            ${CONTACT_DATA.location}
                        </h3>

                    </div>

                </div>

                <div
                    class="
                        contact-location-divider
                    "
                ></div>

                <div
                    class="
                        contact-location-items
                    "
                >

                    ${renderLocationItem(
                        "location",
                        "Morada",
                        CONTACT_DATA.location,
                        CONTACT_DATA.landmark
                    )}

                    ${renderLocationItem(
                        "navigation",
                        "Coordenadas",
                        "8°50'06.90\"S",
                        "13°13'38.93\"E"
                    )}

                    ${renderLocationItem(
                        "clock",
                        "Atendimento",
                        CONTACT_DATA.days,
                        CONTACT_DATA.hours
                    )}

                </div>

                <button
                    type="button"
                    class="
                        contact-button
                        contact-button-gold
                    "
                    data-action="maps"
                >

                    ${icon("navigation")}

                    <span>
                        Abrir no Google Maps
                    </span>

                    ${icon("arrow-up-right")}

                </button>

            </div>

            <div
                class="
                    contact-map-card
                    contact-reveal-right
                "
            >

                <div class="contact-map-header">

                    <div>

                        <span>
                            LOCATION SYSTEM
                        </span>

                        <strong>
                            AD Lifestyle
                        </strong>

                    </div>

                    <span
                        class="
                            contact-map-live
                        "
                    >

                        <i></i>

                        LUANDA

                    </span>

                </div>

                <div class="contact-map-frame">

                    <iframe
                        title="
                            Localização da AD Lifestyle em Luanda
                        "
                        src="
                            https://www.openstreetmap.org/export/embed.html?bbox=13.22148%2C-8.84125%2C13.23348%2C-8.82925&layer=mapnik&marker=-8.83525%2C13.22748
                        "
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <div class="contact-map-marker">

                        ${icon("location")}

                    </div>

                </div>

                <div class="contact-map-footer">

                    <div>

                        ${icon("location")}

                        <span>
                            ${CONTACT_DATA.location}
                        </span>

                    </div>

                    <div>

                        ${icon("check")}

                        <span>
                            ${CONTACT_DATA.landmark}
                        </span>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}

function renderLocationItem(
    iconType,
    title,
    primary,
    secondary
){

    return `

<div class="contact-location-item">

    <div
        class="
            contact-location-item-icon
        "
    >

        ${icon(iconType)}

    </div>

    <div>

        <span>
            ${title}
        </span>

        <strong>
            ${primary}
        </strong>

        <p>
            ${secondary}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   MESSAGE FORM
   ========================================================== */

function renderMessageForm(){

    return `

<section
    class="
        section
        contact-message
    "
    id="contact-form"
>

    <div class="contact-container">

        <div
            class="
                contact-form-shell
                contact-reveal
            "
        >

            <div
                class="
                    contact-form-intro
                "
            >

                <span class="contact-eyebrow">
                    FALE CONNOSCO
                </span>

                <h2>

                    Conte-nos

                    <span>
                        o que procura.
                    </span>

                </h2>

                <p>

                    Quanto melhor compreendermos
                    o seu pedido, melhor poderemos
                    encaminhá-lo.

                </p>

                <div class="contact-form-process">

                    ${formStep(
                        "01",
                        "Escreva",
                        "Descreva brevemente o que procura."
                    )}

                    ${formStep(
                        "02",
                        "Enviamos",
                        "A mensagem será preparada directamente para o WhatsApp."
                    )}

                    ${formStep(
                        "03",
                        "Conversamos",
                        "Daremos continuidade ao contacto pelo canal directo."
                    )}

                </div>

            </div>

            <div class="contact-form-panel">

                <div class="contact-form-panel-top">

                    <span>
                        NOVA MENSAGEM
                    </span>

                    <span>
                        AD LIFESTYLE
                    </span>

                </div>

                <form
                    id="contactForm"
                    class="contact-form"
                    novalidate
                >

                    <div class="contact-form-row">

                        <div class="contact-field">

                            <label
                                for="contactName"
                            >
                                Nome *
                            </label>

                            <input
                                type="text"
                                id="contactName"
                                name="name"
                                placeholder="O seu nome"
                                autocomplete="name"
                                required
                            >

                        </div>

                        <div class="contact-field">

                            <label
                                for="contactPhone"
                            >
                                Telefone
                            </label>

                            <input
                                type="tel"
                                id="contactPhone"
                                name="phone"
                                placeholder="+244 9XX XXX XXX"
                                autocomplete="tel"
                            >

                        </div>

                    </div>

                    <div class="contact-field">

                        <label
                            for="contactEmail"
                        >
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="contactEmail"
                            name="email"
                            placeholder="exemplo@email.com"
                            autocomplete="email"
                        >

                    </div>

                    <div class="contact-field">

                        <label
                            for="contactSubject"
                        >
                            Motivo do contacto *
                        </label>

                        <select
                            id="contactSubject"
                            name="subject"
                            required
                        >

                            <option value="">
                                Seleccione uma opção
                            </option>

                            <option value="Produtos BZZWORLD">
                                Produtos BZZWORLD
                            </option>

                            <option value="Eventos">
                                Eventos e apresentações
                            </option>

                            <option value="Academy Twenty One">
                                Academy Twenty One
                            </option>

                            <option value="Oportunidade">
                                Oportunidade / parceria
                            </option>

                            <option value="Distribuição">
                                Distribuição / entregas
                            </option>

                            <option value="Outro">
                                Outro assunto
                            </option>

                        </select>

                    </div>

                    <div class="contact-field">

                        <label
                            for="contactMessage"
                        >
                            Mensagem *
                        </label>

                        <textarea
                            id="contactMessage"
                            name="message"
                            rows="5"
                            placeholder="
                                Escreva a sua mensagem...
                            "
                            required
                        ></textarea>

                    </div>

                    <div
                        class="
                            contact-form-bottom
                        "
                    >

                        <span>

                            ${icon("shield")}

                            Ligação directa através
                            do WhatsApp.

                        </span>

                        <button
                            type="submit"
                            class="
                                contact-button
                                contact-button-gold
                            "
                        >

                            ${icon("whatsapp")}

                            <span>
                                Enviar mensagem
                            </span>

                        </button>

                    </div>

                    <div
                        class="
                            contact-form-feedback
                        "
                        id="contactFormFeedback"
                        aria-live="polite"
                    ></div>

                </form>

            </div>

        </div>

    </div>

</section>

`;

}

function formStep(
    number,
    title,
    text
){

    return `

<div class="contact-form-step">

    <span>
        ${number}
    </span>

    <div>

        <strong>
            ${title}
        </strong>

        <p>
            ${text}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   FAQ
   ========================================================== */

function renderFAQ(){

    const questions = [

        [
            "Como posso comprar um produto?",
            "Entre em contacto através do WhatsApp para confirmar disponibilidade, condições de aquisição e entrega."
        ],

        [
            "A AD Lifestyle faz entregas?",
            "Trabalhamos com uma visão de distribuição e conexão internacional. As condições de entrega dependem do destino, produto, disponibilidade e logística aplicável."
        ],

        [
            "Como posso participar num evento?",
            "Pode acompanhar a página de Eventos ou falar directamente connosco para conhecer as próximas apresentações, datas, local e condições de participação."
        ],

        [
            "Como posso conhecer a Academy Twenty One?",
            "Pode entrar em contacto connosco para conhecer melhor a dimensão de educação, desenvolvimento pessoal, liderança, comunicação e empreendedorismo."
        ],

        [
            "Posso falar convosco sobre uma parceria?",
            "Sim. Contacte-nos através do WhatsApp ou do formulário e descreva brevemente a sua proposta."
        ]

    ];

    return `

<section
    class="
        section
        contact-faq
    "
    id="contact-faq"
>

    <div
        class="
            contact-container
            contact-faq-container
        "
    >

        <div
            class="
                contact-section-heading
                contact-section-heading-center
                contact-reveal
            "
        >

            <div>

                <span class="contact-eyebrow">
                    PERGUNTAS FREQUENTES
                </span>

                <h2>

                    Talvez a resposta

                    <span>
                        esteja aqui.
                    </span>

                </h2>

            </div>

            <p>

                Algumas respostas para compreender
                melhor a experiência AD Lifestyle.

            </p>

        </div>

        <div class="contact-faq-list">

            ${
                questions
                    .map(
                        (
                            [
                                questionText,
                                answer
                            ]
                        ) =>
                            renderQuestion(
                                questionText,
                                answer
                            )
                    )
                    .join("")
            }

        </div>

    </div>

</section>

`;

}

function renderQuestion(
    question,
    answer
){

    return `

<div
    class="
        contact-faq-item
        contact-reveal
    "
>

    <button
        type="button"
        class="
            contact-faq-question
        "
        aria-expanded="false"
    >

        <span>
            ${question}
        </span>

        <span
            class="
                contact-faq-plus
            "
        >

            ${icon("plus")}

        </span>

    </button>

    <div
        class="
            contact-faq-answer
        "
    >

        <p>
            ${answer}
        </p>

    </div>

</div>

`;

}

/* ==========================================================
   FINAL CTA
   ========================================================== */

function renderCTA(){

    return `

<section
    class="
        section
        contact-final
    "
    id="contact-final"
>

    <div class="contact-container">

        <div
            class="
                contact-final-panel
                contact-reveal
            "
        >

            <div
                class="
                    contact-final-orbit
                    orbit-one
                "
            ></div>

            <div
                class="
                    contact-final-orbit
                    orbit-two
                "
            ></div>

            <div class="contact-final-content">

                <div
                    class="
                        contact-final-logo
                    "
                >

                    <img
                        src="${CONTACT_ASSETS.logo}"
                        alt="AD Lifestyle"
                        loading="lazy"
                    >

                </div>

                <span>
                    AD LIFESTYLE
                </span>

                <h2>

                    Uma pergunta pode

                    <strong>
                        abrir uma nova porta.
                    </strong>

                </h2>

                <p>

                    Estamos prontos para ouvir,
                    esclarecer e criar a próxima
                    ponte consigo.

                </p>

                <button
                    type="button"
                    class="
                        contact-button
                        contact-button-gold
                    "
                    data-action="whatsapp"
                >

                    ${icon("whatsapp")}

                    <span>
                        Iniciar conversa
                    </span>

                </button>

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   ICON SYSTEM
   ========================================================== */

function icon(type){

    const icons = {

        whatsapp:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="
                        M20.5 3.5A11.8 11.8 0 0 0 12.1 0
                        C5.5 0 .2 5.3.2 11.9
                        c0 2.1.6 4.1 1.6 5.8L.1 24
                        l6.5-1.7a11.9 11.9 0 0 0 5.5 1.4h.1
                        c6.6 0 11.9-5.3 11.9-11.9
                        0-3.2-1.3-6.1-3.6-8.3ZM12.2 21.6h-.1
                        c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.9 1
                        1-3.8-.2-.3a9.7 9.7 0 1 1 8.3 4.6Zm5.3-7.3
                        c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2
                        -.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1
                        -.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1
                        -.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.4.3-.6
                        .1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3
                        -.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4
                        -.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2
                        c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6
                        .7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4
                        .3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z
                    "
                />
            </svg>
        `,

        email:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="3"
                ></rect>
                <path
                    d="m3 6 9 7 9-7"
                ></path>
            </svg>
        `,

        location:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="
                        M12 2a8 8 0 0 0-8 8
                        c0 5.8 8 12 8 12s8-6.2 8-12a8 8 0 0 0-8-8Z
                    "
                ></path>
                <circle
                    cx="12"
                    cy="10"
                    r="2.7"
                ></circle>
            </svg>
        `,

        navigation:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="
                        m21.5 2.5-19 7.2
                        c-.8.3-.8 1.4 0 1.7l7.4 2.7
                        2.7 7.4c.3.8 1.4.8 1.7 0l7.2-19
                        c.3-.8-.3-1.4-1-1Zm-8.4
                        15.4-1.8-4.9 6.9-6.9-5.1 11.8Z
                    "
                ></path>
            </svg>
        `,

        clock:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="9"
                ></circle>
                <path
                    d="M12 7v5l3 2"
                ></path>
            </svg>
        `,

        shield:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="
                        M12 3 20 6v5c0 5.2-3.4 8.6-8 10
                        -4.6-1.4-8-4.8-8-10V6l8-3Z
                    "
                ></path>
                <path
                    d="m9 12 2 2 4-4"
                ></path>
            </svg>
        `,

        check:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="m5 12 4 4L19 6"
                ></path>
            </svg>
        `,

        plus:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M12 5v14M5 12h14"
                ></path>
            </svg>
        `,

        "arrow-right":`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M4 12h15m-6-6 6 6-6 6"
                ></path>
            </svg>
        `,

        "arrow-up-right":`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="M7 17 17 7M8 7h9v9"
                ></path>
            </svg>
        `,

        instagram:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                ></rect>
                <circle
                    cx="12"
                    cy="12"
                    r="4"
                ></circle>
                <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                ></circle>
            </svg>
        `,

        facebook:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="
                        M14 8h3V4h-3
                        c-3.3 0-5 1.7-5 5v2H6v4h3v5h4v-5h3.3l.7-4H13V9c0-.7.3-1 1-1Z
                    "
                ></path>
            </svg>
        `,

        tiktok:`
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    d="
                        M15 3h3c.3 1.7 1.3 3 3 3.7V10
                        c-1.1-.1-2.1-.5-3-1v6.2A6.8 6.8 0 1 1 12 8.5v3.1
                        a3.8 3.8 0 1 0 3 3.7V3Z
                    "
                ></path>
            </svg>
        `

    };

    return icons[type] || "";

}

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseContact(){

    const root =
        document.querySelector(
            ".contact-page"
        );

    if(!root){

        return;

    }

    /* ------------------------------------------------------
       RIPPLE
       ------------------------------------------------------ */

    try{

        if(
            typeof ripple ===
            "function"
        ){

            root
                .querySelectorAll(
                    `
                        .contact-button,
                        .contact-channel-card,
                        .contact-hub-mini,
                        .contact-social-link,
                        .contact-faq-question
                    `
                )
                .forEach(
                    element =>
                        ripple(element)
                );

        }

    }catch(error){

        console.warn(
            "AD LIFESTYLE Contact: ripple não inicializado.",
            error
        );

    }

    /* ------------------------------------------------------
       STAGGER
       ------------------------------------------------------ */

    try{

        if(
            typeof stagger ===
            "function"
        ){

            stagger(
                root.querySelectorAll(
                    `
                        .contact-channel-card,
                        .contact-hub-mini,
                        .contact-social-link
                    `
                )
            );

        }

    }catch(error){

        console.warn(
            "AD LIFESTYLE Contact: stagger não inicializado.",
            error
        );

    }

    /* ------------------------------------------------------
       IMAGE FALLBACK
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            "img"
        )
        .forEach(
            image => {

                image.addEventListener(
                    "error",
                    ()=>{
                        
                        image.classList.add(
                            "contact-image-error"
                        );

                        image.setAttribute(
                            "aria-hidden",
                            "true"
                        );

                    },
                    {
                        once:true
                    }
                );

            }
        );

    /* ------------------------------------------------------
       ACTIONS
       ------------------------------------------------------ */

    initialiseActions(
        root
    );

    /* ------------------------------------------------------
       FORM
       ------------------------------------------------------ */

    initialiseForm();

    /* ------------------------------------------------------
       FAQ
       ------------------------------------------------------ */

    initialiseFAQ(
        root
    );

    /* ------------------------------------------------------
       REVEAL
       ------------------------------------------------------ */

    initialiseReveal(
        root
    );

}

/* ==========================================================
   ACTIONS
   ========================================================== */

function initialiseActions(
    root
){

    root
        .querySelectorAll(
            '[data-action]'
        )
        .forEach(
            element => {

                const action =
                    element.dataset.action;

                const execute =
                    ()=>{

                        switch(action){

                            case "whatsapp":

                                openWhatsApp(
                                    "Olá AD Lifestyle! Gostaria de entrar em contacto convosco."
                                );

                                break;

                            case "email":

                                openEmail();

                                break;

                            case "maps":

                                openMaps();

                                break;

                            case "form":

                                scrollToForm();

                                break;

                            case "scroll-hub":

                                scrollToElement(
                                    "contact-hub"
                                );

                                break;

                            default:

                                break;

                        }

                    };

                element.addEventListener(
                    "click",
                    execute
                );

                if(
                    element.matches(
                        '[role="button"]'
                    )
                ){

                    element.addEventListener(
                        "keydown",
                        event => {

                            if(
                                event.key ===
                                    "Enter"
                                ||
                                event.key ===
                                    " "
                            ){

                                event.preventDefault();

                                execute();

                            }

                        }
                    );

                }

            }
        );

}

/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(
    message
){

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}

/* ==========================================================
   EMAIL
   ========================================================== */

function openEmail(){

    window.location.href =
        `mailto:${CONTACT_DATA.email}`;

}

/* ==========================================================
   MAPS
   ========================================================== */

function openMaps(){

    window.open(
        `https://www.google.com/maps?q=${CONTACT_DATA.latitude},${CONTACT_DATA.longitude}`,
        "_blank",
        "noopener,noreferrer"
    );

}

/* ==========================================================
   SCROLL
   ========================================================== */

function scrollToForm(){

    scrollToElement(
        "contact-form"
    );

}

function scrollToElement(
    id
){

    document
        .getElementById(
            id
        )
        ?.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

}

/* ==========================================================
   FORM
   ========================================================== */

function initialiseForm(){

    const form =
        document.getElementById(
            "contactForm"
        );

    if(!form){

        return;

    }

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                document
                    .getElementById(
                        "contactName"
                    )
                    ?.value
                    .trim()
                || "";

            const phone =
                document
                    .getElementById(
                        "contactPhone"
                    )
                    ?.value
                    .trim()
                || "";

            const email =
                document
                    .getElementById(
                        "contactEmail"
                    )
                    ?.value
                    .trim()
                || "";

            const subject =
                document
                    .getElementById(
                        "contactSubject"
                    )
                    ?.value
                    .trim()
                || "";

            const message =
                document
                    .getElementById(
                        "contactMessage"
                    )
                    ?.value
                    .trim()
                || "";

            const feedback =
                document.getElementById(
                    "contactFormFeedback"
                );

            const emailValid =
                !email ||
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                    email
                );

            /* ------------------------------------------------
               VALIDATION
               ------------------------------------------------ */

            if(
                !name ||
                !subject ||
                !message
            ){

                showFormFeedback(
                    feedback,
                    "Preencha o nome, o motivo do contacto e a mensagem.",
                    "error"
                );

                form.classList.add(
                    "contact-form-invalid"
                );

                return;

            }

            if(!emailValid){

                showFormFeedback(
                    feedback,
                    "Introduza um endereço de e-mail válido ou deixe o campo vazio.",
                    "error"
                );

                form.classList.add(
                    "contact-form-invalid"
                );

                return;

            }

            form.classList.remove(
                "contact-form-invalid"
            );

            /* ------------------------------------------------
               BUILD MESSAGE
               ------------------------------------------------ */

            const whatsappMessage =

`Olá AD Lifestyle!

Nome: ${name}
Telefone: ${phone || "Não informado"}
E-mail: ${email || "Não informado"}

Motivo:
${subject}

Mensagem:
${message}`;

            showFormFeedback(
                feedback,
                "A preparar a sua mensagem…",
                "info"
            );

            openWhatsApp(
                whatsappMessage
            );

            showFormFeedback(
                feedback,
                "Mensagem preparada. A conversa foi encaminhada para o WhatsApp.",
                "success"
            );

            form.reset();

        }
    );

}

function showFormFeedback(
    element,
    text,
    type
){

    if(!element){

        return;

    }

    element.textContent =
        text;

    element.classList.add(
        "contact-feedback-visible"
    );

    element.classList.remove(
        "contact-feedback-error",
        "contact-feedback-success",
        "contact-feedback-info"
    );

    element.classList.add(
        `contact-feedback-${type}`
    );

}

/* ==========================================================
   FAQ
   ========================================================== */

function initialiseFAQ(
    root
){

    const items =
        [
            ...root.querySelectorAll(
                ".contact-faq-item"
            )
        ];

    items.forEach(
        item => {

            const button =
                item.querySelector(
                    ".contact-faq-question"
                );

            if(!button){

                return;

            }

            button.addEventListener(
                "click",
                ()=>{

                    const open =
                        item.classList.contains(
                            "active"
                        );

                    items.forEach(
                        other => {

                            other.classList.remove(
                                "active"
                            );

                            other
                                .querySelector(
                                    ".contact-faq-question"
                                )
                                ?.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                        }
                    );

                    if(!open){

                        item.classList.add(
                            "active"
                        );

                        button.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                    }

                }
            );

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
                .contact-reveal,
                .contact-reveal-left,
                .contact-reveal-right
            `
        );

    if(
        !(
            "IntersectionObserver"
            in window
        )
    ){

        elements.forEach(
            element => {

                element.classList.add(
                    "contact-visible"
                );

            }
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
                            "contact-visible"
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
        element =>
            observer.observe(
                element
            )
    );

}

/* ==========================================================
   FIM
   ========================================================== */
```
