import React from 'react';
import './Title.scss';

const Title = (props) => {
	const TitleTag = `h${props.level}`;
	return (
		<TitleTag
			className={props.classNames}
		>
			{props.children}
		</TitleTag>
	);
};

export default Title;
