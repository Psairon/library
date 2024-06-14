export class Modal {
    constructor() {
        this.classes = this.classes;
        this.modal = '';
        this.overlay = '';
        this.modalContetn = '';
        this.modalButton = '';
    };

    buildModal(content) {
        this.overlay = this.createElement(this.overlay, 'div', 'overlay');
        this.modal = this.createElement(this.modal, 'div', 'modal', this.classes);
        this.modalContetn = this.createElement(this.modalContetn, 'div', 'modal-contetn');
    
        this.setContent(content);

        this.appendModalEl();
    };

    createElement(node, el, ...classes){
        node = document.createElement(el);
        node.classList.add(...classes);
        return node
    };

    setContent(content) {
        if (typeof content === 'string') {
            this.modalContetn.innerHTML = content;
        } else {
            this.modalContetn.innerHTML = '';
            this.modalContetn.appendChild(content);
        }
    };

    appendModalEl() {
        this.modal.appendChild(this.modalContetn);
        this.overlay.appendChild(this.modal);
        document.body.appendChild(this.overlay);
    };
}