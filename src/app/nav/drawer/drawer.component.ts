import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faPalette} from '@fortawesome/free-solid-svg-icons';
import {navRoutes, themes} from '../../const-data';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
	constructor() { }

	themes = themes;
	navRoutes = navRoutes;
	faPalette = faPalette;

	@Output() drawerCloseEvent = new EventEmitter();
	@Output() changeThemeEvent = new EventEmitter<string>();

	//關側選單
	drawerClose() {
    this.drawerCloseEvent.emit();
  }

	//切換主題
	changeTheme(theme:string) {
		this.drawerClose();
		this.changeThemeEvent.emit(theme);
	}

	setup() {
		this.drawerClose();
		alert("tool");
	}

}
