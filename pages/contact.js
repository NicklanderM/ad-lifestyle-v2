/* ==========================================================
   AD LIFESTYLE V2
   CONTACT.JS
   Premium Contact & Concierge Experience
   ========================================================== */

import { applyTheme } from "../js/theme.js";
import { navigate } from "../js/router.js";
import { ripple, stagger } from "../js/animations.js";

/* ==========================================================
   CONFIGURAÇÃO
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
   LOAD
   ========================================================== */

export function loadContact(){

    applyTheme("default");

    const app =
        document.getElementById("app");


    if(!app) return;


    app.innerHTML = `

        <div class="contact-page">

            ${hero()}

            ${contactHub()}

            ${directChannels()}

            ${digitalPresence()}

            ${locationSection()}

            ${messageForm()}

            ${faq()}

            ${cta()}

        </div>

    `;


    initialiseContact();

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero contact-hero">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">

        <div class="hero-content reveal">

            <span class="label">
                AD Lifestyle · Contact
            </span>


            <span class="contact-eyebrow">
                DIRECT CONNECTION · LUANDA · ANGOLA
            </span>


            <h1 class="hero-title">

                A próxima conversa
                <span>começa aqui.</span>

            </h1>


            <p class="hero-sub">

                Uma dúvida, um produto, um evento, uma apresentação
                ou uma nova possibilidade. Estamos disponíveis para
                ouvir, explicar e encaminhar cada pedido.

            </p>


            <div class="hero-actions">

                <button
                    type="button"
                    class="btn btn-primary"
                    data-action="whatsapp">

                    ${icon("whatsapp")}

                    Falar no WhatsApp

                </button>


                <button
                    type="button"
                    class="btn btn-glass"
                    data-action="form">

                    ${icon("message")}

                    Enviar mensagem

                </button>

            </div>


            <div class="contact-hero-meta">

                <div>

                    <span class="contact-status-dot"></span>

                    <div>

                        <strong>
                            Atendimento directo
                        </strong>

                        <small>
                            WhatsApp disponível
                        </small>

                    </div>

                </div>


                <div>

                    ${icon("clock")}

                    <div>

                        <strong>
                            ${CONTACT_DATA.hours}
                        </strong>

                        <small>
                            ${CONTACT_DATA.days}
                        </small>

                    </div>

                </div>

            </div>

        </div>


        <div class="hero-visual reveal-right">

            <div class="contact-hero-visual">

                <div class="contact-orbit orbit-a"></div>

                <div class="contact-orbit orbit-b"></div>

                <div class="contact-orbit orbit-c"></div>


                <div class="contact-hero-core">

                    <span class="contact-core-mark">
                        AD
                    </span>

                    <span class="contact-core-name">
                        LIFESTYLE
                    </span>

                    <small>
                        Creating Bridges
                    </small>

                </div>


                <div class="contact-floating-card card-a">

                    ${icon("whatsapp")}

                    <span>
                        WhatsApp
                    </span>

                </div>


                <div class="contact-floating-card card-b">

                    ${icon("location")}

                    <span>
                        Luanda
                    </span>

                </div>


                <div class="contact-floating-card card-c">

                    ${icon("message")}

                    <span>
                        Fale connosco
                    </span>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   CONTACT HUB
   ========================================================== */

function contactHub(){

return `

<section class="section contact-hub">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Contact Hub
            </span>


            <h2 class="section-title">

                Escolha como
                <span>quer falar connosco.</span>

            </h2>


            <p class="lead">

                Cada canal foi pensado para tornar o contacto
                simples, rápido e directo.

            </p>

        </div>


        <div class="contact-hub-grid mt-6">


            <article
                class="contact-hub-main reveal">

                <div class="contact-hub-main-top">

                    <span>
                        CANAL PRINCIPAL
                    </span>

                    <div class="contact-live">
                        <span></span>
                        ONLINE
                    </div>

                </div>


                <div class="contact-hub-main-body">

                    <div class="contact-hub-icon">
                        ${icon("whatsapp")}
                    </div>


                    <span class="contact-card-label">
                        Atendimento directo
                    </span>


                    <h3>
                        WhatsApp
                    </h3>


                    <strong class="contact-hub-number">
                        ${CONTACT_DATA.whatsapp}
                    </strong>


                    <p>
                        Para produtos, encomendas, eventos,
                        apresentações, informações e dúvidas.
                    </p>


                    <button
                        type="button"
                        class="btn btn-primary"
                        data-action="whatsapp">

                        Iniciar conversa
                        ${icon("arrow-up-right")}

                    </button>

                </div>

            </article>


            <div class="contact-hub-side">

                ${hubMini(
                    "email",
                    "E-mail",
                    CONTACT_DATA.email,
                    "Informações e pedidos",
                    "email"
                )}


                ${hubMini(
                    "location",
                    "Localização",
                    CONTACT_DATA.location,
                    CONTACT_DATA.landmark,
                    "maps"
                )}


                ${hubMini(
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


function hubMini(
    iconType,
    title,
    value,
    description,
    action
){

return `

<article
    class="contact-hub-mini reveal"
    data-contact-action="${action}"
    ${action !== "clock" ? 'tabindex="0"' : ""}>

    <div class="contact-hub-mini-icon">

        ${icon(iconType)}

    </div>


    <div>

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
        action !== "clock"

            ? `

            <span class="contact-hub-arrow">

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

function directChannels(){

return `

<section class="section-sm contact-direct">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Canais directos
            </span>


            <h2 class="section-title">
                Estamos presentes
                <span>onde a conversa acontece.</span>
            </h2>

        </div>


        <div class="grid grid-3 mt-6">

            ${channelCard(
                "whatsapp",
                "WhatsApp",
                CONTACT_DATA.whatsapp,
                "Resposta directa e acompanhamento."
            )}


            ${channelCard(
                "email",
                "E-mail",
                CONTACT_DATA.email,
                "Pedidos, informações e assuntos institucionais."
            )}


            ${channelCard(
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


function channelCard(
    iconType,
    title,
    value,
    description
){

return `

<article
    class="contact-channel-card reveal"
    data-channel="${iconType}"
    ${iconType !== "location"
        ? 'role="button" tabindex="0"'
        : ""}>

    <div class="contact-channel-icon">

        ${icon(iconType)}

    </div>


    <span>
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


    <div class="contact-channel-arrow">

        ${icon("arrow-right")}

    </div>

</article>

`;

}


/* ==========================================================
   DIGITAL PRESENCE
   ========================================================== */

function digitalPresence(){

return `

<section class="section contact-digital">

    <div class="container">

        <div class="contact-digital-panel">

            <div class="contact-digital-copy reveal-left">

                <span class="label">
                    AD Lifestyle Digital
                </span>


                <h2 class="section-title">

                    Continue a conversa
                    <span>fora daqui.</span>

                </h2>


                <p class="text-lg">

                    Acompanhe produtos, eventos, conteúdos,
                    apresentações e novidades nos nossos canais digitais.

                </p>


                <div class="contact-digital-status">

                    <span></span>

                    <strong>
                        Conteúdo em evolução
                    </strong>

                </div>

            </div>


            <div class="contact-social-links reveal-right">

                ${socialLink(
                    "instagram",
                    "Instagram",
                    "@ad.ambassadoracademy21",
                    SOCIALS.instagram
                )}


                ${socialLink(
                    "facebook",
                    "Facebook",
                    "AD Lifestyle",
                    SOCIALS.facebook
                )}


                ${socialLink(
                    "tiktok",
                    "TikTok",
                    "@adbdlifestyle",
                    SOCIALS.tiktok
                )}


                ${socialLink(
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


function socialLink(
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
    rel="noopener noreferrer">

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

function locationSection(){

return `

<section class="section contact-location">

    <div class="container">

        <div class="contact-location-header reveal">

            <div>

                <span class="label">
                    Localização
                </span>


                <h2 class="section-title">

                    Encontre a AD Lifestyle
                    <span>em Luanda.</span>

                </h2>

            </div>


            <span class="contact-location-badge">

                ${icon("location")}

                ${CONTACT_DATA.city}

            </span>

        </div>


        <div class="contact-location-grid mt-6">


            <!-- INFORMATION -->

            <div class="contact-location-info reveal-left">

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

                    ${locationItem(
                        "location",
                        "Morada",
                        CONTACT_DATA.location,
                        CONTACT_DATA.landmark
                    )}


                    ${locationItem(
                        "navigation",
                        "Coordenadas",
                        "8°50'06.90\"S",
                        "13°13'38.93\"E"
                    )}


                    ${locationItem(
                        "clock",
                        "Atendimento",
                        CONTACT_DATA.days,
                        CONTACT_DATA.hours
                    )}

                </div>


                <button
                    type="button"
                    class="btn btn-primary"
                    data-action="maps">

                    ${icon("navigation")}

                    Abrir no Google Maps

                    ${icon("arrow-up-right")}

                </button>

            </div>


            <!-- MAP -->

            <div class="contact-map-card reveal-right">

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

                        <span></span>

                        LUANDA

                    </span>

                </div>


                <div class="contact-map-frame">

                    <iframe
                        title="Localização da AD Lifestyle em Luanda"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=13.22148%2C-8.84125%2C13.23348%2C-8.82925&layer=mapnik&marker=-8.83525%2C13.22748"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>


                    <div class="contact-map-marker">

                        <span></span>

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


function locationItem(
    iconType,
    title,
    lineOne,
    lineTwo
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
            ${lineOne}
        </strong>


        <p>
            ${lineTwo}
        </p>

    </div>

</div>

`;

}


/* ==========================================================
   FORM
   ========================================================== */

function messageForm(){

return `

<section
    id="contact-form"
    class="section contact-message">

    <div class="container">

        <div class="contact-form-shell">

            <div class="contact-form-intro reveal-left">

                <span class="label">
                    Fale connosco
                </span>


                <h2 class="section-title">

                    Conte-nos
                    <span>o que procura.</span>

                </h2>


                <p class="text-lg">

                    Quanto melhor compreendermos o seu pedido,
                    melhor poderemos encaminhá-lo.

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


            <div class="contact-form-panel reveal-right">

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
                    novalidate>


                    <div class="contact-form-grid">

                        <div class="input-group">

                            <label for="contactName">
                                Nome
                            </label>

                            <input
                                type="text"
                                id="contactName"
                                name="name"
                                class="input"
                                placeholder="O seu nome"
                                autocomplete="name"
                                required>

                        </div>


                        <div class="input-group">

                            <label for="contactPhone">
                                Telefone
                            </label>

                            <input
                                type="tel"
                                id="contactPhone"
                                name="phone"
                                class="input"
                                placeholder="+244 9XX XXX XXX"
                                autocomplete="tel">

                        </div>

                    </div>


                    <div class="input-group">

                        <label for="contactEmail">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="contactEmail"
                            name="email"
                            class="input"
                            placeholder="exemplo@email.com"
                            autocomplete="email">

                    </div>


                    <div class="input-group">

                        <label for="contactSubject">
                            Motivo do contacto
                        </label>

                        <select
                            id="contactSubject"
                            name="subject"
                            class="input"
                            required>

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


                    <div class="input-group">

                        <label for="contactMessage">
                            Mensagem
                        </label>

                        <textarea
                            id="contactMessage"
                            name="message"
                            class="input textarea"
                            rows="5"
                            placeholder="Escreva a sua mensagem..."
                            required></textarea>

                    </div>


                    <div class="contact-form-bottom">

                        <span>

                            ${icon("shield")}

                            Ligação directa através do WhatsApp.

                        </span>


                        <button
                            type="submit"
                            class="btn btn-primary">

                            ${icon("whatsapp")}

                            Enviar mensagem

                        </button>

                    </div>


                    <div
                        class="contact-form-feedback"
                        id="contactFormFeedback"
                        aria-live="polite">
                    </div>

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

function faq(){

return `

<section class="section-sm contact-faq">

    <div class="container-sm">

        <div class="section-center reveal">

            <span class="label">
                Perguntas frequentes
            </span>


            <h2 class="section-title">

                Talvez a resposta
                <span>esteja aqui.</span>

            </h2>

        </div>


        <div class="faq mt-5">

            ${question(
                "Como posso comprar um produto?",
                "Entre em contacto através do WhatsApp para confirmar disponibilidade, condições de aquisição e entrega."
            )}


            ${question(
                "A AD Lifestyle faz entregas?",
                "Trabalhamos com uma visão de distribuição e conexão internacional. As condições de entrega dependem do destino, produto, disponibilidade e logística aplicável."
            )}


            ${question(
                "Como posso participar num evento?",
                "Pode acompanhar a página de Eventos ou falar directamente connosco para conhecer as próximas apresentações, datas, local e condições de participação."
            )}


            ${question(
                "Como posso conhecer a Academy Twenty One?",
                "Pode entrar em contacto connosco para conhecer melhor a dimensão de educação, desenvolvimento pessoal, liderança, comunicação e empreendedorismo."
            )}


            ${question(
                "Posso falar convosco sobre uma parceria?",
                "Sim. Contacte-nos através do WhatsApp ou do formulário e descreva brevemente a sua proposta."
            )}

        </div>

    </div>

</section>

`;

}


function question(
    questionText,
    answerText
){

return `

<div class="faq-item">

    <button
        type="button"
        class="faq-question"
        aria-expanded="false">

        <span>
            ${questionText}
        </span>

        <span class="faq-plus">
            ${icon("plus")}
        </span>

    </button>


    <div class="faq-answer">

        <p>
            ${answerText}
        </p>

    </div>

</div>

`;

}


/* ==========================================================
   CTA
   ========================================================== */

function cta(){

return `

<section class="section contact-final">

    <div class="container">

        <div class="contact-final-panel">

            <div class="contact-final-orbit"></div>


            <div class="contact-final-content reveal">

                <span>
                    AD LIFESTYLE
                </span>


                <h2>

                    Uma pergunta pode
                    <strong>abrir uma nova porta.</strong>

                </h2>


                <p>

                    Estamos prontos para ouvir,
                    esclarecer e criar a próxima ponte consigo.

                </p>


                <button
                    type="button"
                    class="btn btn-primary"
                    data-action="whatsapp">

                    ${icon("whatsapp")}

                    Iniciar conversa

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

        check: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 4 4L19 6"/>
            </svg>
        `,

        shield: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 20 6v5c0 5.2-3.4 8.6-8 10
                -4.6-1.4-8-4.8-8-10V6l8-3Z"/>
                <path d="m9 12 2 2 4-4"/>
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
   INITIALISE
   ========================================================== */

function initialiseContact(){

    const root =
        document.querySelector(
            ".contact-page"
        );


    if(!root) return;


    /* ------------------------------------------------------
       ANIMATIONS
       ------------------------------------------------------ */

    stagger(
        ".contact-page .contact-channel-card"
    );


    stagger(
        ".contact-page .contact-hub-mini"
    );


    root
        .querySelectorAll(".btn")
        .forEach(button=>{

            ripple(button);

        });


    /* ------------------------------------------------------
       WHATSAPP
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            '[data-action="whatsapp"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{
                    openWhatsApp(
                        "Olá AD Lifestyle! Gostaria de entrar em contacto convosco."
                    );
                }
            );

        });


    /* ------------------------------------------------------
       FORM SCROLL
       ------------------------------------------------------ */

    root
        .querySelector(
            '[data-action="form"]'
        )
        ?.addEventListener(
            "click",
            ()=>{

                root
                    .querySelector(
                        "#contact-form"
                    )
                    ?.scrollIntoView({

                        behavior:"smooth",

                        block:"start"

                    });

            }
        );


    /* ------------------------------------------------------
       MAPS
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
       HUB EMAIL / LOCATION
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            "[data-contact-action]"
        )
        .forEach(card=>{

            const action =
                card.dataset.contactAction;


            if(action === "clock") return;


            const execute = ()=>{

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
                event=>{

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
       CHANNEL CARDS
       ------------------------------------------------------ */

    root
        .querySelectorAll(
            ".contact-channel-card"
        )
        .forEach(card=>{

            const type =
                card.dataset.channel;


            if(
                type === "location"
            ) return;


            const execute = ()=>{

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
                event=>{

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
       FORM
       ------------------------------------------------------ */

    initialiseForm();


    /* ------------------------------------------------------
       FAQ
       ------------------------------------------------------ */

    initialiseFAQ();


    /* ------------------------------------------------------
       REVEAL
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


    if(!form) return;


    form.addEventListener(
        "submit",
        event=>{

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


            /* ---------------------------------------------
               VALIDATION
               --------------------------------------------- */

            if(
                !name ||
                !subject ||
                !message
            ){

                form.classList.add(
                    "form-invalid"
                );


                if(feedback){

                    feedback.textContent =
                        "Preencha o nome, o motivo do contacto e a mensagem.";

                    feedback.classList.add(
                        "is-visible",
                        "is-error"
                    );

                }


                return;

            }


            form.classList.remove(
                "form-invalid"
            );


            if(feedback){

                feedback.textContent =
                    "A preparar a sua mensagem…";

                feedback.classList.add(
                    "is-visible"
                );

            }


            /* ---------------------------------------------
               WHATSAPP MESSAGE
               --------------------------------------------- */

            const whatsappMessage =

`Olá AD Lifestyle!

Nome: ${name}
Telefone: ${phone || "Não informado"}
E-mail: ${email || "Não informado"}

Motivo:
${subject}

Mensagem:
${message}`;


            /* ---------------------------------------------
               OPEN WHATSAPP
               --------------------------------------------- */

            openWhatsApp(
                whatsappMessage
            );


            if(feedback){

                feedback.textContent =
                    "Mensagem preparada. A conversa será aberta no WhatsApp.";

                feedback.classList.remove(
                    "is-error"
                );

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
            ".contact-page .faq-item"
        );


    items.forEach(item=>{

        const button =
            item.querySelector(
                ".faq-question"
            );


        if(!button) return;


        button.addEventListener(
            "click",
            ()=>{

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                items.forEach(other=>{

                    other.classList.remove(
                        "active"
                    );


                    other
                        .querySelector(
                            ".faq-question"
                        )
                        ?.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                });


                if(!isActive){

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
            ".contact-page .reveal"
        );


    if(
        typeof IntersectionObserver ===
        "undefined"
    ){

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(

            entries=>{

                entries.forEach(
                    entry=>{

                        if(
                            entry.isIntersecting
                        ){

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold:.10
            }

        );


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}
