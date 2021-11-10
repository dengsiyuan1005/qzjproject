<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			<div class="listTab">
				<ul>
					<li v-for="(item,index) in listTab" @click="clickTba(index)" :class="{'current':currentIndex == index}">
						<div>{{item.name}}</div>
						<img :src="item.icon" />
						
					</li>
				</ul>
			</div>
			<div class="banner">
				<div class="item">
					<img :src="bannerImg[currentIndex].img">
				</div>
				<div class="page">
					<ul>
						<li v-for="(item,index) in bannerImg" @click="clickTba(index)" :class="{'current':currentIndex == index}">
							{{index+1}}</li>
					</ul>
				</div>
				
			</div>
		</div>
	</body>
	<script>
		var myVue = new Vue({
			el: "#app",
			data: {
				// 轮播图图片
				bannerImg: [{
						img: "http://hbimg.huabanimg.com/d6a731439fd2548a5b8558c5a7e722b04929ccd042db3c-WxsvAV_fw658/format/webp",
					},
					{
						img: "http://hbimg.huabanimg.com/266ed62b15519b185c5d06ec4f2a17eca2b5a934b0f00-uKUQhR_fw658/format/webp",
					},
					{
						img: "http://hbimg.huabanimg.com/bd61a4ce08e95439bb0009ba06e54dcda146a6911e4b02-zwUjPU_fw658/format/webp",
					},
					{
						img: "http://hbimg.huabanimg.com/fcade6b85c4af2fc9d584a8e9bcd8725b4f086b6255397-tgdQx5_fw658/format/webp",
					},
				],
				// tab切换
				listTab: [{
						name: "乡间",
						icon: "https://img.hengtn.com/repairPresentation/15973716671243497.png"
					},
					{
						name: "隧道",
						icon: "https://img.hengtn.com/repairPresentation/15973715265396452.png"
					},
					{
						name: "浪花",
						icon: "https://img.hengtn.com/repairPresentation/1597371521220606.png"
					},
					{
						name: "天空",
						icon: "https://img.hengtn.com/repairPresentation/15973726323751711.png"
					},
				],
				currentIndex: 0, //默认显示图片
				timer: null //定时器
			},
			computed: {
				// 计算当前图片位置
				current() {
					// 如果当前index等等于数组length-1 就return0 否则就当前index加1
					if (this.currentIndex == this.bannerImg.length - 1) {
						return 0;
					} else {
						return this.currentIndex + 1;
					}
				}
			},
			mounted() {
				// 执行定时器
				this.autoPlay();
			},
			methods: {
				// 当点击后 当前索引等于点击的index
				clickTba(index) {
					this.currentIndex = index;
				},
				// 定时器函数
				autoPlay() {
					this.timer = setInterval(() => {
						this.clickTba(this.current)
					}, 3000)
				}
			}
		})
	</script>
	<style>
		* {
			margin: 0;
			padding: 0;
		}

		ul li {
			list-style: none;
			float: left;
			width: 30px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			cursor: pointer;
			color: rgba(255, 255, 255, .8);
			font-size: 14px;
		}
		.listTab {
			width: 600px;
			height: 80px;
			margin: 0 auto;
			background: #000000;
		}
		
		.listTab ul li {
			width: 25%;
			height: 80px;
		}
		.listTab ul img {
			width:30px;
			height: 30px;
		}
		.banner {
			width: 600px;
			height: 300px;
			margin: 0 auto;
			position: relative;
		}

		.banner img {
			width: 600px;
			height: 300px;
			display: block;
		}

		.banner .page {
			background: rgba(0, 0, 0, .5);
			position: absolute;
			right: 0;
			bottom: 0;
			width: 100%;
		}

		.banner .page ul {
			float: right;
		}

		.current {
			background: #150496;
			color: red;
		}

		
	</style>
</html>

