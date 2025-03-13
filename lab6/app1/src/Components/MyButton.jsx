import React, {useState} from 'react'

const MyButton=()=>{
    return(
        <div>
            <button onClick={props.functionHandler}>
                count is {props.value}
            </button>
        </div>
    )
}

export default MyButton