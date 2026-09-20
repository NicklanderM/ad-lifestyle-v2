/* ==========================================================
   AD LIFESTYLE V2
   ALPHA.JS
   Alpha Vmax — Premium Product Page
   Modelo estrutural: iSMART S3
   ========================================================== */

import { applyTheme } from "../../js/theme.js";
import { navigate } from "../../js/router.js";
import { ripple, stagger } from "../../js/animations.js";

const PRODUCT_IMAGE = "./assets/products/alpha.png";
const WHATSAPP_NUMBER = "244924964666";

export function loadAlpha(){

    applyTheme("alpha");

    const app = document.getElementById("app");

    if(!app) return;

    app.innerHTML = `

        <div class="page-alpha" data-product-page="alpha-vmax">

            ${hero()}
            ${overview()}
            ${composition()}
            ${benefits()}
            ${productDetail()}
            ${vitalityContext()}
            ${routineContext()}
            ${performanceContext()}
            ${technology()}
            ${ingredients()}
            ${routine()}
            ${faq()}
            ${information()}
            ${cta()}

        </div>

    `;

    initialiseAlpha();
}

/* ==========================================================
   HERO — mesma arquitectura do iSMART S3
   ========================================================== */

function hero(){

    return `

    <section class="hero alpha-hero">

        <div class="alpha-hero-atmosphere">
            <div class="alpha-orb alpha-orb-1"></div>
            <div class="alpha-orb alpha-orb-2"></div>
            <div class="alpha-orbit alpha-orbit-1"></div>
            <div class="alpha-orbit alpha-orbit-2"></div>
        </div>

        <div class="container alpha-hero-grid">

            <div class="alpha-hero-copy reveal">

                <span class="alpha-eyebrow">
                    ALPHA VMAX · PREMIUM PERFORMANCE
                </span>

                <h1>
                    Alpha
                    <span>Vmax.</span>
                </h1>

                <p class="alpha-hero-description">
                    Uma fórmula de inspiração botânica, concebida para integrar
                    uma rotina masculina orientada para vitalidade, energia,
                    desempenho e bem-estar.
                </p>

                <div class="alpha-hero-pills">
                    ${heroPill("Cordyceps")}
                    ${heroPill("Bagas de Goji")}
                    ${heroPill("Ganoderma")}
                    ${heroPill("Grainhas de Uva")}
                </div>

                <div class="alpha-hero-actions">

                    <button type="button" class="btn btn-primary" id="buyAlpha">
                        Comprar agora
                    </button>

                    <button
                        type="button"
                        class="btn btn-glass"
                        data-scroll="#alpha-composition">
                        Ver composição
                    </button>

                </div>

            </div>

            <div class="alpha-hero-product reveal-right">

                <div class="alpha-product-aura"></div>
                <div class="alpha-product-ring"></div>

                <div class="alpha-product-grid">

                    <img
                        src="${PRODUCT_IMAGE}"
                        alt="Alpha Vmax"
                        loading="eager"
                        decoding="async"
                    >

                </div>

                <div class="alpha-product-caption">
                    <strong>ALPHA VMAX</strong>
                    <span>BOTANICAL PERFORMANCE</span>
                </div>

            </div>

        </div>

    </section>

    `;
}

function heroPill(text){
    return `<span class="alpha-hero-pill">${text}</span>`;
}

/* ==========================================================
   OVERVIEW
   ========================================================== */

function overview(){

    return `

    <section id="alpha-overview" class="section alpha-overview-section">

        <div class="container">

            <div class="section-center reveal">

                <span class="label">VISÃO GERAL</span>

                <h2 class="section-title">
                    Quatro matérias-primas.
                    <span>Uma proposta Alpha.</span>
                </h2>

                <p class="lead">
                    O Alpha Vmax é apresentado através de uma composição de inspiração
                    botânica, integrada numa proposta de vitalidade, energia,
                    desempenho e bem-estar masculino.
                </p>

            </div>

            <div class="alpha-overview-grid">

                ${overviewCard("01","Cordyceps","Ingrediente botânico destacado na comunicação do produto.")}
                ${overviewCard("02","Bagas de Goji","Ingrediente vegetal incluído na composição apresentada.")}
                ${overviewCard("03","Ganoderma","Ingrediente de origem natural integrado na fórmula comunicada.")}
                ${overviewCard("04","Grainhas de Uva","Matéria-prima vegetal apresentada em associação com circulação e bem-estar.")}

            </div>

            <div class="alpha-overview-note reveal">
                <strong>Uma proposta de rotina, não apenas de produto.</strong>
                <p>
                    A utilização responsável deve acompanhar hábitos equilibrados,
                    actividade física, alimentação adequada, descanso e informação oficial.
                </p>
            </div>

        </div>

    </section>

    `;
}

