//MInggu 8

import React, { useEffect } from 'react';
let renderCount = 0;

const ComponentDua = (props) => {

    useEffect( () => {
       renderCount++; 
    });

    return (
        <div>
            <h1>
                ComponentDua : render {renderCount} times || counter : {props.count}
            </h1>
        </div>
    )
}

export default ComponentDua;