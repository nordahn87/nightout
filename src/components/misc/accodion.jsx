import { useState, useEffect } from 'react'
import AccordionItem from './accodion/item'
import axios from 'axios'

const Accodion = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://nightout.webexam-mcdm.dk/api/faq')
            .then(response => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <section className="bg-black p-4">
            <h2 className="text-white text-2xl font-bold mb-4">Ofte stil­le­de spørgs­mål</h2>
            {
                data.map((item) => {
                    return (
                        <AccordionItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                        />
                    )
                })
            }
        </section >
    );
}

export default Accodion
