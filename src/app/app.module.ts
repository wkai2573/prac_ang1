import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//HTTP服務
import {HttpClientModule} from '@angular/common/http';
//路由
import {RoutingModule} from './routing/routing.module';

//插件_Angular Flex-Layout
import {FlexLayoutModule} from '@angular/flex-layout';
//插件_angular-fontAwesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

//material(設計風格) 元件
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
<<<<<<< HEAD
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
>>>>>>> 8b4b1d844345f72ec82879a782507b99eaa1a709
import {LayoutModule} from '@angular/cdk/layout';

//自訂元件
import {UsersTableComponent} from './users-table/users-table.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './nav/header/header.component';
import {DrawerComponent} from './nav/drawer/drawer.component';


@NgModule({
	declarations: [
		AppComponent,
		UsersTableComponent,
		HomeComponent,
		HeaderComponent,
		DrawerComponent,
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
		MatListModule,
		MatMenuModule,
<<<<<<< HEAD
		MatProgressSpinnerModule,
>>>>>>> 8b4b1d844345f72ec82879a782507b99eaa1a709
		LayoutModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
