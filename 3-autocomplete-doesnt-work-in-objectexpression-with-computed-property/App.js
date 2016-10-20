import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './App.less';

type AppProps = {};

class App extends Component {
    props: AppProps;

    render() {
        const className = classnames({
            [styles.aaa]: false,
            // ....
            [styles.root]: this,
        });

        return (
            <div className={className}>
                <h4>App</h4>
            </div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
