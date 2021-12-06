import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, of} from 'rxjs';
import {User, UserListResponse} from './user';

//假資料
const EXAMPLE_DATA: User[] = [
	{id: 1, first_name: 'Hydrogen', last_name: 'A', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 2, first_name: 'Helium', last_name: 'B', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 3, first_name: 'Lithium', last_name: 'C', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 4, first_name: 'Beryllium', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 5, first_name: 'Boron', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 6, first_name: 'Carbon', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 7, first_name: 'Nitrogen', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 8, first_name: 'Oxygen', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 9, first_name: 'Fluorine', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 10, first_name: 'Neon', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 11, first_name: 'Sodium', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 12, first_name: 'Magnesium', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 13, first_name: 'Aluminum', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 14, first_name: 'Silicon', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 15, first_name: 'Phosphorus', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 16, first_name: 'Sulfur', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 17, first_name: 'Chlorine', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 18, first_name: 'Argon', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 19, first_name: 'Potassium', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
	{id: 20, first_name: 'Calcium', last_name: 'Lawson', email: 'michael@mail.com', avatar: 'https://reqres.in/img/faces/7-image.jpg'},
];

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private http: HttpClient
	) {}


	private apiUrl = 'https://reqres.in/api';
	
	getUsers(page:number = 0): Observable<UserListResponse> {
		const url = `${this.apiUrl}/users?page=${page+1}`;
		return this.http.get<UserListResponse>(url)
			.pipe(
				//請求失敗, 給預設值
				catchError((error: any): Observable<UserListResponse> => {
					return of();
				})
			)
	}
}
