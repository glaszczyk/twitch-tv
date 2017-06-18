import React from 'react';
import './Title.scss';

const Title = (props) => {
	const TitleTag = `h${props.level}`;
	const classNames = props.classNames || 'title';
	return (
		<TitleTag
			className={classNames}
		>
			{props.children}
		</TitleTag>
	);
};

export default Title;
