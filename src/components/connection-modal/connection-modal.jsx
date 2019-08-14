import PropTypes from 'prop-types';
import React from 'react';
import keyMirror from 'keymirror';

import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import DiceName from './dice-name.jsx';
import styles from './connection-modal.css';
import SetDistribution from './set-distribution.jsx';

const PHASES = keyMirror({
    diceName: null
});

const ConnectionModalComponent = props => (
    <Modal
        className={styles.modalContent}
        contentLabel={props.name}
        headerClassName={styles.header}
        headerImage={props.connectionSmallIconURL}
        id="connectionModal"
        onHelp={props.onHelp}
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
            {props.phase === PHASES.diceName && <DiceName
                onNameDice={props.onNameDice}
                onCancel={props.onCancel}
            />}
            {props.phase === PHASES.setDistribution && <SetDistribution
                onSetDistribution={props.onSetDistribution}
                onMoveSlider={props.onMoveSlider}
                onCancel={props.onCancel}
            />}
        </Box>
    </Modal>
);

ConnectionModalComponent.propTypes = {
    name: PropTypes.node,
    onCancel: PropTypes.func.isRequired,
    onHelp: PropTypes.func.isRequired,
    phase: PropTypes.oneOf(Object.keys(PHASES)).isRequired,
    title: PropTypes.string.isRequired,
    useAutoScan: PropTypes.bool.isRequired
};

export {
    ConnectionModalComponent as default,
    PHASES
};
