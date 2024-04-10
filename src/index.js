import * as css from "./style.css";
import { listCreator } from "./userInput.js";
import {displayStorage} from "./displayStorage.js"

const formBtn = document.querySelector('#formBtn')
const projectName = document.querySelector('#userInputProject')
const descriptionInput = document.querySelector('#userInputDescription')
const dateInput = document.querySelector('#userInputDate')
const priorityInput = document.querySelector('#userInputPriority')
const notesInput = document.querySelector('#userInputNotes')

displayStorage();

formBtn.addEventListener('click', () => {
  event.preventDefault();
  if (projectName.value !== ''){
  listCreator(projectName.value, descriptionInput.value, dateInput.value, priorityInput.value, notesInput.value)
  projectName.value = ''
  descriptionInput.value = ''
  dateInput.value = ''
  priorityInput.value = ''
  notesInput.value = ''
  }
})

