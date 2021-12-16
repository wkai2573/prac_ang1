import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

export interface NavRoute {name: string, url: string, matIconName: string}
export interface NavLink {name: string, url: string, iconDefinition: IconDefinition}

//nav左項目:route
export const navRoutes: NavRoute[] = [
	{name: 'Home', url: '/home', matIconName:'home'},
	{name: 'UsersTable', url: '/usersTable', matIconName:'table_chart'},
];

//nav右項目:link
export const navLinks: NavLink[] = [
	{name: 'Twitter', url: 'https://www.google.com/', iconDefinition: faTwitter},
	{name: 'Github', url: 'https://www.google.com/', iconDefinition: faGithub},
	{name: 'Youtube', url: 'https://www.google.com/', iconDefinition: faYoutube},
];

//主題
export const themes: string[] = ['theme-my-dark', 'theme-my-light', 'theme-purple-green'];