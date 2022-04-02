import { useState, useEffect } from "react";
import NavigationLinks from "./navigation/links";
import Logo from './misc/logo'

const Footer = (props) => {
    return (
        <>
            <div className="footer">
                <h2>Footer</h2>
                <Logo />
                <NavigationLinks />
            </div>
        </>
    );
}

export default Footer;