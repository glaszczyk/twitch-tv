import React from 'react';
import 'whatwg-fetch';

import Header from '../02_modules/Header/Header';
import SearchResults from '../02_modules/SearchResults/SearchResults';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topVideoList: null,
		};
	}

	componentWillMount() {
		const url = 'https://api.twitch.tv/kraken/videos/top';
		fetch(
			url,
			{
				method: 'GET',
				headers: {
					'Client-ID': 'my05o002gwlb9y2l520uwuwpo312vix',
					Accept: 'application/vnd.twitchtv.v5+json',
				},
				credentials: 'same-origin',
			})
			.then(response => response.json())
			.then((json) => {
				this.setState({
					topVideoList: json.vods,
				});
			},
		);
	}

	render() {
		return (
			<div>
				<Header />
				<SearchResults topVideoList={this.state.topVideoList} />
			</div>
		);
	}
}

export default App;
