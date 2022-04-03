import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import NavigationLinks from './navigation/links'
import Logo from './misc/logo'
import { TwitterIcon, TwitterAltIcon, FacebookIcon, FacebookAltIcon, InstagramIcon, InstagramAltIcon, LocationIcon, MailIcon, PhoneIcon, UserIcon } from './misc/svg'

const Footer = (props) => {
    return (
        <footer className="bg-neutral-300 grid sm:grid-cols-4 gap-4 p-4">
            {/* Logo */}
            <div className="grid place-content-center sm:place-content-start bg-neutral-100">
                <Logo />
            </div>

            {/* Navigation links */}
            <div className="grid gap-1 place-content-center sm:place-content-start bg-neutral-100">
                <NavigationLinks
                    className="bg-neutral-400 text-red-700 hover:text-blue-600" />
            </div>

            {/* Social links */}
            <div className="grid place-content-center sm:place-content-start bg-neutral-100">
                <h3 className="mb-2">Follow us</h3>
                <div className="grid grid-cols-3 gap-8 w-[100px]">
                    <NavLink to="/">
                        <TwitterIcon className="w-[25px]" />
                    </NavLink>
                    <NavLink to="/">
                        <InstagramIcon className="w-[25px]" />
                    </NavLink>
                    <NavLink to="/">
                        <FacebookIcon className="w-[25px]" />
                    </NavLink>
                </div>
                {/* Social alt links */}
                <div className="grid grid-cols-3 gap-8 w-[100px]">
                    <NavLink to="/">
                        <TwitterAltIcon className="w-[30px]" />
                    </NavLink>
                    <NavLink to="/">
                        <InstagramAltIcon className="w-[30px]" />
                    </NavLink>
                    <NavLink to="/">
                        <FacebookAltIcon className="w-[30px]" />
                    </NavLink>
                </div>
            </div>

            {/* Contact info */}
            <div className="grid place-content-center sm:place-content-start bg-neutral-100">
                <h3 className="mb-2">Contact</h3>
                <ul>
                    <li className="flex items-center"><MailIcon className="w-[20px] mr-2" /> demo@mail.com</li>
                    <li className="flex items-center"><PhoneIcon className="w-[20px] mr-2" /> 34 56 97 80</li>
                    <li className="flex items-center"><UserIcon className="w-[20px] mr-2" /> Anders demogaard</li>
                    <li className="flex items-center"><LocationIcon className="w-[20px] mr-2" /> Meldersvej 7500</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
