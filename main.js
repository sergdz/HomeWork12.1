class TodoList {
    constructor(items) {
        this.items = [];
    }
    
    add(TodoItem) {
        if (TodoItem.title && TodoItem.description !== undefined) {
            this.items.push(TodoItem)
        } else { 
            alert("Задача не добавлена ")
        };
        
    };

        completeAll(id) {
            const toDo = this.items.find((item) => item.id === id);
            toDo.done = true;
    };
};
class TodoItem {
    constructor(id, title, description, done) {
        this.id = id;
        this.title = prompt("Какая задача?");
        this.description = prompt("Краткое описание");
        this.done = false;
    };
};

const creatingTodoList = new TodoList();
const todoItem = new TodoItem(1);
const todoItem01 = new TodoItem(2);
const todoItem02 = new TodoItem(3);
creatingTodoList.add(todoItem);
creatingTodoList.add(todoItem01);
creatingTodoList.add(todoItem02);
creatingTodoList.completeAll(1);
creatingTodoList.completeAll(2);
console.log(creatingTodoList.items);