import { Favorites } from './js/Favorites.js';

const booksForWinter = [
    {
        id: 1,
        title: 'The Book Eaters',
        author: 'By Sunyi Dean',
        contetn: 'An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.',
        image: '/src/images/book.png',
    },
    {
        id: 2,
        title: 'Cackle',
        author: 'By Rachel Harrison',
        contetn: 'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.',
        image: '/src/images/book-2.png',
    },
    {
        id: 3,
        title: 'DANTE: POET OF THE SECULAR WORLD',
        author: 'By Erich Auerbach',
        contetn: `Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.`,
        image: '/src/images/book-4.png',
    },
    {
        id: 4,
        title: 'The Last Queen',
        author: 'By Clive Irving',
        contetn: 'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.',
        image: '/src/images/book-4.png',
    },
]
const booksForSpring = [
    {
        id: 1,
        title: 'The Body',
        author: 'By Stephen King',
        title: 'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.',
        image: '/src/images/book-5.png',
    },
    {
        id: 2,
        title: 'Days of Distraction',
        author: 'By Alexandra Chang',
        title: 'A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.',
        image: '/src/images/book-7.png',
    },
    {
        id: 3,
        title: 'Carry: A Memoir of Survival on Stolen Land',
        author: 'By Toni Jenson',
        title: `This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.`,
        image: '/src/images/book-6.png',
    },
    {
        id: 4,
        title: 'Dominicana',
        author: 'By Angie Cruz',
        title: 'A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.',
        image: '/src/images/book-8.png',
    },
]
const booksFoSummerr = [
    {
        id: 1,
        title: 'The Body',
        author: 'By Stephen King',
        title: 'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.',
        image: '/src/images/book-5.png',
    },
    {
        id: 2,
        title: 'Days of Distraction',
        author: 'By Alexandra Chang',
        title: 'Fiction',
        image: '/src/images/book-4.png',
    },
    {
        id: 3,
        title: 'The Last Queen',
        author: 'Clive Irving',
        title: 'Fiction',
        image: '/src/images/book-4.png',
    },
    {
        id: 4,
        title: 'The Last Queen',
        author: 'Clive Irving',
        title: 'Fiction',
        image: '/src/images/book-4.png',
    },
]
const booksForAutumn = [
    {
        id: 1,
        title: 'The Body',
        author: 'By Stephen King',
        title: 'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.',
        image: '/src/images/book-5.png',
    },
    {
        id: 2,
        title: 'Days of Distraction',
        author: 'By Alexandra Chang',
        title: 'Fiction',
        image: '/src/images/book-4.png',
    },
    {
        id: 3,
        title: 'The Last Queen',
        author: 'Clive Irving',
        title: 'Fiction',
        image: '/src/images/book-4.png',
    },
    {
        id: 4,
        title: 'The Last Queen',
        author: 'Clive Irving',
        title: 'Fiction',
        image: '/src/images/book-4.png',
    },
]

//Слайдер
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

//создание фейворитс



