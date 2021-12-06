import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//HTTP服務
import {HttpClientModule} from '@angular/common/http';

//material(設計風格) 元件
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//自訂元件
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    BrowserAnimationsModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
