let interestsMain = document.querySelector('.interests_main');
let interestsCheck = document.querySelectorAll('.interest__check');

interestsMain.addEventListener('change', event => {
    let parent = event.target.parentElement;
    let childElement = Array.from(parent.nextElementSibling.querySelectorAll('.interest__check'));
   
    childElement.forEach(element => {
        event.target.checked ? element.checked = true : element.checked = false;
    })
});