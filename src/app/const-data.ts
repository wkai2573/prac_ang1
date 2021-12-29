import {Routes} from "@angular/router";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {PublicApisComponent} from "./routing/public-apis/public-apis.component";
import {HomeComponent} from "./routing/home/home.component";
import {ReqResComponent} from "./routing/req-res/req-res.component";
import {Official1Component} from "./routing/official1/official1.component";

//==路由==
export const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent, data: {animation: 'page'}},
	{path: 'req-res', component: ReqResComponent, data: {animation: 'page'}},
	{path: 'public-apis', component: PublicApisComponent, data: {animation: 'page'}},
	{path: 'official1', component: Official1Component, data: {animation: 'page'}},
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
	{name: 'Official1', url: '/official1', matIconName: 'table_chart'},
];

//nav右項目:link
export const navLinks: NavLink[] = [
	{name: 'Twitter', url: 'https://www.google.com/', iconDefinition: faTwitter},
	{name: 'Github', url: 'https://www.google.com/', iconDefinition: faGithub},
	{name: 'Youtube', url: 'https://www.google.com/', iconDefinition: faYoutube},
];



