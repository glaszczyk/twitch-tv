import React from 'react';
import './Image.scss';

const Image = props => (
	<img className={props.classNames}
		src={props.source}
		alt={props.alt}
	/>
);

export default Image;
