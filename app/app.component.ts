import {Component} from 'angular2/core'
import {TodoComponent} from './todo.component'

@Component({
	selector: 'my-app',
	directives:  [TodoComponent],
	template: `<p>My First Angular 2 1111 App</p><p>{{message}}</p><todo-component></todo-component>`
})
export class AppComponent {

    message: string = "this is my message";
}

