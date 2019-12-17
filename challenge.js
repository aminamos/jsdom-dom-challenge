window.addEventListener('DOMContentLoaded', function(event) {
  let counter = 0;
  let seconds = setInterval(incrementSeconds, 1000);
  let clicked = false;
  // let num = document.querySelector("#counter").innerText;

  function incrementSeconds() {
    counter += 1;
    document.querySelector('#counter').innerText = counter.toString();
  }

  document.querySelector('#minus').addEventListener('click', function(event) {
    counter -= 1;
    document.querySelector('#counter').innerText = counter.toString();
  });

  document.querySelector('#plus').addEventListener('click', function(event) {
    counter += 1;
    document.querySelector('#counter').innerText = counter.toString();
  });

  document.querySelector('#heart').addEventListener('click', function(event) {
    console.log('click');
  });

  document.querySelector('#pause').addEventListener('click', function(event) {
    clearInterval(seconds);
    document.querySelector('#pause').innerText = 'Resume';
    document.querySelector('#pause').id = 'resume';
    clicked = true;
  });

  if (clicked) {
    document
      .querySelector('#resume')
      .addEventListener('click', function(event) {
        // incrementSeconds();
        document.querySelector('#resume').innerText = 'pause';
        document.querySelector('#resume').id = 'pause';
      });
    clicked = false;
  }

  incrementSeconds();
});
