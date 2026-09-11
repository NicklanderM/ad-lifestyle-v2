
```javascript
/* ==========================================================
   AD LIFESTYLE — EVENTS.JS
   Premium Events Page
   ----------------------------------------------------------
   Sistema:
   - Hero dinâmico
   - Evento mais próximo
   - Timeline cronológica
   - Eventos passados / actuais / futuros
   - Memórias sociais
   - Modal de detalhes
   - Reserva WhatsApp
   - Partilha
   ========================================================== */

import { applyTheme } from "../js/theme.js";


/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";

const SOCIALS = {
    instagram: "https://www.instagram.com/ad.ambassadoracademy21/",
    facebook: "https://web.facebook.com/ad.ambassadoracademy21/",
    tiktok: "https://www.tiktok.com/@adbdlifestyle"
};


/* ==========================================================
   BASE DE DADOS DOS EVENTOS
   ========================================================== */

const EVENTS_DATA = [

    /* ======================================================
       EVENTO PASSADO
       ====================================================== */

    {
        id: "dupla-oportunidade-agosto-2026",

        title: "Dupla Oportunidade",

        shortTitle: "Dupla Oportunidade",

        subtitle:
            "Saúde, bem-estar, longevidade e oportunidades de negócio.",

        description:
            "Um encontro dedicado à descoberta de novas perspectivas sobre saúde, bem-estar, desenvolvimento pessoal e oportunidades de negócio internacional.",

        dateLabel:
            "08 de Agosto de 2026",

        start:
            "2026-08-08T15:00:00",

        end:
            "2026-08-08T19:00:00",

        timeLabel:
            "15h00",

        location:
            "Fly Hotel — Luanda",

        venue:
            "Sala de Conferências do Fly Hotel",

        category:
            "Experiência AD Lifestyle",

        image:
            "assets/hotel/fly.png",

        price:
            "2.500 Kz",

        status:
            "past",

        memoryUrl:
            "",

        descriptionShort:
            "Uma experiência marcada por conhecimento, networking e novas perspectivas.",

        highlights: [

            "Saúde e bem-estar",

            "Medicina holística",

            "Negócios internacionais",

            "Networking"

        ]

    },


    /* ======================================================
       EVENTO PRÓXIMO
       ====================================================== */

    {
        id:
            "grande-apresentacao-setembro-2026",

        title:
            "Grande Apresentação de Dupla Oportunidade",

        shortTitle:
            "Grande Apresentação de Dupla Oportunidade",

        subtitle:
            "Saúde, Bem-estar, Longevidade e Negócios Internacionais.",

        description:
            "Uma apresentação especial da BZZWorld e Academy 21, criada para apresentar novas perspectivas sobre saúde, desenvolvimento humano, liderança e oportunidades de negócio.",

        dateLabel:
            "20 de Setembro de 2026",

        start:
            "2026-09-20T15:00:00",

        end:
            "2026-09-20T19:00:00",

        timeLabel:
            "15h00",

        location:
            "Fly Hotel — Luanda",

        venue:
            "Sala de Conferências do Fly Hotel",

        category:
            "Evento Oficial AD Lifestyle",

        image:
            "assets/hotel/fly.png",

        price:
            "2.500 Kz",

        status:
            "upcoming",

        memoryUrl:
            "",

        descriptionShort:
            "Saúde, bem-estar, longevidade, liderança e negócios internacionais.",

        highlights: [

            "Saúde",

            "Bem-estar",

            "Longevidade",

            "Negócios internacionais"

        ],

        speakers: [

            "Dr. Mike Mahindo",

            "A. Abdoulahi",

            "Academy 21"

        ]

    }

];


/* ==========================================================
   ENTRADA PRINCIPAL
   ========================================================== */

export function loadEvents(){

    applyTheme("angel");

    const app =
        document.getElementById("app");


    if(!app){

        console.error(
            "AD Lifestyle Events: elemento #app não encontrado."
        );

        return;

    }


    app.innerHTML = `

        ${hero()}

        ${eventsTimeline()}

        ${overview()}

        ${schedule()}

        ${speakers()}

        ${venue()}

        ${tickets()}

        ${cta()}

        ${eventModal()}

    `;


    initialiseEvents();

}


/* ==========================================================
   UTILITÁRIOS DE DATA
   ========================================================== */

function getEventState(event){

    const now =
        new Date();

    const start =
        new Date(event.start);

    const end =
        new Date(event.end);


    if(now < start){

        return "upcoming";

    }


    if(
        now >= start &&
        now <= end
    ){

        return "live";

    }


    return "past";

}


/* ==========================================================
   EVENTOS ORDENADOS
   ========================================================== */

function getSortedEvents(){

    return [...EVENTS_DATA].sort(

        (a,b) =>

            new Date(a.start) -
            new Date(b.start)

    );

}


/* ==========================================================
   EVENTO MAIS PRÓXIMO
   ========================================================== */

function getNearestEvent(){

    const now =
        new Date();


    const upcoming =
        EVENTS_DATA

            .filter(
                event =>
                    new Date(event.start) > now
            )

            .sort(
                (a,b) =>
                    new Date(a.start) -
                    new Date(b.start)
            );


    if(upcoming.length){

        return upcoming[0];

    }


    const live =
        EVENTS_DATA

            .filter(event => {

                const start =
                    new Date(event.start);

                const end =
                    new Date(event.end);

                return (
                    now >= start &&
                    now <= end
                );

            });


    if(live.length){

        return live[0];

    }


    return EVENTS_DATA
        .slice()
        .sort(
            (a,b) =>
                new Date(b.start) -
                new Date(a.start)
        )[0];

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    const event =
        getNearestEvent();


    if(!event){

        return `

            <section class="hero page">

                <div class="container">

                    <div class="hero-content">

                        <h1 class="hero-title">
                            Eventos AD Lifestyle
                        </h1>

                        <p class="hero-sub">
                            Experiências que conectam pessoas,
                            conhecimento e oportunidades.
                        </p>

                    </div>

                </div>

            </section>

        `;

    }


    const state =
        getEventState(event);


    const stateLabel =
        getStateLabel(state);


    const stateClass =
        getStateClass(state);


    return `

