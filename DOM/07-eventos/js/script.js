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
  const div = document.createElement("div");
  /**
   * El codigo retante aqui....
   */
  insertDiv.appendChild(div);
}
// window.addEventListener("keyup", getKeyCodeInnerHTML);
window.addEventListener("keyup", getKeyCodeCreateNodes);
