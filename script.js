const sumForm = document.querySelector('.add-sum-form');
const addSum = sumForm.querySelector('input');

sumForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(Number(addSum.value))
});