<section class="hero page">

    <div class="aurora">

        <div class="blob blob-1"></div>

        <div class="blob blob-2"></div>

        <div class="blob blob-3"></div>

    </div>


    <div class="container hero-grid">

        <div class="hero-content">

            <span class="badge ${stateClass}">

                ${stateLabel}

            </span>


            <h1 class="hero-title">

                ${event.title}

            </h1>


            <p class="hero-sub">

                ${event.subtitle}

            </p>


            <div class="hero-meta">

                <span>
                    📅 ${event.dateLabel}
                </span>

                <span>
                    🕒 ${event.timeLabel}
                </span>

                <span>
                    📍 ${event.location}
                </span>

            </div>


            <div class="hero-actions">

                ${
                    state === "past"

                    ?

                    `

                    <button
                        class="btn btn-primary"
                        data-action="memory"
                        data-event-id="${event.id}">

                        Ver Memórias

                    </button>

                    `

                    :

                    `

                    <button
                        class="btn btn-primary"
                        data-action="ticket">

                        Reservar Lugar

                    </button>

                    `
                }


                <button
                    class="btn btn-glass"
                    data-action="timeline">

                    Explorar Eventos

                </button>

            </div>

        </div>


        <div class="hero-visual">

            <div class="hero-product">

                <div class="product-glow"></div>

                <img
                    src="${event.image}"
                    alt="${event.title}">

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   TIMELINE
   ========================================================== */

