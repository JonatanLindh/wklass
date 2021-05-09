"use strict";
function setParent(el, newParent) {
    newParent.appendChild(el);
}
setParent(document.querySelector("#myToolsBox"), document.querySelector("#ctl00_bodyContainer"));
