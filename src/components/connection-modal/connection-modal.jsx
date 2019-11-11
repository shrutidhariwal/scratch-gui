import PropTypes from 'prop-types';
import React from 'react';
import keyMirror from 'keymirror';

import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import DiceName from './dice-name.jsx';
import styles from './connection-modal.css';

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
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
            {props.phase === PHASES.diceName && <DiceName
                onNameDice={props.onNameDice}
                onCancel={props.onCancel}
            />}
        </Box>
    </Modal>
);

ConnectionModalComponent.propTypes = {
    name: PropTypes.node,
    onCancel: PropTypes.func.isRequired,
    phase: PropTypes.oneOf(Object.keys(PHASES)).isRequired,
    title: PropTypes.string.isRequired,
    useAutoScan: PropTypes.bool.isRequired
};

export {
    ConnectionModalComponent as default,
    PHASES
};
