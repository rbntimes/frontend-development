const preElements = document.querySelectorAll("pre");

for (i = 0; i < preElements.length; i++) {
  const text = String(preElements[i].innerHTML)
    .replace(/</g, "&#x3C;")
    .replace(/>/g, "&#x3E;");

  preElements[i].innerHTML = text;
}
