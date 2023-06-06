let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

let list = JSON.parse(localStorage.getItem('list')) || []

function add() {
    list.push(input.value)
    localStorage.setItem('list', JSON.stringify(list))
    displayList()
}

function displayList() {
    ul.innerHTML = ''
    list.forEach( item => {
        ul.innerHTML += `<li>${item}</li>`

    })
}

displayList()