import React, { Component } from 'react';

class Greet extends Component {

    constructor() {
        super();
        this.state = {
            isClicked: false
        }
    }

    f1() {
        console.log('---> f1 function');

        this.setState({isClicked: true});
    }

    f2() {
        console.log('---> f1 function');

        this.setState({isClicked: false});
    }

    render() {
        let { isClicked } = this.state;

        console.log(isClicked);
        return (

            <div>
                <div className="card">
                    <div className="card-header">Greet</div>
                    <div className="card-body">
                        <h1>Greet</h1>
                        <hr />
                        
                        <button
                            onClick={e => this.f1(e)}
                            className="btn btn-primary">
                                Hide
                            </button>
                            <button
                            onClick={e => this.f2(e)}
                            className="btn btn-primary">
                                Show
                            </button>
                    </div>



                </div>

                <div hidden={isClicked} className="card body mt-3">
                    <h2>Hello</h2>
                </div>
            </div>
        );
    }
}

export default Greet;