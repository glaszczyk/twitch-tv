import React, { Component } from 'react';
import SingleProfile from '../SingleProfile/SingleProfile';

class ProfilesList extends Component {
	render() {
		const { topVideoList } = this.props;
		const videoList = topVideoList.map(video => (<SingleProfile video={video} />));
		return (
			<div>
				{videoList}
			</div>
		);
	}
}

export default ProfilesList;
