import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const Logo = (props) => {

    return (
        <NavLink
            onClick={props.onClick}
            to="/">
            <p className={props.className}>Nightout</p> 
        </NavLink>
    );
}

export default Logo