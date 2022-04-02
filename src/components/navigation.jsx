import { useState, useEffect } from 'react'
import NavigationLinks from './navigation/links'
import Logo from './misc/logo'
import { BurgerIcon, CloseIcon } from './misc/svg'

const Navigation = () => {

    const [mobileNavigation, setMobileNavigation] = useState(false)

    const toogleMobileNavigation = () => {
        setMobileNavigation(!mobileNavigation)
    }

    return (
        <>
            <nav className='bg-neutral-300 fixed flex w-full justify-between items-center p-4 z-50'>
                <Logo onClick={() => setMobileNavigation(false)} />
                <div>
                    <div className="bg-neutral-100 hidden sm:flex gap-8">
                        <NavigationLinks
                            className="text-red-700 hover:text-blue-600"
                        />
                    </div>
                    <button
                        className="sm:hidden flex justify-center items-center"
                        onClick={toogleMobileNavigation}>
                        {mobileNavigation ? <CloseIcon className="w-[25px]" /> : <BurgerIcon className="w-[25px]" />}
                    </button>
                </div>
            </nav>
            <nav className={(mobileNavigation ? 'top-0' : 'top-[-100vh]') + ' fixed bg-neutral-400 h-screen w-full flex justify-center items-center transition-all'}>
                <div className="bg-neutral-100 flex flex-col gap-4">
                    <NavigationLinks
                        className="text-red-700 hover:text-blue-600"
                        toogleMobileNavigation={toogleMobileNavigation} />
                </div>
            </nav>
        </>
    )
}

export default Navigation
