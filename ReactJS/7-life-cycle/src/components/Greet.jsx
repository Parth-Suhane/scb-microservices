import React, { Component } from 'react';

class Greet extends Component {

    constructor(){
        super();
        console.log("==> Greet :: constructor");
        this.state={ name:'Praveen'}
        
    }

     f1(){
       
         console.log("==> f1 function:: Greet :: ");
         // re-rerenders
         this.setState({name:'James'})
    }


    componentDidMount(){
        console.log("==> Greet :: componentDidMount");
        //this.setState({name:'Abc'})

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("==> Greet :: componentDidUpdate");
       
    }

    componentWillUnmount(){
        console.log("==> Greet :: componentWillUnmount");
    }



    render() {
        console.log("==> Greet:: render");
        return (
            <div>
                    <h1>Greet Component - {this.state.name}</h1>
                    <button onClick={e=>{this.f1()}}>Click Me</button>
            </div>
        );
    }
}

export default Greet;