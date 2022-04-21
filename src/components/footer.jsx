import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-black flex justify-center h-[200px] p-12">
            <div className="text-white flex flex-col items-center">
                <div className="grid grid-cols-3 gap-8 w-[100px]">
                    <NavLink to="/">
                        <i className="lab la-facebook-f la-4x text-white"></i>
                    </NavLink>
                    <NavLink to="/">
                        <i className="lab la-instagram la-4x text-white"></i>
                    </NavLink>
                </div>
                <p>Copyright &copy; 2022 Nightout</p>
            </div>
        </footer>
    )
}

export default Footer
