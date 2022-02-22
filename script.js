const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const button = document.querySelector('button');
const out = document.querySelector('.timer');
const outOfTime = document.querySelector('.time_gone');

function printNumbers(from, to) {
  let current = from;

  function seconds() {
    out.innerHTML = current
    if (current == to) {
      clearInterval(timerId);
    }
    current--;

    if (current == to - 1) {
      outOfTime.innerHTML = 'outOfTime'
    }
    console.log(current)
  }

  seconds();
  let timerId = setInterval(seconds, 1000);
}

button.addEventListener('click', () => {
  printNumbers(seconds.value, 0);
})
