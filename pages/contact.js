```js
/* ==========================================================
   AD LIFESTYLE — CONTACT.JS
   Premium Institutional Contact Page
   Versão estável — sem template strings
   ========================================================== */

import { applyTheme } from "../js/theme.js";

console.log("CONTACT.JS — VERSÃO ESTÁVEL CARREGADA");


export function loadContact(){

    applyTheme("angel");

    var app = document.getElementById("app");

    if(!app){
        console.error("AD LIFESTYLE: elemento #app não encontrado.");
        return;
    }

    app.innerHTML =
        '<div class="contact-page">' +
            hero() +
            contacts() +
            socials() +
            locationSection() +
            contactFormSection() +
            faq() +
            cta() +
        '</div>';

    initialiseContact();
}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    return [
        '<section class="hero page contact-hero">',
            '<div class="aurora">',
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
                        'Estamos prontos para ',
                        'falar consigo.',
                    '</h1>',

                    '<p class="hero-sub">',
                        'Tem uma questão, pretende conhecer os nossos ',
                        'produtos ou deseja saber mais sobre a nossa ',
                        'actividade? Escolha o canal que preferir.',
                    '</p>',

                    '<div class="hero-actions">',

                        '<button class="btn btn-primary" data-action="whatsapp">',
                            icon("whatsapp"),
                            'WhatsApp',
                        '</button>',

                        '<button class="btn btn-glass" data-action="form">',
                            icon("message"),
                            'Enviar mensagem',
                        '</button>',

                    '</div>',

                    '<div class="contact-hero-meta">',

                        '<span>',
                            icon("shield"),
                            'Atendimento directo',
                        '</span>',

                        '<span>',
                            icon("clock"),
                            'Segunda a Sábado',
                        '</span>',

                    '</div>',

                '</div>',

                '<div class="hero-visual">',

                    '<div class="hero-product contact-hero-visual">',

                        '<div class="product-glow"></div>',
                        '<div class="contact-hero-orbit"></div>',

                        '<img src="assets/images/contact-hero.png" alt="Contacte a AD Lifestyle">',

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

function contacts(){

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

                    contact(
                        icon("whatsapp"),
                        "WhatsApp",
                        "+244 924 964 666",
                        "Atendimento directo",
                        "whatsapp",
                        "Falar agora"
                    ),

                    contact(
                        icon("email"),
                        "E-mail",
                        "adbzzworlddistribuidor@email.com",
                        "Informações e pedidos",
                        "email",
                        "Enviar e-mail"
                    ),

                    contact(
                        icon("location"),
                        "Localização",
                        "Prenda – Catambor",
                        "Junto ao Arreiou",
                        "location",
                        "Ver localização"
                    ),

                    contact(
                        icon("clock"),
                        "Horário",
                        "08h00 – 18h00",
                        "Segunda a Sábado",
                        "clock",
                        "Horário de atendimento"
                    ),

                '</div>',

            '</div>',
        '</section>'
    ].join("");
}


function contact(
    iconSvg,
    title,
    value,
    description,
    type,
    action
){

    return [
        '<div class="contact-card reveal" data-contact="', type, '">',

            '<div class="contact-card-top">',

                '<div class="service-icon contact-icon">',
                    iconSvg,
                '</div>',

                '<span class="contact-card-arrow">',
                    icon("arrow-up-right"),
                '</span>',

            '</div>',

            '<div class="contact-card-body">',

                '<span class="contact-card-label">',
                    description,
                '</span>',

                '<h3>',
                    title,
                '</h3>',

                '<p class="contact-value">',
                    value,
                '</p>',

            '</div>',

            '<div class="contact-card-footer">',

                '<span>',
                    action,
                '</span>',

                icon("arrow-right"),

            '</div>',

        '</div>'
    ].join("");
}


/* ==========================================================
   REDES SOCIAIS
   ========================================================== */

function socials(){

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

                        social(
                            "facebook",
                            "Facebook",
                            "AD Lifestyle",
                            "https://web.facebook.com/ad.ambassadoracademy21/"
                        ),

                        social(
                            "instagram",
                            "Instagram",
                            "@ad.ambassadoracademy21",
                            "https://www.instagram.com/ad.ambassadoracademy21/"
                        ),

                        social(
                            "tiktok",
                            "TikTok",
                            "@adbdlifestyle",
                            "https://www.tiktok.com/@adbdlifestyle"
                        ),

                        social(
                            "whatsapp",
                            "WhatsApp",
                            "+244 924 964 666",
                            "https://wa.me/244924964666"
                        ),

                    '</div>',

                '</div>',

            '</div>',
        '</section>'
    ].join("");
}


function social(iconType, title, handle, url){

    return [
        '<a href="', url, '" target="_blank" rel="noopener noreferrer" class="social-link">',

            '<span class="social-icon">',
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

            '<span class="social-arrow">',
                icon("arrow-up-right"),
            '</span>',

        '</a>'
    ].join("");
}


/* ==========================================================
   LOCALIZAÇÃO
   ========================================================== */

function locationSection(){

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

                            '<div class="location-symbol">',
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

                        '<div class="location-information-line"></div>',

                        '<div class="location-list">',

                            '<div class="location-item">',

                                '<span class="location-item-icon">',
                                    icon("location"),
                                '</span>',

                                '<div>',
                                    '<strong>Morada</strong>',
                                    '<p>Luanda, Angola</p>',
                                    '<p>Prenda – Catambor, junto ao Arreiou</p>',
                                '</div>',

                            '</div>',

                            '<div class="location-item">',

                                '<span class="location-item-icon">',
                                    icon("navigation"),
                                '</span>',

                                '<div>',
                                    '<strong>Coordenadas</strong>',
                                    '<p>8°50\'06.90"S 13°13\'38.93"E</p>',
                                '</div>',

                            '</div>',

                            '<div class="location-item">',

                                '<span class="location-item-icon">',
                                    icon("clock"),
                                '</span>',

                                '<div>',
                                    '<strong>Atendimento</strong>',
                                    '<p>Segunda a Sábado</p>',
                                    '<p>08h00 – 18h00</p>',
                                '</div>',

                            '</div>',

                        '</div>',

                        '<button class="btn btn-primary location-button" data-action="maps">',
                            icon("navigation"),
                            'Abrir no Google Maps',
                            icon("arrow-up-right"),
                        '</button>',

                    '</div>',

                    '<div class="location-map-card reveal-right">',

                        '<div class="map-topbar">',

                            '<div class="map-brand">',

                                '<span class="map-live-dot"></span>',

                                '<div>',
                                    '<span>LOCALIZAÇÃO</span>',
                                    '<strong>AD Lifestyle</strong>',
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

                            '<div class="map-marker">',

                                '<span class="map-marker-pulse"></span>',

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

function contactFormSection(){

    return [
        '<section class="section" id="contact-form">',

            '<div class="container-sm">',

                '<div class="contact-form-panel reveal">',

                    '<div class="contact-form-header section-center">',

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

                    '<form id="contactForm" class="contact-form mt-5">',

                        '<div class="form-grid">',

                            '<div class="input-group">',

                                '<label for="name">Nome</label>',

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

                                '<label for="phone">Telefone</label>',

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

                            '<label for="email">E-mail</label>',

                            '<input ',
                                'type="email" ',
                                'class="input" ',
                                'id="email" ',
                                'name="email" ',
                                'autocomplete="email" ',
                                'placeholder="exemplo@email.com">',
                            '</div>',

                        '<div class="input-group mt-3">',

                            '<label for="subject">Assunto</label>',

                            '<input ',
                                'type="text" ',
                                'class="input" ',
                                'id="subject" ',
                                'name="subject" ',
                                'placeholder="Como podemos ajudar?" ',
                                'required>',
                            '</div>',

                        '<div class="input-group mt-3">',

                            '<label for="message">Mensagem</label>',

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
                                'A sua mensagem será encaminhada de forma directa.',
                            '</span>',

                            '<button type="submit" class="btn btn-primary">',
                                icon("whatsapp"),
                                'Enviar para WhatsApp',
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

function faq(){

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

                    question(
                        "Como posso comprar os produtos?",
                        "Pode entrar em contacto connosco através do WhatsApp para conhecer a disponibilidade dos produtos e as condições de aquisição."
                    ),

                    question(
                        "Realizam entregas em Luanda?",
                        "As entregas podem ser organizadas de acordo com a disponibilidade e a localização. Fale connosco para verificar as condições aplicáveis."
                    ),

                    question(
                        "Como posso participar nos eventos?",
                        "Entre em contacto connosco através do WhatsApp para conhecer os próximos eventos, condições de participação e processo de inscrição."
                    ),

                    question(
                        "Posso tornar-me parceiro?",
                        "Sim. Podemos apresentar-lhe a nossa actividade, o ecossistema e as possibilidades existentes. O primeiro passo é entrar em contacto connosco."
                    ),

                '</div>',

            '</div>',

        '</section>'
    ].join("");
}


function question(q, a){

    return [
        '<div class="faq-item">',

            '<button class="faq-question" type="button" aria-expanded="false">',

                '<span>',
                    q,
                '</span>',

                '<span class="faq-plus">',
                    icon("plus"),
                '</span>',

            '</button>',

            '<div class="faq-answer">',

                '<p>',
                    a,
                '</p>',

            '</div>',

        '</div>'
    ].join("");
}


/* ==========================================================
   CTA
   ========================================================== */

function cta(){

    return [
        '<section class="section">',

            '<div class="container">',

                '<div class="showcase contact-cta">',

                    '<div class="showcase-bg"></div>',

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

                            '<button class="btn btn-primary" data-action="whatsapp">',
                                icon("whatsapp"),
                                'Iniciar conversa',
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

    var icons = {

        whatsapp:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0 C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.1 1.6 5.8L.1 24 l6.5-1.7a11.9 11.9 0 0 0 5.5 1.4h.1 c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.1-3.6-8.3Z"></path>' +
            '</svg>',

        facebook:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v2H6v4h3v5h4v-5h3.3l.7-4H13V9c0-.7.3-1 1-1Z"></path>' +
            '</svg>',

        instagram:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<rect x="3" y="3" width="18" height="18" rx="5"></rect>' +
                '<circle cx="12" cy="12" r="4"></circle>' +
                '<circle cx="17.5" cy="6.5" r="1"></circle>' +
            '</svg>',

        tiktok:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M15 3h3c.3 1.7 1.3 3 3 3.7V10 c-1.1-.1-2.1-.5-3-1v6.2A6.8 6.8 0 1 1 12 8.5v3.1 a3.8 3.8 0 1 0 3 3.7V3Z"></path>' +
            '</svg>',

        email:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<rect x="2" y="4" width="20" height="16" rx="3"></rect>' +
                '<path d="m3 6 9 7 9-7"></path>' +
            '</svg>',

        location:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M12 2a8 8 0 0 0-8 8c0 5.8 8 12 8 12s8-6.2 8-12a8 8 0 0 0-8-8Z"></path>' +
                '<circle cx="12" cy="10" r="2.7"></circle>' +
            '</svg>',

        navigation:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="m21.5 2.5-19 7.2c-.8.3-.8 1.4 0 1.7l7.4 2.7 2.7 7.4c.3.8 1.4.8 1.7 0l7.2-19c.3-.8-.3-1.4-1-1Zm-8.4 15.4-1.8-4.9 6.9-6.9-5.1 11.8Z"></path>' +
            '</svg>',

        clock:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<circle cx="12" cy="12" r="9"></circle>' +
                '<path d="M12 7v5l3 2"></path>' +
            '</svg>',

        message:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M20 3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3v3l4-3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"></path>' +
            '</svg>',

        arrow:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="m9 5 7 7-7 7"></path>' +
            '</svg>',

        "arrow-right":
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M4 12h15m-6-6 6 6-6 6"></path>' +
            '</svg>',

        "arrow-up-right":
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M7 17 17 7M8 7h9v9"></path>' +
            '</svg>',

        check:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="m5 12 4 4L19 6"></path>' +
            '</svg>',

        plus:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M12 5v14M5 12h14"></path>' +
            '</svg>',

        shield:
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                '<path d="M12 3 20 6v5c0 5.2-3.4 8.6-8 10-4.6-1.4-8-4.8-8-10V6l8-3Z"></path>' +
                '<path d="m9 12 2 2 4-4"></path>' +
            '</svg>'

    };

    return icons[type] || "";
}


/* ==========================================================
   INTERACTIVIDADE
   ========================================================== */

function initialiseContact(){

    initialiseFAQ();
    initialiseWhatsApp();
    initialiseForm();
    initialiseMaps();
    initialiseScroll();

}


/* ==========================================================
   FAQ
   ========================================================== */

function initialiseFAQ(){

    var items = document.querySelectorAll(
        ".contact-page .faq-item"
    );

    items.forEach(function(item){

        var button = item.querySelector(".faq-question");

        if(!button){
            return;
        }

        button.addEventListener("click", function(){

            var isActive =
                item.classList.contains("active");

            items.forEach(function(other){

                other.classList.remove("active");

                var otherButton =
                    other.querySelector(".faq-question");

                if(otherButton){
                    otherButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });

            if(!isActive){

                item.classList.add("active");

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });

}


/* ==========================================================
   SCROLL PARA FORMULÁRIO
   ========================================================== */

function initialiseScroll(){

    var button = document.querySelector(
        '.contact-page [data-action="form"]'
    );

    if(!button){
        return;
    }

    button.addEventListener("click", function(){

        var target =
            document.getElementById("contact-form");

        if(target){
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(message){

    var encodedMessage =
        encodeURIComponent(message);

    window.open(
        "https://wa.me/244924964666?text=" + encodedMessage,
        "_blank",
        "noopener,noreferrer"
    );
}


function initialiseWhatsApp(){

    var buttons = document.querySelectorAll(
        '.contact-page [data-action="whatsapp"]'
    );

    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            openWhatsApp(
                "Olá AD Lifestyle! Gostaria de entrar em contacto convosco."
            );

        });

    });


    var card = document.querySelector(
        '.contact-page [data-contact="whatsapp"]'
    );

    if(card){

        card.addEventListener("click", function(){

            openWhatsApp(
                "Olá AD Lifestyle! Gostaria de obter mais informações."
            );

        });

    }

}


/* ==========================================================
   MAPAS
   ========================================================== */

function openMaps(){

    window.open(
        "https://www.google.com/maps?q=-8.83525,13.22748",
        "_blank",
        "noopener,noreferrer"
    );

}


function initialiseMaps(){

    var mapButton = document.querySelector(
        '.contact-page [data-action="maps"]'
    );

    if(mapButton){
        mapButton.addEventListener(
            "click",
            openMaps
        );
    }


    var mapCard = document.querySelector(
        '.contact-page [data-contact="location"]'
    );

    if(mapCard){

        mapCard.addEventListener(
            "click",
            openMaps
        );

    }

}


/* ==========================================================
   FORMULÁRIO
   ========================================================== */

function initialiseForm(){

    var form =
        document.getElementById("contactForm");

    if(!form){
        return;
    }


    form.addEventListener("submit", function(event){

        event.preventDefault();


        var nameElement =
            document.getElementById("name");

        var phoneElement =
            document.getElementById("phone");

        var emailElement =
            document.getElementById("email");

        var subjectElement =
            document.getElementById("subject");

        var messageElement =
            document.getElementById("message");


        var name =
            nameElement ? nameElement.value.trim() : "";

        var phone =
            phoneElement ? phoneElement.value.trim() : "";

        var email =
            emailElement ? emailElement.value.trim() : "";

        var subject =
            subjectElement ? subjectElement.value.trim() : "";

        var message =
            messageElement ? messageElement.value.trim() : "";


        if(!name || !subject || !message){

            form.classList.add("form-invalid");

            return;

        }


        form.classList.remove("form-invalid");


        var text =
            "Olá AD Lifestyle!\n\n" +
            "Nome: " + name + "\n" +
            "Telefone: " + (phone || "Não informado") + "\n" +
            "E-mail: " + (email || "Não informado") + "\n\n" +
            "Assunto:\n" +
            subject + "\n\n" +
            "Mensagem:\n" +
            message;


        openWhatsApp(text);

    });

}
```
