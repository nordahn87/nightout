import { useState } from 'react'
import NavigationLinks from './navigation/links'
import Logo from './misc/logo'

const Navigation = () => {

    const [mobileNavigation, setMobileNavigation] = useState(false)

    /* Toggles mobile navigation */
    const toogleMobileNavigation = () => {
        setMobileNavigation(!mobileNavigation)
    }

    /* Closes mobile navigation if browser changes size */
    window.addEventListener("resize", () => {
        if (window.innerWidth > 640) {
            setMobileNavigation(false)
        }
    })

    return (
        <>
            {/* Navigation */}
            <nav className='bg-black fixed flex items-center w-full z-50 py-6 h-[70px]'>
                <div className="flex w-[1366px] mx-auto justify-between items-center px-6">
                    <Logo
                        className="text-white text-xl hover:underline"
                        onClick={() => setMobileNavigation(false)} />
                    <div>

                        <div className="hidden sm:flex gap-8">
                            <NavigationLinks
                                className="text-white text-xl hover:underline"
                            />
                        </div>
                        
                        <button
                            className="sm:hidden flex justify-center items-center"
                            onClick={toogleMobileNavigation}>
                            <i className={(mobileNavigation ? 'la-times' : 'la-bars') + ' las text-2xl text-white'}></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile dropdown */}
            <nav className={(mobileNavigation ? 'top-[70px]' : 'top-[-100vh]') + ' fixed bg-black h-2/4 w-full flex justify-center items-center transition-all z-40'}>
                <div className="flex flex-col gap-6">
                    <NavigationLinks
                        className="text-white text-2xl hover:underline"
                        toogleMobileNavigation={toogleMobileNavigation} />
                </div>
            </nav>
        </>
    )
}

export default Navigation
