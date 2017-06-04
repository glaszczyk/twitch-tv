import React, { Component } from 'react';
import Button from '../../01_components/Button/Button';
import Input from '../../01_components/Input/Input';

class Header extends Component {
	render() {
		return (
			<div>
                Twitch TV
				<Button content={'All'} />
				<Button content={'Online'} />
				<Button content={'Offline'} />
				<Input />
			</div>
		);
	}
}

export default Header;
