//MInggu 8

import React, { useEffect } from 'react';
let renderCount = 0;

const ComponentSatu = (props) => {

    useEffect( () => {
       renderCount++; 
    });

    return (
        <div>
            <h1>
                ComponentSatu : render {renderCount} times || counter : {props.count}
            </h1>
        </div>
    )
}

export default ComponentSatu;