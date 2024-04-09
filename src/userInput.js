import { ToDoList } from "./listConstructor.js";
import {DomCreator} from "./listDOM.js";
export {listCreator}

let storageArr = []


function listCreator(title, description, dueDate, priority, notes) {
  let newTask = new ToDoList(title, description, dueDate,priority, notes)
  let myObj_serialized = JSON.stringify(newTask)
  localStorage.setItem(`test`, myObj_serialized)
   DomCreator(newTask)

  storageArr.push(localStorage);
  console.log(storageArr);
   
}

