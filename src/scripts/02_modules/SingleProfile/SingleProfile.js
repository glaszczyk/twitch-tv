import React, { Component } from 'react';
import Image from '../../01_components/Image/Image';
import Title from '../../01_components/Title/Title';
import ParagraphText from '../../01_components/ParagraphText/ParagraphText';

class SingleProfile extends Component {
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
				<ParagraphText>Profile status </ParagraphText>
			</div>
		);
	}
}

export default SingleProfile;
