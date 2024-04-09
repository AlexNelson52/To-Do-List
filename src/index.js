import * as css from "./style.css";

import listConstructor from "./listConstructor.js";
import { listCreator } from "./userInput.js";
import {DomCreator} from "./listDOM.js";

const formBtn = document.querySelector('#formBtn')
const projectName = document.querySelector('#userInputProject')
const descriptionInput = document.querySelector('#userInputDescription')
const dateInput = document.querySelector('#userInputDate')
const priorityInput = document.querySelector('#userInputPriority')
const notesInput = document.querySelector('#userInputNotes')


formBtn.addEventListener('click', () => {
  event.preventDefault();
  listCreator(projectName.value, descriptionInput.value, dateInput.value, priorityInput.value, notesInput.value)
  projectName.value = ''
  descriptionInput.value = ''
  dateInput.value = ''
  priorityInput.value = ''
  notesInput.value = ''
})

console.log(localStorage);