function eventsTimeline(){

    const events =
        getSortedEvents();


    return `

<section
    class="section events-history"
    id="events-history">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Jornada AD Lifestyle
            </span>


            <h2 class="section-title">
                Eventos & Memórias
            </h2>


            <p class="text-lg mt-2">

                Uma linha do tempo das experiências que
                construímos juntos — das que já aconteceram
                às que ainda estão por vir.

            </p>

        </div>


        <div class="events-timeline mt-5">

            ${
                events

                    .map(
                        event =>
                            timelineEvent(event)
                    )

                    .join("")
            }

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   ITEM DA TIMELINE
   ========================================================== */

function timelineEvent(event){

    const state =
        getEventState(event);


    const stateLabel =
        getStateLabel(state);


    const stateClass =
        getStateClass(state);


    const date =
        formatTimelineDate(event.start);


    return `

<div
    class="event-timeline-item ${stateClass} reveal"
    data-event-id="${event.id}">


    <div class="event-timeline-marker">

        <span></span>

    </div>


    <div class="event-timeline-date">

        <strong>
            ${date.day}
        </strong>

        <span>
            ${date.month}
        </span>

        <small>
            ${date.year}
        </small>

    </div>


    <article class="event-timeline-card">


        <div class="event-timeline-image">

            <img
                src="${event.image}"
                alt="${event.title}">


            <span class="event-status ${stateClass}">

                ${stateLabel}

            </span>

        </div>


        <div class="event-timeline-content">

            <span class="label">

                ${event.category}

            </span>


            <h3>
                ${event.shortTitle}
            </h3>


            <p class="text">

                ${event.descriptionShort}

            </p>


            <div class="event-mini-info">

                <span>
                    🕒 ${event.timeLabel}
                </span>

                <span>
                    📍 ${event.location}
                </span>

            </div>


            <div class="event-card-actions">


                <button
                    class="btn btn-outline btn-small"
                    data-action="details"
                    data-event-id="${event.id}">

                    Ver detalhes

                </button>


                ${
                    state === "past"

                    ?

                    `

                    <button
                        class="btn btn-glass btn-small"
                        data-action="memory"
                        data-event-id="${event.id}">

                        ✦ Ver Memórias

                    </button>

                    `

                    :

                    `

                    <button
                        class="btn btn-primary btn-small"
                        data-action="event-ticket">

                        Participar

                    </button>

                    `
                }

            </div>

        </div>

    </article>

</div>

`;

}


/* ==========================================================
   ESTADOS
   ========================================================== */

function getStateLabel(state){

    switch(state){

        case "live":

            return "A decorrer agora";


        case "past":

            return "Evento realizado";


        default:

            return "Próximo evento";

    }

}


function getStateClass(state){

    switch(state){

        case "live":

            return "event-live";


        case "past":

            return "event-past";


        default:

            return "event-upcoming";

    }

}


/* ==========================================================
   DATA FORMATADA
   ========================================================== */

function formatTimelineDate(dateString){

    const date =
        new Date(dateString);


    const months = [

        "JAN",
        "FEV",
        "MAR",
        "ABR",
        "MAI",
        "JUN",
        "JUL",
        "AGO",
        "SET",
        "OUT",
        "NOV",
        "DEZ"

    ];


    return {

        day:
            String(
                date.getDate()
            ).padStart(2,"0"),

        month:
            months[
                date.getMonth()
            ],

        year:
            date.getFullYear()

    };

}


/* ==========================================================
   VISÃO GERAL
   ========================================================== */

function overview(){

    const event =
        getNearestEvent();


    if(!event){

        return "";

    }


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

${info(
    "📅",
    "Data",
    event.dateLabel
)}


${info(
    "🕒",
    "Horário",
    event.timeLabel
)}


${info(
    "📍",
    "Local",
    event.location
)}


${info(
    "🎟️",
    "Ingresso",
    event.price
)}

</div>

</div>

</section>

`;

}


function info(
    icon,
    title,
    value
){

    return `

<div class="stat-card reveal">

<div class="service-icon">

${icon}

</div>


<h3>
${title}
</h3>


<p class="text mt-1">

${value}

</p>

</div>

`;

}


/* ==========================================================
   CRONOGRAMA
   ========================================================== */

