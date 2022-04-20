import { useState, useEffect } from 'react'
import DrinksItem from './drinks/item';
import axios from 'axios'

const Drinks = (props) =>  {
    
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://nightout.webexam-mcdm.dk/api/drinks')
            .then(response => {
                console.log(response);
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <section className=" pb-6 px-6">
            <h2>DRINKS</h2>
            {
                data.map((item) => {
                    return (
                        <DrinksItem 
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    )
                })
            }
        </section >
    );
}

export default Drinks
