import {Routes} from "@angular/router";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {EntriesComponent as PublicApisComponent} from "./routing/public-apis/public-apis.component";
import {HomeComponent} from "./routing/home/home.component";
import {UsersTableComponent as ReqResComponent} from "./routing/req-res/req-res.component";

//==路由==
export const routes: Routes = [
	{path: '', redirectTo: '/entries', pathMatch: 'full'},
	{path: 'home', component: HomeComponent, data: {animation: 'page1'}},
	{path: 'req-res', component: ReqResComponent, data: {animation: 'page2'}},
	{path: 'public-apis', component: PublicApisComponent, data: {animation: 'page3'}},
];

//==主題==
export const themes: string[] = ['theme-my-dark', 'theme-my-light', 'theme-purple-green'];

//==導航==
export interface NavRoute {name: string, url: string, matIconName: string;}
export interface NavLink {name: string, url: string, iconDefinition: IconDefinition;}

//nav左項目:route
export const navRoutes: NavRoute[] = [
	{name: 'Home', url: '/home', matIconName: 'home'},
	{name: 'ReqRes', url: '/req-res', matIconName: 'table_chart'},
	{name: 'Public Apis', url: '/public-apis', matIconName: 'table_chart'},
];

//nav右項目:link
export const navLinks: NavLink[] = [
	{name: 'Twitter', url: 'https://www.google.com/', iconDefinition: faTwitter},
	{name: 'Github', url: 'https://www.google.com/', iconDefinition: faGithub},
	{name: 'Youtube', url: 'https://www.google.com/', iconDefinition: faYoutube},
];



