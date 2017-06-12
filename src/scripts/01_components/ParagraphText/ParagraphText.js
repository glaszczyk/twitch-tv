import React from 'react';
import './ParagraphText.scss';

const ParagraphText = (props) => {
	const classNames = props.classNames || 'paragraph';
	return (
		<p className={classNames} >
			{props.children}
		</p>
	);
};

export default ParagraphText;
