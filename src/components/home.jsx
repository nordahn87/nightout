import { useState, useEffect } from 'react'
import AccordionItem from './misc/accodion/item'
import AccordionData from '../.data/accordion.json'
import axios from 'axios'

const Home = (props) => {

    const [accordionData, setAccordionData] =useState()

    useEffect(() => {
        axios.get('./.data/accordion.json')
            .then((response) => {
                console.log(response.data);
            });
    }, []);

    return (
        <>
            <h2>HOME</h2>
            <AccordionItem />
        </>
    )
}

export default Home
