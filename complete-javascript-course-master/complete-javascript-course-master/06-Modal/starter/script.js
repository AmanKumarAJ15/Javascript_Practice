'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const closeFun = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const OpenFun = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i=0; i<btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', 
        // console.log('Button Clicked');
        // modal.classList.remove('hidden');
        // overlay.classList.remove('hidden');
        //using function
        OpenFun);
        btnCloseModal.addEventListener('click', closeFun)
}

overlay.addEventListener('click', closeFun);

document.addEventListener('keydown', function(e) {
    // console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // if(!modal.classList.contains('hidden')) {
            closeFun();
        // }
    }
})