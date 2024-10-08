// ==UserScript==
// @name        Download from www.redgifs.com
// @namespace   Violentmonkey Scripts
// @match       https://www.redgifs.com/*
// @grant       none
// @version     1.0
// @author      ape-that-presses-keys
// @license     MIT
// @description Simple download button, only works for the first gif/video on a page.
// @updateURL   https://openuserjs.org/meta/ape-that-presses-keys/DownloadRedgifs.meta.js
// ==/UserScript==

function dl() {
    let i = document.querySelector("img.Player-Poster").src;
    let u = i.substring(0, i.length - 11);
    if (document.querySelector("video").src.substring(0, 4) == "blob") {
        u = u + ".m4s";
    } else {
        u = u + ".mp4";
    }
    window.open(u, "_blank");
}

let dl_button = document.createElement("button");
dl_button.onclick = dl;
dl_button.innerText = "DL";

let dl_button_inserted = false;
let append_dl_button_interval = setInterval(() => {
let parent_element = document.querySelector(".GifPreview-SideBarWrap");
    if (parent_element && !dl_button_inserted) {
        document.querySelector(".GifPreview-SideBarWrap").appendChild(dl_button);
        dl_button_inserted = true;
    }
}, 500);
// document.readyState === 'complete' &&
setTimeout(() => {
    clearInterval(append_dl_button_interval);
}, 10000);
