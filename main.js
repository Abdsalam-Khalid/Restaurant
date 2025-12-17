let lightModeBtn = document.querySelector('.light-mode');

let darkModeBtn = document.querySelector('.dark-mode');


const lightMode = () => {
    document.body.background = '#fff';
    document.body.color = '#0b0b0bff'
};

lightModeBtn.addEventListener('click' , lightMode);

const darkMode = () => {
   document.body.background = '#0b0b0bff#';
    document.body.color = '#fff'
};

darkModeBtn.addEventListener('click' , lightMode);


