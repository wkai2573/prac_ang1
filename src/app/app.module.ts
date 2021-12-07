import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//HTTP服務
import {HttpClientModule} from '@angular/common/http';
//路由
import {RoutingModule} from './routing/routing.module';

//Angular Flex-Layout
import {FlexLayoutModule} from '@angular/flex-layout';
//material(設計風格) 元件
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

//自訂元件
import {UsersTableComponent} from './users-table/users-table.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav/sidenav.component';


@NgModule({
	declarations: [
		AppComponent,
		UsersTableComponent,
		HomeComponent,
		HeaderComponent,
  SidenavListComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RoutingModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
