/* ==========================================================
   AD LIFESTYLE — SERVICES.JS
   Luxury Services Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";

export function loadServices(){

     applyTheme("default");

    const app = document.getElementById("app");

    app.innerHTML = `
        ${hero()}
        ${philosophy()}
        ${services()}
        ${process()}
        ${academy()}
        ${cta()}
    `;

    initialiseServices();

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

                AD Lifestyle Services

            </span>

            <h1 class="hero-title">

                Cuidamos da sua saúde,
                crescimento e futuro.

            </h1>

            <p class="hero-sub">

                Muito mais do que produtos: oferecemos
                consultoria, educação, desenvolvimento pessoal
                e oportunidades de negócios internacionais.

            </p>

            <div class="hero-actions">

                <button
                    class="btn btn-primary"
                    data-action="contact">

                    Falar Connosco

                </button>

                <button
                    class="btn btn-glass"
                    data-action="services">

                    Explorar

                </button>

            </div>

        </div>

        <div class="hero-visual">

            <div class="hero-product">

                <div class="product-glow"></div>

                <img
                    src="assets/images/services-hero.png"
                    alt="Serviços AD Lifestyle">

            </div>

        </div>

    </div>

</section>

`;

}

/* ==========================================================
   FILOSOFIA
   ========================================================== */

function philosophy(){

return `

<section class="section">

<div class="container">

<div class="split">

<div class="split-content reveal-left">

<span class="label">

A Nossa Filosofia

</span>

<h2 class="section-title">

Uma abordagem integrada
ao bem-estar.

</h2>

<p class="text mt-3">

Acreditamos que saúde, educação, equilíbrio emocional
e prosperidade caminham lado a lado. Por isso,
desenvolvemos um ecossistema onde cada pessoa pode
crescer física, mental e financeiramente.

</p>

<div class="icon-list mt-4">

${value("Saúde Preventiva")}

${value("Medicina Holística")}

${value("Educação Contínua")}

${value("Liderança e Negócios")}

</div>

</div>

<div class="split-image reveal-right">

<img
src="assets/images/philosophy.png"
alt="Filosofia AD Lifestyle">

</div>

</div>

</div>

</section>

`;

}

/* ==========================================================
   SERVIÇOS
   ========================================================== */

function services(){

return `

<section class="section" id="services">

<div class="container">

<div class="section-center reveal">

<span class="label">

Áreas de Actuação

</span>

<h2 class="section-title">

Como podemos ajudá-lo?

</h2>

</div>

<div class="grid grid-2 mt-5">

${service(
"🩺",
"Consultoria em Bem-estar",
"Orientação personalizada para um estilo de vida mais saudável."
)}

${service(
"🌿",
"Medicina Holística",
"Produtos naturais seleccionados para promover equilíbrio e qualidade de vida."
)}

${service(
"🎓",
"Academy 21",
"Formação em liderança, comunicação, empreendedorismo e desenvolvimento pessoal."
)}

${service(
"🌍",
"Negócios Internacionais",
"Oportunidades de crescimento através da comunidade BZZWorld e Academy 21."
)}

</div>

</div>

</section>

`;

}

/* ==========================================================
   PROCESSO
   ========================================================== */

function process(){

return `

<section class="section-sm">

<div class="container">

<div class="section-center reveal">

<span class="label">

O Nosso Método

</span>

<h2 class="section-title">

Um processo simples e eficaz

</h2>

</div>

<div class="timeline mt-5">

${step(
"1",
"Diagnóstico",
"Compreendemos os seus objectivos e necessidades."
)}

${step(
"2",
"Orientação",
"Indicamos os produtos e serviços mais adequados."
)}

${step(
"3",
"Acompanhamento",
"Prestamos suporte contínuo ao longo da sua jornada."
)}

${step(
"4",
"Resultados",
"Crescimento sustentável em saúde e desenvolvimento."
)}

</div>

</div>

</section>

`;

}

/* ==========================================================
   ACADEMY 21
   ========================================================== */

function academy(){

return `

<section class="section">

<div class="container">

<div class="showcase">

<div class="showcase-bg"></div>

<div class="showcase-content">

<div class="split">

<div class="split-content">

<span class="badge">

                Academy 21

</span>

<h2 class="section-title mt-2">

Liderança, Oratória e
Empreendedorismo

</h2>

<p class="text mt-3">

A Academy 21 desenvolve competências de comunicação,
liderança e inteligência empresarial para pessoas que
pretendem crescer profissionalmente.

</p>

<div class="icon-list mt-4">

${value("Cursos de Oratória")}

${value("Liderança")}

${value("Desenvolvimento Pessoal")}

${value("Empreendedorismo")}

</div>

</div>

<div class="split-image">

<img
src="assets/images/academy21.png"
alt="Academy 21">

</div>

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

Pronto para começar?

</span>

<h2 class="section-title mt-2">

Vamos construir o seu
próximo nível.

</h2>

<p class="text-lg">

Entre em contacto connosco e descubra como a AD Lifestyle
pode transformar a sua vida através da saúde e do conhecimento.

</p>

<div class="hero-actions center mt-4">

<button
class="btn btn-primary"
data-action="whatsapp">

WhatsApp

</button>

<button
class="btn btn-outline"
data-action="contact">

Contacto

</button>

</div>

</div>

</div>

</section>

`;

}

/* ==========================================================
   COMPONENTES
   ========================================================== */

function service(icon,title,description){

return `

<div class="card reveal lift service-card">

<div class="service-icon">

${icon}

</div>

<h3>${title}</h3>

<p class="text mt-2">

${description}

</p>

</div>

`;

}

function value(text){

return `

<div class="icon-item">

<div class="icon-circle">

✓

</div>

<div>

<strong>${text}</strong>

</div>

</div>

`;

}

function step(number,title,description){

return `

<div class="timeline-item reveal">

<div class="timeline-dot">

${number}

</div>

<div class="timeline-content">

<h3>${title}</h3>

<p class="text">

${description}

</p>

</div>

</div>

`;

}

/* ==========================================================
   INTERACTIVIDADE
   ========================================================== */

function initialiseServices(){

    initialiseNavigation();

    initialiseWhatsApp();

}

function initialiseNavigation(){

    document
        .querySelector('[data-action="services"]')
        ?.addEventListener("click",()=>{

            document
                .getElementById("services")
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

                const message = encodeURIComponent(
                    "Olá AD Lifestyle! Gostaria de obter mais informações sobre os vossos serviços."
                );

                window.open(
                    `https://wa.me/244924964666?text=${message}`,
                    "_blank"
                );

            });

        });

}
