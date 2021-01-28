import React from 'react'

export default function Button({classes, on, content, boolean}){
    return(
        <>
            <button type="button" className={"button "+classes} onClick={()=>on(boolean)}>{content}</button>
        </>
    )
}
