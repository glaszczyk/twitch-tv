import React from 'react';
import './ParagraphText.scss';

const ParagraphText = props => (
	<p className={props.classNames} >
		{props.children}
	</p>
);

export default ParagraphText;
