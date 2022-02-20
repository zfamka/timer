const input = document.querySelector('input');
const button = document.querySelector('button');
const out = document.querySelector('.timer');
const outOfTime = document.querySelector('.time_gone');

function printNumbers(from, to) {
  let current = from;

  function go() {
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

  go();
  let timerId = setInterval(go, 1000);
}

button.addEventListener('click', () => {
  printNumbers(input.value, 0);
})
