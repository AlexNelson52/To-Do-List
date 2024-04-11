export {DomCreator}
import { storage } from "./localStorageDOM"
export {arr}

const mainContainer = document.querySelector('#projectArea')
const projectSideHolder = document.querySelector('#projectSideHolder')
let arr = []
 function DomCreator(book){
  arr.push(book)
  storage(arr)
buttonCreator(book)
createMainDisplay(book)

}

function buttonCreator(book){
  const sideBarProject = document.createElement('div')
  sideBarProject.classList.add('sidebarProjects')
  const sideBarNameDiv = document.createElement('div')
  sideBarNameDiv.id = 'sideBarNameDiv'
  const sideBarProjectText = document.createElement('p')
  sideBarProject.id = 'sideBarP'
  sideBarProjectText.textContent = book.title

  sideBarNameDiv.appendChild(sideBarProjectText)
  sideBarProject.appendChild(sideBarNameDiv)

  const removeBtnDiv = document.createElement('div')
  removeBtnDiv.id = 'removeBtnDiv'
  const removeBtn = document.createElement('button')
  removeBtn.id = 'removeBtn'
  removeBtn.textContent = 'X'
  removeBtn.classList.add(`${book.title}`)
  removeBtnDiv.appendChild(removeBtn)
  sideBarProject.appendChild(removeBtnDiv)
  projectSideHolder.appendChild(sideBarProject)
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sideBarRemove(removeBtn.className, projectSideHolder, sideBarProject, book)
  })

  sideBarNameDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    sideBarClickDisplay(book, sideBarProjectText)
  })
}

function createMainDisplay(book){
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
  
}

function sideBarClickDisplay(book,test){
  for(let i = 0; i < arr.length; i++){
     if(arr[i].title === test.textContent){
      mainContainer.textContent = ''

  const listContainer = document.createElement('div')
  listContainer.id = 'listContainer'
  const headerDiv = document.createElement('div');
  headerDiv.id = 'projectHeaderDiv'
  const projectName = document.createElement('p');

  projectName.textContent = ` ${arr[i].title}`
  const projectDescription = document.createElement('p');
  projectDescription.textContent = `${arr[i].description}`
  const projectDueDate = document.createElement('p');
  projectDueDate.textContent = `Due Date: ${arr[i].dueDate}`
  const projectPriority = document.createElement('p');
  projectPriority.textContent = `Priority: ${arr[i].priority}`
  const projectNotes = document.createElement('p');
  projectNotes.textContent = `Note: ${arr[i].notes}`

  headerDiv.appendChild(projectName)
  listContainer.appendChild(headerDiv)
  listContainer.appendChild(projectDescription)
  listContainer.appendChild(projectDueDate)
  listContainer.appendChild(projectPriority)
  listContainer.appendChild(projectNotes)
  mainContainer.appendChild(listContainer)
     }
  }
}

function sideBarRemove(elementClass, parentElement, childElement, book){
  console.log(elementClass);
  for(let i = 0; i < arr.length; i++){
    if(arr[i].title === elementClass){
     mainContainer.textContent = ''
     arr.splice(i,1)
     parentElement.removeChild(childElement)
}

  }
  for(let j = 0; j < localStorage.length; j++){
    let item = JSON.parse(localStorage['Task'])
   if(item[j].title === book.title){
    item.splice(j,1)
    storage(arr)
   }}
  }

// // sideBarProject.addEventListener('click', () => {
  //   event.stopPropagation();

  // mainContainer.textContent = ''
  // const listContainer = document.createElement('div')
  // listContainer.id = 'listContainer'
  // const headerDiv = document.createElement('div');
  // headerDiv.id = 'projectHeaderDiv'
  // const projectName = document.createElement('p');

  // projectName.textContent = ` ${book.title}`
  // const projectDescription = document.createElement('p');
  // projectDescription.textContent = `${book.description}`
  // const projectDueDate = document.createElement('p');
  // projectDueDate.textContent = `Due Date: ${book.dueDate}`
  // const projectPriority = document.createElement('p');
  // projectPriority.textContent = `Priority: ${book.priority}`
  // const projectNotes = document.createElement('p');
  // projectNotes.textContent = `Note: ${book.notes}`

  // headerDiv.appendChild(projectName)
  // listContainer.appendChild(headerDiv)
  // listContainer.appendChild(projectDescription)
  // listContainer.appendChild(projectDueDate)
  // listContainer.appendChild(projectPriority)
  // listContainer.appendChild(projectNotes)
  // mainContainer.appendChild(listContainer)
  // })

    // removeBtn.addEventListener('click', () => {
  //   event.stopPropagation();
  //   mainContainer.textContent = ''
  //   projectSideHolder.removeChild(sideBarProject)


  //   for(let i = 0; i < localStorage.length; i++){
  //     let item = JSON.parse(localStorage['Task'])
  //    if(item[i].title === book.title){
  //     item.splice(i,1)
  //     arr.splice(i,1)
  //     storage(arr)
  //    }}
  // })
