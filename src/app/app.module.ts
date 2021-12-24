import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Apache用, https://www.itread01.com/content/1568185445.html
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

//HTTP服務
import {HttpClientModule} from '@angular/common/http';
//路由
import {RoutingModule} from './routing/routing.module';
//使用ngModel
import {FormsModule} from '@angular/forms';

//插件_Angular Flex-Layout
import {FlexLayoutModule} from '@angular/flex-layout';
//插件_angular-fontAwesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

//material(設計風格) 元件
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

//自訂元件
import {UsersTableComponent} from './routing/users-table/users-table.component';
import {HomeComponent} from './routing/home/home.component';
import {HeaderComponent} from './nav/header/header.component';
import {DrawerComponent} from './nav/drawer/drawer.component';
import {FooterComponent} from './nav/footer/footer.component';
import {EntriesComponent} from './routing/entries/entries.component';


@NgModule({
	declarations: [
		AppComponent,
		UsersTableComponent,
		HomeComponent,
		HeaderComponent,
		DrawerComponent,
		FooterComponent,
		EntriesComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		FontAwesomeModule,
		FlexLayoutModule,
		LayoutModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule,
		MatMenuModule,
		MatProgressBarModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatDatepickerModule,
		MatExpansionModule,
		MatSlideToggleModule,
		MatDividerModule,
		MatGridListModule,
	],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap: [AppComponent]
})
export class AppModule {}
