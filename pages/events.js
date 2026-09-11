/* ==========================================================
   AD LIFESTYLE — EVENTS.JS
   Premium Events Page
   ========================================================== */

import { applyTheme } from "../js/theme.js";

/* ==========================================================
   CONFIGURAÇÕES GERAIS
   ========================================================== */

const WHATSAPP_NUMBER = "244924964666";

const SOCIALS = {
    instagram: "https://www.instagram.com/ad.ambassadoracademy21/",
    facebook: "https://web.facebook.com/ad.ambassadoracademy21/",
    tiktok: "https://www.tiktok.com/@adbdlifestyle"
};

/* ==========================================================
   DADOS DOS EVENTOS
   ========================================================== */

const EVENTS_DATA = [

    {
        id: "dupla-oportunidade-2026",

        title: "Dupla Oportunidade",

        subtitle: "Saúde, Bem-Estar, Longevidade e Negócios Internacionais",

        date: "08",

        month: "AGO",

        year: "2026",

        fullDate: "08 de Agosto de 2026",

        time: "15h00",

        location: "Sala de Conferências do Fly Hotel",

        address: "Luanda — Próximo ao antigo Aeroporto Doméstico",

        price: "2.500 Kz",

        status: "past",

        category: "Conferência",

        image: "assets/images/events/dupla-oportunidade.jpg",

        description:
            "Uma experiência criada para aproximar pessoas, conhecimento, saúde, desenvolvimento pessoal, bem-estar e novas possibilidades de crescimento através de negócios internacionais.",

        highlights: [
            "Saúde e bem-estar",
            "Longevidade",
            "Medicina holística",
            "Desenvolvimento pessoal",
            "Educação empreendedora",
            "Negócios internacionais",
            "Networking"
        ],

        speaker: "A. Abdoulahi",

        speakerRole: "Academy Twenty One / BZZWorld",

        whatsappMessage:
            "Olá! Gostaria de saber mais informações sobre o evento Dupla Oportunidade."
    }

];

/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

export function loadEvents() {

    applyTheme("angel");

    const app = document.getElementById("app");

    if (!app) {
        console.error(
            "[AD LIFESTYLE] Elemento #app não encontrado."
        );

        return;
    }

    app.innerHTML = `
        ${hero()}
        ${overview()}
        ${eventsTimeline()}
        ${speakers()}
        ${venue()}
        ${cta()}
    `;

    initialiseEvents();

}


/* ==========================================================
   INICIALIZAÇÃO DOS EVENTOS
   ========================================================== */

function initialiseEvents() {

    bindEventButtons();

    bindModalEvents();

    initialiseRevealAnimations();

    initialiseCountdowns();

}


/* ==========================================================
   ESTADO DO EVENTO
   ========================================================== */

function getEventState(event) {

    if (!event) {
        return "unknown";
    }

    const now = new Date();

    const eventDate = new Date(
        `${event.year}-${getMonthNumber(event.month)}-${event.date}T${convertTime(event.time)}:00`
    );

    if (Number.isNaN(eventDate.getTime())) {
        return event.status || "unknown";
    }

    if (eventDate.getTime() < now.getTime()) {
        return "past";
    }

    return "upcoming";

}


/* ==========================================================
   CONVERSÃO DE MÊS
   ========================================================== */

function getMonthNumber(month) {

    const months = {
        JAN: "01",
        FEV: "02",
        MAR: "03",
        ABR: "04",
        MAI: "05",
        JUN: "06",
        JUL: "07",
        AGO: "08",
        SET: "09",
        OUT: "10",
        NOV: "11",
        DEZ: "12"
    };

    return months[String(month).toUpperCase()] || "01";

}


/* ==========================================================
   CONVERSÃO DE HORA
   ========================================================== */

function convertTime(time) {

    if (!time) {
        return "00:00";
    }

    return String(time)
        .replace("h", ":")
        .trim();

}


/* ==========================================================
   ORDENAÇÃO DOS EVENTOS
   ========================================================== */

function getSortedEvents() {

    return [...EVENTS_DATA].sort((a, b) => {

        const dateA = new Date(
            `${a.year}-${getMonthNumber(a.month)}-${a.date}T${convertTime(a.time)}:00`
        );

        const dateB = new Date(
            `${b.year}-${getMonthNumber(b.month)}-${b.date}T${convertTime(b.time)}:00`
        );

        return dateA - dateB;

    });

}


/* ==========================================================
   EVENTO MAIS PRÓXIMO
   ========================================================== */

