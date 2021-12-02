import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

//列結構
export interface UsersTableItem {
  id: number;
  first_name: string;
	last_name: string;
	email: string;
	avatar: string;
}

//資料
const EXAMPLE_DATA: UsersTableItem[] = [
  {id: 1, first_name: 'Hydrogen', last_name:'A', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 2, first_name: 'Helium', last_name:'B', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 3, first_name: 'Lithium', last_name:'C', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 4, first_name: 'Beryllium', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 5, first_name: 'Boron', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 6, first_name: 'Carbon', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 7, first_name: 'Nitrogen', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 8, first_name: 'Oxygen', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 9, first_name: 'Fluorine', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 10, first_name: 'Neon', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 11, first_name: 'Sodium', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 12, first_name: 'Magnesium', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 13, first_name: 'Aluminum', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 14, first_name: 'Silicon', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 15, first_name: 'Phosphorus', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 16, first_name: 'Sulfur', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 17, first_name: 'Chlorine', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 18, first_name: 'Argon', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 19, first_name: 'Potassium', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
  {id: 20, first_name: 'Calcium', last_name:'Lawson', email:'michael@mail.com', avatar:'https://reqres.in/img/faces/7-image.jpg'},
];

/**
 * Data source for the UsersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersTableDataSource extends DataSource<UsersTableItem> {
  data: UsersTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UsersTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: UsersTableItem[]): UsersTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UsersTableItem[]): UsersTableItem[] {
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
