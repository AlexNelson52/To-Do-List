export {DomCreator}
import { storage } from "./localStorageDOM"
export {arr}

const mainContainer = document.querySelector('#projectArea')
const projectSideHolder = document.querySelector('#projectSideHolder')
let arr = []

 function DomCreator(book){
  arr.push(book)
  storage(arr)


  const sideBarProject = document.createElement('div')
  sideBarProject.classList.add('sidebarProjects')
  const sideBarProjectText = document.createElement('p')
  sideBarProjectText.textContent = book.title

  sideBarProject.appendChild(sideBarProjectText)

  const removeBtnDiv = document.createElement('div')
  removeBtnDiv.id = 'removeBtnDiv'
  const removeBtn = document.createElement('button')
  removeBtn.id = 'removeBtn'
  removeBtn.textContent = 'X'

  removeBtnDiv.appendChild(removeBtn)
  sideBarProject.appendChild(removeBtnDiv)
  projectSideHolder.appendChild(sideBarProject)

  sideBarProject.addEventListener('click', () => {
    event.stopPropagation();

  mainContainer.textContent = ''
  const listContainer = document.createElement('div')
  listContainer.id = 'listContainer'
  const headerDiv = document.createElement('div');
  headerDiv.id = 'projectHeaderDiv'
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

  headerDiv.appendChild(projectName)
  listContainer.appendChild(headerDiv)
  listContainer.appendChild(projectDescription)
  listContainer.appendChild(projectDueDate)
  listContainer.appendChild(projectPriority)
  listContainer.appendChild(projectNotes)
  mainContainer.appendChild(listContainer)
  })

  removeBtn.addEventListener('click', () => {
    event.stopPropagation();
    mainContainer.textContent = ''
    projectSideHolder.removeChild(sideBarProject)


    for(let i = 0; i < localStorage.length; i++){
      let item = JSON.parse(localStorage['Task'])
     if(item[i].title === book.title){
      item.splice(i,1)
      arr.splice(i,1)
      storage(arr)
     }}
  })
}

