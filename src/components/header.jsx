import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [isPlaying, setIsPlaying] = useState(true)

    const handlePlayPause = () => {
        const video = document.querySelector('#main-vid');

        if (isPlaying === false) {
            video.play();
        } else {
            video.pause();
        }
        setIsPlaying(!isPlaying)
    }

    return ( 
        <header className="relative mb-16 max-w-[1366px] mx-auto">
            <div className="absolute grid grid-cols-2 w-full h-full p-6 z-10">
                <div className="flex items-center ">
                    <div>

                        {/* Headings*/}
                        <h1 className="text-white text-4xl font-bold mb-4">Nightout</h1>
                        <h2 className="text-white text-2xl font-bold mb-4">En fest for alle</h2>

                        {/* Read more button */}
                        <div className="flex gap-4">
                            <button className="border border-white bg-white w-full w-[110px] xs:w-[130px] py-3">
                                Læs mere
                            </button>
                            
                            {/* Contact button*/}
                            <NavLink
                                to="kontakt">
                                <button className="border border-white text-white hover:bg-white hover:text-black transition-02 w-full w-[110px] xs:w-[130px] py-3">
                                    Kontakt
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Pause button */}
                <div className="flex justify-end items-end">
                    <button
                        className="border border-white text-white w-[80px] h-[80px] rounded-full hover:bg-white hover:bg-opacity-25 transition-02"
                        onClick={handlePlayPause}>
                        {isPlaying ? 'Pause' : 'Start'}
                    </button>
                </div>

            </div>

            {/* Header video */}
            <div className="overflow-hidden ">
                <video
                    className="object-cover object-center w-[1366px] h-[450px] scale-110 xs:scale-125 brightness-75"
                    id="main-vid"
                    src="./assets/video.mp4"
                    autoPlay={true}
                    loop={true}
                    muted={true} />
            </div>
        </header>
     );
}

export default Header