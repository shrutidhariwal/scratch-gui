import PropTypes from 'prop-types';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import styles from './makedice.css';


const DiceModalComponent = props => {
    return (
        <Modal
            className={styles.modalContent}
            contentLabel={'New Dice'}
            onRequestClose={props.onCancel}
        >
            <Box className={styles.body}>
                <Box className={styles.label}>
                    {'New dice name:'}
                </Box>
                <Box>
                    <input
                        autoFocus
                        className={styles.variableNameTextInput}
                        id="diceNameInput"
                        name={'New dice name:'}
                        onFocus={props.onFocus}
                        onKeyPress={props.onKeyPress}
                    />
                    {' -dice'}
                </Box>
                <Box className={styles.label}>
                    {'Set dice type:'}
                </Box>
                <Box>
                    <select id="diceTypeInput" className={styles.selectTypeInput}>
                        <option value="number">{'Number'}</option>
                        <option value="text">{'Text'}</option>
                        <option value="costume">{'Costume'}</option>
                        <option value="sound">{'Sound'}</option>
                        <option value="range">{'Range (e.g. 0to20, 21to40...)'}</option>
                    </select>
                </Box>
                <Box className={styles.buttonRow}>
                    <button
                        className={styles.cancelButton}
                        onClick={props.onCancel}
                    >
                        <FormattedMessage
                            defaultMessage="Cancel"
                            description="Button in prompt for cancelling the dialog"
                            id="gui.prompt.cancel"
                        />
                    </button>
                    <button
                        type="submit"
                        className={styles.okButton}
                        onClick={props.onNameDice}
                    >
                        <FormattedMessage
                            defaultMessage="OK"
                            description="Button in prompt for confirming the dialog"
                            id="gui.prompt.ok"
                        />
                    </button>
                </Box>
            </Box>
        </Modal>
    )
};

DiceModalComponent.propTypes = {
    name: PropTypes.node,
    onCancel: PropTypes.func.isRequired,
};

export {
    DiceModalComponent as default
};
