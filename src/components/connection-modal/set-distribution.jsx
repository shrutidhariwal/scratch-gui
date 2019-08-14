import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Box from '../box/box.jsx';


import styles from './ml-modal.css';

const SetDistribution = props => (
    <Box className={styles.body}>
        <Box className={styles.activityArea}>
            <svg class="svg-stage">
                <rect x="124px" y="53.609375" width="18" height="91.390625" rx="4" ry="4" fill="#65CEFF"></rect>
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
    classifierData: PropTypes.object,
    imageData: PropTypes.object
};

export default SetDistribution;