const text = 'Welcome to my Website!';
const effect = document.querySelector('.effect');
let index = 0;
let isDeleting = false;
const typingEffect = () => {
    if (!isDeleting && index <= text.length) {
        effect.textContent = text.substring(0, index);
        index++;
    }
    else if (isDeleting && index >= 0) {
        effect.textContent = text.substring(0, index);
        index--;
    }
    if (index > text.length) {
        isDeleting = true;
    }
    else if (index < 0) {
        isDeleting = false;
    }
    setTimeout(typingEffect, 200);
};
typingEffect();
export {};
//# sourceMappingURL=type.js.map