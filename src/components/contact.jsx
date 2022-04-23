
import ContactForm from './misc/contact-form'
import Accodion from './misc/accodion'

const Contact = () => {
    return (
        <main>
            {/* Form wrapper */}
            <div className="relative flex items-center justify-center sm:h-[550px] mb-16 overflow-hidden ">
                <div className="absolute max-w-[1366px] mx-auto w-full flex items-center pr-6">
                    <ContactForm className="bg-black px-4 p-6  sm:p-8 max-w-[800px] w-full " />
                </div>

                {/* Background image cover */}
                <div className="w-full h-full grid grid-cols-12 ">
                    <div className="col-span-4"></div>
                    <div className="col-span-8">
                        <img
                            src="./assets/contact-bg.jpg"
                            alt="Billede af en person i kostume, klædt ud som en kat"
                            className="object-cover w-full h-[800px]"></img>
                    </div>
                </div>
            </div>

            {/* Accodion */}
            <section className="max-w-[1366px] mx-auto">
                <Accodion />
            </section>
        </main>
    )
}

export default Contact
