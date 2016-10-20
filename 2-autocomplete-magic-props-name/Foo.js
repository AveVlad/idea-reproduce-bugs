import React, { Component } from 'react';


class Foo extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h4>Foo</h4>
            </div>
        );
    }
}

Foo.propTypes = {
    a1: React.PropTypes.string,
    open: React.PropTypes.string,
    name: React.PropTypes.string,
    users: React.PropTypes.string,
};

export default Foo;