function overviewCard(number,title,text){

    const icons = {"01":"◇","02":"○","03":"⌁","04":"✦"};

    return `
    <article class="alpha-overview-card reveal">
        <span class="alpha-card-number">${number}</span>
        <div class="alpha-card-icon" aria-hidden="true">${icons[number] || "◇"}</div>
        <h3>${title}</h3>
        <p>${text}</p>
    </article>
    `;
}

/* ==========================================================
   COMPOSITION — mesma grelha do iSMART S3
   ========================================================== */

function composition(){

    return `

    <section id="alpha-composition" class="section alpha-composition">

        <div class="container">

            <div class="alpha-section-heading reveal">

                <span class="eyebrow">COMPOSIÇÃO</span>

                <h2>
                    Uma composição de
                    <span>inspiração botânica.</span>
                </h2>

                <p>
                    A apresentação do Alpha Vmax destaca quatro matérias-primas
                    principais como parte da sua composição comunicada.
                </p>

            </div>

            <div class="alpha-composition-grid">

                ${compositionCard("01","⚡","Energia","Cordyceps","Ingrediente botânico apresentado na comunicação como associado a energia e vitalidade.")}
                ${compositionCard("02","◉","Botânico","Bagas de Goji","Ingrediente vegetal integrado na composição de inspiração botânica.")}
                ${compositionCard("03","◇","Natural","Ganoderma","Cogumelo de origem natural incluído entre as matérias-primas apresentadas.")}
                ${compositionCard("04","✦","Bem-estar","Grainhas de Uva","Ingrediente vegetal apresentado em associação com circulação e bem-estar.")}

            </div>

            <div class="alpha-more-wrap">
                <button
                    type="button"
                    class="alpha-more-toggle"
                    data-more-toggle="composition"
                    data-open-label="Ver toda a composição"
                    data-close-label="Ocultar composição"
                    aria-expanded="false"
                    aria-controls="alpha-composition-more">
                    <span>Ver toda a composição</span>
                    <i aria-hidden="true">+</i>
                </button>

                <div
                    id="alpha-composition-more"
                    class="alpha-more-panel"
                    data-more-panel="composition"
                    aria-hidden="true">

                    <div class="alpha-detail-grid">

                        ${detailCard("01 — CORDYCEPS","Energia e vitalidade","O Cordyceps surge no material apresentado como uma das matérias-primas orgânicas do Alpha Vmax.",[
                            "Matéria-prima de origem botânica",
                            "Associado à energia no material apresentado",
                            "Integra a composição Alpha Vmax"
                        ])}

                        ${detailCard("02 — BAGAS DE GOJI","Botânico seleccionado","As bagas de Goji aparecem entre as matérias-primas orgânicas apresentadas para o produto.",[
                            "Ingrediente vegetal",
                            "Parte da composição botânica",
                            "Associado à vitalidade na apresentação"
                        ])}

                        ${detailCard("03 — GANODERMA","Cogumelo tradicional","O Ganoderma é apresentado como uma das matérias-primas orgânicas utilizadas na formulação.",[
                            "Ingrediente de origem natural",
                            "Tradicionalmente utilizado em produtos de bem-estar",
                            "Integra a fórmula Alpha Vmax"
                        ])}

                        ${detailCard("04 — GRAINHAS DE UVA","Circulação e bem-estar","As grainhas de uva são destacadas no material como uma das matérias-primas orgânicas da fórmula.",[
                            "Ingrediente de origem vegetal",
                            "Associado à circulação na apresentação",
                            "Apresentado no contexto de bem-estar cardiovascular"
                        ])}

                        ${detailCard("INFORMAÇÃO IMPORTANTE","Comunicação responsável","As características apresentadas nesta página foram organizadas a partir do material disponibilizado para o Alpha Vmax e não constituem diagnóstico, tratamento ou garantia clínica.",[])}

                    </div>

                </div>
            </div>

        </div>

    </section>

    `;
}

function compositionCard(number,symbol,subtitle,title,text){

    return `
    <article class="alpha-composition-card reveal">
        <span class="alpha-composition-number">${number}</span>
        <div class="alpha-composition-symbol" aria-hidden="true">${symbol}</div>
        <span class="alpha-composition-label">${subtitle}</span>
        <h3>${title}</h3>
        <p>${text}</p>
    </article>
    `;
}

function detailCard(label,title,text,items=[]){

    return `
    <article class="alpha-detail-card">
        <span class="label">${label}</span>
        <h3>${title}</h3>
        <p>${text}</p>
        ${items.length ? `
            <div class="alpha-detail-list">
                ${items.map(item => `
                    <div class="alpha-detail-item">
                        <span class="alpha-check">✓</span>
                        <span>${item}</span>
                    </div>
                `).join("")}
            </div>
        ` : ""}
    </article>
    `;
}

