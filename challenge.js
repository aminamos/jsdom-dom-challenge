window.addEventListener("DOMContentLoaded", function(event) {
  let counter = 0;

  setInterval(function() {
    counter += 1;
    document.querySelector("#counter").innerText = counter.toString();
  }, 1000);

  document.querySelector('#minus').addEventListener
});
