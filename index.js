// create welcome message
let welcomeEl = document.getElementById('welcome-el')
let myName = 'Noel Obinna Ogbuagu'
let greeting = 'Welcome back '
welcomeEl.textContent = greeting + myName
welcomeEl.textContent += ' 👋'

// create responsive counter
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


// create saved counts
let saveEl = document.getElementById('save-el')

function save() {
    let savedCount = count + " - "
    saveEl.textContent += savedCount

    // reset count to 0 after saving
    countEl.textContent = 0
    count = 0
}


