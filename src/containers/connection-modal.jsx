import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import ConnectionModalComponent, {PHASES} from '../components/connection-modal/connection-modal.jsx';
import VM from 'scratch-vm';
import analytics from '../lib/analytics';
import extensionData from '../lib/libraries/extensions/index.jsx';
import {connect} from 'react-redux';
import {closeConnectionModal} from '../reducers/modals';

class ConnectionModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleHelp',
            'handleNameDice',
            'handleCancel',
            'handleSetDistribution'
        ]);
        this.state = {
            extension: extensionData.find(ext => ext.extensionId === props.extensionId),
            phase: PHASES.diceName
        };
    }
    
    
    handleHelp () {
        window.open(this.state.extension.helpLink, '_blank');
        analytics.event({
            category: 'extensions',
            action: 'help',
            label: this.props.extensionId
        });
    }

    handleCancel () {
        try {
            // If we're not connected to a peripheral, close the websocket so we stop scanning.
            if (!this.props.vm.getPeripheralIsConnected(this.props.extensionId)) {
                this.props.vm.disconnectPeripheral(this.props.extensionId);
            }
        } finally {
            // Close the modal.
            this.props.onCancel();
        }
    }

    handleNameDice () {
        const diceName = document.getElementById('diceNameInput').value;
        this.props.vm.runtime.emit('NAME_DICE', diceName);
        this.setState({
            phase: PHASES.setDistribution
        });
    }

    handleSetDistribution () {
        console.log('GET YEETED');
    }

    render () {
        return (
            <ConnectionModalComponent
                
                extensionId={this.props.extensionId}
                name={this.state.extension && this.state.extension.name}
                phase={this.state.phase}
                title={this.props.extensionId}
                vm={this.props.vm}
                onCancel={this.handleCancel}
                onHelp={this.handleHelp}
                onNameDice={this.handleNameDice}
                onSetDistribution={this.handleSetDistribution}

            />
        );
    }
}

ConnectionModal.propTypes = {
    extensionId: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

const mapStateToProps = state => ({
    extensionId: state.scratchGui.connectionModal.extensionId
});

const mapDispatchToProps = dispatch => ({
    onCancel: () => {
        dispatch(closeConnectionModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectionModal);
