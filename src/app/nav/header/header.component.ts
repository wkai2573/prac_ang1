import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {navLinks, navRoutes} from '../nav-data';

//nav-toolbar 導覽工具列
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	navRoutes = navRoutes;
	navLinks = navLinks;

	//側選單切換 執行器
	//@Output: 將HTML屬性上的程序，指定給此變數，讓此程序可以自由決定操作
	@Output() public drawerToggleEvent = new EventEmitter();

	constructor(
		public router: Router
	) {}

	//開啟網站
	openSite(url: string) {
		window.open(url, '_blank');
	}

	//點擊toolbar的漢堡
	onToggleDrawer() {
		this.drawerToggleEvent.emit(); //切換側選單
	}

	ngOnInit(): void {
	}


}
