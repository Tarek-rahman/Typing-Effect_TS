const text: string = 'Welcome to my Website!';
const effect = document.querySelector('.effect') as HTMLDivElement;
let index: number = 0;
let isDeleting: boolean = false;
const typingEffect = () => {
  if (!isDeleting && index <= text.length) {
    effect.textContent = text.substring(0, index);
    index++;
  } else if (isDeleting && index >= 0) {
    effect.textContent = text.substring(0, index);
    index--;
  }

  if (index > text.length) {
    isDeleting = true;
  } else if (index < 0) {
    isDeleting = false;
  }
  setTimeout(typingEffect, 200);
};
typingEffect();
