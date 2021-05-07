"use strict";
document.querySelector('link[rel*="icon"]').href = chrome.runtime.getURL(`favicon.ico`);
document.querySelector("head > title").innerHTML = "wklass";
