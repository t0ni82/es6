/*
<div class="key">a<small>e.key</small></div>
<div class="key">65<small>e.keyCode</small></div>
<div class="key">KeyA<small>e.code</small></div>
 */
const insertDiv = document.querySelector("#insert");
window.addEventListener("keyup", (e) => {
  console.log(e);
  insertDiv.innerHTML = `<div class="key">a
                                <small>e.key</small>
                        </div>`;
});
