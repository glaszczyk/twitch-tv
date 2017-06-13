import React, { Component } from 'react';
import SingleVideo from '../SingleVideo/SingleVideo';

class VideosList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { topVideoList } = this.props;
		const videoList = topVideoList.map(video => (<SingleVideo key={video['_id']} video={video} />));
		return (
			<div>
				{videoList}
			</div>
		);
	}
}

export default VideosList;
