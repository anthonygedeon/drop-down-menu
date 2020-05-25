import dropDown from './simple-dropdown-component.js';

class SimpleDropDown extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = dropDown;

        this.append(menu.content.cloneNode(true));
    }
}

customElements.define('simple-dropdown', SimpleDropDown);

document.querySelector('.drop-down').addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('drop-down__title')) {
        document.querySelector('.drop-down__icon ').classList.toggle('drop-down__icon--open');
        document.querySelector('.drop-down__categories').toggleAttribute('hidden');
    }  
});