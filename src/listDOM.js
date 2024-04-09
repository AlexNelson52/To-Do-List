export {DomCreator}
import { storage } from "./localStorageDOM"
export {arr}
const mainContainer = document.querySelector('#projectArea')
let arr = []

 function DomCreator(book){
  arr.push(book)
  storage(arr)

  const listContainer = document.createElement('div')
  listContainer.id = 'listContainer'
  const projectName = document.createElement('p');
  projectName.textContent = ` ${book.title}`
  const projectDescription = document.createElement('p');
  projectDescription.textContent = `${book.description}`
  const projectDueDate = document.createElement('p');
  projectDueDate.textContent = `Due Date: ${book.dueDate}`
  const projectPriority = document.createElement('p');
  projectPriority.textContent = `Priority: ${book.priority}`
  const projectNotes = document.createElement('p');
  projectNotes.textContent = `Note: ${book.notes}`
  const removeBtnDiv = document.createElement('div')
  removeBtnDiv.id = 'removeBtnDiv'
  const removeBtn = document.createElement('button')
  removeBtn.id = 'removeBtn'
  removeBtn.textContent = 'X'
  removeBtn.addEventListener('click', () => {
    mainContainer.removeChild(listContainer)
    console.log(book.title);
    for(let i = 0; i < localStorage.length; i++){
      let item = JSON.parse(localStorage['Task'])
     if(item[i].title === book.title){
      item.splice(i,1)
      arr.splice(i,1)
      storage(arr)
     }}
  })

  listContainer.appendChild(projectName)
  listContainer.appendChild(projectDescription)
  listContainer.appendChild(projectDueDate)
  listContainer.appendChild(projectPriority)
  listContainer.appendChild(projectNotes)
  removeBtnDiv.appendChild(removeBtn)
  listContainer.appendChild(removeBtnDiv)
  mainContainer.appendChild(listContainer)
}



//title, description, dueDate, priority, notes