import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getGradientPreview } from '../src/lib';
import { GradientPicker } from '../src';

const UseCase = ({ floatingPicker, palette, ColorPicker, angle = 90, link, title }) => {
	const [localPalette, setLocalPalette] = useState(palette);

	const { background } = getGradientPreview(localPalette, angle);

	const info = JSON.stringify(localPalette);

	return (
		<div className="use-case-content">
			<div className="inner">
				<div className="title">
					With&nbsp;
					<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
				</div>
				<div className="result">{ info } </div>
				<GradientPicker {...{
					width: 320,
					paletteHeight: 32,
					palette: localPalette,
					onPaletteChange: setLocalPalette,
					floatingPicker: floatingPicker
				}}>
					{ ColorPicker ? <ColorPicker/> : null }
				</GradientPicker>
				<hr/>
				<h4>Background preview for {angle} Angle</h4>
				<div className="preview" style={{ background }}/>
			</div>
		</div>
	);
};

UseCase.propTypes = {
	palette: PropTypes.array,
	ColorPicker: PropTypes.any,
	link: PropTypes.string,
	title: PropTypes.string,
	floatingPicker: PropTypes.bool,
	angle: PropTypes.number
};

export default UseCase;
