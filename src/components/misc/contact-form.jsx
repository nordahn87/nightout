import { useState, useEffect, useCallback } from 'react'
import axios from 'axios';

const ContactForm = () => {

    const [firstNameValue, setFirstNameValue] = useState('')
    const [lastNameValue, setLastNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [messageValue, setMessageValue] = useState('')


    const [errFirstName, setErrFirstName] = useState('')
    const [errLastNameValue, setErrLastNameValue] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errPhone, setErrPhone] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const [succes, setSucces] = useState('')

    // Handles form on submit
    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        if (handleValidation() === false) {
            return false
        }

        axios.post('https://nightout.webexam-mcdm.dk/api/contact', {
            firstname: firstNameValue,
            lastname: lastNameValue,
            email: emailValue,
            phone: phoneValue,
            message: messageValue,
        })
            .then((response) => {
                console.log(response);
                handleReset()
                setSucces('Beskeden blev sendt')
            })
            .catch((error) => {
                console.log(error);
            })

    }, [firstNameValue, lastNameValue, emailValue, phoneValue, messageValue])

    // Reset input
    const handleReset = () => {
        setEmailValue('')
        setPhoneValue('')
        setMessageValue('')
    }

    // Validate input
    const handleValidation = useCallback(() => {
        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let isValid = true

        if (firstNameValue === '') {
            setErrFirstName("Indtast fornavn")
            isValid = false
        } else {
            setErrFirstName('')
        }

        if (lastNameValue === '') {
            setErrLastNameValue("Indtast efternavn")
            isValid = false
        } else {
            setErrLastNameValue('')
        }

        if (emailValue === '') {
            setErrEmail("Indtast email")
            isValid = false
        } else if (!regex.test(emailValue)) {
            setErrEmail("Indtast gyldig email")
            isValid = false
        } else {
            setErrEmail('')
        }

        if (phoneValue.length != 8) {
            setErrPhone("Indtast gyldig telefonnummer")
            isValid = false
        } else {
            setErrPhone('')
        }

        if (messageValue === '') {
            setErrMessage("Indtast en besked")
            isValid = false
        } else {
            setErrMessage('')
        }

        return isValid
    }, [firstNameValue, lastNameValue, emailValue, phoneValue, messageValue])

    return (
        <>
            <form noValidate onSubmit={handleSubmit} className="p-6 bg-black">
                <h2 className="text-white text-2xl font-bold mb-4">Smid en besked</h2>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <input
                            className="p-4 w-full"
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="Fornavn"
                            value={firstNameValue}
                            onChange={(e) => setFirstNameValue(e.target.value)}
                        />
                        <p className="text-red-500 font-bold">{errFirstName}</p>
                    </div>

                    <div>
                        <input
                            className="p-4 w-full"
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Efternavn"
                            value={lastNameValue}
                            onChange={(e) => setLastNameValue(e.target.value)}
                        />
                        <p className="text-red-500 font-bold">{errLastNameValue}</p>
                    </div>

                    <div>
                        <input
                            className="p-4 w-full"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                        />
                        <p className="text-red-500 font-bold">{errEmail}</p>
                    </div>

                    <div>
                        <input
                            className="p-4 w-full"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Telefonnummer"
                            value={phoneValue.replace(/[^\d]/g, "")}
                            onChange={(e) => setPhoneValue(e.target.value)}
                        />
                        <p className="text-red-500 font-bold">{errPhone}</p>
                    </div>
                </section>

                <div className="my-4">
                    <textarea
                        className="p-4 h-[200px] w-full resize-none"
                        id="message"
                        name="message"
                        placeholder="Besked"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                    />
                    <p className="text-red-500 font-bold">{errMessage}</p>
                </div>
                <div className="flex items-center gap-8">
                    <button className="bg-white w-[200px] px-6 py-3"
                        type="submit"
                        value="Submit">
                        Send besked
                    </button>
                    <p className="text-green-500 font-bold">{succes}</p>
                </div>
            </form>

        </>
    );
}

export default ContactForm