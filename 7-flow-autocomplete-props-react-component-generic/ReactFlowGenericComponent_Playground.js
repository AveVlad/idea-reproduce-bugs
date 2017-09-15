import React, { Component } from 'react';
import ReactFlowGenericComponent from "./ReactFlowGenericComponent";
import ReactFlowGenericComponent2 from "./ReactFlowGenericComponent2";


export default class ReactFlowGenericComponent_Playground extends Component {
    render() {
        return (
            <div>
                <ReactFlowGenericComponent  />
                <ReactFlowGenericComponent2 />
            </div>
        );
    }
}

ReactFlowGenericComponent_Playground.defaultProps = {};

