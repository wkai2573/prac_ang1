import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {User} from '../user';
import {UserService} from '../user.service';
import { UsersTableDataSource } from './users-table-datasource';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<User>;
  dataSource: User[] = [];
	total: number = 0;
	pageIndex: number = 0;
	pageEvent: PageEvent | undefined;
	sort:Sort = {active:"id", direction:"asc"};

  //要顯示的欄位 & 順序
  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'avatar'];

  constructor(
		private userService: UserService
	) {}

	//渲染後初始化
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;

    this.paginator._intl.itemsPerPageLabel = "每頁項目：";
  }

	ngOnInit() {
		//註冊觀察
		this.getServerData(undefined);
	}

	public getServerData(event?:PageEvent){
		this.userService.getUsers(event?.pageIndex).subscribe(res=> {
			this.dataSource = res.data;
			this.total = res.total;
		});
		return event;
	}

	public sortData(event:Sort) {
		alert(JSON.stringify(event));
	}

}
