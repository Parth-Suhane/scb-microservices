import React, { Component } from 'react';

class Greet extends Component {


    render() {
      

        return (
            <div>
                <div className="card">
                    <div className="card-header bg-primary">Greet Component</div>
                    <div className="card-body">
                        <h1>Greet Component</h1> <hr />
                        <h2> {this.props.title}</h2>
                    </div>

                </div>

            </div>
        );
    }
}

export default Greet;