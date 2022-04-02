import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const LinkItem = (props) => {

    return (
        <NavLink
            onClick={props.toogleMobileNavigation}
            to={props.path} >
            {props.title}
        </NavLink>

    )
}

export default LinkItem
