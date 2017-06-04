import React from 'react';

const Title = (props) => {
	const TitleTag = `h${props.level}`;
	return (
		<TitleTag>
			{props.children}
		</TitleTag>
	);
};

export default Title;
