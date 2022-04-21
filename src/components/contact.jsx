import ContactForm from './misc/contact-form'
import Accodion from './misc/accodion'

const Contact = () => {
    return (
        <section>
            <div className="w-full flex flex-col justify-center mb-12 sm:mb-20 h-[600px]">
                <div className="my-8">
                    <ContactForm />
                </div>
            </div>

            <div className="absolute right-0 top-[72px] overflow-hidden w-[65%] sm:w-[72%]  lg:w-[70%] h-[600px] hund">
                <img src="./assets/contact-bg.jpg" className='object-cover h-[900px] lg:h-[1000px] xl:h-[1100px] w-full' />
            </div>
            <Accodion />
        </section>
    )
}

export default Contact
