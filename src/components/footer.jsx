import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-black flex justify-center h-[200px] p-12">
            <div className="text-white flex flex-col items-center">
                <div className="grid grid-cols-2 w-[100px] mb-4">

                    {/* Facebook icon */}
                    <div className="flex justify-center items-center">
                        <NavLink to="/">
                            <i className="lab la-facebook-f text-5xl text-white"></i>
                        </NavLink>
                    </div>

                    {/* Instagram icon */}
                    <div className="flex justify-center items-center">
                        <NavLink to="/">
                            <i className="lab la-instagram text-6xl text-white"></i>
                        </NavLink>
                    </div>
                </div>

                {/* Copyright */}
                <p>Copyright &copy; 2022 Nightout</p>
            </div>
        </footer>
    )
}

export default Footer
