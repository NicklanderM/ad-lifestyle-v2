/* ==========================================================
   AD LIFESTYLE — CONTACT.JS
   TESTE DE INTEGRAÇÃO
   ========================================================== */

import { applyTheme } from "../js/theme.js";

export function loadContact(){

    console.log("CONTACT.JS — LOAD CONTACT OK");

    applyTheme("angel");

    const app = document.getElementById("app");

    if(!app){
        console.error("AD LIFESTYLE: #app não encontrado.");
        return;
    }

    app.innerHTML =
        '<section class="hero contact-hero">' +
            '<div class="container section-center">' +
                '<span class="label">Contacto</span>' +
                '<h1 class="display">Contacte-nos</h1>' +
                '<p class="lead">AD Lifestyle — Luanda, Angola</p>' +
                '<button class="btn btn-primary" id="contactWhatsApp">' +
                    'Falar no WhatsApp' +
                '</button>' +
            '</div>' +
        '</section>';

    const button =
        document.getElementById("contactWhatsApp");

    if(button){

        button.addEventListener("click", function(){

            const message =
                encodeURIComponent(
                    "Olá AD Lifestyle! Gostaria de entrar em contacto convosco."
                );

            window.open(
                "https://wa.me/244924964666?text=" + message,
                "_blank"
            );

        });

    }

}
