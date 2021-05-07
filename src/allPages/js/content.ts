(document.querySelector('link[rel*="icon"]') as HTMLLinkElement).href = chrome.runtime.getURL(`favicon.ico`);
(document.querySelector("head > title") as HTMLTitleElement).innerHTML = "wklass";
