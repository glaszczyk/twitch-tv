import React, { Component } from 'react';

class ChannelInfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.channel}
			</div>
		);
	}
}

export default ChannelInfo;
