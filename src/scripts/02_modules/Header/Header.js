import React, { Component } from 'react';
import './Header.scss';
import Button from '../../01_components/Button/Button';
import Input from '../../01_components/Input/Input';

class Header extends Component {
	constructor(props) {
		super(props);

		this.onClickAll = this.onClickAll.bind(this);
		this.onClickOnline = this.onClickOnline.bind(this);
		this.onClickOffline = this.onClickOffline.bind(this);
	}

	onClickAll() {
		console.log('All users');
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
