import React from 'react';


type Props = {
    a: string,
    a1: string,
    a2: string,
    a3: string,
    b?: string,
    c?: string,
    foo: string,
    bar: string,
    onClick: (index: number) => string,
}

type State = {
    index: number,
    ss1: number,
    ss2: number,
    ss3: number,
}

export default class ReactFlowGenericComponent extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        // this.state.
    }

    render() {
        // this.state.
        return (
            <div>
                <h4>ReactFlowGenericComponent</h4>
            </div>
        );
    }
}

ReactFlowGenericComponent.defaultProps = {};























