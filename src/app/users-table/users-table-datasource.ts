// 此檔案適合:
// 資料一次全部撈取，然後由前端進行分頁與排序使用
// 如果要由後端做分頁，使用簡單資料(Simple data array)即可

import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {Observable, of as observableOf, merge} from 'rxjs';
import {UserService} from '../service/user.service';
import {User} from '../service/user';

/**
 * Data source for the UsersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersTableDataSource extends DataSource<User> {
	data: User[] = [];
	paginator: MatPaginator | undefined;
	sort: MatSort | undefined;

	constructor(private userService: UserService) {
		super();
	}

	/**
	 * 將此數據源連接到表。 表格只會在以下時間更新
	 * 返回的流發出新項目。
	 * @returns 要呈現的項目流。
	 */
	connect(): Observable<User[]> {
		if (this.paginator && this.sort) {
			//將會影響資料渲染的事件(初始資料 & 換頁 & 排序)，整合成一個觀察流
			return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
				.pipe(map((event, eventCount) => {
					return this.getPagedData(this.getSortedData([...this.data]));
				}));
		} else {
			throw Error('Please set the paginator and sort on the data source before connecting.');
		}
	}

	/**
	 * 當表被銷毀時調用。使用此功能可清除任何打開的連接或釋放連接期間設置的任何保留資源。
	 */
	disconnect(): void {}

	/**
	 * 分頁數據（客戶端）。 如果您使用服務器端分頁，
	 * 這將被從服務器請求適當的數據所取代。
	 */
	private getPagedData(data: User[]): User[] {
		if (this.paginator) {
			const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
			return data.splice(startIndex, this.paginator.pageSize);
		} else {
			return data;
		}
	}

	/**
	 * 對數據進行排序（客戶端）。 如果您使用服務器端排序，
	 * 這將被從服務器請求適當的數據所取代。
	 */
	private getSortedData(data: User[]): User[] {
		if (!this.sort || !this.sort.active || this.sort.direction === '') {
			return data;
		}

		return data.sort((a, b) => {
			const isAsc = this.sort?.direction === 'asc';
			switch (this.sort?.active) {
				case 'id': return compare(+a.id, +b.id, isAsc);
				case 'first_name': return compare(a.first_name, b.first_name, isAsc);
				case 'last_name': return compare(a.last_name, b.last_name, isAsc);
				case 'email': return compare(a.email, b.email, isAsc);
				default: return 0;
			}
		});
	}

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
