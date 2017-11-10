import React, { Component } from 'react';
import ReactFlowGenericComponent from "./ReactFlowGenericComponent";
import ReactFlowGenericComponent2 from "./ReactFlowGenericComponent2";


export default class ReactFlowGenericComponent_Playground extends Component {
    render() {
        return (
            <div>
                <ReactFlowGenericComponent a={1} a1={2} a2={2} a3={3} bar={312} foo={312}/>
                <ReactFlowGenericComponent2 />
            </div>
        );
    }
}

ReactFlowGenericComponent_Playground.defaultProps = {};

