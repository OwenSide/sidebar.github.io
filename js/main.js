const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});