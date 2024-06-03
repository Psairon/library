document.addEventListener('DOMContentLoaded', () => {
    let slideContainer = document.querySelector('.gallery-line');
    let currentIndex = 0;
    const slideWidth = 470; 

    const slideNext = () => {
        if (currentIndex < slideContainer.children.length - 1) {
            currentIndex++;
            slideContainer.style.left = -(slideWidth) + 'px';
        }
        updateInputsState();
    };

    const slideFinish = () => {
        currentIndex = slideContainer.children.length - 1;
        slideContainer.style.left = -(slideWidth * 2) + 'px';
        updateInputsState();
    };

    const slideStart = () => {
        currentIndex = 0;
        slideContainer.style.left = '0px';
        updateInputsState();
    };

    document.getElementById('next').addEventListener('click', slideNext);
    document.getElementById('start').addEventListener('click', slideStart);
    document.getElementById('finish').addEventListener('click', slideFinish);
});