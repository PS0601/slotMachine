import React from "react";


function Slot(props) {
    let x = props.x
    let y = props.y
    let z = props.z

    if ((x === y) && (y === z)) {
        return (
            <div className="displaySlot">
                <h1>
                    {x}   {y}   {z}
                </h1>
                <h1>This is matching</h1>
                <hr />
            </div>
        )
    }
    else {
        return (
            <div className="displaySlot">
                <h1>
                    {x}   {y}   {z}
                </h1>
                <h1>This is not matching</h1>
                <hr />
            </div>
        )
    }

}
export default Slot;