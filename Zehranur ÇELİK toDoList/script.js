let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer')
let text = document.getElementById('text');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('.paragraph-styling')
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = text.value;
    text.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-throught';
    })

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    })

})