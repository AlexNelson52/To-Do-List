import { ToDoList } from "./listConstructor.js";
import {DomCreator} from "./listDOM.js";
export {listCreator}

function listCreator(title, description, dueDate, priority, notes) {
  let newTask = new ToDoList(title, description, dueDate,priority, notes)
   DomCreator(newTask)
}

