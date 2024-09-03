const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('#convert-button')
const mainElement = document.querySelector('main')
const themeBtn = document.getElementById('theme-btn')
let theme = window.localStorage.getItem('theme') ?? 'light'

function renderTheme() {

    if (theme === 'light') {

        document.body.setAttribute('theme', 'light')

        themeBtn.innerHTML = `
          <svg
            class='size-8 md:size-7 lg:size-6 dark:text-secondary-500 transition duration-300 dark:hover:text-secondary-300'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
            >
            <path
                fill-rule='evenodd'
                d='M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z'
                clip-rule='evenodd'
            />
            </svg>  

        `
    } else {
        document.body.removeAttribute('theme')

        themeBtn.innerHTML = `
            <svg
            class='size-8 md:size-7 lg:size-6 text-primary-700 transition duration-300 hover:text-primary-800'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
            >
            <path
                fill-rule='evenodd'
                d='M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z'
                clip-rule='evenodd'
            />
            </svg>

   
        `
    }
}

function convertMetersAndFeet(value) {
    const firstResult = (value * 3.28084).toFixed(3)
    const secondResult = (value / 3.28084).toFixed(3)
    return [firstResult, secondResult]
}

function convertLitersAndGallons(value) {
    const firstResult = (value * 0.2641720).toFixed(3)
    const secondResult = (value / 0.2641720).toFixed(3)
    return [firstResult, secondResult]
}

function convertKilogramsAndPounds(value) {
    const firstResult = (value * 2.20462).toFixed(3)
    const secondResult = (value / 2.20462).toFixed(3)
    return [firstResult, secondResult]
}

themeBtn.addEventListener('click', function () {
    theme = theme === 'light' ? 'dark' : 'light'
    renderTheme()
    localStorage.setItem('theme', theme)
})

buttonEl.addEventListener('click', function () {
    const numberValue = Number(inputEl.value)

    const [firstResultLength, secondResultLength] = convertMetersAndFeet(numberValue)
    const [firstResultVolume, secondResultVolume] = convertLitersAndGallons(numberValue)
    const [firstResultMass, secondResultMass] = convertKilogramsAndPounds(numberValue)

    mainElement.innerHTML = `
        <div>
            <h2>Length (Meter/Feet)</h2>
            <p>${inputEl.value} meters = ${firstResultLength} feet | ${inputEl.value} feet = ${secondResultLength} meters</p>
        </div>
        <div>
            <h2>Volume (Liters/Gallons)</h2>
            <p>${inputEl.value} liters = ${firstResultVolume} gallons | ${inputEl.value} gallons = ${secondResultVolume} liters</p>
        </div>
        <div>
            <h2>Mass (Kilograms/Pounds)</h2>
            <p>${inputEl.value} kilos = ${firstResultMass} pounds | ${inputEl.value} pounds = ${secondResultMass} kilos</p>
        </div>
    `
})

renderTheme()