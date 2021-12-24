import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, of} from 'rxjs';

export interface Entry {
	API: string,
	Description: string,
	Auth: string,
	HTTPS: boolean,
	Cors: string,
	Link: string,
	Category: string,
}

export interface EntryListResponse {
	count: number,
	entries: Entry[],
}

@Injectable({providedIn: 'root'})
export class EntriesService {
	constructor(
		private http: HttpClient
	) {}

	private api = 'https://api.publicapis.org';

	loadEntries(params:any): Observable<EntryListResponse> {
		let url = `${this.api}/entries`;
		return this.http.get<EntryListResponse>(url, {params})
			.pipe(
				//請求失敗, 給預設值
				catchError((error: any): Observable<EntryListResponse> => {
					return of();
				})
			);
	}
}
