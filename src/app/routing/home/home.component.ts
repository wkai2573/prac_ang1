import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private userService:UserService
	) {}

	click() {
		alert('我是按鈕');
		debugger;
	}

	ngOnInit(): void {
  }
}
