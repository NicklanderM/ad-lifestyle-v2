/* ==========================================================
   AD LIFESTYLE — EVENTS.JS
   Premium Events Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";

export function loadEvents(){

    applyTheme("angel");

    const app = document.getElementById("app");

    app.innerHTML = `
        ${hero()}
        ${overview()}
        ${schedule()}
        ${speakers()}
        ${venue()}
        ${tickets()}
        ${cta()}
    `;

    initialiseEvents();

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

                Evento Oficial AD Lifestyle

            </span>

            <h1 class="hero-title">

                Grande Apresentação de
                Dupla Oportunidade

            </h1>

            <p class="hero-sub">

                Saúde, Bem-estar, Longevidade e Negócios
                Internacionais com BZZWorld & Academy 21.

            </p>

            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    data-action="ticket">

                    Reservar Lugar

                </button>

                <button
                    class="btn btn-glass"
                    data-action="schedule">

                    Ver Programa

                </button>

            </div>

        </div>

        <div class="hero-visual">

            <div class="hero-product">

                <div class="product-glow"></div>

                <img
                    src="assets/hotel/fly.png"
                    alt="Evento Fly Hotel">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   VISÃO GERAL
   ========================================================== */

function overview(){

return `

<section class="section">

<div class="container">

<div class="section-center reveal">

<span class="label">

Informações Gerais

</span>

<h2 class="section-title">

Tudo o que precisa de saber

</h2>

</div>

<div class="grid grid-4 mt-5">

${info("📅","Data","20 de Setembro 2026")}

${info("🕒","Horário","15h00")}

${info("📍","Local","Fly Hotel")}

${info("🎟️","Ingresso","2.500 Kz")}

</div>

</div>

</section>

`;

}

function info(icon,title,value){

return `

<div class="stat-card reveal">

<div class="service-icon">${icon}</div>

<h3>${title}</h3>

<p class="text mt-1">${value}</p>

</div>

`;

}

/* ==========================================================
   CRONOGRAMA
   ========================================================== */

function schedule(){

return `

<section class="section" id="schedule">

<div class="container">

<div class="section-center reveal">

<span class="label">

Cronograma

</span>

<h2 class="section-title">

Programa Oficial

</h2>

</div>

<div class="timeline mt-5">

${agenda("15h00","Recepção & Credenciamento")}

${agenda("15h30","Abertura Oficial")}

${agenda("16h00","Saúde & Medicina Holística")}

${agenda("16h45","Apresentação BZZWorld")}

${agenda("17h30","Academy 21 & Liderança")}

${agenda("18h00","Networking & Encerramento")}

</div>

</div>

</section>

`;

}

function agenda(hour,title){

return `

<div class="timeline-item reveal">

<div class="timeline-dot">

🕒

</div>

<div class="timeline-content">

<span class="badge">${hour}</span>

<h3 class="mt-2">${title}</h3>

</div>

</div>

`;

}

/* ==========================================================
   ORADORES
   ========================================================== */

function speakers(){

return `

<section class="section-sm">

<div class="container">

<div class="section-center reveal">

<span class="label">

Participação Especial

</span>

<h2 class="section-title">

Oradores do Evento

</h2>

</div>

<div class="grid grid-3 mt-5">

${speaker(
"Dr. Mike Mahindo",
"Medicina Holística",
"assets/images/2.png"
)}

${speaker(
"A. Abdoulahi",
"Liderança",
"assets/images/1.png"
)}

${speaker(
"Academy 21",
"Desenvolvimento Humano",
"assets/images/a21.png"
)}

</div>

</div>

</section>

`;

}

function speaker(name,role,image){

return `

<div class="card reveal service-card">

<div class="avatar" style="margin:auto">

<img src="${image}" alt="${name}">

</div>

<h3 class="mt-3">${name}</h3>

<p class="text">${role}</p>

</div>

`;

}

/* ==========================================================
   LOCAL
   ========================================================== */

function venue(){

return `

<section class="section">

<div class="container">

<div class="split">

<div class="split-content reveal-left">

<span class="label">

Local do Evento

</span>

<h2 class="section-title">

Fly Hotel
Luanda

</h2>

<p class="text mt-3">

Sala de Conferências do Fly Hotel,
ao lado da área de desembarque do antigo
Aeroporto Doméstico.

</p>

<div class="icon-list mt-4">

${feature("Estacionamento disponível")}

${feature("Sala climatizada")}

${feature("Acesso facilitado")}

${feature("Ambiente executivo")}

</div>

</div>

<div class="split-image reveal-right">

<img
src="assets/hotel/fly.png"
alt="Fly Hotel">

</div>

</div>

</div>

</section>

`;

}

function feature(text){

return `

<div class="icon-item">

<div class="icon-circle">✓</div>

<div><strong>${text}</strong></div>

</div>

`;

}

/* ==========================================================
   BILHETES
   ========================================================== */

function tickets(){

return `

<section class="section">

<div class="container">

<div class="section-center reveal">

<span class="label">

Bilhetes

</span>

<h2 class="section-title">

Reserve o seu lugar

</h2>

</div>

<div class="showcase mt-5">

<div class="showcase-bg"></div>

<div class="showcase-content">

<div class="between">

<div>

<h2 class="display">2.500 Kz</h2>

<p class="text">

Ingresso individual para participação completa.

</p>

</div>

<button
class="btn btn-secondary"
data-action="ticket">

Reservar Agora

</button>

</div>

</div>

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

<section class="section">

<div class="container">

<div class="glass-panel section-center">

<span class="badge badge-gold">

Esperamos por si

</span>

<h2 class="section-title mt-2">

Faça parte desta experiência

</h2>

<p class="text-lg">

Convide familiares, amigos e colegas para descobrir
uma nova visão sobre saúde e desenvolvimento pessoal.

</p>

<div class="hero-actions center mt-4">

<button
class="btn btn-primary"
data-action="ticket">

Reservar Lugar

</button>

<button
class="btn btn-outline"
data-action="share">

Partilhar Evento

</button>

</div>

</div>

</div>

</section>

`;

}

/* ==========================================================
   INTERACTIVIDADE
   ========================================================== */

function initialiseEvents(){

    initialiseSchedule();

    initialiseReservation();

    initialiseShare();

}

function initialiseSchedule(){

    document
        .querySelector('[data-action="schedule"]')
        ?.addEventListener("click",()=>{

            document
                .getElementById("schedule")
                ?.scrollIntoView({
                    behavior:"smooth"
                });

        });

}

function initialiseReservation(){

    document
        .querySelectorAll('[data-action="ticket"]')
        .forEach(button=>{

            button.addEventListener("click",()=>{

                const message = encodeURIComponent(
                    "Olá AD Lifestyle! Gostaria de reservar um lugar para o Grande Evento de Dupla Oportunidade."
                );

                window.open(
                    `https://wa.me/244924964666?text=${message}`,
                    "_blank"
                );

            });

        });

}

function initialiseShare(){

    document
        .querySelector('[data-action="share"]')
        ?.addEventListener("click",()=>{

            const text = encodeURIComponent(
                "Grande Apresentação de Dupla Oportunidade — 20 de Setembro de 2026, Fly Hotel, Luanda. Junta-te a nós!"
            );

            window.open(
                `https://wa.me/?text=${text}`,
                "_blank"
            );

        });

}