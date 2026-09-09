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

                    WhatsApp

                </button>

                <button
                    class="btn btn-glass"
                    data-action="form">

                    Enviar Mensagem

                </button>

            </div>

        </div>

        <div class="hero-visual">

            <div class="hero-product">

                <div class="product-glow"></div>

                <img
                    src="assets/images/contact-hero.png"
                    alt="Contacto">

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

</div>

<div class="grid grid-2 mt-5">

${contact(
"📱",
"WhatsApp",
"+244 924 964 666"
)}

${contact(
"📧",
"E-mail",
"adbzzworlddistribuidor@email.com"
)}

${contact(
"📍",
"Localização",
"Luanda, Angola"
)}

${contact(
"🕒",
"Horário",
"Segunda a Sábado · 08h00–18h00"
)}

</div>

</div>

</section>

`;

}

function contact(icon,title,value){

return `

<div class="card reveal">

<div class="between">

<div class="service-icon">${icon}</div>

</div>

<h3 class="mt-2">${title}</h3>

<p class="text mt-1">${value}</p>

</div>

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

</div>

<form id="contactForm" class="mt-5">

<div class="grid grid-2">

<div class="input-group">

<label>Nome</label>

<input
type="text"
class="input"
id="name"
placeholder="O seu nome">

</div>

<div class="input-group">

<label>Telefone</label>

<input
type="tel"
class="input"
id="phone"
placeholder="+244">

</div>

</div>

<div class="input-group mt-3">

<label>E-mail</label>

<input
type="email"
class="input"
id="email"
placeholder="exemplo@email.com">

</div>

<div class="input-group mt-3">

<label>Assunto</label>

<input
type="text"
class="input"
id="subject"
placeholder="Como podemos ajudar?">

</div>

<div class="input-group mt-3">

<label>Mensagem</label>

<textarea
class="input textarea"
id="message"
placeholder="Escreva aqui a sua mensagem..."></textarea>

</div>

<div class="center mt-4">

<button
type="submit"
class="btn btn-primary">

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
   INTERACTIVIDADE
   ========================================================== */

function initialiseContact(){

    initialiseFAQ();

    initialiseWhatsApp();

    initialiseForm();

    initialiseScroll();

}

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

function initialiseForm(){

    const form=document.getElementById("contactForm");

    if(!form) return;

    form.addEventListener("submit",e=>{

        e.preventDefault();

        const name=document.getElementById("name").value;
        const phone=document.getElementById("phone").value;
        const email=document.getElementById("email").value;
        const subject=document.getElementById("subject").value;
        const message=document.getElementById("message").value;

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