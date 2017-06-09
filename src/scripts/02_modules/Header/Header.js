import React, { Component } from 'react';
import 'whatwg-fetch';
import './Header.scss';
import Button from '../../01_components/Button/Button';
import Input from '../../01_components/Input/Input';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topVideoList: null
		}
		this.onClickAll = this.onClickAll.bind(this);
		this.onClickOnline = this.onClickOnline.bind(this);
		this.onClickOffline = this.onClickOffline.bind(this);
	}

	componentWillMount() {
		const url = "https://api.twitch.tv/kraken/videos/top"
		fetch(
			url,
			{
				method: 'GET',
				headers: {
					"Client-ID": "my05o002gwlb9y2l520uwuwpo312vix",
					"Accept": "application/vnd.twitchtv.v5+json"
				},
				credentials: "same-origin"
			})
			.then(response => response.json())
			.then(json => {
				this.setState({
					topVideoList: json.vods
				})
			}
		)
	}
	onClickAll() {
		const { topVideoList } = this.state;
		topVideoList.map( video => console.log(video) );

	}
	onClickOnline() {
		console.log('Online users');
	}
	onClickOffline() {
		console.log('Offline users');
	}
	render() {
		return (
			<header className="bar">
                Twitch TV
				<Button onClick={this.onClickAll} content={'All'} />
				<Button onClick={this.onClickOnline} content={'Online'} />
				<Button onClick={this.onClickOffline} content={'Offline'} />
				<Input />
			</header>
		);
	}
}

export default Header;
