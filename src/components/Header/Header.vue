<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3>Everything you need to manage your messaging</h3>
			<search-bar></search-bar>
		</div>

	</div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
	components: {
		'search-bar': SearchBar
	}
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#header-text {
	text-align: center;
	font-family: $font-family;
	color: $text-black;
	padding: 20px;

	h1 {
		font-style: normal;
		font-weight: bold;
		font-size: 34px;
		line-height: 41px;
	}

	h3 {
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;
	}

	#search-bar-container {
		background-color: white;
		width: 57%;
		height: 60px;
		margin-left: auto;
		margin-right: auto;
		border: $card-border;
		border-radius: 4px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	#search-bar-container input {
		border: none;
		outline: none;
		height: 70%;
		width: 100%;
		padding-left: 22px;

	}

	#search-bar-button-container {
		background-color: $green;
		width: 11%;
		height: 100%;
		min-width: 60px;
		margin-left: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#search-bar-button-container i {
		color: white;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		#search-bar-container {
			width: 90%;
			padding-left: 10px;
		}

		#search-bar-container p {
			padding: 5px;
		}

		#search-bar-button-container {
			width: 20%;
		}
	}
}
</style>