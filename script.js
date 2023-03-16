function calculate() {
  const input = document.getElementById('input').value;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input.charCodeAt(i);
  }
  document.getElementById('output').textContent = `The ASCII sum of "${input}" is ${sum}.`;
}
