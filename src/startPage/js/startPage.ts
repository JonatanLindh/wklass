let changePaperclip = () => {
  let elements = document.querySelectorAll(".newsPost > a > p > img");

  elements.forEach((element) => {
    if (!element) return;
    let icon = document.createElement("a");
    icon.innerHTML = "attachment";
    element.parentElement?.appendChild(icon);
  });
};

changePaperclip();
