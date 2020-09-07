import React, { useState } from 'react';

const Greet = () => {

    const [count, setCount] = useState(100)
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div>


            <div hidden={isClicked}>
                <h1> {count}</h1>
            </div>

            <button
                style={{ margin: "5px" }}
                className="btn btn-primary"
                onClick={e => { setCount(count + 1) }}
            >+</button>
            <button
                className="btn btn-primary"
                onClick={e => setCount(count - 1)}
            >-</button>

            <div>
                <button className="btn btn-primary"
                    onClick={e => { setIsClicked(true) }}
                >Hide</button>
                <button className="btn btn-primary"
                    onClick={e => { setIsClicked(false) }}
                >Show</button>

                <button className="btn btn-primary"
                    onClick={e => { setIsClicked(!isClicked) }}
                >Show/Hide</button>

            </div>
        </div>


    );
};

export default Greet;