import 'whatwg-fetch';

const TwitchTV = {
	getTopVideos() {
		const url = 'https://api.twitch.tv/kraken/videos/top';
		return fetch(
			url,
			{
				method: 'GET',
				headers: {
					'Client-ID': 'my05o002gwlb9y2l520uwuwpo312vix',
					Accept: 'application/vnd.twitchtv.v5+json',
				},
				credentials: 'same-origin',
			})
			.then(response => response.json());
	},
	getChannel(channelId) {
		const url = `https://api.twitch.tv/kraken/channels/${channelId}`;
		return fetch(
			url,
			{
				method: 'GET',
				headers: {
					'Client-ID': 'my05o002gwlb9y2l520uwuwpo312vix',
					Accept: 'application/vnd.twitchtv.v5+json',
				},
				credentials: 'same-origin',
			})
			.then(response => response.json());
	},
	getChannelVideos(channelId) {
		const url = `https://api.twitch.tv/kraken/channels/${channelId}/videos`;
		return fetch(
			url,
			{
				method: 'GET',
				headers: {
					'Client-ID': 'my05o002gwlb9y2l520uwuwpo312vix',
					Accept: 'application/vnd.twitchtv.v5+json',
				},
				credentials: 'same-origin',
			})
			.then(response => response.json());
	},
};

export default TwitchTV;
