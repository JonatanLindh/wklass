function setParent(el: HTMLElement, newParent: HTMLElement) {
  newParent.appendChild(el);
}

setParent(
  document.querySelector("#myToolsBox") as HTMLElement,
  document.querySelector("#ctl00_bodyContainer") as HTMLElement
);
