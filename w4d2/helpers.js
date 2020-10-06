const createListItem = (text, target) => {
  const newItem = document.createElement('li')
  const newItemText = document.createTextNode(text)
  newItem.appendChild(newItemText)
  document.querySelector(target).appendChild(newItem)
}

const createListItemJQ = (text, target) => {
  const newItem = $('<li>').text(text)
  $(target).append(newItem)
}

const readFromInput = (target) => {
  return document.querySelector(target).value
}

const readFromInputJQ = (target) => {
  return $(target).val()
}

const addNewLine = (inputTarget, listTarget) => {
  const text = readFromInput(inputTarget)
  createListItem(text, listTarget)
}