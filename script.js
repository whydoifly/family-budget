const sumForm = document.querySelector('.add-sum-form');
const addSum = sumForm.querySelector('input');
let budgetSum = 0;

sumForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(budgetSum = budgetSum + Number(addSum.value));
    // document.getElementById('total-element').innerHTML = budgetSum;
    document.getElementById('total-element').textContent = budgetSum;
    sumForm.querySelector('input').value = "";
});