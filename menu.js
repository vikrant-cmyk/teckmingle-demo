const button = document.querySelector('.menu');
const navigation = document.querySelector('#nav');
function toggle(open) {
  button.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
}
button.addEventListener('click', () => toggle(button.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
    toggle(false);
    button.focus();
  }
});