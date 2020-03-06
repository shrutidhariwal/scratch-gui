import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import DiceModalComponent from '../components/dice-modal/dice-modal.jsx';
import VM from 'scratch-vm';
import { connect } from 'react-redux';
import { closeDiceModal } from '../reducers/modals';

class DiceModal extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleNameDice',
            'handleCancel',
            'handleKeyPress',
        ]);
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') this.handleNameDice();
    }

    handleCancel() {
        this.props.onCancel();
    }

    handleNameDice() {
        const diceName = document.getElementById('diceNameInput').value;
        const diceType = document.getElementById('diceTypeInput').value;
        const diceNameAndType = [diceName, diceType];
        if (diceName !== '') {
            const diceExists = this.props.vm.runtime.dice.findIndex(item => item.diceName === diceName);
            if (diceExists === -1) {
                this.props.vm.runtime.emit('NAME_DICE', diceNameAndType);
                this.props.onCancel();
            }
            else {
                alert(`A dice named "${diceName}" already exists.`);
                this.props.onCancel();
            }
        }
        else {
            this.props.onCancel();
        }
    }

    render() {
        return (
            <DiceModalComponent
                vm={this.props.vm}
                onCancel={this.handleCancel}
                onNameDice={this.handleNameDice}
                onKeyPress={this.handleKeyPress}
            />
        );
    }
}

DiceModal.propTypes = {
    onCancel: PropTypes.func.isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    onCancel: () => {
        dispatch(closeDiceModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiceModal);
