import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Box from '../box/box.jsx';
import styles from './ml-modal.css';

const STAGE_WIDTH = 450;
const STAGE_HEIGHT = 250;
const PAD = 10;
const BOTTOM_MARGIN = 40;
const RIGHT_MARGIN = 40;
const WIDTH = (STAGE_WIDTH - (PAD * 7) - RIGHT_MARGIN) / 6;
const MAX_HEIGHT = STAGE_HEIGHT - BOTTOM_MARGIN;
const HEIGHT = MAX_HEIGHT / 6.0;
const Y = MAX_HEIGHT - HEIGHT + PAD;
const ROUND = 4;
const BUTTON_RADIUS = 10;
const BUTTON_X = STAGE_WIDTH - RIGHT_MARGIN + BUTTON_RADIUS;
const BUTTON_Y = STAGE_HEIGHT - BUTTON_RADIUS;
const MAX_NUM_SLIDERS = 20;

const numRectArray = [];
for (let i = 0; i < MAX_NUM_SLIDERS; i++) {
    numRectArray.push(i);
}


const SetDistribution = props => (
    <Box className={styles.body}>
        <Box className={styles.activityArea}>
            <svg id="slider-stage" height={STAGE_HEIGHT + 'px'} width={STAGE_WIDTH + 'px'} onMouseDown={props.onMoveSlider} onMouseMove={props.onStageMouseMove} onMouseLeave={props.onStageMouseUp} onMouseUp={props.onStageMouseUp} cursor="ns-resize">
                {numRectArray.map(index => (
                    <rect id={"rect" + index} visibility={(index < 6) ? 'visible': 'hidden'} height={(index < 6) ? HEIGHT : 0.0} width={WIDTH} fill="#65CEFF" x={PAD * (index + 1) + WIDTH * index} y={(index < 6) ? Y: MAX_HEIGHT + PAD} rx={ROUND} ry={ROUND}> </rect>
                ))}
                <circle id="add-slider-button" r={BUTTON_RADIUS} cx={BUTTON_X} cy={BUTTON_Y} fill="#65CEFF" onClick={props.onAddSlider}> </circle>
            </svg>
        </Box>
        <Box className={classNames(styles.bottomArea)}>
            <Box className={classNames(styles.bottomAreaItem, styles.buttonRow)}>
                <button onClick={props.onSetDistribution}>Create Dice</button>      
            </Box>
        </Box>
    </Box>
);


SetDistribution.propTypes = {
    onCancel: PropTypes.func,
    onSetDistribution: PropTypes.func,
    onMoveSlider: PropTypes.func,
    onStageMouseMove: PropTypes.func,
    onStageMouseUp: PropTypes.func,
    onAddSlider: PropTypes.func,
    numRects: PropTypes.number,
};

export default SetDistribution;
