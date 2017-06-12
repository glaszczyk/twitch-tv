import React, { Component } from 'react';
import SingleProfile from '../SingleProfile/SingleProfile';

class ProfilesList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { topVideoList } = this.props;
		const videoList = topVideoList.map(video => (<SingleProfile key={video["_id"]} video={video} />));
		return (
			<div>
				{videoList}
			</div>
		);
	}
}

export default ProfilesList;