/* ==========================================================
   BENEFITS — IMAGEM À ESQUERDA / INFORMAÇÃO À DIREITA
   ========================================================== */

function benefits(){

    return `

    <section id="alpha-benefits" class="section alpha-benefits">

        <div class="container">

            <div class="alpha-benefits-grid">

                <div class="alpha-benefits-visual reveal-left">
                    <div class="alpha-benefits-frame">
                        <div class="alpha-benefits-aura"></div>
                        <div class="alpha-benefits-ring"></div>
                        <img src="${PRODUCT_IMAGE}" alt="Alpha Vmax" loading="lazy" decoding="async">
                    </div>
                </div>

                <div class="alpha-benefits-copy reveal-right">

                    <span class="label">DESTAQUES</span>

                    <h2 class="section-title">
                        Uma proposta de
                        <span>vitalidade e performance.</span>
                    </h2>

                    <p class="lead">
                        Características apresentadas para uma rotina masculina orientada
                        para vitalidade, energia, desempenho e bem-estar.
                    </p>

                    <div class="alpha-benefit-checks">
                        ${benefitCheck("Vitalidade masculina")}
                        ${benefitCheck("Energia e disposição")}
                        ${benefitCheck("Rotina de bem-estar")}
                        ${benefitCheck("Estilo de vida activo")}
                        ${benefitCheck("Performance")}
                        ${benefitCheck("Longevidade")}
                    </div>

                    <div class="alpha-more-wrap">
                        <button
                            type="button"
                            class="alpha-more-toggle"
                            data-more-toggle="benefits"
                            data-open-label="Ver informações funcionais"
                            data-close-label="Ocultar informações"
                            aria-expanded="false"
                            aria-controls="alpha-benefits-more">
                            <span>Ver informações funcionais</span>
                            <i aria-hidden="true">+</i>
                        </button>

                        <div
                            id="alpha-benefits-more"
                            class="alpha-more-panel"
                            data-more-panel="benefits"
                            aria-hidden="true">

                            <div class="alpha-detail-grid">
                                ${detailCard("VITALIDADE","Rotina masculina","O material promocional posiciona o Alpha Vmax dentro de uma proposta de vitalidade e bem-estar masculino.")}
                                ${detailCard("PERFORMANCE","Energia e disciplina","A proposta apresentada combina produto, hábitos consistentes, actividade física e desenvolvimento pessoal.")}
                                ${detailCard("SAÚDE E BEM-ESTAR","Comunicação responsável","Alegações relativas a hormonas, fertilidade, circulação ou condições médicas requerem confirmação através de documentação oficial e orientação profissional.")}
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}

function benefitCheck(text){
    return `
    <div class="alpha-benefit-check">
        <span>✓</span>
        <p>${text}</p>
    </div>
    `;
}

/* ==========================================================
   PRODUCT DETAIL — IMAGEM À ESQUERDA / INFORMAÇÃO À DIREITA
   ========================================================== */

function productDetail(){

    return `

    <section id="alpha-products" class="section alpha-product-section">

        <div class="container">

            <div class="alpha-section-heading reveal">
                <span class="eyebrow">O PRODUTO</span>
                <h2>
                    Uma fórmula de inspiração
                    <span>botânica.</span>
                </h2>
                <p>
                    Um produto apresentado através de quatro matérias-primas de inspiração
                    botânica, enquadrado numa proposta de vitalidade, energia e performance.
                </p>
            </div>

            <div class="alpha-product-detail-grid">

                <article class="alpha-product-card reveal">

                    <div class="alpha-product-card-visual">

                        <div class="alpha-detail-aura"></div>
                        <div class="alpha-detail-ring"></div>

                        <div class="alpha-product-grid">
                            <img
                                src="${PRODUCT_IMAGE}"
                                alt="Alpha Vmax"
                                loading="lazy"
                                decoding="async"
                                class="alpha-product-detail-image"
                            >
                        </div>

                        <span class="alpha-detail-caption">
                            ALPHA VMAX · BOTANICAL PERFORMANCE
                        </span>

                    </div>

                    <div class="alpha-product-card-copy">

                        <span class="label">ALPHA VMAX</span>

                        <h3>
                            Uma proposta de vitalidade
                            <span>e desempenho.</span>
                        </h3>

                        <p>
                            A página posiciona o Alpha Vmax como um produto de bem-estar
                            masculino inspirado em ingredientes botânicos e numa visão
                            de rotina activa e disciplinada.
                        </p>

                        <div class="alpha-product-spec-list">
                            ${productSpec("Composição","Cordyceps, Goji, Ganoderma e Grainhas de Uva")}
                            ${productSpec("Posicionamento","Vitalidade e bem-estar masculino")}
                            ${productSpec("Conceito","Energia, desempenho e disciplina")}
                            ${productSpec("Utilização","Seguir sempre as indicações oficiais")}
                        </div>

                        <div class="alpha-more-wrap">
                            <button
                                type="button"
                                class="alpha-more-toggle"
                                data-more-toggle="product"
                                data-open-label="Ver mais características"
                                data-close-label="Ocultar características"
                                aria-expanded="false"
                                aria-controls="alpha-product-more">
                                <span>Ver mais características</span>
                                <i aria-hidden="true">+</i>
                            </button>

                            <div
                                id="alpha-product-more"
                                class="alpha-more-panel"
                                data-more-panel="product"
                                aria-hidden="true">

                                <div class="alpha-detail-list">
                                    ${detailItem("A comunicação do produto destaca uma fórmula de inspiração botânica.")}
                                    ${detailItem("As alegações funcionais devem ser entendidas de acordo com a documentação oficial disponível.")}
                                    ${detailItem("A utilização responsável deve acompanhar hábitos equilibrados e orientação profissional quando necessária.")}
                                </div>

                            </div>
                        </div>

                        <button type="button" class="btn btn-primary alpha-card-buy" data-buy="alpha">
                            Adquirir Alpha Vmax
                        </button>

                    </div>

                </article>

            </div>

        </div>

    </section>

    `;
}

function productSpec(label,value){
    return `
    <div class="alpha-product-spec">
        <span>${label}</span>
        <strong>${value}</strong>
    </div>
    `;
}

function detailItem(text){
    return `
    <div class="alpha-detail-item">
        <span class="alpha-check" aria-hidden="true">✓</span>
        <span>${text}</span>
    </div>
    `;
}

/* ==========================================================
   VITALIDADE — equivalente visual à secção split do iSMART
   ========================================================== */

function vitalityContext(){

    return `

    <section class="section alpha-sleep-section">

        <div class="container">

            <div class="alpha-section-heading reveal">
                <span class="eyebrow">VITALIDADE</span>
                <h2>
                    Uma rotina orientada para
                    <span>energia e consistência.</span>
                </h2>
                <p>
                    O posicionamento do Alpha Vmax enquadra o produto numa proposta
                    de rotina masculina que combina energia, disciplina, actividade e bem-estar.
                </p>
            </div>

            <div class="alpha-sleep-grid">

                <article class="alpha-sleep-card good reveal">
                    <span class="alpha-sleep-label">01 · ROTINA ACTIVA</span>
                    <h3>Vitalidade no quotidiano</h3>
                    <div class="alpha-check-list">
                        ${checkItem("Energia e disposição")}
                        ${checkItem("Actividade física")}
                        ${checkItem("Consistência")}
                    </div>
                </article>

                <article class="alpha-sleep-card attention reveal">
                    <span class="alpha-sleep-label">02 · EQUILÍBRIO</span>
                    <h3>Bem-estar sustentável</h3>
                    <div class="alpha-check-list">
                        ${checkItem("Alimentação equilibrada")}
                        ${checkItem("Sono e descanso")}
                        ${checkItem("Acompanhamento adequado")}
                    </div>
                </article>

            </div>

        </div>

    </section>

    `;
}

function checkItem(text){
    return `
    <div class="alpha-check-item">
        <span>✓</span>
        <strong>${text}</strong>
    </div>
    `;
}

/* ==========================================================
   ROTINA / CONTEXTO — imagem à esquerda, conteúdo à direita
   ========================================================== */

function routineContext(){

    return `

    <section class="section alpha-circulation">

        <div class="container">

            <div class="alpha-circulation-grid">

                <div class="alpha-circulation-visual reveal-left">

                    <div class="alpha-circulation-aura"></div>
                    <div class="alpha-circulation-orbit"></div>

                    <div class="alpha-circulation-image-wrap">
                        <img src="${PRODUCT_IMAGE}" alt="Alpha Vmax" loading="lazy" decoding="async">
                    </div>

                    <span>ROTINA ALPHA</span>
                    <small>ALPHA VMAX · AD LIFESTYLE</small>

                </div>

                <div class="alpha-circulation-copy reveal-right">

                    <span class="label">CONTEXTO</span>

                    <h2 class="section-title">
                        A performance
                        <span>começa na rotina.</span>
                    </h2>

                    <p class="lead">
                        O conceito Alpha Vmax é apresentado juntamente com uma visão de
                        disciplina, actividade, alimentação equilibrada e evolução contínua.
                    </p>

                    <div class="alpha-info-stack">
                        ${infoLine("01","Consistência","Hábitos consistentes fazem parte da visão de rotina apresentada.")}
                        ${infoLine("02","Actividade","A proposta é associada a uma rotina activa e disciplinada.")}

                        <div
                            class="alpha-more-panel"
                            data-more-panel="context"
                            aria-hidden="true"
                            id="alpha-context-more">
                            ${infoLine("03","Bem-estar","O produto é enquadrado num contexto mais amplo de bem-estar e cuidado pessoal.")}
                            ${infoLine("04","Evolução","A comunicação Alpha valoriza aprendizagem, disciplina e evolução contínua.")}
                        </div>
                    </div>

                    <button
                        type="button"
                        class="alpha-more-toggle"
                        data-more-toggle="context"
                        data-open-label="Ver mais contexto"
                        data-close-label="Ocultar contexto"
                        aria-expanded="false"
                        aria-controls="alpha-context-more">
                        <span>Ver mais contexto</span>
                        <i aria-hidden="true">+</i>
                    </button>

                </div>

            </div>

        </div>

    </section>

    `;
}

function infoLine(number,title,text){
    return `
    <div class="alpha-info-line">
        <span>${number}</span>
        <div>
            <strong>${title}</strong>
            <p>${text}</p>
        </div>
    </div>
    `;
}

/* ==========================================================
   PERFORMANCE CONTEXT
   ========================================================== */

function performanceContext(){

    return `

    <section class="section alpha-impact-section">

        <div class="container">

            <div class="alpha-section-heading reveal">
                <span class="eyebrow">FILOSOFIA ALPHA</span>
                <h2>
                    Vitalidade, energia e
                    <span>performance pessoal.</span>
                </h2>
                <p>
                    A proposta editorial do Alpha Vmax liga o produto a diferentes
                    dimensões de uma rotina disciplinada e orientada para bem-estar.
                </p>
            </div>

            <div class="alpha-impact-grid">
                ${impactCard("01","Vitalidade")}
                ${impactCard("02","Energia e disposição")}
                ${impactCard("03","Actividade e disciplina")}
                ${impactCard("04","Bem-estar masculino")}
            </div>

            <div class="alpha-more-wrap">
                <button
                    type="button"
                    class="alpha-more-toggle"
                    data-more-toggle="impact"
                    data-open-label="Ver mais dimensões"
                    data-close-label="Ocultar dimensões"
                    aria-expanded="false"
                    aria-controls="alpha-impact-more">
                    <span>Ver mais dimensões</span>
                    <i aria-hidden="true">+</i>
                </button>

                <div
                    id="alpha-impact-more"
                    class="alpha-more-panel"
                    data-more-panel="impact"
                    aria-hidden="true">
                    <div class="alpha-impact-grid alpha-impact-grid-more">
                        ${impactCard("05","Longevidade")}
                        ${impactCard("06","Confiança e consistência")}
                        ${impactCard("07","Evolução contínua")}
                    </div>
                </div>
            </div>

        </div>

    </section>

    `;
}

function impactCard(number,text){
    return `
    <article class="alpha-impact-card reveal">
        <span>${number}</span>
        <strong>${text}</strong>
    </article>
    `;
}

/* ==========================================================
   TECHNOLOGY — secção escura exacta na linguagem iSMART
   ========================================================== */

function technology(){

    return `

    <section class="section alpha-technology">

        <div class="container">

            <div class="alpha-section-heading alpha-heading-dark reveal">
                <span class="eyebrow">COMPOSIÇÃO & CONCEITO</span>
                <h2>
                    Uma fórmula pensada para
                    <span>uma rotina moderna.</span>
                </h2>
                <p>
                    O material apresentado associa o Alpha Vmax a uma composição botânica
                    e a uma abordagem de vitalidade, energia, disciplina e bem-estar.
                </p>
            </div>

            <div class="alpha-technology-feature reveal">
                <div class="alpha-technology-number">4</div>
                <div>
                    <span>MATÉRIAS-PRIMAS DESTACADAS</span>
                    <p class="alpha-dark-copy">
                        Cordyceps, Bagas de Goji, Ganoderma e Grainhas de Uva são
                        os quatro elementos principais apresentados para a fórmula.
                    </p>
                </div>
            </div>

            <div class="alpha-technology-grid">
                ${technologyCard("01","Cordyceps","Ingrediente botânico incluído na composição apresentada.")}
                ${technologyCard("02","Bagas de Goji","Ingrediente vegetal destacado na comunicação do produto.")}
                ${technologyCard("03","Ganoderma","Matéria-prima natural integrante da fórmula comunicada.")}
                ${technologyCard("04","Grainhas de Uva","Ingrediente vegetal apresentado no contexto de bem-estar.")}
            </div>

        </div>

    </section>

    `;
}

function technologyCard(number,title,text){
    return `
    <article class="alpha-technology-card reveal">
        <span>${number}</span>
        <h3>${title}</h3>
        <p>${text}</p>
    </article>
    `;
}

/* ==========================================================
   INGREDIENTES — mesma composição visual split do iSMART
   ========================================================== */

function ingredients(){

    return `

    <section class="section alpha-pillow-section">

        <div class="container">

            <div class="alpha-pillow-grid">

                <div class="alpha-pillow-copy reveal-left">

                    <span class="label">INGREDIENTES</span>

                    <h2 class="section-title">
                        Botânicos
                        <span>seleccionados.</span>
                    </h2>

                    <p class="lead">
                        A composição comunicada reúne quatro matérias-primas de origem
                        botânica, apresentadas dentro da identidade Alpha Vmax.
                    </p>

                    <div class="alpha-benefit-checks">
                        ${benefitCheck("Cordyceps")}
                        ${benefitCheck("Bagas de Goji")}
                        ${benefitCheck("Ganoderma")}
                        ${benefitCheck("Grainhas de Uva")}
                    </div>

                    <button type="button" class="btn btn-primary" data-scroll="#alpha-composition">
                        Explorar composição
                    </button>

                </div>

                <div class="alpha-pillow-visual reveal-right">

                    <div class="alpha-pillow-frame">
                        <div class="alpha-pillow-aura"></div>
                        <div class="alpha-pillow-image-grid">
                            <img src="${PRODUCT_IMAGE}" alt="Alpha Vmax" loading="lazy" decoding="async">
                        </div>
                        <span>ALPHA VMAX · BOTANICAL FORMULA</span>
                    </div>

                </div>

            </div>

        </div>

    </section>

    `;
}

/* ==========================================================
   ROUTINE / UTILIZAÇÃO
   ========================================================== */

function routine(){

    return `

    <section class="section alpha-routine">

        <div class="container-sm">

            <div class="alpha-section-heading reveal">
                <span class="eyebrow">UTILIZAÇÃO</span>
                <h2>
                    Uma rotina simples
                    e <span>consistente.</span>
                </h2>
                <p>
                    O modo exacto de utilização deve seguir a indicação oficial do produto.
                    A informação abaixo organiza o material apresentado de forma editorial.
                </p>
            </div>

            <div class="alpha-routine-list">

                ${routineStep("01","Primeira caixa","1 saqueta por dia, conforme o material apresentado.")}
                ${routineStep("02","Segunda caixa","1 saqueta a cada 2 dias, conforme o material apresentado.")}

                <div
                    class="alpha-more-panel"
                    data-more-panel="routine"
                    aria-hidden="true"
                    id="alpha-routine-more">
                    ${routineStep("03","Terceira caixa","1 saqueta a cada 3 dias, conforme o material apresentado.")}
                    ${routineStep("04","Confirmação","A indicação da embalagem oficial prevalece e deve ser confirmada antes da utilização.")}
                </div>

            </div>

            <button
                type="button"
                class="alpha-more-toggle"
                data-more-toggle="routine"
                data-open-label="Ver mais passos"
                data-close-label="Ocultar passos"
                aria-expanded="false"
                aria-controls="alpha-routine-more">
                <span>Ver mais passos</span>
                <i aria-hidden="true">+</i>
            </button>

        </div>

    </section>

    `;
}

function routineStep(number,title,text){
    return `
    <article class="alpha-routine-step reveal">
        <div class="alpha-routine-number">${number}</div>
        <div>
            <h3>${title}</h3>
            <p>${text}</p>
        </div>
    </article>
    `;
}

/* ==========================================================
   FAQ — respostas completas e primeira resposta visível
   ========================================================== */

function faq(){

    const questions = [
        [
            "O que é o Alpha Vmax?",
            "O Alpha Vmax é apresentado como um produto de inspiração botânica destinado a integrar uma rotina masculina orientada para vitalidade, energia, desempenho e bem-estar."
        ],
        [
            "Quais são os principais ingredientes?",
            "O material apresentado destaca Cordyceps, bagas de Goji, Ganoderma e grainhas de uva como matérias-primas orgânicas da composição comunicada."
        ],
        [
            "Como é apresentado o modo de utilização?",
            "O material fornecido indica 1 saqueta por dia na primeira caixa, 1 saqueta a cada 2 dias na segunda e 1 saqueta a cada 3 dias na terceira. A indicação da embalagem oficial deve ser sempre confirmada antes da utilização."
        ],
        [
            "O Alpha Vmax substitui uma alimentação saudável?",
            "Não. A utilização de um suplemento não substitui alimentação equilibrada, actividade física adequada, sono, descanso e outros hábitos de saúde."
        ],
        [
            "O Alpha Vmax é um medicamento?",
            "A página apresenta o Alpha Vmax como produto de bem-estar e não como medicamento. Alegações relacionadas com doenças ou tratamentos requerem confirmação através de documentação oficial e de um profissional de saúde."
        ],
        [
            "O produto pode ser utilizado por qualquer pessoa?",
            "A utilização deve seguir as indicações oficiais do produto. Pessoas com condições de saúde, que utilizem medicamentos ou que tenham dúvidas sobre suplementos devem procurar orientação profissional antes da utilização."
        ],
        [
            "O Alpha Vmax garante resultados relacionados com testosterona ou fertilidade?",
            "Não devem ser apresentadas garantias de resultados médicos. Eventuais referências promocionais a hormonas, fertilidade ou desempenho devem ser entendidas como alegações do material de apresentação e não como garantia clínica."
        ],
        [
            "Onde posso obter mais informações?",
            "Pode contactar directamente a AD Lifestyle através do WhatsApp para receber informações sobre disponibilidade, produto e aquisição."
        ]
    ];

    return `

    <section id="alpha-faq" class="section alpha-faq-section">

        <div class="container-sm">

            <div class="alpha-section-heading reveal">
                <span class="eyebrow">PERGUNTAS FREQUENTES</span>
                <h2>
                    Tudo sobre o
                    <span>Alpha Vmax.</span>
                </h2>
                <p>
                    Seleccione uma pergunta para abrir a resposta. A primeira resposta
                    fica visível por defeito para que a informação principal esteja imediatamente disponível.
                </p>
            </div>

            <div class="alpha-faq-list">
                ${questions.map(([questionText,answerText],index) =>
                    faqItem(
                        String(index + 1).padStart(2,"0"),
                        questionText,
                        answerText,
                        index === 0
                    )
                ).join("")}
            </div>

        </div>

    </section>

    `;
}

function faqItem(number,questionText,answerText,isOpen=false){

    const answerId = `alpha-faq-answer-${number}`;

    return `
    <article class="alpha-faq-item${isOpen ? " active" : ""}">
        <button
            type="button"
            class="alpha-faq-question"
            aria-expanded="${isOpen}"
            aria-controls="${answerId}">
            <span class="alpha-faq-number">${number}</span>
            <span class="alpha-faq-text">${questionText}</span>
            <span class="alpha-faq-plus" aria-hidden="true">${isOpen ? "−" : "+"}</span>
        </button>
        <div
            id="${answerId}"
            class="alpha-faq-answer"
            role="region"
            aria-hidden="${!isOpen}">
            <p>${answerText}</p>
        </div>
    </article>
    `;
}

/* ==========================================================
   INFORMATION
   ========================================================== */

function information(){

    return `

    <section class="section alpha-information-section">

        <div class="container">

            <div class="alpha-information-box reveal">

                <div class="alpha-information-icon">i</div>

                <div>
                    <span class="label">COMUNICAÇÃO RESPONSÁVEL</span>

                    <h2>
                        O que é apresentado
                        e o que requer confirmação.
                    </h2>

                    <p>
                        As características, propriedades e alegações apresentadas nesta página
                        foram organizadas a partir do material disponibilizado para o Alpha Vmax.
                    </p>

                    <p>
                        Informações relacionadas com efeitos terapêuticos, alterações fisiológicas,
                        fertilidade, hormonas ou benefícios clínicos devem ser confirmadas através
                        de documentação oficial e orientação profissional adequada.
                    </p>
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

    <section class="section alpha-cta-section">

        <div class="container">

            <div class="alpha-cta-box reveal">

                <span class="alpha-label-light">ALPHA VMAX</span>

                <h2>
                    Eleve a sua rotina
                    <span>para outro nível.</span>
                </h2>

                <p>
                    Descubra uma proposta premium que combina uma composição de inspiração
                    botânica, vitalidade, disciplina e lifestyle.
                </p>

                <div class="alpha-cta-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="alphaWhats">
                        Falar no WhatsApp
                    </button>

                    <button
                        type="button"
                        class="btn btn-glass"
                        id="backHome">
                        Voltar à AD Lifestyle
                    </button>

                </div>

            </div>

        </div>

    </section>

    `;
}

/* ==========================================================
   INITIALISE
   ========================================================== */

function initialiseAlpha(){

    const root = document.querySelector(".page-alpha");

    if(!root) return;

    try{
        root.querySelectorAll(".btn").forEach(button => ripple(button));
    }catch(error){
        console.warn("Alpha Vmax: ripple não inicializado.",error);
    }

    try{
        stagger(
            root.querySelectorAll(`
                .alpha-overview-grid .reveal,
                .alpha-composition-grid .reveal,
                .alpha-benefits-grid .reveal,
                .alpha-product-detail-grid .reveal,
                .alpha-sleep-grid .reveal,
                .alpha-impact-grid .reveal,
                .alpha-technology-grid .reveal,
                .alpha-routine-list .reveal
            `)
        );
    }catch(error){
        console.warn("Alpha Vmax: stagger não inicializado.",error);
    }

    root.addEventListener("click", event => {

        const scrollTrigger = event.target.closest("[data-scroll]");

        if(scrollTrigger){
            const selector = scrollTrigger.getAttribute("data-scroll");
            if(selector){
                root.querySelector(selector)?.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });
            }
            return;
        }

        const moreButton = event.target.closest("[data-more-toggle]");

        if(moreButton){
            const key = moreButton.getAttribute("data-more-toggle");
            const panel = root.querySelector(`[data-more-panel="${key}"]`);

            if(!panel) return;

            const open = moreButton.getAttribute("aria-expanded") === "true";
            const next = !open;

            moreButton.setAttribute("aria-expanded",String(next));
            moreButton.classList.toggle("active",next);
            panel.classList.toggle("active",next);
            panel.setAttribute("aria-hidden",String(!next));

            if(next){
                panel.style.maxHeight = `${panel.scrollHeight}px`;
                panel.querySelectorAll(".reveal").forEach(item => item.classList.add("is-visible"));
            }else{
                panel.style.maxHeight = `${panel.scrollHeight}px`;
                requestAnimationFrame(() => panel.style.maxHeight = "0px");
            }

            const label = moreButton.querySelector("span");
            if(label){
                label.textContent = next
                    ? moreButton.dataset.closeLabel || "Ver menos"
                    : moreButton.dataset.openLabel || "Ver mais";
            }

            return;
        }

        const faqButton = event.target.closest(".alpha-faq-question");

        if(faqButton){
            const item = faqButton.closest(".alpha-faq-item");
            const answer = item?.querySelector(".alpha-faq-answer");

            if(!item || !answer) return;

            const isOpen = item.classList.contains("active");

            root.querySelectorAll(".alpha-faq-item.active").forEach(other => {
                if(other !== item) closeFaqItem(other);
            });

            if(isOpen){
                closeFaqItem(item);
            }else{
                openFaqItem(item,faqButton,answer);
            }

            return;
        }

        const buyButton = event.target.closest("#buyAlpha, #alphaWhats, [data-buy]");

        if(buyButton){
            let message = "Olá AD Lifestyle! Tenho interesse no Alpha Vmax e gostaria de receber mais informações sobre o produto.";
            const type = buyButton.getAttribute("data-buy");

            if(type === "alpha"){
                message = "Olá AD Lifestyle! Gostaria de adquirir o Alpha Vmax.";
            }

            if(buyButton.id === "alphaWhats"){
                message = "Olá AD Lifestyle! Tenho interesse no Alpha Vmax e gostaria de receber informações sobre disponibilidade e aquisição.";
            }

            openWhatsApp(message);
            return;
        }

        if(event.target.closest("#backHome")){
            navigate("/");
        }

    });

    root.querySelectorAll(".alpha-product-grid img, .alpha-product-card-visual img, .alpha-circulation-image-wrap img, .alpha-pillow-image-grid img").forEach(image => {
        image.addEventListener("error",() => {
            image.parentElement?.classList.add("image-error");
        },{once:true});
    });

    // Mantém a primeira resposta do FAQ visível desde o carregamento.
    const firstFaq = root.querySelector(".alpha-faq-item.active");
    if(firstFaq){
        const button = firstFaq.querySelector(".alpha-faq-question");
        const answer = firstFaq.querySelector(".alpha-faq-answer");
        if(button && answer){
            openFaqItem(firstFaq,button,answer);
        }
    }

    window.addEventListener("resize",() => {
        root.querySelectorAll(".alpha-faq-item.active .alpha-faq-answer").forEach(answer => {
            answer.style.maxHeight = `${answer.scrollHeight}px`;
        });

        root.querySelectorAll(".alpha-more-panel.active").forEach(panel => {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
        });
    },{passive:true});
}

function openFaqItem(item,button,answer){
    item.classList.add("active");
    button.setAttribute("aria-expanded","true");
    answer.setAttribute("aria-hidden","false");
    const plus = item.querySelector(".alpha-faq-plus");
    if(plus) plus.textContent = "−";
    answer.style.maxHeight = `${answer.scrollHeight}px`;
}

function closeFaqItem(item){
    const button = item.querySelector(".alpha-faq-question");
    const answer = item.querySelector(".alpha-faq-answer");
    const plus = item.querySelector(".alpha-faq-plus");

    item.classList.remove("active");

    if(button) button.setAttribute("aria-expanded","false");
    if(answer){
        answer.setAttribute("aria-hidden","true");
        answer.style.maxHeight = "0px";
    }
    if(plus) plus.textContent = "+";
}

function openWhatsApp(message){
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url,"_blank","noopener,noreferrer");
}
