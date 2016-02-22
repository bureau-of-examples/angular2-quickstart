import {Component, View} from 'angular2/core'

@Component({
    selector: 'todo-component'
})
@View({
    templateUrl: 'app/todo.html'
})
export class TodoComponent {
    todoList: string[] = ['shopping', 'cooking'];
}