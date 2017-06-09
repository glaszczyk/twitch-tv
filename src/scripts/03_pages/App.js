import React from 'react';

import Header from '../02_modules/Header/Header';
import SearchResults from '../02_modules/SearchResults/SearchResults';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div>
				<Header />
				<SearchResults />
			</div>
		);
	}
}

export default App;