function schedule(){

    return `

<section
    class="section"
    id="schedule">

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

${agenda(
    "15h00",
    "Recepção & Credenciamento"
)}


${agenda(
    "15h30",
    "Abertura Oficial"
)}


${agenda(
    "16h00",
    "Saúde & Medicina Holística"
)}


${agenda(
    "16h45",
    "Apresentação BZZWorld"
)}


${agenda(
    "17h30",
    "Academy 21 & Liderança"
)}


${agenda(
    "18h00",
    "Networking & Encerramento"
)}

</div>

</div>

</section>

`;

}


function agenda(
    hour,
    title
){

    return `

<div class="timeline-item reveal">

<div class="timeline-dot">
🕒
</div>


<div class="timeline-content">

<span class="badge">
${hour}
</span>


<h3 class="mt-2">
${title}
</h3>

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


function speaker(
    name,
    role,
    image
){

    return `

<div class="card reveal service-card">

<div
    class="avatar"
    style="margin:auto">

<img
    src="${image}"
    alt="${name}">

</div>


<h3 class="mt-3">
${name}
</h3>


<p class="text">
${role}
</p>

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

${feature(
    "Estacionamento disponível"
)}


${feature(
    "Sala climatizada"
)}


${feature(
    "Acesso facilitado"
)}


${feature(
    "Ambiente executivo"
)}

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

<div class="icon-circle">
✓
</div>


<div>
<strong>
${text}
</strong>
</div>

</div>

`;

}


/* ==========================================================
   BILHETES
   ========================================================== */

function tickets(){

    const event =
        getNearestEvent();


    if(!event){

        return "";

    }


    const state =
        getEventState(event);


    if(state === "past"){

        return `

<section class="section">

<div class="container">

<div class="glass-panel section-center reveal">

<span class="badge">
Experiência AD Lifestyle
</span>


<h2 class="section-title mt-2">
Explore as nossas memórias
</h2>


<p class="text-lg">

Reviva momentos de eventos anteriores e
acompanhe as próximas experiências.

</p>


<button
    class="btn btn-primary mt-4"
    data-action="timeline">

    Ver Linha do Tempo

</button>

</div>

</div>

</section>

`;

    }


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

<h2 class="display">
${event.price}
</h2>


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

    const event =
        getNearestEvent();


    const state =
        event
            ? getEventState(event)
            : "past";


    return `

<section class="section">

<div class="container">

<div class="glass-panel section-center">

<span class="badge badge-gold">
Experiências que conectam
</span>


<h2 class="section-title mt-2">
Faça parte desta jornada
</h2>


<p class="text-lg">

Acompanhe os eventos da AD Lifestyle,
partilhe conhecimento e descubra novas
possibilidades através de experiências
que aproximam pessoas, ideias e oportunidades.

</p>


<div class="hero-actions center mt-4">

${
    state === "past"

    ?

    `

    <button
        class="btn btn-primary"
        data-action="timeline">

        Ver Eventos

    </button>

    `

    :

    `

    <button
        class="btn btn-primary"
        data-action="ticket">

        Reservar Lugar

    </button>

    `
}


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
   MODAL DE DETALHES
   ========================================================== */

function eventModal(){

    return `

<div
    class="event-modal"
    id="event-modal"
    aria-hidden="true">

    <div
        class="event-modal-backdrop"
        data-action="close-modal">
    </div>


    <div
        class="event-modal-dialog"
        role="dialog"
        aria-modal="true">

        <button
            class="event-modal-close"
            data-action="close-modal"
            aria-label="Fechar">

            ×

        </button>


        <div
            class="event-modal-content"
            id="event-modal-content">
        </div>

    </div>

</div>

`;

}


/* ==========================================================
   CONTEÚDO DO MODAL
   ========================================================== */

function buildEventModal(event){

    const state =
        getEventState(event);


    const stateLabel =
        getStateLabel(state);


    const stateClass =
        getStateClass(state);


    const highlights =
        event.highlights
            ?.map(
                item =>
                    `<li>✓ ${item}</li>`
            )
            .join("")
        || "";


    return `

<div class="event-modal-image">

<img
    src="${event.image}"
    alt="${event.title}">


<span class="event-status ${stateClass}">
    ${stateLabel}
</span>

</div>


<div class="event-modal-body">

<span class="label">
    ${event.category}
</span>


<h2>
    ${event.title}
</h2>


<p class="text-lg">
    ${event.description}
</p>


<div class="event-modal-meta">

<div>

<strong>
Data
</strong>

<span>
${event.dateLabel}
</span>

</div>


<div>

<strong>
Horário
</strong>

<span>
${event.timeLabel}
</span>

</div>


<div>

<strong>
Local
</strong>

<span>
${event.venue}
</span>

</div>


<div>

<strong>
Ingresso
</strong>

<span>
${event.price}
</span>

</div>

</div>


${
    highlights

    ?

    `

    <div class="event-highlights">

        <h3>
            Destaques
        </h3>

        <ul>
            ${highlights}
        </ul>

    </div>

    `

    :

    ""
}


<div class="event-modal-actions">

${
    state === "past"

    ?

    `

    <button
        class="btn btn-primary"
        data-action="memory"
        data-event-id="${event.id}">

        ✦ Ver Memórias

    </button>

    `

    :

    `

    <button
        class="btn btn-primary"
        data-action="ticket">

        Reservar Lugar

    </button>

    `
}

</div>

</div>

`;

}


/* ==========================================================
   INTERACTIVIDADE PRINCIPAL
   ========================================================== */

function initialiseEvents(){

    initialiseSchedule();

    initialiseReservation();

    initialiseShare();

    initialiseTimeline();

    initialiseModal();

    initialiseMemoryButtons();

    initialiseEventTicketButtons();

    initialiseReveal();

}


/* ==========================================================
   SCROLL PARA CRONOGRAMA
   ========================================================== */

function initialiseSchedule(){

    document
        .querySelectorAll(
            '[data-action="schedule"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    document
                        .getElementById("schedule")
                        ?.scrollIntoView({
                            behavior:"smooth"
                        });

                }
            );

        });

}


