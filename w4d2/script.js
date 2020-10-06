$(document).ready(() => {


  // Vanilla JS

  const valueOfH1 = document.querySelector('body > h1').innerHTML
  console.log(valueOfH1)
  const valueOfUl = document.querySelector('ul').innerHTML
  console.log(valueOfUl)
  document.querySelector('ul').innerHTML += "<li>Hello?</li>" // Kinda bad

  const newItem = document.createElement('li')
  const newItemText = document.createTextNode("I AM A MESSAGE IN THE LI")
  newItem.appendChild(newItemText)
  document.querySelector('ul').appendChild(newItem)

  createListItem('Blah blah blah', 'ul')

  document.querySelector('button').addEventListener('click', () => addNewLine('input', 'ul'))

  for (const element of document.querySelectorAll('body > h1')) {
    element.innerHTML = "THIS IS YOUR TEXT NOW"
  }
  // jQuery

  console.log($('ul').html())


  $('button').on('click', () => addNewLine('input', 'ul'))
  $('button').click(() => addNewLine('input', 'ul'))



  // jQuery('button')...
  // $ -> call jQuery
  // () -> target or new element target: 'ul button', new element: '<li>'
  // .something (method) (read / write)

  $('h1').text()
  $('h1').text("THIS IS YOUR TEXT NOW")

})
