import React, { Component } from 'react';
import Image from '../../01_components/Image/Image';
import Title from '../../01_components/Title/Title';
import ParagraphText from '../../01_components/ParagraphText/ParagraphText';

class SingleProfile extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { video } = this.props;
		return (
			<div>
				<Title
					level={'2'}
				>
					{ video.title }
				</Title>
				<Image
					source={video.preview.medium}
					alt={video.game}
				/>
				<ParagraphText><a href={video.url}>{video.url}</a></ParagraphText>
				<Title
					level={'4'}
				>
					{video.channel.display_name}
				</Title>
				<Image
					source={video.channel.logo}
					alt={video.channel.name}
				/>
			</div>
		);
	}
}

export default SingleProfile;
