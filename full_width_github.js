// ==UserScript==
// @name         Github Full Width
// @namespace    https://github.com/msmeeks/FullWidthGithub
// @version      0.1
// @description  Makes Github's main content fill the width of the window
// @author       Michael Meeks
// @match        https://gitihub.com/*
// @grant        none
// ==/UserScript==

(function() {
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('.container { width:auto; margin-right: 20px; margin-left: 20px; }');
})();
