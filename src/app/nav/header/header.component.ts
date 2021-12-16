import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {faPalette} from '@fortawesome/free-solid-svg-icons';
import {navLinks, navRoutes, themes} from '../nav-data';

//nav-toolbar 導覽工具列
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
	constructor(
		public router: Router,
	) {}

	themes = themes;
	navRoutes = navRoutes;
	navLinks = navLinks;
	faPalette = faPalette;
	
	//@Output: 父層傳遞進來的事件(在父層HTML對此元件節點用小括號包住屬性)
	@Output() drawerToggleEvent = new EventEmitter(); //側選單切換
	@Output() changeThemeEvent = new EventEmitter<string>();

	//開啟側選單
	openDrawer() {
		this.drawerToggleEvent.emit(); //切換側選單
	}

	//開啟網站
	openSite(url: string) {
		window.open(url, '_blank');
	}

	//切換主題
	changeTheme(theme:string) {
		this.changeThemeEvent.emit(theme);
	}


}
