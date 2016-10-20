import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Foo from './Foo';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.aaa = 'aaa';
    }

    render() {
        return (
            <div>
                <div>
                    {/*{this...}*/}
                    <Dialog open={this}>2</Dialog>
                </div>
                <Foo open={this.aaa} name={this.aaa}>123</Foo>
            </div>
        );
    }
}

export default App;
