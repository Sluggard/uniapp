<template>
	<view>
		<home v-if="PageCur=='home'" />
		<category v-if="PageCur=='category'" />
		<chat v-if="PageCur=='chat'" />
		<cart v-if="PageCur=='cart'" />
		<my v-if="PageCur=='my'" />
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<text :class="'lg cuIcon-' + [PageCur == 'home'?'homefill text-green':'home text-gray']"></text>
				</view>
				<view :class="PageCur=='home'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="category">
				<view class='cuIcon-cu-image'>
					<text :class="'lg cuIcon-' + [PageCur == 'category'?'cascades text-green':'cascades text-gray']"></text>
				</view>
				<view :class="PageCur=='category'?'text-green':'text-gray'">分类</view>
			</view>
			<view class="action" @click="NavChange" data-cur="chat">
				<view class='cuIcon-cu-image'>
					<text :class="'lg cuIcon-' + [PageCur == 'chat'?'messagefill text-green':'message text-gray']"></text>
				</view>
				<view :class="PageCur=='chat'?'text-green':'text-gray'">消息</view>
			</view>
			<view class="action" @click="NavChange" data-cur="cart">
				<view class='cuIcon-cu-image'>
					<text :class="'lg cuIcon-' + [PageCur == 'cart'?'cartfill text-green':'cart text-gray']"></text>
				</view>
				<view :class="PageCur=='cart'?'text-green':'text-gray'">购物车</view>
			</view>
			<view class="action" @click="NavChange" data-cur="my">
				<view class='cuIcon-cu-image'>
					<text :class="'lg cuIcon-' + [PageCur == 'my'?'myfill text-green':'my text-gray']"></text>
				</view>
				<view :class="PageCur=='my'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				PageCur: 'home'
			}
		},
		onLoad() {

		},
		methods: {
			NavChange(event){
				this.PageCur = event.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
