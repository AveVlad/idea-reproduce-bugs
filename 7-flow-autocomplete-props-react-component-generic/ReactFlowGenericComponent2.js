import React from 'react';


type Props = {
    alex: string,
    tab: string,
    onSubmit: (index: number) => string,
}

type State = {
    activeTab: number,
}

export default class ReactFlowGenericComponent2 extends React.Component<Props, State> {

    constructor(props) {
        super(props);
    }

    render() {
        this.props.
        return (
            <div>
                <h4>ReactFlowGenericComponent</h4>
            </div>
        );
    }
}

ReactFlowGenericComponent2.defaultProps = {};

