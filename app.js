'use strict'
const switcher = document.querySelector('.btn')
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var classname = document.body.className
    if(classname == 'light-theme') {
        this.textContent = 'dark';
    }
    else{
        this.textContent='light';
    }
    console.log(`curent classname: ' ${classname}`);
});


window.onload = function() {
    const animatedText = document.getElementById("animatedtext");
    animatedText.textContent = "Task list";
    setTimeout(() => {
        animatedText.style.opacity = "1";
        animatedText.style.transform = "translateY(0)";
    }, 300);
};
