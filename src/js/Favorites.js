export class Favorites {
    constructor({ id, title, author, content, image }) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
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

        template += `<p class="book-contents">${this.content }</p>`;

        template += `<button class="book-button"> Buy </button>`;
        template += `<img src=${this.image} alt="" class="book-cover">`;

        template += `<div class="strategy__content">`;
            
        favorit.innerHTML = template;
        return favorit;
    }
}