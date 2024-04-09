// Properties for a to-do list
// Title, Description, dueDate, priority, notes, checklist
export{ToDoList}


class ToDoList {
  constructor(title, description, dueDate, priority, notes){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;

  }
}
