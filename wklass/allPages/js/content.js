"use strict";
document.querySelector('link[rel*="icon"]').href = chrome.runtime.getURL(`favicon.ico`);
document.querySelector("head > title").innerHTML = "wklass";
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("href", "https://fonts.googleapis.com/css?family=Prompt:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic");
document.head.appendChild(link);
