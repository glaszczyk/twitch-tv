import React, { Component } from 'react';
import ProfilesList from '../ProfilesList/ProfilesList';

class SearchResults extends Component {
	render() {
		return (
			<div>
				<ProfilesList topVideoList={this.props.topVideoList} />
			</div>
		);
	}
}

export default SearchResults;
