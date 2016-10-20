import React, { Component } from 'react';
import Font from './Font';

type AppProps = {};

class App extends Component {
    props: AppProps;

    render() {
        return (
            <div>
                {/*not_work*/}
                <Font  />
            </div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
