import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavListComponent implements OnInit {

	//關閉側選單 執行器
	@Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

	onSidenavClose() {
    this.sidenavClose.emit();
  }

}
