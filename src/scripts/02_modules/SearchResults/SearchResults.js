import React, { Component } from 'react';
import ProfilesList from '../ProfilesList/ProfilesList';

class SearchResults extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ProfilesList topVideoList={this.props.topVideoList} />
			</div>
		);
	}
}

export default SearchResults;
