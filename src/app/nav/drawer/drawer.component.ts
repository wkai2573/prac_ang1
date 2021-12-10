import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {navRoutes} from '../nav-data';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

	navRoutes = navRoutes;

	//關閉側選單 執行器
	@Output() drawerCloseEvent = new EventEmitter();

  constructor() { }

	drawerClose() {
    this.drawerCloseEvent.emit();
  }

	setup() {
		this.drawerClose();
		alert("tool");
	}

	ngOnInit(): void {
  }
	
}
