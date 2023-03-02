import { useState } from "react";

const enumCounterName = {
    0: { name: "No deaths", url: "" },
    1: { name: "First Blood", url: "https://www.101soundboards.com/sounds/473147-first-blood" },
    2: { name: "Double Kill", url: "https://www.101soundboards.com/sounds/473102-double-kill" },
    3: { name: "Triple Kill", url: "https://www.101soundboards.com/sounds/473131-triple-kill" },
    4: { name: "Quadra Kill", url: "https://www.101soundboards.com/sounds/473128-quadra-kill" },
    5: { name: "Penta Kill", url: "https://www.101soundboards.com/sounds/473124-pentakill" },
};

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounterHandler = () => {
        setCounter((oldCounter) => oldCounter + 1);
    };

    const decrementCounterHandler = () => {
        setCounter((oldCounter) => oldCounter - 1);
    };

    const clearCounterHandler = () => {
        setCounter(0)
    };

    if(counter > 5 || counter < 0){
        setCounter(0);
    }

    return (
        <div>
            <h1>DEMO</h1>
            <h3>
                Death Counter: {counter}
                <p> Announcer : {enumCounterName[counter]?.name}</p>
            </h3>
            <button onClick={incrementCounterHandler}>+</button>
            <button onClick={clearCounterHandler}>0</button>
            <button onClick={decrementCounterHandler}>-</button>
        </div>
    );
};

export default Counter;
