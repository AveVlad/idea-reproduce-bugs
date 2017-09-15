import React from 'react';


type Props = {
    foo: string,
    bar: string,
    onClick: (index: number) => string,
}

type State = {
    index: number,
}

export default class ReactFlowGenericComponent extends React.Component<Props, State> {
    render() {
        // this.state
        // this.props.
        return (
            <div>
                <h4>ReactFlowGenericComponent</h4>
            </div>
        );
    }
}

ReactFlowGenericComponent.defaultProps = {};

