const sumForm = document.querySelector('.add-sum-form');
const addSum = sumForm.querySelector('input');
let budgetSum = 0;

let categories = [
  'Еда',
  'Транспорт',
  'Развлечения',
  'Одежда',
  'Красота',
  'Здоровье',
  'Другое',
];

sumForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log((budgetSum = budgetSum + Number(addSum.value)));
  // document.getElementById('total-element').innerHTML = budgetSum;
  document.getElementById('total-element').textContent = budgetSum;
  sumForm.querySelector('input').value = '';
});

let container = document.querySelector('.container');
let tags = document.createElement('div');
container.append(tags);
categories.reverse()
categories.forEach(Element => {
  let span = document.createElement('span');
  span.textContent = Element;
  tags.append(span);
});