function getNearestEvent() {

    const events = getSortedEvents();

    if (!events.length) {
        return null;
    }

    const now = new Date();

    const upcoming = events.find(event => {

        const date = new Date(
            `${event.year}-${getMonthNumber(event.month)}-${event.date}T${convertTime(event.time)}:00`
        );

        return date.getTime() >= now.getTime();

    });

    return upcoming || events[events.length - 1];

}


/* ==========================================================
   HERO
   ========================================================== */

function hero() {

    const event = getNearestEvent();

    if (!event) {

        return `
            <section class="events-hero events-hero-empty">

                <div class="events-hero-overlay"></div>

                <div class="events-container">

                    <div class="events-hero-content">

                        <span class="events-eyebrow">
                            AD Lifestyle
                        </span>

                        <h1>
                            Eventos
                        </h1>

                        <p>
                            Experiências, conhecimento, desenvolvimento
                            e oportunidades.
                        </p>

                    </div>

                </div>

            </section>
        `;

    }

    const state = getEventState(event);

    const heroAction =
        state === "past"
            ? `
                <button
                    type="button"
                    class="events-btn events-btn-primary"
                    data-event-action="view"
                    data-event-id="${event.id}"
                >
                    <span>Ver Memórias</span>
                    <span class="events-btn-arrow">→</span>
                </button>
            `
            : `
                <button
                    type="button"
                    class="events-btn events-btn-primary"
                    data-event-action="reserve"
                    data-event-id="${event.id}"
                >
                    <span>Reservar Lugar</span>
                    <span class="events-btn-arrow">→</span>
                </button>
            `;

    return `
        <section class="events-hero">

            <div class="events-hero-background"></div>

            <div class="events-hero-overlay"></div>

            <div class="events-container">

                <div class="events-hero-content reveal">

                    <span class="events-eyebrow">
                        ${event.category}
                    </span>

                    <h1>
                        ${event.title}
                    </h1>

                    <p class="events-hero-subtitle">
                        ${event.subtitle}
                    </p>

                    <div class="events-hero-meta">

                        <div class="events-meta-item">

                            <span class="events-meta-icon">
                                📅
                            </span>

                            <div>
                                <strong>
                                    ${event.fullDate}
                                </strong>

                                <small>
                                    ${event.time}
                                </small>
                            </div>

                        </div>

                        <div class="events-meta-item">

                            <span class="events-meta-icon">
                                📍
                            </span>

                            <div>
                                <strong>
                                    ${event.location}
                                </strong>

                                <small>
                                    ${event.address}
                                </small>
                            </div>

                        </div>

                    </div>

                    <div class="events-hero-actions">

                        ${heroAction}

                        <button
                            type="button"
                            class="events-btn events-btn-outline"
                            data-event-action="details"
                            data-event-id="${event.id}"
                        >
                            Saber mais
                        </button>

                    </div>

                </div>

            </div>

        </section>
    `;

}


/* ==========================================================
   OVERVIEW
   ========================================================== */

function overview() {

    return `
        <section class="events-overview">

            <div class="events-container">

                <div class="events-section-heading reveal">

                    <span class="events-eyebrow">
                        Experiências que transformam
                    </span>

                    <h2>
                        Mais do que eventos.
                        <span>Experiências.</span>
                    </h2>

                    <p>
                        Criamos encontros que aproximam pessoas,
                        conhecimento, desenvolvimento pessoal,
                        bem-estar e oportunidades.
                    </p>

                </div>

                <div class="events-overview-grid">

                    <article class="events-feature-card reveal">

                        <div class="events-feature-icon">
                            ✦
                        </div>

                        <h3>
                            Conhecimento
                        </h3>

                        <p>
                            Conteúdos e experiências pensados para
                            ampliar perspectivas e desenvolver novas
                            competências.
                        </p>

                    </article>

                    <article class="events-feature-card reveal">

                        <div class="events-feature-icon">
                            ◈
                        </div>

                        <h3>
                            Networking
                        </h3>

                        <p>
                            Conecte-se com pessoas que partilham
                            objectivos, ambições e vontade de crescer.
                        </p>

                    </article>

                    <article class="events-feature-card reveal">

                        <div class="events-feature-icon">
                            ◎
                        </div>

                        <h3>
                            Oportunidades
                        </h3>

                        <p>
                            Descubra novas possibilidades de aprendizagem,
                            desenvolvimento e empreendedorismo.
                        </p>

                    </article>

                </div>

            </div>

        </section>
    `;

}


