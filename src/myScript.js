'use strict';

const overlay = document.querySelector('.overlay');
const indexImage = document.querySelectorAll('.index-img');

//index pictures when you press them it shows them bigger and when you press the overlay they get back to the same as they were before
for(let i = 0; i < indexImage.length; i++) {
    indexImage[i].addEventListener('click', function() {
        overlay.classList.remove('hidden');
        indexImage[i].style.width = "50%";
        indexImage[i].style.zIndex = "10";
        indexImage[i].style.position = "fixed";
        indexImage[i].style.bottom = "10%";
    })

    indexImage[i].addEventListener('mouseover', function() {
        if(overlay.classList.contains('hidden')){
        indexImage[i].style.height = "auto";
        indexImage[i].style.width = "300px";
    }
})

    indexImage[i].addEventListener('mouseout', function() {
        if(overlay.classList.contains('hidden')){
        indexImage[i].style.height = "100px";
        indexImage[i].style.width = "200px";
    }
})

    overlay.addEventListener('click', function() {
        overlay.classList.add('hidden');
        indexImage[i].style.width = "200px";
        indexImage[i].style.zIndex = "0";
        indexImage[i].style.position = "static";
    })
}


const hamburgerButton = document.getElementById('hamburger')
const navOptions = document.getElementById('nav-options')

function toggleButton() {
    navOptions.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)