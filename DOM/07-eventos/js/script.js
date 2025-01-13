function getKeyCodeInnerHTML(e) {
  console.log(e);
  const insertDiv = document.querySelector("#insert");
  insertDiv.innerHTML = `<div class="key">${e.key === " " ? "Espacio" : e.key}
                                  <small>e.key</small>
                          </div>
                          <div class="key">${e.keyCode}
                                  <small>e.keyCode</small>
                          </div>
                          <div class="key">${e.code}
                                  <small>e.code</small>
                          </div>`;
}
function getKeyCodeCreateNodes(e) {
  //TODO obtener la mima funcionalidad que la funcion anterior
  //pero usando createElement, createTextNode y appendChild
  //Sin innerHtml
  const insertDiv = document.querySelector("#insert");
  insertDiv.textContent = "";

  const div1 = createDiv("e.key", e.key);
  const div2 = createDiv("e.keyCode", e.keyCode);
  const div3 = createDiv("e.code", e.code);

  insertDiv.appendChild(div1);
  insertDiv.appendChild(div2);
  insertDiv.appendChild(div3);
}
// window.addEventListener("keyup", getKeyCodeInnerHTML);
window.addEventListener("keyup", getKeyCodeCreateNodes);

function createDiv(_keyText, _valueText) {
  const div = document.createElement("div");
  div.classList.add("key");

  const small = document.createElement("small");
  const keyText = document.createTextNode(_keyText);
  small.appendChild(keyText);

  const valueText = document.createTextNode(_valueText);
  div.appendChild(valueText);
  div.appendChild(small);
  return div;
}