/* ==========================================================
   TIMELINE
   ========================================================== */

function eventsTimeline() {

    const events = getSortedEvents();

    if (!events.length) {

        return `
            <section class="events-timeline-section">

                <div class="events-container">

                    <div class="events-section-heading">

                        <span class="events-eyebrow">
                            Agenda
                        </span>

                        <h2>
                            Próximos eventos
                        </h2>

                        <p>
                            Novas experiências serão anunciadas em breve.
                        </p>

                    </div>

                </div>

            </section>
        `;

    }

    return `
        <section
            class="events-timeline-section"
            id="agenda"
        >

            <div class="events-container">

                <div class="events-section-heading reveal">

                    <span class="events-eyebrow">
                        Agenda
                    </span>

                    <h2>
                        Eventos
                    </h2>

                    <p>
                        Descubra os encontros que fazem parte da nossa
                        jornada.
                    </p>

                </div>

                <div class="events-timeline">

                    ${events.map(timelineEvent).join("")}

                </div>

            </div>

        </section>
    `;

}


/* ==========================================================
   EVENTO DA TIMELINE
   ========================================================== */

function timelineEvent(event) {

    const state = getEventState(event);

    const cardAction =
        state === "past"
            ? `
                <button
                    type="button"
                    class="events-card-button"
                    data-event-action="view"
                    data-event-id="${event.id}"
                >
                    Ver memórias
                    <span>→</span>
                </button>
            `
            : `
                <button
                    type="button"
                    class="events-card-button"
                    data-event-action="reserve"
                    data-event-id="${event.id}"
                >
                    Reservar lugar
                    <span>→</span>
                </button>
            `;

    return `
        <article
            class="
                events-card
                events-card-${state}
                reveal
            "
            data-event-id="${event.id}"
        >

            <div class="events-card-date">

                <strong>
                    ${event.date}
                </strong>

                <span>
                    ${event.month}
                </span>

                <small>
                    ${event.year}
                </small>

            </div>

            <div class="events-card-line">
                <span></span>
            </div>

            <div class="events-card-content">

                <div class="events-card-top">

                    <span class="events-card-category">
                        ${event.category}
                    </span>

                    ${
                        state === "past"
                            ? `
                                <span class="events-status events-status-past">
                                    Realizado
                                </span>
                            `
                            : `
                                <span class="events-status events-status-upcoming">
                                    Próximo
                                </span>
                            `
                    }

                </div>

                <h3>
                    ${event.title}
                </h3>

                <h4>
                    ${event.subtitle}
                </h4>

                <p>
                    ${event.description}
                </p>

                <div class="events-card-info">

                    <span>
                        🕒 ${event.time}
                    </span>

                    <span>
                        📍 ${event.location}
                    </span>

                    <span>
                        🎟 ${event.price}
                    </span>

                </div>

                <div class="events-card-footer">

                    ${cardAction}

                </div>

            </div>

        </article>
    `;

}


/* ==========================================================
   ORADORES / PARTICIPANTES
   ========================================================== */

function speakers() {

    const event = getNearestEvent();

    if (!event) {
        return "";
    }

    return `
        <section
            class="events-speakers"
            id="speakers"
        >

            <div class="events-container">

                <div class="events-section-heading reveal">

                    <span class="events-eyebrow">
                        Participação especial
                    </span>

                    <h2>
                        Pessoas que inspiram
                    </h2>

                    <p>
                        Conhecimento partilhado por pessoas comprometidas
                        com desenvolvimento, saúde, bem-estar e crescimento.
                    </p>

                </div>

                <div class="events-speakers-grid">

                    <article class="events-speaker-card reveal">

                        <div class="events-speaker-avatar">

                            <span>
                                A
                            </span>

                        </div>

                        <div class="events-speaker-info">

                            <span class="events-speaker-label">
                                Participante / Orador
                            </span>

                            <h3>
                                ${event.speaker}
                            </h3>

                            <p>
                                ${event.speakerRole}
                            </p>

                        </div>

                    </article>

                </div>

            </div>

        </section>
    `;

}


/* ==========================================================
   LOCAL
   ========================================================== */

