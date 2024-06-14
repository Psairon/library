import { Modal } from './js/Modal';
import { Favorites } from './js/Favorites';

const booksForWinter = [
    {
        id: 1,
        title: 'The Book Eaters',
        author: 'By Sunyi Dean',
        content: 'An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.',
        image: '/src/images/book.png',
    },
    {
        id: 2,
        title: 'Cackle',
        author: 'By Rachel Harrison',
        content: 'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.',
        image: '/src/images/book-2.png',
    },
    {
        id: 3,
        title: 'DANTE: POET OF THE SECULAR WORLD',
        author: 'By Erich Auerbach',
        content: `Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.`,
        image: '/src/images/book-3.png',
    },
    {
        id: 4,
        title: 'The Last Queen',
        author: 'By Clive Irving',
        content: 'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.',
        image: '/src/images/book-4.png',
    },
]
const booksForSpring = [
    {
        id: 1,
        title: 'The Body',
        author: 'By Stephen King',
        content: 'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.',
        image: '/src/images/book-5.png',
    },
    {
        id: 2,
        title: 'Days of Distraction',
        author: 'By Alexandra Chang',
        content: 'A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.',
        image: '/src/images/book-7.png',
    },
    {
        id: 3,
        title: 'Carry: A Memoir of Survival on Stolen Land',
        author: 'By Toni Jenson',
        content: `This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.`,
        image: '/src/images/book-6.png',
    },
    {
        id: 4,
        title: 'Dominicana',
        author: 'By Angie Cruz',
        content: 'A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.',
        image: '/src/images/book-8.png',
    },
]
const booksForSummerr = [
    {
        id: 1,
        title: 'Crude: A Memoir',
        author: 'By Pablo Fajardo & ​​Sophie Tardy-Joubert',
        content: 'Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people',
        image: '/src/images/book-9.png',
    },
    {
        id: 2,
        title: 'Let My People Go Surfing',
        author: 'By Yvon Chouinard',
        content: 'Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.',
        image: '/src/images/book-10.png',
    },
    {
        id: 3,
        title: 'The Octopus Museum: Poems',
        author: 'By Brenda Shaughnessy',
        content: 'This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.',
        image: '/src/images/book-11.png',
    },
    {
        id: 4,
        title: 'Shark Dialogues: A Novel',
        author: 'By Kiana Davenport',
        content: 'An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.',
        image: '/src/images/book-12.png',
    },
]
const booksForAutumn = [
    {
        id: 1,
        title: 'Casual Conversation',
        author: 'By Renia White',
        content: `White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. `,
        image: '/src/images/book-13.png',
    },
    {
        id: 2,
        title: 'The Great Fire',
        author: 'By Lou Ureneck',
        content: `The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide`,
        image: '/src/images/book-14.png',
    },
    {
        id: 3,
        title: 'Rickey: The Life and Legend',
        author: 'By Howard Bryant',
        content: `With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?`,
        image: '/src/images/book-15.png',
    },
    {
        id: 4,
        title: 'Slug: And Other Stories',
        author: 'By Megan Milks',
        content: `Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.`,
        image: '/src/images/book-16.png',
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

//создание Favorites

window.onload = function() {
    console.log('Hello Rolling Scopes!');

    //navigation of favorites
    addFavoritesNavigationHandler();

    //favorites
    renderFavoritesToDom();

    
    //Base Modal
    loginModalHandler();
    singUpModalHandler();

    //profile
    openProfile();
    loggedIn();
    logout();
};

let stateInputOfFavorites = booksForWinter;
let isLoggedIn = false;

    //favorites
const addFavoritesNavigationHandler = () => {
    document.querySelector('.book-navigation').addEventListener('click', (event) => {
       if (event.target.classList.contains('input-favorites')) {
            if (event.target.id == 'booksForWinter') {
                stateInputOfFavorites = booksForWinter;
            } else if (event.target.id == 'booksForSpring') {
                stateInputOfFavorites = booksForSpring;
            } else if (event.target.id == 'booksForSummer') {
                stateInputOfFavorites = booksForSummerr;
            } else {
                stateInputOfFavorites = booksForAutumn;
        }
    }
    renderFavoritesToDom();
    });
};
const renderFavoritesToDom = () => {
    const favoritesBlock = getFavoritesBlock();
    generateFavorits(stateInputOfFavorites).forEach( book => {
        favoritesBlock.appendChild(book.generateFavorit());
    })
};
const getFavoritesBlock = () => {
    const favoritesConteiner = document.querySelector('.favorites-items');
    favoritesConteiner.innerHTML = '';
    return favoritesConteiner;
};
const generateFavorits = (data) => {
    let favoritesBlock = [];
    data.forEach( book => {
        favoritesBlock.push(new Favorites(book))
    });
    return favoritesBlock;
}
    //profile
const openProfile = () => {
    document.querySelector('.profile-button').addEventListener('click', (event) => {
        generateProfileModal();
    })
};

const loggedIn = () => {
     document.querySelector('.icon-profile').addEventListener('click', (event) => {
        if (isLoggedIn) {
            generateProfileModal();
        } else {
            generateLogInModal();
        }
    });
};

const openProfileFromWelcomeModal = () => {
    document.querySelector('.welcome-button').addEventListener('click', (event) => {
        deliteModalWindow();
        generateProfileModal();
    })
}

const generateProfileModal = () => {
    renderModalWindow(`<div class="profile-block"><div class="profile-block-left"><div class="profile-photo"><p class="profile-photo-text">JD</p></div><p class="profile-name">Jonh Doe</p></div><div class="profile-block-right"><p class="profile-title">My Profile</p><div class="profile-icons"><div class="profile-icon"><p class="card-icon-text">visits</p><img src="/src/images/icon-loged-in-men.svg" alt="me"><p>23</p></div><div class="profile-icon"><p class="card-icon-text">bonuses</p><img src="/src/images/icon-book.svg" alt="sun"><p>1240</p></div><div class="profile-icon"><p class="card-icon-text">Books</p><img src="/src/images/icon-sun.svg" alt="book"><p>7</p></div></div><p class="rented-text">Rented books</p><ul class="profile-books"><li>The Last Queen, Clive Irving</li><li>Dominicana, Angie Cruz</li><li>The Dharma Bums, Jack Kerouac</li></ul><div class="card-number"><p>Card number:</p><p class="card-number-text">F00234030</p></div></div><img src="/src/images/cross.svg" class="exit" alt="exit"></div>`)
    closeModal();
};

// login logout Modal

//ивент на запуск генерации модального окна входа и регистрации
const loginModalHandler = () => {
     document.querySelector('.log-in').addEventListener('click', (event) => {
        generateLogInModal();
    })
}

const singUpModalHandler = () => {
    document.querySelector('.sing-up').addEventListener('click', (event) => {
        generateSingUpModal();
    })
}


//смена состояний 

const switchModalWindowToLogIn = () => {    
    document.querySelector('.change-login').addEventListener('click', (event) => {
    deliteModalWindow();
    generateLogInModal();
    })
}

const switchModalWindowToSingUp = () => {
    document.querySelector('.change-registration').addEventListener('click', (event) => {
        deliteModalWindow();
        generateSingUpModal();
    })
}

//создание модального окна входа
const generateLogInModal = () => {
    renderModalWindow (`<img src="/src/images/cross.svg" class="exit" alt="exit"><p class="regisration-title">Login</p><div class="input-regisration"><p>E-mail or readers card</p><input type="text" id=""></div><div class="input-regisration"><p>Password</p><input type="text" id="reg"></div><button class="log">Log in</button><div class="regisration-footer"><p>Don't have an account?</p><p class="change-registration">Register</p></div>`)
    switchModalWindowToSingUp();
    closeModal();
    login();
}

//создание модального окна регистрации
const generateSingUpModal = () => { 
    renderModalWindow (`<img src="/src/images/cross.svg" class="exit" alt="exit"><p class="regisration-title">Register</p><div class="input-regisration"><p>First name</p><input type="text" id=""></div><div class="input-regisration"><p>Last name</p><input type="text" id="reg"></div><div class="input-regisration"><p>E-mail</p><input type="text" id="reg"></div><div class="input-regisration"><p>Password</p><input type="text" id="reg"></div><button class="singup">Sign Up</button><div class="regisration-footer"><p>Already have an account?</p><p class="change-login">Login</p></div>`);
    switchModalWindowToLogIn();
    closeModal();
    singUp();
}

const welcomeModal = () => {
    renderModalWindow (`<img src="/src/images/cross.svg" class="exit" alt="exit"><p class="welcome-title">Welcome to our library</p><button class="welcome-button">Profile</button>`)
    openProfileFromWelcomeModal();
    closeModal();
}

//генератор контента любых модальных окон
const renderModalWindow = (content) => {
    let modalWindow = new Modal();
    modalWindow.buildModal(content);
}

//удаление предыдущего подального окна 
const deliteModalWindow = () => {
    document.querySelector('.overlay').remove();
}

const removeOverlay = (e) => {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('exit')) {
        deliteModalWindow();
    } 
} 

//закрытие модального окна по клику на крестик или оверлей
const closeModal = () => {
    document.querySelector('.overlay').addEventListener('click', removeOverlay);
    document.querySelector('.exit').addEventListener('click', removeOverlay);
}

// Функция для входа в аккаунт
const login = () => {
    document.querySelector('.log').addEventListener('click', () => {
        isLoggedIn = true;
        updateUI();
        deliteModalWindow();
        welcomeModal();
    });
}

const singUp = () => {
    document.querySelector('.singup').addEventListener('click', () => {
        isLoggedIn = true;
        updateUI();
        deliteModalWindow();
        welcomeModal();
    });
}

// Функция для выхода из аккаунта
const logout = () => {
    document.querySelector('.log-out').addEventListener('click', () => {
        isLoggedIn = false;
        updateUI();
    });
}

// Функция для обновления пользовательского интерфейса в зависимости от состояния входа
const updateUI = () => {
    if (isLoggedIn === true) {
        // Показывать элементы интерфейса для вошедшего пользователя
        document.querySelector('.digital-library-cards-loged-in').style.display = 'flex';
        document.querySelector('.digital-library-cards').style.display = 'none';
    } else {
        // Показывать элементы интерфейса для гостя
        document.querySelector('.digital-library-cards').style.display = 'flex';
        document.querySelector('.digital-library-cards-loged-in').style.display = 'none';
    }
}