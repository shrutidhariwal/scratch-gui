import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Box from '../box/box.jsx';


import styles from './ml-modal.css';

const STAGE_WIDTH = 450;
const STAGE_HEIGHT = 250;
const PAD = 10;
const BOTTOM_MARGIN = 20;
const WIDTH = (STAGE_WIDTH - (PAD * 7)) / 6;
const MAX_HEIGHT = STAGE_HEIGHT - BOTTOM_MARGIN;
const HEIGHT = MAX_HEIGHT / 6.0;
const Y = MAX_HEIGHT - HEIGHT + PAD;
const ROUND = 4;


const SetDistribution = props => (

    
    <Box className={styles.body}>
        <Box className={styles.activityArea}>
            <svg id="slider-stage" height={STAGE_HEIGHT + 'px'} width={STAGE_WIDTH + 'px'} onMouseDown={props.onMoveSlider} onMouseMove={props.onStageMouseMove} onMouseUp={props.onStageMouseUp}>
                <rect id="rect0" height={HEIGHT} width={WIDTH} fill="#65CEFF" x={PAD} y={Y} rx={ROUND} ry={ROUND}> </rect>
                <rect id="rect1" height={HEIGHT} width={WIDTH} fill="#65CEFF" x={2 * PAD + WIDTH} y={Y} rx={ROUND} ry={ROUND}> </rect>
                <rect id="rect2" height={HEIGHT} width={WIDTH} fill="#65CEFF" x={3 * PAD + 2 * WIDTH} y={Y} rx={ROUND} ry={ROUND}> </rect>
                <rect id="rect3" height={HEIGHT} width={WIDTH} fill="#65CEFF" x={4 * PAD + 3 * WIDTH} y={Y} rx={ROUND} ry={ROUND}> </rect>
                <rect id="rect4" height={HEIGHT} width={WIDTH} fill="#65CEFF" x={5 * PAD + 4 * WIDTH} y={Y} rx={ROUND} ry={ROUND}> </rect>
                <rect id="rect5" height={HEIGHT} width={WIDTH} fill="#65CEFF" x={6 * PAD + 5 * WIDTH} y={Y} rx={ROUND} ry={ROUND}> </rect>
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
    classifierData: PropTypes.object,
    imageData: PropTypes.object
};

export default SetDistribution;