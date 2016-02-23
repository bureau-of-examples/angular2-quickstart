import {Component} from 'angular2/core'
import {TodoComponent} from './todo.component'

@Component({
	selector: 'my-app',
	directives:  [TodoComponent],
	templateUrl: 'app/app.html'
})
export class AppComponent {

    message: string = "this is my message";
    public title = 'Tour of Heroes';
    public hero = {
      id: 1,
      name: 'Windstorm'
    };
}

interface Hero {
  id: number;
  name: string;
}

