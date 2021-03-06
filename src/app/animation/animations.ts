// 路由動畫: https://angular.tw/guide/route-animations

import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

//淡進動畫
export const fadeInAnimation =
	trigger('routeAnimations', [
		transition('* <=> *', [
			//父層style
			style({position: 'relative'}),
			//進入&移出頁保持重疊
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
				})
			], {optional: true}),

			//進入頁style
			query(':enter', [
				style({opacity: 0})
			], {optional: true}),

			//移出頁: 淡出
			query(':leave', [
				animate('300ms ease-in', style({opacity: 0}))
			], {optional: true}),
			//進入頁: 淡進
			query(':enter', [
				animate('300ms ease-out', style({opacity: 1}))
			], {optional: true}),

		]),
	]);

//滑進動畫, 左進右出
export const slideInAnimation =
	trigger('routeAnimations', [
		transition('* <=> *', [

			//父層style
			style({position: 'relative'}),

			//進入&移出頁保持重疊
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
				})
			]),

			//進入頁style
			query(':enter', [
				style({
					left: '-100%',
					"background-color": "#00F"
				})
			]),

			//執行子層移出項目的動畫(若無子動畫會看起來無效)
			query(':leave', animateChild()),

			//group:同時執行
			group([
				query(':leave', [
					animate('1000ms ease-out', style({left: '100%'}))
				]),
				query(':enter', [
					animate('1000ms ease-out', style({left: '0%'}))
				]),
			]),

			//執行子層進入項目的動畫(若無子動畫會看起來無效)
			query(':enter', animateChild()),
		]),
	]);
