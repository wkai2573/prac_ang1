import {Component} from '@angular/core';
import {UserService} from './user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ang1';
	
	constructor(
		private userService:UserService
	) {}

	click() {
		alert('我是按鈕');
		debugger;
	}

}
