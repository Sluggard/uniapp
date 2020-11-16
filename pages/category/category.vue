<template name="components">
	<view class="page">
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 100upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					Tab-{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 100upx)"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="ad">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"></image>
					</view>
					<view class="title">
						<span class="title-line"></span>
						    <span class="title-text">热门推荐</span>
						    <span class="title-line"></span>
					</view>
					<view class="product-items">
						<view class="product-item">
							<image src="../../static/logo.png"></image>
							<view class="pro-title">K7x 黑镜 6G+128G 测试版</view>
							<view class="pro-price">
								<span class="sale-price">￥2999</span><span class="origin-price">￥3999</span>
							</view>
						</view>
						<view class="product-item">
							<image src="../../static/logo.png"></image>
							<view class="pro-title">K7x 黑镜 6G+128G 测试版</view>
							<view class="pro-price">
								<span class="sale-price">￥2999</span><span class="origin-price">￥3999</span>
							</view>
						</view>
						<view class="product-item">
							<image src="../../static/logo.png"></image>
							<view class="pro-title">K7x 黑镜 6G+128G 测试版</view>
							<view class="pro-price">
								<span class="sale-price">￥2999</span><span class="origin-price">￥3999</span>
							</view>
						</view>
						<view class="product-item">
							<image src="../../static/logo.png"></image>
							<view class="pro-title">K7x 黑镜 6G+128G 测试版</view>
							<view class="pro-price">
								<span class="sale-price">￥2999</span><span class="origin-price">￥3999</span>
							</view>
						</view>
						<view class="product-item">
							<image src="../../static/logo.png"></image>
							<view class="pro-title">K7x 黑镜 6G+128G 测试版</view>
							<view class="pro-price">
								<span class="sale-price">￥2999</span><span class="origin-price">￥3999</span>
							</view>
						</view>
						<view class="product-item">
							<image src="../../static/logo.png"></image>
							<view class="pro-title">K7x 黑镜 6G+128G 测试版</view>
							<view class="pro-price">
								<span class="sale-price">￥2999</span><span class="origin-price">￥3999</span>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true
			};
		},
		created() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});

			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
				list[i].length = 6;
			}
			this.list = list;
			this.listCur = list[0];
			uni.hideLoading()
		},
		methods: {
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * (140 + e.currentTarget.dataset.length * 207)
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				return false //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * (140 + this.list[i].length * 207)
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		}
	}
</script>
<style lang="scss">
	.VerticalBox {
		display: flex;

		.VerticalNav.nav {
			width: 150upx;
			white-space: initial;

			.cu-item {
				width: 100%;
				text-align: center;
				background-color: #fff;
				margin: 0;
				border: none;
				height: 50px;
				position: relative;
			}

			.cu-item.cur {
				background-color: #f1f1f1;
			}

			.cu-item.cur::after {
				content: "";
				width: 8upx;
				height: 30upx;
				border-radius: 10upx 0 0 10upx;
				position: absolute;
				background-color: currentColor;
				top: 0;
				right: 0upx;
				bottom: 0;
				margin: auto;
			}
		}

		.VerticalMain {
			background-color: #f1f1f1;
			flex: 1;

			.ad image {
				margin: 0 auto;
				width: 100%;
				height: 150upx;
				border-radius: 10upx;
			}

			.title {
				width: 100%;
				height: 36px;
				line-height: 36px;
				text-align: center;

				.title-text {
					margin: 0 20upx;
				}

				.title-line {
					display: inline-block;
					width: 100upx;
					border-top: 1px solid #cccccc;
					vertical-align: 5px;
				}
			}

			.product-items {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.product-item {
					margin: 8upx 8upx;
					width: 46%;
					height: 375upx;
					border-radius: 10upx;
					background-color: #FFFFFF;
					text-align: center;

					image {
						display: block;
						margin: 0 auto;
						height: 250upx;
						width: 90%;
					}

					.pro-title {
						margin: 5upx auto;
						width: 80%;
						font-size: 25upx;
					}

					.pro-price {
						.sale-price {
							color: red;
							font-size: 20upx;
						}

						.origin-price {
							text-decoration: line-through;
							color: gray;
							font-size: 18upx;
							margin-left: 10upx;
						}
					}

				}
			}
		}
	}
</style>
