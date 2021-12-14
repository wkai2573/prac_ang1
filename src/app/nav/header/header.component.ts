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
	
	//@Output: 將別處HTML屬性上的程序，指定給此變數，讓此程序可以自由決定操作
	@Output() drawerToggleEvent = new EventEmitter(); //側選單切換
	@Output() changeThemeEvent = new EventEmitter();

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
		this.changeThemeEvent.emit({theme});
	}


}
