import {AfterViewInit, Component} from "@angular/core";

//幻燈片
declare interface CarouselItem {
	active?: boolean,
	imgUrl: string,
	captionTitle: string,
	captionSubtitle: string,
}
const CAROUSE_ITEMS:CarouselItem[] = [
	{
		active: true,
		imgUrl: 'https://dummyimage.com/1200x300/204/aaa',
		captionTitle: '標題一',
		captionSubtitle: 'Some representative placeholder content for the first slide.'
	},
	{
		imgUrl: 'https://dummyimage.com/1000x500/042/aaa',
		captionTitle: '標題二',
		captionSubtitle: 'Some representative placeholder content for the first slide.'
	},
	{
		imgUrl: 'https://dummyimage.com/500x200/024/aaa',
		captionTitle: '標題三',
		captionSubtitle: 'Some representative placeholder content for the first slide.'
	}
];

//跑馬燈
const MARQUEE_ITEMS:string[] = [
	'新竹縣湖口鄉王爺壟運動公園興建工程 8000 m²',
	'桃園市觀音區草漯第一、三、六區整體開發單元市地重劃統包工程 41200 m²',
	'環南市場 2600 m²',
	'新店區中央新村北側社區社會住宅新建統包工程 3400 m²',
	'力成科技廠三廠新建工程 6350 m²',
	'新竹縣(竹北市)道路優質化及環境提升計畫 10300 m²',
	'板橋P/S改建專案計畫工程(土建統包) 5300 m²',
	'臺北市大同區明倫公共住宅統包工程 3500 m²',
	'太平洋左岸宜居城市-美崙綠網營造計畫 22000 m²',
	'「洄瀾。回藍」花蓮市河海人文廊道建置工程-海洋活力地景及港濱景觀綠廊建置工程綠網營造計畫 8000 m²',
	'105年度南投埔里福興農場旅館開發新建統包工程 14300 m²',
	'新光鋼鐵新澄物流園區物流中心-植草磚鋪面工程 5000 m²',
	'東大路道路人本環境改善工程(中央路至經國路及樹林頭公園周邊) 6500 m²',
	'桃園閃耀雙城飛翔-中壢銀河水岸亮點計畫工程 4200 m²',
	'北投影視音園區綠美化工程及新興公園景觀改善工程 6150 m²',
	'新北市土城區員和段公園，道路及地下停車場新建工程 6400 m²',
	'捷運雙連站至民權西路站間帶狀公園改造統包工程 4800 m²',
	'君寶建設_有謙家園 2000 m²',
	'新竹市隆恩圳藍帶親水空間景觀工程 3000 m²',
	'新竹市文化綠廊環境景觀縫合工程 4250 m²',
	'新竹市友善環境營造隆恩圳與護城河人行空間串聯工程 8000 m²',
	'公道五路迎賓景觀人行空間改善計畫 4950 m²',
	'桃園機場捷運A20站區區段徵收工程 35000 m²',
	'桃園流行音樂露天劇場新建工程 8000 m²',
	'海洋文化及流行音樂中心新建工程 8150 m²',
	'花蓮青年安心成家住宅新建統包工程案 11700 m²',
	'國家會展中心(南港展覽館擴建)雜項工程 7000 m²',
	'中央研究院國家生技研究園區興建工程(統包) 8800 m²',
	'臺灣電影文化園區-國家電影中心統包工程 4400 m²',
	'竹北市斗崙里中崙里集會所新建工程 2750 m²',
	'國道3號古坑服務區前院地區改善工程 3200 m²',
	'竹北市文忠路及嘉勤北路人行步道改善工程 3100 m²',
	'豆子埔溪自強北路至安溪寮橋人行計畫 1900 m²',
	'臺北市內湖區西湖國民小學忠孝樓東西棟拆除工程 2000 m²',
	'高雄環狀輕軌捷運建設(第一階段)機廠-愛河橋東引道 1350 m²',
];

@Component({
  templateUrl: './official1.component.html',
  styleUrls: ['./official1.component.scss']
})
export class Official1Component implements AfterViewInit {
	constructor() { }

	carouselItems = CAROUSE_ITEMS; //幻燈片
	marqueeItems = MARQUEE_ITEMS;  //跑馬燈

	//view初始化
	ngAfterViewInit(): void {
		// 跑馬燈捲動速度根據數量定義(每秒移動像素=容器高+內容高/像素)
		// https://stackoverflow.com/questions/57023481/100-high-vertical-marquee-with-css-at-fixed-scroll-speed
		var div:any = document.querySelector(".marquee");
		var ul:any = document.querySelector(".marquee > ul");
		var time = (div.offsetHeight + ul.offsetHeight) / 30;
		ul.style.animationDuration = time + "s";
	}

}
