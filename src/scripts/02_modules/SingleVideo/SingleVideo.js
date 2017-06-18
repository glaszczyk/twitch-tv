import React, { Component } from 'react';
import TwitchTV from '../../Helpers/api';
import Image from '../../01_components/Image/Image';
import Title from '../../01_components/Title/Title';
import ParagraphText from '../../01_components/ParagraphText/ParagraphText';
import ChannelInfo from '../../02_modules/ChannelInfo/ChannelInfo';
import './SingleVideo.scss';

class SingleVideo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			channelInfo: '',
		};
		this.onLoadChannelInfo = this.onLoadChannelInfo.bind(this);
	}
	onLoadChannelInfo(channelId) {
	TwitchTV
		.getChannel(channelId)
		.then((response) => {
			this.setState({
				channelInfo: response.videos,
			});
		});
	}
	render() {
		const { video } = this.props;
		return (
			<div className={'video'}>
				<div className={'video__video-group'}>
					<Image
						classNames={'thumbnail-image thumbnail-image--rectangle'}
						source={video.preview.medium}
						alt={video.game}
					/>
					<div className={'video__title-section'}>
						<Title
							classNames={'video__name title'}
							level={'2'}
						>
							{ video.title }
						</Title>
						<ParagraphText >
							<a href={video.url}>{video.url}</a>
						</ParagraphText>
					</div>
				</div>
				<div className={'video__user-group'}>
					<Title
						classNames={'video__user title'}
						level={'4'}
					>
						{video.channel.display_name}
					</Title>
					<Image
						classNames={'profile-image profile-image--circle'}
						source={video.channel.logo}
						alt={video.channel.name}
					/>
				</div>
				<button onClick={this.onLoadChannelInfo(video.channel._id)}>Info</button>
				<div className="channel-info">
					<ChannelInfo
						channel={this.state.channelInfo}
					/>
				</div>
			</div>
		);
	}
}

export default SingleVideo;
