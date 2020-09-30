import React  from "react"

export default (props) => {
    return (
        <a className="menu__animation-list-name animate__fadeInRight animate__animated" 
        style={{display:props.menu ? "block":"none"}}
        href={"#"+props.nameid}>
            {props.name}
        </a>
    )
}
//