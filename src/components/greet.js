import React from "react";

const greet= (props)=>{
    return (
        <div>
            <h1>Hello {props.name} aka {props.nickName}! this is a function component</h1>
            {props.children}
        </div>
    )
}

export default greet;