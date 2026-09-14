/* ==========================================================
   AD LIFESTYLE V2
   CONTACT.JS
   Premium Contact & Concierge Experience
   Final Structured Version
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple, stagger } from "../js/animations.js";

/* ==========================================================
   CONFIGURATION
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";

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
   LOAD CONTACT PAGE
   ========================================================== */

export function loadContact(){

    applyTheme("default");

    const app =
        document.getElementById("app");

    if(!app){

        console.error(
            "AD LIFESTYLE: elemento #app não encontrado."
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
        <section class="contact-hero">

            <div class="contact-hero-background"></div>

            <div class="contact-hero-glow"></div>

            <div class="contact-hero-container">

                <div class="contact-hero-main">

                    <div class="contact-hero-content">

                        <span class="contact-eyebrow">
                            Contacto · AD Lifestyle
                        </span>

                        <h1>
                            Estamos prontos
                            <span>para falar consigo.</span>
                        </h1>

                        <p>
                            Esclareça dúvidas, solicite informações
                            sobre produtos e serviços ou fale connosco
                            directamente através dos nossos canais.
                        </p>

                        <div class="contact-hero-actions">

                            <button
                                type="button"
                                class="contact-button contact-button-gold"
                                data-contact-action="whatsapp">
                                WhatsApp
                                <span>→</span>
                            </button>

                            <button
                                type="button"
                                class="contact-button contact-button-outline"
                                data-contact-action="form">
                                Enviar mensagem
                                <span>→</span>
                            </button>

                        </div>

                        <div class="contact-hero-meta">

                            <div class="contact-meta-item">
                                <span class="contact-status-dot"></span>
                                <strong>Atendimento personalizado</strong>
                            </div>

                            <div class="contact-meta-item">
                                <strong>08h00 — 18h00</strong>
                                <small>Segunda a Sábado</small>
                            </div>

                        </div>

                    </div>

                    <div class="contact-hero-visual-area">

                        <div class="contact-hero-visual">

                            <img
                                src="./assets/images/Contacto AD Lifestyle com Elegância.png"
                                alt="AD Lifestyle — Contacto"
                                loading="eager">

                        </div>

                    </div>

                </div>

            </div>

            <div class="contact-hero-bottom">

                <div class="contact-hero-scroll">
                    <span></span>
                    Explorar contactos
                </div>

            </div>

        </section>
    `;
}

/* ==========================================================
   CONTACT HUB
   ========================================================== */

function renderContactHub(){

    return `

        <section class="contact-hub">

            <div class="contact-container">


                <div class="contact-section-heading contact-section-heading-center">

                    <div>

                        <div class="contact-eyebrow">
                            CONTACT HUB
                        </div>

                        <h2>
                            Escolha como
                            <span>quer falar connosco.</span>
                        </h2>

                    </div>


                    <p>
                        Cada canal foi pensado para tornar
                        o contacto simples, rápido e directo.
                    </p>

                </div>


                <div class="contact-hub-grid">


                    <!-- MAIN -->

                    <article class="contact-hub-main">

                        <div class="contact-hub-top">

                            <span>
                                CANAL PRINCIPAL
                            </span>


                            <span class="contact-online">

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
                                class="contact-button contact-button-gold"
                                data-action="whatsapp"
                            >

                                <span>
                                    Iniciar conversa
                                </span>

                                ${icon("arrow-up-right")}

                            </button>

                        </div>

                    </article>


                    <!-- SECONDARY -->

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
            class="contact-hub-mini"
            data-contact-action="${action}"
            ${
                interactive
                    ? 'tabindex="0" role="button"'
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

                        <span class="contact-hub-mini-arrow">
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

        <section class="contact-direct">

            <div class="contact-container">


                <div class="contact-section-heading contact-section-heading-center">

                    <div>

                        <div class="contact-eyebrow">
                            CANAIS DIRECTOS
                        </div>

                        <h2>
                            Estamos presentes
                            <span>onde a conversa acontece.</span>
                        </h2>

                    </div>

                </div>


                <div class="contact-channel-grid">


                    ${renderChannel(
                        "whatsapp",
                        "WhatsApp",
                        CONTACT_DATA.whatsapp,
                        "Resposta directa e acompanhamento."
                    )}


                    ${renderChannel(
                        "email",
                        "E-mail",
                        CONTACT_DATA.email,
                        "Pedidos, informações e assuntos institucionais."
                    )}


                    ${renderChannel(
                        "location",
                        "Visite-nos",
                        CONTACT_DATA.location,
                        `${CONTACT_DATA.landmark} · ${CONTACT_DATA.city}`
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
    description
){

    const interactive =
        type !== "location";

    return `

        <article
            class="contact-channel-card"
            data-channel="${type}"
            ${
                interactive
                    ? 'role="button" tabindex="0"'
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

        <section class="contact-digital">

            <div class="contact-container">


                <div class="contact-digital-panel">


                    <div class="contact-digital-copy">

                        <div class="contact-eyebrow">
                            AD LIFESTYLE DIGITAL
                        </div>


                        <h2>

                            Continue a conversa
                            <span>fora daqui.</span>

                        </h2>


                        <p>

                            Acompanhe produtos, eventos,
                            conteúdos, apresentações e
                            novidades nos nossos canais digitais.

                        </p>


                        <div class="contact-digital-status">

                            <i></i>

                            <strong>
                                Conteúdo em evolução
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
            class="contact-social-link"
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

        <section class="contact-location">

            <div class="contact-container">


                <div class="contact-location-header">

                    <div>

                        <div class="contact-eyebrow">
                            LOCALIZAÇÃO
                        </div>


                        <h2>

                            Encontre a AD Lifestyle
                            <span>em Luanda.</span>

                        </h2>

                    </div>


                    <span class="contact-location-badge">

                        ${icon("location")}

                        ${CONTACT_DATA.city}

                    </span>

                </div>


                <div class="contact-location-grid">


                    <!-- INFO -->

                    <div class="contact-location-info">


                        <div class="contact-location-heading">

                            <div class="contact-location-symbol">
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


                        <div class="contact-location-divider"></div>


                        <div class="contact-location-items">


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
                            class="contact-button contact-button-gold"
                            data-action="maps"
                        >

                            ${icon("navigation")}

                            <span>
                                Abrir no Google Maps
                            </span>

                            ${icon("arrow-up-right")}

                        </button>


                    </div>


                    <!-- MAP -->

                    <div class="contact-map-card">


                        <div class="contact-map-header">

                            <div>

                                <span>
                                    LOCATION SYSTEM
                                </span>

                                <strong>
                                    AD Lifestyle
                                </strong>

                            </div>


                            <span class="contact-map-live">

                                <i></i>

                                LUANDA

                            </span>

                        </div>


                        <div class="contact-map-frame">

                            <iframe
                                title="Localização da AD Lifestyle em Luanda"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=13.22148%2C-8.84125%2C13.23348%2C-8.82925&layer=mapnik&marker=-8.83525%2C13.22748"
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

            <div class="contact-location-item-icon">

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
            class="contact-message"
            id="contact-form"
        >

            <div class="contact-container">


                <div class="contact-form-shell">


                    <div class="contact-form-intro">


                        <div class="contact-eyebrow">
                            FALE CONNOSCO
                        </div>


                        <h2>

                            Conte-nos
                            <span>o que procura.</span>

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
                                "A sua mensagem segue directamente para o WhatsApp."
                            )}


                            ${formStep(
                                "03",
                                "Conversamos",
                                "A nossa equipa dá continuidade ao contacto."
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

                                    <label for="contactName">
                                        Nome
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

                                    <label for="contactPhone">
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

                                <label for="contactEmail">
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

                                <label for="contactSubject">
                                    Motivo do contacto
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

                                <label for="contactMessage">
                                    Mensagem
                                </label>

                                <textarea
                                    id="contactMessage"
                                    name="message"
                                    rows="5"
                                    placeholder="Escreva a sua mensagem..."
                                    required
                                ></textarea>

                            </div>


                            <div class="contact-form-bottom">


                                <span>

                                    ${icon("shield")}

                                    Ligação directa através
                                    do WhatsApp.

                                </span>


                                <button
                                    type="submit"
                                    class="contact-button contact-button-gold"
                                >

                                    ${icon("whatsapp")}

                                    <span>
                                        Enviar mensagem
                                    </span>

                                </button>


                            </div>


                            <div
                                class="contact-form-feedback"
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

        <section class="contact-faq">

            <div class="contact-container contact-faq-container">


                <div class="contact-section-heading contact-section-heading-center">

                    <div>

                        <div class="contact-eyebrow">
                            PERGUNTAS FREQUENTES
                        </div>

                        <h2>

                            Talvez a resposta
                            <span>esteja aqui.</span>

                        </h2>

                    </div>

                </div>


                <div class="contact-faq-list">

                    ${questions
                        .map(
                            ([question,answer]) =>
                                renderQuestion(
                                    question,
                                    answer
                                )
                        )
                        .join("")}

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

        <div class="contact-faq-item">

            <button
                type="button"
                class="contact-faq-question"
                aria-expanded="false"
            >

                <span>
                    ${question}
                </span>


                <span class="contact-faq-plus">

                    ${icon("plus")}

                </span>

            </button>


            <div class="contact-faq-answer">

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

        <section class="contact-final">

            <div class="contact-container">

                <div class="contact-final-panel">


                    <div class="contact-final-orbit"></div>


                    <div class="contact-final-content">

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
                            class="contact-button contact-button-gold"
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

        whatsapp: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0
                C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.1 1.6 5.8L.1 24
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
                .3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/>
            </svg>
        `,

        email: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="m3 6 9 7 9-7"/>
            </svg>
        `,

        location: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.8 8 12 8 12s8-6.2 8-12a8 8 0 0 0-8-8Z"/>
                <circle cx="12" cy="10" r="2.7"/>
            </svg>
        `,

        navigation: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m21.5 2.5-19 7.2c-.8.3-.8 1.4 0 1.7l7.4 2.7
                2.7 7.4c.3.8 1.4.8 1.7 0l7.2-19c.3-.8-.3-1.4-1-1Zm-8.4
                15.4-1.8-4.9 6.9-6.9-5.1 11.8Z"/>
            </svg>
        `,

        clock: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v5l3 2"/>
            </svg>
        `,

        message: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3v3l4-3h9
                a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"/>
            </svg>
        `,

        shield: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 20 6v5c0 5.2-3.4 8.6-8 10
                -4.6-1.4-8-4.8-8-10V6l8-3Z"/>
                <path d="m9 12 2 2 4-4"/>
            </svg>
        `,

        check: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 4 4L19 6"/>
            </svg>
        `,

        plus: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14"/>
            </svg>
        `,

        "arrow-right": `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12h15m-6-6 6 6-6 6"/>
            </svg>
        `,

        "arrow-up-right": `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9"/>
            </svg>
        `,

        instagram: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1"/>
            </svg>
        `,

        facebook: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v2H6v4h3v5h4v-5h3.3l.7-4H13V9c0-.7.3-1 1-1Z"/>
            </svg>
        `,

        tiktok: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 3h3c.3 1.7 1.3 3 3 3.7V10
                c-1.1-.1-2.1-.5-3-1v6.2A6.8 6.8 0 1 1 12 8.5v3.1
                a3.8 3.8 0 1 0 3 3.7V3Z"/>
            </svg>
        `

    };

    return icons[type] || "";

}


/* ==========================================================
   INITIALISE CONTACT
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
       Ripple
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            ".contact-button"
        )
        .forEach(button => {

            if(typeof ripple === "function"){
                ripple(button);
            }

        });


    /* ------------------------------------------------------
       Stagger
       ------------------------------------------------------ */

    if(typeof stagger === "function"){

        try{

            stagger(
                ".contact-page .contact-channel-card"
            );

            stagger(
                ".contact-page .contact-hub-mini"
            );

        }catch(error){

            console.warn(
                "AD LIFESTYLE: stagger não inicializado.",
                error
            );

        }

    }


    /* ------------------------------------------------------
       WhatsApp
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            '[data-action="whatsapp"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openWhatsApp(
                        "Olá AD Lifestyle! Gostaria de entrar em contacto convosco."
                    );

                }
            );

        });


    /* ------------------------------------------------------
       Form scroll
       ------------------------------------------------------ */

    root
        .querySelector(
            '[data-action="form"]'
        )
        ?.addEventListener(
            "click",
            () => {

                const form =
                    document.getElementById(
                        "contact-form"
                    );

                form?.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }
        );


    /* ------------------------------------------------------
       Maps
       ------------------------------------------------------ */

    root
        .querySelector(
            '[data-action="maps"]'
        )
        ?.addEventListener(
            "click",
            openMaps
        );


    /* ------------------------------------------------------
       Hub mini cards
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            "[data-contact-action]"
        )
        .forEach(card => {

            const action =
                card.dataset.contactAction;

            if(action === "clock"){
                return;
            }


            const execute = () => {

                if(action === "email"){

                    window.location.href =
                        `mailto:${CONTACT_DATA.email}`;

                    return;
                }


                if(action === "maps"){

                    openMaps();

                }

            };


            card.addEventListener(
                "click",
                execute
            );


            card.addEventListener(
                "keydown",
                event => {

                    if(
                        event.key === "Enter" ||
                        event.key === " "
                    ){

                        event.preventDefault();

                        execute();

                    }

                }
            );

        });


    /* ------------------------------------------------------
       Channel cards
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            ".contact-channel-card"
        )
        .forEach(card => {

            const type =
                card.dataset.channel;

            if(type === "location"){
                return;
            }


            const execute = () => {

                if(type === "whatsapp"){

                    openWhatsApp(
                        "Olá AD Lifestyle! Gostaria de entrar em contacto convosco."
                    );

                }


                if(type === "email"){

                    window.location.href =
                        `mailto:${CONTACT_DATA.email}`;

                }

            };


            card.addEventListener(
                "click",
                execute
            );


            card.addEventListener(
                "keydown",
                event => {

                    if(
                        event.key === "Enter" ||
                        event.key === " "
                    ){

                        event.preventDefault();

                        execute();

                    }

                }
            );

        });


    /* ------------------------------------------------------
       Form
       ------------------------------------------------------ */

    initialiseForm();


    /* ------------------------------------------------------
       FAQ
       ------------------------------------------------------ */

    initialiseFAQ();


    /* ------------------------------------------------------
       Reveal
       ------------------------------------------------------ */

    initialiseReveal();

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(message){

    window.open(

        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,

        "_blank",
        "noopener,noreferrer"

    );

}


/* ==========================================================
   GOOGLE MAPS
   ========================================================== */

function openMaps(){

    window.open(

        `https://www.google.com/maps?q=${CONTACT_DATA.latitude},${CONTACT_DATA.longitude}`,

        "_blank",
        "noopener,noreferrer"

    );

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
                    .trim();


            const phone =
                document
                    .getElementById(
                        "contactPhone"
                    )
                    ?.value
                    .trim();


            const email =
                document
                    .getElementById(
                        "contactEmail"
                    )
                    ?.value
                    .trim();


            const subject =
                document
                    .getElementById(
                        "contactSubject"
                    )
                    ?.value
                    .trim();


            const message =
                document
                    .getElementById(
                        "contactMessage"
                    )
                    ?.value
                    .trim();


            const feedback =
                document.getElementById(
                    "contactFormFeedback"
                );


            /* ------------------------------------------------
               VALIDATION
               ------------------------------------------------ */

            if(
                !name ||
                !subject ||
                !message
            ){

                form.classList.add(
                    "contact-form-invalid"
                );


                if(feedback){

                    feedback.textContent =
                        "Preencha o nome, o motivo do contacto e a mensagem.";

                    feedback.classList.add(
                        "contact-feedback-visible",
                        "contact-feedback-error"
                    );

                }


                return;

            }


            form.classList.remove(
                "contact-form-invalid"
            );


            /* ------------------------------------------------
               MESSAGE
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


            if(feedback){

                feedback.textContent =
                    "A preparar a sua mensagem…";

                feedback.classList.add(
                    "contact-feedback-visible"
                );

                feedback.classList.remove(
                    "contact-feedback-error"
                );

            }


            openWhatsApp(
                whatsappMessage
            );


            if(feedback){

                feedback.textContent =
                    "Mensagem preparada. A conversa será aberta no WhatsApp.";

            }


            form.reset();

        }
    );

}


/* ==========================================================
   FAQ
   ========================================================== */

function initialiseFAQ(){

    const items =
        document.querySelectorAll(
            ".contact-faq-item"
        );


    items.forEach(item => {

        const button =
            item.querySelector(
                ".contact-faq-question"
            );


        if(!button){
            return;
        }


        button.addEventListener(
            "click",
            () => {

                const currentlyOpen =
                    item.classList.contains(
                        "active"
                    );


                items.forEach(other => {

                    other.classList.remove(
                        "active"
                    );


                    const otherButton =
                        other.querySelector(
                            ".contact-faq-question"
                        );


                    otherButton?.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });


                if(!currentlyOpen){

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

    });

}


/* ==========================================================
   REVEAL
   ========================================================== */

function initialiseReveal(){

    const elements =
        document.querySelectorAll(
            `
            .contact-page
            .contact-hero-content,

            .contact-page
            .contact-hero-visual-area,

            .contact-page
            .contact-section-heading,

            .contact-page
            .contact-hub-main,

            .contact-page
            .contact-hub-side,

            .contact-page
            .contact-channel-grid,

            .contact-page
            .contact-digital-panel,

            .contact-page
            .contact-location-header,

            .contact-page
            .contact-location-grid,

            .contact-page
            .contact-form-shell,

            .contact-page
            .contact-faq-list,

            .contact-page
            .contact-final-content
            `
        );


    if(
        typeof IntersectionObserver ===
        "undefined"
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
