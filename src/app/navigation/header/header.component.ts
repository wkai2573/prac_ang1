import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	//側選單切換 執行器
	//@Output: 將HTML屬性上的程序，指定給此變數，讓此程序可以自由決定操作
	@Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

	// 點擊toolbar的漢堡
	public onToggleSidenav = () => { 
		this.sidenavToggle.emit(); //展開側選單
	}

}
