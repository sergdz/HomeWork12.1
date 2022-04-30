class TodoList {
    constructor(items) {
        this.items = [];
    }

    add(params) {
        const newTodoItem = new TodoItem(params)
        this.items.push(newTodoItem)
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
const newList = new TodoList();

newList.add(1)
newList.add(2)
newList.add(3)
newList.completeAll(2)
console.log(newList.items);
