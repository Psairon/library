export class Favorites {
    constructor({ id, title, author, contetn, image }) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.contetn = contetn;
        this.image = image;
    }

    // Favorit generator
    generateFavorit() {
        let template = '';
        let favorit = document.createElement('div');
        favorit.className = 'book';
        favorit.setAttribute('data-id', this.id);

        template += `<p class="book-caption">Staff Picks</p><div class="book-line"></div><div class="book-general-information">`;

        template += `<p class="book-title">${this.title}</p>`;
        template += `<p class="book-author">${this.author}</p></div>`;

        template += `</div>`;

        template += `<p class="book-contents">${this.contetn}</p>`;

        template += `<button class="book-button"> Buy </button>`;
        template += `<img src=${this.image} alt="" class="book-cover">`;

        template += `<div class="strategy__content">`;
            
        favorit.innerHTML = template;
        return favorit;
    }
};


window.onload = function() {
    console.log('Hello Rolling Scopes!');

    // Render Favorites
    if(data) {
        renderFavoritesToDom();
    }
};

const renderFavoritesToDom = (data) => {
    let favoritesBlock = [];
    data.forEach(favorite => {
        favoritesBloc.push(new Favorites( favorit ))
    });
    console.log(favoritesDlock);
    return Favorites;
}