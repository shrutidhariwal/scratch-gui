import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Box from '../box/box.jsx';


import styles from './ml-modal.css';

const DiceName = props => (
    <Box className={styles.body}>
        <Box className={styles.activityArea}>
            Name of Dice:  
            <input type="text" className="input-field" id="diceNameInput">
            </input>
        </Box>
        <Box className={classNames(styles.bottomArea)}>
            <Box className={classNames(styles.bottomAreaItem, styles.buttonRow)}>
                <button onClick={props.onNameDice}>Next</button>      
            </Box>
        </Box>
    </Box>
);

DiceName.propTypes = {
    onAddLabel: PropTypes.func,
    onCancel: PropTypes.func,
    onClearAll: PropTypes.func,
    onDeleteLabel: PropTypes.func,
    onEditLabel: PropTypes.func,
    classifierData: PropTypes.object,
    imageData: PropTypes.object
};

export default DiceName;