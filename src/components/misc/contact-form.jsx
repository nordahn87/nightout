import { useState, useEffect, useCallback } from 'react'
import { UserIcon } from '../misc/svg'
import axios from 'axios';

const ContactForm = (props) => {

    const [emailValue, setEmailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [messageValue, setMessageValue] = useState('')
    const [errorDialogEmail, setErrorDialogEmail] = useState('')
    const [errorDialogPhone, setErrorDialogPhone] = useState('')
    const [errorDialogMessage, setErrorDialogMessage] = useState('')
    const [succesDialog, setSuccesDialog] = useState('')

    // Handles form on submit
    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        if (handleValidation() === false) {
            return false
        }

        axios.post('https://modelin.webexam-mcdm.dk/api/contacts', {
            email: emailValue,
            phone: phoneValue,
            message: messageValue,
        })
            .then((response) => {
                console.log(response);
                handleReset()
                setSuccesDialog('Beskeden blev sendt')
            })

            .catch((error) => {
                console.log(error);
            })

    }, [emailValue, messageValue, phoneValue])

    // Reset input
    const handleReset = () => {
        setEmailValue('')
        setPhoneValue('')
        setMessageValue('')
        setErrorDialogEmail('')
        setErrorDialogPhone('')
        setErrorDialogMessage('')
    }

    // Validate input
    const handleValidation = useCallback(() => {
        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let isValid = true

        if (emailValue === '') {
            setErrorDialogEmail("Du mangler at udfylde email")
            isValid = false
        } else if (!regex.test(emailValue)) {
            setErrorDialogEmail("Indsæt venligst en gyldig email - Husk '@'")
            isValid = false
        } else {
            setErrorDialogEmail('')
        }

        if (phoneValue !== '' && phoneValue.length != 8) {
            setErrorDialogPhone("Indsæt venligst er gyldigt telefonnummer")
            isValid = false
        } else {
            setErrorDialogPhone('')
        }

        if (messageValue === '') {
            setErrorDialogMessage("Skriv venligst en besked")
            isValid = false
        } else {
            setErrorDialogMessage('')
        }

        return isValid
    }, [emailValue, messageValue, phoneValue])

    return (
        <>
            <form noValidate onSubmit={handleSubmit} className="bg-blue-200 grid gap-4 p-6 sm:p-8">
                <input
                    className="p-4 rounded-full"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                />
                <p className="text-red-700">{errorDialogEmail}</p>

                <input
                    className="p-4 rounded-full"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Telefon*"
                    value={phoneValue.replace(/[^\d]/g, "")}
                    onChange={(e) => setPhoneValue(e.target.value)}
                />
                <p className="text-red-700">{errorDialogPhone}</p>

                <textarea
                    className="p-4 h-[200px]  resize-none rounded-2xl"
                    id="message"
                    name="message"
                    placeholder="Besked"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                />
                <p className="text-red-700">{errorDialogMessage}</p>


                <button className="bg-green-500 w-[100px] px-6 py-3"
                    type="submit"
                    value="Submit">
                    Submit
                </button>
            </form>
            <h3>{succesDialog}</h3>
        </>
    );
}

export default ContactForm