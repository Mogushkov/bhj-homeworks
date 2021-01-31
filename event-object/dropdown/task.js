let dropdown = document.querySelector('.dropdown');
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

console.log(dropdownValue);
console.log(dropdownItem);

dropdown.addEventListener('click', (event) => {
    console.log(event.target)
    dropdownValue.textContent = event.target.textContent

    event.preventDefault()
    dropdown.lastElementChild.classList.toggle('dropdown__list_active')
})
