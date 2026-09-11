/* ==========================================================
   AD LIFESTYLE — CONTACT.JS
   Luxury Contact Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";

export function loadContact(){

    applyTheme("angel");

    const app = document.getElementById("app");

    app.innerHTML = `
        ${hero()}
        ${contacts()}
        ${location()}
        ${form()}
        ${faq()}
        ${cta()}
    `;

    initialiseContact();

}

/* ==========================================================
   HERO
   ========================================================== */

function hero(){

return `

<section class="hero page">

    <div class="aurora">

        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content">

            <span class="badge">

                Contacte a AD Lifestyle

            </span>

            <h1 class="hero-title">

                Estamos prontos para
                falar consigo.

            </h1>

            <p class="hero-sub">

                Esclareça dúvidas, solicite informações sobre
                produtos, serviços ou participe nos nossos eventos.

            </p>

            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    data-action="whatsapp">

                    <span class="btn-icon">

                        ${icon("whatsapp")}

                    </span>

                    WhatsApp

                </button>

                <button
                    class="btn btn-glass"
                    data-action="form">

                    <span class="btn-icon">

                        ${icon("message")}

                    </span>

                    Enviar Mensagem

                </button>

            </div>

        </div>

        <div class="hero-visual">

            <div class="hero-product">

                <div class="product-glow"></div>

                <img
                    src="assets/images/contact-hero.png"
                    alt="Contacte a AD Lifestyle">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   CONTACTOS
   ========================================================== */

function contacts(){

return `

<section class="section">

<div class="container">

<div class="section-center reveal">

<span class="label">

Informações

</span>

<h2 class="section-title">

Fale connosco pelos nossos canais oficiais

</h2>

<p class="text mt-2">

Estamos disponíveis para esclarecer dúvidas, apresentar
soluções, receber pedidos e orientar cada contacto.

</p>

</div>

<div class="grid grid-2 mt-5">

${contact(
    icon("whatsapp"),
    "WhatsApp",
    "+244 924 964 666",
    "Atendimento directo",
    "whatsapp"
)}

${contact(
    icon("email"),
    "E-mail",
    "adbzzworlddistribuidor@email.com",
    "Pedidos e informações",
    "email"
)}

${contact(
    icon("location"),
    "Localização",
    "Cassequel–Teixeira, Luanda",
    "Angola",
    "location"
)}

${contact(
    icon("clock"),
    "Horário de atendimento",
    "Segunda a Sábado",
    "08h00–18h00",
    "clock"
)}

</div>

</div>

</section>

`;

}

function contact(iconSvg,title,value,description,type){

return `

<div class="card reveal contact-card">

    <div class="between">

        <div class="service-icon">

            ${iconSvg}

        </div>

        <span class="contact-arrow">

            ${icon("arrow")}

        </span>

    </div>

    <h3 class="mt-2">

        ${title}

    </h3>

    <p class="text mt-1">

        ${value}

    </p>

    <small class="text contact-description">

        ${description}

    </small>

</div>

`;

}

/* ==========================================================
   LOCALIZAÇÃO
   ========================================================== */

function location(){

return `

<section class="section">

<div class="container">

<div class="section-center reveal">

<span class="label">

Onde estamos

</span>

<h2 class="section-title">

Visite a AD Lifestyle

</h2>

<p class="text mt-2">

Encontre-nos em Luanda através das coordenadas oficiais
da nossa localização.

</p>

</div>

<div class="split mt-5">

    <div class="split-content reveal-left">

        <span class="badge badge-gold">

            Localização oficial

        </span>

        <h3 class="section-title mt-2">

            Cassequel–Teixeira

        </h3>

        <p class="text mt-2">

            Luanda, Angola

        </p>

        <div class="location-details mt-4">

            <div class="icon-item">

                <div class="icon-circle">

                    ${icon("location")}

                </div>

                <div>

                    <strong>Coordenadas</strong>

                    <p class="text">

                        8°50'06.90"S 13°13'38.93"E

                    </p>

                </div>

            </div>

            <div class="icon-item">

                <div class="icon-circle">

                    ${icon("navigation")}

                </div>

                <div>

                    <strong>Referência</strong>

                    <p class="text">

                        Cassequel–Teixeira, Luanda

                    </p>

                </div>

            </div>

            <div class="hero-actions mt-4">

                <button
                    class="btn btn-primary"
                    data-action="maps">

                    ${icon("navigation")}

                    Abrir no Google Maps

                </button>

            </div>

        </div>

    </div>

    <div class="split-image reveal-right">

        <div class="map-card">

            <div class="map-header">

                <div>

                    <span class="label">

                        LOCALIZAÇÃO

                    </span>

                    <strong>

                        AD Lifestyle

                    </strong>

                </div>

                <span class="map-pin">

                    ${icon("location")}

                </span>

            </div>

            <div class="map-frame">

                <iframe
                    title="Localização da AD Lifestyle"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.22148%2C-8.84125%2C13.23348%2C-8.82925&layer=mapnik&marker=-8.83525%2C13.22748"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>

            </div>

            <div class="map-footer">

                <span>

                    ${icon("location")}

                    Cassequel–Teixeira · Luanda

                </span>

                <span>

                    ${icon("check")}

                    Localização oficial

                </span>

            </div>

        </div>

    </div>

</div>

</div>

</section>

`;

}

/* ==========================================================
   FORMULÁRIO
   ========================================================== */

function form(){

return `

<section class="section" id="contact-form">

<div class="container-sm">

<div class="glass-panel">

<div class="section-center">

<span class="label">

Mensagem

</span>

<h2 class="section-title">

Envie-nos uma mensagem

</h2>

<p class="text mt-2">

Preencha os seus dados e entraremos em contacto consigo
através do WhatsApp.

</p>

</div>

<form id="contactForm" class="mt-5">

<div class="grid grid-2">

<div class="input-group">

<label for="name">

Nome

</label>

<input
type="text"
class="input"
id="name"
placeholder="O seu nome">

</div>

<div class="input-group">

<label for="phone">

Telefone

</label>

<input
type="tel"
class="input"
id="phone"
placeholder="+244">

</div>

</div>

<div class="input-group mt-3">

<label for="email">

E-mail

</label>

<input
type="email"
class="input"
id="email"
placeholder="exemplo@email.com">

</div>

<div class="input-group mt-3">

<label for="subject">

Assunto

</label>

<input
type="text"
class="input"
id="subject"
placeholder="Como podemos ajudar?">

</div>

<div class="input-group mt-3">

<label for="message">

Mensagem

</label>

<textarea
class="input textarea"
id="message"
placeholder="Escreva aqui a sua mensagem..."></textarea>

</div>

<div class="center mt-4">

<button
type="submit"
class="btn btn-primary">

${icon("whatsapp")}

Enviar para WhatsApp

</button>

</div>

</form>

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

<section class="section-sm">

<div class="container-sm">

<div class="section-center">

<span class="label">

Perguntas Frequentes

</span>

<h2 class="section-title">

Antes de nos contactar

</h2>

<p class="text mt-2">

Algumas respostas rápidas para as questões mais frequentes.

</p>

</div>

<div class="faq mt-5">

${question(
"Como posso comprar os produtos?",
"Pode adquirir os nossos produtos através do WhatsApp ou junto de um distribuidor oficial."
)}

${question(
"Realizam entregas em Luanda?",
"Sim. As entregas são organizadas de acordo com a disponibilidade e localização."
)}

${question(
"Como participar nos eventos?",
"Basta reservar o seu lugar através do WhatsApp e efectuar a confirmação da inscrição."
)}

${question(
"Posso tornar-me parceiro?",
"Sim. Entre em contacto connosco para conhecer a oportunidade de negócios internacionais."
)}

</div>

</div>

</section>

`;

}

function question(q,a){

return `

<div class="faq-item">

<button
class="faq-question"
type="button">

<span>

${q}

</span>

<span class="faq-plus">

+

</span>

</button>

<div class="faq-answer">

<p>

${a}

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

<section class="section">

<div class="container">

<div class="showcase">

<div class="showcase-bg"></div>

<div class="showcase-content section-center">

<span class="badge badge-gold">

AD Lifestyle

</span>

<h2 class="section-title mt-2">

Vamos crescer juntos.

</h2>

<p class="text-lg">

A sua jornada de saúde, bem-estar e desenvolvimento
começa com uma simples conversa.

</p>

<div class="hero-actions center mt-4">

<button
class="btn btn-primary"
data-action="whatsapp">

${icon("whatsapp")}

Iniciar Conversa

</button>

</div>

</div>

</div>

</div>

</section>

`;

}

/* ==========================================================
   ÍCONES SVG
   ========================================================== */

function icon(type){

    const icons = {

        whatsapp: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0
                C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.1 1.6 5.8L.1 24
                l6.5-1.7a11.9 11.9 0 0 0 5.5 1.4h.1
                c6.6 0 11.9-5.3 11.9-11.9
                0-3.2-1.3-6.1-3.6-8.3Z
                M12.2 21.6h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.9 1
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
                <path d="M20 4H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16
                a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm0 2
                .5 0L12 12.6 3.5 6H20ZM4 18a1 1 0 0 1-1-1V8
                l7.8 5.9a2 2 0 0 0 2.4 0L21 8v9a1 1 0 0 1-1 1H4Z"/>
            </svg>
        `,

        location: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1.5A8.5 8.5 0 0 0 3.5 10
                c0 6.1 8.5 12.5 8.5 12.5S20.5 16.1 20.5 10
                A8.5 8.5 0 0 0 12 1.5Zm0 18.1
                C9.5 17.5 5.5 13.3 5.5 10a6.5 6.5 0 1 1 13 0
                c0 3.3-4 7.5-6.5 9.6Zm0-13.1
                A3.5 3.5 0 1 0 12 13.5 3.5 3.5 0 0 0 12 6.5Zm0 5
                a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
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
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18
                a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm1-13h-2v6l5 3 1-1.7-4-2.3V7Z"/>
            </svg>
        `,

        message: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3v3
                l4-3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 12
                a1 1 0 0 1-1 1h-9.7L9 17.5V16H4a1 1 0 0 1-1-1V6
                a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9Z"/>
            </svg>
        `,

        arrow: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 5 7 7-7 7 1.4 1.4L18.8 12l-8.4-8.4L9 5Z"/>
            </svg>
        `,

        check: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9.2 16.2-4.4-4.4-1.4 1.4 5.8 5.8
                11.4-11.4-1.4-1.4-10 10Z"/>
            </svg>
        `

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

    const items=document.querySelectorAll(".faq-item");

    items.forEach(item=>{

        const button=item.querySelector(".faq-question");

        button.addEventListener("click",()=>{

            items.forEach(other=>{

                if(other!==item){

                    other.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

}

/* ==========================================================
   SCROLL
   ========================================================== */

function initialiseScroll(){

    document
        .querySelector('[data-action="form"]')
        ?.addEventListener("click",()=>{

            document
                .getElementById("contact-form")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

}

/* ==========================================================
   WHATSAPP
   ========================================================== */

function initialiseWhatsApp(){

    document
        .querySelectorAll('[data-action="whatsapp"]')
        .forEach(button=>{

            button.addEventListener("click",()=>{

                window.open(
                    "https://wa.me/244924964666",
                    "_blank"
                );

            });

        });

}

/* ==========================================================
   GOOGLE MAPS
   ========================================================== */

function initialiseMaps(){

    document
        .querySelector('[data-action="maps"]')
        ?.addEventListener("click",()=>{

            window.open(
                "https://www.google.com/maps?q=8.83525,-13.22748",
                "_blank"
            );

        });

}

/* ==========================================================
   FORMULÁRIO
   ========================================================== */

function initialiseForm(){

    const form=document.getElementById("contactForm");

    if(!form) return;

    form.addEventListener("submit",e=>{

        e.preventDefault();

        const name=document.getElementById("name").value.trim();
        const phone=document.getElementById("phone").value.trim();
        const email=document.getElementById("email").value.trim();
        const subject=document.getElementById("subject").value.trim();
        const message=document.getElementById("message").value.trim();

        const text=encodeURIComponent(

`Olá AD Lifestyle!

Nome: ${name}
Telefone: ${phone}
Email: ${email}

Assunto:
${subject}

Mensagem:
${message}`

        );

        window.open(
            `https://wa.me/244924964666?text=${text}`,
            "_blank"
        );

    });

}
