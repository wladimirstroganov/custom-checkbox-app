import React, { Component } from 'react';
import "./custom-checkbox.css";

/**
 * Custom checkbox component
 */
export default class CustomCheckbox extends Component {
    /**
     * @constructor
     * @param props {object} {checked[optional]: boolean, disabled[optional]: boolean}
     */
    constructor(props) {
        console.log(props);

        super(props);

        this.clickManager = this.clickManager.bind(this);

        /**
         * Make sure that if checked/disabled property is set in props, it is cast to boolean
         * Otherwise, if property not set, use default value - false
         */
        this.state = {
            checked: props.hasOwnProperty("checked") ? !!props.checked : false,
            disabled: props.hasOwnProperty("disabled") ? !!props.disabled : false
        }
    }

    clickManager(event) {
        this.setState({checked: !this.state.checked});
    }

    render() {
        let className = "custom-checkbox"; // list of composed classes
        let listener = this.state.disabled ? null : this.clickManager; // no need for a listener when disabled

        if(this.state.checked) className = className.concat(" checked");

        if(this.state.disabled) className = className.concat(" disabled");

        return (
            <div className={className} onClick={listener}></div>
        );
    }
}