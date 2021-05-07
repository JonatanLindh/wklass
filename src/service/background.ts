let openTab = (url: string): any => {
  let tab = chrome.tabs.create({ url: url });
  return tab;
};

let closeTab = (tabId: string): any => {
  let result = chrome.tabs.remove(parseInt(tabId));
  console.log(result);
  return result;
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let messageList = message.split(" ");
  if (messageList[0] == "open-tab") {
    openTab(messageList[1]).then((tab: chrome.tabs.Tab) => sendResponse(tab));
  } else if (messageList[0] == "close-tab") {
    closeTab(messageList[1]).then((result: any) => sendResponse(result));
  }
  return true;
});
