let answer = document.getElementById('answer');

function operate(value) {
  if (value === '=') {
    answer.value = eval(answer.value);
  } else {
    answer.value += value;
  }
}

function clearResult() {
  answer.value = '';
}