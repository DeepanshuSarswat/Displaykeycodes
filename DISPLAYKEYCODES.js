const container = document.querySelector(".container");

window.addEventListener("keydown", function (event) {
  container.innerHTML = ` 
      
   <div class="eventresult">
        <small>event.key</small>
        ${event.key === " " ? "Space" : event.key}
      </div>
      <div class="eventresult">
        <small>evejnt.keycode</small>
        ${event.keyCode}
      </div>
      <div class="eventresult">
        <small>event.code</small>
        ${event.code}
      </div>`;
});
