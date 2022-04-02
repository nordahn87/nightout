import { useState, useEffect } from 'react'
import NavigationLinks from './navigation/links'
import Logo from './misc/logo'

const Navigation = () => {

    const [mobileNavigation, setMobileNavigation] = useState(false)

    const toogleMobileNavigation = () => {
        setMobileNavigation(!mobileNavigation)
    }

    return (
        <>
            <nav className='main-navigation'>
                <Logo onClick={() => setMobileNavigation(false)} />
                <NavigationLinks />
                <button onClick={toogleMobileNavigation}>&#9776;</button>
            </nav>
            <nav className={(mobileNavigation ? 'show' : 'hide') + ' menu'}>
                <h2>Burger navigation</h2>
                <NavigationLinks
                    toogleMobileNavigation={toogleMobileNavigation} />
            </nav>
        </>
    )
}

export default Navigation