function venue() {

    const event = getNearestEvent();

    if (!event) {
        return "";
    }

    return `
        <section
            class="events-venue"
            id="venue"
        >

            <div class="events-container">

                <div class="events-venue-card reveal">

                    <div class="events-venue-content">

                        <span class="events-eyebrow">
                            Local do evento
                        </span>

                        <h2>
                            ${event.location}
                        </h2>

                        <p>
                            ${event.address}
                        </p>

                        <div class="events-venue-details">

                            <div>
                                <span>📍</span>

                                <strong>
                                    Luanda
                                </strong>
                            </div>

                            <div>
                                <span>🕒</span>

                                <strong>
                                    ${event.time}
                                </strong>
                            </div>

                            <div>
                                <span>📅</span>

                                <strong>
                                    ${event.fullDate}
                                </strong>
                            </div>

                        </div>

                    </div>

                    <div class="events-venue-map">

                        <div class="events-map-placeholder">

                            <span class="events-map-pin">
                                📍
                            </span>

                            <strong>
                                ${event.location}
                            </strong>

                            <small>
                                ${event.address}
                            </small>

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

function cta() {

    const event = getNearestEvent();

    if (!event) {
        return "";
    }

    const state = getEventState(event);

    const ctaAction =
        state === "past"
            ? `
                <button
                    type="button"
                    class="events-btn events-btn-light"
                    data-event-action="view"
                    data-event-id="${event.id}"
                >
                    Ver detalhes do evento
                    <span>→</span>
                </button>
            `
            : `
                <button
                    type="button"
                    class="events-btn events-btn-light"
                    data-event-action="reserve"
                    data-event-id="${event.id}"
                >
                    Quero participar
                    <span>→</span>
                </button>
            `;

    return `
        <section class="events-cta">

            <div class="events-cta-glow"></div>

            <div class="events-container">

                <div class="events-cta-content reveal">

                    <span class="events-eyebrow">
                        Faça parte
                    </span>

                    <h2>
                        O próximo passo
                        <span>começa consigo.</span>
                    </h2>

                    <p>
                        Esteja presente nas próximas experiências
                        da AD Lifestyle e faça parte de uma comunidade
                        orientada para conhecimento, crescimento e
                        novas oportunidades.
                    </p>

                    ${ctaAction}

                </div>

            </div>

        </section>
    `;

}


/* ==========================================================
   BOTÕES
   ========================================================== */

function bindEventButtons() {

    document.querySelectorAll(
        "[data-event-action]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            handleEventAction
        );

    });

}


/* ==========================================================
   ACÇÕES DOS BOTÕES
   ========================================================== */

function handleEventAction(event) {

    const button = event.currentTarget;

    const action = button.dataset.eventAction;

    const eventId = button.dataset.eventId;

    const selectedEvent = EVENTS_DATA.find(
        item => item.id === eventId
    );

    if (!selectedEvent) {
        return;
    }

    switch (action) {

        case "details":
            openEventModal(selectedEvent);
            break;

        case "view":
            openEventModal(selectedEvent);
            break;

        case "reserve":
            openWhatsApp(selectedEvent);
            break;

        default:
            console.warn(
                "[AD LIFESTYLE] Acção desconhecida:",
                action
            );

    }

}


/* ==========================================================
   WHATSAPP
   ========================================================== */

function openWhatsApp(event) {

    const message =
        event.whatsappMessage ||
        `Olá! Gostaria de saber mais informações sobre o evento ${event.title}.`;

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ==========================================================
   MODAL
   ========================================================== */

function openEventModal(event) {

    const existingModal =
        document.getElementById("event-modal");

    if (existingModal) {
        existingModal.remove();
    }

    document.body.insertAdjacentHTML(
        "beforeend",
        buildEventModal(event)
    );

    requestAnimationFrame(() => {

        const modal =
            document.getElementById("event-modal");

        if (modal) {

            modal.classList.add(
                "events-modal-visible"
            );

            document.body.classList.add(
                "events-modal-open"
            );

        }

    });

    bindModalEvents();

}


/* ==========================================================
   CONSTRUÇÃO DO MODAL
   ========================================================== */

function buildEventModal(event) {

    const state = getEventState(event);

    const highlightsHtml =
        Array.isArray(event.highlights) &&
        event.highlights.length
            ? `
                <div class="events-modal-highlights">

                    <h4>
                        Destaques
                    </h4>

                    <ul>

                        ${event.highlights
                            .map(item => `
                                <li>
                                    <span>✓</span>
                                    <span>${item}</span>
                                </li>
                            `)
                            .join("")
                        }

                    </ul>

                </div>
            `
            : "";

    const modalAction =
        state === "past"
            ? `
                <button
                    type="button"
                    class="events-btn events-btn-primary"
                    data-modal-action="close"
                >
                    Fechar
                </button>
            `
            : `
                <button
                    type="button"
                    class="events-btn events-btn-primary"
                    data-modal-action="reserve"
                    data-event-id="${event.id}"
                >
                    Reservar lugar
                    <span>→</span>
                </button>
            `;

    return `
        <div
            class="events-modal"
            id="event-modal"
            aria-hidden="true"
        >

            <div
                class="events-modal-backdrop"
                data-modal-action="close"
            ></div>

            <div
                class="events-modal-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="event-modal-title"
            >

                <button
                    type="button"
                    class="events-modal-close"
                    data-modal-action="close"
                    aria-label="Fechar"
                >
                    ×
                </button>

                <div class="events-modal-header">

                    <span class="events-card-category">
                        ${event.category}
                    </span>

                    <span
                        class="
                            events-status
                            ${
                                state === "past"
                                    ? "events-status-past"
                                    : "events-status-upcoming"
                            }
                        "
                    >
                        ${
                            state === "past"
                                ? "Realizado"
                                : "Próximo evento"
                        }
                    </span>

                </div>

                <div class="events-modal-date">

                    <strong>
                        ${event.date}
                    </strong>

                    <div>

                        <span>
                            ${event.month}
                        </span>

                        <small>
                            ${event.year}
                        </small>

                    </div>

                </div>

                <div class="events-modal-body">

                    <h2 id="event-modal-title">
                        ${event.title}
                    </h2>

                    <h3>
                        ${event.subtitle}
                    </h3>

                    <p class="events-modal-description">
                        ${event.description}
                    </p>

                    <div class="events-modal-info">

                        <div>

                            <span>
                                📅
                            </span>

                            <div>

                                <small>
                                    Data
                                </small>

                                <strong>
                                    ${event.fullDate}
                                </strong>

                            </div>

                        </div>

                        <div>

                            <span>
                                🕒
                            </span>

                            <div>

                                <small>
                                    Horário
                                </small>

                                <strong>
                                    ${event.time}
                                </strong>

                            </div>

                        </div>

                        <div>

                            <span>
                                📍
                            </span>

                            <div>

                                <small>
                                    Local
                                </small>

                                <strong>
                                    ${event.location}
                                </strong>

                            </div>

                        </div>

                        <div>

                            <span>
                                🎟
                            </span>

                            <div>

                                <small>
                                    Ingresso
                                </small>

                                <strong>
                                    ${event.price}
                                </strong>

                            </div>

                        </div>

                    </div>

                    ${highlightsHtml}

                    <div class="events-modal-speaker">

                        <span>
                            Participação especial
                        </span>

                        <strong>
                            ${event.speaker}
                        </strong>

                        <small>
                            ${event.speakerRole}
                        </small>

                    </div>

                </div>

                <div class="events-modal-footer">

                    ${modalAction}

                    <button
                        type="button"
                        class="events-modal-share"
                        data-modal-action="share"
                        data-event-id="${event.id}"
                    >
                        Partilhar
                    </button>

                </div>

            </div>

        </div>
    `;

}


/* ==========================================================
   EVENTOS DO MODAL
   ========================================================== */

function bindModalEvents() {

    const modal =
        document.getElementById("event-modal");

    if (!modal) {
        return;
    }

    modal.querySelectorAll(
        "[data-modal-action]"
    ).forEach(element => {

        element.addEventListener(
            "click",
            handleModalAction
        );

    });

}


/* ==========================================================
   ACÇÕES DO MODAL
   ========================================================== */

function handleModalAction(event) {

    const element =
        event.currentTarget;

    const action =
        element.dataset.modalAction;

    if (action === "close") {

        closeEventModal();

        return;
    }

    if (action === "reserve") {

        const eventId =
            element.dataset.eventId;

        const selectedEvent =
            EVENTS_DATA.find(
                item => item.id === eventId
            );

        if (selectedEvent) {
            openWhatsApp(selectedEvent);
        }

        return;
    }

    if (action === "share") {

        const eventId =
            element.dataset.eventId;

        const selectedEvent =
            EVENTS_DATA.find(
                item => item.id === eventId
            );

        if (selectedEvent) {
            shareEvent(selectedEvent);
        }

    }

}


/* ==========================================================
   FECHAR MODAL
   ========================================================== */

function closeEventModal() {

    const modal =
        document.getElementById("event-modal");

    if (!modal) {
        return;
    }

    modal.classList.remove(
        "events-modal-visible"
    );

    document.body.classList.remove(
        "events-modal-open"
    );

    setTimeout(() => {

        modal.remove();

    }, 250);

}


/* ==========================================================
   PARTILHAR EVENTO
   ========================================================== */

async function shareEvent(event) {

    const shareData = {

        title:
            `${event.title} — AD Lifestyle`,

        text:
            `${event.title} — ${event.subtitle}`,

        url:
            window.location.href

    };

    try {

        if (
            navigator.share &&
            typeof navigator.share === "function"
        ) {

            await navigator.share(
                shareData
            );

            return;
        }

    } catch (error) {

        if (
            error &&
            error.name === "AbortError"
        ) {
            return;
        }

    }

    try {

        await navigator.clipboard.writeText(
            window.location.href
        );

        showToast(
            "Link copiado para a área de transferência."
        );

    } catch (error) {

        console.warn(
            "[AD LIFESTYLE] Não foi possível copiar o link.",
            error
        );

        showToast(
            "Não foi possível partilhar o evento."
        );

    }

}


/* ==========================================================
   TOAST
   ========================================================== */

function showToast(message) {

    const existingToast =
        document.querySelector(
            ".events-toast"
        );

    if (existingToast) {
        existingToast.remove();
    }

    const toast =
        document.createElement("div");

    toast.className =
        "events-toast";

    toast.textContent =
        message;

    document.body.appendChild(
        toast
    );

    requestAnimationFrame(() => {

        toast.classList.add(
            "events-toast-visible"
        );

    });

    setTimeout(() => {

        toast.classList.remove(
            "events-toast-visible"
        );

        setTimeout(() => {

            toast.remove();

        }, 250);

    }, 3000);

}


/* ==========================================================
   ANIMAÇÕES DE REVEAL
   ========================================================== */

function initialiseRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );

    if (!elements.length) {
        return;
    }

    if (
        typeof IntersectionObserver ===
        "undefined"
    ) {

        elements.forEach(element => {

            element.classList.add(
                "is-visible"
            );

        });

        return;
    }

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

    elements.forEach(element => {

        observer.observe(
            element
        );

    });

}


/* ==========================================================
   COUNTDOWNS
   ========================================================== */

function initialiseCountdowns() {

    document
        .querySelectorAll(
            "[data-countdown]"
        )
        .forEach(element => {

            const eventId =
                element.dataset.countdown;

            const event =
                EVENTS_DATA.find(
                    item => item.id === eventId
                );

            if (!event) {
                return;
            }

            updateCountdown(
                element,
                event
            );

            const interval =
                setInterval(() => {

                    if (
                        !document.body.contains(
                            element
                        )
                    ) {

                        clearInterval(
                            interval
                        );

                        return;
                    }

                    updateCountdown(
                        element,
                        event
                    );

                }, 1000);

        });

}


/* ==========================================================
   ACTUALIZAÇÃO DO COUNTDOWN
   ========================================================== */

function updateCountdown(
    element,
    event
) {

    const target =
        new Date(
            `${event.year}-${getMonthNumber(event.month)}-${event.date}T${convertTime(event.time)}:00`
        );

    const now =
        new Date();

    const difference =
        target.getTime() -
        now.getTime();

    if (difference <= 0) {

        element.innerHTML = `
            <span>
                Evento realizado
            </span>
        `;

        return;
    }

    const totalSeconds =
        Math.floor(
            difference / 1000
        );

    const days =
        Math.floor(
            totalSeconds / 86400
        );

    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;

    element.innerHTML = `
        <div class="events-countdown-item">

            <strong>
                ${String(days).padStart(2, "0")}
            </strong>

            <span>
                Dias
            </span>

        </div>

        <div class="events-countdown-item">

            <strong>
                ${String(hours).padStart(2, "0")}
            </strong>

            <span>
                Horas
            </span>

        </div>

        <div class="events-countdown-item">

            <strong>
                ${String(minutes).padStart(2, "0")}
            </strong>

            <span>
                Min.
            </span>

        </div>

        <div class="events-countdown-item">

            <strong>
                ${String(seconds).padStart(2, "0")}
            </strong>

            <span>
                Seg.
            </span>

        </div>
    `;

}


/* ==========================================================
   TECLADO — ESC FECHA MODAL
   ========================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            const modal =
                document.getElementById(
                    "event-modal"
                );

            if (modal) {
                closeEventModal();
            }

        }

    }
);


/* ==========================================================
   API PÚBLICA OPCIONAL
   ========================================================== */

export {

    EVENTS_DATA,

    getNearestEvent,

    openEventModal,

    closeEventModal,

    shareEvent

};


/* ==========================================================
   FIM — EVENTS.JS
   ========================================================== */
