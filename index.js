const createDropDownTitleComponent = () => {
    
    // Create elements
    const dropDownTitle = document.createElement('div');
    const categoryHeading = document.createElement('h2');
    const dropDownIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const dropDownIconPolyLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
    
    // add classes
    dropDownTitle.classList.add('drop-down__title');
    categoryHeading.classList.add('drop-down__category-title');
    dropDownIcon.classList.add('drop-down__icon');

    // add text
    categoryHeading.textContent = 'Select a city';

    // handle svg   
    dropDownIcon.setAttribute('viewBox', '0 0 24 24');
    dropDownIconPolyLine.setAttribute('points', '6 9 12 15 18 9');
    
    // append svg
    dropDownIcon.append(dropDownIconPolyLine);

    // append title and svg into container
    dropDownTitle.append(categoryHeading);
    dropDownTitle.append(dropDownIcon);
    
    return dropDownTitle;
};

const createSearchComponent = () => {
    // create elements for component
    const dropDownSearch = document.createElement('div');
    const container = document.createElement('div');
    const dropDownInput = document.createElement('input');
    const inputIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const inputIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // add classes to elements
    dropDownSearch.classList.add('drop-down__search');
    container.classList.add('container', 'row', 'row--space-between', 'row--align-center');
    dropDownInput.classList.add('drop-down__input');
    inputIcon.classList.add('drop-down__icon-search');

    // add attributes
    inputIcon.setAttribute('viewBox', '0 0 24 24');
    inputIconPath.setAttribute('d', 'M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z')
    dropDownInput.setAttribute('placeholder', 'Search');
    inputIcon.setAttribute('type', 'text');

    // append
    inputIcon.append(inputIconPath)
    container.append(dropDownInput);
    container.append(inputIcon)
    dropDownSearch.append(container);

    return dropDownSearch;

};

const createCategoryListComponent = () => {

    const categoryText = ['London', 'Manchester', 'Liverpool', 'Leeds'];
    
    // create elements
    const categoryList = document.createElement('div');
    
    // add classes
    categoryList.classList.add('drop-down__category-list');
    
    for (let i = 0; i < 4; i++) {
        const category = document.createElement('p');
        category.classList.add('drop-down__category');
        category.textContent = categoryText[i];
        categoryList.append(category);
    }

    return categoryList;

};

const wrapElements = (tag, className, ...elements) => {
    let htmlTag = document.createElement(tag);
    htmlTag.classList.add(...className);

    for (let el of elements) {
        htmlTag.append(el);
    }

    return htmlTag
};

class DropDown {

    constructor() {
        
    }

    initialize() {
        
    }
    
    renderDropDownComponent() {
        const dropDown = Array.from(document.querySelectorAll('#drop-down-menu'));
        
        dropDown.forEach(component => {
            const titleComponent = createDropDownTitleComponent();
            const searchComponent = createSearchComponent();
            const categoryListComponent = createCategoryListComponent();
            
            const elements = wrapElements('div', ['drop-down__categories'], searchComponent, categoryListComponent);
            
            component.classList.add('drop-down');

            component.appendChild(titleComponent);
    
            component.append(elements);
        });

        return dropDown;
    }

    open() {
        document.querySelector('.drop-down__icon').classList.toggle('drop-down__icon--open');
        document.querySelector('.drop-down__categories').classList.toggle('drop-down__categories--open');
    }
}

const dropDown = new DropDown();

for (let c of dropDown.renderDropDownComponent()) {
    console.log(c)
    document.body.append(c)
}

document.querySelectorAll('.drop-down__title').forEach(dropDownComponent => {
    dropDownComponent.addEventListener('click', (e) => {
        dropDown.open();
    });
})

document.querySelector('.drop-down__category-list').addEventListener('click', event => {
    event.stopPropagation();
    event.target.classList.toggle('drop-down__category--selected');
})