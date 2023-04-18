let btn = document.querySelector('#btn');
let input = document.querySelector('#input');

btn.addEventListener('click', function () {
    let result = eval(input.value);
    console.log(result)
})

input.addEventListener ('click', function(event) {
    let currentElement = event.target;
    
})