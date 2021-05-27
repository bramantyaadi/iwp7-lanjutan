//MInggu 8

import React, { useEffect } from 'react';
let renderCount = 0;

const ComponentSatu = () => {

    useEffect( () => {
       renderCount++; 
    });

    return (
        <div>
            <h1>
                ComponentSatu : render {renderCount}
            </h1>
        </div>
    )
}

export default ComponentSatu;