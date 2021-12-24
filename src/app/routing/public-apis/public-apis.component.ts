import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {EntriesService, Entry} from 'src/app/service/entries.service';

@Component({
	templateUrl: './public-apis.component.html',
	styleUrls: ['./public-apis.component.scss']
})
export class EntriesComponent implements OnInit {
	constructor(
		private entriesService: EntriesService,
		private breakpointObserver: BreakpointObserver, //視窗尺寸觀察
	) {
		//手機時，表格合成為一欄
    breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe(result => {
				let isXSmall = false;
				for (const key in result.breakpoints) {
					if (result.breakpoints[key]) {
						isXSmall = true;
						break;
					}
				}
				if (isXSmall) {
					this.showColumns = this.COLUMNS_phone;
				} else {
					this.showColumns = this.COLUMNS;
				}
      });
	}

	//組件
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	//查詢參數
	httpsOptions = ['all', 'yes', 'no'];
	corsOptions = ['all', 'yes', 'no', 'unknown'];
	httpsSelected = 'all';
	corsSelected = 'all';
	params: any = {
		title: '',
		description: '',
		auth: '',
		https: null,
		cors: null,
		category: ''
	};

	//表格資料
	COLUMNS = ['API', 'Description', 'Auth', 'HTTPS', 'Cors', 'Link', 'Category'];
	COLUMNS_phone = ['Entries'];
	showColumns = this.COLUMNS;
	isLoading = false;
	entries: Entry[] = []; //全部資料
	entries_nowPage: Entry[] = []; //當頁資料
	count: number = 0; //資料量
	pageIndex = 0;
	pageSize = 10;

	//讀取Entries
	loadEntries() {
		this.isLoading = true;
		this.clearTable();
		this.entriesService.loadEntries(this.removeEmpty(this.params))
			.subscribe(res => {
				this.isLoading = false;
				this.count = res.count;
				this.entries = res.entries;
				this.setDataForNowPage();
			});
	}

	//清空表格
	clearTable() {
		this.entries = [];
		this.entries_nowPage = [];
		this.count = 0;
		this.paginator.firstPage(); //到第一頁
	}

	//清除空值
	removeEmpty(params: any) {
		let newParams: any = {};
		for (const key in params) {
			if (Object.prototype.hasOwnProperty.call(params, key)) {
				const val = params[key];
				if (!!val) newParams[key] = val;
			}
		}
		return newParams;
	}

	//combo選擇:設定參數
	setHttps(httpsOption: string) {
		switch (httpsOption) {
			case 'all': this.params.https = null; break;
			case 'yes': this.params.https = 'true'; break;
			case 'no': this.params.https = 'false'; break;
		}
	}

	setCors(corsOption: string) {
		switch (corsOption) {
			case 'all': this.params.cors = null; break;
			default: this.params.cors = corsOption; break;
		}
	}

	//換頁處理
	setPageEvent(pageEvent: PageEvent) {
		this.count = pageEvent.length;
		this.pageIndex = pageEvent.pageIndex;
		this.pageSize = pageEvent.pageSize;
		this.setDataForNowPage();
	}

	//設定目前頁的資料
	setDataForNowPage() {
		this.entries_nowPage = this.entries.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
	}

	//事件__________

	ngOnInit(): void {
		// this.getEntries();
	}


}
