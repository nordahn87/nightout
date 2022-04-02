import { useState, useEffect } from "react";
import NavigationLinks from "./navigation/links";
import Logo from './misc/logo'

const Navigation = () => {

    const [toogleMobileNavigation, setToogleMobileNavigation] = useState(false)

    return (
        <>
            <nav className="main-navigation">
               <Logo />
                <div className="links">
                    <NavigationLinks />
                </div>
                <button onClick={() => setToogleMobileNavigation(!toogleMobileNavigation) }>&#9776;</button>
            </nav>
            <nav className={toogleMobileNavigation ? 'test' : 'hund'}>
                <h2>Burger navigation</h2>
                <NavigationLinks />
            </nav>
        </>
    );
}

export default Navigation;
