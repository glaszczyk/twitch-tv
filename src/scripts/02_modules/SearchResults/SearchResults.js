import React, { Component } from 'react';
import VideosList from '../VideosList/VideosList';

class SearchResults extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<VideosList topVideoList={this.props.topVideoList} />
			</div>
		);
	}
}

export default SearchResults;
