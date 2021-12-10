import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {UsersTableComponent} from '../users-table/users-table.component';


const routes: Routes = [
	{path:'', redirectTo: '/home', pathMatch: 'full'},
	{path:'home', component: HomeComponent},
	{path:'usersTable', component: UsersTableComponent},
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class RoutingModule {}
