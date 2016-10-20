import React, { Component } from 'react';

type FontProps = {
    foo: string,
    bar: string,
};

class Font extends Component {
    props: FontProps;

    render() {
        return (
            <div className={styles.root}>
                <h4>Font</h4>
            </div>
        );
    }
}

/**
 * work
 * @type {XML}
 */
const aa = <Font foo="aa" bar="11"/>;

export default Font;
