let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

let modalClosed = document.getElementsByClassName('modal__close');
for (let i = 0; i < modalClosed.length; i++) {
    modalClosed[i].onclick = function () {
          this.closest('.modal').classList.remove('modal_active');  
     }
}

let showSuccess = document.querySelector('.show-success');
let modalSuccess = document.querySelector('#modal_success');
showSuccess.onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

document.querySelector('.btn_success').onclick = function () {
    this.closest('.modal_active').classList.remove('modal_active');
}