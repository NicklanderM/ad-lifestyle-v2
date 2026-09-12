```text
/* ==========================================================
   AD LIFESTYLE — CONTACT PAGE
   Página institucional de contacto
   ES Modules • SPA • Sem template strings
   ========================================================== */

import { applyTheme } from "../js/theme.js";


/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";

const WHATSAPP_URL =
    "https://wa.me/" + WHATSAPP_NUMBER;

const GOOGLE_MAPS_URL =
    "https://www.google.com/maps?q=-8.83525,13.22748";

const CONTACT_EMAIL =
    "adbzzworlddistribuidor@email.com";


/* ==========================================================
   EXPORT PRINCIPAL
   ========================================================== */

export function loadContact(){

    applyTheme("angel");

    const app =
        document.getElementById("app");


    if(!app){

        console.error(
            "AD LIFESTYLE: #app não encontrado."
        );

        return;

    }


    app.innerHTML =
        '<div class="contact-page">' +

            renderHero() +

            renderContactCards() +

            renderSocials() +

            renderLocation() +

            renderForm() +

            renderFAQ() +

            renderCTA() +

        '</div>';


    initialiseContact();

}


/* ==========================================================
   HERO
   ========================================================== */

function renderHero(){

    return [

        '<section class="hero page contact-hero">',

            '<div class="aurora" aria-hidden="true">',

                '<div class="blob blob-1"></div>',
                '<div class="blob blob-2"></div>',
                '<div class="blob blob-3"></div>',

            '</div>',

            '<div class="container hero-grid">',

                '<div class="hero-content">',

                    '<span class="badge">',
                        'Contacte a AD Lifestyle',
                    '</span>',

                    '<h1 class="hero-title">',
                        'Estamos prontos para falar consigo.',
                    '</h1>',

                    '<p class="hero-sub">',
                        'Tem uma questão, pretende conhecer os nossos produtos ',
                        'ou deseja saber mais sobre a nossa actividade? ',
                        'Escolha o canal que preferir.',
                    '</p>',

                    '<div class="hero-actions">',

                        '<button ',
                            'class="btn btn-primary" ',
                            'type="button" ',
                            'data-contact-action="whatsapp">',

                            icon("whatsapp"),

                            '<span>',
                                'WhatsApp',
                            '</span>',

                        '</button>',

                        '<button ',
                            'class="btn btn-glass" ',
                            'type="button" ',
                            'data-contact-action="form">',

                            icon("message"),

                            '<span>',
                                'Enviar mensagem',
                            '</span>',

                        '</button>',

                    '</div>',

                    '<div class="contact-hero-meta">',

                        '<span>',
                            icon("shield"),
                            '<span>Atendimento directo</span>',
                        '</span>',

                        '<span>',
                            icon("clock"),
                            '<span>Segunda a Sábado</span>',
                        '</span>',

                    '</div>',

                '</div>',

                '<div class="hero-visual">',

                    '<div class="hero-product contact-hero-visual">',

                        '<div ',
                            'class="product-glow" ',
                            'aria-hidden="true">',
                        '</div>',

                        '<div ',
                            'class="contact-hero-orbit" ',
                            'aria-hidden="true">',
                        '</div>',

                        '<img ',
                            'src="assets/images/contact-hero.png" ',
                            'alt="Contacto com a AD Lifestyle" ',
                            'loading="eager">',

                        '<div class="contact-hero-card">',

                            '<span class="contact-hero-card-label">',
                                'AD LIFESTYLE',
                            '</span>',

                            '<strong>',
                                'Estamos consigo.',
                            '</strong>',

                            '<span>',
                                'Luanda · Angola',
                            '</span>',

                        '</div>',

                    '</div>',

                '</div>',

            '</div>',

        '</section>'

    ].join("");

}


/* ==========================================================
   CONTACTOS
   ========================================================== */

function renderContactCards(){

    return [

        '<section class="section contact-section">',

            '<div class="container">',

                '<div class="section-center reveal">',

                    '<span class="label">',
                        'Contactos',
                    '</span>',

                    '<h2 class="section-title">',
                        'Fale directamente connosco',
                    '</h2>',

                    '<p class="text mt-2">',
                        'Escolha o canal que melhor se adapta à sua necessidade.',
                    '</p>',

                '</div>',

                '<div class="contact-cards-grid mt-5">',

                    contactCard(
                        "whatsapp",
                        "WhatsApp",
                        "+244 924 964 666",
                        "Atendimento directo",
                        "Falar agora"
                    ),

                    contactCard(
                        "email",
                        "E-mail",
                        CONTACT_EMAIL,
                        "Informações e pedidos",
                        "Enviar e-mail"
                    ),

                    contactCard(
                        "location",
                        "Localização",
                        "Prenda – Catambor",
                        "Junto ao Arreiou",
                        "Ver localização"
                    ),

                    contactCard(
                        "clock",
                        "Horário",
                        "08h00 – 18h00",
                        "Segunda a Sábado",
                        "Atendimento"
                    ),

                '</div>',

            '</div>',

        '</section>'

    ].join("");

}


function contactCard(
    type,
    title,
    value,
    description,
    action
){

    return [

        '<button ',
            'class="contact-card reveal" ',
            'type="button" ',
            'data-contact="',
            type,
            '">',

            '<span class="contact-card-top">',

                '<span ',
                    'class="service-icon contact-icon" ',
                    'aria-hidden="true">',

                    icon(type),

                '</span>',

                '<span ',
                    'class="contact-card-arrow" ',
                    'aria-hidden="true">',

                    icon("arrow-up-right"),

                '</span>',

            '</span>',

            '<span class="contact-card-body">',

                '<span class="contact-card-label">',
                    description,
                '</span>',

                '<span class="contact-card-title">',
                    title,
                '</span>',

                '<span class="contact-value">',
                    value,
                '</span>',

            '</span>',

            '<span class="contact-card-footer">',

                '<span>',
                    action,
                '</span>',

                icon("arrow-right"),

            '</span>',

        '</button>'

    ].join("");

}


/* ==========================================================
   REDES SOCIAIS
   ========================================================== */

function renderSocials(){

    return [

        '<section class="section-sm contact-social-section">',

            '<div class="container">',

                '<div class="contact-social-panel reveal">',

                    '<div class="contact-social-intro">',

                        '<span class="label">',
                            'Redes sociais',
                        '</span>',

                        '<h3>',
                            'Continue a conversa nas nossas plataformas.',
                        '</h3>',

                        '<p class="text">',
                            'Acompanhe conteúdos, novidades, produtos, eventos e oportunidades.',
                        '</p>',

                    '</div>',

                    '<div class="social-links">',

                        socialLink(
                            "facebook",
                            "Facebook",
                            "AD Lifestyle",
                            "https://web.facebook.com/ad.ambassadoracademy21/"
                        ),

                        socialLink(
                            "instagram",
                            "Instagram",
                            "@ad.ambassadoracademy21",
                            "https://www.instagram.com/ad.ambassadoracademy21/"
                        ),

                        socialLink(
                            "tiktok",
                            "TikTok",
                            "@adbdlifestyle",
                            "https://www.tiktok.com/@adbdlifestyle"
                        ),

                        socialLink(
                            "whatsapp",
                            "WhatsApp",
                            "+244 924 964 666",
                            WHATSAPP_URL
                        ),

                    '</div>',

                '</div>',

            '</div>',

        '</section>'

    ].join("");

}


function socialLink(
    iconType,
    title,
    handle,
    url
){

    return [

        '<a ',
            'href="',
            url,
            '" ',
            'target="_blank" ',
            'rel="noopener noreferrer" ',
            'class="social-link">',

            '<span ',
                'class="social-icon" ',
                'aria-hidden="true">',

                icon(iconType),

            '</span>',

            '<span class="social-info">',

                '<strong>',
                    title,
                '</strong>',

                '<small>',
                    handle,
                '</small>',

            '</span>',

            '<span ',
                'class="social-arrow" ',
                'aria-hidden="true">',

                icon("arrow-up-right"),

            '</span>',

        '</a>'

    ].join("");

}


/* ==========================================================
   LOCALIZAÇÃO
   ========================================================== */

function renderLocation(){

    return [

        '<section class="section location-section">',

            '<div class="container">',

                '<div class="section-center reveal">',

                    '<span class="label">',
                        'Localização',
                    '</span>',

                    '<h2 class="section-title">',
                        'Encontre-nos em Luanda',
                    '</h2>',

                    '<p class="text mt-2">',
                        'Estamos em Prenda – Catambor, junto ao Arreiou.',
                    '</p>',

                '</div>',

                '<div class="location-layout mt-5">',

                    '<div class="location-information reveal-left">',

                        '<div class="location-information-header">',

                            '<div ',
                                'class="location-symbol" ',
                                'aria-hidden="true">',

                                icon("location"),

                            '</div>',

                            '<div>',

                                '<span class="label">',
                                    'AD Lifestyle',
                                '</span>',

                                '<h3>',
                                    'Prenda – Catambor',
                                '</h3>',

                            '</div>',

                        '</div>',

                        '<div class="location-information-line">',
                        '</div>',

                        '<div class="location-list">',

                            '<div class="location-item">',

                                '<span ',
                                    'class="location-item-icon" ',
                                    'aria-hidden="true">',

                                    icon("location"),

                                '</span>',

                                '<div>',

                                    '<strong>',
                                        'Morada',
                                    '</strong>',

                                    '<p>',
                                        'Luanda, Angola',
                                    '</p>',

                                    '<p>',
                                        'Prenda – Catambor, junto ao Arreiou',
                                    '</p>',

                                '</div>',

                            '</div>',

                            '<div class="location-item">',

                                '<span ',
                                    'class="location-item-icon" ',
                                    'aria-hidden="true">',

                                    icon("navigation"),

                                '</span>',

                                '<div>',

                                    '<strong>',
                                        'Coordenadas',
                                    '</strong>',

                                    '<p>',
                                        '8°50\'06.90&quot;S 13°13\'38.93&quot;E',
                                    '</p>',

                                '</div>',

                            '</div>',

                            '<div class="location-item">',

                                '<span ',
                                    'class="location-item-icon" ',
                                    'aria-hidden="true">',

                                    icon("clock"),

                                '</span>',

                                '<div>',

                                    '<strong>',
                                        'Atendimento',
                                    '</strong>',

                                    '<p>',
                                        'Segunda a Sábado',
                                    '</p>',

                                    '<p>',
                                        '08h00 – 18h00',
                                    '</p>',

                                '</div>',

                            '</div>',

                        '</div>',

                        '<button ',
                            'class="btn btn-primary location-button" ',
                            'type="button" ',
                            'data-contact-action="maps">',

                            icon("navigation"),

                            '<span>',
                                'Abrir no Google Maps',
                            '</span>',

                            icon("arrow-up-right"),

                        '</button>',

                    '</div>',

                    '<div class="location-map-card reveal-right">',

                        '<div class="map-topbar">',

                            '<div class="map-brand">',

                                '<span ',
                                    'class="map-live-dot" ',
                                    'aria-hidden="true">',
                                '</span>',

                                '<div>',

                                    '<span>',
                                        'LOCALIZAÇÃO',
                                    '</span>',

                                    '<strong>',
                                        'AD Lifestyle',
                                    '</strong>',

                                '</div>',

                            '</div>',

                            '<span class="map-city">',
                                'Luanda',
                            '</span>',

                        '</div>',

                        '<div class="map-frame">',

                            '<iframe ',
                                'title="Mapa da localização da AD Lifestyle" ',
                                'src="https://www.openstreetmap.org/export/embed.html?bbox=13.22148%2C-8.84125%2C13.23348%2C-8.82925&layer=mapnik&marker=-8.83525%2C13.22748" ',
                                'loading="lazy" ',
                                'referrerpolicy="no-referrer-when-downgrade">',
                            '</iframe>',

                            '<div ',
                                'class="map-marker" ',
                                'aria-hidden="true">',

                                '<span class="map-marker-pulse">',
                                '</span>',

                                '<span class="map-marker-icon">',
                                    icon("location"),
                                '</span>',

                            '</div>',

                        '</div>',

                        '<div class="map-bottom">',

                            '<div>',
                                icon("location"),
                                '<span>Prenda – Catambor</span>',
                            '</div>',

                            '<div>',
                                icon("check"),
                                '<span>Junto ao Arreiou</span>',
                            '</div>',

                        '</div>',

                    '</div>',

                '</div>',

            '</div>',

        '</section>'

    ].join("");

}


/* ==========================================================
   FORMULÁRIO
   ========================================================== */

function renderForm(){

    return [

        '<section class="section" id="contact-form">',

            '<div class="container-sm">',

                '<div class="contact-form-panel reveal">',

                    '<div ',
                        'class="contact-form-header section-center">',

                        '<span class="label">',
                            'Mensagem',
                        '</span>',

                        '<h2 class="section-title">',
                            'Vamos conversar.',
                        '</h2>',

                        '<p class="text mt-2">',
                            'Envie os seus dados e a sua mensagem. ',
                            'Ao submeter, será aberta uma conversa directamente no WhatsApp.',
                        '</p>',

                    '</div>',

                    '<form ',
                        'id="contactForm" ',
                        'class="contact-form mt-5" ',
                        'novalidate>',

                        '<div class="form-grid">',

                            '<div class="input-group">',

                                '<label for="name">',
                                    'Nome',
                                '</label>',

                                '<input ',
                                    'type="text" ',
                                    'class="input" ',
                                    'id="name" ',
                                    'name="name" ',
                                    'autocomplete="name" ',
                                    'placeholder="O seu nome" ',
                                    'required>',

                            '</div>',

                            '<div class="input-group">',

                                '<label for="phone">',
                                    'Telefone',
                                '</label>',

                                '<input ',
                                    'type="tel" ',
                                    'class="input" ',
                                    'id="phone" ',
                                    'name="phone" ',
                                    'autocomplete="tel" ',
                                    'placeholder="+244 9XX XXX XXX">',

                            '</div>',

                        '</div>',

                        '<div class="input-group mt-3">',

                            '<label for="email">',
                                'E-mail',
                            '</label>',

                            '<input ',
                                'type="email" ',
                                'class="input" ',
                                'id="email" ',
                                'name="email" ',
                                'autocomplete="email" ',
                                'placeholder="exemplo@email.com">',

                        '</div>',

                        '<div class="input-group mt-3">',

                            '<label for="subject">',
                                'Assunto',
                            '</label>',

                            '<input ',
                                'type="text" ',
                                'class="input" ',
                                'id="subject" ',
                                'name="subject" ',
                                'placeholder="Como podemos ajudar?" ',
                                'required>',

                        '</div>',

                        '<div class="input-group mt-3">',

                            '<label for="message">',
                                'Mensagem',
                            '</label>',

                            '<textarea ',
                                'class="input textarea" ',
                                'id="message" ',
                                'name="message" ',
                                'rows="6" ',
                                'placeholder="Escreva aqui a sua mensagem..." ',
                                'required>',
                            '</textarea>',

                        '</div>',

                        '<div class="contact-form-footer">',

                            '<span class="form-security">',

                                icon("shield"),

                                '<span>',
                                    'A sua mensagem será encaminhada de forma directa.',
                                '</span>',

                            '</span>',

                            '<button ',
                                'type="submit" ',
                                'class="btn btn-primary">',

                                icon("whatsapp"),

                                '<span>',
                                    'Enviar para WhatsApp',
                                '</span>',

                            '</button>',

                        '</div>',

                    '</form>',

                '</div>',

            '</div>',

        '</section>'

    ].join("");

}


/* ==========================================================
   FAQ
   ========================================================== */

function renderFAQ(){

    return [

        '<section class="section-sm contact-faq-section">',

            '<div class="container-sm">',

                '<div class="section-center reveal">',

                    '<span class="label">',
                        'Perguntas frequentes',
                    '</span>',

                    '<h2 class="section-title">',
                        'Antes de nos contactar',
                    '</h2>',

                    '<p class="text mt-2">',
                        'Algumas respostas rápidas às questões que recebemos com maior frequência.',
                    '</p>',

                '</div>',

                '<div class="faq contact-faq mt-5">',

                    faqItem(
                        "Como posso comprar os produtos?",
                        "Pode entrar em contacto connosco através do WhatsApp para conhecer a disponibilidade dos produtos e as condições de aquisição."
                    ),

                    faqItem(
                        "Realizam entregas em Luanda?",
                        "As entregas podem ser organizadas de acordo com a disponibilidade e a localização. Fale connosco para verificar as condições aplicáveis."
                    ),

                    faqItem(
                        "Como posso participar nos eventos?",
                        "Entre em contacto connosco através do WhatsApp para conhecer os próximos eventos, condições de participação e processo de inscrição."
                    ),

                    faqItem(
                        "Posso tornar-me parceiro?",
                        "Sim. Podemos apresentar-lhe a nossa actividade, o ecossistema e as possibilidades existentes. O primeiro passo é entrar em contacto connosco."
                    ),

                '</div>',

            '</div>',

        '</section>'

    ].join("");

}


function faqItem(questionText, answerText){

    return [

        '<div class="faq-item">',

            '<button ',
                'class="faq-question" ',
                'type="button" ',
                'aria-expanded="false">',

                '<span>',
                    questionText,
                '</span>',

                '<span ',
                    'class="faq-plus" ',
                    'aria-hidden="true">',

                    icon("plus"),

                '</span>',

            '</button>',

            '<div class="faq-answer">',

                '<p>',
                    answerText,
                '</p>',

            '</div>',

        '</div>'

    ].join("");

}


/* ==========================================================
   CTA
   ========================================================== */

function renderCTA(){

    return [

        '<section class="section">',

            '<div class="container">',

                '<div class="showcase contact-cta">',

                    '<div ',
                        'class="showcase-bg" ',
                        'aria-hidden="true">',
                    '</div>',

                    '<div class="showcase-content section-center">',

                        '<span class="badge badge-gold">',
                            'AD Lifestyle',
                        '</span>',

                        '<h2 class="section-title mt-2">',
                            'Estamos a um contacto de distância.',
                        '</h2>',

                        '<p class="text-lg">',
                            'Uma pergunta pode ser o início de uma nova possibilidade.',
                        '</p>',

                        '<div class="hero-actions center mt-4">',

                            '<button ',
                                'class="btn btn-primary" ',
                                'type="button" ',
                                'data-contact-action="whatsapp">',

                                icon("whatsapp"),

                                '<span>',
                                    'Iniciar conversa',
                                '</span>',

                            '</button>',

                        '</div>',

                    '</div>',

                '</div>',

            '</div>',

        '</section>'

    ].join("");

}


/* ==========================================================
   ÍCONES SVG
   ========================================================== */

function icon(type){

    const icons = {

        whatsapp:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.1 1.6 5.8L.1 24l6.5-1.7a11.9 11.9 0 0 0 5.5 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.1-3.6-8.3Z"></path>' +
            '</svg>',

        facebook:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v2H6v4h3v5h4v-5h3.3l.7-4H13V9c0-.7.3-1 1-1Z"></path>' +
            '</svg>',

        instagram:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<rect x="3" y="3" width="18" height="18" rx="5"></rect>' +
                '<circle cx="12" cy="12" r="4"></circle>' +
                '<circle cx="17.5" cy="6.5" r="1"></circle>' +
            '</svg>',

        tiktok:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M15 3h3c.3 1.7 1.3 3 3 3.7V10c-1.1-.1-2.1-.5-3-1v6.2A6.8 6.8 0 1 1 12 8.5v3.1a3.8 3.8 0 1 0 3 3.7V3Z"></path>' +
            '</svg>',

        email:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<rect x="2" y="4" width="20" height="16" rx="3"></rect>' +
                '<path d="m3 6 9 7 9-7"></path>' +
            '</svg>',

        location:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M12 2a8 8 0 0 0-8 8c0 5.8 8 12 8 12s8-6.2 8-12a8 8 0 0 0-8-8Z"></path>' +
                '<circle cx="12" cy="10" r="2.7"></circle>' +
            '</svg>',

        navigation:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="m21.5 2.5-19 7.2c-.8.3-.8 1.4 0 1.7l7.4 2.7 2.7 7.4c.3.8 1.4 1.4 1.7 0l7.2-19c.3-.8-.3-1.4-1-1Zm-8.4 15.4-1.8-4.9 6.9-6.9-5.1 11.8Z"></path>' +
            '</svg>',

        clock:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<circle cx="12" cy="12" r="9"></circle>' +
                '<path d="M12 7v5l3 2"></path>' +
            '</svg>',

        message:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M20 3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3v3l4-3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"></path>' +
            '</svg>',

        "arrow-right":
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M4 12h15m-6-6 6 6-6 6"></path>' +
            '</svg>',

        "arrow-up-right":
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M7 17 17 7M8 7h9v9"></path>' +
            '</svg>',

        check:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="m5 12 4 4L19 6"></path>' +
            '</svg>',

        plus:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M12 5v14M5 12h14"></path>' +
            '</svg>',

        shield:
            '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                '<path d="M12 3 20 6v5c0 5.2-3.4 8.6-8 10-4.6-1.4-8-4.8-8-10V6l8-3Z"></path>' +
                '<path d="m9 12 2 2 4-4"></path>' +
            '</svg>'

    };


    return icons[type] || "";

}


/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

function initialiseContact(){

    initialiseFAQ();

    initialiseWhatsApp();

    initialiseContactCards();

    initialiseMaps();

    initialiseForm();

    initialiseScroll();

}


/* ==========================================================
   FAQ
   ========================================================== */

function initialiseFAQ(){

    const items =
        document.querySelectorAll(
            ".contact-page .faq-item"
        );


    items.forEach(function(item){

        const button =
            item.querySelector(".faq-question");


        if(!button){
            return;
        }


        button.addEventListener(
            "click",
            function(){

                const isActive =
                    item.classList.contains("active");


                items.forEach(function(other){

                    other.classList.remove(
                        "active"
                    );


                    const otherButton =
                        other.querySelector(
                            ".faq-question"
                        );


                    if(otherButton){

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

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
   SCROLL
   ========================================================== */

function initialiseScroll(){

    const buttons =
        document.querySelectorAll(
            '.contact-page [data-contact-action="form"]'
        );


    buttons.forEach(function(button){

        button.addEventListener(
            "click",
            function(){

                const target =
                    document.getElementById(
                        "contact-form"
                    );


                if(target){

                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(message){

    const text =
        encodeURIComponent(
            message || "Olá AD Lifestyle!"
        );


    window.open(

        WHATSAPP_URL +
        "?text=" +
        text,

        "_blank",

        "noopener,noreferrer"

    );

}


function initialiseWhatsApp(){

    const buttons =
        document.querySelectorAll(
            '.contact-page [data-contact-action="whatsapp"]'
        );


    buttons.forEach(function(button){

        button.addEventListener(
            "click",
            function(){

                openWhatsApp(
                    "Olá AD Lifestyle! Gostaria de entrar em contacto convosco."
                );

            }
        );

    });

}


/* ==========================================================
   CARTÕES
   ========================================================== */

function initialiseContactCards(){

    const cards =
        document.querySelectorAll(
            ".contact-page [data-contact]"
        );


    cards.forEach(function(card){

        card.addEventListener(
            "click",
            function(){

                const type =
                    card.getAttribute(
                        "data-contact"
                    );


                if(type === "whatsapp"){

                    openWhatsApp(
                        "Olá AD Lifestyle! Gostaria de obter mais informações."
                    );

                    return;

                }


                if(type === "email"){

                    window.location.href =
                        "mailto:" +
                        CONTACT_EMAIL;

                    return;

                }


                if(type === "location"){

                    openMaps();

                    return;

                }

            }
        );

    });

}


/* ==========================================================
   MAPAS
   ========================================================== */

function openMaps(){

    window.open(

        GOOGLE_MAPS_URL,

        "_blank",

        "noopener,noreferrer"

    );

}


function initialiseMaps(){

    const button =
        document.querySelector(
            '.contact-page [data-contact-action="maps"]'
        );


    if(button){

        button.addEventListener(
            "click",
            openMaps
        );

    }

}


/* ==========================================================
   FORMULÁRIO
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
        function(event){

            event.preventDefault();


            const name =
                getValue("name");

            const phone =
                getValue("phone");

            const email =
                getValue("email");

            const subject =
                getValue("subject");

            const message =
                getValue("message");


            clearFieldStates(form);


            let valid = true;


            if(!name){

                markInvalid("name");

                valid = false;

            }


            if(!subject){

                markInvalid("subject");

                valid = false;

            }


            if(!message){

                markInvalid("message");

                valid = false;

            }


            if(
                email &&
                !isValidEmail(email)
            ){

                markInvalid("email");

                valid = false;

            }


            if(!valid){

                form.classList.add(
                    "form-invalid"
                );


                const firstInvalid =
                    form.querySelector(
                        ".is-invalid"
                    );


                if(firstInvalid){

                    firstInvalid.focus();

                }


                return;

            }


            form.classList.remove(
                "form-invalid"
            );


            const whatsappMessage =

                "Olá AD Lifestyle!\n\n" +

                "Nome: " +
                name +
                "\n" +

                "Telefone: " +
                (phone || "Não informado") +
                "\n" +

                "E-mail: " +
                (email || "Não informado") +
                "\n\n" +

                "Assunto:\n" +
                subject +
                "\n\n" +

                "Mensagem:\n" +
                message;


            openWhatsApp(
                whatsappMessage
            );

        }
    );

}


function getValue(id){

    const element =
        document.getElementById(id);


    return element
        ? element.value.trim()
        : "";

}


function isValidEmail(value){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        value
    );

}


function markInvalid(id){

    const element =
        document.getElementById(id);


    if(!element){
        return;
    }


    element.classList.add(
        "is-invalid"
    );


    element.setAttribute(
        "aria-invalid",
        "true"
    );

}


function clearFieldStates(form){

    if(!form){
        return;
    }


    form.classList.remove(
        "form-invalid"
    );


    form
        .querySelectorAll(
            ".is-invalid"
        )
        .forEach(function(element){

            element.classList.remove(
                "is-invalid"
            );


            element.removeAttribute(
                "aria-invalid"
            );

        });

}


/* ==========================================================
   FIM DO MÓDULO
   ========================================================== */
```
