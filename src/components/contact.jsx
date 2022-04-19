import { useState, useEffect } from 'react'
import ContactForm from './misc/contact-form'
import AccordionItem from './misc/accodion/item'
import axios from 'axios'

const Contact = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://nightout.webexam-mcdm.dk/api/faq')
            .then(response => {
                console.log(response);
                setData(response.data)
            }
            )
    }, []);

    return (
        <>
            <h2>CONTACT</h2>
            <ContactForm />
            <h3>Ofte stillede spørgsmål</h3>
            {data.map((item) => {
                return (
                    <AccordionItem
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                )
            })}
        </>
    )
}

export default Contact