/* ==========================================================
   RESERVA
   ========================================================== */

function initialiseReservation(){

    document
        .querySelectorAll(
            '[data-action="ticket"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                openWhatsAppReservation
            );

        });

}


function initialiseEventTicketButtons(){

    document
        .querySelectorAll(
            '[data-action="event-ticket"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                openWhatsAppReservation
            );

        });

}


function openWhatsAppReservation(){

    const event =
        getNearestEvent();


    const title =
        event?.title ||
        "Evento AD Lifestyle";


    const message =
        encodeURIComponent(

            `Olá AD Lifestyle! Gostaria de reservar um lugar para o evento "${title}".`

        );


    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
        "_blank"
    );

}


/* ==========================================================
   PARTILHAR
   ========================================================== */

function initialiseShare(){

    document
        .querySelectorAll(
            '[data-action="share"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                async ()=>{

                    const event =
                        getNearestEvent();


                    const title =
                        event?.title ||
                        "Evento AD Lifestyle";


                    const shareText =
                        `${title} — ${event?.dateLabel || ""}, ${event?.location || ""}. Junta-te à AD Lifestyle!`;


                    const shareUrl =
                        window.location.href;


                    if(
                        navigator.share
                    ){

                        try{

                            await navigator.share({

                                title:
                                    title,

                                text:
                                    shareText,

                                url:
                                    shareUrl

                            });

                        }

                        catch(error){

                            if(
                                error?.name !==
                                "AbortError"
                            ){

                                openWhatsAppShare(
                                    shareText,
                                    shareUrl
                                );

                            }

                        }

                        return;

                    }


                    openWhatsAppShare(
                        shareText,
                        shareUrl
                    );

                }
            );

        });

}


function openWhatsAppShare(
    text,
    url
){

    const message =
        encodeURIComponent(
            `${text}\n${url}`
        );


    window.open(
        `https://wa.me/?text=${message}`,
        "_blank"
    );

}


