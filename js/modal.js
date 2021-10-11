const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});
modal.addEventListener('click', (event) => {
    const target = event.target;
//modal__close
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden');
    }
});