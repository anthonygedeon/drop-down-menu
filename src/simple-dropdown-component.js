let dropDown;

export default dropDown = `
<template id="menu">
    <style>
        /*--------------------------------------------------------- 
        LAYOUT
        ---------------------------------------------------------*/
        .row {display: flex;}
        .row--space-between {justify-content: space-between;}
        .row--align-center {align-items: center;}

        /*--------------------------------------------------------- 
        DROP-DOWN COMPONENT
        ---------------------------------------------------------*/
        .drop-down {
            --drop-down-bg: hsl(0, 0%, 100%);
            --drop-down-border-color: hsla(249, 14%, 90%, 0.65);
            --drop-down-border-radius: 4px;
            --drop-down-text-color: hsl(240, 100%, 0%);
            --drop-down-transition-duration: 0.3s;

            font-family: Arial, Helvetica, sans-serif;
            box-sizing: border-box;
            background-color: var(--drop-down-bg);
            width: 100%;
            max-width: 250px;
            position: relative;
            cursor: pointer;
            outline: none;
        }
        
        .drop-down__title {
            border-radius: var(--drop-down-border-radius);
            transition: border-color var(--drop-down-transition-duration), box-shadow var(--drop-down-transition-duration) ease-in;
            border: 1.35px solid var(--drop-down-border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8em 0.85em;
            position: relative;
            z-index: 10;
        }

        .drop-down__category-title {
            color: var(--drop-down-text-color);
            opacity: 0.5;
            font-size: 1.1rem;
            font-weight: 400;
            margin: 0;
        }

        .drop-down__icon {
            --icon-stroke-color: hsl(212, 8%, 61%);
            fill: var(--icon-stroke-color);
            stroke-width: 4;
            stroke-linejoin: initial;
            stroke-linecap: square;
            height: 24px;
            width: 21px;
            transition: transform var(--drop-down-transition-duration)
                cubic-bezier(0.45, 0.46, 0.1, 1.01);
        }

        /*--------------------------------------------------------- 
        DROP-DOWN SEARCH
        ---------------------------------------------------------*/
        .drop-down__search {
            border-bottom: 1px solid #e2e6e9;
            transition: box-shadow var(--drop-down-transition-duration) ease-in;
        }

        .drop-down__search .container {
            border-radius:  var(--drop-down-border-radius);
            padding: 0.8em 0.85em;
            background-color: #e0e6ed;
            margin: 1em 0.85em;
        }

        .drop-down__input {
            background-color: transparent;
            border: none;
            font-size: 1rem;
            font-weight: 600;
            color: hsl(240, 100%, 0%);
            width: 10rem;
            outline: none;
        }

        .drop-down__input::placeholder {
            font-size: 1rem;
            opacity: 0.5;
            font-weight: 500;
        }

        .drop-down__icon-search {
            fill: #c5cad1;
            width: 24px;
            height: 24px;
        }

        /*--------------------------------------------------------- 
        DROP-DOWN LIST
        ---------------------------------------------------------*/
        .drop-down__categories {
            background-color: var(--drop-down-bg);
            width: 100%;
            box-shadow: 0px 2px 4px 0px hsla(0, 0%, 33%, 0.1);
            animation: drop-down-disappear 0.5s forwards;

        }

        .drop-down__category {
            --drop-down-category-color: hsl(240, 100%, 0%);
            margin: 0;
            color: var(--drop-down-category-color);
            font-weight: 600;
            padding: 1.5em 1.5em;
            text-align: left;
            font-size: 1rem;
            transition: background-color var(--drop-down-transition-duration),
                text-shadow var(--drop-down-transition-duration) ease-in;
        }

        .drop-down__category--selected {
            --drop-down-category-color: #597ef1;
            
            display: flex;
            align-items: center;
        }

        /*--------------------------------------------------------- 
        JAVASCRIPT ACTIVATED
        ---------------------------------------------------------*/
        .drop-down__categories[hidden] {
            animation: drop-down-appear 0.5s forwards;
        }

        .drop-down__category--selected::after {
            content: url(./images/check.svg);
            margin-left: auto;
        }

        .drop-down__category--icon::before {
            content: '';
            display: inline-block;
            width: 1rem;
            height: 1rem;
            background-color: #949da3;
            margin-right: 0.75em;
        }

        .drop-down__icon--open {
            transform: rotate(180deg);
        }

        /*--------------------------------------------------------- 
        ANIMATIONS
        ---------------------------------------------------------*/
        .drop-down__title:hover {
            --drop-down-border-color: hsl(240, 5%, 85%);
        }

        .drop-down__title:focus {
            --drop-down-border-color: hsl(212, 98%, 63%);
            box-shadow: 0px 0px 0px 1px var(--drop-down-border-color);
        }

        .drop-down__category:hover {
            background-color: hsl(200, 33%, 98%);
        }

        @keyframes drop-down-disappear {
            0% {
                opacity: 0;
            }

            50% {
                opacity: 0.3;
                transform: translateY(-6px);
            }

            100% {
                opacity: 1;
                transform: translateY(0px);
            }
        }

    </style>
    <div class="drop-down__title" tabindex="0">
        <h2 class="drop-down__category-title">Select a city</h2>
        <svg class="drop-down__icon drop-down__icon--open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    </div>

    <div class="drop-down__categories" hidden>
        
        <div class="drop-down__search">
            <div class="container row row--space-between row--align-center">
                <input type="text" class="drop-down__input" placeholder="Search">
                <svg class="drop-down__icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">    
                    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
                </svg>
            </div>
        </div>

        <div class="drop-down__category-list">
            <p class="drop-down__category drop-down__category--1">London</p>
            <p class="drop-down__category drop-down__category--2">Manchester</p>
            <p class="drop-down__category drop-down__category--3">Liverpool</p>
            <p class="drop-down__category drop-down__category--4">Leeds</p>    
        </div>
    </div>
</template>`;