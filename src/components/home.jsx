import { useState, useEffect } from 'react'
import Cards from './misc/cards'



const Home = (props) => {





    return (
        <>
            <h2>HOME</h2>
            <button>
                Læs mere
            </button>
            <button>
                Kontakt
            </button>
            <button>
                Stop
            </button>
            <header className=" bg-red-300">
                <div className="max-w-[1200px] h-[400px] overflow-hidden" >
                    <video src="./assets/video.mp4" className="hund" autoPlay={false} loop={true} muted={true} />
                </div>
            </header>

           <Cards />

            </>
    )
}

export default Home
