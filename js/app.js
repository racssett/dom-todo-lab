const input = document.querySelector('#inp')
const btn = document.querySelector('#submit-button')
const uList = document.querySelector('#todo-list')

btn.addEventListener('click', myFunction)

function myFunction(evt) {
    const li = document.createElement('li')
    li.textContent = input.value
    console.log(li)
    input.value = ' '
    document.querySelector('ul').appendChild(li)
}