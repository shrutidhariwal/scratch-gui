import classNames from 'classnames';
import { defineMessages, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import styles from './makedice.css';


const DiceName = props => (
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
                    defaultValue={props.defaultValue}
                    id="diceNameInput"
                    name={'New dice name:'}
                    onChange={props.onChange}
                    onFocus={props.onFocus}
                    onKeyPress={props.onKeyPress}
                />
            </Box>

            <Box className={styles.label}>
                {'Set dice type:'}
            </Box>
            <Box>
                <select id ="diceTypeInput" className={styles.selectTypeInput}>
                    <option value="number">{'Number'}</option>
                    <option value="text">{'Text'}</option>
                    <option value="costume">{'Costume'}</option>
                    <option value="sound">{'Sound'}</option>
                    <option value="range">{'Range'}</option>
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
);

DiceName.propTypes = {
    defaultValue: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    onNameDice: PropTypes.func.isRequired,
};

export default DiceName;
