import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDrawerMode} from '@angular/material/sidenav';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ang1';
	theme = 'theme-purple-green'; //主題

	//側選單參數: 展開時禁用內容 & 展開方式
	hasBackdrop:boolean = false;
	drawerMode:MatDrawerMode = 'side';

	constructor(
		breakpointObserver: BreakpointObserver, //視窗尺寸變化觀察器
	) {
		//側選單: 窄_擋住內容&禁用內容, 寬_推開內容
    breakpointObserver
      .observe([
        Breakpoints.XSmall
      ])
      .subscribe(result => {
				let isPhoneSize = false;
				for (const key in result.breakpoints) {
					isPhoneSize = result.breakpoints[key];
				}
				if (isPhoneSize) {
					this.hasBackdrop = true;
					this.drawerMode = 'over';
				} else {
					this.hasBackdrop = false;
					this.drawerMode = 'side';
				}
      });
	}

	//切換主題
	changeTheme(event:any) {
		this.theme = event.theme;
	}

}
