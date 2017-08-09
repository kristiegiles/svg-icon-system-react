import React from 'react';
import classnames from 'classnames';
import './Icon.css';

let fileList = require.context('./icons', true, /[\s\S]*$/);
let iconMap = {};
fileList.keys().forEach(fileName => {
	fileName = fileName.replace('./', '');
	iconMap[fileName.replace('.svg', '')] = require(`./icons/${fileName}`);
});

const Icon = props => {
	return (
		<svg className={classnames(`icon icon--${props.slug}`, props.className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			dangerouslySetInnerHTML={{__html: iconMap[props.slug]}}/>
	)
}

export default Icon