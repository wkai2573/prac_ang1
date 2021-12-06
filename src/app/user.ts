//使用者
export interface User {
  id: number;
  first_name: string;
	last_name: string;
	email: string;
	avatar: string;
}

//請求: 使用者清單
export interface UserListResponse {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: User[];
	support: Object;
}