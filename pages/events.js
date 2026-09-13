/* ==========================================================
   AD LIFESTYLE V2
   EVENTS.JS
   Premium Events Experience
   ----------------------------------------------------------
   Sistema:
   - Hero slideshow
   - Próximo evento em destaque
   - Timeline cronológica alternada
   - Eventos passados / actuais / futuros
   - Detalhes sob pedido
   - Memórias Instagram
   - Modal inteligente
   - Reserva WhatsApp
   - Partilha
   - Preparado para galerias por evento
   ========================================================== */

import { applyTheme } from "../js/theme.js";

/* ==========================================================
   CONFIGURAÇÃO
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";

const SOCIALS = {

    instagram:
        "https://www.instagram.com/ad.ambassadoracademy21/",

    facebook:
        "https://web.facebook.com/ad.ambassadoracademy21/",

    tiktok:
        "https://www.tiktok.com/@adbdlifestyle"

};


/* ==========================================================
   BASE DE DADOS DOS EVENTOS
   ========================================================== */

const EVENTS_DATA = [

    /* ======================================================
       EVENTO PASSADO
       ====================================================== */

    {

        id:
            "dupla-oportunidade-agosto-2026",

        title:
            "Dupla Oportunidade",

        shortTitle:
            "Dupla Oportunidade",

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

        gallery: [

            "assets/hotel/fly.png"

        ],

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
       PRÓXIMO EVENTO
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
            "Uma apresentação especial da BZZWORLD e Academy 21, criada para apresentar novas perspectivas sobre saúde, desenvolvimento humano, liderança e oportunidades de negócio.",

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

        gallery: [

            "assets/hotel/fly.png"

        ],

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

    applyTheme("default");

    const app =
        document.getElementById("app");


    if(!app){

        console.error(
            "AD Lifestyle Events: elemento #app não encontrado."
        );

        return;

    }


    app.innerHTML = `

        <div class="page-events">

            ${hero()}

            ${nextEvent()}

            ${timeline()}

            ${eventExperience()}

            ${schedule()}

            ${speakers()}

            ${venue()}

            ${eventModal()}

            ${cta()}

        </div>

    `;


    initialiseEvents();

}


/* ==========================================================
   DATA UTILITIES
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


function getStateLabel(state){

    switch(state){

        case "live":
            return "A decorrer agora";

        case "past":
            return "Realizado";

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


function getSortedEvents(){

    return [
        ...EVENTS_DATA
    ]
    .sort(
        (a,b)=>
            new Date(a.start) -
            new Date(b.start)
    );

}


function getNearestEvent(){

    const now =
        new Date();


    const live =
        EVENTS_DATA
        .filter(event=>{

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


    const upcoming =
        EVENTS_DATA
        .filter(
            event =>
                new Date(event.start) > now
        )
        .sort(
            (a,b)=>
                new Date(a.start) -
                new Date(b.start)
        );


    if(upcoming.length){

        return upcoming[0];

    }


    return EVENTS_DATA
        .slice()
        .sort(
            (a,b)=>
                new Date(b.start) -
                new Date(a.start)
        )[0];

}


/* ==========================================================
   HERO
   ========================================================== */

function hero(){

    const events =
        getSortedEvents();


    const slides =
        events.length
            ? events
            : [

                {

                    id:"default",

                    title:
                        "Experiências que conectam",

                    subtitle:
                        "Pessoas, conhecimento e oportunidades.",

                    image:
                        "assets/hotel/fly.png",

                    dateLabel:
                        "",

                    location:
                        "AD Lifestyle"

                }

            ];


    return `

<section class="events-hero">

    <div class="events-hero-slides">

        ${slides
            .map(
                (event,index)=>
                    heroSlide(
                        event,
                        index
                    )
            )
            .join("")}

    </div>


    <div class="events-hero-overlay"></div>


    <div class="container events-hero-inner">


        <div class="events-hero-copy reveal">

            <span class="events-kicker">
                AD Lifestyle · Experiences
            </span>


            <h1>
                Eventos que
                <span>criam memórias.</span>
            </h1>


            <p>
                Encontros, apresentações e experiências
                que aproximam pessoas, conhecimento,
                bem-estar e novas possibilidades.
            </p>


            <div class="events-hero-actions">

                <button
                    class="btn btn-primary"
                    data-action="next-event">

                    Próximo Evento

                </button>


                <button
                    class="btn btn-glass"
                    data-action="timeline">

                    Explorar Memórias

                </button>

            </div>

        </div>


        <div class="events-hero-meta reveal-right">

            <div class="events-live-indicator">

                <span></span>

                <strong>
                    EXPERIÊNCIAS AD LIFESTYLE
                </strong>

            </div>


            <div class="events-slide-counter">

                <strong id="eventSlideCurrent">
                    01
                </strong>

                <span>/</span>

                <span id="eventSlideTotal">
                    ${String(slides.length).padStart(2,"0")}
                </span>

            </div>

        </div>

    </div>


    <div class="events-slider-controls">

        <button
            class="events-slider-arrow"
            id="eventSlidePrev"
            aria-label="Slide anterior">

            ←

        </button>


        <div
            class="events-slider-dots"
            id="eventSlideDots">

            ${slides
                .map(
                    (_,index)=>
                        `
                        <button
                            class="${index === 0 ? "active" : ""}"
                            data-slide="${index}"
                            aria-label="Ir para slide ${index + 1}">
                        </button>
                        `
                )
                .join("")}

        </div>


        <button
            class="events-slider-arrow"
            id="eventSlideNext"
            aria-label="Próximo slide">

            →

        </button>

    </div>

</section>

`;

}


function heroSlide(event,index){

    const state =
        getEventState(event);


    return `

<div
    class="events-hero-slide ${index === 0 ? "active" : ""}"
    data-slide-index="${index}">

    <img
        src="${event.image}"
        alt="${event.title}"
        loading="${index === 0 ? "eager" : "lazy"}">

    <div class="events-hero-slide-label">

        <span>
            ${getStateLabel(state)}
        </span>

        <strong>
            ${event.dateLabel || "AD Lifestyle"}
        </strong>

    </div>

</div>

`;

}


/* ==========================================================
   PRÓXIMO EVENTO
   ========================================================== */

function nextEvent(){

    const event =
        getNearestEvent();


    if(!event){

        return "";

    }


    const state =
        getEventState(event);


    const stateClass =
        getStateClass(state);


    return `

<section
    id="next-event"
    class="section events-next">

    <div class="container">

        <div class="events-next-header reveal">

            <div>

                <span class="label">
                    O que vem a seguir
                </span>

                <h2 class="section-title">
                    O próximo capítulo
                    <span>da nossa jornada.</span>
                </h2>

            </div>


            <span class="events-status-pill ${stateClass}">
                ${getStateLabel(state)}
            </span>

        </div>


        <div class="events-next-card reveal">

            <div class="events-next-image">

                <img
                    src="${event.image}"
                    alt="${event.title}">

                <div class="events-next-date">

                    <strong>
                        ${formatDay(event.start)}
                    </strong>

                    <span>
                        ${formatMonth(event.start)}
                    </span>

                </div>

            </div>


            <div class="events-next-content">

                <span class="events-category">
                    ${event.category}
                </span>


                <h3>
                    ${event.title}
                </h3>


                <p>
                    ${event.description}
                </p>


                <div class="events-next-details">

                    <div>

                        <span>
                            DATA
                        </span>

                        <strong>
                            ${event.dateLabel}
                        </strong>

                    </div>


                    <div>

                        <span>
                            HORA
                        </span>

                        <strong>
                            ${event.timeLabel}
                        </strong>

                    </div>


                    <div>

                        <span>
                            LOCAL
                        </span>

                        <strong>
                            ${event.location}
                        </strong>

                    </div>


                    <div>

                        <span>
                            INGRESSO
                        </span>

                        <strong>
                            ${event.price}
                        </strong>

                    </div>

                </div>


                <div class="events-next-actions">

                    <button
                        class="btn btn-primary"
                        data-action="ticket"
                        data-event-id="${event.id}">

                        Reservar Lugar

                    </button>


                    <button
                        class="btn btn-glass"
                        data-action="details"
                        data-event-id="${event.id}">

                        Ver detalhes

                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   TIMELINE
   ========================================================== */

function timeline(){

    const events =
        getSortedEvents()
        .reverse();


    return `

<section
    id="events-history"
    class="section events-timeline-section">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Memória AD Lifestyle
            </span>

            <h2 class="section-title">
                Uma história
                <span>em movimento.</span>
            </h2>

            <p class="lead">
                Dos encontros que já aconteceram às experiências
                que ainda estão por vir, cada evento acrescenta
                uma nova página à nossa jornada.
            </p>

        </div>


        <div class="events-timeline">

            <div class="events-timeline-line"></div>

            ${
                events
                    .map(
                        (event,index)=>
                            timelineItem(
                                event,
                                index
                            )
                    )
                    .join("")
            }

        </div>

    </div>

</section>

`;

}


function timelineItem(event,index){

    const state =
        getEventState(event);


    const stateClass =
        getStateClass(state);


    const date =
        formatTimelineDate(
            event.start
        );


    const side =
        index % 2 === 0
            ? "timeline-left"
            : "timeline-right";


    return `

<article
    class="events-timeline-item ${side} ${stateClass} reveal">


    <div class="events-timeline-marker">

        <span></span>

    </div>


    <div class="events-timeline-date">

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


    <div class="events-timeline-card">


        <div class="events-timeline-image">

            <img
                src="${event.image}"
                alt="${event.title}"
                loading="lazy">


            <span class="events-status-badge ${stateClass}">
                ${getStateLabel(state)}
            </span>

        </div>


        <div class="events-timeline-content">

            <span class="events-category">
                ${event.category}
            </span>


            <h3>
                ${event.shortTitle}
            </h3>


            <p>
                ${event.descriptionShort}
            </p>


            <div class="events-timeline-info">

                <span>
                    🕒 ${event.timeLabel}
                </span>

                <span>
                    📍 ${event.location}
                </span>

            </div>


            <div class="events-timeline-actions">

                <button
                    class="btn btn-glass btn-small"
                    data-action="details"
                    data-event-id="${event.id}">

                    Ver detalhes

                </button>


                ${
                    state === "past"
                        ? `
                            <button
                                class="btn btn-primary btn-small"
                                data-action="memory"
                                data-event-id="${event.id}">

                                ✦ Ver memórias

                            </button>
                        `
                        : `
                            <button
                                class="btn btn-primary btn-small"
                                data-action="ticket"
                                data-event-id="${event.id}">

                                Participar

                            </button>
                        `
                }

            </div>

        </div>

    </div>

</article>

`;

}


/* ==========================================================
   EXPERIÊNCIA
   ========================================================== */

function eventExperience(){

return `

<section class="section-sm events-experience">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Para além do palco
            </span>

            <h2 class="section-title">
                Cada encontro tem
                <span>um propósito.</span>
            </h2>

        </div>


        <div class="grid grid-4 mt-6">

            ${experienceCard(
                "01",
                "Conhecimento",
                "Conteúdo, apresentações e novas perspectivas."
            )}


            ${experienceCard(
                "02",
                "Conexão",
                "Pessoas, networking e construção de relações."
            )}


            ${experienceCard(
                "03",
                "Experiência",
                "Momentos presenciais que permanecem na memória."
            )}


            ${experienceCard(
                "04",
                "Oportunidade",
                "Descoberta de novas possibilidades e caminhos."
            )}

        </div>

    </div>

</section>

`;

}


function experienceCard(number,title,text){

return `

<div class="events-experience-card reveal">

    <span>
        ${number}
    </span>

    <h3>
        ${title}
    </h3>

    <p>
        ${text}
    </p>

</div>

`;

}


/* ==========================================================
   CRONOGRAMA
   ========================================================== */

function schedule(){

    const event =
        getNearestEvent();


    if(
        !event ||
        getEventState(event) === "past"
    ){

        return "";

    }


    const agenda = [

        ["15h00","Recepção & Credenciamento"],
        ["15h30","Abertura Oficial"],
        ["16h00","Saúde & Medicina Holística"],
        ["16h45","Apresentação BZZWORLD"],
        ["17h30","Academy 21 & Liderança"],
        ["18h00","Networking & Encerramento"]

    ];


    return `

<section class="section events-program">

    <div class="container">

        <div class="events-program-header reveal">

            <div>

                <span class="label">
                    Programa
                </span>

                <h2 class="section-title">
                    Uma tarde desenhada
                    <span>para descobrir.</span>
                </h2>

            </div>

            <span class="events-program-date">
                ${event.dateLabel}
            </span>

        </div>


        <div class="events-program-list">

            ${
                agenda
                    .map(
                        ([hour,title],index)=>
                            `
                            <div
                                class="events-program-row reveal">

                                <span class="events-program-number">
                                    ${String(index + 1).padStart(2,"0")}
                                </span>

                                <strong>
                                    ${hour}
                                </strong>

                                <span>
                                    ${title}
                                </span>

                            </div>
                            `
                    )
                    .join("")
            }

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   ORADORES
   ========================================================== */

function speakers(){

    const event =
        getNearestEvent();


    if(
        !event ||
        !event.speakers?.length
    ){

        return "";

    }


    return `

<section class="section-sm events-speakers">

    <div class="container">

        <div class="section-center reveal">

            <span class="label">
                Participação especial
            </span>

            <h2 class="section-title">
                Pessoas que dão
                <span>voz à experiência.</span>
            </h2>

        </div>


        <div class="events-speakers-grid mt-6">

            ${
                event.speakers
                    .map(
                        (name,index)=>
                            speakerCard(
                                name,
                                index
                            )
                    )
                    .join("")
            }

        </div>

    </div>

</section>

`;

}


function speakerCard(name,index){

    const images = [

        "assets/images/2.png",
        "assets/images/1.png",
        "assets/images/a21.png"

    ];


    return `

<article
    class="events-speaker-card reveal">

    <div class="events-speaker-image">

        <img
            src="${images[index] || images[0]}"
            alt="${name}"
            loading="lazy">

    </div>


    <div class="events-speaker-info">

        <span>
            PARTICIPAÇÃO ${String(index + 1).padStart(2,"0")}
        </span>

        <h3>
            ${name}
        </h3>

    </div>

</article>

`;

}


/* ==========================================================
   LOCAL
   ========================================================== */

function venue(){

    const event =
        getNearestEvent();


    if(!event){

        return "";

    }


    return `

<section class="section events-venue">

    <div class="container">

        <div class="events-venue-card">

            <div class="events-venue-image reveal-left">

                <img
                    src="assets/hotel/fly.png"
                    alt="Fly Hotel"
                    loading="lazy">

            </div>


            <div class="events-venue-content reveal-right">

                <span class="label">
                    Onde nos encontramos
                </span>


                <h2 class="section-title">
                    ${event.venue}
                </h2>


                <p>
                    ${event.location}
                </p>


                <div class="events-venue-details">

                    <div>
                        <span>
                            DATA
                        </span>

                        <strong>
                            ${event.dateLabel}
                        </strong>
                    </div>


                    <div>
                        <span>
                            HORA
                        </span>

                        <strong>
                            ${event.timeLabel}
                        </strong>
                    </div>


                    <div>
                        <span>
                            INGRESSO
                        </span>

                        <strong>
                            ${event.price}
                        </strong>
                    </div>

                </div>


                <button
                    class="btn btn-primary mt-4"
                    data-action="ticket"
                    data-event-id="${event.id}">

                    Reservar Lugar

                </button>

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   MODAL
   ========================================================== */

function eventModal(){

return `

<div
    class="events-modal"
    id="events-modal"
    aria-hidden="true">

    <div
        class="events-modal-backdrop"
        data-action="close-modal">
    </div>


    <div
        class="events-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="events-modal-title">

        <button
            class="events-modal-close"
            data-action="close-modal"
            aria-label="Fechar">

            ×

        </button>


        <div
            class="events-modal-body"
            id="events-modal-body">
        </div>

    </div>

</div>

`;

}


/* ==========================================================
   MODAL CONTENT
   ========================================================== */

function buildModal(event){

    const state =
        getEventState(event);


    const highlights =
        event.highlights
            ?.map(
                item =>
                    `
                    <li>
                        <span>✓</span>
                        ${item}
                    </li>
                    `
            )
            .join("")
        || "";


    const action =
        state === "past"

            ? `

                <button
                    class="btn btn-primary"
                    data-action="memory"
                    data-event-id="${event.id}">

                    ✦ Ver memórias no Instagram

                </button>

            `

            : `

                <button
                    class="btn btn-primary"
                    data-action="ticket"
                    data-event-id="${event.id}">

                    Reservar Lugar

                </button>

            `;


    return `

<div class="events-modal-image">

    <img
        src="${event.image}"
        alt="${event.title}">


    <span class="events-status-badge ${getStateClass(state)}">
        ${getStateLabel(state)}
    </span>

</div>


<div class="events-modal-content">

    <span class="events-category">
        ${event.category}
    </span>


    <h2 id="events-modal-title">
        ${event.title}
    </h2>


    <p class="events-modal-description">
        ${event.description}
    </p>


    <div class="events-modal-grid">

        <div>
            <span>Data</span>
            <strong>${event.dateLabel}</strong>
        </div>

        <div>
            <span>Horário</span>
            <strong>${event.timeLabel}</strong>
        </div>

        <div>
            <span>Local</span>
            <strong>${event.venue}</strong>
        </div>

        <div>
            <span>Ingresso</span>
            <strong>${event.price}</strong>
        </div>

    </div>


    ${
        highlights
            ? `

                <div class="events-modal-highlights">

                    <h3>
                        Destaques
                    </h3>

                    <ul>
                        ${highlights}
                    </ul>

                </div>

            `
            : ""
    }


    <div class="events-modal-actions">

        ${action}

    </div>

</div>

`;

}


/* ==========================================================
   CTA
   ========================================================== */

function cta(){

return `

<section class="section events-cta">

    <div class="container">

        <div class="events-cta-panel">

            <div class="events-cta-glow"></div>

            <div class="events-cta-content reveal">

                <span>
                    AD Lifestyle Events
                </span>


                <h2>
                    A próxima memória
                    pode começar consigo.
                </h2>


                <p>
                    Acompanhe os nossos encontros,
                    participe nas próximas experiências
                    e descubra novas possibilidades.
                </p>


                <div class="events-hero-actions">

                    <button
                        class="btn btn-primary"
                        data-action="next-event">

                        Ver Próximo Evento

                    </button>


                    <button
                        class="btn btn-glass"
                        data-action="share">

                        Partilhar

                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

`;

}


/* ==========================================================
   HELPERS
   ========================================================== */

function formatDay(dateString){

    return String(
        new Date(dateString).getDate()
    ).padStart(2,"0");

}


function formatMonth(dateString){

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


    return months[
        new Date(dateString).getMonth()
    ];

}


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
   INITIALISE
   ========================================================== */

function initialiseEvents(){

    initialiseSlider();

    initialiseNavigation();

    initialiseDetails();

    initialiseMemory();

    initialiseTickets();

    initialiseShare();

    initialiseModal();

    initialiseReveal();

}


/* ==========================================================
   SLIDESHOW
   ========================================================== */

function initialiseSlider(){

    const root =
        document.querySelector(
            ".page-events"
        );


    if(!root) return;


    const slides =
        [
            ...root.querySelectorAll(
                ".events-hero-slide"
            )
        ];


    const dots =
        [
            ...root.querySelectorAll(
                "[data-slide]"
            )
        ];


    const prev =
        root.querySelector(
            "#eventSlidePrev"
        );


    const next =
        root.querySelector(
            "#eventSlideNext"
        );


    const current =
        root.querySelector(
            "#eventSlideCurrent"
        );


    const total =
        root.querySelector(
            "#eventSlideTotal"
        );


    if(!slides.length){

        return;

    }


    let index = 0;

    let timer = null;


    const render = newIndex=>{

        index =
            (
                newIndex +
                slides.length
            )
            %
            slides.length;


        slides.forEach(
            (slide,i)=>{

                slide.classList.toggle(
                    "active",
                    i === index
                );

            }
        );


        dots.forEach(
            (dot,i)=>{

                dot.classList.toggle(
                    "active",
                    i === index
                );

            }
        );


        if(current){

            current.textContent =
                String(index + 1)
                .padStart(2,"0");

        }


        if(total){

            total.textContent =
                String(slides.length)
                .padStart(2,"0");

        }

    };


    const start = ()=>{

        stop();


        if(slides.length <= 1){

            return;

        }


        timer =
            setInterval(
                ()=>{
                    render(index + 1);
                },
                6500
            );

    };


    const stop = ()=>{

        if(timer){

            clearInterval(timer);

            timer = null;

        }

    };


    prev?.addEventListener(
        "click",
        ()=>{
            render(index - 1);
            start();
        }
    );


    next?.addEventListener(
        "click",
        ()=>{
            render(index + 1);
            start();
        }
    );


    dots.forEach(
        dot=>{

            dot.addEventListener(
                "click",
                ()=>{

                    render(
                        Number(
                            dot.dataset.slide
                        )
                    );

                    start();

                }
            );

        }
    );


    root
        .querySelector(
            ".events-hero-slides"
        )
        ?.addEventListener(
            "mouseenter",
            stop
        );


    root
        .querySelector(
            ".events-hero-slides"
        )
        ?.addEventListener(
            "mouseleave",
            start
        );


    render(0);

    start();

}


/* ==========================================================
   NAVIGATION
   ========================================================== */

function initialiseNavigation(){

    document
        .querySelectorAll(
            '[data-action="next-event"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    document
                        .getElementById(
                            "next-event"
                        )
                        ?.scrollIntoView({

                            behavior:"smooth",

                            block:"start"

                        });

                }
            );

        });


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
   DETAILS
   ========================================================== */

function initialiseDetails(){

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


                    if(event){

                        openModal(
                            event
                        );

                    }

                }
            );

        });

}


/* ==========================================================
   MEMORY
   ========================================================== */

function initialiseMemory(){

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

    /*
     * Nunca inventamos um URL específico.
     * Se ainda não tiver sido configurado,
     * direccionamos para o perfil oficial.
     */

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
   TICKETS / WHATSAPP
   ========================================================== */

function initialiseTickets(){

    document
        .querySelectorAll(
            '[data-action="ticket"]'
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
                        )
                        ||
                        getNearestEvent();


                    if(!event){

                        return;

                    }


                    const message =
                        `Olá AD Lifestyle! Gostaria de reservar um lugar para o evento "${event.title}" (${event.dateLabel}).`;


                    window.open(
                        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
                        "_blank"
                    );

                }
            );

        });

}


/* ==========================================================
   SHARE
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


                    const text =
                        event
                            ? `${event.title} — ${event.dateLabel}, ${event.location}.`
                            : "Experiências AD Lifestyle.";


                    const url =
                        window.location.href;


                    if(
                        navigator.share
                    ){

                        try{

                            await navigator.share({

                                title:
                                    event?.title ||
                                    "AD Lifestyle Events",

                                text,

                                url

                            });

                        }
                        catch(error){

                            if(
                                error?.name !==
                                "AbortError"
                            ){

                                whatsappShare(
                                    text,
                                    url
                                );

                            }

                        }

                        return;

                    }


                    whatsappShare(
                        text,
                        url
                    );

                }
            );

        });

}


function whatsappShare(
    text,
    url
){

    window.open(

        `https://wa.me/?text=${encodeURIComponent(
            `${text}\n${url}`
        )}`,

        "_blank"

    );

}


/* ==========================================================
   MODAL
   ========================================================== */

function initialiseModal(){

    document
        .querySelectorAll(
            '[data-action="close-modal"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                closeModal
            );

        });


    if(
        !window.__adLifestyleEventsEscape
    ){

        document.addEventListener(
            "keydown",
            event=>{

                if(
                    event.key === "Escape"
                ){

                    closeModal();

                }

            }
        );


        window.__adLifestyleEventsEscape =
            true;

    }

}


function openModal(event){

    const modal =
        document.getElementById(
            "events-modal"
        );


    const body =
        document.getElementById(
            "events-modal-body"
        );


    if(
        !modal ||
        !body
    ){

        return;

    }


    body.innerHTML =
        buildModal(event);


    modal.classList.add(
        "is-open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "events-modal-open"
    );


    body
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


    body
        .querySelectorAll(
            '[data-action="ticket"]'
        )
        .forEach(button=>{

            button.addEventListener(
                "click",
                ()=>{

                    const message =
                        `Olá AD Lifestyle! Gostaria de reservar um lugar para o evento "${event.title}" (${event.dateLabel}).`;


                    window.open(
                        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
                        "_blank"
                    );

                }
            );

        });

}


function closeModal(){

    const modal =
        document.getElementById(
            "events-modal"
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
        "events-modal-open"
    );

}


/* ==========================================================
   REVEAL
   ========================================================== */

function initialiseReveal(){

    const elements =
        document.querySelectorAll(
            ".page-events .reveal"
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


/* ==========================================================
   API
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


    if(
        EVENTS_DATA.some(
            item =>
                item.id === event.id
        )
    ){

        console.warn(
            `AD Lifestyle Events: "${event.id}" já existe.`
        );

        return false;

    }


    EVENTS_DATA.push(
        event
    );


    return true;

}


/* ==========================================================
   MEMÓRIA DE EVENTO
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
            `AD Lifestyle Events: "${eventId}" não encontrado.`
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
