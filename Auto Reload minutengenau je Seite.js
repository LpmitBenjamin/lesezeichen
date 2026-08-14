// ==UserScript==
// @name         Auto Reload minutengenau je Seite
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  Trigger bei Minutenwechsel, Reload bei :05
// @author       Benjamin
// @match        http://192.168.178.62:8080/Dashboard.html
// @match        http://192.168.178.62:8080/Yazio.html
// @match        http://192.168.178.60:8080/Leitstellenspiel/LSS%20Credits.html
// @match        http://192.168.178.60:8080/kalender_timeline.html
// @match        http://192.168.178.60:8080/Pengu.html
// @match        http://192.168.178.60:8080/Spritkosten.html
// @match        http://192.168.178.60:8080/data.json
// @match        https://www.leitstellenspiel.de/buildings/26829186
// @match        https://www.leitstellenspiel.de/vehicles/*
// @match        https://www.webcountdown.de/*
// @match        http://192.168.178.60:8080/Router.html
// @match        https://www.dhl.de/de/privatkunden/dhl-sendungsverfolgung.html?piececode=*
// @match        https://www.amazon.de/gp/your-account/ship-track?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=https://www.lifeofriley.de
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const RELOAD_DELAY_MS = 5000; // Reload bei :05

    function scheduleReload() {
        const now = new Date();

        // Zeit bis zur nächsten vollen Minute (:00)
        const msUntilMinuteChange =
            (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        setTimeout(() => {
            // Minutenwechsel erreicht → jetzt 5s warten
            setTimeout(() => {
                location.reload();
            }, RELOAD_DELAY_MS);
        }, msUntilMinuteChange);
    }

    scheduleReload();
})();
