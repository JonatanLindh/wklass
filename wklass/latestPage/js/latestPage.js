"use strict";
let fixFeedEvent = (feedElement) => {
    let feedBody = feedElement.getElementsByClassName("feed-body")[0];
    let feedTextList = feedBody.innerHTML.split("<a");
    for (let i = 1; i < feedTextList.length; i++) {
        feedTextList[i] = "<a" + feedTextList[i];
    }
    if (feedTextList.length <= 3)
        return;
    let inCourse = feedTextList[feedTextList.length - 2].substr(feedTextList[feedTextList.length - 2].indexOf("</a>") + 4);
    let attachList = [];
    for (let i = 2; i < feedTextList.length - 2; i++) {
        attachList.push(`<li class="attachment">${feedTextList[i]}</li>`);
    }
    attachList.push(`<li class="attachment">${feedTextList[feedTextList.length - 2].substr(0, feedTextList[feedTextList.length - 2].indexOf("</a>") + 4)}</li>`);
    let attachments = attachList.join("");
    let newInner = `
    ${feedTextList[0]}${feedTextList[1]}${inCourse}${feedTextList[feedTextList.length - 1]}
    <ul class="attchmentList">
      ${attachments}
    </ul>
  `;
    feedBody.innerHTML = newInner;
};
let feedItems = document.getElementsByClassName("profile-feed");
for (let i = 0; i < feedItems.length; i++) {
    try {
        fixFeedEvent(feedItems[i]);
    }
    catch (error) { }
}
