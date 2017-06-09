import React, { Component } from 'react';
import Image from '../../01_components/Image/Image';
import Title from '../../01_components/Title/Title';
import ParagraphText from '../../01_components/ParagraphText/ParagraphText';

class SingleProfile extends Component {
	render() {
		return (
			<div>
				<Title
					level={'2'}
				>
					First person profile
				</Title>
				<Image
					source={'http://www.hexatar.com/gallery/thumb/160318_061405_m5e48ca2281_avatar.png'}
					alt={'This is alt'}
				/>
				<ParagraphText>Profile status </ParagraphText>
				<Image
					source={'http://www.hexatar.com/gallery/thumb/160318_061405_m5e48ca2281_avatar.png'}
					alt={'This is second image'}
				/>
			</div>
		);
	}
}

export default SingleProfile;
