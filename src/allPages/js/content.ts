(document.querySelector('link[rel*="icon"]') as HTMLLinkElement).href = chrome.runtime.getURL(`favicon.ico`);
(document.querySelector("head > title") as HTMLTitleElement).innerHTML = "wklass";

let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("href", "https://fonts.googleapis.com/css?family=Poppins:regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic");
document.head.appendChild(link);
