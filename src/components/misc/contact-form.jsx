import { useState, useCallback } from 'react'
import axios from 'axios';

const ContactForm = (props) => {

    const [firstNameValue, setFirstNameValue] = useState('')
    const [lastNameValue, setLastNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [messageValue, setMessageValue] = useState('')
    const [errFirstName, setErrFirstName] = useState('')
    const [errLastName, setErrLastName] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errPhone, setErrPhone] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const [dialogText, setDialogText] = useState('')

    // Validate input
    const handleValidation = useCallback(() => {
        const regex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let isValid = true

        if (firstNameValue === '') {
            setErrFirstName("Indtast fornavn")
            isValid = false
        } else {
            setErrFirstName('')
        }

        if (lastNameValue === '') {
            setErrLastName("Indtast efternavn")
            isValid = false
        } else {
            setErrLastName('')
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

        // if (phoneValue.length !== 8) {
        //     setErrPhone("Indtast gyldig telefonnummer")
        //     isValid = false
        // } else {
        //     setErrPhone('')
        // }

        if (phoneValue.length < 8) {
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

        if (isValid === false) {
            setDialogText("Udfyld manglende felter")
        } else {
            setDialogText('')
        }

        return isValid
    }, [firstNameValue, lastNameValue, emailValue, phoneValue, messageValue])

    // Handles form on submit
    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        if (handleValidation() === false) {
            return false
        }

        // POST input value to API
        axios.post('https://nightout.webexam-mcdm.dk/api/contact', {
            firstname: firstNameValue,
            lastname: lastNameValue,
            email: emailValue,
            phone: phoneValue,
            message: messageValue,
        })
            .then((response) => {
                console.log(response.data)
                if (response.status === 201) {
                    handleReset()
                    setDialogText('Beskeden blev sendt')
                    setTimeout(() => {
                        setDialogText('')
                    }, 3000)
                } else {
                    setDialogText('Hov der skete en fejl, prøv igen')
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }, [firstNameValue, lastNameValue, emailValue, phoneValue, messageValue, handleValidation])

    // Reset input
    const handleReset = () => {
        setFirstNameValue('')
        setLastNameValue('')
        setEmailValue('')
        setPhoneValue('')
        setMessageValue('')
    }

    return (
        <form noValidate onSubmit={handleSubmit} className={props.className}>
            <h2 className="text-white text-2xl font-bold mb-4">Smid en besked</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Firstname input */}
                <div>
                    <input
                        className={(errFirstName !== '' ? 'error' : '') + ' p-3 w-full'}
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Fornavn"
                        value={firstNameValue}
                        onChange={(e) => {setFirstNameValue(e.target.value)}}
                    />
                    <p className="text-red-500 font-bold">{errFirstName}</p>
                </div>

                {/* Lastname input */}
                <div>
                    <input
                        className={(errLastName !== '' ? 'error' : '') + ' p-3 w-full'}
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Efternavn"
                        value={lastNameValue}
                        onChange={(e) => setLastNameValue(e.target.value)}
                    />
                    <p className="text-red-500 font-bold">{errLastName}</p>
                </div>

                {/* Email input */}
                <div>
                    <input
                        className={(errEmail !== '' ? 'error' : '') + ' p-3 w-full'}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <p className="text-red-500 font-bold">{errEmail}</p>
                </div>

                {/* Phone input */}
                <div>
                    <input
                        className={(errPhone !== '' ? 'error' : '') + ' p-3 w-full'}
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Telefonnummer"
                        maxLength="8"
                        value={phoneValue.replace(/[^\d]/g, "")}
                        onChange={(e) => setPhoneValue(e.target.value)}
                    />
                    <p className="text-red-500 font-bold">{errPhone}</p>
                </div>
            </section>

            {/* Message input */}
            <div className="my-4">
                <textarea
                    className={(errMessage !== '' ? 'error' : '') + ' flex p-3 h-[110px] w-full resize-none'}
                    id="message"
                    name="message"
                    placeholder="Besked"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                />
                <p className="text-red-500 font-bold">{errMessage}</p>
            </div>

            {/* Submit button */}
            <div className="flex flex-col xs:flex-row items-center gap-4">
                <button className="bg-white w-full xs:w-[140px] py-3"
                    type="submit"
                    value="Submit">
                    Send besked
                </button>
                <p className="text-white text-lg sm:text-xl font-bold">{dialogText}</p>
            </div>
        </form>
    );
}

export default ContactForm