/* ==========================================================
   TIMELINE
   ========================================================== */

function initialiseTimeline(){

    document
        .querySelectorAll(
            '[data-action="timeline"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    document
                        .getElementById(
                            "events-history"
                        )
                        ?.scrollIntoView({
                            behavior:"smooth",
                            block:"start"
                        });

                }
            );

        });

}


/* ==========================================================
   MODAL
   ========================================================== */

function initialiseModal(){

    document
        .querySelectorAll(
            '[data-action="details"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const event =
                        EVENTS_DATA.find(
                            item =>
                                item.id ===
                                button.dataset.eventId
                        );


                    if(!event){

                        return;

                    }


                    openEventModal(event);

                }
            );

        });


    document
        .querySelectorAll(
            '[data-action="close-modal"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                closeEventModal
            );

        });


    document.addEventListener(
        "keydown",
        event=>{

            if(
                event.key === "Escape"
            ){

                closeEventModal();

            }

        }
    );

}


/* ==========================================================
   ABRIR MODAL
   ========================================================== */

function openEventModal(event){

    const modal =
        document.getElementById(
            "event-modal"
        );


    const content =
        document.getElementById(
            "event-modal-content"
        );


    if(
        !modal ||
        !content
    ){

        return;

    }


    content.innerHTML =
        buildEventModal(event);


    modal.classList.add(
        "is-open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    content
        .querySelectorAll(
            '[data-action="memory"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    openMemory(
                        event
                    );

                }
            );

        });


    content
        .querySelectorAll(
            '[data-action="ticket"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                openWhatsAppReservation
            );

        });

}


/* ==========================================================
   FECHAR MODAL
   ========================================================== */

function closeEventModal(){

    const modal =
        document.getElementById(
            "event-modal"
        );


    if(!modal){

        return;

    }


    modal.classList.remove(
        "is-open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* ==========================================================
   MEMÓRIAS
   ========================================================== */

function initialiseMemoryButtons(){

    document
        .querySelectorAll(
            '[data-action="memory"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const event =
                        EVENTS_DATA.find(
                            item =>
                                item.id ===
                                button.dataset.eventId
                        );


                    if(event){

                        openMemory(
                            event
                        );

                    }

                }
            );

        });

}


function openMemory(event){

    const url =
        event.memoryUrl ||
        SOCIALS.instagram;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ==========================================================
   ANIMAÇÕES REVEAL
   ========================================================== */

function initialiseReveal(){

    if(
        typeof IntersectionObserver ===
        "undefined"
    ){

        document
            .querySelectorAll(
                ".reveal"
            )
            .forEach(element=>{

                element.classList.add(
                    "visible"
                );

            });

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
                threshold:0.12
            }

        );


    document
        .querySelectorAll(
            ".reveal"
        )
        .forEach(
            element =>
                observer.observe(
                    element
                )
        );

}


/* ==========================================================
   API OPCIONAL
   ========================================================== */

export function addEvent(event){

    if(
        !event ||
        !event.id ||
        !event.title ||
        !event.start
    ){

        console.warn(
            "AD Lifestyle Events: evento inválido."
        );

        return false;

    }


    const exists =
        EVENTS_DATA.some(
            item =>
                item.id === event.id
        );


    if(exists){

        console.warn(
            `AD Lifestyle Events: o evento "${event.id}" já existe.`
        );

        return false;

    }


    EVENTS_DATA.push(
        event
    );


    return true;

}


/* ==========================================================
   ACTUALIZAR MEMÓRIA DE UM EVENTO
   ========================================================== */

export function updateEventMemory(
    eventId,
    memoryUrl
){

    const event =
        EVENTS_DATA.find(
            item =>
                item.id === eventId
        );


    if(!event){

        console.warn(
            `AD Lifestyle Events: evento "${eventId}" não encontrado.`
        );

        return false;

    }


    event.memoryUrl =
        memoryUrl;


    return true;

}


/* ==========================================================
   FIM
   ========================================================== */
```
