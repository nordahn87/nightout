import { useState, useEffect } from 'react'
import NavigationLinks from './navigation/links'
import Logo from './misc/logo'

const Navigation = () => {

    const [mobileNavigation, setMobileNavigation] = useState(false)

    const toogleMobileNavigation = () => {
        setMobileNavigation(!mobileNavigation)
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 640) {
            setMobileNavigation(false)
        }
    })

    return (
        <>
            <nav 
                className='bg-black fixed flex w-full justify-between items-center p-6 z-50'>
                <Logo 
                    className="text-white"
                    onClick={() => setMobileNavigation(false)} />
                <div>
                    <div className="hidden sm:flex gap-8">
                        <NavigationLinks
                            className="text-white hover:underline"
                        />
                    </div>
                    <button
                        className="sm:hidden flex justify-center items-center"
                        onClick={toogleMobileNavigation}>
                        <i className={(mobileNavigation ? 'la-times' : 'la-bars') + ' las la-lg text-white'}></i>
                    </button>
                </div> 
            </nav>

            {/* Mobile dropdown */}
            <nav className={(mobileNavigation ? 'top-0' : 'top-[-100vh]') + ' fixed bg-black h-screen w-full flex justify-center items-center transition-all'}>
                <div className="flex flex-col gap-4">
                    <NavigationLinks
                        className="text-white text-lg hover:underline"
                        toogleMobileNavigation={toogleMobileNavigation} />
                </div>
            </nav>
        </>
    )
}

export default Navigation
