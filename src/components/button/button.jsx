import React from 'react'

export default function Button({classes, on, content, boolean, iconClass}){

    return(
        <>
            <button type="button" className={"button "+classes} onClick={()=>on(boolean)}>{content}<i className={iconClass}></i></button>
        </>
    )
}
