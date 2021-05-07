"use strict";
let openTab = (url) => {
    let tab = chrome.tabs.create({ url: url });
    return tab;
};
let closeTab = (tabId) => {
    let result = chrome.tabs.remove(parseInt(tabId));
    console.log(result);
    return result;
};
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let messageList = message.split(" ");
    if (messageList[0] == "open-tab") {
        openTab(messageList[1]).then((tab) => sendResponse(tab));
    }
    else if (messageList[0] == "close-tab") {
        closeTab(messageList[1]).then((result) => sendResponse(result));
    }
    return true;
});
