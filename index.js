const scope = document.querySelector('.custom-pdp');

const minus = scope.querySelector('.minus');
const plus = scope.querySelector('.plus');
const count = scope.querySelector('.count');

minus.onclick = () => count.textContent = Math.max(1, +count.textContent - 1);
plus.onclick = () => count.textContent = +count.textContent + 1;

scope.querySelectorAll('.custom-pdp__thumb').forEach(img => {
  img.onclick = () => scope.querySelector('#customPdpMainImg').src = img.src;
});