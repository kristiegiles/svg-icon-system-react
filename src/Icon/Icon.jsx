import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Icon.css';

let fileList = require.context('./icons', true, /[\s\S]*$/);
let iconMap = {};
fileList.keys().forEach(fileName => {
	fileName = fileName.replace('./', '');
  iconMap[fileName.replace('.svg', '')] = require(`./icons/${fileName}`);
});

export default class Icon extends React.Component {
	render() {
		return (
			<svg className={classnames(`icon icon--${this.props.slug}`, this.props.className)}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				aria-labelledby="title"
				dangerouslySetInnerHTML={{__html: iconMap[this.props.slug]}}/>
		)
	}
}
