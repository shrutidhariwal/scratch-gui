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
            'handleSetDistribution',
            'handleMoveSlider',
            'handleStageMouseMove',
            'handleStageMouseUp',
            'handleAddSlider'
        ]);
        this.state = {
            extension: extensionData.find(ext => ext.extensionId === props.extensionId),
            phase: PHASES.diceName
        };
        this.isMouseDown = false;
        this.currentSlider = null;

       
        this.STAGE_HEIGHT = 250;
        this.PAD = 10;
        this.BOTTOM_MARGIN = 40;
        this.MAX_HEIGHT = this.STAGE_HEIGHT - this.BOTTOM_MARGIN;
        this.Y = this.MAX_HEIGHT + this.PAD;
        this.numRects = 6;

        this.STAGE_WIDTH = 450;
        this.RIGHT_MARGIN = 40;
        this.ROUND = 4;
        this.MAX_NUM_SLIDERS = 20;
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
        const sliders = [];
        const sliderHeights = [];
        const result = [];
        for (let i = 0; i < this.numRects; i++) {
            sliders.push(document.getElementById('rect' + i));
            sliderHeights.push(parseFloat(sliders[i].getAttribute('height')));
            result.push(sliderHeights[i] / this.MAX_HEIGHT * 100.0);
        }
        console.log(result.toString());
        this.props.vm.runtime.emit('SET_DISTRIBUTION', result.toString());
        this.props.onCancel();
    }

    handleMoveSlider (e) {
        const sliderStage = document.getElementById('slider-stage');
        const bBox = sliderStage.getBoundingClientRect();
        const mouseX = e.clientX - bBox.left;
        const mouseY = e.clientY - bBox.top;
        const sliderNumber = this._detectSlider(mouseX);
        if (sliderNumber < 0 || sliderNumber >= this.numRects) {return;}
        this.currentSlider = sliderNumber;
        this.isMouseDown = true;
        const newHeight = this.Y - mouseY;
        this._setSliderNode(sliderNumber, newHeight);
    }

    handleStageMouseMove (e) {
        if (this.isMouseDown) {
            const sliderStage = document.getElementById('slider-stage');
            const bBox = sliderStage.getBoundingClientRect();
            const mouseY = e.clientY - bBox.top;
            const newHeight = this.Y - mouseY;
            this._setSliderNode(this.currentSlider, newHeight);
        }
    }

    handleStageMouseUp () {
        this.currentSlider = null;
        this.isMouseDown = false;
    }

    handleAddSlider () {
        if (this.numRects === this.MAX_NUM_SLIDERS) {return;}
        const sliders = [];
        const sliderHeights = [];

        for (let i = 0; i < (this.numRects + 1); i++) {
            sliders.push(document.getElementById('rect' + i));
            sliderHeights.push(parseFloat(sliders[i].getAttribute('height')));
        }

        let newWidth = (this.STAGE_WIDTH - (this.PAD * (this.numRects + 2)) - this.RIGHT_MARGIN) / (this.numRects + 1);

        // Squish the sliders so they fit in a narrower space to make room for the incoming slider.
        for (let i = 0; i < (this.numRects + 1); i++) {
            sliders[i].setAttribute('width', newWidth);
            sliders[i].setAttribute('x', (this.PAD * (i + 1)) + (newWidth * i));
        }
        sliders[this.numRects].setAttribute('visibility', 'visible');
        
        this.numRects++;
        this._setSliderNode(this.numRects - 1, 20);
        
        
    }

    _setSliderNode (sliderIndex, newHeight) {
        const sliders = [];
        const sliderHeights = [];
        for (let i = 0; i < this.numRects; i++) {
            sliders.push(document.getElementById('rect' + i));
            sliderHeights.push(parseFloat(sliders[i].getAttribute('height')));
        }

        const numSliders = this.numRects;

        if (sliderIndex < 0 || sliderIndex > numSliders) return;
        if (newHeight < 0) {
            newHeight = 0;
        }
        const heightDiff = sliderHeights[sliderIndex] - newHeight;
        let sumOfRest = 0;
        for (let i = 0; i < numSliders; i++) {
            if (i !== sliderIndex) {
                sumOfRest += sliderHeights[i];
            }
        }
        for (let i = 0; i < numSliders; i++) {
            if (i !== sliderIndex) {
                if (sumOfRest === 0) {
                    sliderHeights[i] = sliderHeights[i] + heightDiff / (numSliders - 1);
                } else {
                    sliderHeights[i] = sliderHeights[i] + (heightDiff * sliderHeights[i] / sumOfRest);
                    if (sliderHeights[i] < 0) {
                        sliderHeights[i] = 0;
                    }
                }
            }
        }
        sliderHeights[sliderIndex] = newHeight;

        for (let i = 0; i < this.numRects; i++) {
            sliders[i].setAttribute('height', sliderHeights[i]);
            sliders[i].setAttribute('y', this.Y - sliderHeights[i]);
        }

    }

    _detectSlider (mouseX) {
        const nodeSize = parseFloat(document.getElementById('rect0').getAttribute('width'));
        const nodePad = parseFloat(document.getElementById('rect1').getAttribute('x') - document.getElementById('rect0').getAttribute('x') - nodeSize);
        return Math.trunc(mouseX / (nodeSize + nodePad));
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
                onMoveSlider={this.handleMoveSlider}
                onStageMouseMove={this.handleStageMouseMove}
                onStageMouseUp={this.handleStageMouseUp}
                onAddSlider={this.handleAddSlider}
                numRects={this.numRects}

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
