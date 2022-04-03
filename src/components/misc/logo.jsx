import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { BrandLogo } from './svg'

const Logo = (props) => {

    return (
        <NavLink
            onClick={props.onClick}
            to="/">
            <BrandLogo className="w-[35px]" fill="gray" />
        </NavLink>
    );
}

export default Logo