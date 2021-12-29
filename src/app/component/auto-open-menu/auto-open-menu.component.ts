//元件: 滑入開啟的選單按鈕
//參考: https://stackoverflow.com/questions/53618333/how-to-open-and-close-angular-mat-menu-on-hover

import {Component} from '@angular/core';

@Component({
	selector: 'app-auto-open-menu',
	template: `
	<button mat-button
			[matMenuTriggerFor]="menu" #menuTrigger="matMenuTrigger"
			(mouseenter)="mouseEnter(menuTrigger)" (mouseleave)="mouseLeave(menuTrigger)">
		<ng-content select="[trigger]"></ng-content>
	</button>
	<mat-menu class="auto-open-menu" #menu="matMenu" [hasBackdrop]="false">
		<div (mouseenter)="mouseEnter(menuTrigger)" (mouseleave)="mouseLeave(menuTrigger)">
			<ng-content select="[content]"></ng-content>
		</div>
	</mat-menu>`,
	styles: [`
		::ng-deep .auto-open-menu .mat-menu-content:not(:empty) {
			padding: 0px !important;
		}
	`]
})
export class AutoOpenMenuComponent {
	timedOutCloser: any; //倒數關閉器

	constructor() {}

	mouseEnter(trigger: {openMenu: () => void;}) {
		if (this.timedOutCloser) {
			clearTimeout(this.timedOutCloser);
		}
		trigger.openMenu();
	}

	mouseLeave(trigger: {closeMenu: () => void;}) {
		this.timedOutCloser = setTimeout(() => {
			trigger.closeMenu();
		}, 200);
	}
}