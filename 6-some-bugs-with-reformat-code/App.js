import React, { Component } from 'react';

function someHandler(a, b) {
    return { a, b };
}

class Btn extends Comment {
    props: {
        color: Object,
        onClick: Function,
    };

    render() {
        console.log('color', this.props.color);
        return (
            <button onClick={this.props.onClick}>Go!</button>
        );
    }
}

export default class App extends Comment {
    render() {
        return (
            <div>
                <div>
                    <Btn
                        onClick={e =>
    someHandler('sadas', {

        dsa: {



                                dsad: '',
                            }
                                                                                                        }
)
                        }
                        color={{
    dsad: '123',
dsadas: '123',
                        }}
                    />
                </div>
            </div>
        );
    }

}
