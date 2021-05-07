let fixFeedEvent = (feedElement: HTMLDivElement) => {
  let feedBody = feedElement.getElementsByClassName("feed-body")[0];
  let feedTextList = (feedBody as HTMLParagraphElement).innerHTML.split("<a");

  for (let i = 1; i < feedTextList.length; i++) {
    feedTextList[i] = "<a" + feedTextList[i];
  }

  let inCourse = feedTextList[feedTextList.length - 2].substr(
    feedTextList[feedTextList.length - 2].indexOf("</a>") + 4
  );

  let attachList: string[] = [];
  for (let i = 2; i < feedTextList.length - 2; i++) {
    attachList.push(`<li class="attachment">${feedTextList[i]}</li>`);
  }

  attachList.push(
    `<li class="attachment">${feedTextList[feedTextList.length - 2].substr(
      0,
      feedTextList[feedTextList.length - 2].indexOf("</a>") + 4
    )}</li>`
  );
  let attachments = attachList.join("");
  let newInner = `
    ${feedTextList[0]}${feedTextList[1]}${inCourse}${feedTextList[feedTextList.length - 1]}
    <ul class="attchmentList">
      ${attachments}
    </ul>
  `;
  (feedBody as HTMLParagraphElement).innerHTML = newInner;
};

let feedItems = document.getElementsByClassName("profile-feed");
for (let i = 0; i < feedItems.length; i++) {
  fixFeedEvent(feedItems[i] as HTMLDivElement);
}
